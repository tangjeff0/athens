(ns athens.self-hosted.client
  "Self-Hosted Mode connector."
  (:require
    [athens.common-events        :as common-events]
    [athens.common-events.schema :as schema]
    [athens.db                   :as db]
    [clojure.set                 :as set]
    [cognitect.transit           :as transit]
    [com.stuartsierra.component  :as component]
    [datascript.core             :as d]
    [re-frame.core               :as rf]))


;; TODO: make configurable
(def ws-url "ws://localhost:3010/ws")


(defonce ^:private ws-connection (atom nil))


(declare open-handler)
(declare message-handler)
(declare close-handler)


(defn- connect-to-self-hosted!
  [url]
  (js/console.log "WS Client Connecting to:" url)
  (when url
    (doto (js/WebSocket. url)
      (.addEventListener "open" open-handler)
      (.addEventListener "message" message-handler)
      (.addEventListener "close" close-handler))))


(def ^:private send-queue (atom []))
(def ^:private awaiting-response (atom {}))


(def ^:private reconnect-timer (atom nil))


(defn- await-response!
  [{:event/keys [id] :as data}]
  (js/console.log "WSClient awaiting response:" id)
  (swap! awaiting-response assoc id data))


(defn- reconnecting?
  "Checks if WebSocket is awaiting reconnection."
  []
  (some? @reconnect-timer))


(defn- delayed-reconnect!
  ([url]
   (delayed-reconnect! url 3000))
  ([url delay-ms]
   (js/console.log "WSClient scheduling reconnect in" delay-ms "ms to" url)
   (let [timer-id (js/setTimeout (fn []
                                   (reset! reconnect-timer nil)
                                   (connect-to-self-hosted! url))
                                 delay-ms)]
     (reset! reconnect-timer timer-id))))


(defn- close-reconnect-timer!
  []
  (when-let [timer-id @reconnect-timer]
    (js/clearTimeout timer-id)))


(defn open?
  "Checks if `connection` is open.
  If no args version called, `ws-connection` connection is checked.

  To close the connection stop the component."

  ([]
   (open? @ws-connection))

  ([connection]
   (= (.-OPEN js/WebSocket)
      (.-readyState connection))))


(defn send!
  "Sends data over open WebSocket.
  1st argument `connection` is optional, default is `ws-connection`.
  `data` is expected to be JSON serializable structure."

  ([data]
   (send! @ws-connection data))

  ([connection data]
   (if (schema/valid-event? data)
     (if (open? connection)
       (do
         (js/console.debug "WSClient sending to server:" (pr-str data))
         (await-response! data)
         (.send connection (transit/write (transit/writer :json) data))
         {:result :sent})
       (do
         (js/console.warn "WSClient not open")
         (if (reconnecting?)
           (do
             (js/console.info "WSClient already reconnecting, queued.")
             (swap! send-queue (fnil conj []) data)
             {:result :queued
              :reason :client-already-reconnecting})
           (do
             (js/console.warn "WSClient closed & not reconnecting. Reconnecting & queued.")
             (delayed-reconnect! (.-url connection) 0)
             (swap! send-queue (fnil conj []) data)
             {:result :queued
              :reason :client-started-reconnecting}))))
     (let [explanation (schema/explain-event data)]
       (js/console.warn "Tried to send invalid event. Explanation: " (pr-str explanation))
       {:result :rejected
        :reason :invalid-event-schema}))))


(defn- open-handler
  [event]
  (js/console.log "WSClient Connected:" event)
  (let [connection (.-target event)
        ;; TODO fetch real last-tx
        last-tx    1]
    (reset! ws-connection connection)
    (send! connection (common-events/build-presence-hello (:name @(rf/subscribe [:user]))
                                                          last-tx))
    (when (seq @send-queue)
      (js/console.log "WSClient sending queued packets #" (count @send-queue))
      (doseq [data @send-queue]
        (send! connection data))
      (reset! send-queue []))))


(defn- awaited-response-handler
  [req-event {:event/keys [id status] :as packet}]
  (js/console.log "WSClient: response " (pr-str packet)
                  "to awaited event" (pr-str req-event))
  (swap! awaiting-response dissoc id)
  ;; is valid response?
  (if (schema/valid-event-response? packet)
    (do
      (js/console.debug "Received valid response.")
      (condp = status
        :accepted
        (let [{:accepted/keys [tx-id]} packet]
          (js/console.log "Event" id "accepted in tx" tx-id)
          (rf/dispatch [:remote/accept-event {:event-id id
                                              :tx-id    tx-id}]))
        :rejected
        (let [{:reject/keys [reason data]} packet]
          (js/console.warn "Event" id "rejected. Reason:" reason ", data:" (pr-str data))
          (rf/dispatch [:remote/reject-event {:event-id id
                                              :reason   reason
                                              :data     data}]))))
    (let [explanation (schema/explain-event-response packet)]
      (js/console.warn "Received invalid response:" (pr-str explanation))
      (rf/dispatch [:remote/fail-event {:event-id id
                                        :reason   explanation}]))))


(defn- build-addition-tx
  [tempids e-id additions]
  (when (seq additions)
    (let [e->tmp (set/map-invert tempids)]
      (reduce (fn [acc {:keys [_e a v _tx _added]}]
                (assoc acc a (if (= :block/children a)
                               (get e->tmp v v)
                               v)))
              {:db/id        (or (get e->tmp e-id)
                                 [:remote/db-id e-id])
               :remote/db-id e-id}
              additions))))


(defn- build-retraction-tx
  [e-id retractions]
  (when (seq retractions)
    (reduce (fn [acc {:keys [_e a v _tx _added]}]
              (conj acc [:db/retract [:remote/db-id e-id] a (if (= :block/children a)
                                                              [:remote/db-id v]
                                                              v)]))
            []
            retractions)))


(defn- tx-log->tx
  [tempids [entity-id tx-log]]
  (js/console.debug ::tx-log->tx entity-id (pr-str tx-log))
  (let [additions      (filter :added tx-log)
        retractions    (remove :added tx-log)
        additions-tx   (build-addition-tx tempids entity-id additions)
        retractions-tx (build-retraction-tx entity-id retractions)]
    (js/console.debug ::tx-log->tx
                      :+ (count additions)
                      :- (count retractions)
                      :additions-tx (pr-str additions-tx)
                      :retractions-tx (pr-str retractions-tx))
    (apply conj
           [additions-tx]
           retractions-tx)))


(defn- reconstruct-tx-from-log
  [{:keys [tx-data tempids] :as args}]
  (js/console.debug "Reconstructing tx from" (pr-str args))
  (->> tx-data
       (remove #(= :db/txInstant (:a %)))
       (group-by :e)
       (mapcat (partial tx-log->tx tempids))
       (remove #(nil? (second %)))))


(defn- ds-tx-log-handler
  [args]
  (let [txs (reconstruct-tx-from-log args)]
    (js/console.debug "Reconstructed txs:" (pr-str txs))
    (let [remote-tx-id (get-in args [:tempids :db/current-tx])
          _result      (d/transact! db/dsdb txs)]
      (rf/dispatch [:remote/last-seen-tx! remote-tx-id])
      (js/console.log "Transacted locally remote tx-id:" remote-tx-id))))


(defn- presence-online-handler
  [args]
  (let [username (:username args)]
    ;; TODO manage connected users in re-frame
    (js/console.log "User online:" username)))


(defn- server-event-handler
  [{:event/keys [id last-tx type args] :as packet}]
  (js/console.log "<-" id ", last-tx:" last-tx ", type:" type)
  (js/console.debug "WSClient: server event:" (pr-str packet))
  (if (schema/valid-server-event? packet)

    (condp = type
      :datascript/tx-log (ds-tx-log-handler args)
      :presence/online   (presence-online-handler args))

    (js/console.warn "TODO invalid server event" (pr-str (schema/explain-server-event packet)))))


(def ^:private datom-reader
  (transit/read-handler
    (fn [[e a v tx added]]
      {:e     e
       :a     a
       :v     v
       :tx    tx
       :added added})))


(defn- message-handler
  [event]
  (let [packet    (->> event
                       .-data
                       (transit/read
                         (transit/reader
                           :json
                           {:handlers
                            {:datom datom-reader}})))
        {:event/keys
         [id]}    packet
        req-event (get @awaiting-response id)]
    (if req-event
      (awaited-response-handler req-event packet)
      (server-event-handler packet))))


(defn- remove-listeners!
  [connection]
  (doto connection
    (.removeEventListener "close" close-handler)
    (.removeEventListener "message" message-handler)
    (.removeEventListener "open" open-handler)))


(defn- close-handler
  [event]
  (js/console.log "WSClient Disconnected:" event)
  (let [connection (.-target event)
        url        (.-url connection)]
    (remove-listeners! connection)
    (delayed-reconnect! url)))


(defrecord WSClient
  [url]

  component/Lifecycle

  (start
    [component]
    (js/console.log "WSClient starting with url:" url)
    (let [connection (connect-to-self-hosted! url)]
      (js/console.debug "WSClient connection started...")
      (reset! ws-connection connection)
      component))


  (stop
    [component]
    (js/console.log "WSClient stopping for url:" url)
    (when-let [connection @ws-connection]
      (close-reconnect-timer!)
      (remove-listeners! connection)
      (.close connection)
      (js/console.debug "WSClient closed connection")
      (reset! ws-connection nil)
      component)))


(defn new-ws-client
  [url]
  (map->WSClient {:url url}))


;; REPL Testing
(comment

  ;; define a client
  (def client (new-ws-client ws-url))

  ;; start a client
  (component/start client)

  ;; check if open?
  (open?)

  ;; try to send an invalid message
  (send! {:some :message})
  ;; => {:result :rejected, :reason :invalid-event-schema}

  ;; send a `:presence/hello` event
  (send! {:event/id      "test-id"
          :event/last-tx 0
          :event/type    :presence/hello
          :event/args    {:username "Bob's your uncle"}})
  ;; => {:result :sent}

  ;; send a `:datascript/paste-verbatim` event
  (send! {:event/id      "test-id2"
          :event/last-tx 1
          :event/type    :datascript/paste-verbatim
          :event/args    {:uid   "invalid-uid"
                          :text  "pasted text"
                          :start 0
                          :value ""}})

  ;; send a `create-page` event
  (send! (common-events/build-page-create-event
          1
          "test-uid-6"
          "Test Page Title 6")))


(comment
  ;; testing tx reconstruction
  

  ;; Sample data from tx-log
  (def args
    {:tx-data [{:e 536870941, :a :db/txInstant, :v #inst "2021-06-07T10:19:58.568-00:00", :tx 536870941, :added true}
               {:e 42, :a :node/title, :v "Test Page Title 2", :tx 536870941, :added true}
               {:e 42, :a :block/uid, :v "test-uid-2", :tx 536870941, :added true}
               {:e 43, :a :block/string, :v "", :tx 536870941, :added true}
               {:e 43, :a :block/uid, :v "ba7acf5f3", :tx 536870941, :added true}
               {:e 43, :a :block/order, :v 0, :tx 536870941, :added true}
               {:e 43, :a :block/open, :v true, :tx 536870941, :added true}
               {:e 43, :a :create/time, :v 1623061198507, :tx 536870941, :added true}
               {:e 43, :a :edit/time, :v 1623061198507, :tx 536870941, :added true}
               {:e 42, :a :block/children, :v 43, :tx 536870941, :added true}
               {:e 42, :a :create/time, :v 1623061198507, :tx 536870941, :added true}
               {:e 42, :a :edit/time, :v 1623061198507, :tx 536870941, :added true}]
     :tempids {-1             42
               -2             43
               :db/current-tx 536870941}})

  (def retract-args
    {:tx-data [{:e 536870942, :a :db/txInstant, :v #inst "2021-06-07T15:03:29.349-00:00", :tx 536870942, :added true}
               {:e 43, :a :block/open, :v true, :tx 536870942, :added false}
               {:e 43, :a :block/order, :v 0, :tx 536870942, :added false}
               {:e 43, :a :block/string, :v "", :tx 536870942, :added false}
               {:e 43, :a :block/uid, :v "ba7acf5f3", :tx 536870942, :added false}
               {:e 43, :a :create/time, :v 1623061198507, :tx 536870942, :added false}
               {:e 43, :a :edit/time, :v 1623061198507, :tx 536870942, :added false}
               {:e 42, :a :block/children, :v 43, :tx 536870942, :added false}]
     :tempids {:db/current-tx 536870942}})
  
  (reconstruct-tx-from-log args)
  
  )

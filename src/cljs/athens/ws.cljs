(ns athens.ws)

(defonce ws-chan (atom nil))

(defn receive-transit-msg!
  [update-fn]
  (fn [msg]
    (update-fn
      (->> msg
           .-data
           datascript.transit/read-transit-str))))


(defn make-websocket! [url receive-handler]
  (println "attempting to connect websocket")
  (if-let [chan (js/WebSocket. url)]
    (do
      (set! (.-onmessage chan) (receive-transit-msg! receive-handler))
      (reset! ws-chan chan)
      (println "Websocket connection established with: " url))
    (throw (js/Error. "Websocket connection failed!"))))


(defn update-messages! [message]
  (prn "UPDATE" message)
  #_(case (:type message)
      :tx (p/transact! conn (:message message))
      ;; FIX: reads transit str twice
      :connect (let [db (dt/read-transit-str (:message message))]
                 (d/reset-conn! conn db))))

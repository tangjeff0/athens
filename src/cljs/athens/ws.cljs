(ns athens.ws
  (:require
    [athens.athens-datoms :as athens-datoms]
    [athens.db :as db]
    [athens.util :as util]
    [datascript.core :as d]
    [datascript.transit :as dt :refer [write-transit-str]]
    [day8.re-frame.async-flow-fx]
    [goog.functions :refer [debounce]]
    [re-frame.core :as rf :refer [reg-event-db reg-event-fx inject-cofx reg-fx dispatch dispatch-sync subscribe reg-sub]]))



;; Websockets

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


(defn update-messages! [data]
  (prn "UPDATE" data)
  (case (:type data)
    ;;:tx (p/transact! conn (:message message))
    :connect (let [db (dt/read-transit-str (:message data))]
               (dispatch [:reset-conn db]))))


;; Re-frame


#_(rf/reg-event-fx
    :ws/boot
    (fn [_ _]
      {:async-flow {:first-dispatch [:local-storage/get-db-filepath]
                    :rules          [{:when        :seen?
                                      :events      :db/update-filepath
                                      :dispatch-fn (fn [[_ filepath]])}

                                     ;; if first time, go to Daily Pages and open left-sidebar

                                     {:when       :seen-any-of?
                                      :events     [:fs/create-new-db :reset-conn]
                                      :dispatch-n [[:db/retract-athens-pages]
                                                   [:db/transact-athens-pages]
                                                   [:loading/unset]]
                                      :halt?      true}]}}))

(rf/reg-event-fx
  :ws/boot
  (fn [_ _]
    (make-websocket! (str "ws://" "2b2bc78ecc54.ngrok.io" #_"localhost:3001" "/ws") update-messages!)))

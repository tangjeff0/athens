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


;; Re-frame

(rf/reg-event-fx
  :ws/on-connect
  (fn [_ [_ data]]
    (let [db (dt/read-transit-str (:message data))]
      (dispatch [:reset-conn db]))))


(defn update-messages! [data]
  (prn "UPDATE" data)
  (case (:type data)
    ;;:tx (p/transact! conn (:message message))
    :connect (dispatch [:ws/on-connect data])))


(rf/reg-event-fx
  :ws/boot
  (fn [_ _]
    {:db         db/rfdb
     :async-flow {:first-dispatch [:ws/make-ws]
                  :rules          [{:when     :seen?
                                    :events   :ws/on-connect
                                    :dispatch [:loading/unset]
                                    :halt?    true}]}}))


(rf/reg-event-fx
  :ws/make-ws
  (fn [_ _]
    (make-websocket! (str "ws://" "2b2bc78ecc54.ngrok.io" #_"localhost:3001" "/ws") update-messages!)))

(ns athens.ws
  (:require
    [athens.athens-datoms :as athens-datoms]
    [athens.db :as db]
    [athens.util :as util]
    [datascript.core :as d]
    [datascript.transit :as dt :refer [write-transit-str]]
    [day8.re-frame.async-flow-fx]
    [goog.functions :refer [debounce]]
    [posh.reagent :as p]
    [re-frame.core :as rf :refer [reg-event-db reg-event-fx inject-cofx reg-fx dispatch dispatch-sync subscribe reg-sub]]))


;; Websockets

(defonce ws-chan (atom nil))


(defn receive-transit-msg!
  [update-fn]
  (fn [msg]
    (update-fn
      #_(->> msg
             .-data
             datascript.transit/read-transit-str))))


(defn send-transit-msg!
  [msg]
  (if @ws-chan
    (.send @ws-chan
           {:msg msg})
           ;;(dt/write-transit-str msg))
    (throw (js/Error. "Websocket is not available!"))))


(defn make-websocket!
  [url receive-handler]
  (println "attempting to connect websocket")
  (if-let [chan (js/WebSocket. url)]
    (do
      (set! (.-onmessage chan) receive-handler #_(receive-transit-msg! receive-handler))
      (reset! ws-chan chan)
      (println "Websocket connection established with: " url))
    (throw (js/Error. "Websocket connection failed!"))))


;; Re-frame

;;(rf/reg-event-fx
;;  :ws/on-connect
;;  (fn [_ [_ data]]
;;    (let [db (:message data)]
;;      (dispatch [:reset-conn db]))))


(defn update-messages!
  [data]
  (prn "UPDATE" data)
  (case (:type data)
    :tx  (p/transact! db/dsdb (:message data))
    :connect (dispatch [:ws/on-connect data])
    (throw (js/Error. data))))


(rf/reg-event-fx
  :boot/ws
  (fn [_ _]
    {:dispatch [:ws/make-ws]}))


(defn RECEIVE
  [msg]
  (js/console.log "RECEIVE" msg))

(rf/reg-event-fx
  :ws/make-ws
  (fn [_ _]
    (let [ws-prefix (if (= (.. js/window -location -protocol) "https:")
                      "wss://"
                      "ws://")]
      (make-websocket! (str ws-prefix "f5dc30b8f584" ".ngrok.io" "/ws") RECEIVE))))


(rf/reg-event-fx
  :ws/tx
  (fn [_ [_ tx-data]]
    (send-transit-msg! {:type :tx :message tx-data})))

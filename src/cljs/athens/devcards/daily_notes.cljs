(ns athens.devcards.daily-notes
  (:require
    ["@material-ui/icons" :as mui-icons]
    [athens.db :as db]
    [athens.style :refer [DEPTH-SHADOWS]]
    [athens.devcards.node-page :refer [node-page-component]]
    [cljsjs.react]
    [cljsjs.react.dom]
    [clojure.string :as string]
    [devcards.core :refer-macros [defcard-rg]]
    [garden.selectors :as selectors]
    [goog.functions :refer [debounce]]
    [posh.reagent :refer [pull pull-many q]]
    [re-frame.core :refer [dispatch subscribe]]
    [reagent.core :as r]
    [stylefy.core :as stylefy :refer [use-style]]
    [tick.alpha.api :as t]
    [tick.locale-en-us]))

;;; Styles


(stylefy/keyframes "content-appears"
                   [:from
                     {:opacity "0"}]
                   [:to
                    {:opacity "1"}])


(def daily-notes-area-style
  {:min-height "calc(100vh + 1px)"
   :display        "flex"
   :padding        "1.25rem 0"
   :flex           "1 1 100%"
   :flex-direction "column"})


(def daily-notes-page-style
  {:box-shadow (:16 DEPTH-SHADOWS)
   :margin "1.25rem 2.5rem"
   :padding "1rem 2rem"
   :animation "content-appears 1s"
   :border-radius "8px"
   :min-height "calc(100vh - 10rem)"})
 

(def daily-notes-notional-page-style
  (merge daily-notes-page-style {:box-shadow "none"
                                 :opacity "0.5"}))
 


;;; Helpers




(def US-format (t/formatter "MM-dd-yyyy"))


(def title-format (t/formatter "LLLL dd, yyyy"))


(defn date-string
  [ts]
  (if (< ts 1) ;; TODO why this predicate?
    [:span "(unknown date)"]
    (as-> (js/Date. ts) x
      (t/instant x)
      (t/date-time x)
      (t/format (t/formatter "LLLL MM, yyyy h':'ma") x)
      (string/replace x #"AM" "am")
      (string/replace x #"PM" "pm"))))


(defn get-day
  "Returns today's date or a date OFFSET days before today"
  ([] (get-day 0))
  ([offset]
   (let [day (t/-
               (t/date-time)
               (t/new-duration offset :days))]
     {:uid   (t/format US-format day)
      :title (t/format title-format day)})))


(defn scroll-daily-notes
  [e]
  (let
   [rel-bottom    (.. js/document -documentElement getBoundingClientRect -bottom)
    scroll-height     (.. js/document -documentElement -scrollHeight)
    scroll-top     (.. js/document -documentElement -scrollTop)
    client-height (.. js/document -documentElement -clientHeight)
    daily-notes @(subscribe [:daily-notes])
    dist-to-bottom (- rel-bottom client-height)]
    (prn e 
        ;;  "offset-top:" offset-top
         " dist-to-bottom: " (- rel-bottom client-height)
         " scroll-height: " scroll-height
         " scroll-top: " scroll-top
        ;;  " rel-bottom:" rel-bottom
        ;;  " client-height:" client-height
         )
    ;; (when (< rel-bottom (+ client-height 100))
    (when (< dist-to-bottom 100)
      (prn "DISPATCH")
      (dispatch [:next-daily-note (get-day (count daily-notes))]))))

(defn db-scroll-daily-notes [e]
  (debounce (scroll-daily-notes e) 500))


;;; Scroll

;;; Components

(defn daily-notes-panel
  []
  (let [note-refs (subscribe [:daily-notes])]
    (when (empty? @note-refs)
      (dispatch [:next-daily-note (get-day)]))
    (fn []

      (let [notes (pull-many db/dsdb
                             '[*]
                    ;;'[:db/id :block/uid :block/string :block/open :block/order {:block/children ...}]
                             (map (fn [x] [:block/uid x]) @note-refs))]
        [:div#daily-notes (use-style daily-notes-area-style)
         (doall
          (for [{:keys [block/uid]} @notes]
            ^{:key uid}
            [:<>
             [:div (use-style daily-notes-page-style)
              [node-page-component [:block/uid uid]]]]))

         [:div (use-style daily-notes-notional-page-style)
          [:h1 "Loading page..."]]]))))


;;; Devcards

(defcard-rg Daily-Notes
  [daily-notes-panel])

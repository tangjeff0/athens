(ns athens.style
  (:require
    [garden.color :refer [opacify hex->hsl]]
    [stylefy.core :as stylefy]))


;; (def COLORS
;;   {:link-color         "#0075E1"
;;    :highlight-color    "#F9A132"
;;    :warning-color      "#D20000"
;;    :confirmation-color "#009E23"
;;    :header-text-color  "#322F38"
;;    :body-text-color    "#433F38"
;;    :border-color       "hsla(32, 81%, 10%, 0.08)"
;;    :background-plus-2  "#FFFFFF"
;;    :background-plus-1  "#FFFFFF"
;;    :background-color   "#FFFFFF"
;;    :background-minus-1 "#FAF8F6"
;;    :background-minus-2 "#EFEDEB" })


(def COLORS
  {:link-color         "#2399E7"
   :highlight-color    "#FBBE63"
   :warning-color      "#DE3C21"
   :confirmation-color "#189E36"
   :header-text-color  "#BABABA"
   :body-text-color    "#AAA"
   :border-color       "hsla(32, 81%, 90%, 0.08)"
   :background-minus-2  "#111"
   :background-minus-1  "#151515"
   :background-color   "#1A1A1A"
   :background-plus-1 "#222"
   :background-plus-2 "#333"})


(def HSL-COLORS
  (reduce-kv #(assoc %1 %2 (hex->hsl %3)) {} COLORS))


(def DEPTH-SHADOWS
  {:4                  "0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.1)"
   :8                  "0px 3.2px 7.2px rgba(0, 0, 0, 0.13), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1)"
   :16                 "0px 6.4px 14.4px rgba(0, 0, 0, 0.13), 0px 1.2px 3.6px rgba(0, 0, 0, 0.1)"
   :64                 "0px 24px 60px rgba(0, 0, 0, 0.15), 0px 5px 12px rgba(0, 0, 0, 0.1)"})


(def OPACITIES
  {:opacity-lower  0.10
   :opacity-low    0.25
   :opacity-med    0.50
   :opacity-high   0.75
   :opacity-higher 0.85})


;; Based on Bootstrap's excellent Z-index set
(def ZINDICES
  {:zindex-dropdown          1000
   :zindex-sticky            1020
   :zindex-fixed             1030
   :zindex-modal-backdrop    1040
   :zindex-modal             1050
   :zindex-popover           1060
   :zindex-tooltip           1070})


;; Color
;; Provide color keyword
;; (optional) Provide alpha value, either keyword or 0-1

(defn- return-color
  [c]
  (c COLORS))


(defn- return-color-with-alpha
  [c a]
  (if (keyword? a)
    (opacify (c HSL-COLORS) (a OPACITIES))
    (opacify (c HSL-COLORS) a)))


(defn color
  ([c] (return-color c))
  ([c a] (return-color-with-alpha c a)))


;; Base Styles

(def base-styles
  {:background-color (color :background-color)
   :font-family      "IBM Plex Sans, Sans-Serif"
   :color            (color :body-text-color)
   :font-size        "16px"
   :line-height      "1.5"
   ::stylefy/manual [[:a {:color (color :link-color)}]
                     [:h1 :h2 :h3 :h4 :h5 :h6 {:margin "0.2em 0"
                                               :line-height "1.3"
                                               :color (color :header-text-color)}]
                     [:h1 {:font-size "3.125em"
                           :font-weight 600
                           :letter-spacing "-0.03em"}]
                     [:h2 {:font-size "2.375em"
                           :font-weight 500
                           :letter-spacing "-0.03em"}]
                     [:h3 {:font-size "1.75em"
                           :font-weight 500
                           :letter-spacing "-0.02em"}]
                     [:h4 {:font-size "1.3125em"}]
                     [:h5 {:font-size "0.75em"
                           :font-weight 500
                           :line-height "1rem"
                           :letter-spacing "0.08em"
                           :text-transform "uppercase"}]
                     [:.MuiSvgIcon-root {:font-size "24px"}]
                     [:input {:font-family "inherit"}]
                     [:img {:max-width "100%"
                            :height "auto"}]]})


(def app-styles
  {:overflow "hidden"
   :height   "100vh"
   :width    "100vw"})


(stylefy/tag "html" base-styles)


(stylefy/tag "*" {:box-sizing "border-box"})

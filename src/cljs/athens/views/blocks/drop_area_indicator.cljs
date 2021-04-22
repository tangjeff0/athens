(ns athens.views.blocks.drop-area-indicator
  (:require
    [stylefy.core :as stylefy]
    [athens.style :as style]))


(def drop-area-indicator-style
  {:display "block"
   :height "1px"
   :pointer-events "none"
   :margin-bottom "-1px"
   :color (style/color :link-color :opacity-high)
   :position "relative"
   :transform-origin "left"
   :z-index 3
   :width "100%"
   :opacity 0
   ::stylefy/manual [[:&:after {:position "absolute"
                                :content "''"
                                :top "-0.5px"
                                :right "0"
                                :bottom "-0.5px"
                                :left "2em"
                                :border-radius "100px"
                                :background "currentColor"}]]})


(defn drop-area-indicator
  [active-condition]
  [:div (stylefy/use-style (merge drop-area-indicator-style
                                  (active-condition)))])


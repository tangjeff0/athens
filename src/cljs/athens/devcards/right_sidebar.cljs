(ns athens.devcards.right-sidebar
  (:require
    ["@material-ui/icons" :as mui-icons]
    [athens.devcards.block-page :refer [block-page-component]]
    [athens.devcards.buttons :refer [button-primary]]
    [athens.devcards.node-page :refer [node-page-component]]
    [athens.style :refer [color #_OPACITIES]]
    [cljsjs.react]
    [cljsjs.react.dom]
    [devcards.core :refer [defcard-rg]]
    [re-frame.core :refer [dispatch subscribe]]
    [stylefy.core :as stylefy :refer [use-style #_use-sub-style]]))


;;; Styles


(def right-sidebar-style
  {:width "600px"
   :height "100%"
   :border "1px solid lightgray"
   :background-color (color :panel-color :opacity-low)
   :display "flex"
   :justify-content "space-between"
   :padding "30px"})


(def content-style
  {:display "flex"
   :flex-direction "column"
   :overflow-y "auto"})


(def toggle-page-style
  {:margin-top "30px"
   :margin-right "10px"
   :cursor "pointer"})

;;; Components


(defn right-sidebar-el
  [open? items]
  (when open?
    [:div (use-style right-sidebar-style)
     [:div (use-style content-style)
      (doall
        (for [[uid {:keys [open node/title block/string]}] items
              :let [node-page? (boolean title)
                    heading (or title string)]]
          ^{:key uid}
          [:div {:style {:display "flex"}}
           [:span (use-style toggle-page-style
                    {:on-click #(dispatch [:right-sidebar/toggle-item uid])})
            [:> mui-icons/KeyboardArrowDown]]
           (if open
             (if node-page?
               [node-page-component [:block/uid uid]]
               [block-page-component [:block/uid uid]])
             [:div
              [:h1 heading]])
           [:span {:on-click #(dispatch [:right-sidebar/close-item uid])}
            [:> mui-icons/Close]]]))]
     [:div {:on-click #(dispatch [:right-sidebar/toggle])}
      [:> mui-icons/Close]]]))


(defn right-sidebar-component
  []
  (let [open? @(subscribe [:right-sidebar/open])
        items @(subscribe [:right-sidebar/items])]
    [right-sidebar-el open? items]))


;;; Devcards


;;(defcard-rg Init
;;  [button-primary {:label "Toggle" :on-click-fn #(dispatch [:open-in-rightbar "data"])}])



(defcard-rg Toggle
  [button-primary {:label "Toggle" :on-click-fn #(dispatch [:right-sidebar/toggle])}])


(defcard-rg Right-Sidebar
  [:div {:style {:display "flex" :height "60vh" :justify-content "flex-end"}}
   [right-sidebar-component]]
  {:padding false})

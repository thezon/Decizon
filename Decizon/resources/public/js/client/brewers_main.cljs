(ns client.brewers-main
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d :include-macros true]
            [om-bootstrap.modal :as md]
            [client.decision-support :as dec]
            [client.persistance :as per]
            [client.session-mang :as sm]
            [client.page-components :as pc]))
   
(enable-console-print!)   

;initiliaze page
(sm 


;;;;;


(defn stand-name [nav-key type-key]
  "Standard name convention based on nav type"
  (cond 
    (= type-key :list)
    (keyword (str (name nav-key) "-list"))
    (= type-key :edit) 
    (str (name nav-key) "-edit")
    (= type-key :edit-nav)
    (keyword (str (name nav-key) "-edit"))
    (= type-key :save-nav) 
    (keyword (str (name nav-key) "-save"))))
  
    


;;;;;;;sub components

(defn decide-page [data owner]
  (d/div 
    (pc/header "Decide" nil :decide :category [:show-current])
    (let [compare-map (apply dec/next-rand-compare     
                             (for [values [:decision :item-list :category-list]]
                               (values @sm/session)))]
      (if (empty? compare-map)
        "Done"
        (d/table {:class "max-width"}
                 (d/tr {}
                       (d/td {:class "text-middle max-width"}
                             (d/h3 {} "Select the Best")))
                 (d/tr {}
                       (d/td {:class "text-middle max-width"} 
                                   (d/h1  {} (:cat-name compare-map))))
                 (d/tr {}
                       (d/td {:class "choice-td"}
                             (d/table {:class "max-width"}
                                      (d/tr {}
                                            (d/td {}
                                                  (d/div {:class "select-item"
                                                          :onClick #(dec/add-dec sm/session :decision (assoc compare-map :result (:item-loc-1 compare-map)))}
                                                         (:item-name-1 compare-map)))
                                            (d/td {:class "choice-td"}
                                                  (d/div {:class "select-item"
                                                          :onClick #(dec/add-dec sm/session :decision (assoc compare-map :result (:item-loc-2 compare-map)))} 
                                                         (:item-name-2 compare-map))))))))))))


(defn item-page [data owner] 
  (pc/entry-component data 
                   owner 
                   (pc/header "Items" :category :item :decision [:show-current]) 
                   :item 
                   []))

(defn item-edit-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Edit Item" nil [:show-current]) 
                  :item 
                  false
                  []))

(defn item-save-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Create Item"  nil [:show-current]) 
                  :item
                  true
                  []))

(defn category-edit-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Edit category" nil [:show-current]) 
                  :category
                  false
                  []))

(defn category-save-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Create category" nil [:show-current]) 
                  :category
                  true
                  []))

(defn category-page [data owner]
  (pc/entry-component  data 
                   owner 
                   (pc/header "category" :decide :category :item [:show-current])    
                   :category
                   []))

(defn decision-edit-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Editing a Decision" nil [:show-current]) 
                  :decision
                  false
                  []))

(defn decision-save-page [data owner]
  (pc/edit-component data owner 
                  (pc/header "Create Decision" nil "Create New Decision" nil [:show-current]) 
                  :decision
                  true
                  []))

(defn decision-page [data owner]
  (pc/entry-component  data 
                   owner  
                   (pc/header "Welcome" nil "Select or Create Decision" nil []) 
                   :decision
                   [:select]))

(defn error-page [data owner]
  (d/div "A Terrible Error Has Occured!!!!!!!!!"))

(defn main [data owner]
  (reify 
    om/IRender
    (render [this] 
       ((cond
         (= :decide (:page @sm/session))
         decide-page
         (= :decision (:page @sm/session))
         decision-page
          (= :decision-edit (:page @sm/session))
         decision-edit-page
         (= :decision-save (:page @sm/session))
         decision-save-page
          (= :item (:page @sm/session))
         item-page 
          (= :item-edit (:page @sm/session))
         item-edit-page
         (= :item-save (:page @sm/session))
         item-save-page
          (= :category (:page @sm/session))
         category-page
          (= :category-edit (:page @sm/session))
         category-edit-page
         (= :category-save (:page @sm/session))
         category-save-page
         :default  
         error-page) data owner))))

(om/root 
  main
  sm/session
  {:target (. js/document (getElementById "app"))})





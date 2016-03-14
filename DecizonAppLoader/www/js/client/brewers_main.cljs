(ns client.brewers-main
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.random :as r]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-bootstrap.panel :as p]
            [om-bootstrap.nav :as n] 
            [cljs.reader :as read]
            [om-bootstrap.modal :as md]
            [garden.core :refer [css]]
            [om-bootstrap.progress-bar :as pb]
            [ajax.core :refer [GET POST]]
            [ client.decision-support :as dec]))
   
(enable-console-print!)   

(def session (atom {:working-name [] ;selected decision name
                    :decision-list ["Car"] ;all decision names that have been saved
                    :item-list ["Sentra" "Civic" "Soal" "Jetta" "A4"] ;list of items associated with a decision to be decided 
                    :catagory-list ["MPG" "Acceleration" "Comfort" "Style"] ;catagoies applyed to items from a specific decision
                    :page :decision
                    :decision-result-list []
                    :working-list nil
                    :working-num nil})) ;navigation page

(defn device-store  
  ([val-name] (. js/localStorage getItem val-name ))
  ([val-name val] (. js/localStorage setItem val-name  val)))

(defn store-new-decision [name]
  (device-store "decision-name" name))

(defn stand-name [nav-key type-key]
  (cond 
    (= type-key :list)
    (keyword (str (name nav-key) "-list"))
    (= type-key :edit)
    (str (name nav-key) "-edit")
    (= type-key :edit-nav)
    (keyword (str (name nav-key) "-edit"))
    (= type-key :save-nav)
    (keyword (str (name nav-key) "-save"))))
  
    

(defn session-value [list-key num]
  "gets value from session based on list key and location number"
  (nth (list-key @session) num))

(defn get-id-value [name-key]
  (. (. js/document (getElementById (name name-key))) -value))

(defn session-param 
  "mang. session param. if vale supples then sets if no value supplied returns current value"
  ([param-key]
    (param-key  @session))
  ([param-key value] 
        (reset! session 
                (assoc @session param-key value))))

(defn page-nav [page] 
  (do (session-param :selected nil)
    (reset! session 
            (assoc @session 
                   :page page))))

(defn new-element [component-name session-list] 
  (let [val (get-id-value component-name)]
    (if-not (or (nil? val) ( < (count val) 1))
      (reset! session 
              (assoc @session 
                    session-list
                     (conj (session-list @session) val))))))
 
(defn del-element [loc-num session-list]
  (let [entry-col (session-list  @session)
        rem-vec   (into [] 
                        (concat (subvec entry-col 0  loc-num) 
                                (subvec entry-col  (inc loc-num))))]
  (reset! session 
          (assoc @session 
                 session-list rem-vec))))

(defn clear-list 
  "Clears session list and sets an inital value if passed.
   if value is a key then will get value from html id if not directly insert value"
  ([session-list]
    (clear-list nil session-list))
  ([init-value session-list]
    (reset! session 
            (assoc @session 
                   session-list 
                   (if (nil? init-value)
                     [] 
                     [(if (keyword? init-value)
                        (get-id-value init-value)
                        init-value)])))))

(defn clear-working-data []
  "Removes current decision data"
  (do
    (clear-list :working-name)
    (clear-list :item)
    (clear-list :catagory)))
  
(defn rename-element [loc-num value data-list-key ]
  (let [entry-col (data-list-key  @session)
        update-vec (into [] (concat (subvec entry-col 0 loc-num) 
                                 [value]
                                 (subvec entry-col (inc loc-num))))]
  (reset! session 
          (assoc @session 
                 data-list-key update-vec))))

;;;;;;;sub components
(defn header [title next-nav current last-nav options]
  (d/div {}
  (d/div {:id "menu-bar"}
         (d/table { :class "max-width"}
                  (d/tr 
                    (d/td {} (r/glyphicon {:class "menu-icon"
                                           :glyph "th-large"}))
                    (d/td 
                      (d/h1 {:class "title-app-name"} "DeciZon!"))))
         (if (not (and (nil? next-nav) 
                       (nil? last-nav)))
           (d/table {:class "max-width"}
                    (d/tr {} 
                          (d/td {:class "min-width"} 
                                (d/div {:class "arrow-right"}))
                          (d/td {:class "text-middle"
                                 :onClick #(page-nav last-nav)} 
                                (d/div {:class "arrow-box-right"} (name last-nav)))
                          (d/td {:class "td-spacer"} 
                                (d/div {:id "menu-middle"} (name current)))  
                          (if (not (nil? next-nav))
                            [(d/td {:class "text-middle"
                                    :onClick #(page-nav next-nav)} 
                                   (d/div {:class "arrow-box-left"} (name next-nav)))
                             (d/td {:class "min-width"} 
                                   (d/div {:class "arrow-left"}))]
                            (d/td {:class "max-width"}))))
          (if (not (nil? current))
            (d/div {:class "menu-middle-title"} current))))
         (if (and (not (empty? (:working-name @session)))
                 (not (empty? (filter #(= :show-current %) options))))
           (d/h3 {:id "current-header-label"} 
                 "Deciding on a " (:working-name @session)))))


(defn element-button-behavior [value-type element-num ]
  (b/button-group
    {}
    (b/dropdown {:title "Options"}
                (b/menu-item {:onClick #(del-element element-num value-type )} "Delete")
                (b/menu-item {:onClick #(rename-element element-num value-type "worked" )} "Rename"))))

(defn item-list-comp [nav-key num options]
  "Data driven by a vector called data-list-key.
   Comp-name-key is prefix of all internal names.
   Data-loc is the location within the data-list that is being worked agains.
   ** if null then it is assumed that this is an input field.
   options is a vec of keys--   :select allows selections"
  (let [partial-name (str (name nav-key) num)
        ren-param-name (str partial-name "-rename")
        ren-param-key (keyword (str partial-name "-rename"))
        delete-param-name (str partial-name "-delete")
        delete-param-key (keyword (str partial-name "-delete"))
        working-list-key :working-name
        data-list-key (stand-name nav-key :list)
        field-value  (nth  (data-list-key @session) num)
        ]
    [(d/tr {}
           (d/td {}
                 (d/table {:class "max-width no-spacing"}
                          (d/tr {}
                                ; Edit button will have same functality as field 
                                ; label should switch between edit and cancel
                                ; styles need to be fixed arrow-select-td should be a class and not id
                                (d/td {:class "arrow-select-td"}
                                      (if (= (session-param :selected) num)
                                        (d/div {:class "arrow-select-box"
                                                :onClick #(session-param :selected nil)} "Cancel")
                                        (d/div {:class "arrow-select-box"
                                                :onClick #(session-param :selected num)} "Edit")))
                                (d/td {}
                                      (d/div {:class "label-item max-width no-spacing"} field-value))
                                (if (not (empty? (filter #(= :select %) options)))
                                  [(d/td {:class "arrow-select-td"
                                          :onClick #(do (session-param :working-name field-value ) 
                                                               (page-nav :item))}
                                         (d/div {:class "arrow-select-box"
                                                 :onClick #(do (session-param :working-name field-value ) 
                                                               (page-nav :item))} "Select"))
                                  (d/td {:class "arrow-select-td"} 
                                        (d/div {:id "arrow-select"} ))])))))
     
     (if (= num (session-param :selected))
       (d/tr {}
             (d/td {} 
                   (d/table {:class "max-width no-spacing"}
                            (d/tr {}
                                  (d/td {}
                                        (d/div {:class "select-item no-spacing"
                                                :onClick #(do (println (stand-name nav-key :edit-nav))
                                                            (page-nav (stand-name nav-key :edit-nav))
                                                            (session-param :working-list data-list-key)
                                                            (session-param :working-num num))} "Manage"))
                                  (d/td {}
                                        (d/div {:class "select-item no-spacing"
                                                :onClick #(do (del-element num  data-list-key)
                                                            (session-param :selected nil))} "Delete")))))))]))


(defn entry-component [data owner header-func nav-key options]
  "name key is name of component, data-list-key is session data map"
  (let [data-list-key (keyword (stand-name nav-key :list))]
    (d/div {}
           header-func
           (table {:class "max-width"}
                  (d/tbody 
                    (d/tr
                      (d/td 
                        (if  (nil? (session-param :selected))
                          (d/div {:class "select-item"
                                  :onClick #(page-nav (stand-name nav-key :save-nav))
                                  }
                                 "Create New"))))
                    (for [ num (reverse (range (count (data-list-key data))))]
                      (item-list-comp nav-key num options))))
           (device-store "test"))))

(defn edit-component [data owner header-func nav-key save? options]
  (let [com-name  (stand-name nav-key :edit)
        working-list (session-param :working-list )
        rec-num (session-param :working-num )]
    (d/div {}
           header-func
           (d/br{})
           (d/table {}
                    (d/tr {}
                          (d/td {})
                          (d/td {:class "max-width"}
                                (i/input {:type "text"
                                          :class "name-input"
                                          :id com-name 
                                          :placeholder 
                                          (if save? 
                                            "Enter Name"
                                            (str "Rename " (session-value working-list rec-num)))})))
                    (d/tr {}
                          (d/td {}) 
                          (d/td {}
                                (d/table {:class "max-width"}
                                         (d/tr
                                           (d/td {} 
                                                 (d/div {:class "select-item"
                                                         :onClick #(do
                                                                     (if save?
                                                                       (new-element com-name
                                                                                    (stand-name nav-key :list ))
                                                                       (rename-element rec-num 
                                                                                       (get-id-value com-name)
                                                                                       working-list))
                                                                     (device-store "test" (get-id-value com-name))
                                                                     (page-nav nav-key))} "save"))
                                           (d/td {} 
                                                 (d/div {:class "select-item"
                                                         :onClick #(page-nav nav-key)} "Cancel"))))))))))

(defn decide-page [data owner]
  (d/div 
    (header "Decide" nil :decide :catagory [:show-current])
    (let [compare-map (apply dec/next-rand-compare    
                             (for [values [:decision-result-list :item-list :catagory-list]]
                               (values @session)))]
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
                                                          :onClick #(dec/add-dec session :decision-result-list (assoc compare-map :result (:item-loc-1 compare-map)))}
                                                         (:item-name-1 compare-map)))
                                            (d/td {:class "choice-td"}
                                                  (d/div {:class "select-item"
                                                          :onClick #(dec/add-dec session :decision-result-list (assoc compare-map :result (:item-loc-2 compare-map)))} 
                                                         (:item-name-2 compare-map))))))))))))


(defn item-page [data owner] 
  (entry-component data 
                   owner 
                   (header "Items" :catagory :item :decision-result-list [:show-current]) 
                   :item 
                   []))

(defn item-edit-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Edit Item" nil [:show-current]) 
                  :item 
                  false
                  []))

(defn item-save-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Create Item"  nil [:show-current]) 
                  :item
                  true
                  []))

(defn catagory-edit-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Edit Catagory" nil [:show-current]) 
                  :catagory
                  false
                  []))

(defn catagory-save-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Create Catagory" nil [:show-current]) 
                  :catagory
                  true
                  []))

(defn catagory-page [data owner]
  (entry-component data 
                   owner 
                   (header "Catagory" :decide :catagory :item [:show-current])    
                   :catagory
                   []))

(defn decision-edit-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Editing a Decision" nil [:show-current]) 
                  :decision
                  false
                  []))

(defn decision-save-page [data owner]
  (edit-component data owner 
                  (header "Create Decision" nil "Create New Decision" nil [:show-current]) 
                  :decision
                  true
                  []))

(defn decision-page [data owner]
  (entry-component data 
                   owner  
                   (header "Welcome" nil "Select or Create Decision" nil []) 
                   :decision
                   [:select]))

(defn error-page [data owner]
  (d/div "A Terrible Error Has Occured!!!!!!!!!"))

(defn main [data owner]
  (reify 
    om/IRender
    (render [this] 
       ((cond
         (= :decide (:page @session))
         decide-page
         (= :decision (:page @session))
         decision-page
          (= :decision-edit (:page @session))
         decision-edit-page
         (= :decision-save (:page @session))
         decision-save-page
          (= :item (:page @session))
         item-page 
          (= :item-edit (:page @session))
         item-edit-page
         (= :item-save (:page @session))
         item-save-page
          (= :catagory (:page @session))
         catagory-page
          (= :catagory-edit (:page @session))
         catagory-edit-page
         (= :catagory-save (:page @session))
         catagory-save-page
         :default  
         error-page) data owner))))

(om/root 
  main
  session
  {:target (. js/document (getElementById "app"))})





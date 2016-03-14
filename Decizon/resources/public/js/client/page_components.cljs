(ns client.page-components
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
            [om-bootstrap.progress-bar :as pb]
            [ajax.core :refer [GET POST]]
            [client.decision-support :as dec] 
            [client.session-mang :as sm]
            [client.tools :as ts]
            [client.persistance :as per]
            [client.session-mang :as sm]))


(defn header-flow-menu [next-nav current last-nav]
  (if (not 
        (and (nil? next-nav) 
             (nil? last-nav)))
    (d/table {:class "max-width"}
              (js/alert "ClojureScript says 'Boo!'")
             (d/tr {} 
                   (d/td {:class "min-width"} 
                         (d/div {:class "arrow-right"}))
                   (d/td {:class "text-middle"
                          :onClick ;#(sm/nav last-nav)
                         #(sm/event last-nav {:navigate true})} 
                         (d/div {:class "arrow-box-right"} (name last-nav)))
                   (d/td {:class "td-spacer"} 
                         (d/div {:id "menu-middle"} (name current)))  
                   (if (not (nil? next-nav))
                     [(d/td {:class "text-middle"
                             :onClick ;#(sm/page-nav next-nav)
                            #(sm/event next-nav {:navigate true})} 
                            (d/div {:class "arrow-box-left"} (name next-nav)))
                      (d/td {:class "min-width"} 
                            (d/div {:class "arrow-left"}))]
                     (d/td {:class "max-width"}))))
    (if (not (nil? current))
      (d/div {:class "menu-middle-title"} current))))

(defn header [title next-nav current last-nav options]
  (d/div {}
         (d/div {:id "menu-bar"}
                (d/table { :class "max-width"}
                         (d/tr 
                           (d/td {} (r/glyphicon {:class "menu-icon"
                                                  :glyph "th-large"}))
                           (d/td 
                             (d/h1 {:class "title-app-name"} "DeciZon!"))))
                (header-flow-menu next-nav current last-nav))
         (if (and (not (empty? (:working-name @sm/session)))
                  (not (empty? (filter #(= :show-current %) options))))
           (d/h3 {:id "current-header-label"} 
                 "Deciding on a " (:working-name @sm/session)))))


(defn item-label [record options]
  "Item display field with functionality"
  (d/table {:class "max-width no-spacing"}
           (d/tr {}
                 (d/td {:class "arrow-select-td"}
                       (if (= (sm/session-param :working-record) record)
                         (d/div {:class "arrow-select-box" 
                                 :onClick #(sm/session-param :working-record nil)} "Cancel")
                         (d/div {:class "arrow-select-box"
                                 :onClick #(sm/session-param :working-record record)} "Edit")))
                 (d/td {}
                       (d/div {:class "label-item max-width no-spacing"} (:name record)))
                 (if (not (empty? (filter #(= :select %) options)))
                   [(d/td {:class "arrow-select-td"
                           :onClick #(do 
                                       ;(sm/session-param :working-name (:name record)) 
                                       ;(sm/navigate :item (:name-id record))
                                        (sm/event :item {:working-record record}))}
                          (d/div {:class "arrow-select-box"
                                  :onClick #(do 
                                             ; (println "field id: " (:name-id field-value))
                                              ;(sm/session-param :working-name (:name field-value )) 
                                              (sm/event :item {:working-record record})
                                       
                                             ; (sm/page-nav :item)
                                              ; good solution but need generalizaton of all any possible list
                                              ; this should work for all navigations as the list is known
                                             ; (sm/session-param :item-list (per/get-item-list (:name-id field-value )))
                                              )} "Select") ;add update decsion here
                          )
                    (d/td {:class "arrow-select-td"} 
                          (d/div {:id "arrow-select"} ))])))) 

(defn item-edit [;data-list-key 
                 nav-key record options]
  "Editing functionality for an item"
  (d/table {:class "max-width no-spacing"}
           (d/tr {}
                 (d/td {}
                       (d/div {:class "select-item no-spacing"
                               :onClick #(do
                                           ;(sm/page-nav (ts/stand-name nav-key :edit-nav))
                                           (sm/event nav-key {:edit true :working-record record :navigate true})
                                           ;(sm/session-param :working-list data-list-key)
                                           ;(sm/session-param :working-num num)
                                           )} "Manage"))
                 (d/td {}
                       (d/div {:class "select-item no-spacing"
                               :onClick #(do 
                                           ;(sm/del-element num  data-list-key)
                                           (sm/event nav-key {:delete true :working-record record})
                                          ; (sm/session-param :selected nil)
                                          ) } "Delete")))))

(defn item-list-comp [options]
  "Data driven by a vector called data-list-key.
   Comp-name-key is prefix of all internal names.
   Data-loc is the location within the data-list that is being worked agains.
   ** if null then it is assumed that this is an input field.
   options is a vec of keys--   :select allows selections"
  (fn [nav-key record]
      (d/table {:class "max-width"} 
               (d/tr {}
                     (d/td {} 
                           (item-label record options)))
               (if (= record (sm/session-param :working-record)) ;if true editing item
                 (d/tr {}
                       (d/td {} 
                             (item-edit nav-key record options)))))))

  
(defn entry-component [data owner header-func comp-func nav-key options]
  "name key is name of component, data-list-key is session data map"
  (do
    (if (nil? (sm/session-param :working-list))
      (sm/event :decision {:navigate true}))
    (d/div {}
           header-func
           (table {:class "max-width"} 
                  (d/tbody 
                    (d/tr
                      (d/td 
                        (if (nil? (sm/session-param :working-record))
                          (d/div {:class "select-item"
                                  :onClick ;#(sm/page-nav (ts/stand-name nav-key :save-nav))
                              #(sm/event nav-key {:new true })}
                                 "Create New"))))
                    (for 
                      
                      [;_ (println "The count is: "  (sm/session-param :working-list))
                       record  (sm/session-param :working-list);order list here
                       ; this needs to be fixed to used ids and weighting/ordering
                      ;(reverse (range (count (sm/session-param :working-list))))
                      ]
          (d/tr {}
                (d/td {} (comp-func nav-key record)))))))))
                                                               
(defn edit-component [data owner header-func nav-key save? options]
  (let [ ; needs to be query and insertion of correct data list
        com-name (gensym)
        ;working-list (sm/session-param :working-list )
        record (sm/session-param :working-record)]
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
                                            (str "Rename " ;(:name (nth (sm/session-param :working-list) rec-num))
                                                 (:name record)
                                                 ))})))
                    (d/tr {}
                          (d/td {}) 
                          (d/td {}
                                (d/table {:class "max-width"}
                                         (d/tr
                                           (d/td {} 
                                                 (d/div {:class "select-item" 
                                                         :onClick #(sm/event nav-key {:navigate true 
                                                                                       :save true
                                                                                       :working-record (assoc record :name (sm/get-id-value com-name))})
                                                         } "save"))
                                           (d/td {} 
                                                 (d/div {:class "select-item"
                                                         :onClick #(sm/event nav-key {:navigate true :cancel true})} "Cancel"))))))))))

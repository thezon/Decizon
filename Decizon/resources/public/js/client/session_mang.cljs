(ns client.session-mang
  (:require [client.persistance :as per]))


;selected is working-record and is duplicate logic
;event map is better alternative 
;use mutli methods to process map

(defrecord save-event[nav-key event-type working-record])

(defrecord event [nav-key event-type working-record])



;internal data is depricated because of persistance
(def session (atom {}))


;depricated
(defn load-decision [decision-data]
  "Loads a decision data to sesssion"
  (reset! session (assoc @session 
                         :item-list (:item-list decision-data)
                        ; :category-list  (:category-list decision-data)
                        ; :decision-result-list  (:decision-result-list  decision-data))))
)))

;depricated
(defn add-decision-result [result]
  (reset! session  
          (assoc @session  
                 :decision-result-list 
                 (conj (:decision-result-list @session) result))))

(defn session-value [list-key num]
  "gets value from session based on list key and location number"
  (nth (list-key @session) num))

;this is the incorrect way to update react
(defn get-id-value [name-key]
  (. (. js/document (getElementById (name name-key))) -value))

(defn session-param 
  "mang. session param. if vale supples then sets if no value supplied returns current value"
  ([param-key]
    (param-key  @session))
  ([param-key value] 
        (reset! session 
                (assoc @session param-key value))))


(defn event [page-key options-map]
  (do
    (if (:navigate options-map)
      (session-param :page page-key))
  (cond
    (and (= :decision page-key) (:delete options-map))
    (do
      (per/delete-decision (:name-id (:working-record options-map)))
      (session-param :working-list (per/get-decision-list))
      (session-param :selected nil)) 
    (and (= :decision page-key) (:edit options-map))
    (do
      (session-param :working-record (:working-record options-map))
      (session-param :page :decision-edit))
    
    (and (= :decision page-key) (:save options-map))
    (do 
      (let [record (:working-record options-map)]
        (per/update-decision (:name-id record) (:name record) 0.1)
        (session-param :working-list (per/get-decision-list))))
    
    (and (= :decision page-key) (:cancel options-map))
    (session-param :working-record nil)
    
    (and (= :decision page-key) (:new options-map))
    (do
      (session-param :page :decision-new))
    
    (= :decision page-key)
    (do
      (println "inside decision")
      (session-param :working-list (per/get-decision-list)))
    
    (and (= :item page-key) (:edit options-map))
    (do 
      (session-param :working-record (:working-record options-map))
      (session-param :page :item-edit))
    
    (and (= :item page-key) (:new options-map))
    (session-param :page :item-new)
    
    (and (= :item page-key) (:delete options-map))
    (do
      (session-param :selected nil)
      (per/delete-item (:decision-id options-map); decision id need to be set to session in decision select event
                       (:name-id (:working-record options-map))))
    
    (= :item page-key)
    (do
      (session-param :page :item)
      (session-param :working-list (per/get-item-list (:name-id  (:working-record options-map)))))
    
    (and (= :category page-key) (:edit options-map))
    (do 
      (session-param :working-record (:working-record options-map))
      (session-param :page :category-edit))
    
    (and (= :category page-key) (:new options-map))
    (session-param :page :category-new)
    
    (= :category page-key)
    (session-param :working-list (per/get-category-list (:name-id  options-map))))))








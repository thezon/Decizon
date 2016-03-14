(ns client.persistance-backup
  (:require [datascript :as d]
            [client.tools :as t]))
 

;in future will be done by configuration 
(def user-id 123)

(comment ; working on normalized schema

(def schema
  {:user/id {:db/unique :db.unique/identity}  
   :user/name {}
   :decision/id {:db/unique :db.unique/identity}
   :decision/user.id {:db/valueType :db.type/ref}
   :decision/name {} 
   :item/decision.id {:db/valueType :db.type/ref}
   :item/name {}
   :item/wieght {}
   :category/decision.id {:db/valueType :db.type/ref}
   :category/name {}
   :category/wieght {}
   :rule/decision.id {:db/valueType :db.type/ref}
   :rule/user.id {:db/valueType :db.type/ref}
   :rule/item.one.id {:db/valueType :db.type/ref}
   :rule/item.two.id {:db/valueType :db.type/ref}
   :rule/category.id {:db/valueType :db.type/ref}
   :rule/item.result.id {:db/valueType :db.type/ref}})

(def db 
  (-> (datascript/empty-db schema)
    (datascript/db-with
      [[:db/add 1 :user/name "Don"]
       [:db/add 1 :user/id 123]
       [:db/add 2 :decision/id 1]
       [:db/add 2 :decision/name "Car"]
       [:db/add 2 :decision/user.id 123]
       [:db/add 3 :item/decision.id 1]
       [:db/add 3 :item/user.id 123]
       [:db/add 3 :item/name "Audi"]
       [:db/add 3 :item/wieght 1] 
       [:db/add 4 :item/decision.id 1]
       [:db/add 4 :item/user.id 123]
       [:db/add 4 :item/name "BMS"]
       [:db/add 4 :item/wieght 1]
       [:db/add 5 :category/decision.id 1]
       [:db/add 5 :category/name "MPG"]
       [:db/add 5 :category/weight 1]
       [:db/add 6 :rule/user.id 123]
       [:db/add 6 :rule/decision.id 1]
       [:db/add 6 :rule/item.one.id 1]
       [:db/add 6 :rule/item.two.id 2]
       [:db/add 6 :rule/category.id 1]
       [:db/add 6 :rule/item.result.id 1]]))))

(def schema
  {:decision/id   {:db/unique :db.unique/identity}
   :decision/name {}
   :decision/item-list   {}
   :decision/category-list {}
   :decision/decision-result-list {}})

(def db-norm
  (-> (datascript/empty-db schema)
          (datascript/db-with [[:db/add 1  :item/id 1]
                               [:db/add 1  :item/name "Sentra"]
                               [:db/add 1  :item/sequence 1 ]])))

(def db 
  (-> (datascript/empty-db schema)
          (datascript/db-with [[:db/add 1 :decision/id 1]
                               [:db/add 1 :decision/name "Car"]
                               [:db/add 1 :decision/item-list  
                          [(t/item. "Sentra" 0) 
                                 (t/item. "Civic" 1)
                                 (t/item. "Soal" 2) 
                                 (t/item. "Jetta" 3)
                                 (t/item. "A4" 4)]]
                               [:db/add 1 :decision/category-list  
                          [(t/category. "MPG" 0 nil)
                                 (t/category. "Acceleration" 1 nil)
                                 (t/category. "Comfort" 2 nil)
                                 (t/category. "Style" 3 nil)]]
                               [:db/add 1 :decision/decision-result-list  
                          [(t/decision-result. 1 2 1 1)]]])
         
    (datascript/db-with [[:db/add 2 :decision/id 2]
                               [:db/add 2 :decision/name "Truck"]
                               [:db/add 2 :decision/item-list  
                                [(t/item. "F150" 0) 
                                 (t/item. "Ram" 1)
                                 (t/item. "Tahoe" 2)]]
                               [:db/add 2 :decision/category-list  
                                [(t/category. "MPG" 0 nil)
                                 (t/category. "Acceleration" 1 nil)
                                 (t/category. "Comfort" 2 nil)
                                 (t/category. "Style" 3 nil)]]
                               [:db/add 2 :decision/decision-result-list  
                                [(t/decision-result. 1 2 1 1)]]])))

(defn get-local-dec-list []
  (map #(t/summary-decision. (first %) (second %) 80)
       (datascript/q '[:find ?value ?id
                       :where [?e :decision/name ?value]
                       [?e :decision/id ?id]] db)))



(defn get-item-list [dec-key]
  "get all information for a decision" 
  (first 
    (datascript/q '[:find ?name ?key ?item-list ?category-list ?decision-result-list
                    :in $ ?key
                    :where [?e :decision/id ?key]
                    [?e :decision/item-list ?item-list]])))

(defn get-category-list [dec-key]
  "get all information for a decision" 
  (first 
    (datascript/q '[:find ?name ?key ?item-list ?category-list ?decision-result-list
                    :in $ ?key
                    :where [?e :decision/id ?key]
                    [?e :decision/category-list ?category-list]])))

;rewritten
(defn get-decide-results-list [dec-key]
  "get all information for a decision" 
  (first 
    (datascript/q '[:find ?name ?key ?item-list ?category-list ?decision-result-list
                    :in $ ?key
                    :where [?e :decision/id ?key]
                    [?e :decision/decision-result-list ?decision-result-list]])))


(defn get-local-decision [dec-key]
  "get all information for a decision" 
  (let [val (first 
              (datascript/q '[:find ?name ?key ?item-list ?category-list ?decision-result-list
                              :in $ ?key
                              :where [?e :decision/id ?key]
                              [?e :decision/name ?name] 
                              [?e :decision/item-list ?item-list]
                              [?e :decision/category-list ?category-list]
                              [?e :decision/decision-result-list ?decision-result-list]] db dec-key))]
    (t/decision-data. (nth val 0) (nth val 1) (nth val 2) (nth val 3) (nth val 4))))

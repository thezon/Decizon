(ns client.persistance
   (:require [datascript :as d]
            [client.tools :as t]))

(def user-id 123) ; needs to come from from config durring installation

(def db (atom nil)) ;database 

; move to tools
(defrecord item [id
                 name 
                 seq
                 weight])
; move to tools
(defrecord category [id
                     name 
                     seq
                     weight])
; move to tools
(defrecord summary-decision [name
                             name-id
                             perc-comp])

(defrecord decision-result [id 
                            item-one 
                            item-two 
                            category 
                            result])

;new namespace schema
(def schema
  {:user/id {:db/unique :db.unique/identity}  
   :user/name {}
   :decision/user.id {:db/valueType :db.type/ref}
   :decision/id {:db/unique :db.unique/identity}
   :decision/name {} 
   :decision/complete-perc {}
   :decision/deleted? {}
   :item/user.id {:db/valueType :db.type/ref}
   :item/decision.id {:db/valueType :db.type/ref}
   :item/id {:db/unique :db.unique/identity}
   :item/name {}
   :item/weight {}
   :item/seq {}
   :item/deleted? {}
   :category/user.id {:db/valueType :db.type/ref}
   :category/decision.id {:db/valueType :db.type/ref}
   :category/id  {:db/unique :db.unique/identity}
   :category/name {}
   :category/weight {}
   :category/seq {}
   :category/deleted? {}
   :rule/user.id {:db/valueType :db.type/ref}
   :rule/decision.id {:db/valueType :db.type/ref}
   :rule/id {:db/unique :db.unique/identity}
   :rule/item.one.id {:db/valueType :db.type/ref}
   :rule/item.two.id {:db/valueType :db.type/ref}
   :rule/category.id {:db/valueType :db.type/ref}
   :rule/item.result.id {:db/valueType :db.type/ref}
   :rule/deleted? {}})


;new name space schma

(reset! db
        (-> (datascript/empty-db schema)
          (datascript/db-with
            [[:db/add 1 :user/name "Don"]
             [:db/add 1 :user/id 123]
             [:db/add 2 :decision/id 1]
             [:db/add 2 :decision/name "Car"]
             [:db/add 2 :decision/user.id 123]
             [:db/add 2 :decision/complete-perc 0.9]
             [:db/add 2 :decision/deleted? false]
             [:db/add 3 :item/decision.id 1]
             [:db/add 3 :item/user.id 123]
             [:db/add 3 :item/id 3]
             [:db/add 3 :item/name "Audi"]
             [:db/add 3 :item/weight 1] 
             [:db/add 3 :item/seq 1]
             [:db/add 3 :item/deleted? false]
             [:db/add 4 :item/decision.id 1]
             [:db/add 4 :item/user.id 123]
             [:db/add 4 :item/id 4]
             [:db/add 4 :item/name "BMW"]
             [:db/add 4 :item/weight 1]
             [:db/add 4 :item/seq 2]
             [:db/add 4 :item/deleted? false]
             [:db/add 5 :category/user.id 123]
             [:db/add 5 :category/decision.id 1]
             [:db/add 5 :category/id 5]
             [:db/add 5 :category/name "MPG"]
             [:db/add 5 :category/weight 1]
             [:db/add 5 :category/seq 1]
             [:db/add 5 :category/deleted? false]
             [:db/add 6 :category/user.id 123]
             [:db/add 6 :category/decision.id 1]
             [:db/add 6 :category/id 6]
             [:db/add 6 :category/name "Acceleration"]
             [:db/add 6 :category/weight 1]
             [:db/add 6 :category/seq 2]
             [:db/add 7 :rule/user.id 123]
             [:db/add 7 :rule/decision.id 1]
             [:db/add 7 :rule/id 7]
             [:db/add 7 :rule/item.one.id 1]
             [:db/add 7 :rule/item.two.id 2]
             [:db/add 7 :rule/category.id 1]
             [:db/add 7 :rule/item.result.id 1]
             [:db/add 7 :rule/deleted? false]
             [:db/add 8 :rule/user.id 123]
             [:db/add 8 :rule/decision.id 1]
             [:db/add 8 :rule/id 8]
             [:db/add 8 :rule/item.one.id 1]
             [:db/add 8 :rule/item.two.id 2]
             [:db/add 8 :rule/category.id 2]
             [:db/add 8 :rule/item.result.id 2]
             [:db/add 8 :rule/deleted? false]
             [:db/add 52 :decision/id 52]
             [:db/add 52 :decision/name "Pet"]
             [:db/add 52 :decision/user.id 123]
             [:db/add 52 :decision/complete-perc 0.9]
             [:db/add 52 :decision/deleted? false]
             [:db/add 53 :item/decision.id 52]
             [:db/add 53 :item/user.id 123]
             [:db/add 53 :item/id 53]
             [:db/add 53 :item/name "F150"]
             [:db/add 53 :item/weight 1] 
             [:db/add 53 :item/seq 1]
             [:db/add 53 :item/deleted? false]
             [:db/add 54 :item/decision.id 52]
             [:db/add 54 :item/user.id 123]
             [:db/add 54 :item/id 54]
             [:db/add 54 :item/name "Ram"]
             [:db/add 54 :item/weight 1]
             [:db/add 54 :item/seq 2]
             [:db/add 54 :item/deleted? false]
             [:db/add 55 :category/user.id 123]
             [:db/add 55 :category/decision.id 52]
             [:db/add 55 :category/id 55]
             [:db/add 55 :category/name "Load"]
             [:db/add 55 :category/weight 1]
             [:db/add 55 :category/seq 1]
             [:db/add 55 :category/deleted? false]
             [:db/add 56 :rule/user.id 123]
             [:db/add 56 :rule/decision.id 52]
             [:db/add 56 :rule/id 56]
             [:db/add 56 :rule/item.one.id 1]
             [:db/add 56 :rule/item.two.id 2]
             [:db/add 56 :rule/category.id 1]
             [:db/add 56 :rule/item.result.id 1]
             [:db/add 56 :rule/deleted? false]])))

;move to persistance replaces get-local-dec-list
(defn get-decision-list []
  (map #(summary-decision. (first %) (second %) (nth % 2))
       (datascript/q '[:find ?name ?id ?complete-perc
                       :in $ ?user-id
                       :where [?e :decision/user.id ?r-user-id]
                       [(= ?r-user-id ?user-id)]
                       [?e :decision/id ?id]
                       [?e :decision/deleted? ?r-del]
                       [(= ?r-del false)]
                       [?e :decision/name ?name]
                       [?e :decision/complete-perc ?complete-perc]] @db user-id)))

;move to persistance
(defn get-item-list [dec-id]
  (map #(item. (first %) (second %) (nth % 2) (nth % 3))
       (datascript/q '[:find ?id ?name ?seq ?weight
                       :in $ ?dec-id ?user-id
                       :where [?e :item/user.id ?r-user-id]
                       [(= ?r-user-id ?user-id)]
                       [?e :item/decision.id ?r-dec-id]
                       [(= ?r-dec-id ?dec-id)]
                       [?e :item/deleted? ?r-del]
                       [(= ?r-del false)]
                       [?e :item/id ?id]
                       [?e :item/name ?name]
                       [?e :item/weight ?weight]
                       [?e :item/seq ?seq]] @db dec-id user-id)))

;move to persistance
(defn get-category-list [dec-id]
  (map #(category. (first %) (second %) (nth % 2) (nth % 3))
       (datascript/q '[:find ?id ?name ?seq ?weight
                       :in $ ?dec-id ?user-id
                       :where [?e :category/user.id ?r-user-id]
                       [(= ?r-user-id ?user-id)]
                       [?e :category/decision.id ?r-dec-id]
                       [(= ?r-dec-id ?dec-id)]
                       [?e :category/deleted? ?r-del]
                       [(= ?r-del false)] 
                       [?e :category/id ?id]
                       [?e :category/name ?name]
                       [?e :category/weight ?weight]
                       [?e :category/seq ?seq]] @db dec-id user-id)))

;move to persistance replaces get-decide-list
(defn get-rule-list [dec-id]
  (map #(decision-result. (first %) (second %) (nth % 2) (nth % 3) (nth % 4))
       (datascript/q '[:find ?id ?one ?two ?cat ?res 
                       :in $ ?dec-id ?user-id
                       :where [?e :rule/user.id ?r-user-id]
                       [(= ?r-user-id ?user-id)]
                       [?e :rule/decision.id ?r-dec-id]
                       [(= ?r-dec-id ?dec-id)]
                       [?e :rule/id ?id]
                       [?e :rule/deleted? ?r-del]
                       [(= ?r-del false)]
                       [?e :rule/item.one.id ?one]
                       [?e :rule/item.two.id ?two]
                       [?e :rule/category.id ?cat]
                       [?e :rule/item.result.id ?res]] @db dec-id user-id)))

(defn new-decision [dec-name]
  (reset! db (datascript/db-with @db [{:decision/id {:db/id -1}
                                       :decision/name dec-name
                                       :decision/user.id user-id
                                       :decision/complete-perc 0.0
                                       :decision/deleted? false}])))

(defn update-decision [dec-id dec-name complete-perc]
  (reset! db (datascript/db-with @db [{:decision/user.id user-id
                                       :decision/id dec-id
                                       :decision/name dec-name
                                       :decision/complete-perc complete-perc}])))


(defn new-item [item-name dec-id]
  (reset! db (datascript/db-with @db [{:item/user.id user-id
                                       :item/decision.id dec-id
                                       :item/id {:db/id -1}
                                       :item/name item-name
                                       :item/weight -1
                                       :item/seq -1
                                       :item/deleted? false}])))

(defn update-item [dec-id item-id item-name weight seq]
  (reset! db (datascript/db-with @db [{:item/user.id user-id
                                       :item/decision.id dec-id
                                       :item/id item-id
                                       :item/name item-name
                                       :item/weight weight
                                       :item/seq seq}])))

(defn new-category [category-name dec-id]
  (reset! db (datascript/db-with @db [{:category/user.id user-id
                                       :category/decision.id dec-id
                                       :category/id {:db/id -1}
                                       :category/name category-name
                                       :category/weight -1
                                       :category/seq -1
                                      :category/deleted? false}])))

 (defn update-category [dec-id category-id category-name weight seq]
  (reset! db (datascript/db-with @db [{:category/user.id user-id
                                       :category/decision.id dec-id
                                       :category/id category-id
                                       :category/name category-name
                                       :category/weight weight
                                       :category/seq seq}])))
 
 (defn new-rule [dec-id item-one item-two cat result]
  (reset! db (datascript/db-with @db [{:rule/user.id user-id
                                       :rule/decision.id dec-id
                                       :rule/id {:db/id -1}
                                       :rule/item.one.id item-one
                                       :rule/item.two.id item-two
                                       :rule/category.id cat
                                       :rule/item.result.id result
                                        :rule/deleted? false}])))

(defn update-rule [dec-id rule-id item-one item-two cat result]
  (reset! db (datascript/db-with @db [{:rule/user.id user-id
                                       :rule/decision.id dec-id
                                       :rule/id rule-id
                                       :rule/item.one.id item-one
                                       :rule/item.two.id item-two
                                       :rule/category.id cat
                                       :rule/item.result.id result}])))


; needs to set all sub tables to soft delete -- user will never see the child when parent is deleted
(defn delete-decision [dec-id ];item-id]
  (reset! db (datascript/db-with @db [{:decision/user.id user-id
                                      ; :decision/decision.id dec-id
                                       :decision/id item-id
                                       :decision/deleted? true}])))

(defn delete-item [dec-id item-id]
  (reset! db (datascript/db-with @db [{:item/user.id user-id
                                       :item/decision.id dec-id
                                       :item/id item-id
                                       :item/deleted? true}])))

(defn delete-category [dec-id item-id]
  (reset! db (datascript/db-with @db [{:category/user.id user-id
                                       :category/decision.id dec-id
                                       :category/id item-id
                                       :category/deleted? true}])))


(defn delete-rule [dec-id item-id]
  (reset! db (datascript/db-with @db [{:rule/user.id user-id
                                       :rule/decision.id dec-id
                                       :rule/id item-id
                                       :rule/deleted? true}])))
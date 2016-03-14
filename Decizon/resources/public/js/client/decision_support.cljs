(ns client.decision-support
  (:require [clojure.set :as set]
            [client.session-mang :as s]
            [client.tools :as tls]))


(defn add-dec [results-map]
  (let [verified-results-map (if (> (:item-one results-map) (:item-two results-map)) 
                               results-map
                               (assoc results-map :item-one (:item-two results-map) :item-two (:item-one results-map)))] 
    (s/add-decision-result verified-results-map )))

;session parameters should not be passed
(defn elements-not-set [item-size cat-size decision-list]
  (do (println (map #(vector (:item-one %) (:item-two %) (:catagory %)) decision-list))
  (set/difference 
    (into #{}
          (filter 
            #(and (>= (first %) (second %)) 
                  (not (= (first %) (second %))))
            (for [item-index (range item-size) item-index-2 (range item-size) cat-index (range cat-size )]
              [item-index item-index-2 cat-index])))
    (into #{} 
          (map #(vector (:item-one %) (:item-two %) (:catagory %)) decision-list)))))
 
;session parameters should not be passed
(defn next-rand-compare [dec-list item-list cat-list]
    "gets an index that has not been selected"
    (let [[it-n-1 it-n-2 cat-n]  
          (rand-nth 
            (into [] 
                  (elements-not-set (count item-list) (count cat-list) dec-list)))]
      [{:item-name-one (:name (nth item-list it-n-1))
        :item-name-two (:name (nth item-list it-n-2))
        :category-name (:name (nth cat-list cat-n))}
       (tls/decision-result. it-n-1 it-n-2 cat-n nil)]))



(comment
  (defn get-dec-value [item-num-1 item-num-2 cat-num decision-list] 
  "returns value based on position. nil if value not found"
  (let [[large-index small-index] (if (< item-num-1 item-num-2) [item-num-2 item-num-1] [item-num-1 item-num-2])]
  (first 
    (map #(if (empty? %) [] (last %)) small-index
         (filter #(and (= large-index (first %)) (= small-index (second %)) (= cat-num (nth % 2))) decision-list)))))
  
  )

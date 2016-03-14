(ns client.decision-support
  (:require [clojure.set :as set]))

; decision list is of format [[item-pos item-pos cat-pos value] ...]
(defn add-dec [session dec-list-key results-map]
  (let [data-keys (if (> (:item-loc-1 results-map) (:item-loc-2 results-map)) 
                    [:item-loc-1 :item-loc-2 :cat-loc :result]
                    [:item-loc-2 :item-loc-1 :cat-loc :result])
        results-vec (into [] (for [values data-keys]
                               (values results-map)))] 
    (reset! session 
            (assoc @session 
                    dec-list-key
                    (conj (:decision-result-list @session) results-vec)))))

(defn elements-not-set [item-size cat-size decision-list]
  (do (println decision-list)
  (set/difference 
    (into #{}
          (filter 
            #(and (>= (first %) (second %)) 
                  (not (= (first %) (second %))))
            (for [item-index (range item-size) item-index-2 (range item-size) cat-index (range cat-size )]
              [item-index item-index-2 cat-index])))
    (into #{} 
          (map #(subvec % 0 3) decision-list)))))
 
(defn get-dec-value [item-num-1 item-num-2 cat-num decision-list] 
  "returns value based on position. nil if value not found"
  (let [[large-index small-index] (if (< item-num-1 item-num-2) [item-num-2 item-num-1] [item-num-1 item-num-2])]
  (first 
    (map #(if (empty? %) [] (last %)) small-index
         (filter #(and (= large-index (first %)) (= small-index (second %)) (= cat-num (nth % 2))) decision-list)))))
 
(defn next-rand-compare
  ([dec-list item-list cat-list]
    "gets an index that has not been selected"
    (let [[it-n-1 it-n-2 cat-n]  
          (rand-nth 
            (into [] 
                  (elements-not-set (count item-list) (count cat-list) dec-list)))]
      {:item-loc-1 it-n-1
       :item-name-1 (nth item-list it-n-1) 
       :item-loc-2 it-n-2 
       :item-name-2 (nth item-list it-n-2)
       :cat-loc cat-n 
       :cat-name (nth cat-list cat-n)})))



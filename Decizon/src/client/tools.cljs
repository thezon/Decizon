(ns client.tools)

;map standardizations
(defrecord summary-decision [name
                             name-id
                             perc-comp])



;old struct
(defrecord category [name 
                     seq
                     weight])

;old struct
(defrecord item [name seq])


;old struct
(defrecord decision-result [item-one 
                            item-two 
                            category 
                            result])

(defrecord decision-data [name
                          key
                        ;  perc-comp
                          item-list
                          category-list
                          decision-result-list])

(defn progress-format [comp-perc]
  (cond
    (= 0 comp-perc)
    "Not Started"
    (= 100 comp-perc)
    "Completed"
    :default
    (str comp-perc " Completed")))
    
(defn stand-name [nav-key type-key]
  "Standardized names based on nav type"
  (cond 
    (= type-key :list)
    (keyword (str (name nav-key) "-list"))
    (= type-key :edit) 
    (str (name nav-key) "-edit")
    (= type-key :edit-nav)
    (keyword (str (name nav-key) "-edit"))
    (= type-key :save-nav) 
    (keyword (str (name nav-key) "-save"))))



(ns data.brewers-data
  (:require [datomic.api :as d :refer (q)]))
(comment
(def uri "datomic:mem://resume")

(def schema-tx (read-string (slurp "resources/schema/resumeSchema.edn")))

(def data-tx (read-string (slurp "resources/schema/resumeData.edn")))

(defn init-db []
  (when (d/create-database uri)
    (let [conn (d/connect uri)]
      @(d/transact conn schema-tx)
      @(d/transact conn data-tx))))

(defn querywrap [query params]
  (let [_ (init-db)
        conn (d/connect uri)]
    (q query (d/db conn) params)))

(defn get-resume-type[type]
     (ffirst
         (querywrap '[:find ?restype :in $ ?type :where [?restype :resume/resumetype ?type]] type)))

(defn get-desc [id attr]
  (into []  
        (apply concat 
               (data.resumedata/querywrap 
                 '[:find ?desc
                   :in $ [?id ?attr]
                   :where
                   [?id ?attr ?desc]]
                 [id attr]))))

(defn get-job-desc [title name]
  (into []  
        (apply concat
               (data.resumedata/querywrap 
                 '[:find  ?name ?start ?end 
                   :in $ [?title ?name]
                   :where
                   [?p :job/emp-name ?name]
                   [?p :job/title ?title]
                   [?p :job/date-start ?start]
                   [?p :job/date-end ?end]]
                 [title name]))))

(defn get-jobs [res-id]
  (data.resumedata/querywrap 
    '[:find ?title ?desc
      :in $ ?res-type
      :where
      [?p :job/title ?title]
      [?p :job/emp-name ?name]
      [(data.resumedata/get-job-desc ?title ?name) ?desc]]
    res-id))

(defn get-education [res-id]
  (data.resumedata/querywrap 
    '[:find ?name ?start ?end ?degree ?gpa ?desc
      :in $ ?res-type
      :where
      [?p :education/resumetype ?res-type]
      [?p :education/college-name ?name]
      [?p :education/date-start ?start]
      [?p :education/date-end ?end]
      [?p :education/degree ?degree]
      [?p :education/gpa ?gpa]
      [(data.resumedata/get-desc ?p :education/description) ?desc]]
    res-id))

(defn get-profile [res-id]
  (into [] 
        (data.resumedata/querywrap 
          '[:find ?title ?desc
            :in $ ?res-type
            :where
            [?p :profile/resumetype ?res-type]
            [?p :profile/title ?title]
            [(data.resumedata/get-desc ?p :profile/description) ?desc]]
          res-id)))

(defn get-project [res-id]
  (data.resumedata/querywrap 
    '[:find ?title ?desc
      :in $ ?res-type
      :where
      [?p :project/resumetype ?res-type]
      [?p :project/title ?title]
      [(data.resumedata/get-desc ?p :project/description) ?desc]]
    res-id))

(defn get-concept [res-id]
  (data.resumedata/querywrap 
    '[:find ?title ?desc
      :in $ ?res-type
      :where
      [?p :concept/resumetype ?res-type]
      [?p :concept/title ?title]
       [(data.resumedata/get-desc ?p :concept/summary) ?desc]]
    res-id))

(defn get-statement [res-id]
  (data.resumedata/querywrap 
    '[:find ?state 
      :in $ ?res-type
      :where
      [?p :statement/resumetype ?res-type]
      [?p :statement/statement ?state]]
    res-id))


(defn get-resume [res-id]
  {:statement (get-statement res-id)
   :project (get-project res-id)
   :concept  (get-concept res-id)
   :profile   (get-profile res-id)
   :education (get-profile res-id)
   :job (get-jobs res-id)})

(defn get-resume-types []
  (data.resumedata/querywrap 
    '[:find ?p ?res-type
      :where
      [?p :resume/resumetype ?res-type]] nil)))
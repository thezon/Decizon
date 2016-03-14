(ns auto-deploy
  (:require [cljs.closure :as c]
            [server.decizon-server :as s]
            [compojure.handler :as h]
            [ring.adapter.jetty :as j]
            [client.styles :as style]
            [garden.core]))

(def output-file "resources/public/js/main.js")   ;Clojurescript target output file
(def entry-var s/app)                             ;Ring applications variable
(def server-port 3001)                            ;server port 
(def output-dir "resources/public/js/")           ;Clojurescript output directory

; Watch for clojure script changes and auto compile
(def buildref  
  (future
      (def options {
                    :output-to output-file
                    :output-dir output-dir
                    :source-paths ["src/"]
                    :figwheel true
                    :warnings true})
      (c/build "src" options)     
      (c/watch "src" options))) 

; auto start jetty server
(def serverref
  (future
    (j/run-jetty (h/site entry-var) {:port server-port})))
  
(defn kill-processes []
  (future-cancel buildref)
  (future-cancel serverref))


(defn comp-static-styles []
  (garden.core/css {:output-to "resources/public/style/staticStyles.css"} 
                   style/static-styles ))
  
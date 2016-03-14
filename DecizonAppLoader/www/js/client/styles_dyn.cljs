(ns client.styles-dyn
  (:require [garden.core :refer [css]]))

(defn title-animation [mouse-pos-vec]
  (css [:.title-app-name {:float "left"
                           :padding-left "10px"
                           :text-shadow "5px 5px 5px gray"}]))


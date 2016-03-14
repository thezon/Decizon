(ns client.brewers-main
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
            [cljs.reader :as read]
            [om-bootstrap.modal :as md]
            [garden.core :refer [css]]
            [om-bootstrap.progress-bar :as pb]
            [ajax.core :refer [GET POST]]))
 
(enable-console-print!)   

(document/alert "test")

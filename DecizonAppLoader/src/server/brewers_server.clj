
(ns server.brewers-server
  (:require 
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.util.response :as ring-resp]
    [data.brewers-data :as data]
    [liberator.core :only [defresource]]
    [ring.middleware.resource :as rsc]))
  

(defn server-test [request]
  (ring-resp/response 
    "Server online"))

(defroutes app
  (GET "/servertest" request (server-test request))
  (route/resources "/pages/"))
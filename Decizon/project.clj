(defproject Decizon "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies  [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [liberator "0.13"];should be removed
                 [garden "1.2.5"]
                 [ring "1.4.0-RC1"]
                 [compojure "1.3.4"]
                 [org.omcljs/om "0.8.8" :exclusions [cljsjs/react]]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [org.clojure/tools.logging "0.3.1"]
                 [cljsjs/react-with-addons "0.12.2-4"]
                 [hiccups "0.3.0"]
                 [racehub/om-bootstrap "0.5.0"]
                 [cljs-ajax "0.3.11"]
                 ;[com.datomic/datomic-free "0.8.3826"]
                 [datascript "0.11.6"]]
    :plugins [[lein-cljsbuild "1.0.5"]
              [lein-figwheel "0.5.0-2"]]
    :cljsbuild {
                :builds [ { :id "decizon" 
                           :source-paths ["src/"]
                           :figwheel true
                           :compiler {:main "client.decizon-main"
                                      :asset-path "js/out"
                                      :output-to "resources/public/js/main.js"
                                      :output-dir "resources/public/js/" }}]}
    :figwheel {
               :http-server-root "public" ;; this will be in resources/
               :server-port 3449          ;; default
               :server-ip   "0.0.0.0"     ;; default
               
               ;; CSS reloading (optional)
               ;; :css-dirs has no default value 
               ;; if :css-dirs is set figwheel will detect css file changes and
               ;; send them to the browser
               :css-dirs ["resources/public/style/"]
               
               ;; Server Ring Handler (optional)
               ;; if you want to embed a ring handler into the figwheel http-kit
               ;; server
               :ring-handler server.decizon-server/app})

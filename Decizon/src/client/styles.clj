(ns client.styles)

(def static-styles 

   [
    [:.drop-selection {:font-size "2em"}]
    
    [:button {:height "2.5em !important"}]
    
    [:input {;:height "1.5em !important"
             ;:font-size "2em  !important"
             :font-weight "bolder"}]
    
    [:.options-box {:background-color "white"
                    :opacity "0.3"
                   ; :border "1px solid black"
                    :margin "3px"
                    :padding "0px"}]
    
    [:#current-header-label {:padding "0px"
                             :margin-left "auto"
                             :margin-right "auto"
                             :margin-top "8px"
                             :text-align "center"
                             :background-color "rgba(255,255,255,0.5)"
                             :box-shadow "0px 0px 10px rgba(255,255,255,0.5)"
                             ;:border-radius "25px"
                             :width "100%"
                             :font-weight "bold"}]
    
       [:.select-composite-item {:padding "0px"
                   :margin-left "auto"
                   :margin-right "auto"
                   :margin-top "8px"
                   :text-align "center"
                   :background-color "LightSteelBlue"
                   :border-radius "0px 25px 25px 0px"
                   :width "40%"
                   :font-weight "bold"}]
       
    [:.select-item {:padding "0px"
                   :margin-left "auto"
                   :margin-right "auto"
                   :margin-top "8px"
                   :text-align "center"
                   :background-color "LightSteelBlue"
                   :border-radius "25px"
                   :width "80%"
                   :font-weight "bold"}]
    [:.name-input {:width "80% !important"
                   :margin "auto"}]
    
    [:.label-item {:padding "0px"
                   :margin-left "auto"
                   :margin-right "auto"
                   :margin-top "8px"
                   :text-align "center"
                   :background-color "rgba(255,255,255,0.5)"
                   :width "80%"
                   :font-weight "bold"}] 
    
    [:.label-desc {:font-weight "bold"
                   :padding ".2em"}]
    
    [:#menu-bar {:background-color "LightSteelBlue"
                 :box-shadow "0px 5px 5px LightSteelBlue"
                 :border-bottom "1px" 
                 :padding "0px"
                 :margin "0px"}]
    
    [:#entry-spacer {:width "20%" }]
    
    
    [:table>tbody>tr>td {:border-top "0px !important"}]
    
    [:.menu-icon {:padding-left "5%"}]
 
    [:.title-app-name {:text-align "right"
                       :margin-right "5%"
                       :margin-top "0px"
                       :margin-bottom "0px"
                       :font "bold"
                       :text-shadow "2px 2px 3px black"}]
    
    [:.title-app-name {:font-weight "bold"}]
    
    [:#menu-middle {;:width "100%"
                    :padding "0px"
                    :font-weight "bold"
                    :font-size "1.5em"
                    :margin "0px"
                    ;:box-shadow "0px 0px 20px white"
                    :background-color "white"
                    :text-align  "center"
                    :border-radius ".5em"
                    :border "2px white solid"
                    }]
    
        [:.menu-middle-title {:width "100%"
                    :padding "0px"
                    :font-weight "bold"
                    :font-size "1em"
                    :margin "0px"
                    :text-align  "center"}]

        [:.title-header-label {:float "left"
                               :padding-left "10px"
                               :text-shadow "5px 5px 5px gray"}]
        [:.header-table {:width "100%"}] 
        
        [:body {:background-image "url('/pages/images/background.png')"
                :background-repeat "repeat";;:background "linear-gradient(rgb(232,232,232), rgb(50,50,50))"
                ;:background-color "rgb(100, 100, 100)"
                }]
   
        [:.nav-bar {:border "thin black solid"
                    :text-align "center"
                    :width "100%"
                    :background "rgb(232,232,232)"
                    :text "bold"}] 
   
        [:.arrow-select-box {:background-color "LightSteelBlue"
                             :padding-right "1em"
                             :padding-left "1em"
                             :font-weight "bold"
                             :text-align "middle"}]
        
        [:.arrow-select-td {:text-align "center"
                        :width "1%"}]
   
        [:#arrow-select {
                   :height "0" 
                   :padding "0px"
                   :margin "0px"
                   :border-top "1em solid transparent"
                   :border-bottom "1em solid transparent"
                   :border-left "0.5em solid LightSteelBlue"}]
      
        [:.arrow-right {
                  :height "0" 
                       :padding "0px"
                       :margin "0px"
                  :border-top "1em solid transparent"
                  :border-bottom "1em solid transparent"
                  :border-right "0.5em solid blue"}]
   
        [:.arrow-left {:height ".5em" 
                  :padding "0px"
                  :margin "0px"
                  :border-top "1em solid transparent"
                  :border-bottom "1em solid transparent"
                  :border-left "0.5em solid blue"}]
      
        [:.arrow-box-right {:background-color "rgb(232,232,232)"
                         :height "1.5em" 
                           :font-weight "bolder"
                         :font-size "1em"                         
                         :padding "0px"
                         :margin "0px"
                            :border-radius "0em .5em .5em 0em"
                         :border "3px blue solid"}]
      
        [:.arrow-box-left {:background-color "rgb(232,232,232)"
                         :height "1.5em" 
                           :font-weight "bolder"
                           :font-size "1em"
                         :padding " 0px"
                         :margin "0px"
                         :border-radius ".5em 0em 0em .5em"
                         :border "3px blue solid"}]
      
        [:#entry-comp-table {:border "none"}]
                           
        [:.max-width {:width "100%"}]
      
        [:.min-width {:width "0%"}]
      
        [:.text-middle {:text-align "center"}]
      
        [:#field-comp {:margin "0 auto"
                       :width "100%"}]
      
        [:#inner-field-comp {:position "absolute"
                             :left "30%"
                             :margin-left "-25%"}]
      
        [:.no-spacing {:padding "0px"
                       :margin "0px"}]

        [:.choice-td {:width "50%"}]
      ]
   ) 

// Compiled by ClojureScript 0.0-3211 {}
goog.provide('client.brewers_main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('client.decision_support');
goog.require('om_bootstrap.modal');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om.dom');
goog.require('om_bootstrap.progress_bar');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.random');
goog.require('cljs.reader');
goog.require('om_bootstrap.nav');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.table');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
client.brewers_main.session = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"working-name","working-name",917919027),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"decision-list","decision-list",794799948),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Car"], null),new cljs.core.Keyword(null,"item-list","item-list",-1307039302),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sentra","Civic","Soal","Jetta","A4"], null),new cljs.core.Keyword(null,"catagory-list","catagory-list",1663697369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPG","Acceleration","Comfort","Style"], null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"decision","decision",820953053),new cljs.core.Keyword(null,"decision","decision",820953053),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),null,new cljs.core.Keyword(null,"working-num","working-num",200667612),null], null));
client.brewers_main.device_store = (function client$brewers_main$device_store(){
var G__21625 = arguments.length;
switch (G__21625) {
case 1:
return client.brewers_main.device_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return client.brewers_main.device_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

client.brewers_main.device_store.cljs$core$IFn$_invoke$arity$1 = (function (val_name){
return localStorage.getItem(val_name);
});

client.brewers_main.device_store.cljs$core$IFn$_invoke$arity$2 = (function (val_name,val){
return localStorage.setItem(val_name,val);
});

client.brewers_main.device_store.cljs$lang$maxFixedArity = 2;
client.brewers_main.store_new_decision = (function client$brewers_main$store_new_decision(name){
return client.brewers_main.device_store.call(null,"decision-name",name);
});
client.brewers_main.stand_name = (function client$brewers_main$stand_name(nav_key,type_key){
if(cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"list","list",765357683))){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,nav_key)),cljs.core.str("-list")].join(''));
} else {
if(cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"edit","edit",-1641834166))){
return [cljs.core.str(cljs.core.name.call(null,nav_key)),cljs.core.str("-edit")].join('');
} else {
if(cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"edit-nav","edit-nav",1304752706))){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,nav_key)),cljs.core.str("-edit")].join(''));
} else {
if(cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"save-nav","save-nav",-574351303))){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,nav_key)),cljs.core.str("-save")].join(''));
} else {
return null;
}
}
}
}
});
client.brewers_main.session_value = (function client$brewers_main$session_value(list_key,num){

return cljs.core.nth.call(null,list_key.call(null,cljs.core.deref.call(null,client.brewers_main.session)),num);
});
client.brewers_main.get_id_value = (function client$brewers_main$get_id_value(name_key){
return document.getElementById(cljs.core.name.call(null,name_key)).value;
});
/**
 * mang. session param. if vale supples then sets if no value supplied returns current value
 */
client.brewers_main.session_param = (function client$brewers_main$session_param(){
var G__21628 = arguments.length;
switch (G__21628) {
case 1:
return client.brewers_main.session_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return client.brewers_main.session_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

client.brewers_main.session_param.cljs$core$IFn$_invoke$arity$1 = (function (param_key){
return param_key.call(null,cljs.core.deref.call(null,client.brewers_main.session));
});

client.brewers_main.session_param.cljs$core$IFn$_invoke$arity$2 = (function (param_key,value){
return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),param_key,value));
});

client.brewers_main.session_param.cljs$lang$maxFixedArity = 2;
client.brewers_main.page_nav = (function client$brewers_main$page_nav(page){
client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),null);

return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),new cljs.core.Keyword(null,"page","page",849072397),page));
});
client.brewers_main.new_element = (function client$brewers_main$new_element(component_name,session_list){
var val = client.brewers_main.get_id_value.call(null,component_name);
if(!(((val == null)) || ((cljs.core.count.call(null,val) < (1))))){
return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),session_list,cljs.core.conj.call(null,session_list.call(null,cljs.core.deref.call(null,client.brewers_main.session)),val)));
} else {
return null;
}
});
client.brewers_main.del_element = (function client$brewers_main$del_element(loc_num,session_list){
var entry_col = session_list.call(null,cljs.core.deref.call(null,client.brewers_main.session));
var rem_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.subvec.call(null,entry_col,(0),loc_num),cljs.core.subvec.call(null,entry_col,(loc_num + (1)))));
return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),session_list,rem_vec));
});
/**
 * Clears session list and sets an inital value if passed.
 * if value is a key then will get value from html id if not directly insert value
 */
client.brewers_main.clear_list = (function client$brewers_main$clear_list(){
var G__21631 = arguments.length;
switch (G__21631) {
case 1:
return client.brewers_main.clear_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return client.brewers_main.clear_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

client.brewers_main.clear_list.cljs$core$IFn$_invoke$arity$1 = (function (session_list){
return client.brewers_main.clear_list.call(null,null,session_list);
});

client.brewers_main.clear_list.cljs$core$IFn$_invoke$arity$2 = (function (init_value,session_list){
return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),session_list,(((init_value == null))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((init_value instanceof cljs.core.Keyword))?client.brewers_main.get_id_value.call(null,init_value):init_value)], null))));
});

client.brewers_main.clear_list.cljs$lang$maxFixedArity = 2;
client.brewers_main.clear_working_data = (function client$brewers_main$clear_working_data(){

client.brewers_main.clear_list.call(null,new cljs.core.Keyword(null,"working-name","working-name",917919027));

client.brewers_main.clear_list.call(null,new cljs.core.Keyword(null,"item","item",249373802));

return client.brewers_main.clear_list.call(null,new cljs.core.Keyword(null,"catagory","catagory",1351046609));
});
client.brewers_main.rename_element = (function client$brewers_main$rename_element(loc_num,value,data_list_key){
var entry_col = data_list_key.call(null,cljs.core.deref.call(null,client.brewers_main.session));
var update_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.subvec.call(null,entry_col,(0),loc_num),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),cljs.core.subvec.call(null,entry_col,(loc_num + (1)))));
return cljs.core.reset_BANG_.call(null,client.brewers_main.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.brewers_main.session),data_list_key,update_vec));
});
client.brewers_main.header = (function client$brewers_main$header(title,next_nav,current,last_nav,options){
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"id": "menu-bar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.table,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.random.glyphicon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-icon",new cljs.core.Keyword(null,"glyph","glyph",2119448117),"th-large"], null))],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,React.DOM.h1({"className": "title-app-name"},"DeciZon!"),cljs.core.PersistentVector.EMPTY)],null)))],null)))),((!(((next_nav == null)) && ((last_nav == null))))?cljs.core.apply.call(null,React.DOM.table,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{"className": "min-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow-right"})],null)))),cljs.core.apply.call(null,React.DOM.td,{"onClick": om_tools.dom.format_opts.call(null,(function (){
return client.brewers_main.page_nav.call(null,last_nav);
})), "className": "text-middle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "arrow-box-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,last_nav)],null))))],null)))),cljs.core.apply.call(null,React.DOM.td,{"className": "td-spacer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"id": "menu-middle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,current)],null))))],null)))),((!((next_nav == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.td,{"onClick": om_tools.dom.format_opts.call(null,(function (){
return client.brewers_main.page_nav.call(null,next_nav);
})), "className": "text-middle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "arrow-box-left"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,next_nav)],null))))],null)))),cljs.core.apply.call(null,React.DOM.td,{"className": "min-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow-left"})],null))))], null):React.DOM.td({"className": "max-width"}))],null))))],null)))):((!((current == null)))?cljs.core.apply.call(null,React.DOM.div,{"className": "menu-middle-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[current],null)))):null))],null)))),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"working-name","working-name",917919027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))) && (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__21633_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-current","show-current",-282429386),p1__21633_SHARP_);
}),options)))))?cljs.core.apply.call(null,React.DOM.h3,{"id": "current-header-label"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Deciding on a ",new cljs.core.Keyword(null,"working-name","working-name",917919027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))],null)))):null)],null))));
});
client.brewers_main.element_button_behavior = (function client$brewers_main$element_button_behavior(value_type,element_num){
return om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Options"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return client.brewers_main.del_element.call(null,element_num,value_type);
})], null),"Delete"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return client.brewers_main.rename_element.call(null,element_num,value_type,"worked");
})], null),"Rename")));
});
client.brewers_main.new_element_comp = (function client$brewers_main$new_element_comp(nav_key,num,options){

var partial_name = [cljs.core.str(cljs.core.name.call(null,nav_key)),cljs.core.str(num)].join('');
var ren_param_name = [cljs.core.str(partial_name),cljs.core.str("-rename")].join('');
var ren_param_key = cljs.core.keyword.call(null,[cljs.core.str(partial_name),cljs.core.str("-rename")].join(''));
var delete_param_name = [cljs.core.str(partial_name),cljs.core.str("-delete")].join('');
var delete_param_key = cljs.core.keyword.call(null,[cljs.core.str(partial_name),cljs.core.str("-delete")].join(''));
var working_list_key = new cljs.core.Keyword(null,"working-name","working-name",917919027);
var data_list_key = client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"list","list",765357683));
var field_value = cljs.core.nth.call(null,data_list_key.call(null,cljs.core.deref.call(null,client.brewers_main.session)),num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.table,{"className": "max-width no-spacing"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{"className": "arrow-select-td"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)),num))?React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
return client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),null);
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "arrow-select-box"},"Cancel"):React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
return client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),num);
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "arrow-select-box"},"Edit"))],null)))),cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "label-item max-width no-spacing"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[field_value],null))))],null)))),((!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (p1__21634_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"select","select",1147833503),p1__21634_SHARP_);
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
,options))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.td,{"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-name","working-name",917919027),field_value);

return client.brewers_main.page_nav.call(null,new cljs.core.Keyword(null,"item","item",249373802));
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "arrow-select-td"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-name","working-name",917919027),field_value);

return client.brewers_main.page_nav.call(null,new cljs.core.Keyword(null,"item","item",249373802));
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "arrow-select-box"},"Select")],null)))),cljs.core.apply.call(null,React.DOM.td,{"className": "arrow-select-td"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"id": "arrow-select"})],null))))], null):null)],null))))],null))))],null))))],null)))),((cljs.core._EQ_.call(null,num,client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))))?cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.table,{"className": "max-width no-spacing"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
cljs.core.println.call(null,client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"edit-nav","edit-nav",1304752706)));

client.brewers_main.page_nav.call(null,client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"edit-nav","edit-nav",1304752706)));

client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),data_list_key);

return client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-num","working-num",200667612),num);
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "select-item no-spacing"},"Manage")],null)))),cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value){
return (function (){
client.brewers_main.del_element.call(null,num,data_list_key);

return client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),null);
});})(partial_name,ren_param_name,ren_param_key,delete_param_name,delete_param_key,working_list_key,data_list_key,field_value))
), "className": "select-item no-spacing"},"Delete")],null))))],null))))],null))))],null))))],null)))):null)], null);
});
client.brewers_main.entry_component = (function client$brewers_main$entry_component(data,owner,header_func,nav_key,options){

var data_list_key = cljs.core.keyword.call(null,client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"list","list",765357683)));
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[header_func,om_bootstrap.table.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-width"], null),om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,(((client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)) == null))?React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (data_list_key){
return (function (){
return client.brewers_main.page_nav.call(null,client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"save-nav","save-nav",-574351303)));
});})(data_list_key))
), "className": "select-item"},"Create New"):null),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__12128__auto__ = ((function (data_list_key){
return (function client$brewers_main$entry_component_$_iter__21639(s__21640){
return (new cljs.core.LazySeq(null,((function (data_list_key){
return (function (){
var s__21640__$1 = s__21640;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21640__$1);
if(temp__4126__auto__){
var s__21640__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21640__$2)){
var c__12126__auto__ = cljs.core.chunk_first.call(null,s__21640__$2);
var size__12127__auto__ = cljs.core.count.call(null,c__12126__auto__);
var b__21642 = cljs.core.chunk_buffer.call(null,size__12127__auto__);
if((function (){var i__21641 = (0);
while(true){
if((i__21641 < size__12127__auto__)){
var num = cljs.core._nth.call(null,c__12126__auto__,i__21641);
cljs.core.chunk_append.call(null,b__21642,client.brewers_main.new_element_comp.call(null,nav_key,num,options));

var G__21643 = (i__21641 + (1));
i__21641 = G__21643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21642),client$brewers_main$entry_component_$_iter__21639.call(null,cljs.core.chunk_rest.call(null,s__21640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21642),null);
}
} else {
var num = cljs.core.first.call(null,s__21640__$2);
return cljs.core.cons.call(null,client.brewers_main.new_element_comp.call(null,nav_key,num,options),client$brewers_main$entry_component_$_iter__21639.call(null,cljs.core.rest.call(null,s__21640__$2)));
}
} else {
return null;
}
break;
}
});})(data_list_key))
,null,null));
});})(data_list_key))
;
return iter__12128__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,data_list_key.call(null,data)))));
})()],null)))),client.brewers_main.device_store.call(null,"test")],null))));
});
client.brewers_main.edit_component = (function client$brewers_main$edit_component(data,owner,header_func,nav_key,save_QMARK_,options){
var com_name = client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var working_list = client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747));
var rec_num = client.brewers_main.session_param.call(null,new cljs.core.Keyword(null,"working-num","working-num",200667612));
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[header_func,React.DOM.br({}),cljs.core.apply.call(null,React.DOM.table,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td({}),cljs.core.apply.call(null,React.DOM.td,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.input.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"name-input",new cljs.core.Keyword(null,"id","id",-1388402092),com_name,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(save_QMARK_)?"Enter Name":[cljs.core.str("Rename "),cljs.core.str(client.brewers_main.session_value.call(null,working_list,rec_num))].join(''))], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td({}),cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.table,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (com_name,working_list,rec_num){
return (function (){
if(cljs.core.truth_(save_QMARK_)){
client.brewers_main.new_element.call(null,com_name,client.brewers_main.stand_name.call(null,nav_key,new cljs.core.Keyword(null,"list","list",765357683)));
} else {
client.brewers_main.rename_element.call(null,rec_num,client.brewers_main.get_id_value.call(null,com_name),working_list);
}

client.brewers_main.device_store.call(null,"test",client.brewers_main.get_id_value.call(null,com_name));

return client.brewers_main.page_nav.call(null,nav_key);
});})(com_name,working_list,rec_num))
), "className": "select-item"},"save")],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onClick": om_tools.dom.format_opts.call(null,((function (com_name,working_list,rec_num){
return (function (){
return client.brewers_main.page_nav.call(null,nav_key);
});})(com_name,working_list,rec_num))
), "className": "select-item"},"Cancel")],null))))],null)))],null))))],null))))],null))))],null))))],null))));
});
client.brewers_main.decide_page = (function client$brewers_main$decide_page(data,owner){
return om_tools.dom.element.call(null,React.DOM.div,client.brewers_main.header.call(null,"Decide",null,new cljs.core.Keyword(null,"decide","decide",264658269),new cljs.core.Keyword(null,"catagory","catagory",1351046609),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var compare_map = cljs.core.apply.call(null,client.decision_support.next_rand_compare,(function (){var iter__12128__auto__ = (function client$brewers_main$decide_page_$_iter__21648(s__21649){
return (new cljs.core.LazySeq(null,(function (){
var s__21649__$1 = s__21649;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21649__$1);
if(temp__4126__auto__){
var s__21649__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21649__$2)){
var c__12126__auto__ = cljs.core.chunk_first.call(null,s__21649__$2);
var size__12127__auto__ = cljs.core.count.call(null,c__12126__auto__);
var b__21651 = cljs.core.chunk_buffer.call(null,size__12127__auto__);
if((function (){var i__21650 = (0);
while(true){
if((i__21650 < size__12127__auto__)){
var values = cljs.core._nth.call(null,c__12126__auto__,i__21650);
cljs.core.chunk_append.call(null,b__21651,values.call(null,cljs.core.deref.call(null,client.brewers_main.session)));

var G__21652 = (i__21650 + (1));
i__21650 = G__21652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21651),client$brewers_main$decide_page_$_iter__21648.call(null,cljs.core.chunk_rest.call(null,s__21649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21651),null);
}
} else {
var values = cljs.core.first.call(null,s__21649__$2);
return cljs.core.cons.call(null,values.call(null,cljs.core.deref.call(null,client.brewers_main.session)),client$brewers_main$decide_page_$_iter__21648.call(null,cljs.core.rest.call(null,s__21649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12128__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decision","decision",820953053),new cljs.core.Keyword(null,"item-list","item-list",-1307039302),new cljs.core.Keyword(null,"catagory-list","catagory-list",1663697369)], null));
})());
if(cljs.core.empty_QMARK_.call(null,compare_map)){
return "Done";
} else {
return cljs.core.apply.call(null,React.DOM.table,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{"className": "text-middle max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3({},"Select the Best")],null))))],null)))),cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{"className": "text-middle max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cat-name","cat-name",-791588548).cljs$core$IFn$_invoke$arity$1(compare_map)],null))))],null))))],null)))),cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{"className": "choice-td"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.table,{"className": "max-width"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.tr,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.td,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"onClick": om_tools.dom.format_opts.call(null,((function (compare_map){
return (function (){
return client.decision_support.add_dec.call(null,client.brewers_main.session,new cljs.core.Keyword(null,"decision","decision",820953053),cljs.core.assoc.call(null,compare_map,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"item-loc-1","item-loc-1",-1562714434).cljs$core$IFn$_invoke$arity$1(compare_map)));
});})(compare_map))
), "className": "select-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-name-1","item-name-1",53342375).cljs$core$IFn$_invoke$arity$1(compare_map)],null))))],null)))),cljs.core.apply.call(null,React.DOM.td,{"className": "choice-td"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"onClick": om_tools.dom.format_opts.call(null,((function (compare_map){
return (function (){
return client.decision_support.add_dec.call(null,client.brewers_main.session,new cljs.core.Keyword(null,"decision","decision",820953053),cljs.core.assoc.call(null,compare_map,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"item-loc-2","item-loc-2",445906816).cljs$core$IFn$_invoke$arity$1(compare_map)));
});})(compare_map))
), "className": "select-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-name-2","item-name-2",-1835090034).cljs$core$IFn$_invoke$arity$1(compare_map)],null))))],null))))],null))))],null))))],null))))],null))))],null))));
}
})()],null)));
});
client.brewers_main.item_page = (function client$brewers_main$item_page(data,owner){
return client.brewers_main.entry_component.call(null,data,owner,client.brewers_main.header.call(null,"Items",new cljs.core.Keyword(null,"catagory","catagory",1351046609),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"decision","decision",820953053),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"item","item",249373802),cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.item_edit_page = (function client$brewers_main$item_edit_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Edit Item",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"item","item",249373802),false,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.item_save_page = (function client$brewers_main$item_save_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Create Item",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"item","item",249373802),true,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.catagory_edit_page = (function client$brewers_main$catagory_edit_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Edit Catagory",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"catagory","catagory",1351046609),false,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.catagory_save_page = (function client$brewers_main$catagory_save_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Create Catagory",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"catagory","catagory",1351046609),true,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.catagory_page = (function client$brewers_main$catagory_page(data,owner){
return client.brewers_main.entry_component.call(null,data,owner,client.brewers_main.header.call(null,"Catagory",new cljs.core.Keyword(null,"decide","decide",264658269),new cljs.core.Keyword(null,"catagory","catagory",1351046609),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"catagory","catagory",1351046609),cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.decision_edit_page = (function client$brewers_main$decision_edit_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Editing a Decision",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"decision","decision",820953053),false,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.decision_save_page = (function client$brewers_main$decision_save_page(data,owner){
return client.brewers_main.edit_component.call(null,data,owner,client.brewers_main.header.call(null,"Create Decision",null,"Create New Decision",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-current","show-current",-282429386)], null)),new cljs.core.Keyword(null,"decision","decision",820953053),true,cljs.core.PersistentVector.EMPTY);
});
client.brewers_main.decision_page = (function client$brewers_main$decision_page(data,owner){
return client.brewers_main.entry_component.call(null,data,owner,client.brewers_main.header.call(null,"Welcome",null,"Select or Create Decision",null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"decision","decision",820953053),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null));
});
client.brewers_main.error_page = (function client$brewers_main$error_page(data,owner){
return React.DOM.div(null,"A Terrible Error Has Occured!!!!!!!!!");
});
client.brewers_main.main = (function client$brewers_main$main(data,owner){
if(typeof client.brewers_main.t21656 !== 'undefined'){
} else {

/**
* @constructor
*/
client.brewers_main.t21656 = (function (owner,data,main,meta21657){
this.owner = owner;
this.data = data;
this.main = main;
this.meta21657 = meta21657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.brewers_main.t21656.prototype.om$core$IRender$ = true;

client.brewers_main.t21656.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decide","decide",264658269),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.decide_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.decision_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision-edit","decision-edit",561821546),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.decision_edit_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision-save","decision-save",-1278808031),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.decision_save_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.item_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item-edit","item-edit",-14823426),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.item_edit_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item-save","item-save",-1714831299),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.item_save_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"catagory","catagory",1351046609),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.catagory_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"catagory-edit","catagory-edit",-823804107),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.catagory_edit_page:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"catagory-save","catagory-save",-297279721),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.brewers_main.session))))?client.brewers_main.catagory_save_page:client.brewers_main.error_page
)))))))))).call(null,self__.data,self__.owner);
});

client.brewers_main.t21656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21658){
var self__ = this;
var _21658__$1 = this;
return self__.meta21657;
});

client.brewers_main.t21656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21658,meta21657__$1){
var self__ = this;
var _21658__$1 = this;
return (new client.brewers_main.t21656(self__.owner,self__.data,self__.main,meta21657__$1));
});

client.brewers_main.t21656.cljs$lang$type = true;

client.brewers_main.t21656.cljs$lang$ctorStr = "client.brewers-main/t21656";

client.brewers_main.t21656.cljs$lang$ctorPrWriter = (function (this__11953__auto__,writer__11954__auto__,opt__11955__auto__){
return cljs.core._write.call(null,writer__11954__auto__,"client.brewers-main/t21656");
});

client.brewers_main.__GT_t21656 = (function client$brewers_main$main_$___GT_t21656(owner__$1,data__$1,main__$1,meta21657){
return (new client.brewers_main.t21656(owner__$1,data__$1,main__$1,meta21657));
});

}

return (new client.brewers_main.t21656(owner,data,client$brewers_main$main,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,client.brewers_main.main,client.brewers_main.session,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=brewers_main.js.map
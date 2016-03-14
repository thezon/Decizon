// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___25172 = schema.utils.use_fn_validation;
var output_schema25164_25173 = om_bootstrap.types.Component;
var input_schema25165_25174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25166_25175 = schema.core.checker.call(null,input_schema25165_25174);
var output_checker25167_25176 = schema.core.checker.call(null,output_schema25164_25173);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176){
return (function om_bootstrap$random$jumbotron(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176){
return (function (G__25168,rest25169){
var validate__11904__auto__ = ufv___25172.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25177 = cljs.core.list_STAR_.call(null,G__25168,rest25169);
var temp__4126__auto___25178 = input_checker25166_25175.call(null,args__11905__auto___25177);
if(cljs.core.truth_(temp__4126__auto___25178)){
var error__11906__auto___25179 = temp__4126__auto___25178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__11906__auto___25179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25179,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25177,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25165_25174,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25168;
var children = rest25169;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25180 = output_checker25167_25176.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25180)){
var error__11906__auto___25181 = temp__4126__auto___25180;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__11906__auto___25181)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25181,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25164_25173,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176){
return (function (seq25170){
var G__25171 = cljs.core.first.call(null,seq25170);
var seq25170__$1 = cljs.core.next.call(null,seq25170);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__25171,seq25170__$1);
});})(ufv___25172,output_schema25164_25173,input_schema25165_25174,input_checker25166_25175,output_checker25167_25176))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema25164_25173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25165_25174], null)));
var ufv___25191 = schema.utils.use_fn_validation;
var output_schema25182_25192 = om_bootstrap.types.Component;
var input_schema25183_25193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25184_25194 = schema.core.checker.call(null,input_schema25183_25193);
var output_checker25185_25195 = schema.core.checker.call(null,output_schema25182_25192);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195){
return (function om_bootstrap$random$label(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195){
return (function (G__25186,rest25187){
var validate__11904__auto__ = ufv___25191.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25196 = cljs.core.list_STAR_.call(null,G__25186,rest25187);
var temp__4126__auto___25197 = input_checker25184_25194.call(null,args__11905__auto___25196);
if(cljs.core.truth_(temp__4126__auto___25197)){
var error__11906__auto___25198 = temp__4126__auto___25197;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__11906__auto___25198)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25198,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25196,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25183_25193,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25186;
var children = rest25187;
while(true){
var vec__25190 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__25190,(0),null);
var props = cljs.core.nth.call(null,vec__25190,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25199 = output_checker25185_25195.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25199)){
var error__11906__auto___25200 = temp__4126__auto___25199;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__11906__auto___25200)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25200,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25182_25192,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195){
return (function (seq25188){
var G__25189 = cljs.core.first.call(null,seq25188);
var seq25188__$1 = cljs.core.next.call(null,seq25188);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__25189,seq25188__$1);
});})(ufv___25191,output_schema25182_25192,input_schema25183_25193,input_checker25184_25194,output_checker25185_25195))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema25182_25192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25183_25193], null)));
var ufv___25210 = schema.utils.use_fn_validation;
var output_schema25201_25211 = om_bootstrap.types.Component;
var input_schema25202_25212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25203_25213 = schema.core.checker.call(null,input_schema25202_25212);
var output_checker25204_25214 = schema.core.checker.call(null,output_schema25201_25211);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214){
return (function om_bootstrap$random$well(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214){
return (function (G__25205,rest25206){
var validate__11904__auto__ = ufv___25210.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25215 = cljs.core.list_STAR_.call(null,G__25205,rest25206);
var temp__4126__auto___25216 = input_checker25203_25213.call(null,args__11905__auto___25215);
if(cljs.core.truth_(temp__4126__auto___25216)){
var error__11906__auto___25217 = temp__4126__auto___25216;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__11906__auto___25217)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25217,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25215,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25202_25212,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25205;
var children = rest25206;
while(true){
var vec__25209 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__25209,(0),null);
var props = cljs.core.nth.call(null,vec__25209,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25218 = output_checker25204_25214.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25218)){
var error__11906__auto___25219 = temp__4126__auto___25218;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__11906__auto___25219)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25219,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25201_25211,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214){
return (function (seq25207){
var G__25208 = cljs.core.first.call(null,seq25207);
var seq25207__$1 = cljs.core.next.call(null,seq25207);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__25208,seq25207__$1);
});})(ufv___25210,output_schema25201_25211,input_schema25202_25212,input_checker25203_25213,output_checker25204_25214))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema25201_25211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25202_25212], null)));
var ufv___25228 = schema.utils.use_fn_validation;
var output_schema25220_25229 = om_bootstrap.types.Component;
var input_schema25221_25230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25222_25231 = schema.core.checker.call(null,input_schema25221_25230);
var output_checker25223_25232 = schema.core.checker.call(null,output_schema25220_25229);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A simple shell for an h1 to appropriately space out and segment
 * sections of content on a page. It can utilize the h1’s default small
 * element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232){
return (function om_bootstrap$random$page_header(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232){
return (function (G__25224,rest25225){
var validate__11904__auto__ = ufv___25228.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25233 = cljs.core.list_STAR_.call(null,G__25224,rest25225);
var temp__4126__auto___25234 = input_checker25222_25231.call(null,args__11905__auto___25233);
if(cljs.core.truth_(temp__4126__auto___25234)){
var error__11906__auto___25235 = temp__4126__auto___25234;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__11906__auto___25235)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25235,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25233,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25221_25230,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25224;
var children = rest25225;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25236 = output_checker25223_25232.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25236)){
var error__11906__auto___25237 = temp__4126__auto___25236;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__11906__auto___25237)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25237,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25220_25229,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232){
return (function (seq25226){
var G__25227 = cljs.core.first.call(null,seq25226);
var seq25226__$1 = cljs.core.next.call(null,seq25226);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__25227,seq25226__$1);
});})(ufv___25228,output_schema25220_25229,input_schema25221_25230,input_checker25222_25231,output_checker25223_25232))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema25220_25229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25221_25230], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___25247 = schema.utils.use_fn_validation;
var output_schema25238_25248 = om_bootstrap.types.Component;
var input_schema25239_25249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25240_25250 = schema.core.checker.call(null,input_schema25239_25249);
var output_checker25241_25251 = schema.core.checker.call(null,output_schema25238_25248);
/**
 * Inputs: [opts :- ToolTip & children]
 * Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251){
return (function om_bootstrap$random$tooltip(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251){
return (function (G__25242,rest25243){
var validate__11904__auto__ = ufv___25247.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25252 = cljs.core.list_STAR_.call(null,G__25242,rest25243);
var temp__4126__auto___25253 = input_checker25240_25250.call(null,args__11905__auto___25252);
if(cljs.core.truth_(temp__4126__auto___25253)){
var error__11906__auto___25254 = temp__4126__auto___25253;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__11906__auto___25254)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25254,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25252,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25239_25249,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25242;
var children = rest25243;
while(true){
var vec__25246 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__25246,(0),null);
var _ = cljs.core.nth.call(null,vec__25246,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__10412__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25255 = output_checker25241_25251.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25255)){
var error__11906__auto___25256 = temp__4126__auto___25255;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__11906__auto___25256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25256,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25238_25248,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251){
return (function (seq25244){
var G__25245 = cljs.core.first.call(null,seq25244);
var seq25244__$1 = cljs.core.next.call(null,seq25244);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__25245,seq25244__$1);
});})(ufv___25247,output_schema25238_25248,input_schema25239_25249,input_checker25240_25250,output_checker25241_25251))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema25238_25248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25239_25249], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__16114__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__16114__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__16114__auto__;
})();

var component_fnk__16143__auto___25282 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema25262 = schema.core.Any;
var input_schema25263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map25260","map25260",-1983042167,null))], null);
var input_checker25264 = schema.core.checker.call(null,input_schema25263);
var output_checker25265 = schema.core.checker.call(null,output_schema25262);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function om_bootstrap$random$constructor25258(G__25266){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25266], null);
var temp__4126__auto___25284 = input_checker25264.call(null,args__11905__auto___25283);
if(cljs.core.truth_(temp__4126__auto___25284)){
var error__11906__auto___25285 = temp__4126__auto___25284;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor25258","constructor25258",2031991890,null),cljs.core.pr_str.call(null,error__11906__auto___25285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25285,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25283,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25263,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map25260 = G__25266;
while(true){
if(cljs.core.map_QMARK_.call(null,map25260)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map25260)));
}

var map25261 = plumbing.fnk.schema.safe_get.call(null,map25260,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map25261,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map25261,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map25261,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map25260,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t25271 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.random.t25271 = (function (G__25266,map25261,owner,props,children,map25260,validate__11904__auto__,input_checker25264,output_schema25262,output_checker25265,constructor25258,input_schema25263,ufv__,bs,meta25272){
this.G__25266 = G__25266;
this.map25261 = map25261;
this.owner = owner;
this.props = props;
this.children = children;
this.map25260 = map25260;
this.validate__11904__auto__ = validate__11904__auto__;
this.input_checker25264 = input_checker25264;
this.output_schema25262 = output_schema25262;
this.output_checker25265 = output_checker25265;
this.constructor25258 = constructor25258;
this.input_schema25263 = input_schema25263;
this.ufv__ = ufv__;
this.bs = bs;
this.meta25272 = meta25272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t25271.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t25271.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.t25271.prototype.om$core$IRender$ = true;

om_bootstrap.random.t25271.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4126__auto__)){
var od = temp__4126__auto__;
return React.DOM.button({"aria-hidden": true, "onClick": om_tools.dom.format_opts.call(null,od), "className": "close", "type": "button"},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.t25271.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t25271.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__10400__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__10400__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__10400__auto__;
}
})())){
var G__25274 = self__.owner;
G__25274.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__25274;
} else {
return null;
}
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.t25271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (_25273){
var self__ = this;
var _25273__$1 = this;
return self__.meta25272;
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.t25271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (_25273,meta25272__$1){
var self__ = this;
var _25273__$1 = this;
return (new om_bootstrap.random.t25271(self__.G__25266,self__.map25261,self__.owner,self__.props,self__.children,self__.map25260,self__.validate__11904__auto__,self__.input_checker25264,self__.output_schema25262,self__.output_checker25265,self__.constructor25258,self__.input_schema25263,self__.ufv__,self__.bs,meta25272__$1));
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.t25271.cljs$lang$type = true;

om_bootstrap.random.t25271.cljs$lang$ctorStr = "om-bootstrap.random/t25271";

om_bootstrap.random.t25271.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.random/t25271");
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

om_bootstrap.random.__GT_t25271 = ((function (owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265){
return (function om_bootstrap$random$constructor25258_$___GT_t25271(G__25266__$1,map25261__$1,owner__$1,props__$1,children__$1,map25260__$1,validate__11904__auto____$1,input_checker25264__$1,output_schema25262__$1,output_checker25265__$1,constructor25258__$1,input_schema25263__$1,ufv____$1,bs__$1,meta25272){
return (new om_bootstrap.random.t25271(G__25266__$1,map25261__$1,owner__$1,props__$1,children__$1,map25260__$1,validate__11904__auto____$1,input_checker25264__$1,output_schema25262__$1,output_checker25265__$1,constructor25258__$1,input_schema25263__$1,ufv____$1,bs__$1,meta25272));
});})(owner,children,props,bs,map25261,validate__11904__auto__,ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
;

}

return (new om_bootstrap.random.t25271(G__25266,map25261,owner,props,children,map25260,validate__11904__auto__,input_checker25264,output_schema25262,output_checker25265,om_bootstrap$random$constructor25258,input_schema25263,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25286 = output_checker25265.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25286)){
var error__11906__auto___25287 = temp__4126__auto___25286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor25258","constructor25258",2031991890,null),cljs.core.pr_str.call(null,error__11906__auto___25287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25287,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25262,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema25262,input_schema25263,input_checker25264,output_checker25265))
,schema.core.make_fn_schema.call(null,output_schema25262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25263], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__16143__auto___25282){
return (function om_bootstrap$random$alert_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___25282))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___25282){
return (function (data__16144__auto__,owner25257,p__25278){
var vec__25279 = p__25278;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__25279,(0),null);
return component_fnk__16143__auto___25282.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner25257,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___25282))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___25282){
return (function (seq25275){
var G__25276 = cljs.core.first.call(null,seq25275);
var seq25275__$1 = cljs.core.next.call(null,seq25275);
var G__25277 = cljs.core.first.call(null,seq25275__$1);
var seq25275__$2 = cljs.core.next.call(null,seq25275__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25276,G__25277,seq25275__$2);
});})(component_fnk__16143__auto___25282))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(){
var G__25281 = arguments.length;
switch (G__25281) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__16112__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m25259){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__16112__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m25259));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___25298 = schema.utils.use_fn_validation;
var output_schema25289_25299 = om_bootstrap.types.Component;
var input_schema25290_25300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25291_25301 = schema.core.checker.call(null,input_schema25290_25300);
var output_checker25292_25302 = schema.core.checker.call(null,output_schema25289_25299);
/**
 * Inputs: [opts :- Alert & children]
 * Returns: t/Component
 * 
 * Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302){
return (function om_bootstrap$random$alert(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302){
return (function (G__25293,rest25294){
var validate__11904__auto__ = ufv___25298.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25303 = cljs.core.list_STAR_.call(null,G__25293,rest25294);
var temp__4126__auto___25304 = input_checker25291_25301.call(null,args__11905__auto___25303);
if(cljs.core.truth_(temp__4126__auto___25304)){
var error__11906__auto___25305 = temp__4126__auto___25304;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__11906__auto___25305)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25305,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25303,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25290_25300,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25293;
var children = rest25294;
while(true){
var vec__25297 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__25297,(0),null);
var props = cljs.core.nth.call(null,vec__25297,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25306 = output_checker25292_25302.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25306)){
var error__11906__auto___25307 = temp__4126__auto___25306;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__11906__auto___25307)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25307,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25289_25299,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302){
return (function (seq25295){
var G__25296 = cljs.core.first.call(null,seq25295);
var seq25295__$1 = cljs.core.next.call(null,seq25295);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__25296,seq25295__$1);
});})(ufv___25298,output_schema25289_25299,input_schema25290_25300,input_checker25291_25301,output_checker25292_25302))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema25289_25299,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25290_25300], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___25317 = schema.utils.use_fn_validation;
var output_schema25308_25318 = om_bootstrap.types.Component;
var input_schema25309_25319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25310_25320 = schema.core.checker.call(null,input_schema25309_25319);
var output_checker25311_25321 = schema.core.checker.call(null,output_schema25308_25318);
/**
 * Inputs: [opts :- Popover & children]
 * Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321){
return (function om_bootstrap$random$popover(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321){
return (function (G__25312,rest25313){
var validate__11904__auto__ = ufv___25317.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25322 = cljs.core.list_STAR_.call(null,G__25312,rest25313);
var temp__4126__auto___25323 = input_checker25310_25320.call(null,args__11905__auto___25322);
if(cljs.core.truth_(temp__4126__auto___25323)){
var error__11906__auto___25324 = temp__4126__auto___25323;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__11906__auto___25324)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25324,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25322,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25309_25319,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25312;
var children = rest25313;
while(true){
var vec__25316 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__25316,(0),null);
var _ = cljs.core.nth.call(null,vec__25316,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__10412__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"}),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var title = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25325 = output_checker25311_25321.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25325)){
var error__11906__auto___25326 = temp__4126__auto___25325;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__11906__auto___25326)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25326,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25308_25318,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321){
return (function (seq25314){
var G__25315 = cljs.core.first.call(null,seq25314);
var seq25314__$1 = cljs.core.next.call(null,seq25314);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__25315,seq25314__$1);
});})(ufv___25317,output_schema25308_25318,input_schema25309_25319,input_checker25310_25320,output_checker25311_25321))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema25308_25318,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25309_25319], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___25336 = schema.utils.use_fn_validation;
var output_schema25327_25337 = om_bootstrap.types.Component;
var input_schema25328_25338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25329_25339 = schema.core.checker.call(null,input_schema25328_25338);
var output_checker25330_25340 = schema.core.checker.call(null,output_schema25327_25337);
/**
 * Inputs: [opts :- Badge & children]
 * Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340){
return (function om_bootstrap$random$badge(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340){
return (function (G__25331,rest25332){
var validate__11904__auto__ = ufv___25336.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25341 = cljs.core.list_STAR_.call(null,G__25331,rest25332);
var temp__4126__auto___25342 = input_checker25329_25339.call(null,args__11905__auto___25341);
if(cljs.core.truth_(temp__4126__auto___25342)){
var error__11906__auto___25343 = temp__4126__auto___25342;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__11906__auto___25343)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25343,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25341,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25328_25338,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25331;
var children = rest25332;
while(true){
var vec__25335 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__25335,(0),null);
var props = cljs.core.nth.call(null,vec__25335,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25344 = output_checker25330_25340.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25344)){
var error__11906__auto___25345 = temp__4126__auto___25344;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__11906__auto___25345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25345,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25327_25337,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340){
return (function (seq25333){
var G__25334 = cljs.core.first.call(null,seq25333);
var seq25333__$1 = cljs.core.next.call(null,seq25333);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__25334,seq25333__$1);
});})(ufv___25336,output_schema25327_25337,input_schema25328_25338,input_checker25329_25339,output_checker25330_25340))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema25327_25337,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25328_25338], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___25355 = schema.utils.use_fn_validation;
var output_schema25346_25356 = om_bootstrap.types.Component;
var input_schema25347_25357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25348_25358 = schema.core.checker.call(null,input_schema25347_25357);
var output_checker25349_25359 = schema.core.checker.call(null,output_schema25346_25356);
/**
 * Inputs: [opts :- Glyphicon & children]
 * Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359){
return (function om_bootstrap$random$glyphicon(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359){
return (function (G__25350,rest25351){
var validate__11904__auto__ = ufv___25355.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25360 = cljs.core.list_STAR_.call(null,G__25350,rest25351);
var temp__4126__auto___25361 = input_checker25348_25358.call(null,args__11905__auto___25360);
if(cljs.core.truth_(temp__4126__auto___25361)){
var error__11906__auto___25362 = temp__4126__auto___25361;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__11906__auto___25362)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25362,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25360,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25347_25357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25350;
var children = rest25351;
while(true){
var vec__25354 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__25354,(0),null);
var props = cljs.core.nth.call(null,vec__25354,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25363 = output_checker25349_25359.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25363)){
var error__11906__auto___25364 = temp__4126__auto___25363;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__11906__auto___25364)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25364,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25346_25356,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359){
return (function (seq25352){
var G__25353 = cljs.core.first.call(null,seq25352);
var seq25352__$1 = cljs.core.next.call(null,seq25352);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__25353,seq25352__$1);
});})(ufv___25355,output_schema25346_25356,input_schema25347_25357,input_checker25348_25358,output_checker25349_25359))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema25346_25356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25347_25357], null)));

//# sourceMappingURL=random.js.map
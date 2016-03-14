// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___33311 = schema.utils.use_fn_validation;
var output_schema33303_33312 = om_bootstrap.types.Component;
var input_schema33304_33313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33305_33314 = schema.core.checker.call(null,input_schema33304_33313);
var output_checker33306_33315 = schema.core.checker.call(null,output_schema33303_33312);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315){
return (function om_bootstrap$random$jumbotron(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315){
return (function (G__33307,rest33308){
var validate__16151__auto__ = ufv___33311.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33316 = cljs.core.list_STAR_.call(null,G__33307,rest33308);
var temp__4425__auto___33317 = input_checker33305_33314.call(null,args__16152__auto___33316);
if(cljs.core.truth_(temp__4425__auto___33317)){
var error__16153__auto___33318 = temp__4425__auto___33317;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__16153__auto___33318)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33304_33313,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33316,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33318], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33307;
var children = rest33308;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33319 = output_checker33306_33315.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33319)){
var error__16153__auto___33320 = temp__4425__auto___33319;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__16153__auto___33320)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33303_33312,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33320], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315){
return (function (seq33309){
var G__33310 = cljs.core.first.call(null,seq33309);
var seq33309__$1 = cljs.core.next.call(null,seq33309);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__33310,seq33309__$1);
});})(ufv___33311,output_schema33303_33312,input_schema33304_33313,input_checker33305_33314,output_checker33306_33315))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema33303_33312,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33304_33313], null)));
var ufv___33330 = schema.utils.use_fn_validation;
var output_schema33321_33331 = om_bootstrap.types.Component;
var input_schema33322_33332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33323_33333 = schema.core.checker.call(null,input_schema33322_33332);
var output_checker33324_33334 = schema.core.checker.call(null,output_schema33321_33331);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334){
return (function om_bootstrap$random$label(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334){
return (function (G__33325,rest33326){
var validate__16151__auto__ = ufv___33330.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33335 = cljs.core.list_STAR_.call(null,G__33325,rest33326);
var temp__4425__auto___33336 = input_checker33323_33333.call(null,args__16152__auto___33335);
if(cljs.core.truth_(temp__4425__auto___33336)){
var error__16153__auto___33337 = temp__4425__auto___33336;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__16153__auto___33337)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33322_33332,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33335,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33337], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33325;
var children = rest33326;
while(true){
var vec__33329 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__33329,(0),null);
var props = cljs.core.nth.call(null,vec__33329,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33338 = output_checker33324_33334.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33338)){
var error__16153__auto___33339 = temp__4425__auto___33338;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__16153__auto___33339)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33321_33331,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33339], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334){
return (function (seq33327){
var G__33328 = cljs.core.first.call(null,seq33327);
var seq33327__$1 = cljs.core.next.call(null,seq33327);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__33328,seq33327__$1);
});})(ufv___33330,output_schema33321_33331,input_schema33322_33332,input_checker33323_33333,output_checker33324_33334))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema33321_33331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33322_33332], null)));
var ufv___33349 = schema.utils.use_fn_validation;
var output_schema33340_33350 = om_bootstrap.types.Component;
var input_schema33341_33351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33342_33352 = schema.core.checker.call(null,input_schema33341_33351);
var output_checker33343_33353 = schema.core.checker.call(null,output_schema33340_33350);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353){
return (function om_bootstrap$random$well(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353){
return (function (G__33344,rest33345){
var validate__16151__auto__ = ufv___33349.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33354 = cljs.core.list_STAR_.call(null,G__33344,rest33345);
var temp__4425__auto___33355 = input_checker33342_33352.call(null,args__16152__auto___33354);
if(cljs.core.truth_(temp__4425__auto___33355)){
var error__16153__auto___33356 = temp__4425__auto___33355;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__16153__auto___33356)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33341_33351,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33354,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33356], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33344;
var children = rest33345;
while(true){
var vec__33348 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__33348,(0),null);
var props = cljs.core.nth.call(null,vec__33348,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33357 = output_checker33343_33353.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33357)){
var error__16153__auto___33358 = temp__4425__auto___33357;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__16153__auto___33358)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33340_33350,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33358], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353){
return (function (seq33346){
var G__33347 = cljs.core.first.call(null,seq33346);
var seq33346__$1 = cljs.core.next.call(null,seq33346);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__33347,seq33346__$1);
});})(ufv___33349,output_schema33340_33350,input_schema33341_33351,input_checker33342_33352,output_checker33343_33353))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema33340_33350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33341_33351], null)));
var ufv___33367 = schema.utils.use_fn_validation;
var output_schema33359_33368 = om_bootstrap.types.Component;
var input_schema33360_33369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33361_33370 = schema.core.checker.call(null,input_schema33360_33369);
var output_checker33362_33371 = schema.core.checker.call(null,output_schema33359_33368);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * A simple shell for an h1 to appropriately space out and segment
 * sections of content on a page. It can utilize the h1’s default small
 * element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371){
return (function om_bootstrap$random$page_header(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371){
return (function (G__33363,rest33364){
var validate__16151__auto__ = ufv___33367.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33372 = cljs.core.list_STAR_.call(null,G__33363,rest33364);
var temp__4425__auto___33373 = input_checker33361_33370.call(null,args__16152__auto___33372);
if(cljs.core.truth_(temp__4425__auto___33373)){
var error__16153__auto___33374 = temp__4425__auto___33373;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__16153__auto___33374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33360_33369,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33372,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33374], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33363;
var children = rest33364;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33375 = output_checker33362_33371.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33375)){
var error__16153__auto___33376 = temp__4425__auto___33375;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__16153__auto___33376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33359_33368,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33376], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371){
return (function (seq33365){
var G__33366 = cljs.core.first.call(null,seq33365);
var seq33365__$1 = cljs.core.next.call(null,seq33365);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__33366,seq33365__$1);
});})(ufv___33367,output_schema33359_33368,input_schema33360_33369,input_checker33361_33370,output_checker33362_33371))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema33359_33368,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33360_33369], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___33386 = schema.utils.use_fn_validation;
var output_schema33377_33387 = om_bootstrap.types.Component;
var input_schema33378_33388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33379_33389 = schema.core.checker.call(null,input_schema33378_33388);
var output_checker33380_33390 = schema.core.checker.call(null,output_schema33377_33387);
/**
 * Inputs: [opts :- ToolTip & children]
 * Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390){
return (function om_bootstrap$random$tooltip(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390){
return (function (G__33381,rest33382){
var validate__16151__auto__ = ufv___33386.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33391 = cljs.core.list_STAR_.call(null,G__33381,rest33382);
var temp__4425__auto___33392 = input_checker33379_33389.call(null,args__16152__auto___33391);
if(cljs.core.truth_(temp__4425__auto___33392)){
var error__16153__auto___33393 = temp__4425__auto___33392;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__16153__auto___33393)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33378_33388,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33391,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33393], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33381;
var children = rest33382;
while(true){
var vec__33385 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__33385,(0),null);
var _ = cljs.core.nth.call(null,vec__33385,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__11348__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "tooltip-arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33394 = output_checker33380_33390.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33394)){
var error__16153__auto___33395 = temp__4425__auto___33394;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__16153__auto___33395)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33377_33387,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33395], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390){
return (function (seq33383){
var G__33384 = cljs.core.first.call(null,seq33383);
var seq33383__$1 = cljs.core.next.call(null,seq33383);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__33384,seq33383__$1);
});})(ufv___33386,output_schema33377_33387,input_schema33378_33388,input_checker33379_33389,output_checker33380_33390))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema33377_33387,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33378_33388], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__22075__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22075__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__22075__auto__;
})();

var component_fnk__22104__auto___33421 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33401 = schema.core.Any;
var input_schema33402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map33399","map33399",1355630431,null))], null);
var input_checker33403 = schema.core.checker.call(null,input_schema33402);
var output_checker33404 = schema.core.checker.call(null,output_schema33401);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function om_bootstrap$random$constructor33397(G__33405){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33405], null);
var temp__4425__auto___33423 = input_checker33403.call(null,args__16152__auto___33422);
if(cljs.core.truth_(temp__4425__auto___33423)){
var error__16153__auto___33424 = temp__4425__auto___33423;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33397","constructor33397",-2022837995,null),cljs.core.pr_str.call(null,error__16153__auto___33424)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33402,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33422,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33424], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map33399 = G__33405;
while(true){
if(cljs.core.map_QMARK_.call(null,map33399)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33399)));
}

var map33400 = plumbing.fnk.schema.safe_get.call(null,map33399,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map33400,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map33400,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map33400,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map33399,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t33410 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.random.t33410 = (function (owner,output_schema33401,props,children,input_schema33402,validate__16151__auto__,input_checker33403,constructor33397,output_checker33404,G__33405,map33400,ufv__,bs,map33399,meta33411){
this.owner = owner;
this.output_schema33401 = output_schema33401;
this.props = props;
this.children = children;
this.input_schema33402 = input_schema33402;
this.validate__16151__auto__ = validate__16151__auto__;
this.input_checker33403 = input_checker33403;
this.constructor33397 = constructor33397;
this.output_checker33404 = output_checker33404;
this.G__33405 = G__33405;
this.map33400 = map33400;
this.ufv__ = ufv__;
this.bs = bs;
this.map33399 = map33399;
this.meta33411 = meta33411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t33410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (_33412,meta33411__$1){
var self__ = this;
var _33412__$1 = this;
return (new om_bootstrap.random.t33410(self__.owner,self__.output_schema33401,self__.props,self__.children,self__.input_schema33402,self__.validate__16151__auto__,self__.input_checker33403,self__.constructor33397,self__.output_checker33404,self__.G__33405,self__.map33400,self__.ufv__,self__.bs,self__.map33399,meta33411__$1));
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (_33412){
var self__ = this;
var _33412__$1 = this;
return self__.meta33411;
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t33410.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t33410.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__11336__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__11336__auto__;
}
})())){
var G__33413 = self__.owner;
G__33413.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__33413;
} else {
return null;
}
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.prototype.om$core$IRender$ = true;

om_bootstrap.random.t33410.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4425__auto__)){
var od = temp__4425__auto__;
return React.DOM.button({"type": "button", "className": "close", "onClick": om_tools.dom.format_opts.call(null,od), "aria-hidden": true},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.getBasis = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-schema33401","output-schema33401",2091962854,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"input-schema33402","input-schema33402",-243690415,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"input-checker33403","input-checker33403",1806344915,null),new cljs.core.Symbol(null,"constructor33397","constructor33397",-2022837995,null),new cljs.core.Symbol(null,"output-checker33404","output-checker33404",-1028980072,null),new cljs.core.Symbol(null,"G__33405","G__33405",-840674342,null),new cljs.core.Symbol(null,"map33400","map33400",-11953732,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.Symbol(null,"map33399","map33399",1355630431,null),new cljs.core.Symbol(null,"meta33411","meta33411",-1009243044,null)], null);
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.t33410.cljs$lang$type = true;

om_bootstrap.random.t33410.cljs$lang$ctorStr = "om-bootstrap.random/t33410";

om_bootstrap.random.t33410.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.random/t33410");
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

om_bootstrap.random.__GT_t33410 = ((function (owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404){
return (function om_bootstrap$random$constructor33397_$___GT_t33410(owner__$1,output_schema33401__$1,props__$1,children__$1,input_schema33402__$1,validate__16151__auto____$1,input_checker33403__$1,constructor33397__$1,output_checker33404__$1,G__33405__$1,map33400__$1,ufv____$1,bs__$1,map33399__$1,meta33411){
return (new om_bootstrap.random.t33410(owner__$1,output_schema33401__$1,props__$1,children__$1,input_schema33402__$1,validate__16151__auto____$1,input_checker33403__$1,constructor33397__$1,output_checker33404__$1,G__33405__$1,map33400__$1,ufv____$1,bs__$1,map33399__$1,meta33411));
});})(owner,children,props,bs,map33400,validate__16151__auto__,ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
;

}

return (new om_bootstrap.random.t33410(owner,output_schema33401,props,children,input_schema33402,validate__16151__auto__,input_checker33403,om_bootstrap$random$constructor33397,output_checker33404,G__33405,map33400,ufv__,bs,map33399,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33425 = output_checker33404.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33425)){
var error__16153__auto___33426 = temp__4425__auto___33425;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33397","constructor33397",-2022837995,null),cljs.core.pr_str.call(null,error__16153__auto___33426)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33401,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33426], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema33401,input_schema33402,input_checker33403,output_checker33404))
,schema.core.make_fn_schema.call(null,output_schema33401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33402], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__22104__auto___33421){
return (function om_bootstrap$random$alert_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___33421))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___33421){
return (function (data__22105__auto__,owner33396,p__33417){
var vec__33418 = p__33417;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__33418,(0),null);
return component_fnk__22104__auto___33421.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33396,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___33421))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___33421){
return (function (seq33414){
var G__33415 = cljs.core.first.call(null,seq33414);
var seq33414__$1 = cljs.core.next.call(null,seq33414);
var G__33416 = cljs.core.first.call(null,seq33414__$1);
var seq33414__$2 = cljs.core.next.call(null,seq33414__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33415,G__33416,seq33414__$2);
});})(component_fnk__22104__auto___33421))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(){
var G__33420 = arguments.length;
switch (G__33420) {
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

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__22073__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m33398){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__22073__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m33398));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33437 = schema.utils.use_fn_validation;
var output_schema33428_33438 = om_bootstrap.types.Component;
var input_schema33429_33439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33430_33440 = schema.core.checker.call(null,input_schema33429_33439);
var output_checker33431_33441 = schema.core.checker.call(null,output_schema33428_33438);
/**
 * Inputs: [opts :- Alert & children]
 * Returns: t/Component
 * 
 * Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441){
return (function om_bootstrap$random$alert(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441){
return (function (G__33432,rest33433){
var validate__16151__auto__ = ufv___33437.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33442 = cljs.core.list_STAR_.call(null,G__33432,rest33433);
var temp__4425__auto___33443 = input_checker33430_33440.call(null,args__16152__auto___33442);
if(cljs.core.truth_(temp__4425__auto___33443)){
var error__16153__auto___33444 = temp__4425__auto___33443;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__16153__auto___33444)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33429_33439,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33442,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33444], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33432;
var children = rest33433;
while(true){
var vec__33436 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__33436,(0),null);
var props = cljs.core.nth.call(null,vec__33436,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33445 = output_checker33431_33441.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33445)){
var error__16153__auto___33446 = temp__4425__auto___33445;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__16153__auto___33446)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33428_33438,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33446], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441){
return (function (seq33434){
var G__33435 = cljs.core.first.call(null,seq33434);
var seq33434__$1 = cljs.core.next.call(null,seq33434);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__33435,seq33434__$1);
});})(ufv___33437,output_schema33428_33438,input_schema33429_33439,input_checker33430_33440,output_checker33431_33441))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema33428_33438,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33429_33439], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___33456 = schema.utils.use_fn_validation;
var output_schema33447_33457 = om_bootstrap.types.Component;
var input_schema33448_33458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33449_33459 = schema.core.checker.call(null,input_schema33448_33458);
var output_checker33450_33460 = schema.core.checker.call(null,output_schema33447_33457);
/**
 * Inputs: [opts :- Popover & children]
 * Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460){
return (function om_bootstrap$random$popover(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460){
return (function (G__33451,rest33452){
var validate__16151__auto__ = ufv___33456.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33461 = cljs.core.list_STAR_.call(null,G__33451,rest33452);
var temp__4425__auto___33462 = input_checker33449_33459.call(null,args__16152__auto___33461);
if(cljs.core.truth_(temp__4425__auto___33462)){
var error__16153__auto___33463 = temp__4425__auto___33462;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__16153__auto___33463)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33448_33458,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33461,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33463], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33451;
var children = rest33452;
while(true){
var vec__33455 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__33455,(0),null);
var _ = cljs.core.nth.call(null,vec__33455,(1),null);
var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__11348__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var title = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33464 = output_checker33450_33460.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33464)){
var error__16153__auto___33465 = temp__4425__auto___33464;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__16153__auto___33465)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33447_33457,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33465], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460){
return (function (seq33453){
var G__33454 = cljs.core.first.call(null,seq33453);
var seq33453__$1 = cljs.core.next.call(null,seq33453);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__33454,seq33453__$1);
});})(ufv___33456,output_schema33447_33457,input_schema33448_33458,input_checker33449_33459,output_checker33450_33460))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema33447_33457,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33448_33458], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___33475 = schema.utils.use_fn_validation;
var output_schema33466_33476 = om_bootstrap.types.Component;
var input_schema33467_33477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33468_33478 = schema.core.checker.call(null,input_schema33467_33477);
var output_checker33469_33479 = schema.core.checker.call(null,output_schema33466_33476);
/**
 * Inputs: [opts :- Badge & children]
 * Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479){
return (function om_bootstrap$random$badge(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479){
return (function (G__33470,rest33471){
var validate__16151__auto__ = ufv___33475.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33480 = cljs.core.list_STAR_.call(null,G__33470,rest33471);
var temp__4425__auto___33481 = input_checker33468_33478.call(null,args__16152__auto___33480);
if(cljs.core.truth_(temp__4425__auto___33481)){
var error__16153__auto___33482 = temp__4425__auto___33481;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__16153__auto___33482)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33467_33477,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33480,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33482], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33470;
var children = rest33471;
while(true){
var vec__33474 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__33474,(0),null);
var props = cljs.core.nth.call(null,vec__33474,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33483 = output_checker33469_33479.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33483)){
var error__16153__auto___33484 = temp__4425__auto___33483;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__16153__auto___33484)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33466_33476,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33484], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479){
return (function (seq33472){
var G__33473 = cljs.core.first.call(null,seq33472);
var seq33472__$1 = cljs.core.next.call(null,seq33472);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__33473,seq33472__$1);
});})(ufv___33475,output_schema33466_33476,input_schema33467_33477,input_checker33468_33478,output_checker33469_33479))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema33466_33476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33467_33477], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___33494 = schema.utils.use_fn_validation;
var output_schema33485_33495 = om_bootstrap.types.Component;
var input_schema33486_33496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33487_33497 = schema.core.checker.call(null,input_schema33486_33496);
var output_checker33488_33498 = schema.core.checker.call(null,output_schema33485_33495);
/**
 * Inputs: [opts :- Glyphicon & children]
 * Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498){
return (function om_bootstrap$random$glyphicon(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498){
return (function (G__33489,rest33490){
var validate__16151__auto__ = ufv___33494.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33499 = cljs.core.list_STAR_.call(null,G__33489,rest33490);
var temp__4425__auto___33500 = input_checker33487_33497.call(null,args__16152__auto___33499);
if(cljs.core.truth_(temp__4425__auto___33500)){
var error__16153__auto___33501 = temp__4425__auto___33500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__16153__auto___33501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33486_33496,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33499,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33501], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33489;
var children = rest33490;
while(true){
var vec__33493 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__33493,(0),null);
var props = cljs.core.nth.call(null,vec__33493,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33502 = output_checker33488_33498.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33502)){
var error__16153__auto___33503 = temp__4425__auto___33502;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__16153__auto___33503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33485_33495,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33503], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498){
return (function (seq33491){
var G__33492 = cljs.core.first.call(null,seq33491);
var seq33491__$1 = cljs.core.next.call(null,seq33491);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__33492,seq33491__$1);
});})(ufv___33494,output_schema33485_33495,input_schema33486_33496,input_checker33487_33497,output_checker33488_33498))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema33485_33495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33486_33496], null)));

//# sourceMappingURL=random.js.map
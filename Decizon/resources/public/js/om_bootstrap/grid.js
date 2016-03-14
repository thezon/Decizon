// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___35391 = schema.utils.use_fn_validation;
var output_schema35382_35392 = om_bootstrap.types.Component;
var input_schema35383_35393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker35384_35394 = schema.core.checker.call(null,input_schema35383_35393);
var output_checker35385_35395 = schema.core.checker.call(null,output_schema35382_35392);
/**
 * Inputs: [opts :- Grid & children]
 * Returns: t/Component
 * 
 * Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395){
return (function om_bootstrap$grid$grid(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395){
return (function (G__35386,rest35387){
var validate__16151__auto__ = ufv___35391.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___35396 = cljs.core.list_STAR_.call(null,G__35386,rest35387);
var temp__4425__auto___35397 = input_checker35384_35394.call(null,args__16152__auto___35396);
if(cljs.core.truth_(temp__4425__auto___35397)){
var error__16153__auto___35398 = temp__4425__auto___35397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__16153__auto___35398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35383_35393,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___35396,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35398], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__35386;
var children = rest35387;
while(true){
var vec__35390 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__35390,(0),null);
var props = cljs.core.nth.call(null,vec__35390,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___35399 = output_checker35385_35395.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___35399)){
var error__16153__auto___35400 = temp__4425__auto___35399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__16153__auto___35400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35382_35392,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35400], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395){
return (function (seq35388){
var G__35389 = cljs.core.first.call(null,seq35388);
var seq35388__$1 = cljs.core.next.call(null,seq35388);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__35389,seq35388__$1);
});})(ufv___35391,output_schema35382_35392,input_schema35383_35393,input_checker35384_35394,output_checker35385_35395))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema35382_35392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35383_35393], null)));
var ufv___35409 = schema.utils.use_fn_validation;
var output_schema35401_35410 = om_bootstrap.types.Component;
var input_schema35402_35411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker35403_35412 = schema.core.checker.call(null,input_schema35402_35411);
var output_checker35404_35413 = schema.core.checker.call(null,output_schema35401_35410);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413){
return (function om_bootstrap$grid$row(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413){
return (function (G__35405,rest35406){
var validate__16151__auto__ = ufv___35409.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___35414 = cljs.core.list_STAR_.call(null,G__35405,rest35406);
var temp__4425__auto___35415 = input_checker35403_35412.call(null,args__16152__auto___35414);
if(cljs.core.truth_(temp__4425__auto___35415)){
var error__16153__auto___35416 = temp__4425__auto___35415;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__16153__auto___35416)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35402_35411,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___35414,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35416], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__35405;
var children = rest35406;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___35417 = output_checker35404_35413.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___35417)){
var error__16153__auto___35418 = temp__4425__auto___35417;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__16153__auto___35418)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35401_35410,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35418], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413){
return (function (seq35407){
var G__35408 = cljs.core.first.call(null,seq35407);
var seq35407__$1 = cljs.core.next.call(null,seq35407);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__35408,seq35407__$1);
});})(ufv___35409,output_schema35401_35410,input_schema35402_35411,input_checker35403_35412,output_checker35404_35413))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema35401_35410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35402_35411], null)));
var ufv___35430 = schema.utils.use_fn_validation;
var output_schema35419_35431 = om_bootstrap.types.Component;
var input_schema35420_35432 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker35421_35433 = schema.core.checker.call(null,input_schema35420_35432);
var output_checker35422_35434 = schema.core.checker.call(null,output_schema35419_35431);
/**
 * Inputs: [opts :- Col & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434){
return (function om_bootstrap$grid$col(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434){
return (function (G__35423,rest35424){
var validate__16151__auto__ = ufv___35430.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___35435 = cljs.core.list_STAR_.call(null,G__35423,rest35424);
var temp__4425__auto___35436 = input_checker35421_35433.call(null,args__16152__auto___35435);
if(cljs.core.truth_(temp__4425__auto___35436)){
var error__16153__auto___35437 = temp__4425__auto___35436;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__16153__auto___35437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35420_35432,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___35435,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35437], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__35423;
var children = rest35424;
while(true){
var vec__35427 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__35427,(0),null);
var props = cljs.core.nth.call(null,vec__35427,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__35427,bs,props,validate__16151__auto__,ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434){
return (function (p__35428){
var vec__35429 = p__35428;
var k = cljs.core.nth.call(null,vec__35429,(0),null);
var v = cljs.core.nth.call(null,vec__35429,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__35427,bs,props,validate__16151__auto__,ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___35438 = output_checker35422_35434.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___35438)){
var error__16153__auto___35439 = temp__4425__auto___35438;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__16153__auto___35439)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35419_35431,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___35439], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434){
return (function (seq35425){
var G__35426 = cljs.core.first.call(null,seq35425);
var seq35425__$1 = cljs.core.next.call(null,seq35425);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__35426,seq35425__$1);
});})(ufv___35430,output_schema35419_35431,input_schema35420_35432,input_checker35421_35433,output_checker35422_35434))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema35419_35431,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35420_35432], null)));

//# sourceMappingURL=grid.js.map
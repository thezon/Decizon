// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om.core');
om_bootstrap.table.Table = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___24090 = schema.utils.use_fn_validation;
var output_schema24081_24091 = schema.core.Any;
var input_schema24082_24092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.table.Table,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker24083_24093 = schema.core.checker.call(null,input_schema24082_24092);
var output_checker24084_24094 = schema.core.checker.call(null,output_schema24081_24091);
/**
 * Inputs: [opts :- Table & children]
 * 
 * Generates a Bootstrap table wrapper.
 */
om_bootstrap.table.table = ((function (ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094){
return (function om_bootstrap$table$table(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094))
;

om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094){
return (function (G__24085,rest24086){
var validate__11904__auto__ = ufv___24090.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___24095 = cljs.core.list_STAR_.call(null,G__24085,rest24086);
var temp__4126__auto___24096 = input_checker24083_24093.call(null,args__11905__auto___24095);
if(cljs.core.truth_(temp__4126__auto___24096)){
var error__11906__auto___24097 = temp__4126__auto___24096;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__11906__auto___24097)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24097,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___24095,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24082_24092,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__24085;
var children = rest24086;
while(true){
var vec__24089 = om_bootstrap.types.separate.call(null,om_bootstrap.table.Table,opts);
var bs = cljs.core.nth.call(null,vec__24089,(0),null);
var props = cljs.core.nth.call(null,vec__24089,(1),null);
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"table","table",-564943036),true,new cljs.core.Keyword(null,"table-striped","table-striped",-120331850),new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-bordered","table-bordered",382462305),new cljs.core.Keyword(null,"bordered?","bordered?",562358476).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-condensed","table-condensed",716299039),new cljs.core.Keyword(null,"condensed?","condensed?",-109797520).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-hover","table-hover",486607258),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(opts)], null);
var props__$1 = om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses)], null));
var table = om_tools.dom.element.call(null,React.DOM.table,props__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"responsive?","responsive?",-683696941).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.apply.call(null,React.DOM.div,{"className": "table-responsive"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[table],null))));
} else {
return table;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___24098 = output_checker24084_24094.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___24098)){
var error__11906__auto___24099 = temp__4126__auto___24098;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__11906__auto___24099)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24099,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24081_24091,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094))
;

om_bootstrap.table.table.cljs$lang$maxFixedArity = (1);

om_bootstrap.table.table.cljs$lang$applyTo = ((function (ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094){
return (function (seq24087){
var G__24088 = cljs.core.first.call(null,seq24087);
var seq24087__$1 = cljs.core.next.call(null,seq24087);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(G__24088,seq24087__$1);
});})(ufv___24090,output_schema24081_24091,input_schema24082_24092,input_checker24083_24093,output_checker24084_24094))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.table.table),schema.core.make_fn_schema.call(null,output_schema24081_24091,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24082_24092], null)));

//# sourceMappingURL=table.js.map
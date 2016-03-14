// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om.core');
om_bootstrap.table.Table = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___32229 = schema.utils.use_fn_validation;
var output_schema32220_32230 = schema.core.Any;
var input_schema32221_32231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.table.Table,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker32222_32232 = schema.core.checker.call(null,input_schema32221_32231);
var output_checker32223_32233 = schema.core.checker.call(null,output_schema32220_32230);
/**
 * Inputs: [opts :- Table & children]
 * 
 * Generates a Bootstrap table wrapper.
 */
om_bootstrap.table.table = ((function (ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233){
return (function om_bootstrap$table$table(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233))
;

om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233){
return (function (G__32224,rest32225){
var validate__16151__auto__ = ufv___32229.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32234 = cljs.core.list_STAR_.call(null,G__32224,rest32225);
var temp__4425__auto___32235 = input_checker32222_32232.call(null,args__16152__auto___32234);
if(cljs.core.truth_(temp__4425__auto___32235)){
var error__16153__auto___32236 = temp__4425__auto___32235;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__16153__auto___32236)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32221_32231,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32234,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32236], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__32224;
var children = rest32225;
while(true){
var vec__32228 = om_bootstrap.types.separate.call(null,om_bootstrap.table.Table,opts);
var bs = cljs.core.nth.call(null,vec__32228,(0),null);
var props = cljs.core.nth.call(null,vec__32228,(1),null);
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
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32237 = output_checker32223_32233.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32237)){
var error__16153__auto___32238 = temp__4425__auto___32237;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.call(null,error__16153__auto___32238)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32220_32230,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32238], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233))
;

om_bootstrap.table.table.cljs$lang$maxFixedArity = (1);

om_bootstrap.table.table.cljs$lang$applyTo = ((function (ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233){
return (function (seq32226){
var G__32227 = cljs.core.first.call(null,seq32226);
var seq32226__$1 = cljs.core.next.call(null,seq32226);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(G__32227,seq32226__$1);
});})(ufv___32229,output_schema32220_32230,input_schema32221_32231,input_checker32222_32232,output_checker32223_32233))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.table.table),schema.core.make_fn_schema.call(null,output_schema32220_32230,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32221_32231], null)));

//# sourceMappingURL=table.js.map
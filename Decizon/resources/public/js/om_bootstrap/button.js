// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___28473 = schema.utils.use_fn_validation;
var output_schema28467_28474 = schema.core.Any;
var input_schema28468_28475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker28469_28476 = schema.core.checker.call(null,input_schema28468_28475);
var output_checker28470_28477 = schema.core.checker.call(null,output_schema28467_28474);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___28473,output_schema28467_28474,input_schema28468_28475,input_checker28469_28476,output_checker28470_28477){
return (function om_bootstrap$button$render_anchor(G__28471,G__28472){
var validate__16151__auto__ = ufv___28473.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28471,G__28472], null);
var temp__4425__auto___28479 = input_checker28469_28476.call(null,args__16152__auto___28478);
if(cljs.core.truth_(temp__4425__auto___28479)){
var error__16153__auto___28480 = temp__4425__auto___28479;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__16153__auto___28480)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28468_28475,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28478,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28480], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28471;
var children = G__28472;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28481 = output_checker28470_28477.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28481)){
var error__16153__auto___28482 = temp__4425__auto___28481;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__16153__auto___28482)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28467_28474,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28482], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28473,output_schema28467_28474,input_schema28468_28475,input_checker28469_28476,output_checker28470_28477))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema28467_28474,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28468_28475], null)));
var ufv___28492 = schema.utils.use_fn_validation;
var output_schema28483_28493 = om_bootstrap.types.Component;
var input_schema28484_28494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker28485_28495 = schema.core.checker.call(null,input_schema28484_28494);
var output_checker28486_28496 = schema.core.checker.call(null,output_schema28483_28493);
/**
 * Inputs: [props :- Button & children]
 * Returns: t/Component
 * 
 * Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496){
return (function om_bootstrap$button$button(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496){
return (function (G__28487,rest28488){
var validate__16151__auto__ = ufv___28492.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28497 = cljs.core.list_STAR_.call(null,G__28487,rest28488);
var temp__4425__auto___28498 = input_checker28485_28495.call(null,args__16152__auto___28497);
if(cljs.core.truth_(temp__4425__auto___28498)){
var error__16153__auto___28499 = temp__4425__auto___28498;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__16153__auto___28499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28484_28494,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28497,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28499], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var props = G__28487;
var children = rest28488;
while(true){
var vec__28491 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__28491,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__28491,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__11348__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28500 = output_checker28486_28496.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28500)){
var error__16153__auto___28501 = temp__4425__auto___28500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__16153__auto___28501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28483_28493,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28501], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496){
return (function (seq28489){
var G__28490 = cljs.core.first.call(null,seq28489);
var seq28489__$1 = cljs.core.next.call(null,seq28489);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__28490,seq28489__$1);
});})(ufv___28492,output_schema28483_28493,input_schema28484_28494,input_checker28485_28495,output_checker28486_28496))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema28483_28493,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28484_28494], null)));
var ufv___28511 = schema.utils.use_fn_validation;
var output_schema28502_28512 = om_bootstrap.types.Component;
var input_schema28503_28513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28504_28514 = schema.core.checker.call(null,input_schema28503_28513);
var output_checker28505_28515 = schema.core.checker.call(null,output_schema28502_28512);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515){
return (function om_bootstrap$button$toolbar(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515){
return (function (G__28506,rest28507){
var validate__16151__auto__ = ufv___28511.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28516 = cljs.core.list_STAR_.call(null,G__28506,rest28507);
var temp__4425__auto___28517 = input_checker28504_28514.call(null,args__16152__auto___28516);
if(cljs.core.truth_(temp__4425__auto___28517)){
var error__16153__auto___28518 = temp__4425__auto___28517;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__16153__auto___28518)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28503_28513,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28516,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28518], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28506;
var children = rest28507;
while(true){
var vec__28510 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__28510,(0),null);
var props = cljs.core.nth.call(null,vec__28510,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28519 = output_checker28505_28515.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28519)){
var error__16153__auto___28520 = temp__4425__auto___28519;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__16153__auto___28520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28502_28512,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28520], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515){
return (function (seq28508){
var G__28509 = cljs.core.first.call(null,seq28508);
var seq28508__$1 = cljs.core.next.call(null,seq28508);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__28509,seq28508__$1);
});})(ufv___28511,output_schema28502_28512,input_schema28503_28513,input_checker28504_28514,output_checker28505_28515))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema28502_28512,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28503_28513], null)));
var ufv___28530 = schema.utils.use_fn_validation;
var output_schema28521_28531 = om_bootstrap.types.Component;
var input_schema28522_28532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28523_28533 = schema.core.checker.call(null,input_schema28522_28532);
var output_checker28524_28534 = schema.core.checker.call(null,output_schema28521_28531);
/**
 * Inputs: [opts :- ButtonGroup & children]
 * Returns: t/Component
 * 
 * Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534){
return (function om_bootstrap$button$button_group(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534){
return (function (G__28525,rest28526){
var validate__16151__auto__ = ufv___28530.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28535 = cljs.core.list_STAR_.call(null,G__28525,rest28526);
var temp__4425__auto___28536 = input_checker28523_28533.call(null,args__16152__auto___28535);
if(cljs.core.truth_(temp__4425__auto___28536)){
var error__16153__auto___28537 = temp__4425__auto___28536;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__16153__auto___28537)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28522_28532,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28535,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28537], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28525;
var children = rest28526;
while(true){
var vec__28529 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__28529,(0),null);
var props = cljs.core.nth.call(null,vec__28529,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28538 = output_checker28524_28534.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28538)){
var error__16153__auto___28539 = temp__4425__auto___28538;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__16153__auto___28539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28521_28531,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28539], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534){
return (function (seq28527){
var G__28528 = cljs.core.first.call(null,seq28527);
var seq28527__$1 = cljs.core.next.call(null,seq28527);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__28528,seq28527__$1);
});})(ufv___28530,output_schema28521_28531,input_schema28522_28532,input_checker28523_28533,output_checker28524_28534))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema28521_28531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28522_28532], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__22104__auto___28566 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28544 = schema.core.Any;
var input_schema28545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28543","map28543",2028434268,null))], null);
var input_checker28546 = schema.core.checker.call(null,input_schema28545);
var output_checker28547 = schema.core.checker.call(null,output_schema28544);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function om_bootstrap$button$constructor28541(G__28548){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28548], null);
var temp__4425__auto___28568 = input_checker28546.call(null,args__16152__auto___28567);
if(cljs.core.truth_(temp__4425__auto___28568)){
var error__16153__auto___28569 = temp__4425__auto___28568;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28541","constructor28541",1925827502,null),cljs.core.pr_str.call(null,error__16153__auto___28569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28545,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28567,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28569], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map28543 = G__28548;
while(true){
if(cljs.core.map_QMARK_.call(null,map28543)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28543)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map28543,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t28554 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t28554 = (function (owner,output_checker28547,constructor28541,input_schema28545,output_schema28544,validate__16151__auto__,input_checker28546,map28543,ufv__,G__28548,meta28555){
this.owner = owner;
this.output_checker28547 = output_checker28547;
this.constructor28541 = constructor28541;
this.input_schema28545 = input_schema28545;
this.output_schema28544 = output_schema28544;
this.validate__16151__auto__ = validate__16151__auto__;
this.input_checker28546 = input_checker28546;
this.map28543 = map28543;
this.ufv__ = ufv__;
this.G__28548 = G__28548;
this.meta28555 = meta28555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t28554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (_28556,meta28555__$1){
var self__ = this;
var _28556__$1 = this;
return (new om_bootstrap.button.t28554(self__.owner,self__.output_checker28547,self__.constructor28541,self__.input_schema28545,self__.output_schema28544,self__.validate__16151__auto__,self__.input_checker28546,self__.map28543,self__.ufv__,self__.G__28548,meta28555__$1));
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.t28554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (_28556){
var self__ = this;
var _28556__$1 = this;
return self__.meta28555;
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.t28554.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t28554.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.t28554.prototype.om$core$IRender$ = true;

om_bootstrap.button.t28554.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__28557 = om.core.get_props.call(null,self__.owner);
var map__28557__$1 = ((cljs.core.seq_QMARK_.call(null,map__28557))?cljs.core.apply.call(null,cljs.core.hash_map,map__28557):map__28557);
var opts = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__28558 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__28558,(0),null);
var props = cljs.core.nth.call(null,vec__28558,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__28557,map__28557__$1,opts,children,vec__28558,bs,props,classes,___$1,owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__28557,map__28557__$1,opts,children,vec__28558,bs,props,classes,___$1,owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.t28554.getBasis = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-checker28547","output-checker28547",-421777211,null),new cljs.core.Symbol(null,"constructor28541","constructor28541",1925827502,null),new cljs.core.Symbol(null,"input-schema28545","input-schema28545",-1035355505,null),new cljs.core.Symbol(null,"output-schema28544","output-schema28544",-571793328,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"input-checker28546","input-checker28546",-1016941028,null),new cljs.core.Symbol(null,"map28543","map28543",2028434268,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"G__28548","G__28548",-1818849857,null),new cljs.core.Symbol(null,"meta28555","meta28555",1804116738,null)], null);
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.t28554.cljs$lang$type = true;

om_bootstrap.button.t28554.cljs$lang$ctorStr = "om-bootstrap.button/t28554";

om_bootstrap.button.t28554.cljs$lang$ctorPrWriter = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.button/t28554");
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

om_bootstrap.button.__GT_t28554 = ((function (owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547){
return (function om_bootstrap$button$constructor28541_$___GT_t28554(owner__$1,output_checker28547__$1,constructor28541__$1,input_schema28545__$1,output_schema28544__$1,validate__16151__auto____$1,input_checker28546__$1,map28543__$1,ufv____$1,G__28548__$1,meta28555){
return (new om_bootstrap.button.t28554(owner__$1,output_checker28547__$1,constructor28541__$1,input_schema28545__$1,output_schema28544__$1,validate__16151__auto____$1,input_checker28546__$1,map28543__$1,ufv____$1,G__28548__$1,meta28555));
});})(owner,validate__16151__auto__,ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
;

}

return (new om_bootstrap.button.t28554(owner,output_checker28547,om_bootstrap$button$constructor28541,input_schema28545,output_schema28544,validate__16151__auto__,input_checker28546,map28543,ufv__,G__28548,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28570 = output_checker28547.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28570)){
var error__16153__auto___28571 = temp__4425__auto___28570;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28541","constructor28541",1925827502,null),cljs.core.pr_str.call(null,error__16153__auto___28571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28544,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28571], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema28544,input_schema28545,input_checker28546,output_checker28547))
,schema.core.make_fn_schema.call(null,output_schema28544,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28545], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 * wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__22104__auto___28566){
return (function om_bootstrap$button$menu_item_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___28566))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___28566){
return (function (data__22105__auto__,owner28540,p__28562){
var vec__28563 = p__28562;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__28563,(0),null);
return component_fnk__22104__auto___28566.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28540,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___28566))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___28566){
return (function (seq28559){
var G__28560 = cljs.core.first.call(null,seq28559);
var seq28559__$1 = cljs.core.next.call(null,seq28559);
var G__28561 = cljs.core.first.call(null,seq28559__$1);
var seq28559__$2 = cljs.core.next.call(null,seq28559__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28560,G__28561,seq28559__$2);
});})(component_fnk__22104__auto___28566))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(){
var G__28565 = arguments.length;
switch (G__28565) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22073__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m28542){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22073__auto__,m28542);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28581 = schema.utils.use_fn_validation;
var output_schema28573_28582 = om_bootstrap.types.Component;
var input_schema28574_28583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28575_28584 = schema.core.checker.call(null,input_schema28574_28583);
var output_checker28576_28585 = schema.core.checker.call(null,output_schema28573_28582);
/**
 * Inputs: [opts :- MenuItem & children]
 * Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585){
return (function om_bootstrap$button$menu_item(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585){
return (function (G__28577,rest28578){
var validate__16151__auto__ = ufv___28581.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28586 = cljs.core.list_STAR_.call(null,G__28577,rest28578);
var temp__4425__auto___28587 = input_checker28575_28584.call(null,args__16152__auto___28586);
if(cljs.core.truth_(temp__4425__auto___28587)){
var error__16153__auto___28588 = temp__4425__auto___28587;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__16153__auto___28588)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28574_28583,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28586,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28588], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28577;
var children = rest28578;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28589 = output_checker28576_28585.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28589)){
var error__16153__auto___28590 = temp__4425__auto___28589;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__16153__auto___28590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28573_28582,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28590], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585){
return (function (seq28579){
var G__28580 = cljs.core.first.call(null,seq28579);
var seq28579__$1 = cljs.core.next.call(null,seq28579);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__28580,seq28579__$1);
});})(ufv___28581,output_schema28573_28582,input_schema28574_28583,input_checker28575_28584,output_checker28576_28585))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema28573_28582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28574_28583], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___28601 = schema.utils.use_fn_validation;
var output_schema28592_28602 = om_bootstrap.types.Component;
var input_schema28593_28603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28594_28604 = schema.core.checker.call(null,input_schema28593_28603);
var output_checker28595_28605 = schema.core.checker.call(null,output_schema28592_28602);
/**
 * Inputs: [opts :- DropdownMenu & children]
 * Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605){
return (function om_bootstrap$button$dropdown_menu(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605){
return (function (G__28596,rest28597){
var validate__16151__auto__ = ufv___28601.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28606 = cljs.core.list_STAR_.call(null,G__28596,rest28597);
var temp__4425__auto___28607 = input_checker28594_28604.call(null,args__16152__auto___28606);
if(cljs.core.truth_(temp__4425__auto___28607)){
var error__16153__auto___28608 = temp__4425__auto___28607;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__16153__auto___28608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28593_28603,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28606,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28608], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28596;
var children = rest28597;
while(true){
var vec__28600 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__28600,(0),null);
var props = cljs.core.nth.call(null,vec__28600,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__28600,bs,props,classes,ul_attrs,validate__16151__auto__,ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605){
return (function (p1__28591_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__28591_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__28600,bs,props,classes,ul_attrs,validate__16151__auto__,ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28609 = output_checker28595_28605.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28609)){
var error__16153__auto___28610 = temp__4425__auto___28609;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__16153__auto___28610)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28592_28602,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28610], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605){
return (function (seq28598){
var G__28599 = cljs.core.first.call(null,seq28598);
var seq28598__$1 = cljs.core.next.call(null,seq28598);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__28599,seq28598__$1);
});})(ufv___28601,output_schema28592_28602,input_schema28593_28603,input_checker28594_28604,output_checker28595_28605))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema28592_28602,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28593_28603], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__22075__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22075__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22075__auto__;
})();

var component_fnk__22104__auto___28638 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28616 = schema.core.Any;
var input_schema28617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28615","map28615",261116058,null))], null);
var input_checker28618 = schema.core.checker.call(null,input_schema28617);
var output_checker28619 = schema.core.checker.call(null,output_schema28616);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function om_bootstrap$button$constructor28613(G__28620){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28620], null);
var temp__4425__auto___28640 = input_checker28618.call(null,args__16152__auto___28639);
if(cljs.core.truth_(temp__4425__auto___28640)){
var error__16153__auto___28641 = temp__4425__auto___28640;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28613","constructor28613",-1791212019,null),cljs.core.pr_str.call(null,error__16153__auto___28641)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28617,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28639,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28641], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map28615 = G__28620;
while(true){
if(cljs.core.map_QMARK_.call(null,map28615)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28615)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map28615,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map28615,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t28626 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t28626 = (function (input_schema28617,owner,output_checker28619,constructor28613,output_schema28616,validate__16151__auto__,input_checker28618,state,map28615,ufv__,G__28620,meta28627){
this.input_schema28617 = input_schema28617;
this.owner = owner;
this.output_checker28619 = output_checker28619;
this.constructor28613 = constructor28613;
this.output_schema28616 = output_schema28616;
this.validate__16151__auto__ = validate__16151__auto__;
this.input_checker28618 = input_checker28618;
this.state = state;
this.map28615 = map28615;
this.ufv__ = ufv__;
this.G__28620 = G__28620;
this.meta28627 = meta28627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t28626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (_28628,meta28627__$1){
var self__ = this;
var _28628__$1 = this;
return (new om_bootstrap.button.t28626(self__.input_schema28617,self__.owner,self__.output_checker28619,self__.constructor28613,self__.output_schema28616,self__.validate__16151__auto__,self__.input_checker28618,self__.state,self__.map28615,self__.ufv__,self__.G__28620,meta28627__$1));
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.t28626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (_28628){
var self__ = this;
var _28628__$1 = this;
return self__.meta28627;
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.t28626.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t28626.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.t28626.prototype.om$core$IRender$ = true;

om_bootstrap.button.t28626.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__28629 = om.core.get_props.call(null,self__.owner);
var map__28629__$1 = ((cljs.core.seq_QMARK_.call(null,map__28629))?cljs.core.apply.call(null,cljs.core.hash_map,map__28629):map__28629);
var opts = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__28630 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__28630,(0),null);
var props = cljs.core.nth.call(null,vec__28630,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
], null);
var update_child_props = ((function (open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__11348__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (p1__28611_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__28611_SHARP_,update_child_props);
});})(open_QMARK_,map__28629,map__28629__$1,opts,children,vec__28630,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
,children))], null));
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.t28626.getBasis = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema28617","input-schema28617",-1715347071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-checker28619","output-checker28619",-802959960,null),new cljs.core.Symbol(null,"constructor28613","constructor28613",-1791212019,null),new cljs.core.Symbol(null,"output-schema28616","output-schema28616",-739402321,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"input-checker28618","input-checker28618",-1481121069,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map28615","map28615",261116058,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"G__28620","G__28620",1049183965,null),new cljs.core.Symbol(null,"meta28627","meta28627",-719660264,null)], null);
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.t28626.cljs$lang$type = true;

om_bootstrap.button.t28626.cljs$lang$ctorStr = "om-bootstrap.button/t28626";

om_bootstrap.button.t28626.cljs$lang$ctorPrWriter = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.button/t28626");
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

om_bootstrap.button.__GT_t28626 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619){
return (function om_bootstrap$button$constructor28613_$___GT_t28626(input_schema28617__$1,owner__$1,output_checker28619__$1,constructor28613__$1,output_schema28616__$1,validate__16151__auto____$1,input_checker28618__$1,state__$1,map28615__$1,ufv____$1,G__28620__$1,meta28627){
return (new om_bootstrap.button.t28626(input_schema28617__$1,owner__$1,output_checker28619__$1,constructor28613__$1,output_schema28616__$1,validate__16151__auto____$1,input_checker28618__$1,state__$1,map28615__$1,ufv____$1,G__28620__$1,meta28627));
});})(state,owner,validate__16151__auto__,ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
;

}

return (new om_bootstrap.button.t28626(input_schema28617,owner,output_checker28619,om_bootstrap$button$constructor28613,output_schema28616,validate__16151__auto__,input_checker28618,state,map28615,ufv__,G__28620,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28642 = output_checker28619.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28642)){
var error__16153__auto___28643 = temp__4425__auto___28642;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28613","constructor28613",-1791212019,null),cljs.core.pr_str.call(null,error__16153__auto___28643)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28616,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28643], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema28616,input_schema28617,input_checker28618,output_checker28619))
,schema.core.make_fn_schema.call(null,output_schema28616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28617], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__22104__auto___28638){
return (function om_bootstrap$button$dropdown_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___28638))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___28638){
return (function (data__22105__auto__,owner28612,p__28634){
var vec__28635 = p__28634;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__28635,(0),null);
return component_fnk__22104__auto___28638.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner28612),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28612,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___28638))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___28638){
return (function (seq28631){
var G__28632 = cljs.core.first.call(null,seq28631);
var seq28631__$1 = cljs.core.next.call(null,seq28631);
var G__28633 = cljs.core.first.call(null,seq28631__$1);
var seq28631__$2 = cljs.core.next.call(null,seq28631__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28632,G__28633,seq28631__$2);
});})(component_fnk__22104__auto___28638))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(){
var G__28637 = arguments.length;
switch (G__28637) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22073__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m28614){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22073__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m28614));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28653 = schema.utils.use_fn_validation;
var output_schema28645_28654 = om_bootstrap.types.Component;
var input_schema28646_28655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28647_28656 = schema.core.checker.call(null,input_schema28646_28655);
var output_checker28648_28657 = schema.core.checker.call(null,output_schema28645_28654);
/**
 * Inputs: [opts :- DropdownButton & children]
 * Returns: t/Component
 * 
 * Returns a dropdown button component. The component manages its own
 * dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657){
return (function om_bootstrap$button$dropdown(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657){
return (function (G__28649,rest28650){
var validate__16151__auto__ = ufv___28653.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28658 = cljs.core.list_STAR_.call(null,G__28649,rest28650);
var temp__4425__auto___28659 = input_checker28647_28656.call(null,args__16152__auto___28658);
if(cljs.core.truth_(temp__4425__auto___28659)){
var error__16153__auto___28660 = temp__4425__auto___28659;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__16153__auto___28660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28646_28655,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28658,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28660], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28649;
var children = rest28650;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28661 = output_checker28648_28657.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28661)){
var error__16153__auto___28662 = temp__4425__auto___28661;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__16153__auto___28662)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28645_28654,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28662], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657){
return (function (seq28651){
var G__28652 = cljs.core.first.call(null,seq28651);
var seq28651__$1 = cljs.core.next.call(null,seq28651);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__28652,seq28651__$1);
});})(ufv___28653,output_schema28645_28654,input_schema28646_28655,input_checker28647_28656,output_checker28648_28657))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema28645_28654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28646_28655], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__22075__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22075__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22075__auto__;
})();

var component_fnk__22104__auto___28689 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28667 = schema.core.Any;
var input_schema28668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28666","map28666",658205031,null))], null);
var input_checker28669 = schema.core.checker.call(null,input_schema28668);
var output_checker28670 = schema.core.checker.call(null,output_schema28667);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function om_bootstrap$button$constructor28664(G__28671){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28671], null);
var temp__4425__auto___28691 = input_checker28669.call(null,args__16152__auto___28690);
if(cljs.core.truth_(temp__4425__auto___28691)){
var error__16153__auto___28692 = temp__4425__auto___28691;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28664","constructor28664",69828348,null),cljs.core.pr_str.call(null,error__16153__auto___28692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28668,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28690,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28692], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map28666 = G__28671;
while(true){
if(cljs.core.map_QMARK_.call(null,map28666)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28666)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map28666,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map28666,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t28677 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t28677 = (function (owner,input_checker28669,map28666,output_schema28667,validate__16151__auto__,output_checker28670,G__28671,state,constructor28664,input_schema28668,ufv__,meta28678){
this.owner = owner;
this.input_checker28669 = input_checker28669;
this.map28666 = map28666;
this.output_schema28667 = output_schema28667;
this.validate__16151__auto__ = validate__16151__auto__;
this.output_checker28670 = output_checker28670;
this.G__28671 = G__28671;
this.state = state;
this.constructor28664 = constructor28664;
this.input_schema28668 = input_schema28668;
this.ufv__ = ufv__;
this.meta28678 = meta28678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t28677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (_28679,meta28678__$1){
var self__ = this;
var _28679__$1 = this;
return (new om_bootstrap.button.t28677(self__.owner,self__.input_checker28669,self__.map28666,self__.output_schema28667,self__.validate__16151__auto__,self__.output_checker28670,self__.G__28671,self__.state,self__.constructor28664,self__.input_schema28668,self__.ufv__,meta28678__$1));
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.t28677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (_28679){
var self__ = this;
var _28679__$1 = this;
return self__.meta28678;
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.t28677.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t28677.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.t28677.prototype.om$core$IRender$ = true;

om_bootstrap.button.t28677.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__28680 = om.core.get_props.call(null,self__.owner);
var map__28680__$1 = ((cljs.core.seq_QMARK_.call(null,map__28680))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var opts = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__28681 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__28681,(0),null);
var props = cljs.core.nth.call(null,vec__28681,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (k){
var temp__4425__auto___28693 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___28693)){
var f_28694 = temp__4425__auto___28693;
f_28694.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__28680,map__28680__$1,opts,children,vec__28681,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.t28677.getBasis = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-checker28669","input-checker28669",-1807307769,null),new cljs.core.Symbol(null,"map28666","map28666",658205031,null),new cljs.core.Symbol(null,"output-schema28667","output-schema28667",1161585744,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"output-checker28670","output-checker28670",1851280114,null),new cljs.core.Symbol(null,"G__28671","G__28671",-1202574510,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"constructor28664","constructor28664",69828348,null),new cljs.core.Symbol(null,"input-schema28668","input-schema28668",-1926517956,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta28678","meta28678",-204935111,null)], null);
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.t28677.cljs$lang$type = true;

om_bootstrap.button.t28677.cljs$lang$ctorStr = "om-bootstrap.button/t28677";

om_bootstrap.button.t28677.cljs$lang$ctorPrWriter = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.button/t28677");
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

om_bootstrap.button.__GT_t28677 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670){
return (function om_bootstrap$button$constructor28664_$___GT_t28677(owner__$1,input_checker28669__$1,map28666__$1,output_schema28667__$1,validate__16151__auto____$1,output_checker28670__$1,G__28671__$1,state__$1,constructor28664__$1,input_schema28668__$1,ufv____$1,meta28678){
return (new om_bootstrap.button.t28677(owner__$1,input_checker28669__$1,map28666__$1,output_schema28667__$1,validate__16151__auto____$1,output_checker28670__$1,G__28671__$1,state__$1,constructor28664__$1,input_schema28668__$1,ufv____$1,meta28678));
});})(state,owner,validate__16151__auto__,ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
;

}

return (new om_bootstrap.button.t28677(owner,input_checker28669,map28666,output_schema28667,validate__16151__auto__,output_checker28670,G__28671,state,om_bootstrap$button$constructor28664,input_schema28668,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28695 = output_checker28670.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28695)){
var error__16153__auto___28696 = temp__4425__auto___28695;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28664","constructor28664",69828348,null),cljs.core.pr_str.call(null,error__16153__auto___28696)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28667,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28696], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema28667,input_schema28668,input_checker28669,output_checker28670))
,schema.core.make_fn_schema.call(null,output_schema28667,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28668], null)));
})();
/**
 * Generates a split button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__22104__auto___28689){
return (function om_bootstrap$button$split_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___28689))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___28689){
return (function (data__22105__auto__,owner28663,p__28685){
var vec__28686 = p__28685;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__28686,(0),null);
return component_fnk__22104__auto___28689.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner28663),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28663,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___28689))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___28689){
return (function (seq28682){
var G__28683 = cljs.core.first.call(null,seq28682);
var seq28682__$1 = cljs.core.next.call(null,seq28682);
var G__28684 = cljs.core.first.call(null,seq28682__$1);
var seq28682__$2 = cljs.core.next.call(null,seq28682__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28683,G__28684,seq28682__$2);
});})(component_fnk__22104__auto___28689))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(){
var G__28688 = arguments.length;
switch (G__28688) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22073__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m28665){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22073__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m28665));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28706 = schema.utils.use_fn_validation;
var output_schema28698_28707 = schema.core.Any;
var input_schema28699_28708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28700_28709 = schema.core.checker.call(null,input_schema28699_28708);
var output_checker28701_28710 = schema.core.checker.call(null,output_schema28698_28707);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710){
return (function om_bootstrap$button$split(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710){
return (function (G__28702,rest28703){
var validate__16151__auto__ = ufv___28706.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28711 = cljs.core.list_STAR_.call(null,G__28702,rest28703);
var temp__4425__auto___28712 = input_checker28700_28709.call(null,args__16152__auto___28711);
if(cljs.core.truth_(temp__4425__auto___28712)){
var error__16153__auto___28713 = temp__4425__auto___28712;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__16153__auto___28713)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28699_28708,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28711,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28713], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__28702;
var children = rest28703;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28714 = output_checker28701_28710.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28714)){
var error__16153__auto___28715 = temp__4425__auto___28714;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__16153__auto___28715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28698_28707,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28715], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710){
return (function (seq28704){
var G__28705 = cljs.core.first.call(null,seq28704);
var seq28704__$1 = cljs.core.next.call(null,seq28704);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__28705,seq28704__$1);
});})(ufv___28706,output_schema28698_28707,input_schema28699_28708,input_checker28700_28709,output_checker28701_28710))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema28698_28707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28699_28708], null)));

//# sourceMappingURL=button.js.map
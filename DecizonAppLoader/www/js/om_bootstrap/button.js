// Compiled by ClojureScript 0.0-3211 {}
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
var ufv___20334 = schema.utils.use_fn_validation;
var output_schema20328_20335 = schema.core.Any;
var input_schema20329_20336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker20330_20337 = schema.core.checker.call(null,input_schema20329_20336);
var output_checker20331_20338 = schema.core.checker.call(null,output_schema20328_20335);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___20334,output_schema20328_20335,input_schema20329_20336,input_checker20330_20337,output_checker20331_20338){
return (function om_bootstrap$button$render_anchor(G__20332,G__20333){
var validate__11904__auto__ = ufv___20334.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20332,G__20333], null);
var temp__4126__auto___20340 = input_checker20330_20337.call(null,args__11905__auto___20339);
if(cljs.core.truth_(temp__4126__auto___20340)){
var error__11906__auto___20341 = temp__4126__auto___20340;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11906__auto___20341)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20341,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20339,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20329_20336,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20332;
var children = G__20333;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20342 = output_checker20331_20338.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20342)){
var error__11906__auto___20343 = temp__4126__auto___20342;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11906__auto___20343)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20343,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20328_20335,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20334,output_schema20328_20335,input_schema20329_20336,input_checker20330_20337,output_checker20331_20338))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema20328_20335,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20329_20336], null)));
var ufv___20353 = schema.utils.use_fn_validation;
var output_schema20344_20354 = om_bootstrap.types.Component;
var input_schema20345_20355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker20346_20356 = schema.core.checker.call(null,input_schema20345_20355);
var output_checker20347_20357 = schema.core.checker.call(null,output_schema20344_20354);
/**
 * Inputs: [props :- Button & children]
 * Returns: t/Component
 * 
 * Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357){
return (function om_bootstrap$button$button(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357){
return (function (G__20348,rest20349){
var validate__11904__auto__ = ufv___20353.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20358 = cljs.core.list_STAR_.call(null,G__20348,rest20349);
var temp__4126__auto___20359 = input_checker20346_20356.call(null,args__11905__auto___20358);
if(cljs.core.truth_(temp__4126__auto___20359)){
var error__11906__auto___20360 = temp__4126__auto___20359;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11906__auto___20360)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20360,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20358,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20345_20355,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var props = G__20348;
var children = rest20349;
while(true){
var vec__20352 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__20352,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__20352,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__10412__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
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
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20361 = output_checker20347_20357.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20361)){
var error__11906__auto___20362 = temp__4126__auto___20361;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11906__auto___20362)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20362,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20344_20354,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357){
return (function (seq20350){
var G__20351 = cljs.core.first.call(null,seq20350);
var seq20350__$1 = cljs.core.next.call(null,seq20350);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__20351,seq20350__$1);
});})(ufv___20353,output_schema20344_20354,input_schema20345_20355,input_checker20346_20356,output_checker20347_20357))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema20344_20354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20345_20355], null)));
var ufv___20372 = schema.utils.use_fn_validation;
var output_schema20363_20373 = om_bootstrap.types.Component;
var input_schema20364_20374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20365_20375 = schema.core.checker.call(null,input_schema20364_20374);
var output_checker20366_20376 = schema.core.checker.call(null,output_schema20363_20373);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376){
return (function om_bootstrap$button$toolbar(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376){
return (function (G__20367,rest20368){
var validate__11904__auto__ = ufv___20372.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20377 = cljs.core.list_STAR_.call(null,G__20367,rest20368);
var temp__4126__auto___20378 = input_checker20365_20375.call(null,args__11905__auto___20377);
if(cljs.core.truth_(temp__4126__auto___20378)){
var error__11906__auto___20379 = temp__4126__auto___20378;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11906__auto___20379)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20379,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20377,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20364_20374,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20367;
var children = rest20368;
while(true){
var vec__20371 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__20371,(0),null);
var props = cljs.core.nth.call(null,vec__20371,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20380 = output_checker20366_20376.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20380)){
var error__11906__auto___20381 = temp__4126__auto___20380;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11906__auto___20381)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20381,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20363_20373,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376){
return (function (seq20369){
var G__20370 = cljs.core.first.call(null,seq20369);
var seq20369__$1 = cljs.core.next.call(null,seq20369);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__20370,seq20369__$1);
});})(ufv___20372,output_schema20363_20373,input_schema20364_20374,input_checker20365_20375,output_checker20366_20376))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema20363_20373,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20364_20374], null)));
var ufv___20391 = schema.utils.use_fn_validation;
var output_schema20382_20392 = om_bootstrap.types.Component;
var input_schema20383_20393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20384_20394 = schema.core.checker.call(null,input_schema20383_20393);
var output_checker20385_20395 = schema.core.checker.call(null,output_schema20382_20392);
/**
 * Inputs: [opts :- ButtonGroup & children]
 * Returns: t/Component
 * 
 * Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395){
return (function om_bootstrap$button$button_group(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395){
return (function (G__20386,rest20387){
var validate__11904__auto__ = ufv___20391.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20396 = cljs.core.list_STAR_.call(null,G__20386,rest20387);
var temp__4126__auto___20397 = input_checker20384_20394.call(null,args__11905__auto___20396);
if(cljs.core.truth_(temp__4126__auto___20397)){
var error__11906__auto___20398 = temp__4126__auto___20397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11906__auto___20398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20398,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20396,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20383_20393,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20386;
var children = rest20387;
while(true){
var vec__20390 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__20390,(0),null);
var props = cljs.core.nth.call(null,vec__20390,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20399 = output_checker20385_20395.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20399)){
var error__11906__auto___20400 = temp__4126__auto___20399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11906__auto___20400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20400,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20382_20392,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395){
return (function (seq20388){
var G__20389 = cljs.core.first.call(null,seq20388);
var seq20388__$1 = cljs.core.next.call(null,seq20388);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__20389,seq20388__$1);
});})(ufv___20391,output_schema20382_20392,input_schema20383_20393,input_checker20384_20394,output_checker20385_20395))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema20382_20392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20383_20393], null)));
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

var component_fnk__16143__auto___20427 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema20405 = schema.core.Any;
var input_schema20406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20404","map20404",646873993,null))], null);
var input_checker20407 = schema.core.checker.call(null,input_schema20406);
var output_checker20408 = schema.core.checker.call(null,output_schema20405);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function om_bootstrap$button$constructor20402(G__20409){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20409], null);
var temp__4126__auto___20429 = input_checker20407.call(null,args__11905__auto___20428);
if(cljs.core.truth_(temp__4126__auto___20429)){
var error__11906__auto___20430 = temp__4126__auto___20429;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20402","constructor20402",1436149881,null),cljs.core.pr_str.call(null,error__11906__auto___20430)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20430,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20428,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20406,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map20404 = G__20409;
while(true){
if(cljs.core.map_QMARK_.call(null,map20404)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20404)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map20404,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t20415 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t20415 = (function (owner,map20404,output_checker20408,input_schema20406,validate__11904__auto__,G__20409,output_schema20405,constructor20402,input_checker20407,ufv__,meta20416){
this.owner = owner;
this.map20404 = map20404;
this.output_checker20408 = output_checker20408;
this.input_schema20406 = input_schema20406;
this.validate__11904__auto__ = validate__11904__auto__;
this.G__20409 = G__20409;
this.output_schema20405 = output_schema20405;
this.constructor20402 = constructor20402;
this.input_checker20407 = input_checker20407;
this.ufv__ = ufv__;
this.meta20416 = meta20416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t20415.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t20415.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

om_bootstrap.button.t20415.prototype.om$core$IRender$ = true;

om_bootstrap.button.t20415.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__20418 = om.core.get_props.call(null,self__.owner);
var map__20418__$1 = ((cljs.core.seq_QMARK_.call(null,map__20418))?cljs.core.apply.call(null,cljs.core.hash_map,map__20418):map__20418);
var children = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__20419 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__20419,(0),null);
var props = cljs.core.nth.call(null,vec__20419,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__20418,map__20418__$1,children,opts,vec__20419,bs,props,classes,___$1,owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var on_select = temp__4126__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__20418,map__20418__$1,children,opts,vec__20419,bs,props,classes,___$1,owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var k = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

om_bootstrap.button.t20415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (_20417){
var self__ = this;
var _20417__$1 = this;
return self__.meta20416;
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

om_bootstrap.button.t20415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (_20417,meta20416__$1){
var self__ = this;
var _20417__$1 = this;
return (new om_bootstrap.button.t20415(self__.owner,self__.map20404,self__.output_checker20408,self__.input_schema20406,self__.validate__11904__auto__,self__.G__20409,self__.output_schema20405,self__.constructor20402,self__.input_checker20407,self__.ufv__,meta20416__$1));
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

om_bootstrap.button.t20415.cljs$lang$type = true;

om_bootstrap.button.t20415.cljs$lang$ctorStr = "om-bootstrap.button/t20415";

om_bootstrap.button.t20415.cljs$lang$ctorPrWriter = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.button/t20415");
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

om_bootstrap.button.__GT_t20415 = ((function (owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408){
return (function om_bootstrap$button$constructor20402_$___GT_t20415(owner__$1,map20404__$1,output_checker20408__$1,input_schema20406__$1,validate__11904__auto____$1,G__20409__$1,output_schema20405__$1,constructor20402__$1,input_checker20407__$1,ufv____$1,meta20416){
return (new om_bootstrap.button.t20415(owner__$1,map20404__$1,output_checker20408__$1,input_schema20406__$1,validate__11904__auto____$1,G__20409__$1,output_schema20405__$1,constructor20402__$1,input_checker20407__$1,ufv____$1,meta20416));
});})(owner,validate__11904__auto__,ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
;

}

return (new om_bootstrap.button.t20415(owner,map20404,output_checker20408,input_schema20406,validate__11904__auto__,G__20409,output_schema20405,om_bootstrap$button$constructor20402,input_checker20407,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20431 = output_checker20408.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20431)){
var error__11906__auto___20432 = temp__4126__auto___20431;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20402","constructor20402",1436149881,null),cljs.core.pr_str.call(null,error__11906__auto___20432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20432,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20405,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema20405,input_schema20406,input_checker20407,output_checker20408))
,schema.core.make_fn_schema.call(null,output_schema20405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20406], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 * wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__16143__auto___20427){
return (function om_bootstrap$button$menu_item_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___20427))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___20427){
return (function (data__16144__auto__,owner20401,p__20423){
var vec__20424 = p__20423;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__20424,(0),null);
return component_fnk__16143__auto___20427.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20401,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___20427))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___20427){
return (function (seq20420){
var G__20421 = cljs.core.first.call(null,seq20420);
var seq20420__$1 = cljs.core.next.call(null,seq20420);
var G__20422 = cljs.core.first.call(null,seq20420__$1);
var seq20420__$2 = cljs.core.next.call(null,seq20420__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20421,G__20422,seq20420__$2);
});})(component_fnk__16143__auto___20427))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(){
var G__20426 = arguments.length;
switch (G__20426) {
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

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__16112__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m20403){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__16112__auto__,m20403);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___20442 = schema.utils.use_fn_validation;
var output_schema20434_20443 = om_bootstrap.types.Component;
var input_schema20435_20444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20436_20445 = schema.core.checker.call(null,input_schema20435_20444);
var output_checker20437_20446 = schema.core.checker.call(null,output_schema20434_20443);
/**
 * Inputs: [opts :- MenuItem & children]
 * Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446){
return (function om_bootstrap$button$menu_item(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446){
return (function (G__20438,rest20439){
var validate__11904__auto__ = ufv___20442.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20447 = cljs.core.list_STAR_.call(null,G__20438,rest20439);
var temp__4126__auto___20448 = input_checker20436_20445.call(null,args__11905__auto___20447);
if(cljs.core.truth_(temp__4126__auto___20448)){
var error__11906__auto___20449 = temp__4126__auto___20448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11906__auto___20449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20449,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20447,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20435_20444,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20438;
var children = rest20439;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20450 = output_checker20437_20446.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20450)){
var error__11906__auto___20451 = temp__4126__auto___20450;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11906__auto___20451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20451,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20434_20443,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446){
return (function (seq20440){
var G__20441 = cljs.core.first.call(null,seq20440);
var seq20440__$1 = cljs.core.next.call(null,seq20440);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__20441,seq20440__$1);
});})(ufv___20442,output_schema20434_20443,input_schema20435_20444,input_checker20436_20445,output_checker20437_20446))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema20434_20443,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20435_20444], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___20462 = schema.utils.use_fn_validation;
var output_schema20453_20463 = om_bootstrap.types.Component;
var input_schema20454_20464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20455_20465 = schema.core.checker.call(null,input_schema20454_20464);
var output_checker20456_20466 = schema.core.checker.call(null,output_schema20453_20463);
/**
 * Inputs: [opts :- DropdownMenu & children]
 * Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466){
return (function om_bootstrap$button$dropdown_menu(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466){
return (function (G__20457,rest20458){
var validate__11904__auto__ = ufv___20462.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20467 = cljs.core.list_STAR_.call(null,G__20457,rest20458);
var temp__4126__auto___20468 = input_checker20455_20465.call(null,args__11905__auto___20467);
if(cljs.core.truth_(temp__4126__auto___20468)){
var error__11906__auto___20469 = temp__4126__auto___20468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11906__auto___20469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20469,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20467,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20454_20464,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20457;
var children = rest20458;
while(true){
var vec__20461 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__20461,(0),null);
var props = cljs.core.nth.call(null,vec__20461,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var on_select = temp__4124__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__20461,bs,props,classes,ul_attrs,validate__11904__auto__,ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466){
return (function (p1__20452_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__20452_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__20461,bs,props,classes,ul_attrs,validate__11904__auto__,ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20470 = output_checker20456_20466.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20470)){
var error__11906__auto___20471 = temp__4126__auto___20470;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11906__auto___20471)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20471,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20453_20463,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466){
return (function (seq20459){
var G__20460 = cljs.core.first.call(null,seq20459);
var seq20459__$1 = cljs.core.next.call(null,seq20459);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__20460,seq20459__$1);
});})(ufv___20462,output_schema20453_20463,input_schema20454_20464,input_checker20455_20465,output_checker20456_20466))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema20453_20463,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20454_20464], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__16114__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__16114__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__16114__auto__;
})();

var component_fnk__16143__auto___20499 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema20477 = schema.core.Any;
var input_schema20478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20476","map20476",-748346354,null))], null);
var input_checker20479 = schema.core.checker.call(null,input_schema20478);
var output_checker20480 = schema.core.checker.call(null,output_schema20477);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function om_bootstrap$button$constructor20474(G__20481){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20481], null);
var temp__4126__auto___20501 = input_checker20479.call(null,args__11905__auto___20500);
if(cljs.core.truth_(temp__4126__auto___20501)){
var error__11906__auto___20502 = temp__4126__auto___20501;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20474","constructor20474",-656083383,null),cljs.core.pr_str.call(null,error__11906__auto___20502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20502,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20500,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20478,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map20476 = G__20481;
while(true){
if(cljs.core.map_QMARK_.call(null,map20476)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20476)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map20476,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map20476,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t20487 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t20487 = (function (input_schema20478,input_checker20479,owner,constructor20474,validate__11904__auto__,map20476,output_checker20480,state,G__20481,ufv__,output_schema20477,meta20488){
this.input_schema20478 = input_schema20478;
this.input_checker20479 = input_checker20479;
this.owner = owner;
this.constructor20474 = constructor20474;
this.validate__11904__auto__ = validate__11904__auto__;
this.map20476 = map20476;
this.output_checker20480 = output_checker20480;
this.state = state;
this.G__20481 = G__20481;
this.ufv__ = ufv__;
this.output_schema20477 = output_schema20477;
this.meta20488 = meta20488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t20487.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t20487.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

om_bootstrap.button.t20487.prototype.om$core$IRender$ = true;

om_bootstrap.button.t20487.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__20490 = om.core.get_props.call(null,self__.owner);
var map__20490__$1 = ((cljs.core.seq_QMARK_.call(null,map__20490))?cljs.core.apply.call(null,cljs.core.hash_map,map__20490):map__20490);
var children = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__20491 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__20491,(0),null);
var props = cljs.core.nth.call(null,vec__20491,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
], null);
var update_child_props = ((function (open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__10412__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (key){
var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var os = temp__4124__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (p1__20472_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__20472_SHARP_,update_child_props);
});})(open_QMARK_,map__20490,map__20490__$1,children,opts,vec__20491,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
,children))], null));
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

om_bootstrap.button.t20487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (_20489){
var self__ = this;
var _20489__$1 = this;
return self__.meta20488;
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

om_bootstrap.button.t20487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (_20489,meta20488__$1){
var self__ = this;
var _20489__$1 = this;
return (new om_bootstrap.button.t20487(self__.input_schema20478,self__.input_checker20479,self__.owner,self__.constructor20474,self__.validate__11904__auto__,self__.map20476,self__.output_checker20480,self__.state,self__.G__20481,self__.ufv__,self__.output_schema20477,meta20488__$1));
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

om_bootstrap.button.t20487.cljs$lang$type = true;

om_bootstrap.button.t20487.cljs$lang$ctorStr = "om-bootstrap.button/t20487";

om_bootstrap.button.t20487.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.button/t20487");
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

om_bootstrap.button.__GT_t20487 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480){
return (function om_bootstrap$button$constructor20474_$___GT_t20487(input_schema20478__$1,input_checker20479__$1,owner__$1,constructor20474__$1,validate__11904__auto____$1,map20476__$1,output_checker20480__$1,state__$1,G__20481__$1,ufv____$1,output_schema20477__$1,meta20488){
return (new om_bootstrap.button.t20487(input_schema20478__$1,input_checker20479__$1,owner__$1,constructor20474__$1,validate__11904__auto____$1,map20476__$1,output_checker20480__$1,state__$1,G__20481__$1,ufv____$1,output_schema20477__$1,meta20488));
});})(state,owner,validate__11904__auto__,ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
;

}

return (new om_bootstrap.button.t20487(input_schema20478,input_checker20479,owner,om_bootstrap$button$constructor20474,validate__11904__auto__,map20476,output_checker20480,state,G__20481,ufv__,output_schema20477,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20503 = output_checker20480.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20503)){
var error__11906__auto___20504 = temp__4126__auto___20503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20474","constructor20474",-656083383,null),cljs.core.pr_str.call(null,error__11906__auto___20504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20504,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20477,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema20477,input_schema20478,input_checker20479,output_checker20480))
,schema.core.make_fn_schema.call(null,output_schema20477,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20478], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__16143__auto___20499){
return (function om_bootstrap$button$dropdown_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___20499))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___20499){
return (function (data__16144__auto__,owner20473,p__20495){
var vec__20496 = p__20495;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__20496,(0),null);
return component_fnk__16143__auto___20499.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner20473),new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20473,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___20499))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___20499){
return (function (seq20492){
var G__20493 = cljs.core.first.call(null,seq20492);
var seq20492__$1 = cljs.core.next.call(null,seq20492);
var G__20494 = cljs.core.first.call(null,seq20492__$1);
var seq20492__$2 = cljs.core.next.call(null,seq20492__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20493,G__20494,seq20492__$2);
});})(component_fnk__16143__auto___20499))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(){
var G__20498 = arguments.length;
switch (G__20498) {
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

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__16112__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m20475){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__16112__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m20475));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___20514 = schema.utils.use_fn_validation;
var output_schema20506_20515 = om_bootstrap.types.Component;
var input_schema20507_20516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20508_20517 = schema.core.checker.call(null,input_schema20507_20516);
var output_checker20509_20518 = schema.core.checker.call(null,output_schema20506_20515);
/**
 * Inputs: [opts :- DropdownButton & children]
 * Returns: t/Component
 * 
 * Returns a dropdown button component. The component manages its own
 * dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518){
return (function om_bootstrap$button$dropdown(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518){
return (function (G__20510,rest20511){
var validate__11904__auto__ = ufv___20514.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20519 = cljs.core.list_STAR_.call(null,G__20510,rest20511);
var temp__4126__auto___20520 = input_checker20508_20517.call(null,args__11905__auto___20519);
if(cljs.core.truth_(temp__4126__auto___20520)){
var error__11906__auto___20521 = temp__4126__auto___20520;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11906__auto___20521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20521,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20519,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20507_20516,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20510;
var children = rest20511;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20522 = output_checker20509_20518.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20522)){
var error__11906__auto___20523 = temp__4126__auto___20522;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11906__auto___20523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20523,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20506_20515,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518){
return (function (seq20512){
var G__20513 = cljs.core.first.call(null,seq20512);
var seq20512__$1 = cljs.core.next.call(null,seq20512);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__20513,seq20512__$1);
});})(ufv___20514,output_schema20506_20515,input_schema20507_20516,input_checker20508_20517,output_checker20509_20518))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema20506_20515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20507_20516], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__16114__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__16114__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__16114__auto__;
})();

var component_fnk__16143__auto___20550 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema20528 = schema.core.Any;
var input_schema20529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20527","map20527",1611993296,null))], null);
var input_checker20530 = schema.core.checker.call(null,input_schema20529);
var output_checker20531 = schema.core.checker.call(null,output_schema20528);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function om_bootstrap$button$constructor20525(G__20532){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20532], null);
var temp__4126__auto___20552 = input_checker20530.call(null,args__11905__auto___20551);
if(cljs.core.truth_(temp__4126__auto___20552)){
var error__11906__auto___20553 = temp__4126__auto___20552;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20525","constructor20525",-1692728273,null),cljs.core.pr_str.call(null,error__11906__auto___20553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20553,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20551,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20529,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map20527 = G__20532;
while(true){
if(cljs.core.map_QMARK_.call(null,map20527)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20527)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map20527,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map20527,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t20538 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t20538 = (function (owner,input_schema20529,input_checker20530,output_schema20528,validate__11904__auto__,constructor20525,map20527,G__20532,state,output_checker20531,ufv__,meta20539){
this.owner = owner;
this.input_schema20529 = input_schema20529;
this.input_checker20530 = input_checker20530;
this.output_schema20528 = output_schema20528;
this.validate__11904__auto__ = validate__11904__auto__;
this.constructor20525 = constructor20525;
this.map20527 = map20527;
this.G__20532 = G__20532;
this.state = state;
this.output_checker20531 = output_checker20531;
this.ufv__ = ufv__;
this.meta20539 = meta20539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t20538.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t20538.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

om_bootstrap.button.t20538.prototype.om$core$IRender$ = true;

om_bootstrap.button.t20538.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__20541 = om.core.get_props.call(null,self__.owner);
var map__20541__$1 = ((cljs.core.seq_QMARK_.call(null,map__20541))?cljs.core.apply.call(null,cljs.core.hash_map,map__20541):map__20541);
var children = cljs.core.get.call(null,map__20541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__20541__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__20542 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__20542,(0),null);
var props = cljs.core.nth.call(null,vec__20542,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (k){
var temp__4126__auto___20554 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___20554)){
var f_20555 = temp__4126__auto___20554;
f_20555.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__20541,map__20541__$1,children,opts,vec__20542,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

om_bootstrap.button.t20538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (_20540){
var self__ = this;
var _20540__$1 = this;
return self__.meta20539;
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

om_bootstrap.button.t20538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (_20540,meta20539__$1){
var self__ = this;
var _20540__$1 = this;
return (new om_bootstrap.button.t20538(self__.owner,self__.input_schema20529,self__.input_checker20530,self__.output_schema20528,self__.validate__11904__auto__,self__.constructor20525,self__.map20527,self__.G__20532,self__.state,self__.output_checker20531,self__.ufv__,meta20539__$1));
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

om_bootstrap.button.t20538.cljs$lang$type = true;

om_bootstrap.button.t20538.cljs$lang$ctorStr = "om-bootstrap.button/t20538";

om_bootstrap.button.t20538.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.button/t20538");
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

om_bootstrap.button.__GT_t20538 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531){
return (function om_bootstrap$button$constructor20525_$___GT_t20538(owner__$1,input_schema20529__$1,input_checker20530__$1,output_schema20528__$1,validate__11904__auto____$1,constructor20525__$1,map20527__$1,G__20532__$1,state__$1,output_checker20531__$1,ufv____$1,meta20539){
return (new om_bootstrap.button.t20538(owner__$1,input_schema20529__$1,input_checker20530__$1,output_schema20528__$1,validate__11904__auto____$1,constructor20525__$1,map20527__$1,G__20532__$1,state__$1,output_checker20531__$1,ufv____$1,meta20539));
});})(state,owner,validate__11904__auto__,ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
;

}

return (new om_bootstrap.button.t20538(owner,input_schema20529,input_checker20530,output_schema20528,validate__11904__auto__,om_bootstrap$button$constructor20525,map20527,G__20532,state,output_checker20531,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20556 = output_checker20531.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20556)){
var error__11906__auto___20557 = temp__4126__auto___20556;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor20525","constructor20525",-1692728273,null),cljs.core.pr_str.call(null,error__11906__auto___20557)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20557,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20528,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema20528,input_schema20529,input_checker20530,output_checker20531))
,schema.core.make_fn_schema.call(null,output_schema20528,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20529], null)));
})();
/**
 * Generates a split button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__16143__auto___20550){
return (function om_bootstrap$button$split_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___20550))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___20550){
return (function (data__16144__auto__,owner20524,p__20546){
var vec__20547 = p__20546;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__20547,(0),null);
return component_fnk__16143__auto___20550.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner20524),new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20524,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___20550))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___20550){
return (function (seq20543){
var G__20544 = cljs.core.first.call(null,seq20543);
var seq20543__$1 = cljs.core.next.call(null,seq20543);
var G__20545 = cljs.core.first.call(null,seq20543__$1);
var seq20543__$2 = cljs.core.next.call(null,seq20543__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20544,G__20545,seq20543__$2);
});})(component_fnk__16143__auto___20550))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(){
var G__20549 = arguments.length;
switch (G__20549) {
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

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__16112__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m20526){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__16112__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m20526));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___20567 = schema.utils.use_fn_validation;
var output_schema20559_20568 = schema.core.Any;
var input_schema20560_20569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker20561_20570 = schema.core.checker.call(null,input_schema20560_20569);
var output_checker20562_20571 = schema.core.checker.call(null,output_schema20559_20568);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571){
return (function om_bootstrap$button$split(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571){
return (function (G__20563,rest20564){
var validate__11904__auto__ = ufv___20567.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20572 = cljs.core.list_STAR_.call(null,G__20563,rest20564);
var temp__4126__auto___20573 = input_checker20561_20570.call(null,args__11905__auto___20572);
if(cljs.core.truth_(temp__4126__auto___20573)){
var error__11906__auto___20574 = temp__4126__auto___20573;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11906__auto___20574)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20574,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20572,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20560_20569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__20563;
var children = rest20564;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20575 = output_checker20562_20571.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20575)){
var error__11906__auto___20576 = temp__4126__auto___20575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11906__auto___20576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20576,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20559_20568,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571){
return (function (seq20565){
var G__20566 = cljs.core.first.call(null,seq20565);
var seq20565__$1 = cljs.core.next.call(null,seq20565);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__20566,seq20565__$1);
});})(ufv___20567,output_schema20559_20568,input_schema20560_20569,input_checker20561_20570,output_checker20562_20571))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema20559_20568,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20560_20569], null)));

//# sourceMappingURL=button.js.map
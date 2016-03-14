// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.types');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___25747 = schema.utils.use_fn_validation;
var output_schema25738_25748 = om_bootstrap.types.Component;
var input_schema25739_25749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25740_25750 = schema.core.checker.call(null,input_schema25739_25749);
var output_checker25741_25751 = schema.core.checker.call(null,output_schema25738_25748);
/**
 * Inputs: [opts :- Grid & children]
 * Returns: t/Component
 * 
 * Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751){
return (function om_bootstrap$grid$grid(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751){
return (function (G__25742,rest25743){
var validate__11904__auto__ = ufv___25747.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25752 = cljs.core.list_STAR_.call(null,G__25742,rest25743);
var temp__4126__auto___25753 = input_checker25740_25750.call(null,args__11905__auto___25752);
if(cljs.core.truth_(temp__4126__auto___25753)){
var error__11906__auto___25754 = temp__4126__auto___25753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__11906__auto___25754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25754,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25752,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25739_25749,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25742;
var children = rest25743;
while(true){
var vec__25746 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__25746,(0),null);
var props = cljs.core.nth.call(null,vec__25746,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25755 = output_checker25741_25751.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25755)){
var error__11906__auto___25756 = temp__4126__auto___25755;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__11906__auto___25756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25756,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25738_25748,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751){
return (function (seq25744){
var G__25745 = cljs.core.first.call(null,seq25744);
var seq25744__$1 = cljs.core.next.call(null,seq25744);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__25745,seq25744__$1);
});})(ufv___25747,output_schema25738_25748,input_schema25739_25749,input_checker25740_25750,output_checker25741_25751))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema25738_25748,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25739_25749], null)));
var ufv___25765 = schema.utils.use_fn_validation;
var output_schema25757_25766 = om_bootstrap.types.Component;
var input_schema25758_25767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25759_25768 = schema.core.checker.call(null,input_schema25758_25767);
var output_checker25760_25769 = schema.core.checker.call(null,output_schema25757_25766);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769){
return (function om_bootstrap$grid$row(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769){
return (function (G__25761,rest25762){
var validate__11904__auto__ = ufv___25765.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25770 = cljs.core.list_STAR_.call(null,G__25761,rest25762);
var temp__4126__auto___25771 = input_checker25759_25768.call(null,args__11905__auto___25770);
if(cljs.core.truth_(temp__4126__auto___25771)){
var error__11906__auto___25772 = temp__4126__auto___25771;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__11906__auto___25772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25772,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25770,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25758_25767,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25761;
var children = rest25762;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25773 = output_checker25760_25769.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25773)){
var error__11906__auto___25774 = temp__4126__auto___25773;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__11906__auto___25774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25774,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25757_25766,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769){
return (function (seq25763){
var G__25764 = cljs.core.first.call(null,seq25763);
var seq25763__$1 = cljs.core.next.call(null,seq25763);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__25764,seq25763__$1);
});})(ufv___25765,output_schema25757_25766,input_schema25758_25767,input_checker25759_25768,output_checker25760_25769))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema25757_25766,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25758_25767], null)));
var ufv___25786 = schema.utils.use_fn_validation;
var output_schema25775_25787 = om_bootstrap.types.Component;
var input_schema25776_25788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25777_25789 = schema.core.checker.call(null,input_schema25776_25788);
var output_checker25778_25790 = schema.core.checker.call(null,output_schema25775_25787);
/**
 * Inputs: [opts :- Col & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790){
return (function om_bootstrap$grid$col(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790){
return (function (G__25779,rest25780){
var validate__11904__auto__ = ufv___25786.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25791 = cljs.core.list_STAR_.call(null,G__25779,rest25780);
var temp__4126__auto___25792 = input_checker25777_25789.call(null,args__11905__auto___25791);
if(cljs.core.truth_(temp__4126__auto___25792)){
var error__11906__auto___25793 = temp__4126__auto___25792;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__11906__auto___25793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25793,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25791,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25776_25788,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25779;
var children = rest25780;
while(true){
var vec__25783 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__25783,(0),null);
var props = cljs.core.nth.call(null,vec__25783,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__25783,bs,props,validate__11904__auto__,ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790){
return (function (p__25784){
var vec__25785 = p__25784;
var k = cljs.core.nth.call(null,vec__25785,(0),null);
var v = cljs.core.nth.call(null,vec__25785,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__25783,bs,props,validate__11904__auto__,ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25794 = output_checker25778_25790.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25794)){
var error__11906__auto___25795 = temp__4126__auto___25794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__11906__auto___25795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25795,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25775_25787,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790){
return (function (seq25781){
var G__25782 = cljs.core.first.call(null,seq25781);
var seq25781__$1 = cljs.core.next.call(null,seq25781);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__25782,seq25781__$1);
});})(ufv___25786,output_schema25775_25787,input_schema25776_25788,input_checker25777_25789,output_checker25778_25790))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema25775_25787,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25776_25788], null)));

//# sourceMappingURL=grid.js.map
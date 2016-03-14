// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
var ufv___25695 = schema.utils.use_fn_validation;
var output_schema25686_25696 = om_bootstrap.types.Component;
var input_schema25687_25697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25688_25698 = schema.core.checker.call(null,input_schema25687_25697);
var output_checker25689_25699 = schema.core.checker.call(null,output_schema25686_25696);
/**
 * Inputs: [opts :- Panel & children]
 * Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699){
return (function om_bootstrap$panel$panel(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699){
return (function (G__25690,rest25691){
var validate__11904__auto__ = ufv___25695.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25700 = cljs.core.list_STAR_.call(null,G__25690,rest25691);
var temp__4126__auto___25701 = input_checker25688_25698.call(null,args__11905__auto___25700);
if(cljs.core.truth_(temp__4126__auto___25701)){
var error__11906__auto___25702 = temp__4126__auto___25701;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__11906__auto___25702)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25702,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25700,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25687_25697,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25690;
var children = rest25691;
while(true){
var vec__25694 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__25694,(0),null);
var props = cljs.core.nth.call(null,vec__25694,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var header = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"ref": "body", "className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var list_group = temp__4126__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var footer = temp__4126__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25703 = output_checker25689_25699.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25703)){
var error__11906__auto___25704 = temp__4126__auto___25703;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__11906__auto___25704)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25704,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25686_25696,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699){
return (function (seq25692){
var G__25693 = cljs.core.first.call(null,seq25692);
var seq25692__$1 = cljs.core.next.call(null,seq25692);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__25693,seq25692__$1);
});})(ufv___25695,output_schema25686_25696,input_schema25687_25697,input_checker25688_25698,output_checker25689_25699))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema25686_25696,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25687_25697], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__16114__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__16114__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__16114__auto__;
})();

var component_fnk__16143__auto___25729 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema25709 = schema.core.Any;
var input_schema25710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map25708","map25708",889045969,null))], null);
var input_checker25711 = schema.core.checker.call(null,input_schema25710);
var output_checker25712 = schema.core.checker.call(null,output_schema25709);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function om_bootstrap$panel$constructor25706(G__25713){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25713], null);
var temp__4126__auto___25731 = input_checker25711.call(null,args__11905__auto___25730);
if(cljs.core.truth_(temp__4126__auto___25731)){
var error__11906__auto___25732 = temp__4126__auto___25731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor25706","constructor25706",-1304477758,null),cljs.core.pr_str.call(null,error__11906__auto___25732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25732,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25730,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map25708 = G__25713;
while(true){
if(cljs.core.map_QMARK_.call(null,map25708)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map25708)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map25708,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map25708,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t25718 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.panel.t25718 = (function (output_schema25709,constructor25706,owner,output_checker25712,input_checker25711,validate__11904__auto__,input_schema25710,G__25713,map25708,state,ufv__,meta25719){
this.output_schema25709 = output_schema25709;
this.constructor25706 = constructor25706;
this.owner = owner;
this.output_checker25712 = output_checker25712;
this.input_checker25711 = input_checker25711;
this.validate__11904__auto__ = validate__11904__auto__;
this.input_schema25710 = input_schema25710;
this.G__25713 = G__25713;
this.map25708 = map25708;
this.state = state;
this.ufv__ = ufv__;
this.meta25719 = meta25719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.panel.t25718.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t25718.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

om_bootstrap.panel.t25718.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t25718.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__25721 = om.core.get_props.call(null,self__.owner);
var map__25721__$1 = ((cljs.core.seq_QMARK_.call(null,map__25721))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
var children = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__25721,map__25721__$1,children,opts,is_collapsed_QMARK_,___$1,state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__25721,map__25721__$1,children,opts,is_collapsed_QMARK_,___$1,state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,toggle_BANG_), "href": "#"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

om_bootstrap.panel.t25718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (_25720){
var self__ = this;
var _25720__$1 = this;
return self__.meta25719;
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

om_bootstrap.panel.t25718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (_25720,meta25719__$1){
var self__ = this;
var _25720__$1 = this;
return (new om_bootstrap.panel.t25718(self__.output_schema25709,self__.constructor25706,self__.owner,self__.output_checker25712,self__.input_checker25711,self__.validate__11904__auto__,self__.input_schema25710,self__.G__25713,self__.map25708,self__.state,self__.ufv__,meta25719__$1));
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

om_bootstrap.panel.t25718.cljs$lang$type = true;

om_bootstrap.panel.t25718.cljs$lang$ctorStr = "om-bootstrap.panel/t25718";

om_bootstrap.panel.t25718.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.panel/t25718");
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

om_bootstrap.panel.__GT_t25718 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712){
return (function om_bootstrap$panel$constructor25706_$___GT_t25718(output_schema25709__$1,constructor25706__$1,owner__$1,output_checker25712__$1,input_checker25711__$1,validate__11904__auto____$1,input_schema25710__$1,G__25713__$1,map25708__$1,state__$1,ufv____$1,meta25719){
return (new om_bootstrap.panel.t25718(output_schema25709__$1,constructor25706__$1,owner__$1,output_checker25712__$1,input_checker25711__$1,validate__11904__auto____$1,input_schema25710__$1,G__25713__$1,map25708__$1,state__$1,ufv____$1,meta25719));
});})(state,owner,validate__11904__auto__,ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
;

}

return (new om_bootstrap.panel.t25718(output_schema25709,om_bootstrap$panel$constructor25706,owner,output_checker25712,input_checker25711,validate__11904__auto__,input_schema25710,G__25713,map25708,state,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25733 = output_checker25712.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25733)){
var error__11906__auto___25734 = temp__4126__auto___25733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor25706","constructor25706",-1304477758,null),cljs.core.pr_str.call(null,error__11906__auto___25734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25734,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema25709,input_schema25710,input_checker25711,output_checker25712))
,schema.core.make_fn_schema.call(null,output_schema25709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25710], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__16143__auto___25729){
return (function om_bootstrap$panel$collapsible_panel_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___25729))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___25729){
return (function (data__16144__auto__,owner25705,p__25725){
var vec__25726 = p__25725;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__25726,(0),null);
return component_fnk__16143__auto___25729.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner25705),new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner25705,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___25729))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___25729){
return (function (seq25722){
var G__25723 = cljs.core.first.call(null,seq25722);
var seq25722__$1 = cljs.core.next.call(null,seq25722);
var G__25724 = cljs.core.first.call(null,seq25722__$1);
var seq25722__$2 = cljs.core.next.call(null,seq25722__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25723,G__25724,seq25722__$2);
});})(component_fnk__16143__auto___25729))
;

om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(){
var G__25728 = arguments.length;
switch (G__25728) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__16112__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m25707){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__16112__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m25707));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=panel.js.map
// Compiled by ClojureScript 0.0-3291 {}
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
var ufv___33834 = schema.utils.use_fn_validation;
var output_schema33825_33835 = om_bootstrap.types.Component;
var input_schema33826_33836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33827_33837 = schema.core.checker.call(null,input_schema33826_33836);
var output_checker33828_33838 = schema.core.checker.call(null,output_schema33825_33835);
/**
 * Inputs: [opts :- Panel & children]
 * Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838){
return (function om_bootstrap$panel$panel(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838){
return (function (G__33829,rest33830){
var validate__16151__auto__ = ufv___33834.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33839 = cljs.core.list_STAR_.call(null,G__33829,rest33830);
var temp__4425__auto___33840 = input_checker33827_33837.call(null,args__16152__auto___33839);
if(cljs.core.truth_(temp__4425__auto___33840)){
var error__16153__auto___33841 = temp__4425__auto___33840;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__16153__auto___33841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33826_33836,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33839,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33841], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33829;
var children = rest33830;
while(true){
var vec__33833 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__33833,(0),null);
var props = cljs.core.nth.call(null,vec__33833,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var header = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join('')), "ref": "body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var list_group = temp__4425__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var footer = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33842 = output_checker33828_33838.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33842)){
var error__16153__auto___33843 = temp__4425__auto___33842;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__16153__auto___33843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33825_33835,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33843], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838){
return (function (seq33831){
var G__33832 = cljs.core.first.call(null,seq33831);
var seq33831__$1 = cljs.core.next.call(null,seq33831);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__33832,seq33831__$1);
});})(ufv___33834,output_schema33825_33835,input_schema33826_33836,input_checker33827_33837,output_checker33828_33838))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema33825_33835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33826_33836], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__22075__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22075__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__22075__auto__;
})();

var component_fnk__22104__auto___33868 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33848 = schema.core.Any;
var input_schema33849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map33847","map33847",-1295319418,null))], null);
var input_checker33850 = schema.core.checker.call(null,input_schema33849);
var output_checker33851 = schema.core.checker.call(null,output_schema33848);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function om_bootstrap$panel$constructor33845(G__33852){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33852], null);
var temp__4425__auto___33870 = input_checker33850.call(null,args__16152__auto___33869);
if(cljs.core.truth_(temp__4425__auto___33870)){
var error__16153__auto___33871 = temp__4425__auto___33870;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33845","constructor33845",268752844,null),cljs.core.pr_str.call(null,error__16153__auto___33871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33849,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33869,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33871], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map33847 = G__33852;
while(true){
if(cljs.core.map_QMARK_.call(null,map33847)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33847)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33847,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map33847,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t33857 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.panel.t33857 = (function (owner,G__33852,output_checker33851,map33847,constructor33845,input_schema33849,input_checker33850,validate__16151__auto__,output_schema33848,state,ufv__,meta33858){
this.owner = owner;
this.G__33852 = G__33852;
this.output_checker33851 = output_checker33851;
this.map33847 = map33847;
this.constructor33845 = constructor33845;
this.input_schema33849 = input_schema33849;
this.input_checker33850 = input_checker33850;
this.validate__16151__auto__ = validate__16151__auto__;
this.output_schema33848 = output_schema33848;
this.state = state;
this.ufv__ = ufv__;
this.meta33858 = meta33858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t33857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (_33859,meta33858__$1){
var self__ = this;
var _33859__$1 = this;
return (new om_bootstrap.panel.t33857(self__.owner,self__.G__33852,self__.output_checker33851,self__.map33847,self__.constructor33845,self__.input_schema33849,self__.input_checker33850,self__.validate__16151__auto__,self__.output_schema33848,self__.state,self__.ufv__,meta33858__$1));
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.t33857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (_33859){
var self__ = this;
var _33859__$1 = this;
return self__.meta33858;
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.t33857.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t33857.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.t33857.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t33857.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__33860 = om.core.get_props.call(null,self__.owner);
var map__33860__$1 = ((cljs.core.seq_QMARK_.call(null,map__33860))?cljs.core.apply.call(null,cljs.core.hash_map,map__33860):map__33860);
var opts = cljs.core.get.call(null,map__33860__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__33860,map__33860__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__33860,map__33860__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.t33857.getBasis = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"G__33852","G__33852",-1565734075,null),new cljs.core.Symbol(null,"output-checker33851","output-checker33851",-1241056026,null),new cljs.core.Symbol(null,"map33847","map33847",-1295319418,null),new cljs.core.Symbol(null,"constructor33845","constructor33845",268752844,null),new cljs.core.Symbol(null,"input-schema33849","input-schema33849",-1542621169,null),new cljs.core.Symbol(null,"input-checker33850","input-checker33850",1007887569,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"output-schema33848","output-schema33848",1597639220,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta33858","meta33858",1001927402,null)], null);
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.t33857.cljs$lang$type = true;

om_bootstrap.panel.t33857.cljs$lang$ctorStr = "om-bootstrap.panel/t33857";

om_bootstrap.panel.t33857.cljs$lang$ctorPrWriter = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.panel/t33857");
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

om_bootstrap.panel.__GT_t33857 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851){
return (function om_bootstrap$panel$constructor33845_$___GT_t33857(owner__$1,G__33852__$1,output_checker33851__$1,map33847__$1,constructor33845__$1,input_schema33849__$1,input_checker33850__$1,validate__16151__auto____$1,output_schema33848__$1,state__$1,ufv____$1,meta33858){
return (new om_bootstrap.panel.t33857(owner__$1,G__33852__$1,output_checker33851__$1,map33847__$1,constructor33845__$1,input_schema33849__$1,input_checker33850__$1,validate__16151__auto____$1,output_schema33848__$1,state__$1,ufv____$1,meta33858));
});})(state,owner,validate__16151__auto__,ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
;

}

return (new om_bootstrap.panel.t33857(owner,G__33852,output_checker33851,map33847,om_bootstrap$panel$constructor33845,input_schema33849,input_checker33850,validate__16151__auto__,output_schema33848,state,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33872 = output_checker33851.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33872)){
var error__16153__auto___33873 = temp__4425__auto___33872;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33845","constructor33845",268752844,null),cljs.core.pr_str.call(null,error__16153__auto___33873)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33848,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33873], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema33848,input_schema33849,input_checker33850,output_checker33851))
,schema.core.make_fn_schema.call(null,output_schema33848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33849], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__22104__auto___33868){
return (function om_bootstrap$panel$collapsible_panel_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___33868))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___33868){
return (function (data__22105__auto__,owner33844,p__33864){
var vec__33865 = p__33864;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__33865,(0),null);
return component_fnk__22104__auto___33868.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33844),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33844,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___33868))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___33868){
return (function (seq33861){
var G__33862 = cljs.core.first.call(null,seq33861);
var seq33861__$1 = cljs.core.next.call(null,seq33861);
var G__33863 = cljs.core.first.call(null,seq33861__$1);
var seq33861__$2 = cljs.core.next.call(null,seq33861__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33862,G__33863,seq33861__$2);
});})(component_fnk__22104__auto___33868))
;

om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(){
var G__33867 = arguments.length;
switch (G__33867) {
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

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__22073__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m33846){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__22073__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m33846));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=panel.js.map
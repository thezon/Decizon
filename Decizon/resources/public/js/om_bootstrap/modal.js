// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.modal');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
/**
 * Options for the modal.
 */
om_bootstrap.modal.Modal = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"header","header",119441134),schema.core.Any,new cljs.core.Keyword(null,"footer","footer",1606445390),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"keyboard?","keyboard?",-2034212401)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible?","visible?",2129863715)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animate?","animate?",-1559039739)),schema.core.Bool], true, false);

var component_fnk__22104__auto___31987 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema31965 = schema.core.Any;
var input_schema31966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map31964","map31964",-410853796,null))], null);
var input_checker31967 = schema.core.checker.call(null,input_schema31966);
var output_checker31968 = schema.core.checker.call(null,output_schema31965);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function om_bootstrap$modal$constructor31962(G__31969){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31969], null);
var temp__4425__auto___31989 = input_checker31967.call(null,args__16152__auto___31988);
if(cljs.core.truth_(temp__4425__auto___31989)){
var error__16153__auto___31990 = temp__4425__auto___31989;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31962","constructor31962",599050708,null),cljs.core.pr_str.call(null,error__16153__auto___31990)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31966,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31988,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31990], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map31964 = G__31969;
while(true){
if(cljs.core.map_QMARK_.call(null,map31964)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31964)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map31964,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map31964,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.modal.t31975 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.modal.t31975 = (function (G__31969,owner,input_schema31966,output_checker31968,output_schema31965,validate__16151__auto__,constructor31962,state,input_checker31967,map31964,ufv__,meta31976){
this.G__31969 = G__31969;
this.owner = owner;
this.input_schema31966 = input_schema31966;
this.output_checker31968 = output_checker31968;
this.output_schema31965 = output_schema31965;
this.validate__16151__auto__ = validate__16151__auto__;
this.constructor31962 = constructor31962;
this.state = state;
this.input_checker31967 = input_checker31967;
this.map31964 = map31964;
this.ufv__ = ufv__;
this.meta31976 = meta31976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.modal.t31975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (_31977,meta31976__$1){
var self__ = this;
var _31977__$1 = this;
return (new om_bootstrap.modal.t31975(self__.G__31969,self__.owner,self__.input_schema31966,self__.output_checker31968,self__.output_schema31965,self__.validate__16151__auto__,self__.constructor31962,self__.state,self__.input_checker31967,self__.map31964,self__.ufv__,meta31976__$1));
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (_31977){
var self__ = this;
var _31977__$1 = this;
return self__.meta31976;
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.prototype.om$core$IDisplayName$ = true;

om_bootstrap.modal.t31975.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (_){
var self__ = this;
var ___$1 = this;
return "modal*";
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.prototype.om$core$IInitState$ = true;

om_bootstrap.modal.t31975.prototype.om$core$IInitState$init_state$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.prototype.om$core$IWillReceiveProps$ = true;

om_bootstrap.modal.t31975.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (this$,next_props){
var self__ = this;
var this$__$1 = this;
var last_props = om.core.get_props.call(null,self__.owner);
var last_visible_QMARK_ = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
var next_visible_QMARK_ = cljs.core.get_in.call(null,next_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
if(cljs.core.not_EQ_.call(null,last_visible_QMARK_,next_visible_QMARK_)){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),next_visible_QMARK_);
} else {
return null;
}
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.prototype.om$core$IRender$ = true;

om_bootstrap.modal.t31975.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__31978 = om.core.get_props.call(null,self__.owner);
var map__31978__$1 = ((cljs.core.seq_QMARK_.call(null,map__31978))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978):map__31978);
var opts = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__31979 = om_bootstrap.types.separate.call(null,om_bootstrap.modal.Modal,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"modal"], null));
var bs = cljs.core.nth.call(null,vec__31979,(0),null);
var props = cljs.core.nth.call(null,vec__31979,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"fade","fade",1167694157),true,new cljs.core.Keyword(null,"in","in",-1531184865),om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687).cljs$core$IFn$_invoke$arity$1(bs))?React.DOM.button({"type": "button", "className": "close", "aria-hidden": true, "onClick": om_tools.dom.format_opts.call(null,((function (map__31978,map__31978__$1,opts,children,vec__31979,bs,props,classes,___$1,state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (___$2){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false);
});})(map__31978,map__31978__$1,opts,children,vec__31979,bs,props,classes,___$1,state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
)},"\u00D7"):null),om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-title"], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs)],null))))],null))))],null))))],null)));
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.getBasis = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__31969","G__31969",48758465,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-schema31966","input-schema31966",736869156,null),new cljs.core.Symbol(null,"output-checker31968","output-checker31968",-558811929,null),new cljs.core.Symbol(null,"output-schema31965","output-schema31965",1308771271,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"constructor31962","constructor31962",599050708,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"input-checker31967","input-checker31967",1265169396,null),new cljs.core.Symbol(null,"map31964","map31964",-410853796,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta31976","meta31976",-1990353333,null)], null);
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.t31975.cljs$lang$type = true;

om_bootstrap.modal.t31975.cljs$lang$ctorStr = "om-bootstrap.modal/t31975";

om_bootstrap.modal.t31975.cljs$lang$ctorPrWriter = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.modal/t31975");
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

om_bootstrap.modal.__GT_t31975 = ((function (state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968){
return (function om_bootstrap$modal$constructor31962_$___GT_t31975(G__31969__$1,owner__$1,input_schema31966__$1,output_checker31968__$1,output_schema31965__$1,validate__16151__auto____$1,constructor31962__$1,state__$1,input_checker31967__$1,map31964__$1,ufv____$1,meta31976){
return (new om_bootstrap.modal.t31975(G__31969__$1,owner__$1,input_schema31966__$1,output_checker31968__$1,output_schema31965__$1,validate__16151__auto____$1,constructor31962__$1,state__$1,input_checker31967__$1,map31964__$1,ufv____$1,meta31976));
});})(state,owner,validate__16151__auto__,ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
;

}

return (new om_bootstrap.modal.t31975(G__31969,owner,input_schema31966,output_checker31968,output_schema31965,validate__16151__auto__,om_bootstrap$modal$constructor31962,state,input_checker31967,map31964,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31991 = output_checker31968.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31991)){
var error__16153__auto___31992 = temp__4425__auto___31991;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31962","constructor31962",599050708,null),cljs.core.pr_str.call(null,error__16153__auto___31992)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31965,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31992], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema31965,input_schema31966,input_checker31967,output_checker31968))
,schema.core.make_fn_schema.call(null,output_schema31965,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31966], null)));
})();
/**
 * Component that renders a Modal. Manages it's own toggle state
 */
om_bootstrap.modal.modal_STAR_ = ((function (component_fnk__22104__auto___31987){
return (function om_bootstrap$modal$modal_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___31987))
;

om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___31987){
return (function (data__22105__auto__,owner31961,p__31983){
var vec__31984 = p__31983;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__31984,(0),null);
return component_fnk__22104__auto___31987.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner31961),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31961,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___31987))
;

om_bootstrap.modal.modal_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.modal.modal_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___31987){
return (function (seq31980){
var G__31981 = cljs.core.first.call(null,seq31980);
var seq31980__$1 = cljs.core.next.call(null,seq31980);
var G__31982 = cljs.core.first.call(null,seq31980__$1);
var seq31980__$2 = cljs.core.next.call(null,seq31980__$1);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__31981,G__31982,seq31980__$2);
});})(component_fnk__22104__auto___31987))
;

om_bootstrap.modal.__GT_modal_STAR_ = (function om_bootstrap$modal$__GT_modal_STAR_(){
var G__31986 = arguments.length;
switch (G__31986) {
case 1:
return om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__22073__auto__);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m31963){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__22073__auto__,m31963);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___32002 = schema.utils.use_fn_validation;
var output_schema31994_32003 = schema.core.Any;
var input_schema31995_32004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.modal.Modal,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker31996_32005 = schema.core.checker.call(null,input_schema31995_32004);
var output_checker31997_32006 = schema.core.checker.call(null,output_schema31994_32003);
/**
 * Inputs: [opts :- Modal & children]
 */
om_bootstrap.modal.modal = ((function (ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006){
return (function om_bootstrap$modal$modal(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006))
;

om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006){
return (function (G__31998,rest31999){
var validate__16151__auto__ = ufv___32002.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32007 = cljs.core.list_STAR_.call(null,G__31998,rest31999);
var temp__4425__auto___32008 = input_checker31996_32005.call(null,args__16152__auto___32007);
if(cljs.core.truth_(temp__4425__auto___32008)){
var error__16153__auto___32009 = temp__4425__auto___32008;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__16153__auto___32009)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31995_32004,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32007,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32009], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__31998;
var children = rest31999;
while(true){
return om_bootstrap.modal.__GT_modal_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32010 = output_checker31997_32006.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32010)){
var error__16153__auto___32011 = temp__4425__auto___32010;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__16153__auto___32011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31994_32003,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32011], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006))
;

om_bootstrap.modal.modal.cljs$lang$maxFixedArity = (1);

om_bootstrap.modal.modal.cljs$lang$applyTo = ((function (ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006){
return (function (seq32000){
var G__32001 = cljs.core.first.call(null,seq32000);
var seq32000__$1 = cljs.core.next.call(null,seq32000);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic(G__32001,seq32000__$1);
});})(ufv___32002,output_schema31994_32003,input_schema31995_32004,input_checker31996_32005,output_checker31997_32006))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.modal.modal),schema.core.make_fn_schema.call(null,output_schema31994_32003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31995_32004], null)));

//# sourceMappingURL=modal.js.map
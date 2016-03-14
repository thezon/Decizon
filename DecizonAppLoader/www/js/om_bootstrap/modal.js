// Compiled by ClojureScript 0.0-3211 {}
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

var component_fnk__16143__auto___23848 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23826 = schema.core.Any;
var input_schema23827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23825","map23825",-467600923,null))], null);
var input_checker23828 = schema.core.checker.call(null,input_schema23827);
var output_checker23829 = schema.core.checker.call(null,output_schema23826);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function om_bootstrap$modal$constructor23823(G__23830){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23830], null);
var temp__4126__auto___23850 = input_checker23828.call(null,args__11905__auto___23849);
if(cljs.core.truth_(temp__4126__auto___23850)){
var error__11906__auto___23851 = temp__4126__auto___23850;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23823","constructor23823",-1850386153,null),cljs.core.pr_str.call(null,error__11906__auto___23851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23851,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23849,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23827,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map23825 = G__23830;
while(true){
if(cljs.core.map_QMARK_.call(null,map23825)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23825)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23825,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map23825,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.modal.t23836 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.modal.t23836 = (function (output_checker23829,owner,map23825,validate__11904__auto__,input_schema23827,state,output_schema23826,constructor23823,input_checker23828,G__23830,ufv__,meta23837){
this.output_checker23829 = output_checker23829;
this.owner = owner;
this.map23825 = map23825;
this.validate__11904__auto__ = validate__11904__auto__;
this.input_schema23827 = input_schema23827;
this.state = state;
this.output_schema23826 = output_schema23826;
this.constructor23823 = constructor23823;
this.input_checker23828 = input_checker23828;
this.G__23830 = G__23830;
this.ufv__ = ufv__;
this.meta23837 = meta23837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.modal.t23836.prototype.om$core$IDisplayName$ = true;

om_bootstrap.modal.t23836.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (_){
var self__ = this;
var ___$1 = this;
return "modal*";
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.prototype.om$core$IRender$ = true;

om_bootstrap.modal.t23836.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23839 = om.core.get_props.call(null,self__.owner);
var map__23839__$1 = ((cljs.core.seq_QMARK_.call(null,map__23839))?cljs.core.apply.call(null,cljs.core.hash_map,map__23839):map__23839);
var children = cljs.core.get.call(null,map__23839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__23839__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__23840 = om_bootstrap.types.separate.call(null,om_bootstrap.modal.Modal,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"modal"], null));
var bs = cljs.core.nth.call(null,vec__23840,(0),null);
var props = cljs.core.nth.call(null,vec__23840,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"fade","fade",1167694157),true,new cljs.core.Keyword(null,"in","in",-1531184865),om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687).cljs$core$IFn$_invoke$arity$1(bs))?React.DOM.button({"onClick": om_tools.dom.format_opts.call(null,((function (map__23839,map__23839__$1,children,opts,vec__23840,bs,props,classes,___$1,state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (___$2){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false);
});})(map__23839,map__23839__$1,children,opts,vec__23840,bs,props,classes,___$1,state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
), "aria-hidden": true, "className": "close", "type": "button"},"\u00D7"):null),om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-title"], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs)],null))))],null))))],null))))],null)));
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.prototype.om$core$IWillReceiveProps$ = true;

om_bootstrap.modal.t23836.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
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
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.prototype.om$core$IInitState$ = true;

om_bootstrap.modal.t23836.prototype.om$core$IInitState$init_state$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (_23838){
var self__ = this;
var _23838__$1 = this;
return self__.meta23837;
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (_23838,meta23837__$1){
var self__ = this;
var _23838__$1 = this;
return (new om_bootstrap.modal.t23836(self__.output_checker23829,self__.owner,self__.map23825,self__.validate__11904__auto__,self__.input_schema23827,self__.state,self__.output_schema23826,self__.constructor23823,self__.input_checker23828,self__.G__23830,self__.ufv__,meta23837__$1));
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.t23836.cljs$lang$type = true;

om_bootstrap.modal.t23836.cljs$lang$ctorStr = "om-bootstrap.modal/t23836";

om_bootstrap.modal.t23836.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.modal/t23836");
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

om_bootstrap.modal.__GT_t23836 = ((function (state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829){
return (function om_bootstrap$modal$constructor23823_$___GT_t23836(output_checker23829__$1,owner__$1,map23825__$1,validate__11904__auto____$1,input_schema23827__$1,state__$1,output_schema23826__$1,constructor23823__$1,input_checker23828__$1,G__23830__$1,ufv____$1,meta23837){
return (new om_bootstrap.modal.t23836(output_checker23829__$1,owner__$1,map23825__$1,validate__11904__auto____$1,input_schema23827__$1,state__$1,output_schema23826__$1,constructor23823__$1,input_checker23828__$1,G__23830__$1,ufv____$1,meta23837));
});})(state,owner,validate__11904__auto__,ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
;

}

return (new om_bootstrap.modal.t23836(output_checker23829,owner,map23825,validate__11904__auto__,input_schema23827,state,output_schema23826,om_bootstrap$modal$constructor23823,input_checker23828,G__23830,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23852 = output_checker23829.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23852)){
var error__11906__auto___23853 = temp__4126__auto___23852;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23823","constructor23823",-1850386153,null),cljs.core.pr_str.call(null,error__11906__auto___23853)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23853,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23826,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema23826,input_schema23827,input_checker23828,output_checker23829))
,schema.core.make_fn_schema.call(null,output_schema23826,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23827], null)));
})();
/**
 * Component that renders a Modal. Manages it's own toggle state
 */
om_bootstrap.modal.modal_STAR_ = ((function (component_fnk__16143__auto___23848){
return (function om_bootstrap$modal$modal_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___23848))
;

om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___23848){
return (function (data__16144__auto__,owner23822,p__23844){
var vec__23845 = p__23844;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__23845,(0),null);
return component_fnk__16143__auto___23848.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner23822),new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23822,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___23848))
;

om_bootstrap.modal.modal_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.modal.modal_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___23848){
return (function (seq23841){
var G__23842 = cljs.core.first.call(null,seq23841);
var seq23841__$1 = cljs.core.next.call(null,seq23841);
var G__23843 = cljs.core.first.call(null,seq23841__$1);
var seq23841__$2 = cljs.core.next.call(null,seq23841__$1);
return om_bootstrap.modal.modal_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23842,G__23843,seq23841__$2);
});})(component_fnk__16143__auto___23848))
;

om_bootstrap.modal.__GT_modal_STAR_ = (function om_bootstrap$modal$__GT_modal_STAR_(){
var G__23847 = arguments.length;
switch (G__23847) {
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

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__16112__auto__);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m23824){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__16112__auto__,m23824);
});

om_bootstrap.modal.__GT_modal_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23863 = schema.utils.use_fn_validation;
var output_schema23855_23864 = schema.core.Any;
var input_schema23856_23865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.modal.Modal,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23857_23866 = schema.core.checker.call(null,input_schema23856_23865);
var output_checker23858_23867 = schema.core.checker.call(null,output_schema23855_23864);
/**
 * Inputs: [opts :- Modal & children]
 */
om_bootstrap.modal.modal = ((function (ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867){
return (function om_bootstrap$modal$modal(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867))
;

om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867){
return (function (G__23859,rest23860){
var validate__11904__auto__ = ufv___23863.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23868 = cljs.core.list_STAR_.call(null,G__23859,rest23860);
var temp__4126__auto___23869 = input_checker23857_23866.call(null,args__11905__auto___23868);
if(cljs.core.truth_(temp__4126__auto___23869)){
var error__11906__auto___23870 = temp__4126__auto___23869;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__11906__auto___23870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23870,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23868,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23856_23865,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__23859;
var children = rest23860;
while(true){
return om_bootstrap.modal.__GT_modal_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23871 = output_checker23858_23867.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23871)){
var error__11906__auto___23872 = temp__4126__auto___23871;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__11906__auto___23872)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23872,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23855_23864,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867))
;

om_bootstrap.modal.modal.cljs$lang$maxFixedArity = (1);

om_bootstrap.modal.modal.cljs$lang$applyTo = ((function (ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867){
return (function (seq23861){
var G__23862 = cljs.core.first.call(null,seq23861);
var seq23861__$1 = cljs.core.next.call(null,seq23861);
return om_bootstrap.modal.modal.cljs$core$IFn$_invoke$arity$variadic(G__23862,seq23861__$1);
});})(ufv___23863,output_schema23855_23864,input_schema23856_23865,input_checker23857_23866,output_checker23858_23867))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.modal.modal),schema.core.make_fn_schema.call(null,output_schema23855_23864,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23856_23865], null)));

//# sourceMappingURL=modal.js.map
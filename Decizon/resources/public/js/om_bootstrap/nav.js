// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));

var component_fnk__22104__auto___32040 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema32018 = schema.core.Any;
var input_schema32019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map32017","map32017",-94805668,null))], null);
var input_checker32020 = schema.core.checker.call(null,input_schema32019);
var output_checker32021 = schema.core.checker.call(null,output_schema32018);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function om_bootstrap$nav$constructor32015(G__32022){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32022], null);
var temp__4425__auto___32042 = input_checker32020.call(null,args__16152__auto___32041);
if(cljs.core.truth_(temp__4425__auto___32042)){
var error__16153__auto___32043 = temp__4425__auto___32042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32015","constructor32015",-578291835,null),cljs.core.pr_str.call(null,error__16153__auto___32043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32019,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32041,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32043], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map32017 = G__32022;
while(true){
if(cljs.core.map_QMARK_.call(null,map32017)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32017)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map32017,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t32028 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t32028 = (function (output_checker32021,owner,input_schema32019,constructor32015,validate__16151__auto__,input_checker32020,output_schema32018,G__32022,map32017,ufv__,meta32029){
this.output_checker32021 = output_checker32021;
this.owner = owner;
this.input_schema32019 = input_schema32019;
this.constructor32015 = constructor32015;
this.validate__16151__auto__ = validate__16151__auto__;
this.input_checker32020 = input_checker32020;
this.output_schema32018 = output_schema32018;
this.G__32022 = G__32022;
this.map32017 = map32017;
this.ufv__ = ufv__;
this.meta32029 = meta32029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t32028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (_32030,meta32029__$1){
var self__ = this;
var _32030__$1 = this;
return (new om_bootstrap.nav.t32028(self__.output_checker32021,self__.owner,self__.input_schema32019,self__.constructor32015,self__.validate__16151__auto__,self__.input_checker32020,self__.output_schema32018,self__.G__32022,self__.map32017,self__.ufv__,meta32029__$1));
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.t32028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (_32030){
var self__ = this;
var _32030__$1 = this;
return self__.meta32029;
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.t32028.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t32028.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.t32028.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t32028.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__32031 = om.core.get_props.call(null,self__.owner);
var map__32031__$1 = ((cljs.core.seq_QMARK_.call(null,map__32031))?cljs.core.apply.call(null,cljs.core.hash_map,map__32031):map__32031);
var opts = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__32032 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__32032,(0),null);
var props = cljs.core.nth.call(null,vec__32032,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__32031,map__32031__$1,opts,children,vec__32032,bs,props,classes,___$1,owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__32031,map__32031__$1,opts,children,vec__32032,bs,props,classes,___$1,owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.t32028.getBasis = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker32021","output-checker32021",600285955,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-schema32019","input-schema32019",583196580,null),new cljs.core.Symbol(null,"constructor32015","constructor32015",-578291835,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"input-checker32020","input-checker32020",-829441326,null),new cljs.core.Symbol(null,"output-schema32018","output-schema32018",8375001,null),new cljs.core.Symbol(null,"G__32022","G__32022",479962778,null),new cljs.core.Symbol(null,"map32017","map32017",-94805668,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta32029","meta32029",-308213290,null)], null);
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.t32028.cljs$lang$type = true;

om_bootstrap.nav.t32028.cljs$lang$ctorStr = "om-bootstrap.nav/t32028";

om_bootstrap.nav.t32028.cljs$lang$ctorPrWriter = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.nav/t32028");
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

om_bootstrap.nav.__GT_t32028 = ((function (owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021){
return (function om_bootstrap$nav$constructor32015_$___GT_t32028(output_checker32021__$1,owner__$1,input_schema32019__$1,constructor32015__$1,validate__16151__auto____$1,input_checker32020__$1,output_schema32018__$1,G__32022__$1,map32017__$1,ufv____$1,meta32029){
return (new om_bootstrap.nav.t32028(output_checker32021__$1,owner__$1,input_schema32019__$1,constructor32015__$1,validate__16151__auto____$1,input_checker32020__$1,output_schema32018__$1,G__32022__$1,map32017__$1,ufv____$1,meta32029));
});})(owner,validate__16151__auto__,ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
;

}

return (new om_bootstrap.nav.t32028(output_checker32021,owner,input_schema32019,om_bootstrap$nav$constructor32015,validate__16151__auto__,input_checker32020,output_schema32018,G__32022,map32017,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32044 = output_checker32021.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32044)){
var error__16153__auto___32045 = temp__4425__auto___32044;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32015","constructor32015",-578291835,null),cljs.core.pr_str.call(null,error__16153__auto___32045)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32018,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32045], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema32018,input_schema32019,input_checker32020,output_checker32021))
,schema.core.make_fn_schema.call(null,output_schema32018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32019], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__22104__auto___32040){
return (function om_bootstrap$nav$nav_item_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___32040))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___32040){
return (function (data__22105__auto__,owner32014,p__32036){
var vec__32037 = p__32036;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__32037,(0),null);
return component_fnk__22104__auto___32040.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32014,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___32040))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___32040){
return (function (seq32033){
var G__32034 = cljs.core.first.call(null,seq32033);
var seq32033__$1 = cljs.core.next.call(null,seq32033);
var G__32035 = cljs.core.first.call(null,seq32033__$1);
var seq32033__$2 = cljs.core.next.call(null,seq32033__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32034,G__32035,seq32033__$2);
});})(component_fnk__22104__auto___32040))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(){
var G__32039 = arguments.length;
switch (G__32039) {
case 1:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__22073__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m32016){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__22073__auto__,m32016);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___32055 = schema.utils.use_fn_validation;
var output_schema32047_32056 = om_bootstrap.types.Component;
var input_schema32048_32057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker32049_32058 = schema.core.checker.call(null,input_schema32048_32057);
var output_checker32050_32059 = schema.core.checker.call(null,output_schema32047_32056);
/**
 * Inputs: [opts :- NavItem & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059){
return (function om_bootstrap$nav$nav_item(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059){
return (function (G__32051,rest32052){
var validate__16151__auto__ = ufv___32055.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32060 = cljs.core.list_STAR_.call(null,G__32051,rest32052);
var temp__4425__auto___32061 = input_checker32049_32058.call(null,args__16152__auto___32060);
if(cljs.core.truth_(temp__4425__auto___32061)){
var error__16153__auto___32062 = temp__4425__auto___32061;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__16153__auto___32062)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32048_32057,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32060,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32062], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__32051;
var children = rest32052;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32063 = output_checker32050_32059.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32063)){
var error__16153__auto___32064 = temp__4425__auto___32063;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__16153__auto___32064)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32047_32056,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32064], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059){
return (function (seq32053){
var G__32054 = cljs.core.first.call(null,seq32053);
var seq32053__$1 = cljs.core.next.call(null,seq32053);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__32054,seq32053__$1);
});})(ufv___32055,output_schema32047_32056,input_schema32048_32057,input_checker32049_32058,output_checker32050_32059))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema32047_32056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32048_32057], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___32071 = schema.utils.use_fn_validation;
var output_schema32065_32072 = schema.core.Bool;
var input_schema32066_32073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker32067_32074 = schema.core.checker.call(null,input_schema32066_32073);
var output_checker32068_32075 = schema.core.checker.call(null,output_schema32065_32072);
/**
 * Inputs: [child-props opts]
 * Returns: s/Bool
 * 
 * Accepts a NavItem's child props and the current options provided to
 * the Nav bar; returns true if the child component should be active,
 * false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___32071,output_schema32065_32072,input_schema32066_32073,input_checker32067_32074,output_checker32068_32075){
return (function om_bootstrap$nav$child_active_QMARK_(G__32069,G__32070){
var validate__16151__auto__ = ufv___32071.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32069,G__32070], null);
var temp__4425__auto___32077 = input_checker32067_32074.call(null,args__16152__auto___32076);
if(cljs.core.truth_(temp__4425__auto___32077)){
var error__16153__auto___32078 = temp__4425__auto___32077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__16153__auto___32078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32066_32073,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32076,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32078], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var child_props = G__32069;
var opts = G__32070;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__11348__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32079 = output_checker32068_32075.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32079)){
var error__16153__auto___32080 = temp__4425__auto___32079;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__16153__auto___32080)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32065_32072,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32080], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32071,output_schema32065_32072,input_schema32066_32073,input_checker32067_32074,output_checker32068_32075))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema32065_32072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32066_32073], null)));
var ufv___32086 = schema.utils.use_fn_validation;
var output_schema32081_32087 = schema.core.Any;
var input_schema32082_32088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker32083_32089 = schema.core.checker.call(null,input_schema32082_32088);
var output_checker32084_32090 = schema.core.checker.call(null,output_schema32081_32087);
/**
 * Inputs: [opts]
 * 
 * Takes the options supplied to the top level nav and returns a
 * function that will CLONE the inner nav items, transferring all
 * relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090){
return (function om_bootstrap$nav$clone_nav_item(G__32085){
var validate__16151__auto__ = ufv___32086.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32085], null);
var temp__4425__auto___32092 = input_checker32083_32089.call(null,args__16152__auto___32091);
if(cljs.core.truth_(temp__4425__auto___32092)){
var error__16153__auto___32093 = temp__4425__auto___32092;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__16153__auto___32093)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32082_32088,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32091,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32093], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__32085;
while(true){
var prop_fn = ((function (validate__16151__auto__,ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__16151__auto__,ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090))
;
return ((function (validate__16151__auto__,ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__16151__auto__,ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090))
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32094 = output_checker32084_32090.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32094)){
var error__16153__auto___32095 = temp__4425__auto___32094;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__16153__auto___32095)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32081_32087,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32095], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32086,output_schema32081_32087,input_schema32082_32088,input_checker32083_32089,output_checker32084_32090))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema32081_32087,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32082_32088], null)));

var component_fnk__22104__auto___32122 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema32100 = schema.core.Any;
var input_schema32101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map32099","map32099",-934448712,null))], null);
var input_checker32102 = schema.core.checker.call(null,input_schema32101);
var output_checker32103 = schema.core.checker.call(null,output_schema32100);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function om_bootstrap$nav$constructor32097(G__32104){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32104], null);
var temp__4425__auto___32124 = input_checker32102.call(null,args__16152__auto___32123);
if(cljs.core.truth_(temp__4425__auto___32124)){
var error__16153__auto___32125 = temp__4425__auto___32124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32097","constructor32097",940779184,null),cljs.core.pr_str.call(null,error__16153__auto___32125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32101,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32123,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32125], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map32099 = G__32104;
while(true){
if(cljs.core.map_QMARK_.call(null,map32099)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32099)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map32099,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t32110 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t32110 = (function (owner,G__32104,output_schema32100,constructor32097,validate__16151__auto__,map32099,input_schema32101,input_checker32102,output_checker32103,ufv__,meta32111){
this.owner = owner;
this.G__32104 = G__32104;
this.output_schema32100 = output_schema32100;
this.constructor32097 = constructor32097;
this.validate__16151__auto__ = validate__16151__auto__;
this.map32099 = map32099;
this.input_schema32101 = input_schema32101;
this.input_checker32102 = input_checker32102;
this.output_checker32103 = output_checker32103;
this.ufv__ = ufv__;
this.meta32111 = meta32111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t32110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (_32112,meta32111__$1){
var self__ = this;
var _32112__$1 = this;
return (new om_bootstrap.nav.t32110(self__.owner,self__.G__32104,self__.output_schema32100,self__.constructor32097,self__.validate__16151__auto__,self__.map32099,self__.input_schema32101,self__.input_checker32102,self__.output_checker32103,self__.ufv__,meta32111__$1));
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.t32110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (_32112){
var self__ = this;
var _32112__$1 = this;
return self__.meta32111;
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.t32110.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t32110.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.t32110.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t32110.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__32113 = om.core.get_props.call(null,self__.owner);
var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);
var opts = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__32114 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__32114,(0),null);
var props = cljs.core.nth.call(null,vec__32114,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
if(cljs.core.truth_((function (){var and__11336__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__11336__auto__;
}
})())){
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.t32110.getBasis = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"G__32104","G__32104",-2142696850,null),new cljs.core.Symbol(null,"output-schema32100","output-schema32100",356057104,null),new cljs.core.Symbol(null,"constructor32097","constructor32097",940779184,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"map32099","map32099",-934448712,null),new cljs.core.Symbol(null,"input-schema32101","input-schema32101",656334137,null),new cljs.core.Symbol(null,"input-checker32102","input-checker32102",1764818618,null),new cljs.core.Symbol(null,"output-checker32103","output-checker32103",-1581060965,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta32111","meta32111",2017421518,null)], null);
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.t32110.cljs$lang$type = true;

om_bootstrap.nav.t32110.cljs$lang$ctorStr = "om-bootstrap.nav/t32110";

om_bootstrap.nav.t32110.cljs$lang$ctorPrWriter = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.nav/t32110");
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

om_bootstrap.nav.__GT_t32110 = ((function (owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103){
return (function om_bootstrap$nav$constructor32097_$___GT_t32110(owner__$1,G__32104__$1,output_schema32100__$1,constructor32097__$1,validate__16151__auto____$1,map32099__$1,input_schema32101__$1,input_checker32102__$1,output_checker32103__$1,ufv____$1,meta32111){
return (new om_bootstrap.nav.t32110(owner__$1,G__32104__$1,output_schema32100__$1,constructor32097__$1,validate__16151__auto____$1,map32099__$1,input_schema32101__$1,input_checker32102__$1,output_checker32103__$1,ufv____$1,meta32111));
});})(owner,validate__16151__auto__,ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
;

}

return (new om_bootstrap.nav.t32110(owner,G__32104,output_schema32100,om_bootstrap$nav$constructor32097,validate__16151__auto__,map32099,input_schema32101,input_checker32102,output_checker32103,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32126 = output_checker32103.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32126)){
var error__16153__auto___32127 = temp__4425__auto___32126;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32097","constructor32097",940779184,null),cljs.core.pr_str.call(null,error__16153__auto___32127)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32100,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32127], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema32100,input_schema32101,input_checker32102,output_checker32103))
,schema.core.make_fn_schema.call(null,output_schema32100,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32101], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__22104__auto___32122){
return (function om_bootstrap$nav$nav_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___32122))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___32122){
return (function (data__22105__auto__,owner32096,p__32118){
var vec__32119 = p__32118;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__32119,(0),null);
return component_fnk__22104__auto___32122.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32096,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___32122))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___32122){
return (function (seq32115){
var G__32116 = cljs.core.first.call(null,seq32115);
var seq32115__$1 = cljs.core.next.call(null,seq32115);
var G__32117 = cljs.core.first.call(null,seq32115__$1);
var seq32115__$2 = cljs.core.next.call(null,seq32115__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32116,G__32117,seq32115__$2);
});})(component_fnk__22104__auto___32122))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(){
var G__32121 = arguments.length;
switch (G__32121) {
case 1:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__22073__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m32098){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__22073__auto__,m32098);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___32137 = schema.utils.use_fn_validation;
var output_schema32129_32138 = om_bootstrap.types.Component;
var input_schema32130_32139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker32131_32140 = schema.core.checker.call(null,input_schema32130_32139);
var output_checker32132_32141 = schema.core.checker.call(null,output_schema32129_32138);
/**
 * Inputs: [opts :- Nav & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141){
return (function om_bootstrap$nav$nav(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141){
return (function (G__32133,rest32134){
var validate__16151__auto__ = ufv___32137.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32142 = cljs.core.list_STAR_.call(null,G__32133,rest32134);
var temp__4425__auto___32143 = input_checker32131_32140.call(null,args__16152__auto___32142);
if(cljs.core.truth_(temp__4425__auto___32143)){
var error__16153__auto___32144 = temp__4425__auto___32143;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__16153__auto___32144)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32130_32139,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32142,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32144], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__32133;
var children = rest32134;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32145 = output_checker32132_32141.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32145)){
var error__16153__auto___32146 = temp__4425__auto___32145;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__16153__auto___32146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32129_32138,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32146], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141){
return (function (seq32135){
var G__32136 = cljs.core.first.call(null,seq32135);
var seq32135__$1 = cljs.core.next.call(null,seq32135);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__32136,seq32135__$1);
});})(ufv___32137,output_schema32129_32138,input_schema32130_32139,input_checker32131_32140,output_checker32132_32141))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema32129_32138,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32130_32139], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4425__auto___32147 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___32147)){
var f_32148 = temp__4425__auto___32147;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_32148.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"className": "navbar-toggle", "type": "button", "onClick": om_tools.dom.format_opts.call(null,handle_toggle)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__11348__auto__ = tb;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "sr-only", "key": (0)},"Toggle navigation"),React.DOM.span({"className": "icon-bar", "key": (1)}),React.DOM.span({"className": "icon-bar", "key": (2)}),React.DOM.span({"className": "icon-bar", "key": (3)})], null);
}
})()],null))));
});
var ufv___32154 = schema.utils.use_fn_validation;
var output_schema32149_32155 = schema.core.Bool;
var input_schema32150_32156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"bs","bs",-906042210,null))], null);
var input_checker32151_32157 = schema.core.checker.call(null,input_schema32150_32156);
var output_checker32152_32158 = schema.core.checker.call(null,output_schema32149_32155);
/**
 * Inputs: [bs]
 * Returns: s/Bool
 * 
 * Returns true if any of the necessary properties are in place to
 * render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___32154,output_schema32149_32155,input_schema32150_32156,input_checker32151_32157,output_checker32152_32158){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__32153){
var validate__16151__auto__ = ufv___32154.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32153], null);
var temp__4425__auto___32160 = input_checker32151_32157.call(null,args__16152__auto___32159);
if(cljs.core.truth_(temp__4425__auto___32160)){
var error__16153__auto___32161 = temp__4425__auto___32160;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__16153__auto___32161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32150_32156,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32159,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32161], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var bs = G__32153;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__11348__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32162 = output_checker32152_32158.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32162)){
var error__16153__auto___32163 = temp__4425__auto___32162;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__16153__auto___32163)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32149_32155,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32163], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32154,output_schema32149_32155,input_schema32150_32156,input_checker32151_32157,output_checker32152_32158))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema32149_32155,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32150_32156], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__11348__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__11336__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__11336__auto__)){
var or__11348__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__11336__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__22104__auto___32190 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema32170 = schema.core.Any;
var input_schema32171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map32168","map32168",-1558452261,null))], null);
var input_checker32172 = schema.core.checker.call(null,input_schema32171);
var output_checker32173 = schema.core.checker.call(null,output_schema32170);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function om_bootstrap$nav$constructor32166(G__32174){
var validate__16151__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32174], null);
var temp__4425__auto___32192 = input_checker32172.call(null,args__16152__auto___32191);
if(cljs.core.truth_(temp__4425__auto___32192)){
var error__16153__auto___32193 = temp__4425__auto___32192;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32166","constructor32166",-1438636549,null),cljs.core.pr_str.call(null,error__16153__auto___32193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32171,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32191,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32193], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var map32168 = G__32174;
while(true){
if(cljs.core.map_QMARK_.call(null,map32168)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32168)));
}

var map32169 = plumbing.fnk.schema.safe_get.call(null,map32168,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map32169,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map32169,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map32168,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t32179 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t32179 = (function (input_checker32172,owner,map32169,children,input_schema32171,output_schema32170,validate__16151__auto__,output_checker32173,G__32174,constructor32166,map32168,opts,ufv__,meta32180){
this.input_checker32172 = input_checker32172;
this.owner = owner;
this.map32169 = map32169;
this.children = children;
this.input_schema32171 = input_schema32171;
this.output_schema32170 = output_schema32170;
this.validate__16151__auto__ = validate__16151__auto__;
this.output_checker32173 = output_checker32173;
this.G__32174 = G__32174;
this.constructor32166 = constructor32166;
this.map32168 = map32168;
this.opts = opts;
this.ufv__ = ufv__;
this.meta32180 = meta32180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t32179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_32181,meta32180__$1){
var self__ = this;
var _32181__$1 = this;
return (new om_bootstrap.nav.t32179(self__.input_checker32172,self__.owner,self__.map32169,self__.children,self__.input_schema32171,self__.output_schema32170,self__.validate__16151__auto__,self__.output_checker32173,self__.G__32174,self__.constructor32166,self__.map32168,self__.opts,self__.ufv__,meta32180__$1));
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_32181){
var self__ = this;
var _32181__$1 = this;
return self__.meta32180;
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t32179.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t32179.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t32179.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t32179.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__32182 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function() { 
var G__32194__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__32194 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__32195__i = 0, G__32195__a = new Array(arguments.length -  1);
while (G__32195__i < G__32195__a.length) {G__32195__a[G__32195__i] = arguments[G__32195__i + 1]; ++G__32195__i;}
  c = new cljs.core.IndexedSeq(G__32195__a,0);
} 
return G__32194__delegate.call(this,opts__$1,c);};
G__32194.cljs$lang$maxFixedArity = 1;
G__32194.cljs$lang$applyTo = (function (arglist__32196){
var opts__$1 = cljs.core.first(arglist__32196);
var c = cljs.core.rest(arglist__32196);
return G__32194__delegate(opts__$1,c);
});
G__32194.cljs$core$IFn$_invoke$arity$variadic = G__32194__delegate;
return G__32194;
})()
;})(___$1,owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
], null));
var bs = cljs.core.nth.call(null,vec__32182,(0),null);
var props = cljs.core.nth.call(null,vec__32182,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__32182,bs,props,classes,___$1,owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (p1__32164_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__32164_SHARP_,bs);
});})(vec__32182,bs,props,classes,___$1,owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
,self__.children)],null)))));
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.getBasis = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker32172","input-checker32172",2125993730,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map32169","map32169",-1402578842,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"input-schema32171","input-schema32171",1846971658,null),new cljs.core.Symbol(null,"output-schema32170","output-schema32170",-933118002,null),new cljs.core.Symbol(null,"validate__16151__auto__","validate__16151__auto__",-1191889263,null),new cljs.core.Symbol(null,"output-checker32173","output-checker32173",-1233239310,null),new cljs.core.Symbol(null,"G__32174","G__32174",1208728979,null),new cljs.core.Symbol(null,"constructor32166","constructor32166",-1438636549,null),new cljs.core.Symbol(null,"map32168","map32168",-1558452261,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta32180","meta32180",-1483584764,null)], null);
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.t32179.cljs$lang$type = true;

om_bootstrap.nav.t32179.cljs$lang$ctorStr = "om-bootstrap.nav/t32179";

om_bootstrap.nav.t32179.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"om-bootstrap.nav/t32179");
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

om_bootstrap.nav.__GT_t32179 = ((function (owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173){
return (function om_bootstrap$nav$constructor32166_$___GT_t32179(input_checker32172__$1,owner__$1,map32169__$1,children__$1,input_schema32171__$1,output_schema32170__$1,validate__16151__auto____$1,output_checker32173__$1,G__32174__$1,constructor32166__$1,map32168__$1,opts__$1,ufv____$1,meta32180){
return (new om_bootstrap.nav.t32179(input_checker32172__$1,owner__$1,map32169__$1,children__$1,input_schema32171__$1,output_schema32170__$1,validate__16151__auto____$1,output_checker32173__$1,G__32174__$1,constructor32166__$1,map32168__$1,opts__$1,ufv____$1,meta32180));
});})(owner,children,opts,map32169,validate__16151__auto__,ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
;

}

return (new om_bootstrap.nav.t32179(input_checker32172,owner,map32169,children,input_schema32171,output_schema32170,validate__16151__auto__,output_checker32173,G__32174,om_bootstrap$nav$constructor32166,map32168,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32197 = output_checker32173.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32197)){
var error__16153__auto___32198 = temp__4425__auto___32197;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32166","constructor32166",-1438636549,null),cljs.core.pr_str.call(null,error__16153__auto___32198)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32170,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32198], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv__,output_schema32170,input_schema32171,input_checker32172,output_checker32173))
,schema.core.make_fn_schema.call(null,output_schema32170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32171], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__22104__auto___32190){
return (function om_bootstrap$nav$navbar_STAR_(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});})(component_fnk__22104__auto___32190))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22104__auto___32190){
return (function (data__22105__auto__,owner32165,p__32186){
var vec__32187 = p__32186;
var opts__22106__auto__ = cljs.core.nth.call(null,vec__32187,(0),null);
return component_fnk__22104__auto___32190.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22106__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32165,new cljs.core.Keyword(null,"data","data",-232669377),data__22105__auto__], null));
});})(component_fnk__22104__auto___32190))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__22104__auto___32190){
return (function (seq32183){
var G__32184 = cljs.core.first.call(null,seq32183);
var seq32183__$1 = cljs.core.next.call(null,seq32183);
var G__32185 = cljs.core.first.call(null,seq32183__$1);
var seq32183__$2 = cljs.core.next.call(null,seq32183__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32184,G__32185,seq32183__$2);
});})(component_fnk__22104__auto___32190))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(){
var G__32189 = arguments.length;
switch (G__32189) {
case 1:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22073__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__22073__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22073__auto__,m32167){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__22073__auto__,m32167);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___32208 = schema.utils.use_fn_validation;
var output_schema32200_32209 = schema.core.Any;
var input_schema32201_32210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker32202_32211 = schema.core.checker.call(null,input_schema32201_32210);
var output_checker32203_32212 = schema.core.checker.call(null,output_schema32200_32209);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212){
return (function om_bootstrap$nav$navbar(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212){
return (function (G__32204,rest32205){
var validate__16151__auto__ = ufv___32208.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___32213 = cljs.core.list_STAR_.call(null,G__32204,rest32205);
var temp__4425__auto___32214 = input_checker32202_32211.call(null,args__16152__auto___32213);
if(cljs.core.truth_(temp__4425__auto___32214)){
var error__16153__auto___32215 = temp__4425__auto___32214;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__16153__auto___32215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32201_32210,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___32213,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32215], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__32204;
var children = rest32205;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___32216 = output_checker32203_32212.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___32216)){
var error__16153__auto___32217 = temp__4425__auto___32216;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__16153__auto___32217)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32200_32209,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___32217], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212){
return (function (seq32206){
var G__32207 = cljs.core.first.call(null,seq32206);
var seq32206__$1 = cljs.core.next.call(null,seq32206);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__32207,seq32206__$1);
});})(ufv___32208,output_schema32200_32209,input_schema32201_32210,input_checker32202_32211,output_checker32203_32212))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema32200_32209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32201_32210], null)));

//# sourceMappingURL=nav.js.map
// Compiled by ClojureScript 0.0-3211 {}
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

var component_fnk__16143__auto___23901 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23879 = schema.core.Any;
var input_schema23880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23878","map23878",-1305094793,null))], null);
var input_checker23881 = schema.core.checker.call(null,input_schema23880);
var output_checker23882 = schema.core.checker.call(null,output_schema23879);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function om_bootstrap$nav$constructor23876(G__23883){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23883], null);
var temp__4126__auto___23903 = input_checker23881.call(null,args__11905__auto___23902);
if(cljs.core.truth_(temp__4126__auto___23903)){
var error__11906__auto___23904 = temp__4126__auto___23903;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23876","constructor23876",270321781,null),cljs.core.pr_str.call(null,error__11906__auto___23904)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23904,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23902,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23880,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map23878 = G__23883;
while(true){
if(cljs.core.map_QMARK_.call(null,map23878)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23878)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23878,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t23889 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t23889 = (function (owner,validate__11904__auto__,output_schema23879,input_checker23881,output_checker23882,constructor23876,input_schema23880,G__23883,map23878,ufv__,meta23890){
this.owner = owner;
this.validate__11904__auto__ = validate__11904__auto__;
this.output_schema23879 = output_schema23879;
this.input_checker23881 = input_checker23881;
this.output_checker23882 = output_checker23882;
this.constructor23876 = constructor23876;
this.input_schema23880 = input_schema23880;
this.G__23883 = G__23883;
this.map23878 = map23878;
this.ufv__ = ufv__;
this.meta23890 = meta23890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t23889.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t23889.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

om_bootstrap.nav.t23889.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t23889.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23892 = om.core.get_props.call(null,self__.owner);
var map__23892__$1 = ((cljs.core.seq_QMARK_.call(null,map__23892))?cljs.core.apply.call(null,cljs.core.hash_map,map__23892):map__23892);
var children = cljs.core.get.call(null,map__23892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__23892__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__23893 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__23893,(0),null);
var props = cljs.core.nth.call(null,vec__23893,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__23892,map__23892__$1,children,opts,vec__23893,bs,props,classes,___$1,owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__23892,map__23892__$1,children,opts,vec__23893,bs,props,classes,___$1,owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

om_bootstrap.nav.t23889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (_23891){
var self__ = this;
var _23891__$1 = this;
return self__.meta23890;
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

om_bootstrap.nav.t23889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (_23891,meta23890__$1){
var self__ = this;
var _23891__$1 = this;
return (new om_bootstrap.nav.t23889(self__.owner,self__.validate__11904__auto__,self__.output_schema23879,self__.input_checker23881,self__.output_checker23882,self__.constructor23876,self__.input_schema23880,self__.G__23883,self__.map23878,self__.ufv__,meta23890__$1));
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

om_bootstrap.nav.t23889.cljs$lang$type = true;

om_bootstrap.nav.t23889.cljs$lang$ctorStr = "om-bootstrap.nav/t23889";

om_bootstrap.nav.t23889.cljs$lang$ctorPrWriter = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.nav/t23889");
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

om_bootstrap.nav.__GT_t23889 = ((function (owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882){
return (function om_bootstrap$nav$constructor23876_$___GT_t23889(owner__$1,validate__11904__auto____$1,output_schema23879__$1,input_checker23881__$1,output_checker23882__$1,constructor23876__$1,input_schema23880__$1,G__23883__$1,map23878__$1,ufv____$1,meta23890){
return (new om_bootstrap.nav.t23889(owner__$1,validate__11904__auto____$1,output_schema23879__$1,input_checker23881__$1,output_checker23882__$1,constructor23876__$1,input_schema23880__$1,G__23883__$1,map23878__$1,ufv____$1,meta23890));
});})(owner,validate__11904__auto__,ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
;

}

return (new om_bootstrap.nav.t23889(owner,validate__11904__auto__,output_schema23879,input_checker23881,output_checker23882,om_bootstrap$nav$constructor23876,input_schema23880,G__23883,map23878,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23905 = output_checker23882.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23905)){
var error__11906__auto___23906 = temp__4126__auto___23905;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23876","constructor23876",270321781,null),cljs.core.pr_str.call(null,error__11906__auto___23906)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23906,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23879,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema23879,input_schema23880,input_checker23881,output_checker23882))
,schema.core.make_fn_schema.call(null,output_schema23879,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23880], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__16143__auto___23901){
return (function om_bootstrap$nav$nav_item_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___23901))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___23901){
return (function (data__16144__auto__,owner23875,p__23897){
var vec__23898 = p__23897;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__23898,(0),null);
return component_fnk__16143__auto___23901.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23875,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___23901))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___23901){
return (function (seq23894){
var G__23895 = cljs.core.first.call(null,seq23894);
var seq23894__$1 = cljs.core.next.call(null,seq23894);
var G__23896 = cljs.core.first.call(null,seq23894__$1);
var seq23894__$2 = cljs.core.next.call(null,seq23894__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23895,G__23896,seq23894__$2);
});})(component_fnk__16143__auto___23901))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(){
var G__23900 = arguments.length;
switch (G__23900) {
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

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__16112__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m23877){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__16112__auto__,m23877);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23916 = schema.utils.use_fn_validation;
var output_schema23908_23917 = om_bootstrap.types.Component;
var input_schema23909_23918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23910_23919 = schema.core.checker.call(null,input_schema23909_23918);
var output_checker23911_23920 = schema.core.checker.call(null,output_schema23908_23917);
/**
 * Inputs: [opts :- NavItem & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920){
return (function om_bootstrap$nav$nav_item(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920){
return (function (G__23912,rest23913){
var validate__11904__auto__ = ufv___23916.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23921 = cljs.core.list_STAR_.call(null,G__23912,rest23913);
var temp__4126__auto___23922 = input_checker23910_23919.call(null,args__11905__auto___23921);
if(cljs.core.truth_(temp__4126__auto___23922)){
var error__11906__auto___23923 = temp__4126__auto___23922;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11906__auto___23923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23923,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23921,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23909_23918,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__23912;
var children = rest23913;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23924 = output_checker23911_23920.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23924)){
var error__11906__auto___23925 = temp__4126__auto___23924;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11906__auto___23925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23925,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23908_23917,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920){
return (function (seq23914){
var G__23915 = cljs.core.first.call(null,seq23914);
var seq23914__$1 = cljs.core.next.call(null,seq23914);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__23915,seq23914__$1);
});})(ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema23908_23917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23909_23918], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___23932 = schema.utils.use_fn_validation;
var output_schema23926_23933 = schema.core.Bool;
var input_schema23927_23934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker23928_23935 = schema.core.checker.call(null,input_schema23927_23934);
var output_checker23929_23936 = schema.core.checker.call(null,output_schema23926_23933);
/**
 * Inputs: [child-props opts]
 * Returns: s/Bool
 * 
 * Accepts a NavItem's child props and the current options provided to
 * the Nav bar; returns true if the child component should be active,
 * false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___23932,output_schema23926_23933,input_schema23927_23934,input_checker23928_23935,output_checker23929_23936){
return (function om_bootstrap$nav$child_active_QMARK_(G__23930,G__23931){
var validate__11904__auto__ = ufv___23932.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23930,G__23931], null);
var temp__4126__auto___23938 = input_checker23928_23935.call(null,args__11905__auto___23937);
if(cljs.core.truth_(temp__4126__auto___23938)){
var error__11906__auto___23939 = temp__4126__auto___23938;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11906__auto___23939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23939,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23937,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23927_23934,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var child_props = G__23930;
var opts = G__23931;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__10412__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto__)){
var ak = temp__4126__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
var temp__4126__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4126__auto__)){
var ak = temp__4126__auto__;
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
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23940 = output_checker23929_23936.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23940)){
var error__11906__auto___23941 = temp__4126__auto___23940;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11906__auto___23941)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23941,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23926_23933,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23932,output_schema23926_23933,input_schema23927_23934,input_checker23928_23935,output_checker23929_23936))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema23926_23933,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23927_23934], null)));
var ufv___23947 = schema.utils.use_fn_validation;
var output_schema23942_23948 = schema.core.Any;
var input_schema23943_23949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker23944_23950 = schema.core.checker.call(null,input_schema23943_23949);
var output_checker23945_23951 = schema.core.checker.call(null,output_schema23942_23948);
/**
 * Inputs: [opts]
 * 
 * Takes the options supplied to the top level nav and returns a
 * function that will CLONE the inner nav items, transferring all
 * relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951){
return (function om_bootstrap$nav$clone_nav_item(G__23946){
var validate__11904__auto__ = ufv___23947.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23946], null);
var temp__4126__auto___23953 = input_checker23944_23950.call(null,args__11905__auto___23952);
if(cljs.core.truth_(temp__4126__auto___23953)){
var error__11906__auto___23954 = temp__4126__auto___23953;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11906__auto___23954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23954,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23952,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23943_23949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__23946;
while(true){
var prop_fn = ((function (validate__11904__auto__,ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__11904__auto__,ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951))
;
return ((function (validate__11904__auto__,ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__11904__auto__,ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951))
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23955 = output_checker23945_23951.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23955)){
var error__11906__auto___23956 = temp__4126__auto___23955;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11906__auto___23956)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23956,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23942_23948,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23947,output_schema23942_23948,input_schema23943_23949,input_checker23944_23950,output_checker23945_23951))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema23942_23948,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23943_23949], null)));

var component_fnk__16143__auto___23983 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23961 = schema.core.Any;
var input_schema23962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23960","map23960",1039403716,null))], null);
var input_checker23963 = schema.core.checker.call(null,input_schema23962);
var output_checker23964 = schema.core.checker.call(null,output_schema23961);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function om_bootstrap$nav$constructor23958(G__23965){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23965], null);
var temp__4126__auto___23985 = input_checker23963.call(null,args__11905__auto___23984);
if(cljs.core.truth_(temp__4126__auto___23985)){
var error__11906__auto___23986 = temp__4126__auto___23985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23958","constructor23958",443359747,null),cljs.core.pr_str.call(null,error__11906__auto___23986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23986,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23984,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23962,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map23960 = G__23965;
while(true){
if(cljs.core.map_QMARK_.call(null,map23960)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23960)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23960,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t23971 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t23971 = (function (G__23965,constructor23958,owner,map23960,output_schema23961,validate__11904__auto__,input_schema23962,output_checker23964,input_checker23963,ufv__,meta23972){
this.G__23965 = G__23965;
this.constructor23958 = constructor23958;
this.owner = owner;
this.map23960 = map23960;
this.output_schema23961 = output_schema23961;
this.validate__11904__auto__ = validate__11904__auto__;
this.input_schema23962 = input_schema23962;
this.output_checker23964 = output_checker23964;
this.input_checker23963 = input_checker23963;
this.ufv__ = ufv__;
this.meta23972 = meta23972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t23971.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t23971.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

om_bootstrap.nav.t23971.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t23971.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23974 = om.core.get_props.call(null,self__.owner);
var map__23974__$1 = ((cljs.core.seq_QMARK_.call(null,map__23974))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var children = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__23975 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__23975,(0),null);
var props = cljs.core.nth.call(null,vec__23975,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
if(cljs.core.truth_((function (){var and__10400__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__10400__auto__;
}
})())){
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

om_bootstrap.nav.t23971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function (_23973){
var self__ = this;
var _23973__$1 = this;
return self__.meta23972;
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

om_bootstrap.nav.t23971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function (_23973,meta23972__$1){
var self__ = this;
var _23973__$1 = this;
return (new om_bootstrap.nav.t23971(self__.G__23965,self__.constructor23958,self__.owner,self__.map23960,self__.output_schema23961,self__.validate__11904__auto__,self__.input_schema23962,self__.output_checker23964,self__.input_checker23963,self__.ufv__,meta23972__$1));
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

om_bootstrap.nav.t23971.cljs$lang$type = true;

om_bootstrap.nav.t23971.cljs$lang$ctorStr = "om-bootstrap.nav/t23971";

om_bootstrap.nav.t23971.cljs$lang$ctorPrWriter = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.nav/t23971");
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

om_bootstrap.nav.__GT_t23971 = ((function (owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964){
return (function om_bootstrap$nav$constructor23958_$___GT_t23971(G__23965__$1,constructor23958__$1,owner__$1,map23960__$1,output_schema23961__$1,validate__11904__auto____$1,input_schema23962__$1,output_checker23964__$1,input_checker23963__$1,ufv____$1,meta23972){
return (new om_bootstrap.nav.t23971(G__23965__$1,constructor23958__$1,owner__$1,map23960__$1,output_schema23961__$1,validate__11904__auto____$1,input_schema23962__$1,output_checker23964__$1,input_checker23963__$1,ufv____$1,meta23972));
});})(owner,validate__11904__auto__,ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
;

}

return (new om_bootstrap.nav.t23971(G__23965,om_bootstrap$nav$constructor23958,owner,map23960,output_schema23961,validate__11904__auto__,input_schema23962,output_checker23964,input_checker23963,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23987 = output_checker23964.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23987)){
var error__11906__auto___23988 = temp__4126__auto___23987;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor23958","constructor23958",443359747,null),cljs.core.pr_str.call(null,error__11906__auto___23988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23988,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23961,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema23961,input_schema23962,input_checker23963,output_checker23964))
,schema.core.make_fn_schema.call(null,output_schema23961,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23962], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__16143__auto___23983){
return (function om_bootstrap$nav$nav_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___23983))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___23983){
return (function (data__16144__auto__,owner23957,p__23979){
var vec__23980 = p__23979;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__23980,(0),null);
return component_fnk__16143__auto___23983.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23957,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___23983))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___23983){
return (function (seq23976){
var G__23977 = cljs.core.first.call(null,seq23976);
var seq23976__$1 = cljs.core.next.call(null,seq23976);
var G__23978 = cljs.core.first.call(null,seq23976__$1);
var seq23976__$2 = cljs.core.next.call(null,seq23976__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23977,G__23978,seq23976__$2);
});})(component_fnk__16143__auto___23983))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(){
var G__23982 = arguments.length;
switch (G__23982) {
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

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__16112__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m23959){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__16112__auto__,m23959);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23998 = schema.utils.use_fn_validation;
var output_schema23990_23999 = om_bootstrap.types.Component;
var input_schema23991_24000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker23992_24001 = schema.core.checker.call(null,input_schema23991_24000);
var output_checker23993_24002 = schema.core.checker.call(null,output_schema23990_23999);
/**
 * Inputs: [opts :- Nav & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002){
return (function om_bootstrap$nav$nav(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002){
return (function (G__23994,rest23995){
var validate__11904__auto__ = ufv___23998.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___24003 = cljs.core.list_STAR_.call(null,G__23994,rest23995);
var temp__4126__auto___24004 = input_checker23992_24001.call(null,args__11905__auto___24003);
if(cljs.core.truth_(temp__4126__auto___24004)){
var error__11906__auto___24005 = temp__4126__auto___24004;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11906__auto___24005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24005,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___24003,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23991_24000,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__23994;
var children = rest23995;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___24006 = output_checker23993_24002.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___24006)){
var error__11906__auto___24007 = temp__4126__auto___24006;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11906__auto___24007)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24007,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23990_23999,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002){
return (function (seq23996){
var G__23997 = cljs.core.first.call(null,seq23996);
var seq23996__$1 = cljs.core.next.call(null,seq23996);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__23997,seq23996__$1);
});})(ufv___23998,output_schema23990_23999,input_schema23991_24000,input_checker23992_24001,output_checker23993_24002))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema23990_23999,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23991_24000], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4126__auto___24008 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___24008)){
var f_24009 = temp__4126__auto___24008;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_24009.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,handle_toggle), "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__10412__auto__ = tb;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"key": (0), "className": "sr-only"},"Toggle navigation"),React.DOM.span({"key": (1), "className": "icon-bar"}),React.DOM.span({"key": (2), "className": "icon-bar"}),React.DOM.span({"key": (3), "className": "icon-bar"})], null);
}
})()],null))));
});
var ufv___24015 = schema.utils.use_fn_validation;
var output_schema24010_24016 = schema.core.Bool;
var input_schema24011_24017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"bs","bs",-906042210,null))], null);
var input_checker24012_24018 = schema.core.checker.call(null,input_schema24011_24017);
var output_checker24013_24019 = schema.core.checker.call(null,output_schema24010_24016);
/**
 * Inputs: [bs]
 * Returns: s/Bool
 * 
 * Returns true if any of the necessary properties are in place to
 * render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___24015,output_schema24010_24016,input_schema24011_24017,input_checker24012_24018,output_checker24013_24019){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__24014){
var validate__11904__auto__ = ufv___24015.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___24020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24014], null);
var temp__4126__auto___24021 = input_checker24012_24018.call(null,args__11905__auto___24020);
if(cljs.core.truth_(temp__4126__auto___24021)){
var error__11906__auto___24022 = temp__4126__auto___24021;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__11906__auto___24022)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24022,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___24020,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24011_24017,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var bs = G__24014;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__10412__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___24023 = output_checker24013_24019.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___24023)){
var error__11906__auto___24024 = temp__4126__auto___24023;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__11906__auto___24024)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24024,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24010_24016,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___24015,output_schema24010_24016,input_schema24011_24017,input_checker24012_24018,output_checker24013_24019))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema24010_24016,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24011_24017], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__10412__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__10400__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__10400__auto__)){
var or__10412__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__10400__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__16143__auto___24051 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema24031 = schema.core.Any;
var input_schema24032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map24029","map24029",-1617523965,null))], null);
var input_checker24033 = schema.core.checker.call(null,input_schema24032);
var output_checker24034 = schema.core.checker.call(null,output_schema24031);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function om_bootstrap$nav$constructor24027(G__24035){
var validate__11904__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___24052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24035], null);
var temp__4126__auto___24053 = input_checker24033.call(null,args__11905__auto___24052);
if(cljs.core.truth_(temp__4126__auto___24053)){
var error__11906__auto___24054 = temp__4126__auto___24053;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor24027","constructor24027",-2061442113,null),cljs.core.pr_str.call(null,error__11906__auto___24054)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24054,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___24052,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var map24029 = G__24035;
while(true){
if(cljs.core.map_QMARK_.call(null,map24029)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map24029)));
}

var map24030 = plumbing.fnk.schema.safe_get.call(null,map24029,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map24030,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map24030,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map24029,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t24040 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t24040 = (function (map24029,owner,input_checker24033,children,validate__11904__auto__,G__24035,output_checker24034,input_schema24032,output_schema24031,map24030,opts,ufv__,constructor24027,meta24041){
this.map24029 = map24029;
this.owner = owner;
this.input_checker24033 = input_checker24033;
this.children = children;
this.validate__11904__auto__ = validate__11904__auto__;
this.G__24035 = G__24035;
this.output_checker24034 = output_checker24034;
this.input_schema24032 = input_schema24032;
this.output_schema24031 = output_schema24031;
this.map24030 = map24030;
this.opts = opts;
this.ufv__ = ufv__;
this.constructor24027 = constructor24027;
this.meta24041 = meta24041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t24040.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t24040.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t24040.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__24043 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function() { 
var G__24055__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__24055 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__24056__i = 0, G__24056__a = new Array(arguments.length -  1);
while (G__24056__i < G__24056__a.length) {G__24056__a[G__24056__i] = arguments[G__24056__i + 1]; ++G__24056__i;}
  c = new cljs.core.IndexedSeq(G__24056__a,0);
} 
return G__24055__delegate.call(this,opts__$1,c);};
G__24055.cljs$lang$maxFixedArity = 1;
G__24055.cljs$lang$applyTo = (function (arglist__24057){
var opts__$1 = cljs.core.first(arglist__24057);
var c = cljs.core.rest(arglist__24057);
return G__24055__delegate(opts__$1,c);
});
G__24055.cljs$core$IFn$_invoke$arity$variadic = G__24055__delegate;
return G__24055;
})()
;})(___$1,owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
], null));
var bs = cljs.core.nth.call(null,vec__24043,(0),null);
var props = cljs.core.nth.call(null,vec__24043,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__24043,bs,props,classes,___$1,owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (p1__24025_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__24025_SHARP_,bs);
});})(vec__24043,bs,props,classes,___$1,owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
,self__.children)],null)))));
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t24040.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t24040.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_24042){
var self__ = this;
var _24042__$1 = this;
return self__.meta24041;
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (_24042,meta24041__$1){
var self__ = this;
var _24042__$1 = this;
return (new om_bootstrap.nav.t24040(self__.map24029,self__.owner,self__.input_checker24033,self__.children,self__.validate__11904__auto__,self__.G__24035,self__.output_checker24034,self__.input_schema24032,self__.output_schema24031,self__.map24030,self__.opts,self__.ufv__,self__.constructor24027,meta24041__$1));
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.t24040.cljs$lang$type = true;

om_bootstrap.nav.t24040.cljs$lang$ctorStr = "om-bootstrap.nav/t24040";

om_bootstrap.nav.t24040.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om-bootstrap.nav/t24040");
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

om_bootstrap.nav.__GT_t24040 = ((function (owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034){
return (function om_bootstrap$nav$constructor24027_$___GT_t24040(map24029__$1,owner__$1,input_checker24033__$1,children__$1,validate__11904__auto____$1,G__24035__$1,output_checker24034__$1,input_schema24032__$1,output_schema24031__$1,map24030__$1,opts__$1,ufv____$1,constructor24027__$1,meta24041){
return (new om_bootstrap.nav.t24040(map24029__$1,owner__$1,input_checker24033__$1,children__$1,validate__11904__auto____$1,G__24035__$1,output_checker24034__$1,input_schema24032__$1,output_schema24031__$1,map24030__$1,opts__$1,ufv____$1,constructor24027__$1,meta24041));
});})(owner,children,opts,map24030,validate__11904__auto__,ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
;

}

return (new om_bootstrap.nav.t24040(map24029,owner,input_checker24033,children,validate__11904__auto__,G__24035,output_checker24034,input_schema24032,output_schema24031,map24030,opts,ufv__,om_bootstrap$nav$constructor24027,null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___24058 = output_checker24034.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___24058)){
var error__11906__auto___24059 = temp__4126__auto___24058;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor24027","constructor24027",-2061442113,null),cljs.core.pr_str.call(null,error__11906__auto___24059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24059,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv__,output_schema24031,input_schema24032,input_checker24033,output_checker24034))
,schema.core.make_fn_schema.call(null,output_schema24031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24032], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__16143__auto___24051){
return (function om_bootstrap$nav$navbar_STAR_(){
var argseq__11452__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11452__auto__);
});})(component_fnk__16143__auto___24051))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__16143__auto___24051){
return (function (data__16144__auto__,owner24026,p__24047){
var vec__24048 = p__24047;
var opts__16145__auto__ = cljs.core.nth.call(null,vec__24048,(0),null);
return component_fnk__16143__auto___24051.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__16145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner24026,new cljs.core.Keyword(null,"data","data",-232669377),data__16144__auto__], null));
});})(component_fnk__16143__auto___24051))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__16143__auto___24051){
return (function (seq24044){
var G__24045 = cljs.core.first.call(null,seq24044);
var seq24044__$1 = cljs.core.next.call(null,seq24044);
var G__24046 = cljs.core.first.call(null,seq24044__$1);
var seq24044__$2 = cljs.core.next.call(null,seq24044__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24045,G__24046,seq24044__$2);
});})(component_fnk__16143__auto___24051))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(){
var G__24050 = arguments.length;
switch (G__24050) {
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

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16112__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__16112__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16112__auto__,m24028){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__16112__auto__,m24028);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___24069 = schema.utils.use_fn_validation;
var output_schema24061_24070 = schema.core.Any;
var input_schema24062_24071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker24063_24072 = schema.core.checker.call(null,input_schema24062_24071);
var output_checker24064_24073 = schema.core.checker.call(null,output_schema24061_24070);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073){
return (function om_bootstrap$nav$navbar(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073){
return (function (G__24065,rest24066){
var validate__11904__auto__ = ufv___24069.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___24074 = cljs.core.list_STAR_.call(null,G__24065,rest24066);
var temp__4126__auto___24075 = input_checker24063_24072.call(null,args__11905__auto___24074);
if(cljs.core.truth_(temp__4126__auto___24075)){
var error__11906__auto___24076 = temp__4126__auto___24075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11906__auto___24076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24076,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___24074,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24062_24071,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__24065;
var children = rest24066;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___24077 = output_checker24064_24073.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___24077)){
var error__11906__auto___24078 = temp__4126__auto___24077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11906__auto___24078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___24078,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24061_24070,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073){
return (function (seq24067){
var G__24068 = cljs.core.first.call(null,seq24067);
var seq24067__$1 = cljs.core.next.call(null,seq24067);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__24068,seq24067__$1);
});})(ufv___24069,output_schema24061_24070,input_schema24062_24071,input_checker24063_24072,output_checker24064_24073))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema24061_24070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24062_24071], null)));

//# sourceMappingURL=nav.js.map
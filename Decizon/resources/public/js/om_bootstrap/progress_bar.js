// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.progress_bar');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('schema.core');
om_bootstrap.progress_bar.ProgressBar = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"now","now",-1650525531),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"min","min",444991522)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"max","max",61366548)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sr-only?","sr-only?",-1143674250)),schema.core.named.call(null,schema.core.Bool,"Screenreader-only? Hide the label?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nested?","nested?",1182745618)),schema.core.named.call(null,schema.core.Bool,"Specify this for a nested ProgressBar inside a stacked ProgressBar.")], true, false));
om_bootstrap.progress_bar.defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"progress-bar",new cljs.core.Keyword(null,"striped?","striped?",-797214979),false,new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"nested?","nested?",1182745618),false], null);
var ufv___27234 = schema.utils.use_fn_validation;
var output_schema27227_27235 = schema.core.Num;
var input_schema27228_27236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"min","min",2085523049,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"now","now",-9994004,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"max","max",1701898075,null))], null);
var input_checker27229_27237 = schema.core.checker.call(null,input_schema27228_27236);
var output_checker27230_27238 = schema.core.checker.call(null,output_schema27227_27235);
/**
 * Inputs: [min :- s/Int now :- s/Int max :- s/Int]
 * Returns: s/Num
 */
om_bootstrap.progress_bar.percentage = ((function (ufv___27234,output_schema27227_27235,input_schema27228_27236,input_checker27229_27237,output_checker27230_27238){
return (function om_bootstrap$progress_bar$percentage(G__27231,G__27232,G__27233){
var validate__16151__auto__ = ufv___27234.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27231,G__27232,G__27233], null);
var temp__4425__auto___27240 = input_checker27229_27237.call(null,args__16152__auto___27239);
if(cljs.core.truth_(temp__4425__auto___27240)){
var error__16153__auto___27241 = temp__4425__auto___27240;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__16153__auto___27241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27228_27236,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27239,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27241], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var min = G__27231;
var now = G__27232;
var max = G__27233;
while(true){
return Math.ceil((((now - min) / (max - min)) * (100)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27242 = output_checker27230_27238.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27242)){
var error__16153__auto___27243 = temp__4425__auto___27242;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__16153__auto___27243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27227_27235,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27243], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27234,output_schema27227_27235,input_schema27228_27236,input_checker27229_27237,output_checker27230_27238))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.percentage),schema.core.make_fn_schema.call(null,output_schema27227_27235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27228_27236], null)));
var ufv___27253 = schema.utils.use_fn_validation;
var output_schema27244_27254 = om_bootstrap.types.Component;
var input_schema27245_27255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker27246_27256 = schema.core.checker.call(null,input_schema27245_27255);
var output_checker27247_27257 = schema.core.checker.call(null,output_schema27244_27254);
/**
 * Inputs: [opts :- ProgressBar & children]
 * Returns: t/Component
 * 
 * Generates a progress bar child.
 */
om_bootstrap.progress_bar.child_bar = ((function (ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257){
return (function om_bootstrap$progress_bar$child_bar(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257))
;

om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257){
return (function (G__27248,rest27249){
var validate__16151__auto__ = ufv___27253.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27258 = cljs.core.list_STAR_.call(null,G__27248,rest27249);
var temp__4425__auto___27259 = input_checker27246_27256.call(null,args__16152__auto___27258);
if(cljs.core.truth_(temp__4425__auto___27259)){
var error__16153__auto___27260 = temp__4425__auto___27259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__16153__auto___27260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27245_27255,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27258,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27260], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__27248;
var children = rest27249;
while(true){
var vec__27252 = om_bootstrap.types.separate.call(null,om_bootstrap.progress_bar.ProgressBar,opts,om_bootstrap.progress_bar.defaults);
var bs = cljs.core.nth.call(null,vec__27252,(0),null);
var props = cljs.core.nth.call(null,vec__27252,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),true], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true,new cljs.core.Keyword(null,"active","active",1895962068),true], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true], null):null));
var values = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-value-min","aria-value-min",-1211910577),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-max","aria-value-max",493213452),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-now","aria-value-now",-1780367019),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs)], null);
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(om_bootstrap.progress_bar.percentage.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs))),cljs.core.str("%")].join('')], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var label = temp__4425__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"sr-only?","sr-only?",-1143674250).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null))));
} else {
return label;
}
} else {
return null;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27261 = output_checker27247_27257.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27261)){
var error__16153__auto___27262 = temp__4425__auto___27261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__16153__auto___27262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27244_27254,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27262], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257))
;

om_bootstrap.progress_bar.child_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.child_bar.cljs$lang$applyTo = ((function (ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257){
return (function (seq27250){
var G__27251 = cljs.core.first.call(null,seq27250);
var seq27250__$1 = cljs.core.next.call(null,seq27250);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic(G__27251,seq27250__$1);
});})(ufv___27253,output_schema27244_27254,input_schema27245_27255,input_checker27246_27256,output_checker27247_27257))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.child_bar),schema.core.make_fn_schema.call(null,output_schema27244_27254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27245_27255], null)));
var ufv___27271 = schema.utils.use_fn_validation;
var output_schema27263_27272 = schema.core.Any;
var input_schema27264_27273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker27265_27274 = schema.core.checker.call(null,input_schema27264_27273);
var output_checker27266_27275 = schema.core.checker.call(null,output_schema27263_27272);
/**
 * Inputs: [opts :- ProgressBar & children]
 * 
 * Generates a progress bar component.
 */
om_bootstrap.progress_bar.progress_bar = ((function (ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275){
return (function om_bootstrap$progress_bar$progress_bar(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275))
;

om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275){
return (function (G__27267,rest27268){
var validate__16151__auto__ = ufv___27271.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27276 = cljs.core.list_STAR_.call(null,G__27267,rest27268);
var temp__4425__auto___27277 = input_checker27265_27274.call(null,args__16152__auto___27276);
if(cljs.core.truth_(temp__4425__auto___27277)){
var error__16153__auto___27278 = temp__4425__auto___27277;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__16153__auto___27278)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27264_27273,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27276,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27278], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__27267;
var children = rest27268;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested?","nested?",1182745618).cljs$core$IFn$_invoke$arity$1(opts))){
return om_bootstrap.progress_bar.child_bar.call(null,opts,children);
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "progress"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.progress_bar.child_bar.call(null,opts,children),children],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27279 = output_checker27266_27275.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27279)){
var error__16153__auto___27280 = temp__4425__auto___27279;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__16153__auto___27280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27263_27272,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27280], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275))
;

om_bootstrap.progress_bar.progress_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.progress_bar.cljs$lang$applyTo = ((function (ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275){
return (function (seq27269){
var G__27270 = cljs.core.first.call(null,seq27269);
var seq27269__$1 = cljs.core.next.call(null,seq27269);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic(G__27270,seq27269__$1);
});})(ufv___27271,output_schema27263_27272,input_schema27264_27273,input_checker27265_27274,output_checker27266_27275))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.progress_bar),schema.core.make_fn_schema.call(null,output_schema27263_27272,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27264_27273], null)));

//# sourceMappingURL=progress_bar.js.map
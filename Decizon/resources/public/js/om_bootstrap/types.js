// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___27288 = schema.utils.use_fn_validation;
var output_schema27283_27289 = schema.core.Any;
var input_schema27284_27290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker27285_27291 = schema.core.checker.call(null,input_schema27284_27290);
var output_checker27286_27292 = schema.core.checker.call(null,output_schema27283_27289);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 * Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___27288,output_schema27283_27289,input_schema27284_27290,input_checker27285_27291,output_checker27286_27292){
return (function om_bootstrap$types$schema_keys(G__27287){
var validate__16151__auto__ = ufv___27288.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27287], null);
var temp__4425__auto___27294 = input_checker27285_27291.call(null,args__16152__auto___27293);
if(cljs.core.truth_(temp__4425__auto___27294)){
var error__16153__auto___27295 = temp__4425__auto___27294;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__16153__auto___27295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27284_27290,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27293,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27295], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var schema__$1 = G__27287;
while(true){
return cljs.core.map.call(null,((function (validate__16151__auto__,ufv___27288,output_schema27283_27289,input_schema27284_27290,input_checker27285_27291,output_checker27286_27292){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__16151__auto__,ufv___27288,output_schema27283_27289,input_schema27284_27290,input_checker27285_27291,output_checker27286_27292))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27296 = output_checker27286_27292.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27296)){
var error__16153__auto___27297 = temp__4425__auto___27296;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__16153__auto___27297)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27283_27289,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27297], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27288,output_schema27283_27289,input_schema27284_27290,input_checker27285_27291,output_checker27286_27292))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema27283_27289,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27284_27290], null)));
var ufv___27303 = schema.utils.use_fn_validation;
var output_schema27298_27304 = schema.core.Any;
var input_schema27299_27305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker27300_27306 = schema.core.checker.call(null,input_schema27299_27305);
var output_checker27301_27307 = schema.core.checker.call(null,output_schema27298_27304);
/**
 * Inputs: [schema]
 * 
 * Returns a map schema that accepts the supplied map schema, plus any
 * other optional keys that show up in the map. Such a schema can only
 * enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___27303,output_schema27298_27304,input_schema27299_27305,input_checker27300_27306,output_checker27301_27307){
return (function om_bootstrap$types$at_least(G__27302){
var validate__16151__auto__ = ufv___27303.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27302], null);
var temp__4425__auto___27309 = input_checker27300_27306.call(null,args__16152__auto___27308);
if(cljs.core.truth_(temp__4425__auto___27309)){
var error__16153__auto___27310 = temp__4425__auto___27309;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__16153__auto___27310)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27299_27305,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27308,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27310], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var schema__$1 = G__27302;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27311 = output_checker27301_27307.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27311)){
var error__16153__auto___27312 = temp__4425__auto___27311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__16153__auto___27312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27298_27304,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27312], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27303,output_schema27298_27304,input_schema27299_27305,input_checker27300_27306,output_checker27301_27307))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema27298_27304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27299_27305], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 * the incoming schema has one of the the keys from BootstrapClass,
 * that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___27327 = schema.utils.use_fn_validation;
var output_schema27313_27328 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema27314_27329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema27319_27330 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker27315_27331 = schema.core.checker.call(null,input_schema27314_27329);
var output_checker27316_27332 = schema.core.checker.call(null,output_schema27313_27328);
var input_checker27320_27333 = schema.core.checker.call(null,input_schema27319_27330);
var output_checker27321_27334 = schema.core.checker.call(null,output_schema27313_27328);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 * Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 * Returns two maps; the first is all of the schema options, the
 * second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334){
return (function om_bootstrap$types$separate(){
var G__27326 = arguments.length;
switch (G__27326) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334){
return (function (G__27317,G__27318){
var validate__16151__auto__ = ufv___27327.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27317,G__27318], null);
var temp__4425__auto___27337 = input_checker27315_27331.call(null,args__16152__auto___27336);
if(cljs.core.truth_(temp__4425__auto___27337)){
var error__16153__auto___27338 = temp__4425__auto___27337;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__16153__auto___27338)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27314_27329,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27336,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27338], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var schema__$1 = G__27317;
var opts = G__27318;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27339 = output_checker27316_27332.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27339)){
var error__16153__auto___27340 = temp__4425__auto___27339;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__16153__auto___27340)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27313_27328,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27340], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334){
return (function (G__27322,G__27323,G__27324){
var validate__16151__auto__ = ufv___27327.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27341 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27322,G__27323,G__27324], null);
var temp__4425__auto___27342 = input_checker27320_27333.call(null,args__16152__auto___27341);
if(cljs.core.truth_(temp__4425__auto___27342)){
var error__16153__auto___27343 = temp__4425__auto___27342;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__16153__auto___27343)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27319_27330,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27341,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27343], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var schema__$1 = G__27322;
var opts = G__27323;
var defaults = G__27324;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27344 = output_checker27321_27334.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27344)){
var error__16153__auto___27345 = temp__4425__auto___27344;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__16153__auto___27345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27313_27328,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27345], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27327,output_schema27313_27328,input_schema27314_27329,input_schema27319_27330,input_checker27315_27331,output_checker27316_27332,input_checker27320_27333,output_checker27321_27334))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema27313_27328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27314_27329,input_schema27319_27330], null)));
var ufv___27359 = schema.utils.use_fn_validation;
var output_schema27346_27360 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema27347_27361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker27348_27362 = schema.core.checker.call(null,input_schema27347_27361);
var output_checker27349_27363 = schema.core.checker.call(null,output_schema27346_27360);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 * Returns: {s/Str s/Bool}
 * 
 * Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___27359,output_schema27346_27360,input_schema27347_27361,input_checker27348_27362,output_checker27349_27363){
return (function om_bootstrap$types$bs_class_set(G__27350){
var validate__16151__auto__ = ufv___27359.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27350], null);
var temp__4425__auto___27365 = input_checker27348_27362.call(null,args__16152__auto___27364);
if(cljs.core.truth_(temp__4425__auto___27365)){
var error__16153__auto___27366 = temp__4425__auto___27365;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__16153__auto___27366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27347_27361,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27364,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27366], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__27356 = G__27350;
var map__27357 = G__27356;
var map__27357__$1 = ((cljs.core.seq_QMARK_.call(null,map__27357))?cljs.core.apply.call(null,cljs.core.hash_map,map__27357):map__27357);
var bs_class = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__27356__$1 = G__27356;
while(true){
var map__27358 = G__27356__$1;
var map__27358__$1 = ((cljs.core.seq_QMARK_.call(null,map__27358))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);
var bs_class__$1 = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4423__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var klass = temp__4423__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4425__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var size = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var style = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27367 = output_checker27349_27363.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27367)){
var error__16153__auto___27368 = temp__4425__auto___27367;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__16153__auto___27368)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27346_27360,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27368], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27359,output_schema27346_27360,input_schema27347_27361,input_checker27348_27362,output_checker27349_27363))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema27346_27360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27347_27361], null)));

//# sourceMappingURL=types.js.map
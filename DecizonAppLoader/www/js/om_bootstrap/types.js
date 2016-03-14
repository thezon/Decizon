// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___19194 = schema.utils.use_fn_validation;
var output_schema19189_19195 = schema.core.Any;
var input_schema19190_19196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker19191_19197 = schema.core.checker.call(null,input_schema19190_19196);
var output_checker19192_19198 = schema.core.checker.call(null,output_schema19189_19195);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 * Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___19194,output_schema19189_19195,input_schema19190_19196,input_checker19191_19197,output_checker19192_19198){
return (function om_bootstrap$types$schema_keys(G__19193){
var validate__11904__auto__ = ufv___19194.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19193], null);
var temp__4126__auto___19200 = input_checker19191_19197.call(null,args__11905__auto___19199);
if(cljs.core.truth_(temp__4126__auto___19200)){
var error__11906__auto___19201 = temp__4126__auto___19200;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11906__auto___19201)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19201,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19199,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19190_19196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var schema__$1 = G__19193;
while(true){
return cljs.core.map.call(null,((function (validate__11904__auto__,ufv___19194,output_schema19189_19195,input_schema19190_19196,input_checker19191_19197,output_checker19192_19198){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__11904__auto__,ufv___19194,output_schema19189_19195,input_schema19190_19196,input_checker19191_19197,output_checker19192_19198))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19202 = output_checker19192_19198.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19202)){
var error__11906__auto___19203 = temp__4126__auto___19202;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11906__auto___19203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19203,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19189_19195,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19194,output_schema19189_19195,input_schema19190_19196,input_checker19191_19197,output_checker19192_19198))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema19189_19195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19190_19196], null)));
var ufv___19209 = schema.utils.use_fn_validation;
var output_schema19204_19210 = schema.core.Any;
var input_schema19205_19211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker19206_19212 = schema.core.checker.call(null,input_schema19205_19211);
var output_checker19207_19213 = schema.core.checker.call(null,output_schema19204_19210);
/**
 * Inputs: [schema]
 * 
 * Returns a map schema that accepts the supplied map schema, plus any
 * other optional keys that show up in the map. Such a schema can only
 * enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___19209,output_schema19204_19210,input_schema19205_19211,input_checker19206_19212,output_checker19207_19213){
return (function om_bootstrap$types$at_least(G__19208){
var validate__11904__auto__ = ufv___19209.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19208], null);
var temp__4126__auto___19215 = input_checker19206_19212.call(null,args__11905__auto___19214);
if(cljs.core.truth_(temp__4126__auto___19215)){
var error__11906__auto___19216 = temp__4126__auto___19215;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11906__auto___19216)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19216,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19214,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19205_19211,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var schema__$1 = G__19208;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19217 = output_checker19207_19213.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19217)){
var error__11906__auto___19218 = temp__4126__auto___19217;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11906__auto___19218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19218,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19204_19210,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19209,output_schema19204_19210,input_schema19205_19211,input_checker19206_19212,output_checker19207_19213))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema19204_19210,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19205_19211], null)));
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
var ufv___19233 = schema.utils.use_fn_validation;
var output_schema19219_19234 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema19220_19235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema19225_19236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker19221_19237 = schema.core.checker.call(null,input_schema19220_19235);
var output_checker19222_19238 = schema.core.checker.call(null,output_schema19219_19234);
var input_checker19226_19239 = schema.core.checker.call(null,input_schema19225_19236);
var output_checker19227_19240 = schema.core.checker.call(null,output_schema19219_19234);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 * Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 * Returns two maps; the first is all of the schema options, the
 * second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240){
return (function om_bootstrap$types$separate(){
var G__19232 = arguments.length;
switch (G__19232) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240){
return (function (G__19223,G__19224){
var validate__11904__auto__ = ufv___19233.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19223,G__19224], null);
var temp__4126__auto___19243 = input_checker19221_19237.call(null,args__11905__auto___19242);
if(cljs.core.truth_(temp__4126__auto___19243)){
var error__11906__auto___19244 = temp__4126__auto___19243;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11906__auto___19244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19244,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19242,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19220_19235,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var schema__$1 = G__19223;
var opts = G__19224;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19245 = output_checker19222_19238.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19245)){
var error__11906__auto___19246 = temp__4126__auto___19245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11906__auto___19246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19246,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19219_19234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240){
return (function (G__19228,G__19229,G__19230){
var validate__11904__auto__ = ufv___19233.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19228,G__19229,G__19230], null);
var temp__4126__auto___19248 = input_checker19226_19239.call(null,args__11905__auto___19247);
if(cljs.core.truth_(temp__4126__auto___19248)){
var error__11906__auto___19249 = temp__4126__auto___19248;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11906__auto___19249)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19249,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19247,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19225_19236,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var schema__$1 = G__19228;
var opts = G__19229;
var defaults = G__19230;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19250 = output_checker19227_19240.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19250)){
var error__11906__auto___19251 = temp__4126__auto___19250;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11906__auto___19251)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19251,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19219_19234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19233,output_schema19219_19234,input_schema19220_19235,input_schema19225_19236,input_checker19221_19237,output_checker19222_19238,input_checker19226_19239,output_checker19227_19240))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema19219_19234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19220_19235,input_schema19225_19236], null)));
var ufv___19265 = schema.utils.use_fn_validation;
var output_schema19252_19266 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema19253_19267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker19254_19268 = schema.core.checker.call(null,input_schema19253_19267);
var output_checker19255_19269 = schema.core.checker.call(null,output_schema19252_19266);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 * Returns: {s/Str s/Bool}
 * 
 * Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___19265,output_schema19252_19266,input_schema19253_19267,input_checker19254_19268,output_checker19255_19269){
return (function om_bootstrap$types$bs_class_set(G__19256){
var validate__11904__auto__ = ufv___19265.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19256], null);
var temp__4126__auto___19271 = input_checker19254_19268.call(null,args__11905__auto___19270);
if(cljs.core.truth_(temp__4126__auto___19271)){
var error__11906__auto___19272 = temp__4126__auto___19271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11906__auto___19272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19272,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19270,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19253_19267,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__19262 = G__19256;
var map__19263 = G__19262;
var map__19263__$1 = ((cljs.core.seq_QMARK_.call(null,map__19263))?cljs.core.apply.call(null,cljs.core.hash_map,map__19263):map__19263);
var bs_size = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var G__19262__$1 = G__19262;
while(true){
var map__19264 = G__19262__$1;
var map__19264__$1 = ((cljs.core.seq_QMARK_.call(null,map__19264))?cljs.core.apply.call(null,cljs.core.hash_map,map__19264):map__19264);
var bs_size__$1 = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style__$1 = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class__$1 = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var klass = temp__4124__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var size = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var style = temp__4126__auto__;
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
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19273 = output_checker19255_19269.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19273)){
var error__11906__auto___19274 = temp__4126__auto___19273;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11906__auto___19274)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19274,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19252_19266,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19265,output_schema19252_19266,input_schema19253_19267,input_checker19254_19268,output_checker19255_19269))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema19252_19266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19253_19267], null)));

//# sourceMappingURL=types.js.map
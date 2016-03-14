// Compiled by ClojureScript 0.0-3211 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__14729__14730__auto__){
var G__23264 = p1__14729__14730__auto__;
if(G__23264){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__23264.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__23264.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23264);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23264);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23265_SHARP_){
return (cljs.core.val.call(null,p1__23265_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__23267 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__23267,(0),null);
var v = cljs.core.nth.call(null,vec__23267,(1),null);
var p = vec__23267;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___23273 = schema.utils.use_fn_validation;
var output_schema23268_23274 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema23269_23275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker23270_23276 = schema.core.checker.call(null,input_schema23269_23275);
var output_checker23271_23277 = schema.core.checker.call(null,output_schema23268_23274);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23273,output_schema23268_23274,input_schema23269_23275,input_checker23270_23276,output_checker23271_23277){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__23272){
var validate__11904__auto__ = ufv___23273.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23272], null);
var temp__4126__auto___23279 = input_checker23270_23276.call(null,args__11905__auto___23278);
if(cljs.core.truth_(temp__4126__auto___23279)){
var error__11906__auto___23280 = temp__4126__auto___23279;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11906__auto___23280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23280,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23278,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23269_23275,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var k = G__23272;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23281 = output_checker23271_23277.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23281)){
var error__11906__auto___23282 = temp__4126__auto___23281;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11906__auto___23282)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23282,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23268_23274,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23273,output_schema23268_23274,input_schema23269_23275,input_checker23270_23276,output_checker23271_23277))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema23268_23274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23269_23275], null)));
var ufv___23288 = schema.utils.use_fn_validation;
var output_schema23283_23289 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema23284_23290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23285_23291 = schema.core.checker.call(null,input_schema23284_23290);
var output_checker23286_23292 = schema.core.checker.call(null,output_schema23283_23289);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23288,output_schema23283_23289,input_schema23284_23290,input_checker23285_23291,output_checker23286_23292){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__23287){
var validate__11904__auto__ = ufv___23288.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23287], null);
var temp__4126__auto___23294 = input_checker23285_23291.call(null,args__11905__auto___23293);
if(cljs.core.truth_(temp__4126__auto___23294)){
var error__11906__auto___23295 = temp__4126__auto___23294;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11906__auto___23295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23295,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23293,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23284_23290,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var s = G__23287;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23296 = output_checker23286_23292.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23296)){
var error__11906__auto___23297 = temp__4126__auto___23296;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11906__auto___23297)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23297,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23283_23289,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23288,output_schema23283_23289,input_schema23284_23290,input_checker23285_23291,output_checker23286_23292))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema23283_23289,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23284_23290], null)));
var ufv___23303 = schema.utils.use_fn_validation;
var output_schema23298_23304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema23299_23305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23300_23306 = schema.core.checker.call(null,input_schema23299_23305);
var output_checker23301_23307 = schema.core.checker.call(null,output_schema23298_23304);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23303,output_schema23298_23304,input_schema23299_23305,input_checker23300_23306,output_checker23301_23307){
return (function plumbing$fnk$schema$split_schema_keys(G__23302){
var validate__11904__auto__ = ufv___23303.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23302], null);
var temp__4126__auto___23309 = input_checker23300_23306.call(null,args__11905__auto___23308);
if(cljs.core.truth_(temp__4126__auto___23309)){
var error__11906__auto___23310 = temp__4126__auto___23309;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11906__auto___23310)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23310,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23308,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23299_23305,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var s = G__23302;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23311 = output_checker23301_23307.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23311)){
var error__11906__auto___23312 = temp__4126__auto___23311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11906__auto___23312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23312,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23298_23304,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23303,output_schema23298_23304,input_schema23299_23305,input_checker23300_23306,output_checker23301_23307))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema23298_23304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23299_23305], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__11452__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11452__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23317){
var vec__23318 = p__23317;
var k = cljs.core.nth.call(null,vec__23318,(0),null);
var v = cljs.core.nth.call(null,vec__23318,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23319 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__23319,(0),null);
var ov = cljs.core.nth.call(null,vec__23319,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq23313){
var G__23314 = cljs.core.first.call(null,seq23313);
var seq23313__$1 = cljs.core.next.call(null,seq23313);
var G__23315 = cljs.core.first.call(null,seq23313__$1);
var seq23313__$2 = cljs.core.next.call(null,seq23313__$1);
var G__23316 = cljs.core.first.call(null,seq23313__$2);
var seq23313__$3 = cljs.core.next.call(null,seq23313__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__23314,G__23315,G__23316,seq23313__$3);
});
var ufv___23327 = schema.utils.use_fn_validation;
var output_schema23321_23328 = plumbing.fnk.schema.InputSchema;
var input_schema23322_23329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker23323_23330 = schema.core.checker.call(null,input_schema23322_23329);
var output_checker23324_23331 = schema.core.checker.call(null,output_schema23321_23328);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331){
return (function plumbing$fnk$schema$union_input_schemata(G__23325,G__23326){
var validate__11904__auto__ = ufv___23327.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23325,G__23326], null);
var temp__4126__auto___23333 = input_checker23323_23330.call(null,args__11905__auto___23332);
if(cljs.core.truth_(temp__4126__auto___23333)){
var error__11906__auto___23334 = temp__4126__auto___23333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11906__auto___23334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23334,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23332,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23322_23329,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var i1 = G__23325;
var i2 = G__23326;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331){
return (function (p1__23320_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__23320_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__23320_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331))
,((function (validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331))
,((function (validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__10400__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__10400__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__10400__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__11904__auto__,ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23335 = output_checker23324_23331.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23335)){
var error__11906__auto___23336 = temp__4126__auto___23335;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11906__auto___23336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23336,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23321_23328,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23327,output_schema23321_23328,input_schema23322_23329,input_checker23323_23330,output_checker23324_23331))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23321_23328,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23322_23329], null)));
var ufv___23342 = schema.utils.use_fn_validation;
var output_schema23337_23343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema23338_23344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker23339_23345 = schema.core.checker.call(null,input_schema23338_23344);
var output_checker23340_23346 = schema.core.checker.call(null,output_schema23337_23343);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23342,output_schema23337_23343,input_schema23338_23344,input_checker23339_23345,output_checker23340_23346){
return (function plumbing$fnk$schema$required_toplevel_keys(G__23341){
var validate__11904__auto__ = ufv___23342.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23341], null);
var temp__4126__auto___23348 = input_checker23339_23345.call(null,args__11905__auto___23347);
if(cljs.core.truth_(temp__4126__auto___23348)){
var error__11906__auto___23349 = temp__4126__auto___23348;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11906__auto___23349)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23349,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23347,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23338_23344,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var input_schema = G__23341;
while(true){
return cljs.core.keep.call(null,((function (validate__11904__auto__,ufv___23342,output_schema23337_23343,input_schema23338_23344,input_checker23339_23345,output_checker23340_23346){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__11904__auto__,ufv___23342,output_schema23337_23343,input_schema23338_23344,input_checker23339_23345,output_checker23340_23346))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23350 = output_checker23340_23346.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23350)){
var error__11906__auto___23351 = temp__4126__auto___23350;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11906__auto___23351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23351,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23337_23343,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23342,output_schema23337_23343,input_schema23338_23344,input_checker23339_23345,output_checker23340_23346))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23337_23343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23338_23344], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11166__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__23360(s__23361){
return (new cljs.core.LazySeq(null,(function (){
var s__23361__$1 = s__23361;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23361__$1);
if(temp__4126__auto__){
var s__23361__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23361__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23361__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23363 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23362 = (0);
while(true){
if((i__23362 < size__11165__auto__)){
var vec__23366 = cljs.core._nth.call(null,c__11164__auto__,i__23362);
var k = cljs.core.nth.call(null,vec__23366,(0),null);
var v = cljs.core.nth.call(null,vec__23366,(1),null);
cljs.core.chunk_append.call(null,b__23363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__23368 = (i__23362 + (1));
i__23362 = G__23368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23363),plumbing$fnk$schema$guess_expr_output_schema_$_iter__23360.call(null,cljs.core.chunk_rest.call(null,s__23361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23363),null);
}
} else {
var vec__23367 = cljs.core.first.call(null,s__23361__$2);
var k = cljs.core.nth.call(null,vec__23367,(0),null);
var v = cljs.core.nth.call(null,vec__23367,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__23360.call(null,cljs.core.rest.call(null,s__23361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11166__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11166__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__23377(s__23378){
return (new cljs.core.LazySeq(null,(function (){
var s__23378__$1 = s__23378;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23378__$1);
if(temp__4126__auto__){
var s__23378__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23378__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23378__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23380 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23379 = (0);
while(true){
if((i__23379 < size__11165__auto__)){
var vec__23383 = cljs.core._nth.call(null,c__11164__auto__,i__23379);
var k = cljs.core.nth.call(null,vec__23383,(0),null);
var v = cljs.core.nth.call(null,vec__23383,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__10412__auto__ = required_QMARK_;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__23380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__23385 = (i__23379 + (1));
i__23379 = G__23385;
continue;
} else {
var G__23386 = (i__23379 + (1));
i__23379 = G__23386;
continue;
}
} else {
var G__23387 = (i__23379 + (1));
i__23379 = G__23387;
continue;
}
} else {
var G__23388 = (i__23379 + (1));
i__23379 = G__23388;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23380),plumbing$fnk$schema$schema_diff_$_iter__23377.call(null,cljs.core.chunk_rest.call(null,s__23378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23380),null);
}
} else {
var vec__23384 = cljs.core.first.call(null,s__23378__$2);
var k = cljs.core.nth.call(null,vec__23384,(0),null);
var v = cljs.core.nth.call(null,vec__23384,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__10412__auto__ = required_QMARK_;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__23377.call(null,cljs.core.rest.call(null,s__23378__$2)));
} else {
var G__23389 = cljs.core.rest.call(null,s__23378__$2);
s__23378__$1 = G__23389;
continue;
}
} else {
var G__23390 = cljs.core.rest.call(null,s__23378__$2);
s__23378__$1 = G__23390;
continue;
}
} else {
var G__23391 = cljs.core.rest.call(null,s__23378__$2);
s__23378__$1 = G__23391;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11166__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___23414 = schema.utils.use_fn_validation;
var output_schema23392_23415 = schema.core.Any;
var input_schema23393_23416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23394_23417 = schema.core.checker.call(null,input_schema23393_23416);
var output_checker23395_23418 = schema.core.checker.call(null,output_schema23392_23415);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___23414,output_schema23392_23415,input_schema23393_23416,input_checker23394_23417,output_checker23395_23418){
return (function plumbing$fnk$schema$compose_schemata(G__23396,G__23397){
var validate__11904__auto__ = true;
if(validate__11904__auto__){
var args__11905__auto___23419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23396,G__23397], null);
var temp__4126__auto___23420 = input_checker23394_23417.call(null,args__11905__auto___23419);
if(cljs.core.truth_(temp__4126__auto___23420)){
var error__11906__auto___23421 = temp__4126__auto___23420;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11906__auto___23421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23421,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23419,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23393_23416,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__23408 = G__23396;
var vec__23410 = G__23408;
var i2 = cljs.core.nth.call(null,vec__23410,(0),null);
var o2 = cljs.core.nth.call(null,vec__23410,(1),null);
var G__23409 = G__23397;
var vec__23411 = G__23409;
var i1 = cljs.core.nth.call(null,vec__23411,(0),null);
var o1 = cljs.core.nth.call(null,vec__23411,(1),null);
var G__23408__$1 = G__23408;
var G__23409__$1 = G__23409;
while(true){
var vec__23412 = G__23408__$1;
var i2__$1 = cljs.core.nth.call(null,vec__23412,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23412,(1),null);
var vec__23413 = G__23409__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23413,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23413,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__11904__auto__){
var temp__4126__auto___23422 = output_checker23395_23418.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23422)){
var error__11906__auto___23423 = temp__4126__auto___23422;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11906__auto___23423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23423,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23392_23415,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23414,output_schema23392_23415,input_schema23393_23416,input_checker23394_23417,output_checker23395_23418))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23392_23415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23393_23416], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___23502 = schema.utils.use_fn_validation;
var output_schema23424_23503 = schema.core.Any;
var input_schema23425_23504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker23426_23505 = schema.core.checker.call(null,input_schema23425_23504);
var output_checker23427_23506 = schema.core.checker.call(null,output_schema23424_23503);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function plumbing$fnk$schema$split_schema(G__23428,G__23429){
var validate__11904__auto__ = ufv___23502.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23428,G__23429], null);
var temp__4126__auto___23508 = input_checker23426_23505.call(null,args__11905__auto___23507);
if(cljs.core.truth_(temp__4126__auto___23508)){
var error__11906__auto___23509 = temp__4126__auto___23508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11906__auto___23509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23509,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23507,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23425_23504,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var s = G__23428;
var ks = G__23429;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__11166__auto__ = ((function (ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function plumbing$fnk$schema$split_schema_$_iter__23466(s__23467){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function (){
var s__23467__$1 = s__23467;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23467__$1);
if(temp__4126__auto__){
var s__23467__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23467__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23467__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23469 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23468 = (0);
while(true){
if((i__23468 < size__11165__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__11164__auto__,i__23468);
cljs.core.chunk_append.call(null,b__23469,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11166__auto__ = ((function (i__23468,in_QMARK_,c__11164__auto__,size__11165__auto__,b__23469,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23486(s__23487){
return (new cljs.core.LazySeq(null,((function (i__23468,in_QMARK_,c__11164__auto__,size__11165__auto__,b__23469,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function (){
var s__23487__$1 = s__23487;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23487__$1);
if(temp__4126__auto____$1){
var s__23487__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23487__$2)){
var c__11164__auto____$1 = cljs.core.chunk_first.call(null,s__23487__$2);
var size__11165__auto____$1 = cljs.core.count.call(null,c__11164__auto____$1);
var b__23489 = cljs.core.chunk_buffer.call(null,size__11165__auto____$1);
if((function (){var i__23488 = (0);
while(true){
if((i__23488 < size__11165__auto____$1)){
var vec__23492 = cljs.core._nth.call(null,c__11164__auto____$1,i__23488);
var k = cljs.core.nth.call(null,vec__23492,(0),null);
var v = cljs.core.nth.call(null,vec__23492,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__10400__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__23489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23510 = (i__23488 + (1));
i__23488 = G__23510;
continue;
} else {
var G__23511 = (i__23488 + (1));
i__23488 = G__23511;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23489),plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23486.call(null,cljs.core.chunk_rest.call(null,s__23487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23489),null);
}
} else {
var vec__23493 = cljs.core.first.call(null,s__23487__$2);
var k = cljs.core.nth.call(null,vec__23493,(0),null);
var v = cljs.core.nth.call(null,vec__23493,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__10400__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23486.call(null,cljs.core.rest.call(null,s__23487__$2)));
} else {
var G__23512 = cljs.core.rest.call(null,s__23487__$2);
s__23487__$1 = G__23512;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__23468,in_QMARK_,c__11164__auto__,size__11165__auto__,b__23469,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
,null,null));
});})(i__23468,in_QMARK_,c__11164__auto__,size__11165__auto__,b__23469,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
;
return iter__11166__auto__.call(null,s);
})()));

var G__23513 = (i__23468 + (1));
i__23468 = G__23513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23469),plumbing$fnk$schema$split_schema_$_iter__23466.call(null,cljs.core.chunk_rest.call(null,s__23467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23469),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__23467__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11166__auto__ = ((function (in_QMARK_,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23494(s__23495){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506){
return (function (){
var s__23495__$1 = s__23495;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23495__$1);
if(temp__4126__auto____$1){
var s__23495__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23495__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23495__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23497 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23496 = (0);
while(true){
if((i__23496 < size__11165__auto__)){
var vec__23500 = cljs.core._nth.call(null,c__11164__auto__,i__23496);
var k = cljs.core.nth.call(null,vec__23500,(0),null);
var v = cljs.core.nth.call(null,vec__23500,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__10400__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__23497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23514 = (i__23496 + (1));
i__23496 = G__23514;
continue;
} else {
var G__23515 = (i__23496 + (1));
i__23496 = G__23515;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23497),plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23494.call(null,cljs.core.chunk_rest.call(null,s__23495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23497),null);
}
} else {
var vec__23501 = cljs.core.first.call(null,s__23495__$2);
var k = cljs.core.nth.call(null,vec__23501,(0),null);
var v = cljs.core.nth.call(null,vec__23501,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__10400__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__23466_$_iter__23494.call(null,cljs.core.rest.call(null,s__23495__$2)));
} else {
var G__23516 = cljs.core.rest.call(null,s__23495__$2);
s__23495__$1 = G__23516;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
,null,null));
});})(in_QMARK_,s__23467__$2,temp__4126__auto__,ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
;
return iter__11166__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__23466.call(null,cljs.core.rest.call(null,s__23467__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
,null,null));
});})(ks__$1,validate__11904__auto__,ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
;
return iter__11166__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23517 = output_checker23427_23506.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23517)){
var error__11906__auto___23518 = temp__4126__auto___23517;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11906__auto___23518)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23518,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23424_23503,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23502,output_schema23424_23503,input_schema23425_23504,input_checker23426_23505,output_checker23427_23506))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23424_23503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23425_23504], null)));
var ufv___23549 = schema.utils.use_fn_validation;
var output_schema23519_23550 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema23520_23551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23521_23552 = schema.core.checker.call(null,input_schema23520_23551);
var output_checker23522_23553 = schema.core.checker.call(null,output_schema23519_23550);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23549,output_schema23519_23550,input_schema23520_23551,input_checker23521_23552,output_checker23522_23553){
return (function plumbing$fnk$schema$sequence_schemata(G__23523,G__23524){
var validate__11904__auto__ = ufv___23549.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___23554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23523,G__23524], null);
var temp__4126__auto___23555 = input_checker23521_23552.call(null,args__11905__auto___23554);
if(cljs.core.truth_(temp__4126__auto___23555)){
var error__11906__auto___23556 = temp__4126__auto___23555;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11906__auto___23556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23556,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___23554,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23520_23551,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__23540 = G__23523;
var vec__23542 = G__23540;
var i1 = cljs.core.nth.call(null,vec__23542,(0),null);
var o1 = cljs.core.nth.call(null,vec__23542,(1),null);
var G__23541 = G__23524;
var vec__23543 = G__23541;
var k = cljs.core.nth.call(null,vec__23543,(0),null);
var vec__23544 = cljs.core.nth.call(null,vec__23543,(1),null);
var i2 = cljs.core.nth.call(null,vec__23544,(0),null);
var o2 = cljs.core.nth.call(null,vec__23544,(1),null);
var G__23540__$1 = G__23540;
var G__23541__$1 = G__23541;
while(true){
var vec__23545 = G__23540__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23545,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23545,(1),null);
var vec__23546 = G__23541__$1;
var k__$1 = cljs.core.nth.call(null,vec__23546,(0),null);
var vec__23547 = cljs.core.nth.call(null,vec__23546,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__23547,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23547,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__23548 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__23548,(0),null);
var unused = cljs.core.nth.call(null,vec__23548,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___23557 = output_checker23522_23553.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___23557)){
var error__11906__auto___23558 = temp__4126__auto___23557;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11906__auto___23558)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___23558,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23519_23550,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___23549,output_schema23519_23550,input_schema23520_23551,input_checker23521_23552,output_checker23522_23553))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23519_23550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23520_23551], null)));

//# sourceMappingURL=schema.js.map
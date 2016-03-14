// Compiled by ClojureScript 0.0-3291 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__19957__19958__auto__){
var G__31403 = p1__19957__19958__auto__;
if(G__31403){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__31403.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__31403.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31403);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31403);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31404_SHARP_){
return (cljs.core.val.call(null,p1__31404_SHARP_) > (1));
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

var vec__31406 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__31406,(0),null);
var v = cljs.core.nth.call(null,vec__31406,(1),null);
var p = vec__31406;
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
var ufv___31412 = schema.utils.use_fn_validation;
var output_schema31407_31413 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema31408_31414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker31409_31415 = schema.core.checker.call(null,input_schema31408_31414);
var output_checker31410_31416 = schema.core.checker.call(null,output_schema31407_31413);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31412,output_schema31407_31413,input_schema31408_31414,input_checker31409_31415,output_checker31410_31416){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__31411){
var validate__16151__auto__ = ufv___31412.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31411], null);
var temp__4425__auto___31418 = input_checker31409_31415.call(null,args__16152__auto___31417);
if(cljs.core.truth_(temp__4425__auto___31418)){
var error__16153__auto___31419 = temp__4425__auto___31418;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16153__auto___31419)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31408_31414,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31417,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31419], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var k = G__31411;
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
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31420 = output_checker31410_31416.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31420)){
var error__16153__auto___31421 = temp__4425__auto___31420;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16153__auto___31421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31407_31413,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31421], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31412,output_schema31407_31413,input_schema31408_31414,input_checker31409_31415,output_checker31410_31416))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema31407_31413,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31408_31414], null)));
var ufv___31427 = schema.utils.use_fn_validation;
var output_schema31422_31428 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema31423_31429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31424_31430 = schema.core.checker.call(null,input_schema31423_31429);
var output_checker31425_31431 = schema.core.checker.call(null,output_schema31422_31428);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31427,output_schema31422_31428,input_schema31423_31429,input_checker31424_31430,output_checker31425_31431){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__31426){
var validate__16151__auto__ = ufv___31427.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31426], null);
var temp__4425__auto___31433 = input_checker31424_31430.call(null,args__16152__auto___31432);
if(cljs.core.truth_(temp__4425__auto___31433)){
var error__16153__auto___31434 = temp__4425__auto___31433;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16153__auto___31434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31423_31429,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31432,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31434], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var s = G__31426;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31435 = output_checker31425_31431.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31435)){
var error__16153__auto___31436 = temp__4425__auto___31435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16153__auto___31436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31422_31428,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31436], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31427,output_schema31422_31428,input_schema31423_31429,input_checker31424_31430,output_checker31425_31431))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema31422_31428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31423_31429], null)));
var ufv___31442 = schema.utils.use_fn_validation;
var output_schema31437_31443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema31438_31444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker31439_31445 = schema.core.checker.call(null,input_schema31438_31444);
var output_checker31440_31446 = schema.core.checker.call(null,output_schema31437_31443);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31442,output_schema31437_31443,input_schema31438_31444,input_checker31439_31445,output_checker31440_31446){
return (function plumbing$fnk$schema$split_schema_keys(G__31441){
var validate__16151__auto__ = ufv___31442.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31441], null);
var temp__4425__auto___31448 = input_checker31439_31445.call(null,args__16152__auto___31447);
if(cljs.core.truth_(temp__4425__auto___31448)){
var error__16153__auto___31449 = temp__4425__auto___31448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16153__auto___31449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31438_31444,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31447,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31449], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var s = G__31441;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31450 = output_checker31440_31446.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31450)){
var error__16153__auto___31451 = temp__4425__auto___31450;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16153__auto___31451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31437_31443,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31451], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31442,output_schema31437_31443,input_schema31438_31444,input_checker31439_31445,output_checker31440_31446))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema31437_31443,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31438_31444], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__12388__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12388__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__31456){
var vec__31457 = p__31456;
var k = cljs.core.nth.call(null,vec__31457,(0),null);
var v = cljs.core.nth.call(null,vec__31457,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31458 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__31458,(0),null);
var ov = cljs.core.nth.call(null,vec__31458,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq31452){
var G__31453 = cljs.core.first.call(null,seq31452);
var seq31452__$1 = cljs.core.next.call(null,seq31452);
var G__31454 = cljs.core.first.call(null,seq31452__$1);
var seq31452__$2 = cljs.core.next.call(null,seq31452__$1);
var G__31455 = cljs.core.first.call(null,seq31452__$2);
var seq31452__$3 = cljs.core.next.call(null,seq31452__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__31453,G__31454,G__31455,seq31452__$3);
});
var ufv___31466 = schema.utils.use_fn_validation;
var output_schema31460_31467 = plumbing.fnk.schema.InputSchema;
var input_schema31461_31468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker31462_31469 = schema.core.checker.call(null,input_schema31461_31468);
var output_checker31463_31470 = schema.core.checker.call(null,output_schema31460_31467);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470){
return (function plumbing$fnk$schema$union_input_schemata(G__31464,G__31465){
var validate__16151__auto__ = ufv___31466.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31464,G__31465], null);
var temp__4425__auto___31472 = input_checker31462_31469.call(null,args__16152__auto___31471);
if(cljs.core.truth_(temp__4425__auto___31472)){
var error__16153__auto___31473 = temp__4425__auto___31472;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16153__auto___31473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31461_31468,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31471,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31473], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var i1 = G__31464;
var i2 = G__31465;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470){
return (function (p1__31459_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__31459_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__31459_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470))
,((function (validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470){
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
});})(validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470))
,((function (validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__11336__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__11336__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__11336__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__16151__auto__,ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31474 = output_checker31463_31470.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31474)){
var error__16153__auto___31475 = temp__4425__auto___31474;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16153__auto___31475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31460_31467,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31475], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31466,output_schema31460_31467,input_schema31461_31468,input_checker31462_31469,output_checker31463_31470))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema31460_31467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31461_31468], null)));
var ufv___31481 = schema.utils.use_fn_validation;
var output_schema31476_31482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31477_31483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker31478_31484 = schema.core.checker.call(null,input_schema31477_31483);
var output_checker31479_31485 = schema.core.checker.call(null,output_schema31476_31482);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31481,output_schema31476_31482,input_schema31477_31483,input_checker31478_31484,output_checker31479_31485){
return (function plumbing$fnk$schema$required_toplevel_keys(G__31480){
var validate__16151__auto__ = ufv___31481.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31480], null);
var temp__4425__auto___31487 = input_checker31478_31484.call(null,args__16152__auto___31486);
if(cljs.core.truth_(temp__4425__auto___31487)){
var error__16153__auto___31488 = temp__4425__auto___31487;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16153__auto___31488)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31477_31483,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31486,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31488], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var input_schema = G__31480;
while(true){
return cljs.core.keep.call(null,((function (validate__16151__auto__,ufv___31481,output_schema31476_31482,input_schema31477_31483,input_checker31478_31484,output_checker31479_31485){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__16151__auto__,ufv___31481,output_schema31476_31482,input_schema31477_31483,input_checker31478_31484,output_checker31479_31485))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31489 = output_checker31479_31485.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31489)){
var error__16153__auto___31490 = temp__4425__auto___31489;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16153__auto___31490)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31476_31482,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31490], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31481,output_schema31476_31482,input_schema31477_31483,input_checker31478_31484,output_checker31479_31485))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema31476_31482,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31477_31483], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12102__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__31499(s__31500){
return (new cljs.core.LazySeq(null,(function (){
var s__31500__$1 = s__31500;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31500__$1);
if(temp__4425__auto__){
var s__31500__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31500__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31500__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31502 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31501 = (0);
while(true){
if((i__31501 < size__12101__auto__)){
var vec__31505 = cljs.core._nth.call(null,c__12100__auto__,i__31501);
var k = cljs.core.nth.call(null,vec__31505,(0),null);
var v = cljs.core.nth.call(null,vec__31505,(1),null);
cljs.core.chunk_append.call(null,b__31502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__31507 = (i__31501 + (1));
i__31501 = G__31507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31502),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31499.call(null,cljs.core.chunk_rest.call(null,s__31500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31502),null);
}
} else {
var vec__31506 = cljs.core.first.call(null,s__31500__$2);
var k = cljs.core.nth.call(null,vec__31506,(0),null);
var v = cljs.core.nth.call(null,vec__31506,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31499.call(null,cljs.core.rest.call(null,s__31500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12102__auto__.call(null,expr);
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12102__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__31516(s__31517){
return (new cljs.core.LazySeq(null,(function (){
var s__31517__$1 = s__31517;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31517__$1);
if(temp__4425__auto__){
var s__31517__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31517__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31517__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31519 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31518 = (0);
while(true){
if((i__31518 < size__12101__auto__)){
var vec__31522 = cljs.core._nth.call(null,c__12100__auto__,i__31518);
var k = cljs.core.nth.call(null,vec__31522,(0),null);
var v = cljs.core.nth.call(null,vec__31522,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__11348__auto__ = required_QMARK_;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__31519,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31524 = (i__31518 + (1));
i__31518 = G__31524;
continue;
} else {
var G__31525 = (i__31518 + (1));
i__31518 = G__31525;
continue;
}
} else {
var G__31526 = (i__31518 + (1));
i__31518 = G__31526;
continue;
}
} else {
var G__31527 = (i__31518 + (1));
i__31518 = G__31527;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31519),plumbing$fnk$schema$schema_diff_$_iter__31516.call(null,cljs.core.chunk_rest.call(null,s__31517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31519),null);
}
} else {
var vec__31523 = cljs.core.first.call(null,s__31517__$2);
var k = cljs.core.nth.call(null,vec__31523,(0),null);
var v = cljs.core.nth.call(null,vec__31523,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__11348__auto__ = required_QMARK_;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__31516.call(null,cljs.core.rest.call(null,s__31517__$2)));
} else {
var G__31528 = cljs.core.rest.call(null,s__31517__$2);
s__31517__$1 = G__31528;
continue;
}
} else {
var G__31529 = cljs.core.rest.call(null,s__31517__$2);
s__31517__$1 = G__31529;
continue;
}
} else {
var G__31530 = cljs.core.rest.call(null,s__31517__$2);
s__31517__$1 = G__31530;
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
return iter__12102__auto__.call(null,input_schema);
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
var ufv___31553 = schema.utils.use_fn_validation;
var output_schema31531_31554 = schema.core.Any;
var input_schema31532_31555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31533_31556 = schema.core.checker.call(null,input_schema31532_31555);
var output_checker31534_31557 = schema.core.checker.call(null,output_schema31531_31554);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___31553,output_schema31531_31554,input_schema31532_31555,input_checker31533_31556,output_checker31534_31557){
return (function plumbing$fnk$schema$compose_schemata(G__31535,G__31536){
var validate__16151__auto__ = true;
if(validate__16151__auto__){
var args__16152__auto___31558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31535,G__31536], null);
var temp__4425__auto___31559 = input_checker31533_31556.call(null,args__16152__auto___31558);
if(cljs.core.truth_(temp__4425__auto___31559)){
var error__16153__auto___31560 = temp__4425__auto___31559;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16153__auto___31560)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31532_31555,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31558,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31560], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__31547 = G__31535;
var vec__31549 = G__31547;
var i2 = cljs.core.nth.call(null,vec__31549,(0),null);
var o2 = cljs.core.nth.call(null,vec__31549,(1),null);
var G__31548 = G__31536;
var vec__31550 = G__31548;
var i1 = cljs.core.nth.call(null,vec__31550,(0),null);
var o1 = cljs.core.nth.call(null,vec__31550,(1),null);
var G__31547__$1 = G__31547;
var G__31548__$1 = G__31548;
while(true){
var vec__31551 = G__31547__$1;
var i2__$1 = cljs.core.nth.call(null,vec__31551,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__31551,(1),null);
var vec__31552 = G__31548__$1;
var i1__$1 = cljs.core.nth.call(null,vec__31552,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__31552,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16151__auto__){
var temp__4425__auto___31561 = output_checker31534_31557.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31561)){
var error__16153__auto___31562 = temp__4425__auto___31561;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16153__auto___31562)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31531_31554,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31562], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31553,output_schema31531_31554,input_schema31532_31555,input_checker31533_31556,output_checker31534_31557))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema31531_31554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31532_31555], null)));
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
var ufv___31641 = schema.utils.use_fn_validation;
var output_schema31563_31642 = schema.core.Any;
var input_schema31564_31643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker31565_31644 = schema.core.checker.call(null,input_schema31564_31643);
var output_checker31566_31645 = schema.core.checker.call(null,output_schema31563_31642);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function plumbing$fnk$schema$split_schema(G__31567,G__31568){
var validate__16151__auto__ = ufv___31641.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31567,G__31568], null);
var temp__4425__auto___31647 = input_checker31565_31644.call(null,args__16152__auto___31646);
if(cljs.core.truth_(temp__4425__auto___31647)){
var error__16153__auto___31648 = temp__4425__auto___31647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16153__auto___31648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31564_31643,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31646,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31648], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var s = G__31567;
var ks = G__31568;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__12102__auto__ = ((function (ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function plumbing$fnk$schema$split_schema_$_iter__31605(s__31606){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function (){
var s__31606__$1 = s__31606;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31606__$1);
if(temp__4425__auto__){
var s__31606__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31606__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31606__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31608 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31607 = (0);
while(true){
if((i__31607 < size__12101__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__12100__auto__,i__31607);
cljs.core.chunk_append.call(null,b__31608,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12102__auto__ = ((function (i__31607,in_QMARK_,c__12100__auto__,size__12101__auto__,b__31608,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31625(s__31626){
return (new cljs.core.LazySeq(null,((function (i__31607,in_QMARK_,c__12100__auto__,size__12101__auto__,b__31608,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function (){
var s__31626__$1 = s__31626;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__31626__$1);
if(temp__4425__auto____$1){
var s__31626__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31626__$2)){
var c__12100__auto____$1 = cljs.core.chunk_first.call(null,s__31626__$2);
var size__12101__auto____$1 = cljs.core.count.call(null,c__12100__auto____$1);
var b__31628 = cljs.core.chunk_buffer.call(null,size__12101__auto____$1);
if((function (){var i__31627 = (0);
while(true){
if((i__31627 < size__12101__auto____$1)){
var vec__31631 = cljs.core._nth.call(null,c__12100__auto____$1,i__31627);
var k = cljs.core.nth.call(null,vec__31631,(0),null);
var v = cljs.core.nth.call(null,vec__31631,(1),null);
if(cljs.core.truth_((function (){var and__11336__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__11336__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__31628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31649 = (i__31627 + (1));
i__31627 = G__31649;
continue;
} else {
var G__31650 = (i__31627 + (1));
i__31627 = G__31650;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31628),plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31625.call(null,cljs.core.chunk_rest.call(null,s__31626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31628),null);
}
} else {
var vec__31632 = cljs.core.first.call(null,s__31626__$2);
var k = cljs.core.nth.call(null,vec__31632,(0),null);
var v = cljs.core.nth.call(null,vec__31632,(1),null);
if(cljs.core.truth_((function (){var and__11336__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__11336__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31625.call(null,cljs.core.rest.call(null,s__31626__$2)));
} else {
var G__31651 = cljs.core.rest.call(null,s__31626__$2);
s__31626__$1 = G__31651;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31607,in_QMARK_,c__12100__auto__,size__12101__auto__,b__31608,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
,null,null));
});})(i__31607,in_QMARK_,c__12100__auto__,size__12101__auto__,b__31608,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
;
return iter__12102__auto__.call(null,s);
})()));

var G__31652 = (i__31607 + (1));
i__31607 = G__31652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31608),plumbing$fnk$schema$split_schema_$_iter__31605.call(null,cljs.core.chunk_rest.call(null,s__31606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31608),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__31606__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12102__auto__ = ((function (in_QMARK_,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31633(s__31634){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645){
return (function (){
var s__31634__$1 = s__31634;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__31634__$1);
if(temp__4425__auto____$1){
var s__31634__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31634__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31634__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31636 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31635 = (0);
while(true){
if((i__31635 < size__12101__auto__)){
var vec__31639 = cljs.core._nth.call(null,c__12100__auto__,i__31635);
var k = cljs.core.nth.call(null,vec__31639,(0),null);
var v = cljs.core.nth.call(null,vec__31639,(1),null);
if(cljs.core.truth_((function (){var and__11336__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__11336__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__31636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31653 = (i__31635 + (1));
i__31635 = G__31653;
continue;
} else {
var G__31654 = (i__31635 + (1));
i__31635 = G__31654;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31636),plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31633.call(null,cljs.core.chunk_rest.call(null,s__31634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31636),null);
}
} else {
var vec__31640 = cljs.core.first.call(null,s__31634__$2);
var k = cljs.core.nth.call(null,vec__31640,(0),null);
var v = cljs.core.nth.call(null,vec__31640,(1),null);
if(cljs.core.truth_((function (){var and__11336__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__11336__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31605_$_iter__31633.call(null,cljs.core.rest.call(null,s__31634__$2)));
} else {
var G__31655 = cljs.core.rest.call(null,s__31634__$2);
s__31634__$1 = G__31655;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
,null,null));
});})(in_QMARK_,s__31606__$2,temp__4425__auto__,ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
;
return iter__12102__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__31605.call(null,cljs.core.rest.call(null,s__31606__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
,null,null));
});})(ks__$1,validate__16151__auto__,ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
;
return iter__12102__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31656 = output_checker31566_31645.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31656)){
var error__16153__auto___31657 = temp__4425__auto___31656;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16153__auto___31657)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31563_31642,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31657], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31641,output_schema31563_31642,input_schema31564_31643,input_checker31565_31644,output_checker31566_31645))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema31563_31642,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31564_31643], null)));
var ufv___31688 = schema.utils.use_fn_validation;
var output_schema31658_31689 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema31659_31690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31660_31691 = schema.core.checker.call(null,input_schema31659_31690);
var output_checker31661_31692 = schema.core.checker.call(null,output_schema31658_31689);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___31688,output_schema31658_31689,input_schema31659_31690,input_checker31660_31691,output_checker31661_31692){
return (function plumbing$fnk$schema$sequence_schemata(G__31662,G__31663){
var validate__16151__auto__ = ufv___31688.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___31693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31662,G__31663], null);
var temp__4425__auto___31694 = input_checker31660_31691.call(null,args__16152__auto___31693);
if(cljs.core.truth_(temp__4425__auto___31694)){
var error__16153__auto___31695 = temp__4425__auto___31694;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16153__auto___31695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31659_31690,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___31693,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31695], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__31679 = G__31662;
var vec__31681 = G__31679;
var i1 = cljs.core.nth.call(null,vec__31681,(0),null);
var o1 = cljs.core.nth.call(null,vec__31681,(1),null);
var G__31680 = G__31663;
var vec__31682 = G__31680;
var k = cljs.core.nth.call(null,vec__31682,(0),null);
var vec__31683 = cljs.core.nth.call(null,vec__31682,(1),null);
var i2 = cljs.core.nth.call(null,vec__31683,(0),null);
var o2 = cljs.core.nth.call(null,vec__31683,(1),null);
var G__31679__$1 = G__31679;
var G__31680__$1 = G__31680;
while(true){
var vec__31684 = G__31679__$1;
var i1__$1 = cljs.core.nth.call(null,vec__31684,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__31684,(1),null);
var vec__31685 = G__31680__$1;
var k__$1 = cljs.core.nth.call(null,vec__31685,(0),null);
var vec__31686 = cljs.core.nth.call(null,vec__31685,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__31686,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__31686,(1),null);
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

var vec__31687 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__31687,(0),null);
var unused = cljs.core.nth.call(null,vec__31687,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___31696 = output_checker31661_31692.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___31696)){
var error__16153__auto___31697 = temp__4425__auto___31696;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16153__auto___31697)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31658_31689,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___31697], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___31688,output_schema31658_31689,input_schema31659_31690,input_checker31660_31691,output_checker31661_31692))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema31658_31689,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31659_31690], null)));

//# sourceMappingURL=schema.js.map
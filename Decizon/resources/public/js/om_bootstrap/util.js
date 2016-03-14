// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping(s)
 * from the latter (left-to-right) will be combined with the mapping in
 * the result by looking up the proper merge function and in the
 * supplied map of key -> merge-fn and using that for the big merge. If
 * a key doesn't have a merge function, the right value wins (as with
 * merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__11336__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__11336__auto__){
return k__GT_fn.call(null,k);
} else {
return and__11336__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__11348__auto__ = m1;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___27376 = schema.utils.use_fn_validation;
var output_schema27371_27377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema27372_27378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker27373_27379 = schema.core.checker.call(null,input_schema27372_27378);
var output_checker27374_27380 = schema.core.checker.call(null,output_schema27371_27377);
/**
 * Inputs: [x :- s/Any]
 * Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___27376,output_schema27371_27377,input_schema27372_27378,input_checker27373_27379,output_checker27374_27380){
return (function om_bootstrap$util$collectify(G__27375){
var validate__16151__auto__ = ufv___27376.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27375], null);
var temp__4425__auto___27382 = input_checker27373_27379.call(null,args__16152__auto___27381);
if(cljs.core.truth_(temp__4425__auto___27382)){
var error__16153__auto___27383 = temp__4425__auto___27382;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__16153__auto___27383)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27372_27378,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27381,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27383], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var x = G__27375;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27384 = output_checker27374_27380.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27384)){
var error__16153__auto___27385 = temp__4425__auto___27384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__16153__auto___27385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27371_27377,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27385], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27376,output_schema27371_27377,input_schema27372_27378,input_checker27373_27379,output_checker27374_27380))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema27371_27377,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27372_27378], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 * the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___27391 = schema.utils.use_fn_validation;
var output_schema27386_27392 = schema.core.Bool;
var input_schema27387_27393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker27388_27394 = schema.core.checker.call(null,input_schema27387_27393);
var output_checker27389_27395 = schema.core.checker.call(null,output_schema27386_27392);
/**
 * Inputs: [x]
 * Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___27391,output_schema27386_27392,input_schema27387_27393,input_checker27388_27394,output_checker27389_27395){
return (function om_bootstrap$util$om_component_QMARK_(G__27390){
var validate__16151__auto__ = ufv___27391.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27390], null);
var temp__4425__auto___27397 = input_checker27388_27394.call(null,args__16152__auto___27396);
if(cljs.core.truth_(temp__4425__auto___27397)){
var error__16153__auto___27398 = temp__4425__auto___27397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__16153__auto___27398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27387_27393,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27396,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27398], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var x = G__27390;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27399 = output_checker27389_27395.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27399)){
var error__16153__auto___27400 = temp__4425__auto___27399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__16153__auto___27400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27386_27392,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27400], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27391,output_schema27386_27392,input_schema27387_27393,input_checker27388_27394,output_checker27389_27395))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27386_27392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27387_27393], null)));
var ufv___27406 = schema.utils.use_fn_validation;
var output_schema27401_27407 = schema.core.Bool;
var input_schema27402_27408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker27403_27409 = schema.core.checker.call(null,input_schema27402_27408);
var output_checker27404_27410 = schema.core.checker.call(null,output_schema27401_27407);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * TODO: Once Om updates its externs to include this file, we can
 * remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___27406,output_schema27401_27407,input_schema27402_27408,input_checker27403_27409,output_checker27404_27410){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__27405){
var validate__16151__auto__ = ufv___27406.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27405], null);
var temp__4425__auto___27412 = input_checker27403_27409.call(null,args__16152__auto___27411);
if(cljs.core.truth_(temp__4425__auto___27412)){
var error__16153__auto___27413 = temp__4425__auto___27412;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__16153__auto___27413)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27402_27408,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27411,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27413], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var child = G__27405;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27414 = output_checker27404_27410.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27414)){
var error__16153__auto___27415 = temp__4425__auto___27414;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__16153__auto___27415)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27401_27407,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27415], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27406,output_schema27401_27407,input_schema27402_27408,input_checker27403_27409,output_checker27404_27410))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27401_27407,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27402_27408], null)));
var ufv___27421 = schema.utils.use_fn_validation;
var output_schema27416_27422 = schema.core.Bool;
var input_schema27417_27423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker27418_27424 = schema.core.checker.call(null,input_schema27417_27423);
var output_checker27419_27425 = schema.core.checker.call(null,output_schema27416_27422);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * Returns true if the supplied argument is a valid React component,
 * false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___27421,output_schema27416_27422,input_schema27417_27423,input_checker27418_27424,output_checker27419_27425){
return (function om_bootstrap$util$valid_component_QMARK_(G__27420){
var validate__16151__auto__ = ufv___27421.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27420], null);
var temp__4425__auto___27427 = input_checker27418_27424.call(null,args__16152__auto___27426);
if(cljs.core.truth_(temp__4425__auto___27427)){
var error__16153__auto___27428 = temp__4425__auto___27427;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__16153__auto___27428)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27417_27423,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27426,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27428], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var child = G__27420;
while(true){
var or__11348__auto__ = typeof child === 'string';
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = typeof child === 'number';
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27429 = output_checker27419_27425.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27429)){
var error__16153__auto___27430 = temp__4425__auto___27429;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__16153__auto___27430)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27416_27422,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27430], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27421,output_schema27416_27422,input_schema27417_27423,input_checker27418_27424,output_checker27419_27425))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27416_27422,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27417_27423], null)));
var ufv___27436 = schema.utils.use_fn_validation;
var output_schema27431_27437 = schema.core.Bool;
var input_schema27432_27438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker27433_27439 = schema.core.checker.call(null,input_schema27432_27438);
var output_checker27434_27440 = schema.core.checker.call(null,output_schema27431_27437);
/**
 * Inputs: [children]
 * Returns: s/Bool
 * 
 * Returns true if the supplied sequence contains some valid React component,
 * false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___27436,output_schema27431_27437,input_schema27432_27438,input_checker27433_27439,output_checker27434_27440){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__27435){
var validate__16151__auto__ = ufv___27436.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___27441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27435], null);
var temp__4425__auto___27442 = input_checker27433_27439.call(null,args__16152__auto___27441);
if(cljs.core.truth_(temp__4425__auto___27442)){
var error__16153__auto___27443 = temp__4425__auto___27442;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__16153__auto___27443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27432_27438,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___27441,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27443], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var children = G__27435;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___27444 = output_checker27434_27440.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___27444)){
var error__16153__auto___27445 = temp__4425__auto___27444;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__16153__auto___27445)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27431_27437,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___27445], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___27436,output_schema27431_27437,input_schema27432_27438,input_checker27433_27439,output_checker27434_27440))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27431_27437,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27432_27438], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 * function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__11336__auto__ = l;
if(cljs.core.truth_(and__11336__auto__)){
return r;
} else {
return and__11336__auto__;
}
})())){
return (function() { 
var G__27446__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__27446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27447__i = 0, G__27447__a = new Array(arguments.length -  0);
while (G__27447__i < G__27447__a.length) {G__27447__a[G__27447__i] = arguments[G__27447__i + 0]; ++G__27447__i;}
  args = new cljs.core.IndexedSeq(G__27447__a,0);
} 
return G__27446__delegate.call(this,args);};
G__27446.cljs$lang$maxFixedArity = 0;
G__27446.cljs$lang$applyTo = (function (arglist__27448){
var args = cljs.core.seq(arglist__27448);
return G__27446__delegate(args);
});
G__27446.cljs$core$IFn$_invoke$arity$variadic = G__27446__delegate;
return G__27446;
})()
;
} else {
var or__11348__auto__ = l;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 * do a decent job with event handlers as well; currently only
 * handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 * prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__11348__auto__ = l;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 * according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(){
var argseq__12388__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__12388__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq27449){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27449));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = (function (){var obj27457 = {};
return obj27457;
})();
var seq__27458_27462 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__27459_27463 = null;
var count__27460_27464 = (0);
var i__27461_27465 = (0);
while(true){
if((i__27461_27465 < count__27460_27464)){
var k_27466 = cljs.core._nth.call(null,chunk__27459_27463,i__27461_27465);
if(cljs.core.truth_(arr.hasOwnProperty(k_27466))){
(ret[k_27466] = (arr[k_27466]));
} else {
}

var G__27467 = seq__27458_27462;
var G__27468 = chunk__27459_27463;
var G__27469 = count__27460_27464;
var G__27470 = (i__27461_27465 + (1));
seq__27458_27462 = G__27467;
chunk__27459_27463 = G__27468;
count__27460_27464 = G__27469;
i__27461_27465 = G__27470;
continue;
} else {
var temp__4425__auto___27471 = cljs.core.seq.call(null,seq__27458_27462);
if(temp__4425__auto___27471){
var seq__27458_27472__$1 = temp__4425__auto___27471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27458_27472__$1)){
var c__12133__auto___27473 = cljs.core.chunk_first.call(null,seq__27458_27472__$1);
var G__27474 = cljs.core.chunk_rest.call(null,seq__27458_27472__$1);
var G__27475 = c__12133__auto___27473;
var G__27476 = cljs.core.count.call(null,c__12133__auto___27473);
var G__27477 = (0);
seq__27458_27462 = G__27474;
chunk__27459_27463 = G__27475;
count__27460_27464 = G__27476;
i__27461_27465 = G__27477;
continue;
} else {
var k_27478 = cljs.core.first.call(null,seq__27458_27472__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_27478))){
(ret[k_27478] = (arr[k_27478]));
} else {
}

var G__27479 = cljs.core.next.call(null,seq__27458_27472__$1);
var G__27480 = null;
var G__27481 = (0);
var G__27482 = (0);
seq__27458_27462 = G__27479;
chunk__27459_27463 = G__27480;
count__27460_27464 = G__27481;
i__27461_27465 = G__27482;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(){
var G__27484 = arguments.length;
switch (G__27484) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 * and calls the constructor to clone the React component.
 * 
 * Requires that the supplied child has an Om cursor attached to it!
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 * generated by Om. Merges the supplied properties into the -props
 * field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 * will have any props provided by extra-props merged in. Props are
 * merged in the same manner as merge-props, so props like :class will
 * be merged intelligently.
 * 
 * extra-props can be a function of the old props that returns new
 * props, OR it can be a map of props.
 * 
 * If the supplied child is an Om component, any supplied extra
 * properties will be merged into the underlying cursor and accessible
 * in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(){
var G__27487 = arguments.length;
switch (G__27487) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map
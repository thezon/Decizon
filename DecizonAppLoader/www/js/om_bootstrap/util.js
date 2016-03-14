// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('goog.object');
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
var temp__4124__auto__ = (function (){var and__10400__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__10400__auto__){
return k__GT_fn.call(null,k);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__10412__auto__ = m1;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___19282 = schema.utils.use_fn_validation;
var output_schema19277_19283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema19278_19284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker19279_19285 = schema.core.checker.call(null,input_schema19278_19284);
var output_checker19280_19286 = schema.core.checker.call(null,output_schema19277_19283);
/**
 * Inputs: [x :- s/Any]
 * Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___19282,output_schema19277_19283,input_schema19278_19284,input_checker19279_19285,output_checker19280_19286){
return (function om_bootstrap$util$collectify(G__19281){
var validate__11904__auto__ = ufv___19282.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19281], null);
var temp__4126__auto___19288 = input_checker19279_19285.call(null,args__11905__auto___19287);
if(cljs.core.truth_(temp__4126__auto___19288)){
var error__11906__auto___19289 = temp__4126__auto___19288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11906__auto___19289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19289,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19287,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19278_19284,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var x = G__19281;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19290 = output_checker19280_19286.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19290)){
var error__11906__auto___19291 = temp__4126__auto___19290;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11906__auto___19291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19291,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19277_19283,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19282,output_schema19277_19283,input_schema19278_19284,input_checker19279_19285,output_checker19280_19286))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema19277_19283,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19278_19284], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 * the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___19297 = schema.utils.use_fn_validation;
var output_schema19292_19298 = schema.core.Bool;
var input_schema19293_19299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker19294_19300 = schema.core.checker.call(null,input_schema19293_19299);
var output_checker19295_19301 = schema.core.checker.call(null,output_schema19292_19298);
/**
 * Inputs: [x]
 * Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___19297,output_schema19292_19298,input_schema19293_19299,input_checker19294_19300,output_checker19295_19301){
return (function om_bootstrap$util$om_component_QMARK_(G__19296){
var validate__11904__auto__ = ufv___19297.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19296], null);
var temp__4126__auto___19303 = input_checker19294_19300.call(null,args__11905__auto___19302);
if(cljs.core.truth_(temp__4126__auto___19303)){
var error__11906__auto___19304 = temp__4126__auto___19303;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__11906__auto___19304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19304,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19302,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19293_19299,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var x = G__19296;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19305 = output_checker19295_19301.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19305)){
var error__11906__auto___19306 = temp__4126__auto___19305;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__11906__auto___19306)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19306,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19292_19298,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19297,output_schema19292_19298,input_schema19293_19299,input_checker19294_19300,output_checker19295_19301))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19292_19298,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19293_19299], null)));
var ufv___19312 = schema.utils.use_fn_validation;
var output_schema19307_19313 = schema.core.Bool;
var input_schema19308_19314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker19309_19315 = schema.core.checker.call(null,input_schema19308_19314);
var output_checker19310_19316 = schema.core.checker.call(null,output_schema19307_19313);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * TODO: Once Om updates its externs to include this file, we can
 * remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___19312,output_schema19307_19313,input_schema19308_19314,input_checker19309_19315,output_checker19310_19316){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__19311){
var validate__11904__auto__ = ufv___19312.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19311], null);
var temp__4126__auto___19318 = input_checker19309_19315.call(null,args__11905__auto___19317);
if(cljs.core.truth_(temp__4126__auto___19318)){
var error__11906__auto___19319 = temp__4126__auto___19318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11906__auto___19319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19319,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19317,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19308_19314,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var child = G__19311;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19320 = output_checker19310_19316.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19320)){
var error__11906__auto___19321 = temp__4126__auto___19320;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11906__auto___19321)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19321,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19307_19313,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19312,output_schema19307_19313,input_schema19308_19314,input_checker19309_19315,output_checker19310_19316))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19307_19313,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19308_19314], null)));
var ufv___19327 = schema.utils.use_fn_validation;
var output_schema19322_19328 = schema.core.Bool;
var input_schema19323_19329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker19324_19330 = schema.core.checker.call(null,input_schema19323_19329);
var output_checker19325_19331 = schema.core.checker.call(null,output_schema19322_19328);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * Returns true if the supplied argument is a valid React component,
 * false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___19327,output_schema19322_19328,input_schema19323_19329,input_checker19324_19330,output_checker19325_19331){
return (function om_bootstrap$util$valid_component_QMARK_(G__19326){
var validate__11904__auto__ = ufv___19327.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19326], null);
var temp__4126__auto___19333 = input_checker19324_19330.call(null,args__11905__auto___19332);
if(cljs.core.truth_(temp__4126__auto___19333)){
var error__11906__auto___19334 = temp__4126__auto___19333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11906__auto___19334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19334,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19332,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19323_19329,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var child = G__19326;
while(true){
var or__10412__auto__ = typeof child === 'string';
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = typeof child === 'number';
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19335 = output_checker19325_19331.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19335)){
var error__11906__auto___19336 = temp__4126__auto___19335;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11906__auto___19336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19336,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19322_19328,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19327,output_schema19322_19328,input_schema19323_19329,input_checker19324_19330,output_checker19325_19331))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19322_19328,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19323_19329], null)));
var ufv___19342 = schema.utils.use_fn_validation;
var output_schema19337_19343 = schema.core.Bool;
var input_schema19338_19344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker19339_19345 = schema.core.checker.call(null,input_schema19338_19344);
var output_checker19340_19346 = schema.core.checker.call(null,output_schema19337_19343);
/**
 * Inputs: [children]
 * Returns: s/Bool
 * 
 * Returns true if the supplied sequence contains some valid React component,
 * false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___19342,output_schema19337_19343,input_schema19338_19344,input_checker19339_19345,output_checker19340_19346){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__19341){
var validate__11904__auto__ = ufv___19342.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19341], null);
var temp__4126__auto___19348 = input_checker19339_19345.call(null,args__11905__auto___19347);
if(cljs.core.truth_(temp__4126__auto___19348)){
var error__11906__auto___19349 = temp__4126__auto___19348;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11906__auto___19349)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19349,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19347,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19338_19344,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var children = G__19341;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19350 = output_checker19340_19346.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19350)){
var error__11906__auto___19351 = temp__4126__auto___19350;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11906__auto___19351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19351,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19337_19343,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19342,output_schema19337_19343,input_schema19338_19344,input_checker19339_19345,output_checker19340_19346))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19337_19343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19338_19344], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 * function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__10400__auto__ = l;
if(cljs.core.truth_(and__10400__auto__)){
return r;
} else {
return and__10400__auto__;
}
})())){
return (function() { 
var G__19352__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__19352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19353__i = 0, G__19353__a = new Array(arguments.length -  0);
while (G__19353__i < G__19353__a.length) {G__19353__a[G__19353__i] = arguments[G__19353__i + 0]; ++G__19353__i;}
  args = new cljs.core.IndexedSeq(G__19353__a,0);
} 
return G__19352__delegate.call(this,args);};
G__19352.cljs$lang$maxFixedArity = 0;
G__19352.cljs$lang$applyTo = (function (arglist__19354){
var args = cljs.core.seq(arglist__19354);
return G__19352__delegate(args);
});
G__19352.cljs$core$IFn$_invoke$arity$variadic = G__19352__delegate;
return G__19352;
})()
;
} else {
var or__10412__auto__ = l;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
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
var or__10412__auto__ = l;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
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
var argseq__11452__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__11452__auto__);
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq19355){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19355));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = (function (){var obj19363 = {};
return obj19363;
})();
var seq__19364_19368 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__19365_19369 = null;
var count__19366_19370 = (0);
var i__19367_19371 = (0);
while(true){
if((i__19367_19371 < count__19366_19370)){
var k_19372 = cljs.core._nth.call(null,chunk__19365_19369,i__19367_19371);
if(cljs.core.truth_(arr.hasOwnProperty(k_19372))){
(ret[k_19372] = (arr[k_19372]));
} else {
}

var G__19373 = seq__19364_19368;
var G__19374 = chunk__19365_19369;
var G__19375 = count__19366_19370;
var G__19376 = (i__19367_19371 + (1));
seq__19364_19368 = G__19373;
chunk__19365_19369 = G__19374;
count__19366_19370 = G__19375;
i__19367_19371 = G__19376;
continue;
} else {
var temp__4126__auto___19377 = cljs.core.seq.call(null,seq__19364_19368);
if(temp__4126__auto___19377){
var seq__19364_19378__$1 = temp__4126__auto___19377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19364_19378__$1)){
var c__11197__auto___19379 = cljs.core.chunk_first.call(null,seq__19364_19378__$1);
var G__19380 = cljs.core.chunk_rest.call(null,seq__19364_19378__$1);
var G__19381 = c__11197__auto___19379;
var G__19382 = cljs.core.count.call(null,c__11197__auto___19379);
var G__19383 = (0);
seq__19364_19368 = G__19380;
chunk__19365_19369 = G__19381;
count__19366_19370 = G__19382;
i__19367_19371 = G__19383;
continue;
} else {
var k_19384 = cljs.core.first.call(null,seq__19364_19378__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_19384))){
(ret[k_19384] = (arr[k_19384]));
} else {
}

var G__19385 = cljs.core.next.call(null,seq__19364_19378__$1);
var G__19386 = null;
var G__19387 = (0);
var G__19388 = (0);
seq__19364_19368 = G__19385;
chunk__19365_19369 = G__19386;
count__19366_19370 = G__19387;
i__19367_19371 = G__19388;
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
var G__19390 = arguments.length;
switch (G__19390) {
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
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4126__auto__)){
var children = temp__4126__auto__;
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
var G__19393 = arguments.length;
switch (G__19393) {
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
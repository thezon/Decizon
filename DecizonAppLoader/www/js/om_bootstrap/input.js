// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('clojure.string');
goog.require('om.core');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
 * Helps render feedback icons.
 */
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
 * Input fields that match these bad dawgs:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
 */
om_bootstrap.input.Input = om_bootstrap.types.bootstrap.call(null,cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false)));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___25376 = schema.utils.use_fn_validation;
var output_schema25367_25377 = schema.core.Str;
var input_schema25368_25378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);
var input_checker25369_25379 = schema.core.checker.call(null,input_schema25368_25378);
var output_checker25370_25380 = schema.core.checker.call(null,output_schema25367_25377);
/**
 * Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
 * Returns: s/Str
 * 
 * Mimics the class-set behavior from React. Pass in a map of
 * potential class to Boolean; you'll get back a class string that
 * represents the final class to apply.
 * 
 * TODO: Use class-set from om-tools.
 */
om_bootstrap.input.class_set = ((function (ufv___25376,output_schema25367_25377,input_schema25368_25378,input_checker25369_25379,output_checker25370_25380){
return (function om_bootstrap$input$class_set(G__25371){
var validate__11904__auto__ = ufv___25376.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25371], null);
var temp__4126__auto___25382 = input_checker25369_25379.call(null,args__11905__auto___25381);
if(cljs.core.truth_(temp__4126__auto___25382)){
var error__11906__auto___25383 = temp__4126__auto___25382;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11906__auto___25383)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25383,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25381,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25368_25378,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var klasses = G__25371;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__11904__auto__,ufv___25376,output_schema25367_25377,input_schema25368_25378,input_checker25369_25379,output_checker25370_25380){
return (function (p__25374){
var vec__25375 = p__25374;
var k = cljs.core.nth.call(null,vec__25375,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__25375,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__11904__auto__,ufv___25376,output_schema25367_25377,input_schema25368_25378,input_checker25369_25379,output_checker25370_25380))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25384 = output_checker25370_25380.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25384)){
var error__11906__auto___25385 = temp__4126__auto___25384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11906__auto___25385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25385,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25367_25377,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25376,output_schema25367_25377,input_schema25368_25378,input_checker25369_25379,output_checker25370_25380))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema25367_25377,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25368_25378], null)));
var ufv___25391 = schema.utils.use_fn_validation;
var output_schema25386_25392 = om_bootstrap.types.Component;
var input_schema25387_25393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);
var input_checker25388_25394 = schema.core.checker.call(null,input_schema25387_25393);
var output_checker25389_25395 = schema.core.checker.call(null,output_schema25386_25392);
/**
 * Inputs: [glyph-name :- s/Str]
 * Returns: t/Component
 * 
 * To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___25391,output_schema25386_25392,input_schema25387_25393,input_checker25388_25394,output_checker25389_25395){
return (function om_bootstrap$input$glyph(G__25390){
var validate__11904__auto__ = ufv___25391.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25390], null);
var temp__4126__auto___25397 = input_checker25388_25394.call(null,args__11905__auto___25396);
if(cljs.core.truth_(temp__4126__auto___25397)){
var error__11906__auto___25398 = temp__4126__auto___25397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11906__auto___25398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25398,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25396,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25387_25393,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var glyph_name = G__25390;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25399 = output_checker25389_25395.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25399)){
var error__11906__auto___25400 = temp__4126__auto___25399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11906__auto___25400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25400,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25386_25392,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25391,output_schema25386_25392,input_schema25387_25393,input_checker25388_25394,output_checker25389_25395))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema25386_25392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25387_25393], null)));
var ufv___25414 = schema.utils.use_fn_validation;
var output_schema25401_25415 = om_bootstrap.types.Component;
var input_schema25402_25416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker25403_25417 = schema.core.checker.call(null,input_schema25402_25416);
var output_checker25404_25418 = schema.core.checker.call(null,output_schema25401_25415);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 * Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___25414,output_schema25401_25415,input_schema25402_25416,input_checker25403_25417,output_checker25404_25418){
return (function om_bootstrap$input$render_icon(G__25405){
var validate__11904__auto__ = ufv___25414.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25405], null);
var temp__4126__auto___25420 = input_checker25403_25417.call(null,args__11905__auto___25419);
if(cljs.core.truth_(temp__4126__auto___25420)){
var error__11906__auto___25421 = temp__4126__auto___25420;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11906__auto___25421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25421,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25419,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25402_25416,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25411 = G__25405;
var map__25412 = G__25411;
var map__25412__$1 = ((cljs.core.seq_QMARK_.call(null,map__25412))?cljs.core.apply.call(null,cljs.core.hash_map,map__25412):map__25412);
var bs_style = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var feedback_QMARK_ = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var G__25411__$1 = G__25411;
while(true){
var map__25413 = G__25411__$1;
var map__25413__$1 = ((cljs.core.seq_QMARK_.call(null,map__25413))?cljs.core.apply.call(null,cljs.core.hash_map,map__25413):map__25413);
var bs_style__$1 = cljs.core.get.call(null,map__25413__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var feedback_QMARK___$1 = cljs.core.get.call(null,map__25413__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25422 = output_checker25404_25418.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25422)){
var error__11906__auto___25423 = temp__4126__auto___25422;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11906__auto___25423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25423,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25401_25415,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25414,output_schema25401_25415,input_schema25402_25416,input_checker25403_25417,output_checker25404_25418))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema25401_25415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25402_25416], null)));
var ufv___25429 = schema.utils.use_fn_validation;
var output_schema25424_25430 = schema.core.Any;
var input_schema25425_25431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);
var input_checker25426_25432 = schema.core.checker.call(null,input_schema25425_25431);
var output_checker25427_25433 = schema.core.checker.call(null,output_schema25424_25430);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___25429,output_schema25424_25430,input_schema25425_25431,input_checker25426_25432,output_checker25427_25433){
return (function om_bootstrap$input$render_help(G__25428){
var validate__11904__auto__ = ufv___25429.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25428], null);
var temp__4126__auto___25435 = input_checker25426_25432.call(null,args__11905__auto___25434);
if(cljs.core.truth_(temp__4126__auto___25435)){
var error__11906__auto___25436 = temp__4126__auto___25435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11906__auto___25436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25436,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25434,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25425_25431,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var help = G__25428;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25437 = output_checker25427_25433.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25437)){
var error__11906__auto___25438 = temp__4126__auto___25437;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11906__auto___25438)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25438,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25424_25430,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25429,output_schema25424_25430,input_schema25425_25431,input_checker25426_25432,output_checker25427_25433))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema25424_25430,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25425_25431], null)));
var ufv___25453 = schema.utils.use_fn_validation;
var output_schema25439_25454 = schema.core.Any;
var input_schema25440_25455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);
var input_checker25441_25456 = schema.core.checker.call(null,input_schema25440_25455);
var output_checker25442_25457 = schema.core.checker.call(null,output_schema25439_25454);
/**
 * Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
 * 
 * Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___25453,output_schema25439_25454,input_schema25440_25455,input_checker25441_25456,output_checker25442_25457){
return (function om_bootstrap$input$render_input_group(G__25443,G__25444){
var validate__11904__auto__ = ufv___25453.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25443,G__25444], null);
var temp__4126__auto___25459 = input_checker25441_25456.call(null,args__11905__auto___25458);
if(cljs.core.truth_(temp__4126__auto___25459)){
var error__11906__auto___25460 = temp__4126__auto___25459;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11906__auto___25460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25460,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25458,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25440_25455,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25450 = G__25443;
var map__25451 = G__25450;
var map__25451__$1 = ((cljs.core.seq_QMARK_.call(null,map__25451))?cljs.core.apply.call(null,cljs.core.hash_map,map__25451):map__25451);
var addon_after = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_before = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var items = G__25444;
var G__25450__$1 = G__25450;
var items__$1 = items;
while(true){
var map__25452 = G__25450__$1;
var map__25452__$1 = ((cljs.core.seq_QMARK_.call(null,map__25452))?cljs.core.apply.call(null,cljs.core.hash_map,map__25452):map__25452);
var addon_after__$1 = cljs.core.get.call(null,map__25452__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_before__$1 = cljs.core.get.call(null,map__25452__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__10412__auto__ = addon_before__$1;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return addon_after__$1;
}
})())){
return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else {
return items__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25461 = output_checker25442_25457.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25461)){
var error__11906__auto___25462 = temp__4126__auto___25461;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11906__auto___25462)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25462,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25439_25454,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25453,output_schema25439_25454,input_schema25440_25455,input_checker25441_25456,output_checker25442_25457))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema25439_25454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25440_25455], null)));
var ufv___25476 = schema.utils.use_fn_validation;
var output_schema25463_25477 = schema.core.Bool;
var input_schema25464_25478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker25465_25479 = schema.core.checker.call(null,input_schema25464_25478);
var output_checker25466_25480 = schema.core.checker.call(null,output_schema25463_25477);
/**
 * Inputs: [{type :type} :- Input]
 * Returns: s/Bool
 * 
 * Returns true if the supplied input is of type checkbox or radio,
 * false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___25476,output_schema25463_25477,input_schema25464_25478,input_checker25465_25479,output_checker25466_25480){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__25467){
var validate__11904__auto__ = ufv___25476.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25467], null);
var temp__4126__auto___25482 = input_checker25465_25479.call(null,args__11905__auto___25481);
if(cljs.core.truth_(temp__4126__auto___25482)){
var error__11906__auto___25483 = temp__4126__auto___25482;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11906__auto___25483)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25483,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25481,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25464_25478,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25473 = G__25467;
var map__25474 = G__25473;
var map__25474__$1 = ((cljs.core.seq_QMARK_.call(null,map__25474))?cljs.core.apply.call(null,cljs.core.hash_map,map__25474):map__25474);
var type = cljs.core.get.call(null,map__25474__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__25473__$1 = G__25473;
while(true){
var map__25475 = G__25473__$1;
var map__25475__$1 = ((cljs.core.seq_QMARK_.call(null,map__25475))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var type__$1 = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25484 = output_checker25466_25480.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25484)){
var error__11906__auto___25485 = temp__4126__auto___25484;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11906__auto___25485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25485,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25463_25477,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25476,output_schema25463_25477,input_schema25464_25478,input_checker25465_25479,output_checker25466_25480))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema25463_25477,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25464_25478], null)));
var ufv___25500 = schema.utils.use_fn_validation;
var output_schema25486_25501 = om_bootstrap.types.Component;
var input_schema25487_25502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker25488_25503 = schema.core.checker.call(null,input_schema25487_25502);
var output_checker25489_25504 = schema.core.checker.call(null,output_schema25486_25501);
/**
 * Inputs: [{type :type} :- Input children]
 * Returns: t/Component
 * 
 * Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___25500,output_schema25486_25501,input_schema25487_25502,input_checker25488_25503,output_checker25489_25504){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__25490,G__25491){
var validate__11904__auto__ = ufv___25500.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25490,G__25491], null);
var temp__4126__auto___25506 = input_checker25488_25503.call(null,args__11905__auto___25505);
if(cljs.core.truth_(temp__4126__auto___25506)){
var error__11906__auto___25507 = temp__4126__auto___25506;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11906__auto___25507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25507,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25505,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25487_25502,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25497 = G__25490;
var map__25498 = G__25497;
var map__25498__$1 = ((cljs.core.seq_QMARK_.call(null,map__25498))?cljs.core.apply.call(null,cljs.core.hash_map,map__25498):map__25498);
var type = cljs.core.get.call(null,map__25498__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__25491;
var G__25497__$1 = G__25497;
var children__$1 = children;
while(true){
var map__25499 = G__25497__$1;
var map__25499__$1 = ((cljs.core.seq_QMARK_.call(null,map__25499))?cljs.core.apply.call(null,cljs.core.hash_map,map__25499):map__25499);
var type__$1 = cljs.core.get.call(null,map__25499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25508 = output_checker25489_25504.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25508)){
var error__11906__auto___25509 = temp__4126__auto___25508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11906__auto___25509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25509,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25486_25501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25500,output_schema25486_25501,input_schema25487_25502,input_checker25488_25503,output_checker25489_25504))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema25486_25501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25487_25502], null)));
var ufv___25526 = schema.utils.use_fn_validation;
var output_schema25510_25527 = schema.core.Any;
var input_schema25511_25528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);
var input_schema25515_25529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker25512_25530 = schema.core.checker.call(null,input_schema25511_25528);
var output_checker25513_25531 = schema.core.checker.call(null,output_schema25510_25527);
var input_checker25516_25532 = schema.core.checker.call(null,input_schema25515_25529);
var output_checker25517_25533 = schema.core.checker.call(null,output_schema25510_25527);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 * This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533){
return (function om_bootstrap$input$render_label(){
var G__25521 = arguments.length;
switch (G__25521) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533){
return (function (G__25514){
var validate__11904__auto__ = ufv___25526.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25514], null);
var temp__4126__auto___25536 = input_checker25512_25530.call(null,args__11905__auto___25535);
if(cljs.core.truth_(temp__4126__auto___25536)){
var error__11906__auto___25537 = temp__4126__auto___25536;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11906__auto___25537)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25537,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25535,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25511_25528,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var input = G__25514;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25538 = output_checker25513_25531.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25538)){
var error__11906__auto___25539 = temp__4126__auto___25538;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11906__auto___25539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25539,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25510_25527,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533){
return (function (G__25518,G__25519){
var validate__11904__auto__ = ufv___25526.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25518,G__25519], null);
var temp__4126__auto___25541 = input_checker25516_25532.call(null,args__11905__auto___25540);
if(cljs.core.truth_(temp__4126__auto___25541)){
var error__11906__auto___25542 = temp__4126__auto___25541;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11906__auto___25542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25542,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25540,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25515_25529,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25523 = G__25518;
var map__25524 = G__25523;
var map__25524__$1 = ((cljs.core.seq_QMARK_.call(null,map__25524))?cljs.core.apply.call(null,cljs.core.hash_map,map__25524):map__25524);
var input = map__25524__$1;
var lc = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__25519;
var G__25523__$1 = G__25523;
var child__$1 = child;
while(true){
var map__25525 = G__25523__$1;
var map__25525__$1 = ((cljs.core.seq_QMARK_.call(null,map__25525))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var input__$1 = map__25525__$1;
var lc__$1 = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child__$2 = child__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),cljs.core.not.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));
if(cljs.core.truth_(label__$1)){
return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25543 = output_checker25517_25533.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25543)){
var error__11906__auto___25544 = temp__4126__auto___25543;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11906__auto___25544)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25544,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25510_25527,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25526,output_schema25510_25527,input_schema25511_25528,input_schema25515_25529,input_checker25512_25530,output_checker25513_25531,input_checker25516_25532,output_checker25517_25533))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema25510_25527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25511_25528,input_schema25515_25529], null)));
var ufv___25559 = schema.utils.use_fn_validation;
var output_schema25545_25560 = schema.core.Any;
var input_schema25546_25561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker25547_25562 = schema.core.checker.call(null,input_schema25546_25561);
var output_checker25548_25563 = schema.core.checker.call(null,output_schema25545_25560);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___25559,output_schema25545_25560,input_schema25546_25561,input_checker25547_25562,output_checker25548_25563){
return (function om_bootstrap$input$render_wrapper(G__25549,G__25550){
var validate__11904__auto__ = ufv___25559.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25549,G__25550], null);
var temp__4126__auto___25565 = input_checker25547_25562.call(null,args__11905__auto___25564);
if(cljs.core.truth_(temp__4126__auto___25565)){
var error__11906__auto___25566 = temp__4126__auto___25565;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11906__auto___25566)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25566,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25564,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25546_25561,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25556 = G__25549;
var map__25557 = G__25556;
var map__25557__$1 = ((cljs.core.seq_QMARK_.call(null,map__25557))?cljs.core.apply.call(null,cljs.core.hash_map,map__25557):map__25557);
var wc = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__25550;
var G__25556__$1 = G__25556;
var child__$1 = child;
while(true){
var map__25558 = G__25556__$1;
var map__25558__$1 = ((cljs.core.seq_QMARK_.call(null,map__25558))?cljs.core.apply.call(null,cljs.core.hash_map,map__25558):map__25558);
var wc__$1 = cljs.core.get.call(null,map__25558__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25567 = output_checker25548_25563.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25567)){
var error__11906__auto___25568 = temp__4126__auto___25567;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11906__auto___25568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25568,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25545_25560,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25559,output_schema25545_25560,input_schema25546_25561,input_checker25547_25562,output_checker25548_25563))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema25545_25560,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25546_25561], null)));
var ufv___25583 = schema.utils.use_fn_validation;
var output_schema25569_25584 = om_bootstrap.types.Component;
var input_schema25570_25585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker25571_25586 = schema.core.checker.call(null,input_schema25570_25585);
var output_checker25572_25587 = schema.core.checker.call(null,output_schema25569_25584);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 * Returns: t/Component
 * 
 * Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___25583,output_schema25569_25584,input_schema25570_25585,input_checker25571_25586,output_checker25572_25587){
return (function om_bootstrap$input$render_form_group(G__25573,G__25574){
var validate__11904__auto__ = ufv___25583.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25573,G__25574], null);
var temp__4126__auto___25589 = input_checker25571_25586.call(null,args__11905__auto___25588);
if(cljs.core.truth_(temp__4126__auto___25589)){
var error__11906__auto___25590 = temp__4126__auto___25589;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11906__auto___25590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25590,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25570_25585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var G__25580 = G__25573;
var map__25581 = G__25580;
var map__25581__$1 = ((cljs.core.seq_QMARK_.call(null,map__25581))?cljs.core.apply.call(null,cljs.core.hash_map,map__25581):map__25581);
var input = map__25581__$1;
var bs_style = cljs.core.get.call(null,map__25581__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__25581__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__25574;
var G__25580__$1 = G__25580;
var children__$1 = children;
while(true){
var map__25582 = G__25580__$1;
var map__25582__$1 = ((cljs.core.seq_QMARK_.call(null,map__25582))?cljs.core.apply.call(null,cljs.core.hash_map,map__25582):map__25582);
var input__$1 = map__25582__$1;
var bs_style__$1 = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25591 = output_checker25572_25587.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25591)){
var error__11906__auto___25592 = temp__4126__auto___25591;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11906__auto___25592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25592,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25569_25584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25583,output_schema25569_25584,input_schema25570_25585,input_checker25571_25586,output_checker25572_25587))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema25569_25584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25570_25585], null)));
var ufv___25602 = schema.utils.use_fn_validation;
var output_schema25593_25603 = om_bootstrap.types.Component;
var input_schema25594_25604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker25595_25605 = schema.core.checker.call(null,input_schema25594_25604);
var output_checker25596_25606 = schema.core.checker.call(null,output_schema25593_25603);
/**
 * Inputs: [input :- Input attrs children]
 * Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___25602,output_schema25593_25603,input_schema25594_25604,input_checker25595_25605,output_checker25596_25606){
return (function om_bootstrap$input$render_input(G__25597,G__25598,G__25599){
var validate__11904__auto__ = ufv___25602.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25607 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25597,G__25598,G__25599], null);
var temp__4126__auto___25608 = input_checker25595_25605.call(null,args__11905__auto___25607);
if(cljs.core.truth_(temp__4126__auto___25608)){
var error__11906__auto___25609 = temp__4126__auto___25608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11906__auto___25609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25609,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25607,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25594_25604,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var input = G__25597;
var attrs = G__25598;
var children = G__25599;
while(true){
var props = ((function (validate__11904__auto__,ufv___25602,output_schema25593_25603,input_schema25594_25604,input_checker25595_25605,output_checker25596_25606){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__11904__auto__,ufv___25602,output_schema25593_25603,input_schema25594_25604,input_checker25595_25605,output_checker25596_25606))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__25601 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__25601) {
case "select":
return om_tools.dom.element.call(null,React.DOM.select,props.call(null,"form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25611 = output_checker25596_25606.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25611)){
var error__11906__auto___25612 = temp__4126__auto___25611;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11906__auto___25612)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25612,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25593_25603,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25602,output_schema25593_25603,input_schema25594_25604,input_checker25595_25605,output_checker25596_25606))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema25593_25603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25594_25604], null)));
var ufv___25622 = schema.utils.use_fn_validation;
var output_schema25613_25623 = om_bootstrap.types.Component;
var input_schema25614_25624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker25615_25625 = schema.core.checker.call(null,input_schema25614_25624);
var output_checker25616_25626 = schema.core.checker.call(null,output_schema25613_25623);
/**
 * Inputs: [opts :- Input & children]
 * Returns: t/Component
 * 
 * Returns an input component. This currently does NOT handle any of
 * the default values or validation messages that we'll need to make
 * this work, though.
 */
om_bootstrap.input.input = ((function (ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626){
return (function om_bootstrap$input$input(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626){
return (function (G__25617,rest25618){
var validate__11904__auto__ = ufv___25622.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25627 = cljs.core.list_STAR_.call(null,G__25617,rest25618);
var temp__4126__auto___25628 = input_checker25615_25625.call(null,args__11905__auto___25627);
if(cljs.core.truth_(temp__4126__auto___25628)){
var error__11906__auto___25629 = temp__4126__auto___25628;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11906__auto___25629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25629,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25627,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25614_25624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25617;
var children = rest25618;
while(true){
var vec__25621 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__25621,(0),null);
var attrs = cljs.core.nth.call(null,vec__25621,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25630 = output_checker25616_25626.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25630)){
var error__11906__auto___25631 = temp__4126__auto___25630;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11906__auto___25631)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25631,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25613_25623,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626){
return (function (seq25619){
var G__25620 = cljs.core.first.call(null,seq25619);
var seq25619__$1 = cljs.core.next.call(null,seq25619);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__25620,seq25619__$1);
});})(ufv___25622,output_schema25613_25623,input_schema25614_25624,input_checker25615_25625,output_checker25616_25626))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema25613_25623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25614_25624], null)));
var ufv___25641 = schema.utils.use_fn_validation;
var output_schema25632_25642 = om_bootstrap.types.Component;
var input_schema25633_25643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker25634_25644 = schema.core.checker.call(null,input_schema25633_25643);
var output_checker25635_25645 = schema.core.checker.call(null,output_schema25632_25642);
/**
 * Inputs: [opts :- Radio]
 * Returns: t/Component
 * 
 * Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___25641,output_schema25632_25642,input_schema25633_25643,input_checker25634_25644,output_checker25635_25645){
return (function om_bootstrap$input$radio_option(G__25636){
var validate__11904__auto__ = ufv___25641.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25636], null);
var temp__4126__auto___25647 = input_checker25634_25644.call(null,args__11905__auto___25646);
if(cljs.core.truth_(temp__4126__auto___25647)){
var error__11906__auto___25648 = temp__4126__auto___25647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11906__auto___25648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25648,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25646,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25633_25643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__25636;
while(true){
var vec__25639 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__25639,(0),null);
var props = cljs.core.nth.call(null,vec__25639,(1),null);
var map__25640 = bs;
var map__25640__$1 = ((cljs.core.seq_QMARK_.call(null,map__25640))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);
var inline_QMARK_ = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var checked_QMARK_ = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var label = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25649 = output_checker25635_25645.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25649)){
var error__11906__auto___25650 = temp__4126__auto___25649;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11906__auto___25650)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25650,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25632_25642,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25641,output_schema25632_25642,input_schema25633_25643,input_checker25634_25644,output_checker25635_25645))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema25632_25642,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25633_25643], null)));
var ufv___25673 = schema.utils.use_fn_validation;
var output_schema25651_25674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema25652_25675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker25653_25676 = schema.core.checker.call(null,input_schema25652_25675);
var output_checker25654_25677 = schema.core.checker.call(null,output_schema25651_25674);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 * Returns: [t/Component]
 * 
 * Returns a sequence of options for use as the children of a select
 * input.
 */
om_bootstrap.input.options = ((function (ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677){
return (function om_bootstrap$input$options(G__25655,G__25656){
var validate__11904__auto__ = ufv___25673.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___25678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25655,G__25656], null);
var temp__4126__auto___25679 = input_checker25653_25676.call(null,args__11905__auto___25678);
if(cljs.core.truth_(temp__4126__auto___25679)){
var error__11906__auto___25680 = temp__4126__auto___25679;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11906__auto___25680)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25680,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___25678,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25652_25675,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var header = G__25655;
var opts = G__25656;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__11166__auto__ = ((function (validate__11904__auto__,ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677){
return (function om_bootstrap$input$options_$_iter__25665(s__25666){
return (new cljs.core.LazySeq(null,((function (validate__11904__auto__,ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677){
return (function (){
var s__25666__$1 = s__25666;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25666__$1);
if(temp__4126__auto__){
var s__25666__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25666__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__25666__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__25668 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__25667 = (0);
while(true){
if((i__25667 < size__11165__auto__)){
var vec__25671 = cljs.core._nth.call(null,c__11164__auto__,i__25667);
var v = cljs.core.nth.call(null,vec__25671,(0),null);
var label = cljs.core.nth.call(null,vec__25671,(1),null);
cljs.core.chunk_append.call(null,b__25668,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__25681 = (i__25667 + (1));
i__25667 = G__25681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25668),om_bootstrap$input$options_$_iter__25665.call(null,cljs.core.chunk_rest.call(null,s__25666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25668),null);
}
} else {
var vec__25672 = cljs.core.first.call(null,s__25666__$2);
var v = cljs.core.nth.call(null,vec__25672,(0),null);
var label = cljs.core.nth.call(null,vec__25672,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__25665.call(null,cljs.core.rest.call(null,s__25666__$2)));
}
} else {
return null;
}
break;
}
});})(validate__11904__auto__,ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677))
,null,null));
});})(validate__11904__auto__,ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677))
;
return iter__11166__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___25682 = output_checker25654_25677.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___25682)){
var error__11906__auto___25683 = temp__4126__auto___25682;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11906__auto___25683)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___25683,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25651_25674,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___25673,output_schema25651_25674,input_schema25652_25675,input_checker25653_25676,output_checker25654_25677))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema25651_25674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25652_25675], null)));

//# sourceMappingURL=input.js.map
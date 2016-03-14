// Compiled by ClojureScript 0.0-3291 {}
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
var ufv___33515 = schema.utils.use_fn_validation;
var output_schema33506_33516 = schema.core.Str;
var input_schema33507_33517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);
var input_checker33508_33518 = schema.core.checker.call(null,input_schema33507_33517);
var output_checker33509_33519 = schema.core.checker.call(null,output_schema33506_33516);
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
om_bootstrap.input.class_set = ((function (ufv___33515,output_schema33506_33516,input_schema33507_33517,input_checker33508_33518,output_checker33509_33519){
return (function om_bootstrap$input$class_set(G__33510){
var validate__16151__auto__ = ufv___33515.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33510], null);
var temp__4425__auto___33521 = input_checker33508_33518.call(null,args__16152__auto___33520);
if(cljs.core.truth_(temp__4425__auto___33521)){
var error__16153__auto___33522 = temp__4425__auto___33521;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__16153__auto___33522)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33507_33517,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33520,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33522], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var klasses = G__33510;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__16151__auto__,ufv___33515,output_schema33506_33516,input_schema33507_33517,input_checker33508_33518,output_checker33509_33519){
return (function (p__33513){
var vec__33514 = p__33513;
var k = cljs.core.nth.call(null,vec__33514,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__33514,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__16151__auto__,ufv___33515,output_schema33506_33516,input_schema33507_33517,input_checker33508_33518,output_checker33509_33519))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33523 = output_checker33509_33519.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33523)){
var error__16153__auto___33524 = temp__4425__auto___33523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__16153__auto___33524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33506_33516,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33524], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33515,output_schema33506_33516,input_schema33507_33517,input_checker33508_33518,output_checker33509_33519))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema33506_33516,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33507_33517], null)));
var ufv___33530 = schema.utils.use_fn_validation;
var output_schema33525_33531 = om_bootstrap.types.Component;
var input_schema33526_33532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);
var input_checker33527_33533 = schema.core.checker.call(null,input_schema33526_33532);
var output_checker33528_33534 = schema.core.checker.call(null,output_schema33525_33531);
/**
 * Inputs: [glyph-name :- s/Str]
 * Returns: t/Component
 * 
 * To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___33530,output_schema33525_33531,input_schema33526_33532,input_checker33527_33533,output_checker33528_33534){
return (function om_bootstrap$input$glyph(G__33529){
var validate__16151__auto__ = ufv___33530.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33529], null);
var temp__4425__auto___33536 = input_checker33527_33533.call(null,args__16152__auto___33535);
if(cljs.core.truth_(temp__4425__auto___33536)){
var error__16153__auto___33537 = temp__4425__auto___33536;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__16153__auto___33537)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33526_33532,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33535,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33537], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var glyph_name = G__33529;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33538 = output_checker33528_33534.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33538)){
var error__16153__auto___33539 = temp__4425__auto___33538;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__16153__auto___33539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33525_33531,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33539], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33530,output_schema33525_33531,input_schema33526_33532,input_checker33527_33533,output_checker33528_33534))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema33525_33531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33526_33532], null)));
var ufv___33553 = schema.utils.use_fn_validation;
var output_schema33540_33554 = om_bootstrap.types.Component;
var input_schema33541_33555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33542_33556 = schema.core.checker.call(null,input_schema33541_33555);
var output_checker33543_33557 = schema.core.checker.call(null,output_schema33540_33554);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 * Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___33553,output_schema33540_33554,input_schema33541_33555,input_checker33542_33556,output_checker33543_33557){
return (function om_bootstrap$input$render_icon(G__33544){
var validate__16151__auto__ = ufv___33553.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33544], null);
var temp__4425__auto___33559 = input_checker33542_33556.call(null,args__16152__auto___33558);
if(cljs.core.truth_(temp__4425__auto___33559)){
var error__16153__auto___33560 = temp__4425__auto___33559;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__16153__auto___33560)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33541_33555,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33558,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33560], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33550 = G__33544;
var map__33551 = G__33550;
var map__33551__$1 = ((cljs.core.seq_QMARK_.call(null,map__33551))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var feedback_QMARK_ = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var G__33550__$1 = G__33550;
while(true){
var map__33552 = G__33550__$1;
var map__33552__$1 = ((cljs.core.seq_QMARK_.call(null,map__33552))?cljs.core.apply.call(null,cljs.core.hash_map,map__33552):map__33552);
var feedback_QMARK___$1 = cljs.core.get.call(null,map__33552__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style__$1 = cljs.core.get.call(null,map__33552__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33561 = output_checker33543_33557.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33561)){
var error__16153__auto___33562 = temp__4425__auto___33561;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__16153__auto___33562)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33540_33554,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33562], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33553,output_schema33540_33554,input_schema33541_33555,input_checker33542_33556,output_checker33543_33557))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema33540_33554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33541_33555], null)));
var ufv___33568 = schema.utils.use_fn_validation;
var output_schema33563_33569 = schema.core.Any;
var input_schema33564_33570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);
var input_checker33565_33571 = schema.core.checker.call(null,input_schema33564_33570);
var output_checker33566_33572 = schema.core.checker.call(null,output_schema33563_33569);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___33568,output_schema33563_33569,input_schema33564_33570,input_checker33565_33571,output_checker33566_33572){
return (function om_bootstrap$input$render_help(G__33567){
var validate__16151__auto__ = ufv___33568.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33567], null);
var temp__4425__auto___33574 = input_checker33565_33571.call(null,args__16152__auto___33573);
if(cljs.core.truth_(temp__4425__auto___33574)){
var error__16153__auto___33575 = temp__4425__auto___33574;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__16153__auto___33575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33564_33570,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33573,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33575], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var help = G__33567;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33576 = output_checker33566_33572.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33576)){
var error__16153__auto___33577 = temp__4425__auto___33576;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__16153__auto___33577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33563_33569,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33577], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33568,output_schema33563_33569,input_schema33564_33570,input_checker33565_33571,output_checker33566_33572))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema33563_33569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33564_33570], null)));
var ufv___33592 = schema.utils.use_fn_validation;
var output_schema33578_33593 = schema.core.Any;
var input_schema33579_33594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);
var input_checker33580_33595 = schema.core.checker.call(null,input_schema33579_33594);
var output_checker33581_33596 = schema.core.checker.call(null,output_schema33578_33593);
/**
 * Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
 * 
 * Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___33592,output_schema33578_33593,input_schema33579_33594,input_checker33580_33595,output_checker33581_33596){
return (function om_bootstrap$input$render_input_group(G__33582,G__33583){
var validate__16151__auto__ = ufv___33592.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33582,G__33583], null);
var temp__4425__auto___33598 = input_checker33580_33595.call(null,args__16152__auto___33597);
if(cljs.core.truth_(temp__4425__auto___33598)){
var error__16153__auto___33599 = temp__4425__auto___33598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__16153__auto___33599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33579_33594,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33597,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33599], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33589 = G__33582;
var map__33590 = G__33589;
var map__33590__$1 = ((cljs.core.seq_QMARK_.call(null,map__33590))?cljs.core.apply.call(null,cljs.core.hash_map,map__33590):map__33590);
var addon_before = cljs.core.get.call(null,map__33590__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after = cljs.core.get.call(null,map__33590__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var items = G__33583;
var G__33589__$1 = G__33589;
var items__$1 = items;
while(true){
var map__33591 = G__33589__$1;
var map__33591__$1 = ((cljs.core.seq_QMARK_.call(null,map__33591))?cljs.core.apply.call(null,cljs.core.hash_map,map__33591):map__33591);
var addon_before__$1 = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after__$1 = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__11348__auto__ = addon_before__$1;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
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
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33600 = output_checker33581_33596.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33600)){
var error__16153__auto___33601 = temp__4425__auto___33600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__16153__auto___33601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33578_33593,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33601], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33592,output_schema33578_33593,input_schema33579_33594,input_checker33580_33595,output_checker33581_33596))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema33578_33593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33579_33594], null)));
var ufv___33615 = schema.utils.use_fn_validation;
var output_schema33602_33616 = schema.core.Bool;
var input_schema33603_33617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33604_33618 = schema.core.checker.call(null,input_schema33603_33617);
var output_checker33605_33619 = schema.core.checker.call(null,output_schema33602_33616);
/**
 * Inputs: [{type :type} :- Input]
 * Returns: s/Bool
 * 
 * Returns true if the supplied input is of type checkbox or radio,
 * false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___33615,output_schema33602_33616,input_schema33603_33617,input_checker33604_33618,output_checker33605_33619){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__33606){
var validate__16151__auto__ = ufv___33615.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33606], null);
var temp__4425__auto___33621 = input_checker33604_33618.call(null,args__16152__auto___33620);
if(cljs.core.truth_(temp__4425__auto___33621)){
var error__16153__auto___33622 = temp__4425__auto___33621;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__16153__auto___33622)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33603_33617,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33620,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33622], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33612 = G__33606;
var map__33613 = G__33612;
var map__33613__$1 = ((cljs.core.seq_QMARK_.call(null,map__33613))?cljs.core.apply.call(null,cljs.core.hash_map,map__33613):map__33613);
var type = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__33612__$1 = G__33612;
while(true){
var map__33614 = G__33612__$1;
var map__33614__$1 = ((cljs.core.seq_QMARK_.call(null,map__33614))?cljs.core.apply.call(null,cljs.core.hash_map,map__33614):map__33614);
var type__$1 = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33623 = output_checker33605_33619.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33623)){
var error__16153__auto___33624 = temp__4425__auto___33623;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__16153__auto___33624)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33602_33616,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33624], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33615,output_schema33602_33616,input_schema33603_33617,input_checker33604_33618,output_checker33605_33619))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema33602_33616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33603_33617], null)));
var ufv___33639 = schema.utils.use_fn_validation;
var output_schema33625_33640 = om_bootstrap.types.Component;
var input_schema33626_33641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker33627_33642 = schema.core.checker.call(null,input_schema33626_33641);
var output_checker33628_33643 = schema.core.checker.call(null,output_schema33625_33640);
/**
 * Inputs: [{type :type} :- Input children]
 * Returns: t/Component
 * 
 * Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___33639,output_schema33625_33640,input_schema33626_33641,input_checker33627_33642,output_checker33628_33643){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__33629,G__33630){
var validate__16151__auto__ = ufv___33639.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33629,G__33630], null);
var temp__4425__auto___33645 = input_checker33627_33642.call(null,args__16152__auto___33644);
if(cljs.core.truth_(temp__4425__auto___33645)){
var error__16153__auto___33646 = temp__4425__auto___33645;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__16153__auto___33646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33626_33641,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33644,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33646], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33636 = G__33629;
var map__33637 = G__33636;
var map__33637__$1 = ((cljs.core.seq_QMARK_.call(null,map__33637))?cljs.core.apply.call(null,cljs.core.hash_map,map__33637):map__33637);
var type = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__33630;
var G__33636__$1 = G__33636;
var children__$1 = children;
while(true){
var map__33638 = G__33636__$1;
var map__33638__$1 = ((cljs.core.seq_QMARK_.call(null,map__33638))?cljs.core.apply.call(null,cljs.core.hash_map,map__33638):map__33638);
var type__$1 = cljs.core.get.call(null,map__33638__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33647 = output_checker33628_33643.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33647)){
var error__16153__auto___33648 = temp__4425__auto___33647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__16153__auto___33648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33625_33640,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33648], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33639,output_schema33625_33640,input_schema33626_33641,input_checker33627_33642,output_checker33628_33643))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema33625_33640,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33626_33641], null)));
var ufv___33665 = schema.utils.use_fn_validation;
var output_schema33649_33666 = schema.core.Any;
var input_schema33650_33667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);
var input_schema33654_33668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker33651_33669 = schema.core.checker.call(null,input_schema33650_33667);
var output_checker33652_33670 = schema.core.checker.call(null,output_schema33649_33666);
var input_checker33655_33671 = schema.core.checker.call(null,input_schema33654_33668);
var output_checker33656_33672 = schema.core.checker.call(null,output_schema33649_33666);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 * This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672){
return (function om_bootstrap$input$render_label(){
var G__33660 = arguments.length;
switch (G__33660) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672){
return (function (G__33653){
var validate__16151__auto__ = ufv___33665.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33653], null);
var temp__4425__auto___33675 = input_checker33651_33669.call(null,args__16152__auto___33674);
if(cljs.core.truth_(temp__4425__auto___33675)){
var error__16153__auto___33676 = temp__4425__auto___33675;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__16153__auto___33676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33650_33667,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33674,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33676], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var input = G__33653;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33677 = output_checker33652_33670.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33677)){
var error__16153__auto___33678 = temp__4425__auto___33677;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__16153__auto___33678)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33649_33666,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33678], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672){
return (function (G__33657,G__33658){
var validate__16151__auto__ = ufv___33665.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33657,G__33658], null);
var temp__4425__auto___33680 = input_checker33655_33671.call(null,args__16152__auto___33679);
if(cljs.core.truth_(temp__4425__auto___33680)){
var error__16153__auto___33681 = temp__4425__auto___33680;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__16153__auto___33681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33654_33668,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33679,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33681], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33662 = G__33657;
var map__33663 = G__33662;
var map__33663__$1 = ((cljs.core.seq_QMARK_.call(null,map__33663))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);
var input = map__33663__$1;
var lc = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__33658;
var G__33662__$1 = G__33662;
var child__$1 = child;
while(true){
var map__33664 = G__33662__$1;
var map__33664__$1 = ((cljs.core.seq_QMARK_.call(null,map__33664))?cljs.core.apply.call(null,cljs.core.hash_map,map__33664):map__33664);
var input__$1 = map__33664__$1;
var lc__$1 = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"label","label",1718410804));
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
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33682 = output_checker33656_33672.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33682)){
var error__16153__auto___33683 = temp__4425__auto___33682;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__16153__auto___33683)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33649_33666,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33683], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33665,output_schema33649_33666,input_schema33650_33667,input_schema33654_33668,input_checker33651_33669,output_checker33652_33670,input_checker33655_33671,output_checker33656_33672))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema33649_33666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33650_33667,input_schema33654_33668], null)));
var ufv___33698 = schema.utils.use_fn_validation;
var output_schema33684_33699 = schema.core.Any;
var input_schema33685_33700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker33686_33701 = schema.core.checker.call(null,input_schema33685_33700);
var output_checker33687_33702 = schema.core.checker.call(null,output_schema33684_33699);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___33698,output_schema33684_33699,input_schema33685_33700,input_checker33686_33701,output_checker33687_33702){
return (function om_bootstrap$input$render_wrapper(G__33688,G__33689){
var validate__16151__auto__ = ufv___33698.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33688,G__33689], null);
var temp__4425__auto___33704 = input_checker33686_33701.call(null,args__16152__auto___33703);
if(cljs.core.truth_(temp__4425__auto___33704)){
var error__16153__auto___33705 = temp__4425__auto___33704;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__16153__auto___33705)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33685_33700,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33703,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33705], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33695 = G__33688;
var map__33696 = G__33695;
var map__33696__$1 = ((cljs.core.seq_QMARK_.call(null,map__33696))?cljs.core.apply.call(null,cljs.core.hash_map,map__33696):map__33696);
var wc = cljs.core.get.call(null,map__33696__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__33689;
var G__33695__$1 = G__33695;
var child__$1 = child;
while(true){
var map__33697 = G__33695__$1;
var map__33697__$1 = ((cljs.core.seq_QMARK_.call(null,map__33697))?cljs.core.apply.call(null,cljs.core.hash_map,map__33697):map__33697);
var wc__$1 = cljs.core.get.call(null,map__33697__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33706 = output_checker33687_33702.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33706)){
var error__16153__auto___33707 = temp__4425__auto___33706;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__16153__auto___33707)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33684_33699,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33707], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33698,output_schema33684_33699,input_schema33685_33700,input_checker33686_33701,output_checker33687_33702))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema33684_33699,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33685_33700], null)));
var ufv___33722 = schema.utils.use_fn_validation;
var output_schema33708_33723 = om_bootstrap.types.Component;
var input_schema33709_33724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker33710_33725 = schema.core.checker.call(null,input_schema33709_33724);
var output_checker33711_33726 = schema.core.checker.call(null,output_schema33708_33723);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 * Returns: t/Component
 * 
 * Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___33722,output_schema33708_33723,input_schema33709_33724,input_checker33710_33725,output_checker33711_33726){
return (function om_bootstrap$input$render_form_group(G__33712,G__33713){
var validate__16151__auto__ = ufv___33722.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33712,G__33713], null);
var temp__4425__auto___33728 = input_checker33710_33725.call(null,args__16152__auto___33727);
if(cljs.core.truth_(temp__4425__auto___33728)){
var error__16153__auto___33729 = temp__4425__auto___33728;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__16153__auto___33729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33709_33724,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33727,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33729], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var G__33719 = G__33712;
var map__33720 = G__33719;
var map__33720__$1 = ((cljs.core.seq_QMARK_.call(null,map__33720))?cljs.core.apply.call(null,cljs.core.hash_map,map__33720):map__33720);
var input = map__33720__$1;
var bs_style = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__33713;
var G__33719__$1 = G__33719;
var children__$1 = children;
while(true){
var map__33721 = G__33719__$1;
var map__33721__$1 = ((cljs.core.seq_QMARK_.call(null,map__33721))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var input__$1 = map__33721__$1;
var bs_style__$1 = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33730 = output_checker33711_33726.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33730)){
var error__16153__auto___33731 = temp__4425__auto___33730;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__16153__auto___33731)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33708_33723,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33731], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33722,output_schema33708_33723,input_schema33709_33724,input_checker33710_33725,output_checker33711_33726))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema33708_33723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33709_33724], null)));
var ufv___33741 = schema.utils.use_fn_validation;
var output_schema33732_33742 = om_bootstrap.types.Component;
var input_schema33733_33743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker33734_33744 = schema.core.checker.call(null,input_schema33733_33743);
var output_checker33735_33745 = schema.core.checker.call(null,output_schema33732_33742);
/**
 * Inputs: [input :- Input attrs children]
 * Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___33741,output_schema33732_33742,input_schema33733_33743,input_checker33734_33744,output_checker33735_33745){
return (function om_bootstrap$input$render_input(G__33736,G__33737,G__33738){
var validate__16151__auto__ = ufv___33741.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33746 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33736,G__33737,G__33738], null);
var temp__4425__auto___33747 = input_checker33734_33744.call(null,args__16152__auto___33746);
if(cljs.core.truth_(temp__4425__auto___33747)){
var error__16153__auto___33748 = temp__4425__auto___33747;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__16153__auto___33748)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33733_33743,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33746,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33748], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var input = G__33736;
var attrs = G__33737;
var children = G__33738;
while(true){
var props = ((function (validate__16151__auto__,ufv___33741,output_schema33732_33742,input_schema33733_33743,input_checker33734_33744,output_checker33735_33745){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__16151__auto__,ufv___33741,output_schema33732_33742,input_schema33733_33743,input_checker33734_33744,output_checker33735_33745))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__33740 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__33740) {
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
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33750 = output_checker33735_33745.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33750)){
var error__16153__auto___33751 = temp__4425__auto___33750;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__16153__auto___33751)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33732_33742,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33751], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33741,output_schema33732_33742,input_schema33733_33743,input_checker33734_33744,output_checker33735_33745))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema33732_33742,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33733_33743], null)));
var ufv___33761 = schema.utils.use_fn_validation;
var output_schema33752_33762 = om_bootstrap.types.Component;
var input_schema33753_33763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker33754_33764 = schema.core.checker.call(null,input_schema33753_33763);
var output_checker33755_33765 = schema.core.checker.call(null,output_schema33752_33762);
/**
 * Inputs: [opts :- Input & children]
 * Returns: t/Component
 * 
 * Returns an input component. This currently does NOT handle any of
 * the default values or validation messages that we'll need to make
 * this work, though.
 */
om_bootstrap.input.input = ((function (ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765){
return (function om_bootstrap$input$input(){
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});})(ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765){
return (function (G__33756,rest33757){
var validate__16151__auto__ = ufv___33761.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33766 = cljs.core.list_STAR_.call(null,G__33756,rest33757);
var temp__4425__auto___33767 = input_checker33754_33764.call(null,args__16152__auto___33766);
if(cljs.core.truth_(temp__4425__auto___33767)){
var error__16153__auto___33768 = temp__4425__auto___33767;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__16153__auto___33768)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33753_33763,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33766,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33768], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33756;
var children = rest33757;
while(true){
var vec__33760 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__33760,(0),null);
var attrs = cljs.core.nth.call(null,vec__33760,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33769 = output_checker33755_33765.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33769)){
var error__16153__auto___33770 = temp__4425__auto___33769;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__16153__auto___33770)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33752_33762,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33770], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765){
return (function (seq33758){
var G__33759 = cljs.core.first.call(null,seq33758);
var seq33758__$1 = cljs.core.next.call(null,seq33758);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__33759,seq33758__$1);
});})(ufv___33761,output_schema33752_33762,input_schema33753_33763,input_checker33754_33764,output_checker33755_33765))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema33752_33762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33753_33763], null)));
var ufv___33780 = schema.utils.use_fn_validation;
var output_schema33771_33781 = om_bootstrap.types.Component;
var input_schema33772_33782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker33773_33783 = schema.core.checker.call(null,input_schema33772_33782);
var output_checker33774_33784 = schema.core.checker.call(null,output_schema33771_33781);
/**
 * Inputs: [opts :- Radio]
 * Returns: t/Component
 * 
 * Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___33780,output_schema33771_33781,input_schema33772_33782,input_checker33773_33783,output_checker33774_33784){
return (function om_bootstrap$input$radio_option(G__33775){
var validate__16151__auto__ = ufv___33780.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33775], null);
var temp__4425__auto___33786 = input_checker33773_33783.call(null,args__16152__auto___33785);
if(cljs.core.truth_(temp__4425__auto___33786)){
var error__16153__auto___33787 = temp__4425__auto___33786;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__16153__auto___33787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33772_33782,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33785,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33787], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var opts = G__33775;
while(true){
var vec__33778 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__33778,(0),null);
var props = cljs.core.nth.call(null,vec__33778,(1),null);
var map__33779 = bs;
var map__33779__$1 = ((cljs.core.seq_QMARK_.call(null,map__33779))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
var label = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var inline_QMARK_ = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33788 = output_checker33774_33784.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33788)){
var error__16153__auto___33789 = temp__4425__auto___33788;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__16153__auto___33789)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33771_33781,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33789], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33780,output_schema33771_33781,input_schema33772_33782,input_checker33773_33783,output_checker33774_33784))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema33771_33781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33772_33782], null)));
var ufv___33812 = schema.utils.use_fn_validation;
var output_schema33790_33813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema33791_33814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker33792_33815 = schema.core.checker.call(null,input_schema33791_33814);
var output_checker33793_33816 = schema.core.checker.call(null,output_schema33790_33813);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 * Returns: [t/Component]
 * 
 * Returns a sequence of options for use as the children of a select
 * input.
 */
om_bootstrap.input.options = ((function (ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816){
return (function om_bootstrap$input$options(G__33794,G__33795){
var validate__16151__auto__ = ufv___33812.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___33817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33794,G__33795], null);
var temp__4425__auto___33818 = input_checker33792_33815.call(null,args__16152__auto___33817);
if(cljs.core.truth_(temp__4425__auto___33818)){
var error__16153__auto___33819 = temp__4425__auto___33818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__16153__auto___33819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33791_33814,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___33817,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33819], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var header = G__33794;
var opts = G__33795;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__12102__auto__ = ((function (validate__16151__auto__,ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816){
return (function om_bootstrap$input$options_$_iter__33804(s__33805){
return (new cljs.core.LazySeq(null,((function (validate__16151__auto__,ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816){
return (function (){
var s__33805__$1 = s__33805;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33805__$1);
if(temp__4425__auto__){
var s__33805__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33805__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__33805__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__33807 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__33806 = (0);
while(true){
if((i__33806 < size__12101__auto__)){
var vec__33810 = cljs.core._nth.call(null,c__12100__auto__,i__33806);
var v = cljs.core.nth.call(null,vec__33810,(0),null);
var label = cljs.core.nth.call(null,vec__33810,(1),null);
cljs.core.chunk_append.call(null,b__33807,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__33820 = (i__33806 + (1));
i__33806 = G__33820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33807),om_bootstrap$input$options_$_iter__33804.call(null,cljs.core.chunk_rest.call(null,s__33805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33807),null);
}
} else {
var vec__33811 = cljs.core.first.call(null,s__33805__$2);
var v = cljs.core.nth.call(null,vec__33811,(0),null);
var label = cljs.core.nth.call(null,vec__33811,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__33804.call(null,cljs.core.rest.call(null,s__33805__$2)));
}
} else {
return null;
}
break;
}
});})(validate__16151__auto__,ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816))
,null,null));
});})(validate__16151__auto__,ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816))
;
return iter__12102__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___33821 = output_checker33793_33816.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___33821)){
var error__16153__auto___33822 = temp__4425__auto___33821;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__16153__auto___33822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33790_33813,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___33822], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___33812,output_schema33790_33813,input_schema33791_33814,input_checker33792_33815,output_checker33793_33816))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema33790_33813,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33791_33814], null)));

//# sourceMappingURL=input.js.map
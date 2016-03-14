// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.progress_bar');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_bootstrap.types');
om_bootstrap.progress_bar.ProgressBar = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"now","now",-1650525531),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"min","min",444991522)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"max","max",61366548)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sr-only?","sr-only?",-1143674250)),schema.core.named.call(null,schema.core.Bool,"Screenreader-only? Hide the label?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nested?","nested?",1182745618)),schema.core.named.call(null,schema.core.Bool,"Specify this for a nested ProgressBar inside a stacked ProgressBar.")], true, false));
om_bootstrap.progress_bar.defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"progress-bar",new cljs.core.Keyword(null,"striped?","striped?",-797214979),false,new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"nested?","nested?",1182745618),false], null);
var ufv___19140 = schema.utils.use_fn_validation;
var output_schema19133_19141 = schema.core.Num;
var input_schema19134_19142 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"min","min",2085523049,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"now","now",-9994004,null)),schema.core.one.call(null,schema.core.Int,new cljs.core.Symbol(null,"max","max",1701898075,null))], null);
var input_checker19135_19143 = schema.core.checker.call(null,input_schema19134_19142);
var output_checker19136_19144 = schema.core.checker.call(null,output_schema19133_19141);
/**
 * Inputs: [min :- s/Int now :- s/Int max :- s/Int]
 * Returns: s/Num
 */
om_bootstrap.progress_bar.percentage = ((function (ufv___19140,output_schema19133_19141,input_schema19134_19142,input_checker19135_19143,output_checker19136_19144){
return (function om_bootstrap$progress_bar$percentage(G__19137,G__19138,G__19139){
var validate__11904__auto__ = ufv___19140.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19137,G__19138,G__19139], null);
var temp__4126__auto___19146 = input_checker19135_19143.call(null,args__11905__auto___19145);
if(cljs.core.truth_(temp__4126__auto___19146)){
var error__11906__auto___19147 = temp__4126__auto___19146;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__11906__auto___19147)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19147,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19145,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19134_19142,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var min = G__19137;
var now = G__19138;
var max = G__19139;
while(true){
return Math.ceil.call(null,(((now - min) / (max - min)) * (100)));
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19148 = output_checker19136_19144.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19148)){
var error__11906__auto___19149 = temp__4126__auto___19148;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"percentage","percentage",30317877,null),cljs.core.pr_str.call(null,error__11906__auto___19149)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19149,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19133_19141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19140,output_schema19133_19141,input_schema19134_19142,input_checker19135_19143,output_checker19136_19144))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.percentage),schema.core.make_fn_schema.call(null,output_schema19133_19141,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19134_19142], null)));
var ufv___19159 = schema.utils.use_fn_validation;
var output_schema19150_19160 = om_bootstrap.types.Component;
var input_schema19151_19161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker19152_19162 = schema.core.checker.call(null,input_schema19151_19161);
var output_checker19153_19163 = schema.core.checker.call(null,output_schema19150_19160);
/**
 * Inputs: [opts :- ProgressBar & children]
 * Returns: t/Component
 * 
 * Generates a progress bar child.
 */
om_bootstrap.progress_bar.child_bar = ((function (ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163){
return (function om_bootstrap$progress_bar$child_bar(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163))
;

om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163){
return (function (G__19154,rest19155){
var validate__11904__auto__ = ufv___19159.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19164 = cljs.core.list_STAR_.call(null,G__19154,rest19155);
var temp__4126__auto___19165 = input_checker19152_19162.call(null,args__11905__auto___19164);
if(cljs.core.truth_(temp__4126__auto___19165)){
var error__11906__auto___19166 = temp__4126__auto___19165;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__11906__auto___19166)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19166,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19164,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19151_19161,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__19154;
var children = rest19155;
while(true){
var vec__19158 = om_bootstrap.types.separate.call(null,om_bootstrap.progress_bar.ProgressBar,opts,om_bootstrap.progress_bar.defaults);
var bs = cljs.core.nth.call(null,vec__19158,(0),null);
var props = cljs.core.nth.call(null,vec__19158,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),true], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true,new cljs.core.Keyword(null,"active","active",1895962068),true], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(bs))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"progress-bar-striped","progress-bar-striped",-229446458),true], null):null));
var values = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-value-min","aria-value-min",-1211910577),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-max","aria-value-max",493213452),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"aria-value-now","aria-value-now",-1780367019),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs)], null);
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(om_bootstrap.progress_bar.percentage.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bs))),cljs.core.str("%")].join('')], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),values,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var label = temp__4126__auto__;
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
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19167 = output_checker19153_19163.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19167)){
var error__11906__auto___19168 = temp__4126__auto___19167;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-bar","child-bar",1409828482,null),cljs.core.pr_str.call(null,error__11906__auto___19168)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19168,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19150_19160,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163))
;

om_bootstrap.progress_bar.child_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.child_bar.cljs$lang$applyTo = ((function (ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163){
return (function (seq19156){
var G__19157 = cljs.core.first.call(null,seq19156);
var seq19156__$1 = cljs.core.next.call(null,seq19156);
return om_bootstrap.progress_bar.child_bar.cljs$core$IFn$_invoke$arity$variadic(G__19157,seq19156__$1);
});})(ufv___19159,output_schema19150_19160,input_schema19151_19161,input_checker19152_19162,output_checker19153_19163))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.child_bar),schema.core.make_fn_schema.call(null,output_schema19150_19160,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19151_19161], null)));
var ufv___19177 = schema.utils.use_fn_validation;
var output_schema19169_19178 = schema.core.Any;
var input_schema19170_19179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.progress_bar.ProgressBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker19171_19180 = schema.core.checker.call(null,input_schema19170_19179);
var output_checker19172_19181 = schema.core.checker.call(null,output_schema19169_19178);
/**
 * Inputs: [opts :- ProgressBar & children]
 * 
 * Generates a progress bar component.
 */
om_bootstrap.progress_bar.progress_bar = ((function (ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181){
return (function om_bootstrap$progress_bar$progress_bar(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});})(ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181))
;

om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181){
return (function (G__19173,rest19174){
var validate__11904__auto__ = ufv___19177.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___19182 = cljs.core.list_STAR_.call(null,G__19173,rest19174);
var temp__4126__auto___19183 = input_checker19171_19180.call(null,args__11905__auto___19182);
if(cljs.core.truth_(temp__4126__auto___19183)){
var error__11906__auto___19184 = temp__4126__auto___19183;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__11906__auto___19184)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19184,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___19182,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19170_19179,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var opts = G__19173;
var children = rest19174;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested?","nested?",1182745618).cljs$core$IFn$_invoke$arity$1(opts))){
return om_bootstrap.progress_bar.child_bar.call(null,opts,children);
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "progress"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.progress_bar.child_bar.call(null,opts,children),children],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___19185 = output_checker19172_19181.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___19185)){
var error__11906__auto___19186 = temp__4126__auto___19185;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),cljs.core.pr_str.call(null,error__11906__auto___19186)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___19186,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19169_19178,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181))
;

om_bootstrap.progress_bar.progress_bar.cljs$lang$maxFixedArity = (1);

om_bootstrap.progress_bar.progress_bar.cljs$lang$applyTo = ((function (ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181){
return (function (seq19175){
var G__19176 = cljs.core.first.call(null,seq19175);
var seq19175__$1 = cljs.core.next.call(null,seq19175);
return om_bootstrap.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic(G__19176,seq19175__$1);
});})(ufv___19177,output_schema19169_19178,input_schema19170_19179,input_checker19171_19180,output_checker19172_19181))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.progress_bar.progress_bar),schema.core.make_fn_schema.call(null,output_schema19169_19178,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19170_19179], null)));

//# sourceMappingURL=progress_bar.js.map
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__10412__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__10412__auto__){
return or__10412__auto__;
} else {
var G__19690 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__19690) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__19693 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__19693) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19697){
var vec__19698 = p__19697;
var k = cljs.core.nth.call(null,vec__19698,(0),null);
var v = cljs.core.nth.call(null,vec__19698,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__10412__auto__ = React.isValidElement;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__19700 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__19700,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__19700,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__19704 = arguments.length;
switch (G__19704) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq19701){
var G__19702 = cljs.core.first.call(null,seq19701);
var seq19701__$1 = cljs.core.next.call(null,seq19701);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__19702,seq19701__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__19708 = arguments.length;
switch (G__19708) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq19705){
var G__19706 = cljs.core.first.call(null,seq19705);
var seq19705__$1 = cljs.core.next.call(null,seq19705);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__19706,seq19705__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var G__19712 = arguments.length;
switch (G__19712) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq19709){
var G__19710 = cljs.core.first.call(null,seq19709);
var seq19709__$1 = cljs.core.next.call(null,seq19709);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__19710,seq19709__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var G__19716 = arguments.length;
switch (G__19716) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq19713){
var G__19714 = cljs.core.first.call(null,seq19713);
var seq19713__$1 = cljs.core.next.call(null,seq19713);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__19714,seq19713__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var G__19720 = arguments.length;
switch (G__19720) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq19717){
var G__19718 = cljs.core.first.call(null,seq19717);
var seq19717__$1 = cljs.core.next.call(null,seq19717);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__19718,seq19717__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__19724 = arguments.length;
switch (G__19724) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq19721){
var G__19722 = cljs.core.first.call(null,seq19721);
var seq19721__$1 = cljs.core.next.call(null,seq19721);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__19722,seq19721__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__19728 = arguments.length;
switch (G__19728) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq19725){
var G__19726 = cljs.core.first.call(null,seq19725);
var seq19725__$1 = cljs.core.next.call(null,seq19725);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__19726,seq19725__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var G__19732 = arguments.length;
switch (G__19732) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq19729){
var G__19730 = cljs.core.first.call(null,seq19729);
var seq19729__$1 = cljs.core.next.call(null,seq19729);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__19730,seq19729__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var G__19736 = arguments.length;
switch (G__19736) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq19733){
var G__19734 = cljs.core.first.call(null,seq19733);
var seq19733__$1 = cljs.core.next.call(null,seq19733);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__19734,seq19733__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__19740 = arguments.length;
switch (G__19740) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq19737){
var G__19738 = cljs.core.first.call(null,seq19737);
var seq19737__$1 = cljs.core.next.call(null,seq19737);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__19738,seq19737__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__19744 = arguments.length;
switch (G__19744) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq19741){
var G__19742 = cljs.core.first.call(null,seq19741);
var seq19741__$1 = cljs.core.next.call(null,seq19741);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__19742,seq19741__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var G__19748 = arguments.length;
switch (G__19748) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq19745){
var G__19746 = cljs.core.first.call(null,seq19745);
var seq19745__$1 = cljs.core.next.call(null,seq19745);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__19746,seq19745__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__19752 = arguments.length;
switch (G__19752) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq19749){
var G__19750 = cljs.core.first.call(null,seq19749);
var seq19749__$1 = cljs.core.next.call(null,seq19749);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__19750,seq19749__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var G__19756 = arguments.length;
switch (G__19756) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq19753){
var G__19754 = cljs.core.first.call(null,seq19753);
var seq19753__$1 = cljs.core.next.call(null,seq19753);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__19754,seq19753__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var G__19760 = arguments.length;
switch (G__19760) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq19757){
var G__19758 = cljs.core.first.call(null,seq19757);
var seq19757__$1 = cljs.core.next.call(null,seq19757);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__19758,seq19757__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var G__19764 = arguments.length;
switch (G__19764) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq19761){
var G__19762 = cljs.core.first.call(null,seq19761);
var seq19761__$1 = cljs.core.next.call(null,seq19761);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__19762,seq19761__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__19768 = arguments.length;
switch (G__19768) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq19765){
var G__19766 = cljs.core.first.call(null,seq19765);
var seq19765__$1 = cljs.core.next.call(null,seq19765);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__19766,seq19765__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__19772 = arguments.length;
switch (G__19772) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq19769){
var G__19770 = cljs.core.first.call(null,seq19769);
var seq19769__$1 = cljs.core.next.call(null,seq19769);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__19770,seq19769__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__19776 = arguments.length;
switch (G__19776) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq19773){
var G__19774 = cljs.core.first.call(null,seq19773);
var seq19773__$1 = cljs.core.next.call(null,seq19773);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__19774,seq19773__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var G__19780 = arguments.length;
switch (G__19780) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq19777){
var G__19778 = cljs.core.first.call(null,seq19777);
var seq19777__$1 = cljs.core.next.call(null,seq19777);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__19778,seq19777__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var G__19784 = arguments.length;
switch (G__19784) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq19781){
var G__19782 = cljs.core.first.call(null,seq19781);
var seq19781__$1 = cljs.core.next.call(null,seq19781);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__19782,seq19781__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__19788 = arguments.length;
switch (G__19788) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq19785){
var G__19786 = cljs.core.first.call(null,seq19785);
var seq19785__$1 = cljs.core.next.call(null,seq19785);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__19786,seq19785__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var G__19792 = arguments.length;
switch (G__19792) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq19789){
var G__19790 = cljs.core.first.call(null,seq19789);
var seq19789__$1 = cljs.core.next.call(null,seq19789);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__19790,seq19789__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__19796 = arguments.length;
switch (G__19796) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq19793){
var G__19794 = cljs.core.first.call(null,seq19793);
var seq19793__$1 = cljs.core.next.call(null,seq19793);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__19794,seq19793__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__19800 = arguments.length;
switch (G__19800) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq19797){
var G__19798 = cljs.core.first.call(null,seq19797);
var seq19797__$1 = cljs.core.next.call(null,seq19797);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__19798,seq19797__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var G__19804 = arguments.length;
switch (G__19804) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq19801){
var G__19802 = cljs.core.first.call(null,seq19801);
var seq19801__$1 = cljs.core.next.call(null,seq19801);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__19802,seq19801__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__19808 = arguments.length;
switch (G__19808) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq19805){
var G__19806 = cljs.core.first.call(null,seq19805);
var seq19805__$1 = cljs.core.next.call(null,seq19805);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__19806,seq19805__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var G__19812 = arguments.length;
switch (G__19812) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq19809){
var G__19810 = cljs.core.first.call(null,seq19809);
var seq19809__$1 = cljs.core.next.call(null,seq19809);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__19810,seq19809__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__19816 = arguments.length;
switch (G__19816) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq19813){
var G__19814 = cljs.core.first.call(null,seq19813);
var seq19813__$1 = cljs.core.next.call(null,seq19813);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__19814,seq19813__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__19820 = arguments.length;
switch (G__19820) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq19817){
var G__19818 = cljs.core.first.call(null,seq19817);
var seq19817__$1 = cljs.core.next.call(null,seq19817);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__19818,seq19817__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var G__19824 = arguments.length;
switch (G__19824) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq19821){
var G__19822 = cljs.core.first.call(null,seq19821);
var seq19821__$1 = cljs.core.next.call(null,seq19821);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__19822,seq19821__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__19828 = arguments.length;
switch (G__19828) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq19825){
var G__19826 = cljs.core.first.call(null,seq19825);
var seq19825__$1 = cljs.core.next.call(null,seq19825);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__19826,seq19825__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__19836 = arguments.length;
switch (G__19836) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq19833){
var G__19834 = cljs.core.first.call(null,seq19833);
var seq19833__$1 = cljs.core.next.call(null,seq19833);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__19834,seq19833__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__19840 = arguments.length;
switch (G__19840) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq19837){
var G__19838 = cljs.core.first.call(null,seq19837);
var seq19837__$1 = cljs.core.next.call(null,seq19837);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__19838,seq19837__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__19844 = arguments.length;
switch (G__19844) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq19841){
var G__19842 = cljs.core.first.call(null,seq19841);
var seq19841__$1 = cljs.core.next.call(null,seq19841);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__19842,seq19841__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__19848 = arguments.length;
switch (G__19848) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq19845){
var G__19846 = cljs.core.first.call(null,seq19845);
var seq19845__$1 = cljs.core.next.call(null,seq19845);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__19846,seq19845__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var G__19852 = arguments.length;
switch (G__19852) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq19849){
var G__19850 = cljs.core.first.call(null,seq19849);
var seq19849__$1 = cljs.core.next.call(null,seq19849);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__19850,seq19849__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__19856 = arguments.length;
switch (G__19856) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq19853){
var G__19854 = cljs.core.first.call(null,seq19853);
var seq19853__$1 = cljs.core.next.call(null,seq19853);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__19854,seq19853__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__19860 = arguments.length;
switch (G__19860) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq19857){
var G__19858 = cljs.core.first.call(null,seq19857);
var seq19857__$1 = cljs.core.next.call(null,seq19857);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__19858,seq19857__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__19864 = arguments.length;
switch (G__19864) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq19861){
var G__19862 = cljs.core.first.call(null,seq19861);
var seq19861__$1 = cljs.core.next.call(null,seq19861);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__19862,seq19861__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__19868 = arguments.length;
switch (G__19868) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq19865){
var G__19866 = cljs.core.first.call(null,seq19865);
var seq19865__$1 = cljs.core.next.call(null,seq19865);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__19866,seq19865__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__19872 = arguments.length;
switch (G__19872) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq19869){
var G__19870 = cljs.core.first.call(null,seq19869);
var seq19869__$1 = cljs.core.next.call(null,seq19869);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__19870,seq19869__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__19876 = arguments.length;
switch (G__19876) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq19873){
var G__19874 = cljs.core.first.call(null,seq19873);
var seq19873__$1 = cljs.core.next.call(null,seq19873);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__19874,seq19873__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var G__19880 = arguments.length;
switch (G__19880) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq19877){
var G__19878 = cljs.core.first.call(null,seq19877);
var seq19877__$1 = cljs.core.next.call(null,seq19877);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__19878,seq19877__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var G__19884 = arguments.length;
switch (G__19884) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq19881){
var G__19882 = cljs.core.first.call(null,seq19881);
var seq19881__$1 = cljs.core.next.call(null,seq19881);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__19882,seq19881__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__19888 = arguments.length;
switch (G__19888) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq19885){
var G__19886 = cljs.core.first.call(null,seq19885);
var seq19885__$1 = cljs.core.next.call(null,seq19885);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__19886,seq19885__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var G__19892 = arguments.length;
switch (G__19892) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq19889){
var G__19890 = cljs.core.first.call(null,seq19889);
var seq19889__$1 = cljs.core.next.call(null,seq19889);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__19890,seq19889__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var G__19896 = arguments.length;
switch (G__19896) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq19893){
var G__19894 = cljs.core.first.call(null,seq19893);
var seq19893__$1 = cljs.core.next.call(null,seq19893);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__19894,seq19893__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__19900 = arguments.length;
switch (G__19900) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq19897){
var G__19898 = cljs.core.first.call(null,seq19897);
var seq19897__$1 = cljs.core.next.call(null,seq19897);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__19898,seq19897__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var G__19904 = arguments.length;
switch (G__19904) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq19901){
var G__19902 = cljs.core.first.call(null,seq19901);
var seq19901__$1 = cljs.core.next.call(null,seq19901);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__19902,seq19901__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__19908 = arguments.length;
switch (G__19908) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq19905){
var G__19906 = cljs.core.first.call(null,seq19905);
var seq19905__$1 = cljs.core.next.call(null,seq19905);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__19906,seq19905__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__19912 = arguments.length;
switch (G__19912) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq19909){
var G__19910 = cljs.core.first.call(null,seq19909);
var seq19909__$1 = cljs.core.next.call(null,seq19909);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__19910,seq19909__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__19916 = arguments.length;
switch (G__19916) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq19913){
var G__19914 = cljs.core.first.call(null,seq19913);
var seq19913__$1 = cljs.core.next.call(null,seq19913);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__19914,seq19913__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var G__19920 = arguments.length;
switch (G__19920) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq19917){
var G__19918 = cljs.core.first.call(null,seq19917);
var seq19917__$1 = cljs.core.next.call(null,seq19917);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__19918,seq19917__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__19924 = arguments.length;
switch (G__19924) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq19921){
var G__19922 = cljs.core.first.call(null,seq19921);
var seq19921__$1 = cljs.core.next.call(null,seq19921);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__19922,seq19921__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var G__19928 = arguments.length;
switch (G__19928) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq19925){
var G__19926 = cljs.core.first.call(null,seq19925);
var seq19925__$1 = cljs.core.next.call(null,seq19925);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__19926,seq19925__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var G__19932 = arguments.length;
switch (G__19932) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq19929){
var G__19930 = cljs.core.first.call(null,seq19929);
var seq19929__$1 = cljs.core.next.call(null,seq19929);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__19930,seq19929__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var G__19936 = arguments.length;
switch (G__19936) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq19933){
var G__19934 = cljs.core.first.call(null,seq19933);
var seq19933__$1 = cljs.core.next.call(null,seq19933);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__19934,seq19933__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var G__19940 = arguments.length;
switch (G__19940) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq19937){
var G__19938 = cljs.core.first.call(null,seq19937);
var seq19937__$1 = cljs.core.next.call(null,seq19937);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__19938,seq19937__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__19944 = arguments.length;
switch (G__19944) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq19941){
var G__19942 = cljs.core.first.call(null,seq19941);
var seq19941__$1 = cljs.core.next.call(null,seq19941);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__19942,seq19941__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__19948 = arguments.length;
switch (G__19948) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq19945){
var G__19946 = cljs.core.first.call(null,seq19945);
var seq19945__$1 = cljs.core.next.call(null,seq19945);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__19946,seq19945__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__19952 = arguments.length;
switch (G__19952) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq19949){
var G__19950 = cljs.core.first.call(null,seq19949);
var seq19949__$1 = cljs.core.next.call(null,seq19949);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__19950,seq19949__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__19956 = arguments.length;
switch (G__19956) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq19953){
var G__19954 = cljs.core.first.call(null,seq19953);
var seq19953__$1 = cljs.core.next.call(null,seq19953);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__19954,seq19953__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__19960 = arguments.length;
switch (G__19960) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq19957){
var G__19958 = cljs.core.first.call(null,seq19957);
var seq19957__$1 = cljs.core.next.call(null,seq19957);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__19958,seq19957__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__19964 = arguments.length;
switch (G__19964) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq19961){
var G__19962 = cljs.core.first.call(null,seq19961);
var seq19961__$1 = cljs.core.next.call(null,seq19961);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__19962,seq19961__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__19968 = arguments.length;
switch (G__19968) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq19965){
var G__19966 = cljs.core.first.call(null,seq19965);
var seq19965__$1 = cljs.core.next.call(null,seq19965);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__19966,seq19965__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__19972 = arguments.length;
switch (G__19972) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq19969){
var G__19970 = cljs.core.first.call(null,seq19969);
var seq19969__$1 = cljs.core.next.call(null,seq19969);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__19970,seq19969__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var G__19976 = arguments.length;
switch (G__19976) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq19973){
var G__19974 = cljs.core.first.call(null,seq19973);
var seq19973__$1 = cljs.core.next.call(null,seq19973);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__19974,seq19973__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__19980 = arguments.length;
switch (G__19980) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq19977){
var G__19978 = cljs.core.first.call(null,seq19977);
var seq19977__$1 = cljs.core.next.call(null,seq19977);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__19978,seq19977__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__19984 = arguments.length;
switch (G__19984) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq19981){
var G__19982 = cljs.core.first.call(null,seq19981);
var seq19981__$1 = cljs.core.next.call(null,seq19981);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__19982,seq19981__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var G__19988 = arguments.length;
switch (G__19988) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq19985){
var G__19986 = cljs.core.first.call(null,seq19985);
var seq19985__$1 = cljs.core.next.call(null,seq19985);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__19986,seq19985__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var G__19992 = arguments.length;
switch (G__19992) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq19989){
var G__19990 = cljs.core.first.call(null,seq19989);
var seq19989__$1 = cljs.core.next.call(null,seq19989);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__19990,seq19989__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var G__19996 = arguments.length;
switch (G__19996) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq19993){
var G__19994 = cljs.core.first.call(null,seq19993);
var seq19993__$1 = cljs.core.next.call(null,seq19993);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__19994,seq19993__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__20000 = arguments.length;
switch (G__20000) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq19997){
var G__19998 = cljs.core.first.call(null,seq19997);
var seq19997__$1 = cljs.core.next.call(null,seq19997);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__19998,seq19997__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__20004 = arguments.length;
switch (G__20004) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq20001){
var G__20002 = cljs.core.first.call(null,seq20001);
var seq20001__$1 = cljs.core.next.call(null,seq20001);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__20002,seq20001__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var G__20008 = arguments.length;
switch (G__20008) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq20005){
var G__20006 = cljs.core.first.call(null,seq20005);
var seq20005__$1 = cljs.core.next.call(null,seq20005);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__20006,seq20005__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__20012 = arguments.length;
switch (G__20012) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq20009){
var G__20010 = cljs.core.first.call(null,seq20009);
var seq20009__$1 = cljs.core.next.call(null,seq20009);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__20010,seq20009__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__20016 = arguments.length;
switch (G__20016) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq20013){
var G__20014 = cljs.core.first.call(null,seq20013);
var seq20013__$1 = cljs.core.next.call(null,seq20013);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__20014,seq20013__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__20020 = arguments.length;
switch (G__20020) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq20017){
var G__20018 = cljs.core.first.call(null,seq20017);
var seq20017__$1 = cljs.core.next.call(null,seq20017);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__20018,seq20017__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var G__20024 = arguments.length;
switch (G__20024) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq20021){
var G__20022 = cljs.core.first.call(null,seq20021);
var seq20021__$1 = cljs.core.next.call(null,seq20021);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__20022,seq20021__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__20028 = arguments.length;
switch (G__20028) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq20025){
var G__20026 = cljs.core.first.call(null,seq20025);
var seq20025__$1 = cljs.core.next.call(null,seq20025);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__20026,seq20025__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var G__20032 = arguments.length;
switch (G__20032) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq20029){
var G__20030 = cljs.core.first.call(null,seq20029);
var seq20029__$1 = cljs.core.next.call(null,seq20029);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__20030,seq20029__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var G__20036 = arguments.length;
switch (G__20036) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq20033){
var G__20034 = cljs.core.first.call(null,seq20033);
var seq20033__$1 = cljs.core.next.call(null,seq20033);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__20034,seq20033__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var G__20040 = arguments.length;
switch (G__20040) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq20037){
var G__20038 = cljs.core.first.call(null,seq20037);
var seq20037__$1 = cljs.core.next.call(null,seq20037);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__20038,seq20037__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var G__20044 = arguments.length;
switch (G__20044) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq20041){
var G__20042 = cljs.core.first.call(null,seq20041);
var seq20041__$1 = cljs.core.next.call(null,seq20041);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__20042,seq20041__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var G__20048 = arguments.length;
switch (G__20048) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq20045){
var G__20046 = cljs.core.first.call(null,seq20045);
var seq20045__$1 = cljs.core.next.call(null,seq20045);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__20046,seq20045__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var G__20052 = arguments.length;
switch (G__20052) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq20049){
var G__20050 = cljs.core.first.call(null,seq20049);
var seq20049__$1 = cljs.core.next.call(null,seq20049);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__20050,seq20049__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__20056 = arguments.length;
switch (G__20056) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq20053){
var G__20054 = cljs.core.first.call(null,seq20053);
var seq20053__$1 = cljs.core.next.call(null,seq20053);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__20054,seq20053__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var G__20060 = arguments.length;
switch (G__20060) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq20057){
var G__20058 = cljs.core.first.call(null,seq20057);
var seq20057__$1 = cljs.core.next.call(null,seq20057);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__20058,seq20057__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__20064 = arguments.length;
switch (G__20064) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq20061){
var G__20062 = cljs.core.first.call(null,seq20061);
var seq20061__$1 = cljs.core.next.call(null,seq20061);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__20062,seq20061__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__20068 = arguments.length;
switch (G__20068) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq20065){
var G__20066 = cljs.core.first.call(null,seq20065);
var seq20065__$1 = cljs.core.next.call(null,seq20065);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__20066,seq20065__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__20072 = arguments.length;
switch (G__20072) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq20069){
var G__20070 = cljs.core.first.call(null,seq20069);
var seq20069__$1 = cljs.core.next.call(null,seq20069);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__20070,seq20069__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var G__20076 = arguments.length;
switch (G__20076) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq20073){
var G__20074 = cljs.core.first.call(null,seq20073);
var seq20073__$1 = cljs.core.next.call(null,seq20073);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__20074,seq20073__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__20080 = arguments.length;
switch (G__20080) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq20077){
var G__20078 = cljs.core.first.call(null,seq20077);
var seq20077__$1 = cljs.core.next.call(null,seq20077);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__20078,seq20077__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var G__20084 = arguments.length;
switch (G__20084) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq20081){
var G__20082 = cljs.core.first.call(null,seq20081);
var seq20081__$1 = cljs.core.next.call(null,seq20081);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__20082,seq20081__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__20088 = arguments.length;
switch (G__20088) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq20085){
var G__20086 = cljs.core.first.call(null,seq20085);
var seq20085__$1 = cljs.core.next.call(null,seq20085);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__20086,seq20085__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var G__20092 = arguments.length;
switch (G__20092) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq20089){
var G__20090 = cljs.core.first.call(null,seq20089);
var seq20089__$1 = cljs.core.next.call(null,seq20089);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__20090,seq20089__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__20096 = arguments.length;
switch (G__20096) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq20093){
var G__20094 = cljs.core.first.call(null,seq20093);
var seq20093__$1 = cljs.core.next.call(null,seq20093);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__20094,seq20093__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var G__20100 = arguments.length;
switch (G__20100) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq20097){
var G__20098 = cljs.core.first.call(null,seq20097);
var seq20097__$1 = cljs.core.next.call(null,seq20097);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__20098,seq20097__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var G__20104 = arguments.length;
switch (G__20104) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq20101){
var G__20102 = cljs.core.first.call(null,seq20101);
var seq20101__$1 = cljs.core.next.call(null,seq20101);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__20102,seq20101__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__20108 = arguments.length;
switch (G__20108) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq20105){
var G__20106 = cljs.core.first.call(null,seq20105);
var seq20105__$1 = cljs.core.next.call(null,seq20105);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__20106,seq20105__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var G__20112 = arguments.length;
switch (G__20112) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq20109){
var G__20110 = cljs.core.first.call(null,seq20109);
var seq20109__$1 = cljs.core.next.call(null,seq20109);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__20110,seq20109__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var G__20116 = arguments.length;
switch (G__20116) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq20113){
var G__20114 = cljs.core.first.call(null,seq20113);
var seq20113__$1 = cljs.core.next.call(null,seq20113);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__20114,seq20113__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__20120 = arguments.length;
switch (G__20120) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq20117){
var G__20118 = cljs.core.first.call(null,seq20117);
var seq20117__$1 = cljs.core.next.call(null,seq20117);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__20118,seq20117__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__20124 = arguments.length;
switch (G__20124) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq20121){
var G__20122 = cljs.core.first.call(null,seq20121);
var seq20121__$1 = cljs.core.next.call(null,seq20121);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__20122,seq20121__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var G__20128 = arguments.length;
switch (G__20128) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq20125){
var G__20126 = cljs.core.first.call(null,seq20125);
var seq20125__$1 = cljs.core.next.call(null,seq20125);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__20126,seq20125__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__20132 = arguments.length;
switch (G__20132) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq20129){
var G__20130 = cljs.core.first.call(null,seq20129);
var seq20129__$1 = cljs.core.next.call(null,seq20129);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__20130,seq20129__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__20136 = arguments.length;
switch (G__20136) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq20133){
var G__20134 = cljs.core.first.call(null,seq20133);
var seq20133__$1 = cljs.core.next.call(null,seq20133);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__20134,seq20133__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__20140 = arguments.length;
switch (G__20140) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq20137){
var G__20138 = cljs.core.first.call(null,seq20137);
var seq20137__$1 = cljs.core.next.call(null,seq20137);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__20138,seq20137__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var G__20144 = arguments.length;
switch (G__20144) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq20141){
var G__20142 = cljs.core.first.call(null,seq20141);
var seq20141__$1 = cljs.core.next.call(null,seq20141);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__20142,seq20141__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var G__20148 = arguments.length;
switch (G__20148) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq20145){
var G__20146 = cljs.core.first.call(null,seq20145);
var seq20145__$1 = cljs.core.next.call(null,seq20145);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__20146,seq20145__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var G__20152 = arguments.length;
switch (G__20152) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq20149){
var G__20150 = cljs.core.first.call(null,seq20149);
var seq20149__$1 = cljs.core.next.call(null,seq20149);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__20150,seq20149__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__20156 = arguments.length;
switch (G__20156) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq20153){
var G__20154 = cljs.core.first.call(null,seq20153);
var seq20153__$1 = cljs.core.next.call(null,seq20153);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__20154,seq20153__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__20160 = arguments.length;
switch (G__20160) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq20157){
var G__20158 = cljs.core.first.call(null,seq20157);
var seq20157__$1 = cljs.core.next.call(null,seq20157);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__20158,seq20157__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__20164 = arguments.length;
switch (G__20164) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq20161){
var G__20162 = cljs.core.first.call(null,seq20161);
var seq20161__$1 = cljs.core.next.call(null,seq20161);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__20162,seq20161__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var G__20168 = arguments.length;
switch (G__20168) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq20165){
var G__20166 = cljs.core.first.call(null,seq20165);
var seq20165__$1 = cljs.core.next.call(null,seq20165);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__20166,seq20165__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__20172 = arguments.length;
switch (G__20172) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq20169){
var G__20170 = cljs.core.first.call(null,seq20169);
var seq20169__$1 = cljs.core.next.call(null,seq20169);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__20170,seq20169__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__20176 = arguments.length;
switch (G__20176) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq20173){
var G__20174 = cljs.core.first.call(null,seq20173);
var seq20173__$1 = cljs.core.next.call(null,seq20173);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__20174,seq20173__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__20180 = arguments.length;
switch (G__20180) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq20177){
var G__20178 = cljs.core.first.call(null,seq20177);
var seq20177__$1 = cljs.core.next.call(null,seq20177);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__20178,seq20177__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__20184 = arguments.length;
switch (G__20184) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq20181){
var G__20182 = cljs.core.first.call(null,seq20181);
var seq20181__$1 = cljs.core.next.call(null,seq20181);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__20182,seq20181__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__20188 = arguments.length;
switch (G__20188) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq20185){
var G__20186 = cljs.core.first.call(null,seq20185);
var seq20185__$1 = cljs.core.next.call(null,seq20185);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__20186,seq20185__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__20192 = arguments.length;
switch (G__20192) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq20189){
var G__20190 = cljs.core.first.call(null,seq20189);
var seq20189__$1 = cljs.core.next.call(null,seq20189);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__20190,seq20189__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var G__20196 = arguments.length;
switch (G__20196) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq20193){
var G__20194 = cljs.core.first.call(null,seq20193);
var seq20193__$1 = cljs.core.next.call(null,seq20193);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__20194,seq20193__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__20200 = arguments.length;
switch (G__20200) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq20197){
var G__20198 = cljs.core.first.call(null,seq20197);
var seq20197__$1 = cljs.core.next.call(null,seq20197);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__20198,seq20197__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var G__19832 = arguments.length;
switch (G__19832) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14389__auto__,children__14390__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__14389__auto__,children__14390__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq19829){
var G__19830 = cljs.core.first.call(null,seq19829);
var seq19829__$1 = cljs.core.next.call(null,seq19829);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__19830,seq19829__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map
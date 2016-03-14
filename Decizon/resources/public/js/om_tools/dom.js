// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
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
if(cljs.core.truth_((function (){var or__11348__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__11348__auto__){
return or__11348__auto__;
} else {
var G__27784 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__27784) {
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
var G__27787 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__27787) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27791){
var vec__27792 = p__27791;
var k = cljs.core.nth.call(null,vec__27792,(0),null);
var v = cljs.core.nth.call(null,vec__27792,(1),null);
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
return (function (){var or__11348__auto__ = React.isValidElement;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
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
var vec__27794 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__27794,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__27794,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__27798 = arguments.length;
switch (G__27798) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq27795){
var G__27796 = cljs.core.first.call(null,seq27795);
var seq27795__$1 = cljs.core.next.call(null,seq27795);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__27796,seq27795__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__27802 = arguments.length;
switch (G__27802) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq27799){
var G__27800 = cljs.core.first.call(null,seq27799);
var seq27799__$1 = cljs.core.next.call(null,seq27799);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__27800,seq27799__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var G__27806 = arguments.length;
switch (G__27806) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq27803){
var G__27804 = cljs.core.first.call(null,seq27803);
var seq27803__$1 = cljs.core.next.call(null,seq27803);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__27804,seq27803__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var G__27810 = arguments.length;
switch (G__27810) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq27807){
var G__27808 = cljs.core.first.call(null,seq27807);
var seq27807__$1 = cljs.core.next.call(null,seq27807);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__27808,seq27807__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var G__27814 = arguments.length;
switch (G__27814) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq27811){
var G__27812 = cljs.core.first.call(null,seq27811);
var seq27811__$1 = cljs.core.next.call(null,seq27811);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__27812,seq27811__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__27818 = arguments.length;
switch (G__27818) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq27815){
var G__27816 = cljs.core.first.call(null,seq27815);
var seq27815__$1 = cljs.core.next.call(null,seq27815);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__27816,seq27815__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__27822 = arguments.length;
switch (G__27822) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq27819){
var G__27820 = cljs.core.first.call(null,seq27819);
var seq27819__$1 = cljs.core.next.call(null,seq27819);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__27820,seq27819__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var G__27826 = arguments.length;
switch (G__27826) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq27823){
var G__27824 = cljs.core.first.call(null,seq27823);
var seq27823__$1 = cljs.core.next.call(null,seq27823);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__27824,seq27823__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var G__27830 = arguments.length;
switch (G__27830) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq27827){
var G__27828 = cljs.core.first.call(null,seq27827);
var seq27827__$1 = cljs.core.next.call(null,seq27827);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__27828,seq27827__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__27834 = arguments.length;
switch (G__27834) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq27831){
var G__27832 = cljs.core.first.call(null,seq27831);
var seq27831__$1 = cljs.core.next.call(null,seq27831);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__27832,seq27831__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__27838 = arguments.length;
switch (G__27838) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq27835){
var G__27836 = cljs.core.first.call(null,seq27835);
var seq27835__$1 = cljs.core.next.call(null,seq27835);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__27836,seq27835__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var G__27842 = arguments.length;
switch (G__27842) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq27839){
var G__27840 = cljs.core.first.call(null,seq27839);
var seq27839__$1 = cljs.core.next.call(null,seq27839);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__27840,seq27839__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__27846 = arguments.length;
switch (G__27846) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq27843){
var G__27844 = cljs.core.first.call(null,seq27843);
var seq27843__$1 = cljs.core.next.call(null,seq27843);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__27844,seq27843__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var G__27850 = arguments.length;
switch (G__27850) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq27847){
var G__27848 = cljs.core.first.call(null,seq27847);
var seq27847__$1 = cljs.core.next.call(null,seq27847);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__27848,seq27847__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var G__27854 = arguments.length;
switch (G__27854) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq27851){
var G__27852 = cljs.core.first.call(null,seq27851);
var seq27851__$1 = cljs.core.next.call(null,seq27851);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__27852,seq27851__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var G__27858 = arguments.length;
switch (G__27858) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq27855){
var G__27856 = cljs.core.first.call(null,seq27855);
var seq27855__$1 = cljs.core.next.call(null,seq27855);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__27856,seq27855__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__27862 = arguments.length;
switch (G__27862) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq27859){
var G__27860 = cljs.core.first.call(null,seq27859);
var seq27859__$1 = cljs.core.next.call(null,seq27859);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__27860,seq27859__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__27866 = arguments.length;
switch (G__27866) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq27863){
var G__27864 = cljs.core.first.call(null,seq27863);
var seq27863__$1 = cljs.core.next.call(null,seq27863);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__27864,seq27863__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__27870 = arguments.length;
switch (G__27870) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq27867){
var G__27868 = cljs.core.first.call(null,seq27867);
var seq27867__$1 = cljs.core.next.call(null,seq27867);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__27868,seq27867__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var G__27874 = arguments.length;
switch (G__27874) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq27871){
var G__27872 = cljs.core.first.call(null,seq27871);
var seq27871__$1 = cljs.core.next.call(null,seq27871);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__27872,seq27871__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var G__27878 = arguments.length;
switch (G__27878) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq27875){
var G__27876 = cljs.core.first.call(null,seq27875);
var seq27875__$1 = cljs.core.next.call(null,seq27875);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__27876,seq27875__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__27882 = arguments.length;
switch (G__27882) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq27879){
var G__27880 = cljs.core.first.call(null,seq27879);
var seq27879__$1 = cljs.core.next.call(null,seq27879);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__27880,seq27879__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var G__27886 = arguments.length;
switch (G__27886) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq27883){
var G__27884 = cljs.core.first.call(null,seq27883);
var seq27883__$1 = cljs.core.next.call(null,seq27883);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__27884,seq27883__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__27890 = arguments.length;
switch (G__27890) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq27887){
var G__27888 = cljs.core.first.call(null,seq27887);
var seq27887__$1 = cljs.core.next.call(null,seq27887);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__27888,seq27887__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__27894 = arguments.length;
switch (G__27894) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq27891){
var G__27892 = cljs.core.first.call(null,seq27891);
var seq27891__$1 = cljs.core.next.call(null,seq27891);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__27892,seq27891__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var G__27898 = arguments.length;
switch (G__27898) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq27895){
var G__27896 = cljs.core.first.call(null,seq27895);
var seq27895__$1 = cljs.core.next.call(null,seq27895);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__27896,seq27895__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__27902 = arguments.length;
switch (G__27902) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq27899){
var G__27900 = cljs.core.first.call(null,seq27899);
var seq27899__$1 = cljs.core.next.call(null,seq27899);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__27900,seq27899__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var G__27906 = arguments.length;
switch (G__27906) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq27903){
var G__27904 = cljs.core.first.call(null,seq27903);
var seq27903__$1 = cljs.core.next.call(null,seq27903);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__27904,seq27903__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__27910 = arguments.length;
switch (G__27910) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq27907){
var G__27908 = cljs.core.first.call(null,seq27907);
var seq27907__$1 = cljs.core.next.call(null,seq27907);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__27908,seq27907__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__27914 = arguments.length;
switch (G__27914) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq27911){
var G__27912 = cljs.core.first.call(null,seq27911);
var seq27911__$1 = cljs.core.next.call(null,seq27911);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__27912,seq27911__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var G__27918 = arguments.length;
switch (G__27918) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq27915){
var G__27916 = cljs.core.first.call(null,seq27915);
var seq27915__$1 = cljs.core.next.call(null,seq27915);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__27916,seq27915__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__27922 = arguments.length;
switch (G__27922) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq27919){
var G__27920 = cljs.core.first.call(null,seq27919);
var seq27919__$1 = cljs.core.next.call(null,seq27919);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__27920,seq27919__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__27930 = arguments.length;
switch (G__27930) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq27927){
var G__27928 = cljs.core.first.call(null,seq27927);
var seq27927__$1 = cljs.core.next.call(null,seq27927);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__27928,seq27927__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__27934 = arguments.length;
switch (G__27934) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq27931){
var G__27932 = cljs.core.first.call(null,seq27931);
var seq27931__$1 = cljs.core.next.call(null,seq27931);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__27932,seq27931__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__27938 = arguments.length;
switch (G__27938) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq27935){
var G__27936 = cljs.core.first.call(null,seq27935);
var seq27935__$1 = cljs.core.next.call(null,seq27935);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__27936,seq27935__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__27942 = arguments.length;
switch (G__27942) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq27939){
var G__27940 = cljs.core.first.call(null,seq27939);
var seq27939__$1 = cljs.core.next.call(null,seq27939);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__27940,seq27939__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var G__27946 = arguments.length;
switch (G__27946) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq27943){
var G__27944 = cljs.core.first.call(null,seq27943);
var seq27943__$1 = cljs.core.next.call(null,seq27943);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__27944,seq27943__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__27950 = arguments.length;
switch (G__27950) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq27947){
var G__27948 = cljs.core.first.call(null,seq27947);
var seq27947__$1 = cljs.core.next.call(null,seq27947);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__27948,seq27947__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__27954 = arguments.length;
switch (G__27954) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq27951){
var G__27952 = cljs.core.first.call(null,seq27951);
var seq27951__$1 = cljs.core.next.call(null,seq27951);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__27952,seq27951__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__27958 = arguments.length;
switch (G__27958) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq27955){
var G__27956 = cljs.core.first.call(null,seq27955);
var seq27955__$1 = cljs.core.next.call(null,seq27955);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__27956,seq27955__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__27962 = arguments.length;
switch (G__27962) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq27959){
var G__27960 = cljs.core.first.call(null,seq27959);
var seq27959__$1 = cljs.core.next.call(null,seq27959);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__27960,seq27959__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__27966 = arguments.length;
switch (G__27966) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq27963){
var G__27964 = cljs.core.first.call(null,seq27963);
var seq27963__$1 = cljs.core.next.call(null,seq27963);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__27964,seq27963__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__27970 = arguments.length;
switch (G__27970) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq27967){
var G__27968 = cljs.core.first.call(null,seq27967);
var seq27967__$1 = cljs.core.next.call(null,seq27967);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__27968,seq27967__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var G__27974 = arguments.length;
switch (G__27974) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq27971){
var G__27972 = cljs.core.first.call(null,seq27971);
var seq27971__$1 = cljs.core.next.call(null,seq27971);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__27972,seq27971__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var G__27978 = arguments.length;
switch (G__27978) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq27975){
var G__27976 = cljs.core.first.call(null,seq27975);
var seq27975__$1 = cljs.core.next.call(null,seq27975);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__27976,seq27975__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__27982 = arguments.length;
switch (G__27982) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq27979){
var G__27980 = cljs.core.first.call(null,seq27979);
var seq27979__$1 = cljs.core.next.call(null,seq27979);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__27980,seq27979__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var G__27986 = arguments.length;
switch (G__27986) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq27983){
var G__27984 = cljs.core.first.call(null,seq27983);
var seq27983__$1 = cljs.core.next.call(null,seq27983);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__27984,seq27983__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var G__27990 = arguments.length;
switch (G__27990) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq27987){
var G__27988 = cljs.core.first.call(null,seq27987);
var seq27987__$1 = cljs.core.next.call(null,seq27987);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__27988,seq27987__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__27994 = arguments.length;
switch (G__27994) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq27991){
var G__27992 = cljs.core.first.call(null,seq27991);
var seq27991__$1 = cljs.core.next.call(null,seq27991);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__27992,seq27991__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var G__27998 = arguments.length;
switch (G__27998) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq27995){
var G__27996 = cljs.core.first.call(null,seq27995);
var seq27995__$1 = cljs.core.next.call(null,seq27995);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__27996,seq27995__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__28002 = arguments.length;
switch (G__28002) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq27999){
var G__28000 = cljs.core.first.call(null,seq27999);
var seq27999__$1 = cljs.core.next.call(null,seq27999);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__28000,seq27999__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__28006 = arguments.length;
switch (G__28006) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq28003){
var G__28004 = cljs.core.first.call(null,seq28003);
var seq28003__$1 = cljs.core.next.call(null,seq28003);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__28004,seq28003__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__28010 = arguments.length;
switch (G__28010) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq28007){
var G__28008 = cljs.core.first.call(null,seq28007);
var seq28007__$1 = cljs.core.next.call(null,seq28007);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__28008,seq28007__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var G__28014 = arguments.length;
switch (G__28014) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq28011){
var G__28012 = cljs.core.first.call(null,seq28011);
var seq28011__$1 = cljs.core.next.call(null,seq28011);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__28012,seq28011__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__28018 = arguments.length;
switch (G__28018) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq28015){
var G__28016 = cljs.core.first.call(null,seq28015);
var seq28015__$1 = cljs.core.next.call(null,seq28015);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__28016,seq28015__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var G__28022 = arguments.length;
switch (G__28022) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq28019){
var G__28020 = cljs.core.first.call(null,seq28019);
var seq28019__$1 = cljs.core.next.call(null,seq28019);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__28020,seq28019__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var G__28026 = arguments.length;
switch (G__28026) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq28023){
var G__28024 = cljs.core.first.call(null,seq28023);
var seq28023__$1 = cljs.core.next.call(null,seq28023);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__28024,seq28023__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var G__28030 = arguments.length;
switch (G__28030) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq28027){
var G__28028 = cljs.core.first.call(null,seq28027);
var seq28027__$1 = cljs.core.next.call(null,seq28027);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__28028,seq28027__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var G__28034 = arguments.length;
switch (G__28034) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq28031){
var G__28032 = cljs.core.first.call(null,seq28031);
var seq28031__$1 = cljs.core.next.call(null,seq28031);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__28032,seq28031__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__28038 = arguments.length;
switch (G__28038) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq28035){
var G__28036 = cljs.core.first.call(null,seq28035);
var seq28035__$1 = cljs.core.next.call(null,seq28035);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__28036,seq28035__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__28042 = arguments.length;
switch (G__28042) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq28039){
var G__28040 = cljs.core.first.call(null,seq28039);
var seq28039__$1 = cljs.core.next.call(null,seq28039);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__28040,seq28039__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__28046 = arguments.length;
switch (G__28046) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq28043){
var G__28044 = cljs.core.first.call(null,seq28043);
var seq28043__$1 = cljs.core.next.call(null,seq28043);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__28044,seq28043__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__28050 = arguments.length;
switch (G__28050) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq28047){
var G__28048 = cljs.core.first.call(null,seq28047);
var seq28047__$1 = cljs.core.next.call(null,seq28047);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__28048,seq28047__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__28054 = arguments.length;
switch (G__28054) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq28051){
var G__28052 = cljs.core.first.call(null,seq28051);
var seq28051__$1 = cljs.core.next.call(null,seq28051);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__28052,seq28051__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__28058 = arguments.length;
switch (G__28058) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq28055){
var G__28056 = cljs.core.first.call(null,seq28055);
var seq28055__$1 = cljs.core.next.call(null,seq28055);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__28056,seq28055__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__28062 = arguments.length;
switch (G__28062) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq28059){
var G__28060 = cljs.core.first.call(null,seq28059);
var seq28059__$1 = cljs.core.next.call(null,seq28059);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__28060,seq28059__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__28066 = arguments.length;
switch (G__28066) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq28063){
var G__28064 = cljs.core.first.call(null,seq28063);
var seq28063__$1 = cljs.core.next.call(null,seq28063);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__28064,seq28063__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var G__28070 = arguments.length;
switch (G__28070) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq28067){
var G__28068 = cljs.core.first.call(null,seq28067);
var seq28067__$1 = cljs.core.next.call(null,seq28067);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__28068,seq28067__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__28074 = arguments.length;
switch (G__28074) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq28071){
var G__28072 = cljs.core.first.call(null,seq28071);
var seq28071__$1 = cljs.core.next.call(null,seq28071);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__28072,seq28071__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__28078 = arguments.length;
switch (G__28078) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq28075){
var G__28076 = cljs.core.first.call(null,seq28075);
var seq28075__$1 = cljs.core.next.call(null,seq28075);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__28076,seq28075__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var G__28082 = arguments.length;
switch (G__28082) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq28079){
var G__28080 = cljs.core.first.call(null,seq28079);
var seq28079__$1 = cljs.core.next.call(null,seq28079);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__28080,seq28079__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var G__28086 = arguments.length;
switch (G__28086) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq28083){
var G__28084 = cljs.core.first.call(null,seq28083);
var seq28083__$1 = cljs.core.next.call(null,seq28083);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__28084,seq28083__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var G__28090 = arguments.length;
switch (G__28090) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq28087){
var G__28088 = cljs.core.first.call(null,seq28087);
var seq28087__$1 = cljs.core.next.call(null,seq28087);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__28088,seq28087__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__28094 = arguments.length;
switch (G__28094) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq28091){
var G__28092 = cljs.core.first.call(null,seq28091);
var seq28091__$1 = cljs.core.next.call(null,seq28091);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__28092,seq28091__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__28098 = arguments.length;
switch (G__28098) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq28095){
var G__28096 = cljs.core.first.call(null,seq28095);
var seq28095__$1 = cljs.core.next.call(null,seq28095);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__28096,seq28095__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var G__28102 = arguments.length;
switch (G__28102) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq28099){
var G__28100 = cljs.core.first.call(null,seq28099);
var seq28099__$1 = cljs.core.next.call(null,seq28099);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__28100,seq28099__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__28106 = arguments.length;
switch (G__28106) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq28103){
var G__28104 = cljs.core.first.call(null,seq28103);
var seq28103__$1 = cljs.core.next.call(null,seq28103);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__28104,seq28103__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__28110 = arguments.length;
switch (G__28110) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq28107){
var G__28108 = cljs.core.first.call(null,seq28107);
var seq28107__$1 = cljs.core.next.call(null,seq28107);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__28108,seq28107__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__28114 = arguments.length;
switch (G__28114) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq28111){
var G__28112 = cljs.core.first.call(null,seq28111);
var seq28111__$1 = cljs.core.next.call(null,seq28111);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__28112,seq28111__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var G__28118 = arguments.length;
switch (G__28118) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq28115){
var G__28116 = cljs.core.first.call(null,seq28115);
var seq28115__$1 = cljs.core.next.call(null,seq28115);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__28116,seq28115__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__28122 = arguments.length;
switch (G__28122) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq28119){
var G__28120 = cljs.core.first.call(null,seq28119);
var seq28119__$1 = cljs.core.next.call(null,seq28119);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__28120,seq28119__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var G__28126 = arguments.length;
switch (G__28126) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq28123){
var G__28124 = cljs.core.first.call(null,seq28123);
var seq28123__$1 = cljs.core.next.call(null,seq28123);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__28124,seq28123__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var G__28130 = arguments.length;
switch (G__28130) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq28127){
var G__28128 = cljs.core.first.call(null,seq28127);
var seq28127__$1 = cljs.core.next.call(null,seq28127);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__28128,seq28127__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var G__28134 = arguments.length;
switch (G__28134) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq28131){
var G__28132 = cljs.core.first.call(null,seq28131);
var seq28131__$1 = cljs.core.next.call(null,seq28131);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__28132,seq28131__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var G__28138 = arguments.length;
switch (G__28138) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq28135){
var G__28136 = cljs.core.first.call(null,seq28135);
var seq28135__$1 = cljs.core.next.call(null,seq28135);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__28136,seq28135__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var G__28142 = arguments.length;
switch (G__28142) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq28139){
var G__28140 = cljs.core.first.call(null,seq28139);
var seq28139__$1 = cljs.core.next.call(null,seq28139);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__28140,seq28139__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var G__28146 = arguments.length;
switch (G__28146) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq28143){
var G__28144 = cljs.core.first.call(null,seq28143);
var seq28143__$1 = cljs.core.next.call(null,seq28143);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__28144,seq28143__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__28150 = arguments.length;
switch (G__28150) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq28147){
var G__28148 = cljs.core.first.call(null,seq28147);
var seq28147__$1 = cljs.core.next.call(null,seq28147);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__28148,seq28147__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var G__28154 = arguments.length;
switch (G__28154) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq28151){
var G__28152 = cljs.core.first.call(null,seq28151);
var seq28151__$1 = cljs.core.next.call(null,seq28151);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__28152,seq28151__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__28158 = arguments.length;
switch (G__28158) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq28155){
var G__28156 = cljs.core.first.call(null,seq28155);
var seq28155__$1 = cljs.core.next.call(null,seq28155);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__28156,seq28155__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__28162 = arguments.length;
switch (G__28162) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq28159){
var G__28160 = cljs.core.first.call(null,seq28159);
var seq28159__$1 = cljs.core.next.call(null,seq28159);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__28160,seq28159__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__28166 = arguments.length;
switch (G__28166) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq28163){
var G__28164 = cljs.core.first.call(null,seq28163);
var seq28163__$1 = cljs.core.next.call(null,seq28163);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__28164,seq28163__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var G__28170 = arguments.length;
switch (G__28170) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq28167){
var G__28168 = cljs.core.first.call(null,seq28167);
var seq28167__$1 = cljs.core.next.call(null,seq28167);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__28168,seq28167__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__28174 = arguments.length;
switch (G__28174) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq28171){
var G__28172 = cljs.core.first.call(null,seq28171);
var seq28171__$1 = cljs.core.next.call(null,seq28171);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__28172,seq28171__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var G__28178 = arguments.length;
switch (G__28178) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq28175){
var G__28176 = cljs.core.first.call(null,seq28175);
var seq28175__$1 = cljs.core.next.call(null,seq28175);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__28176,seq28175__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__28182 = arguments.length;
switch (G__28182) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq28179){
var G__28180 = cljs.core.first.call(null,seq28179);
var seq28179__$1 = cljs.core.next.call(null,seq28179);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__28180,seq28179__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var G__28186 = arguments.length;
switch (G__28186) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq28183){
var G__28184 = cljs.core.first.call(null,seq28183);
var seq28183__$1 = cljs.core.next.call(null,seq28183);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__28184,seq28183__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__28190 = arguments.length;
switch (G__28190) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq28187){
var G__28188 = cljs.core.first.call(null,seq28187);
var seq28187__$1 = cljs.core.next.call(null,seq28187);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__28188,seq28187__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var G__28194 = arguments.length;
switch (G__28194) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq28191){
var G__28192 = cljs.core.first.call(null,seq28191);
var seq28191__$1 = cljs.core.next.call(null,seq28191);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__28192,seq28191__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var G__28198 = arguments.length;
switch (G__28198) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq28195){
var G__28196 = cljs.core.first.call(null,seq28195);
var seq28195__$1 = cljs.core.next.call(null,seq28195);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__28196,seq28195__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__28202 = arguments.length;
switch (G__28202) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq28199){
var G__28200 = cljs.core.first.call(null,seq28199);
var seq28199__$1 = cljs.core.next.call(null,seq28199);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__28200,seq28199__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var G__28206 = arguments.length;
switch (G__28206) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq28203){
var G__28204 = cljs.core.first.call(null,seq28203);
var seq28203__$1 = cljs.core.next.call(null,seq28203);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__28204,seq28203__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var G__28210 = arguments.length;
switch (G__28210) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq28207){
var G__28208 = cljs.core.first.call(null,seq28207);
var seq28207__$1 = cljs.core.next.call(null,seq28207);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__28208,seq28207__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__28214 = arguments.length;
switch (G__28214) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq28211){
var G__28212 = cljs.core.first.call(null,seq28211);
var seq28211__$1 = cljs.core.next.call(null,seq28211);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__28212,seq28211__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__28218 = arguments.length;
switch (G__28218) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq28215){
var G__28216 = cljs.core.first.call(null,seq28215);
var seq28215__$1 = cljs.core.next.call(null,seq28215);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__28216,seq28215__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var G__28222 = arguments.length;
switch (G__28222) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq28219){
var G__28220 = cljs.core.first.call(null,seq28219);
var seq28219__$1 = cljs.core.next.call(null,seq28219);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__28220,seq28219__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__28226 = arguments.length;
switch (G__28226) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq28223){
var G__28224 = cljs.core.first.call(null,seq28223);
var seq28223__$1 = cljs.core.next.call(null,seq28223);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__28224,seq28223__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__28230 = arguments.length;
switch (G__28230) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq28227){
var G__28228 = cljs.core.first.call(null,seq28227);
var seq28227__$1 = cljs.core.next.call(null,seq28227);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__28228,seq28227__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__28234 = arguments.length;
switch (G__28234) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq28231){
var G__28232 = cljs.core.first.call(null,seq28231);
var seq28231__$1 = cljs.core.next.call(null,seq28231);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__28232,seq28231__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var G__28238 = arguments.length;
switch (G__28238) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq28235){
var G__28236 = cljs.core.first.call(null,seq28235);
var seq28235__$1 = cljs.core.next.call(null,seq28235);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__28236,seq28235__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var G__28242 = arguments.length;
switch (G__28242) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq28239){
var G__28240 = cljs.core.first.call(null,seq28239);
var seq28239__$1 = cljs.core.next.call(null,seq28239);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__28240,seq28239__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var G__28246 = arguments.length;
switch (G__28246) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq28243){
var G__28244 = cljs.core.first.call(null,seq28243);
var seq28243__$1 = cljs.core.next.call(null,seq28243);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__28244,seq28243__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__28250 = arguments.length;
switch (G__28250) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq28247){
var G__28248 = cljs.core.first.call(null,seq28247);
var seq28247__$1 = cljs.core.next.call(null,seq28247);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__28248,seq28247__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__28254 = arguments.length;
switch (G__28254) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq28251){
var G__28252 = cljs.core.first.call(null,seq28251);
var seq28251__$1 = cljs.core.next.call(null,seq28251);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__28252,seq28251__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__28258 = arguments.length;
switch (G__28258) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq28255){
var G__28256 = cljs.core.first.call(null,seq28255);
var seq28255__$1 = cljs.core.next.call(null,seq28255);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__28256,seq28255__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var G__28262 = arguments.length;
switch (G__28262) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq28259){
var G__28260 = cljs.core.first.call(null,seq28259);
var seq28259__$1 = cljs.core.next.call(null,seq28259);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__28260,seq28259__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__28266 = arguments.length;
switch (G__28266) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq28263){
var G__28264 = cljs.core.first.call(null,seq28263);
var seq28263__$1 = cljs.core.next.call(null,seq28263);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__28264,seq28263__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__28270 = arguments.length;
switch (G__28270) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq28267){
var G__28268 = cljs.core.first.call(null,seq28267);
var seq28267__$1 = cljs.core.next.call(null,seq28267);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__28268,seq28267__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__28274 = arguments.length;
switch (G__28274) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq28271){
var G__28272 = cljs.core.first.call(null,seq28271);
var seq28271__$1 = cljs.core.next.call(null,seq28271);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__28272,seq28271__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__28278 = arguments.length;
switch (G__28278) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq28275){
var G__28276 = cljs.core.first.call(null,seq28275);
var seq28275__$1 = cljs.core.next.call(null,seq28275);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__28276,seq28275__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__28282 = arguments.length;
switch (G__28282) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq28279){
var G__28280 = cljs.core.first.call(null,seq28279);
var seq28279__$1 = cljs.core.next.call(null,seq28279);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__28280,seq28279__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__28286 = arguments.length;
switch (G__28286) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq28283){
var G__28284 = cljs.core.first.call(null,seq28283);
var seq28283__$1 = cljs.core.next.call(null,seq28283);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__28284,seq28283__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var G__28290 = arguments.length;
switch (G__28290) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq28287){
var G__28288 = cljs.core.first.call(null,seq28287);
var seq28287__$1 = cljs.core.next.call(null,seq28287);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__28288,seq28287__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__28294 = arguments.length;
switch (G__28294) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq28291){
var G__28292 = cljs.core.first.call(null,seq28291);
var seq28291__$1 = cljs.core.next.call(null,seq28291);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__28292,seq28291__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var G__27926 = arguments.length;
switch (G__27926) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12399__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19105__auto__,children__19106__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__19105__auto__,children__19106__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq27923){
var G__27924 = cljs.core.first.call(null,seq27923);
var seq27923__$1 = cljs.core.next.call(null,seq27923);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__27924,seq27923__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map
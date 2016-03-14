// Compiled by ClojureScript 0.0-3291 {}
goog.provide('datascript.shim');
goog.require('cljs.core');
goog.require('clojure.string');
datascript.shim.make_array = cljs.core.make_array;
datascript.shim.into_array = cljs.core.into_array;
datascript.shim.if_cljs = (function datascript$shim$if_cljs(env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))){
return then;
} else {
return else$;
}
});
datascript.shim.aconcat = (function datascript$shim$aconcat(a,b){
return a.concat(b);
});
datascript.shim.amap = (function datascript$shim$amap(f,arr){
return arr.map(f);
});
datascript.shim.asort = (function datascript$shim$asort(arr,cmp){
return arr.sort(cmp);
});
datascript.shim.array_QMARK_ = cljs.core.array_QMARK_;
datascript.shim.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.shim.neg_number_QMARK_ = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.neg_QMARK_);

//# sourceMappingURL=shim.js.map
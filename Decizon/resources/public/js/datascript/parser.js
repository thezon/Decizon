// Compiled by ClojureScript 0.0-3291 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.shim');
goog.require('datascript.core');

datascript.parser.ITraversable = (function (){var obj34886 = {};
return obj34886;
})();

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((function (){var and__11336__auto__ = _;
if(and__11336__auto__){
return _.datascript$parser$ITraversable$_collect$arity$3;
} else {
return and__11336__auto__;
}
})()){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__11984__auto__ = (((_ == null))?null:_);
return (function (){var or__11348__auto__ = (datascript.parser._collect[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.parser._collect["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
})().call(null,_,pred,acc);
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((function (){var and__11336__auto__ = _;
if(and__11336__auto__){
return _.datascript$parser$ITraversable$_collect_vars$arity$2;
} else {
return and__11336__auto__;
}
})()){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__11984__auto__ = (((_ == null))?null:_);
return (function (){var or__11348__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.parser._collect_vars["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
})().call(null,_,acc);
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((function (){var and__11336__auto__ = _;
if(and__11336__auto__){
return _.datascript$parser$ITraversable$_postwalk$arity$2;
} else {
return and__11336__auto__;
}
})()){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__11984__auto__ = (((_ == null))?null:_);
return (function (){var or__11348__auto__ = (datascript.parser._postwalk[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.parser._postwalk["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
})().call(null,_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__34896_SHARP_,p2__34895_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__34895_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__34896_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(){
var argseq__12388__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12388__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__34900){
var vec__34901 = p__34900;
var acc = cljs.core.nth.call(null,vec__34901,(0),null);
var acc__$1 = (function (){var or__11348__auto__ = acc;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if((function (){var G__34902 = form;
if(G__34902){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__34902.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__34902.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__34902);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__34902);
}
})()){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.shim.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__34901,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__34901,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq34897){
var G__34898 = cljs.core.first.call(null,seq34897);
var seq34897__$1 = cljs.core.next.call(null,seq34897);
var G__34899 = cljs.core.first.call(null,seq34897__$1);
var seq34897__$2 = cljs.core.next.call(null,seq34897__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__34898,G__34899,seq34897__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__11348__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__11348__auto__){
return or__11348__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((function (){var G__34908 = form;
if(G__34908){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__34908.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__34908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__34908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__34908);
}
})()){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__34909){
var vec__34910 = p__34909;
var k = cljs.core.nth.call(null,vec__34910,(0),null);
var v = cljs.core.nth.call(null,vec__34910,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__34903_SHARP_){
return datascript$parser$postwalk.call(null,p1__34903_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__34904_SHARP_){
return datascript$parser$postwalk.call(null,p1__34904_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__11348__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return obj;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34915,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34917 = k34915;
switch (G__34917) {
default:
return cljs.core.get.call(null,self__.__extmap,k34915,else__11946__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Placeholder{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34914){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34918 = cljs.core.keyword_identical_QMARK_;
var expr__34919 = k__11951__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34914),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34914){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Placeholder(G__34914,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34911){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Placeholder(null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34912,acc34913){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34913;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34913){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34913;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__34916){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__34916),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34926,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34928 = (((k34926 instanceof cljs.core.Keyword))?k34926.fqn:null);
switch (G__34928) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34926,else__11946__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Variable{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34925){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34929 = cljs.core.keyword_identical_QMARK_;
var expr__34930 = k__11951__auto__;
if(cljs.core.truth_(pred__34929.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__34930))){
return (new datascript.parser.Variable(G__34925,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34925),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34925){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__34925,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34922){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f34922),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34923,acc34924){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred34923,self__.symbol,acc34924);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34924){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc34924,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__34927){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__34927),null,cljs.core.dissoc.call(null,G__34927,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34937,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34939 = (((k34937 instanceof cljs.core.Keyword))?k34937.fqn:null);
switch (G__34939) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34937,else__11946__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.SrcVar{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34936){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34940 = cljs.core.keyword_identical_QMARK_;
var expr__34941 = k__11951__auto__;
if(cljs.core.truth_(pred__34940.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__34941))){
return (new datascript.parser.SrcVar(G__34936,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34936),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34936){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__34936,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34933){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f34933),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34934,acc34935){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred34934,self__.symbol,acc34935);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34935){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc34935,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__34938){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__34938),null,cljs.core.dissoc.call(null,G__34938,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34948,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34950 = k34948;
switch (G__34950) {
default:
return cljs.core.get.call(null,self__.__extmap,k34948,else__11946__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34947){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34951 = cljs.core.keyword_identical_QMARK_;
var expr__34952 = k__11951__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34947),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34947){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__34947,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34944){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34945,acc34946){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34946;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34946){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34946;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__34949){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__34949),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34959,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34961 = k34959;
switch (G__34961) {
default:
return cljs.core.get.call(null,self__.__extmap,k34959,else__11946__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.RulesVar{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34958){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34962 = cljs.core.keyword_identical_QMARK_;
var expr__34963 = k__11951__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34958),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34958){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.RulesVar(G__34958,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34955){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.RulesVar(null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34956,acc34957){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34957;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34957){
var self__ = this;
var ___13672__auto____$1 = this;
return acc34957;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__34960){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__34960),null));
});


/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34970,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34972 = (((k34970 instanceof cljs.core.Keyword))?k34970.fqn:null);
switch (G__34972) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34970,else__11946__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Constant{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34969){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34973 = cljs.core.keyword_identical_QMARK_;
var expr__34974 = k__11951__auto__;
if(cljs.core.truth_(pred__34973.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__34974))){
return (new datascript.parser.Constant(G__34969,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34969),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34969){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__34969,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34966){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f34966),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34967,acc34968){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred34967,self__.value,acc34968);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34968){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc34968,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__34971){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__34971),null,cljs.core.dissoc.call(null,G__34971,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34981,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34983 = (((k34981 instanceof cljs.core.Keyword))?k34981.fqn:null);
switch (G__34983) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34981,else__11946__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34980){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34984 = cljs.core.keyword_identical_QMARK_;
var expr__34985 = k__11951__auto__;
if(cljs.core.truth_(pred__34984.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__34985))){
return (new datascript.parser.PlainSymbol(G__34980,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34980),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34980){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__34980,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34977){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f34977),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34978,acc34979){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred34978,self__.symbol,acc34979);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34979){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc34979,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__34982){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__34982),null,cljs.core.dissoc.call(null,G__34982,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__11348__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
* @param {*} required
* @param {*} free
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34992,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34994 = (((k34992 instanceof cljs.core.Keyword))?k34992.fqn:null);
switch (G__34994) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34992,else__11946__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.RuleVars{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34991){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34995 = cljs.core.keyword_identical_QMARK_;
var expr__34996 = k__11951__auto__;
if(cljs.core.truth_(pred__34995.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__34996))){
return (new datascript.parser.RuleVars(G__34991,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34995.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__34996))){
return (new datascript.parser.RuleVars(self__.required,G__34991,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34991),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34991){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__34991,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f34988){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f34988),datascript.parser.postwalk.call(null,self__.free,f34988),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred34989,acc34990){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred34989,self__.free,datascript.parser.collect.call(null,pred34989,self__.required,acc34990));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc34990){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc34990,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__34993){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__34993),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__34993),null,cljs.core.dissoc.call(null,G__34993,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35000 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__35000,(0),null);
var rest = cljs.core.nth.call(null,vec__35000,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35005,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35007 = k35005;
switch (G__35007) {
default:
return cljs.core.get.call(null,self__.__extmap,k35005,else__11946__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35004){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35008 = cljs.core.keyword_identical_QMARK_;
var expr__35009 = k__11951__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35004),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35004){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__35004,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35001){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.BindIgnore(null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35002,acc35003){
var self__ = this;
var ___13672__auto____$1 = this;
return acc35003;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35003){
var self__ = this;
var ___13672__auto____$1 = this;
return acc35003;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__35006){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__35006),null));
});


/**
* @constructor
* @param {*} variable
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35016,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35018 = (((k35016 instanceof cljs.core.Keyword))?k35016.fqn:null);
switch (G__35018) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35016,else__11946__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.BindScalar{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35015){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35019 = cljs.core.keyword_identical_QMARK_;
var expr__35020 = k__11951__auto__;
if(cljs.core.truth_(pred__35019.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35020))){
return (new datascript.parser.BindScalar(G__35015,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35015),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35015){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__35015,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35012){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f35012),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35013,acc35014){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35013,self__.variable,acc35014);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35014){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35014,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__35017){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35017),null,cljs.core.dissoc.call(null,G__35017,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
* @param {*} bindings
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35027,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35029 = (((k35027 instanceof cljs.core.Keyword))?k35027.fqn:null);
switch (G__35029) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35027,else__11946__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.BindTuple{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35026){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35030 = cljs.core.keyword_identical_QMARK_;
var expr__35031 = k__11951__auto__;
if(cljs.core.truth_(pred__35030.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__35031))){
return (new datascript.parser.BindTuple(G__35026,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35026),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35026){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__35026,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35023){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f35023),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35024,acc35025){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35024,self__.bindings,acc35025);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35025){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35025,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__35028){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__35028),null,cljs.core.dissoc.call(null,G__35028,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
* @param {*} binding
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35038,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35040 = (((k35038 instanceof cljs.core.Keyword))?k35038.fqn:null);
switch (G__35040) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35038,else__11946__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.BindColl{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35037){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35041 = cljs.core.keyword_identical_QMARK_;
var expr__35042 = k__11951__auto__;
if(cljs.core.truth_(pred__35041.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__35042))){
return (new datascript.parser.BindColl(G__35037,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35037),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35037){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__35037,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35034){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f35034),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35035,acc35036){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35035,self__.binding,acc35036);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35036){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35036,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__35039){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__35039),null,cljs.core.dissoc.call(null,G__35039,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__11336__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__11336__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__11348__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__11336__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__11336__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__11348__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
var or__11348__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__11348__auto____$2)){
return or__11348__auto____$2;
} else {
var or__11348__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__11348__auto____$3)){
return or__11348__auto____$3;
} else {
var or__11348__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__11348__auto____$4)){
return or__11348__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

datascript.parser.IFindVars = (function (){var obj35046 = {};
return obj35046;
})();

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((function (){var and__11336__auto__ = this$;
if(and__11336__auto__){
return this$.datascript$parser$IFindVars$_find_vars$arity$1;
} else {
return and__11336__auto__;
}
})()){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__11984__auto__ = (((this$ == null))?null:this$);
return (function (){var or__11348__auto__ = (datascript.parser._find_vars[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.parser._find_vars["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
})().call(null,this$);
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35051,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35053 = (((k35051 instanceof cljs.core.Keyword))?k35051.fqn:null);
switch (G__35053) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35051,else__11946__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Aggregate{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35050){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35054 = cljs.core.keyword_identical_QMARK_;
var expr__35055 = k__11951__auto__;
if(cljs.core.truth_(pred__35054.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35055))){
return (new datascript.parser.Aggregate(G__35050,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35054.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35055))){
return (new datascript.parser.Aggregate(self__.fn,G__35050,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35050),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35050){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__35050,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35047){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f35047),datascript.parser.postwalk.call(null,self__.args,f35047),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35048,acc35049){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35048,self__.args,datascript.parser.collect.call(null,pred35048,self__.fn,acc35049));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35049){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35049,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__35052){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35052),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35052),null,cljs.core.dissoc.call(null,G__35052,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} variable
* @param {*} pattern
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35062,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35064 = (((k35062 instanceof cljs.core.Keyword))?k35062.fqn:null);
switch (G__35064) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35062,else__11946__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Pull{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35061){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35065 = cljs.core.keyword_identical_QMARK_;
var expr__35066 = k__11951__auto__;
if(cljs.core.truth_(pred__35065.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35066))){
return (new datascript.parser.Pull(G__35061,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35065.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35066))){
return (new datascript.parser.Pull(self__.source,G__35061,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35065.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__35066))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__35061,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35061),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35061){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__35061,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35058){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f35058),datascript.parser.postwalk.call(null,self__.variable,f35058),datascript.parser.postwalk.call(null,self__.pattern,f35058),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35059,acc35060){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35059,self__.pattern,datascript.parser.collect.call(null,pred35059,self__.variable,datascript.parser.collect.call(null,pred35059,self__.source,acc35060)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35060){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35060,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__35063){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35063),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35063),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35063),null,cljs.core.dissoc.call(null,G__35063,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


datascript.parser.IFindElements = (function (){var obj35070 = {};
return obj35070;
})();

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((function (){var and__11336__auto__ = this$;
if(and__11336__auto__){
return this$.datascript$parser$IFindElements$find_elements$arity$1;
} else {
return and__11336__auto__;
}
})()){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__11984__auto__ = (((this$ == null))?null:this$);
return (function (){var or__11348__auto__ = (datascript.parser.find_elements[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.parser.find_elements["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} elements
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35075,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35077 = (((k35075 instanceof cljs.core.Keyword))?k35075.fqn:null);
switch (G__35077) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35075,else__11946__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.FindRel{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35074){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35078 = cljs.core.keyword_identical_QMARK_;
var expr__35079 = k__11951__auto__;
if(cljs.core.truth_(pred__35078.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35079))){
return (new datascript.parser.FindRel(G__35074,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35074),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35074){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__35074,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35071){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f35071),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35072,acc35073){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35072,self__.elements,acc35073);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35073){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35073,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__35076){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35076),null,cljs.core.dissoc.call(null,G__35076,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
* @param {*} element
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35086,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35088 = (((k35086 instanceof cljs.core.Keyword))?k35086.fqn:null);
switch (G__35088) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35086,else__11946__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.FindColl{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35085){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35089 = cljs.core.keyword_identical_QMARK_;
var expr__35090 = k__11951__auto__;
if(cljs.core.truth_(pred__35089.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35090))){
return (new datascript.parser.FindColl(G__35085,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35085),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35085){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__35085,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35082){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f35082),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35083,acc35084){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35083,self__.element,acc35084);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35084){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35084,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__35087){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35087),null,cljs.core.dissoc.call(null,G__35087,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
* @param {*} element
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35097,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35099 = (((k35097 instanceof cljs.core.Keyword))?k35097.fqn:null);
switch (G__35099) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35097,else__11946__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.FindScalar{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35096){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35100 = cljs.core.keyword_identical_QMARK_;
var expr__35101 = k__11951__auto__;
if(cljs.core.truth_(pred__35100.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35101))){
return (new datascript.parser.FindScalar(G__35096,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35096),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35096){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__35096,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35093){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f35093),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35094,acc35095){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35094,self__.element,acc35095);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35095){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35095,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__35098){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35098),null,cljs.core.dissoc.call(null,G__35098,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
* @param {*} elements
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35108,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35110 = (((k35108 instanceof cljs.core.Keyword))?k35108.fqn:null);
switch (G__35110) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35108,else__11946__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.FindTuple{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35107){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35111 = cljs.core.keyword_identical_QMARK_;
var expr__35112 = k__11951__auto__;
if(cljs.core.truth_(pred__35111.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35112))){
return (new datascript.parser.FindTuple(G__35107,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35107),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35107){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__35107,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35104){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f35104),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35105,acc35106){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35105,self__.elements,acc35106);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35106){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35106,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__35109){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35109),null,cljs.core.dissoc.call(null,G__35109,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__35116 = form;
var fn = cljs.core.nth.call(null,vec__35116,(0),null);
var args = cljs.core.nthnext.call(null,vec__35116,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__11336__auto__ = fn_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
return args_STAR_;
} else {
return and__11336__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__35118 = form;
var _ = cljs.core.nth.call(null,vec__35118,(0),null);
var fn = cljs.core.nth.call(null,vec__35118,(1),null);
var args = cljs.core.nthnext.call(null,vec__35118,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__11336__auto__ = fn_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
return args_STAR_;
} else {
return and__11336__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__35120 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__35120,(0),null);
var pattern = cljs.core.nth.call(null,vec__35120,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__11348__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__11336__auto__ = src_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__11336__auto____$1)){
return pattern_STAR_;
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__11348__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
var or__11348__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__11348__auto____$2)){
return or__11348__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__35122 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__35122__$1 = (((G__35122 == null))?null:(new datascript.parser.FindRel(G__35122,null,null,null)));
return G__35122__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__35124 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__35124__$1 = (((G__35124 == null))?null:(new datascript.parser.FindColl(G__35124,null,null,null)));
return G__35124__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__35126 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__35126__$1 = (((G__35126 == null))?null:(new datascript.parser.FindScalar(G__35126,null,null,null)));
return G__35126__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__35128 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__35128__$1 = (((G__35128 == null))?null:(new datascript.parser.FindTuple(G__35128,null,null,null)));
return G__35128__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__11348__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
var or__11348__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__11348__auto____$2)){
return or__11348__auto____$2;
} else {
var or__11348__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__11348__auto____$3)){
return or__11348__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__11348__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__11348__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__11348__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
* @param {*} source
* @param {*} pattern
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35133,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35135 = (((k35133 instanceof cljs.core.Keyword))?k35133.fqn:null);
switch (G__35135) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35133,else__11946__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Pattern{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35132){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35136 = cljs.core.keyword_identical_QMARK_;
var expr__35137 = k__11951__auto__;
if(cljs.core.truth_(pred__35136.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35137))){
return (new datascript.parser.Pattern(G__35132,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35136.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__35137))){
return (new datascript.parser.Pattern(self__.source,G__35132,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35132),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35132){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__35132,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35129){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f35129),datascript.parser.postwalk.call(null,self__.pattern,f35129),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35130,acc35131){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35130,self__.pattern,datascript.parser.collect.call(null,pred35130,self__.source,acc35131));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35131){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35131,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__35134){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35134),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35134),null,cljs.core.dissoc.call(null,G__35134,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35144,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35146 = (((k35144 instanceof cljs.core.Keyword))?k35144.fqn:null);
switch (G__35146) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35144,else__11946__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Predicate{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35143){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35147 = cljs.core.keyword_identical_QMARK_;
var expr__35148 = k__11951__auto__;
if(cljs.core.truth_(pred__35147.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35148))){
return (new datascript.parser.Predicate(G__35143,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35147.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35148))){
return (new datascript.parser.Predicate(self__.fn,G__35143,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35143),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35143){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__35143,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35140){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f35140),datascript.parser.postwalk.call(null,self__.args,f35140),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35141,acc35142){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35141,self__.args,datascript.parser.collect.call(null,pred35141,self__.fn,acc35142));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35142){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35142,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__35145){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35145),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35145),null,cljs.core.dissoc.call(null,G__35145,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} binding
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35155,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35157 = (((k35155 instanceof cljs.core.Keyword))?k35155.fqn:null);
switch (G__35157) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35155,else__11946__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Function{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35154){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35158 = cljs.core.keyword_identical_QMARK_;
var expr__35159 = k__11951__auto__;
if(cljs.core.truth_(pred__35158.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35159))){
return (new datascript.parser.Function(G__35154,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35158.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35159))){
return (new datascript.parser.Function(self__.fn,G__35154,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35158.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__35159))){
return (new datascript.parser.Function(self__.fn,self__.args,G__35154,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35154),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35154){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__35154,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35151){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f35151),datascript.parser.postwalk.call(null,self__.args,f35151),datascript.parser.postwalk.call(null,self__.binding,f35151),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35152,acc35153){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35152,self__.binding,datascript.parser.collect.call(null,pred35152,self__.args,datascript.parser.collect.call(null,pred35152,self__.fn,acc35153)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35153){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35153,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__35156){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35156),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35156),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__35156),null,cljs.core.dissoc.call(null,G__35156,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} name
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35166,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35168 = (((k35166 instanceof cljs.core.Keyword))?k35166.fqn:null);
switch (G__35168) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35166,else__11946__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35165){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35169 = cljs.core.keyword_identical_QMARK_;
var expr__35170 = k__11951__auto__;
if(cljs.core.truth_(pred__35169.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35170))){
return (new datascript.parser.RuleExpr(G__35165,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35169.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__35170))){
return (new datascript.parser.RuleExpr(self__.source,G__35165,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35169.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35170))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__35165,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35165),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35165){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__35165,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35162){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f35162),datascript.parser.postwalk.call(null,self__.name,f35162),datascript.parser.postwalk.call(null,self__.args,f35162),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35163,acc35164){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35163,self__.args,datascript.parser.collect.call(null,pred35163,self__.name,datascript.parser.collect.call(null,pred35163,self__.source,acc35164)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35164){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35164,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__35167){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35167),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35167),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35167),null,cljs.core.dissoc.call(null,G__35167,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35177,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35179 = (((k35177 instanceof cljs.core.Keyword))?k35177.fqn:null);
switch (G__35179) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35177,else__11946__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Not{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35176){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35180 = cljs.core.keyword_identical_QMARK_;
var expr__35181 = k__11951__auto__;
if(cljs.core.truth_(pred__35180.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35181))){
return (new datascript.parser.Not(G__35176,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35180.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__35181))){
return (new datascript.parser.Not(self__.source,G__35176,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35180.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35181))){
return (new datascript.parser.Not(self__.source,self__.vars,G__35176,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35176),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35176){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__35176,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35173){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f35173),datascript.parser.postwalk.call(null,self__.vars,f35173),datascript.parser.postwalk.call(null,self__.clauses,f35173),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35174,acc35175){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35174,self__.clauses,datascript.parser.collect.call(null,pred35174,self__.vars,datascript.parser.collect.call(null,pred35174,self__.source,acc35175)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35175){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35175,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__35178){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35178),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__35178),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35178),null,cljs.core.dissoc.call(null,G__35178,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} rule_vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35188,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35190 = (((k35188 instanceof cljs.core.Keyword))?k35188.fqn:null);
switch (G__35190) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35188,else__11946__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Or{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35187){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35191 = cljs.core.keyword_identical_QMARK_;
var expr__35192 = k__11951__auto__;
if(cljs.core.truth_(pred__35191.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35192))){
return (new datascript.parser.Or(G__35187,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35191.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__35192))){
return (new datascript.parser.Or(self__.source,G__35187,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35191.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35192))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__35187,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35187),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35187){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__35187,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35184){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f35184),datascript.parser.postwalk.call(null,self__.rule_vars,f35184),datascript.parser.postwalk.call(null,self__.clauses,f35184),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35185,acc35186){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35185,self__.clauses,datascript.parser.collect.call(null,pred35185,self__.rule_vars,datascript.parser.collect.call(null,pred35185,self__.source,acc35186)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35186){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35186,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__35189){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35189),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__35189),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35189),null,cljs.core.dissoc.call(null,G__35189,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35199,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35201 = (((k35199 instanceof cljs.core.Keyword))?k35199.fqn:null);
switch (G__35201) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35199,else__11946__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.And{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35198){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35202 = cljs.core.keyword_identical_QMARK_;
var expr__35203 = k__11951__auto__;
if(cljs.core.truth_(pred__35202.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35203))){
return (new datascript.parser.And(G__35198,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35198),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35198){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__35198,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35195){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f35195),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35196,acc35197){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35196,self__.clauses,acc35197);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35197){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35197,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__35200){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35200),null,cljs.core.dissoc.call(null,G__35200,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__11348__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35207 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35207,(0),null);
var next_form = cljs.core.nth.call(null,vec__35207,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35209 = form;
var fn = cljs.core.nth.call(null,vec__35209,(0),null);
var args = cljs.core.nthnext.call(null,vec__35209,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__11348__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__11336__auto__ = fn_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
return args_STAR_;
} else {
return and__11336__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35211 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__35211,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__35211,(1),null);
return (new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__35214 = form;
var call = cljs.core.nth.call(null,vec__35214,(0),null);
var binding = cljs.core.nth.call(null,vec__35214,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35215 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__35215,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__35215,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return (new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35218 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35218,(0),null);
var next_form = cljs.core.nth.call(null,vec__35218,(1),null);
var vec__35219 = next_form;
var name = cljs.core.nth.call(null,vec__35219,(0),null);
var args = cljs.core.nthnext.call(null,vec__35219,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requieres at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((function (){var G__35221 = form;
if(G__35221){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__35221.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__35221.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__35221);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__35221);
}
})()){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_35222 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_35222)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_35222)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35225 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35225,(0),null);
var next_form = cljs.core.nth.call(null,vec__35225,(1),null);
var vec__35226 = next_form;
var sym = cljs.core.nth.call(null,vec__35226,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__35226,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35229 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35229,(0),null);
var next_form = cljs.core.nth.call(null,vec__35229,(1),null);
var vec__35230 = next_form;
var sym = cljs.core.nth.call(null,vec__35230,(0),null);
var vars = cljs.core.nth.call(null,vec__35230,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__35230,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_((function (){var and__11336__auto__ = vars_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
return clauses_STAR_;
} else {
return and__11336__auto__;
}
})())){
return datascript.parser.validate_not.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__35237 = clause;
var map__35237__$1 = ((cljs.core.seq_QMARK_.call(null,map__35237))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var map__35238 = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__35238__$1 = ((cljs.core.seq_QMARK_.call(null,map__35238))?cljs.core.apply.call(null,cljs.core.hash_map,map__35238):map__35238);
var required = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__35239_35243 = cljs.core.seq.call(null,clauses);
var chunk__35240_35244 = null;
var count__35241_35245 = (0);
var i__35242_35246 = (0);
while(true){
if((i__35242_35246 < count__35241_35245)){
var clause_35247__$1 = cljs.core._nth.call(null,chunk__35240_35244,i__35242_35246);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_35247__$1], null),form);

var G__35248 = seq__35239_35243;
var G__35249 = chunk__35240_35244;
var G__35250 = count__35241_35245;
var G__35251 = (i__35242_35246 + (1));
seq__35239_35243 = G__35248;
chunk__35240_35244 = G__35249;
count__35241_35245 = G__35250;
i__35242_35246 = G__35251;
continue;
} else {
var temp__4425__auto___35252 = cljs.core.seq.call(null,seq__35239_35243);
if(temp__4425__auto___35252){
var seq__35239_35253__$1 = temp__4425__auto___35252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35239_35253__$1)){
var c__12133__auto___35254 = cljs.core.chunk_first.call(null,seq__35239_35253__$1);
var G__35255 = cljs.core.chunk_rest.call(null,seq__35239_35253__$1);
var G__35256 = c__12133__auto___35254;
var G__35257 = cljs.core.count.call(null,c__12133__auto___35254);
var G__35258 = (0);
seq__35239_35243 = G__35255;
chunk__35240_35244 = G__35256;
count__35241_35245 = G__35257;
i__35242_35246 = G__35258;
continue;
} else {
var clause_35259__$1 = cljs.core.first.call(null,seq__35239_35253__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_35259__$1], null),form);

var G__35260 = cljs.core.next.call(null,seq__35239_35253__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__35239_35243 = G__35260;
chunk__35240_35244 = G__35261;
count__35241_35245 = G__35262;
i__35242_35246 = G__35263;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35266 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35266,(0),null);
var next_form = cljs.core.nth.call(null,vec__35266,(1),null);
var vec__35267 = next_form;
var sym = cljs.core.nth.call(null,vec__35267,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__35267,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__35270 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__35270,(0),null);
var next_form = cljs.core.nth.call(null,vec__35270,(1),null);
var vec__35271 = next_form;
var sym = cljs.core.nth.call(null,vec__35271,(0),null);
var vars = cljs.core.nth.call(null,vec__35271,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__35271,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_((function (){var and__11336__auto__ = vars_STAR_;
if(cljs.core.truth_(and__11336__auto__)){
return clauses_STAR_;
} else {
return and__11336__auto__;
}
})())){
return datascript.parser.validate_or.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__11348__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__11348__auto____$1)){
return or__11348__auto____$1;
} else {
var or__11348__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__11348__auto____$2)){
return or__11348__auto____$2;
} else {
var or__11348__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__11348__auto____$3)){
return or__11348__auto____$3;
} else {
var or__11348__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__11348__auto____$4)){
return or__11348__auto____$4;
} else {
var or__11348__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__11348__auto____$5)){
return or__11348__auto____$5;
} else {
var or__11348__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__11348__auto____$6)){
return or__11348__auto____$6;
} else {
var or__11348__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__11348__auto____$7)){
return or__11348__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__11348__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,form);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
* @param {*} vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35276,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35278 = (((k35276 instanceof cljs.core.Keyword))?k35276.fqn:null);
switch (G__35278) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35276,else__11946__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35275){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35279 = cljs.core.keyword_identical_QMARK_;
var expr__35280 = k__11951__auto__;
if(cljs.core.truth_(pred__35279.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__35280))){
return (new datascript.parser.RuleBranch(G__35275,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35279.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__35280))){
return (new datascript.parser.RuleBranch(self__.vars,G__35275,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35275),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35275){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__35275,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35272){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f35272),datascript.parser.postwalk.call(null,self__.clauses,f35272),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35273,acc35274){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35273,self__.clauses,datascript.parser.collect.call(null,pred35273,self__.vars,acc35274));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35274){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35274,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__35277){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__35277),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__35277),null,cljs.core.dissoc.call(null,G__35277,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} name
* @param {*} branches
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35287,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35289 = (((k35287 instanceof cljs.core.Keyword))?k35287.fqn:null);
switch (G__35289) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35287,else__11946__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Rule{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35286){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35290 = cljs.core.keyword_identical_QMARK_;
var expr__35291 = k__11951__auto__;
if(cljs.core.truth_(pred__35290.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__35291))){
return (new datascript.parser.Rule(G__35286,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35290.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__35291))){
return (new datascript.parser.Rule(self__.name,G__35286,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35286),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35286){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__35286,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35283){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f35283),datascript.parser.postwalk.call(null,self__.branches,f35283),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35284,acc35285){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35284,self__.branches,datascript.parser.collect.call(null,pred35284,self__.name,acc35285));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35285){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35285,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__35288){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35288),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__35288),null,cljs.core.dissoc.call(null,G__35288,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__35294_SHARP_){
return (p1__35294_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__35295_SHARP_){
return (p1__35295_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35298 = form;
var head = cljs.core.nth.call(null,vec__35298,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__35298,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__35299 = head;
var name = cljs.core.nth.call(null,vec__35299,(0),null);
var vars = cljs.core.nthnext.call(null,vec__35299,(1));
var name_STAR_ = (function (){var or__11348__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__11348__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses));
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__35306 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__35308 = null;
var count__35309 = (0);
var i__35310 = (0);
while(true){
if((i__35310 < count__35309)){
var b = cljs.core._nth.call(null,chunk__35308,i__35310);
var vars_35312 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_35312))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_35312)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__35313 = seq__35306;
var G__35314 = chunk__35308;
var G__35315 = count__35309;
var G__35316 = (i__35310 + (1));
seq__35306 = G__35313;
chunk__35308 = G__35314;
count__35309 = G__35315;
i__35310 = G__35316;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35306);
if(temp__4425__auto__){
var seq__35306__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35306__$1)){
var c__12133__auto__ = cljs.core.chunk_first.call(null,seq__35306__$1);
var G__35317 = cljs.core.chunk_rest.call(null,seq__35306__$1);
var G__35318 = c__12133__auto__;
var G__35319 = cljs.core.count.call(null,c__12133__auto__);
var G__35320 = (0);
seq__35306 = G__35317;
chunk__35308 = G__35318;
count__35309 = G__35319;
i__35310 = G__35320;
continue;
} else {
var b = cljs.core.first.call(null,seq__35306__$1);
var vars_35321 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_35321))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_35321)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__35322 = cljs.core.next.call(null,seq__35306__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__35306 = G__35322;
chunk__35308 = G__35323;
count__35309 = G__35324;
i__35310 = G__35325;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__12102__auto__ = (function datascript$parser$parse_rules_$_iter__35335(s__35336){
return (new cljs.core.LazySeq(null,(function (){
var s__35336__$1 = s__35336;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35336__$1);
if(temp__4425__auto__){
var s__35336__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35336__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__35336__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__35338 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__35337 = (0);
while(true){
if((i__35337 < size__12101__auto__)){
var vec__35341 = cljs.core._nth.call(null,c__12100__auto__,i__35337);
var name = cljs.core.nth.call(null,vec__35341,(0),null);
var branches = cljs.core.nth.call(null,vec__35341,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__35337,vec__35341,name,branches,c__12100__auto__,size__12101__auto__,b__35338,s__35336__$2,temp__4425__auto__){
return (function (p1__35326_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__35326_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__35326_SHARP_),null,null,null));
});})(i__35337,vec__35341,name,branches,c__12100__auto__,size__12101__auto__,b__35338,s__35336__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__35338,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__35343 = (i__35337 + (1));
i__35337 = G__35343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35338),datascript$parser$parse_rules_$_iter__35335.call(null,cljs.core.chunk_rest.call(null,s__35336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35338),null);
}
} else {
var vec__35342 = cljs.core.first.call(null,s__35336__$2);
var name = cljs.core.nth.call(null,vec__35342,(0),null);
var branches = cljs.core.nth.call(null,vec__35342,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__35342,name,branches,s__35336__$2,temp__4425__auto__){
return (function (p1__35326_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__35326_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__35326_SHARP_),null,null,null));
});})(vec__35342,name,branches,s__35336__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__35335.call(null,cljs.core.rest.call(null,s__35336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12102__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
* @param {*} find
* @param {*} with$
* @param {*} in$
* @param {*} where
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k35348,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__35350 = (((k35348 instanceof cljs.core.Keyword))?k35348.fqn:null);
switch (G__35350) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35348,else__11946__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.parser.Query{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__35347){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__35351 = cljs.core.keyword_identical_QMARK_;
var expr__35352 = k__11951__auto__;
if(cljs.core.truth_(pred__35351.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__35352))){
return (new datascript.parser.Query(G__35347,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35351.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__35352))){
return (new datascript.parser.Query(self__.find,G__35347,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35351.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__35352))){
return (new datascript.parser.Query(self__.find,self__.with$,G__35347,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35351.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__35352))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__35347,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__35347),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__35347){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__35347,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__13670__auto__,f35344){
var self__ = this;
var this__13670__auto____$1 = this;
var new__13671__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f35344),datascript.parser.postwalk.call(null,self__.with$,f35344),datascript.parser.postwalk.call(null,self__.in$,f35344),datascript.parser.postwalk.call(null,self__.where,f35344),null,null,null));
new__13671__auto__.__meta = cljs.core.meta.call(null,this__13670__auto____$1);

return new__13671__auto__;
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___13672__auto__,pred35345,acc35346){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect.call(null,pred35345,self__.where,datascript.parser.collect.call(null,pred35345,self__.in$,datascript.parser.collect.call(null,pred35345,self__.with$,datascript.parser.collect.call(null,pred35345,self__.find,acc35346))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___13672__auto__,acc35346){
var self__ = this;
var ___13672__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35346,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__35349){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__35349),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__35349),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__35349),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__35349),null,cljs.core.dissoc.call(null,G__35349,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__35355 = parsed;
var G__35356 = q;
var G__35357 = cljs.core.next.call(null,qs);
parsed = G__35355;
key = G__35356;
qs = G__35357;
continue;
} else {
var G__35358 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__35359 = key;
var G__35360 = cljs.core.next.call(null,qs);
parsed = G__35358;
key = G__35359;
qs = G__35360;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_35367 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_35368 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_35369 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_35370 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_35371 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_35367,with_vars_35368),clojure.set.union.call(null,where_vars_35370,in_vars_35369));
var shared_35372 = clojure.set.intersection.call(null,find_vars_35367,with_vars_35368);
if(cljs.core.empty_QMARK_.call(null,unknown_35371)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_35371)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_35371,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_35372)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_35372)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_35372,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_35373 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_35374 = datascript.parser.collect.call(null,((function (in_vars_35373){
return (function (p1__35361_SHARP_){
return (p1__35361_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_35373))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_35375 = datascript.parser.collect.call(null,((function (in_vars_35373,in_sources_35374){
return (function (p1__35362_SHARP_){
return (p1__35362_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_35373,in_sources_35374))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__11336__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_35373);
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_35374);
if(cljs.core.truth_(and__11336__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_35375);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_35376 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_35376))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_35377 = datascript.parser.collect.call(null,(function (p1__35363_SHARP_){
return (p1__35363_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_35378 = datascript.parser.collect.call(null,((function (in_sources_35377){
return (function (p1__35364_SHARP_){
return (p1__35364_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_35377))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_35379 = clojure.set.difference.call(null,where_sources_35378,in_sources_35377);
if(cljs.core.empty_QMARK_.call(null,unknown_35379)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_35379)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_35379,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__35365_SHARP_){
return (p1__35365_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__35366_SHARP_){
return (p1__35366_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map
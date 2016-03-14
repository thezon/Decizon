// Compiled by ClojureScript 0.0-3291 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} unit
* @param {*} magnitude
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k33105,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__33107 = (((k33105 instanceof cljs.core.Keyword))?k33105.fqn:null);
switch (G__33107) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33105,else__11946__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#garden.types.CSSUnit{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
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

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__33104){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__33108 = cljs.core.keyword_identical_QMARK_;
var expr__33109 = k__11951__auto__;
if(cljs.core.truth_(pred__33108.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__33109))){
return (new garden.types.CSSUnit(G__33104,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33108.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__33109))){
return (new garden.types.CSSUnit(self__.unit,G__33104,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__33104),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__33104){
var self__ = this;
var this__11942__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__33104,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__33106){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__33106),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__33106),null,cljs.core.dissoc.call(null,G__33106,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
});


/**
* @constructor
* @param {*} function$
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k33113,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__33115 = (((k33113 instanceof cljs.core.Keyword))?k33113.fqn:null);
switch (G__33115) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33113,else__11946__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#garden.types.CSSFunction{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
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

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__33112){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__33116 = cljs.core.keyword_identical_QMARK_;
var expr__33117 = k__11951__auto__;
if(cljs.core.truth_(pred__33116.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__33117))){
return (new garden.types.CSSFunction(G__33112,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33116.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__33117))){
return (new garden.types.CSSFunction(self__.function$,G__33112,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__33112),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__33112){
var self__ = this;
var this__11942__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__33112,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__33114){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__33114),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__33114),null,cljs.core.dissoc.call(null,G__33114,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} identifier
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k33121,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__33123 = (((k33121 instanceof cljs.core.Keyword))?k33121.fqn:null);
switch (G__33123) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33121,else__11946__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#garden.types.CSSAtRule{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
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

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__33120){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__33124 = cljs.core.keyword_identical_QMARK_;
var expr__33125 = k__11951__auto__;
if(cljs.core.truth_(pred__33124.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__33125))){
return (new garden.types.CSSAtRule(G__33120,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33124.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__33125))){
return (new garden.types.CSSAtRule(self__.identifier,G__33120,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__33120),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__33120){
var self__ = this;
var this__11942__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__33120,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__33122){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__33122),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__33122),null,cljs.core.dissoc.call(null,G__33122,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map
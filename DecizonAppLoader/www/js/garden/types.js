// Compiled by ClojureScript 0.0-3211 {}
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
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11007__auto__,k__11008__auto__){
var self__ = this;
var this__11007__auto____$1 = this;
return cljs.core._lookup.call(null,this__11007__auto____$1,k__11008__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11009__auto__,k24966,else__11010__auto__){
var self__ = this;
var this__11009__auto____$1 = this;
var G__24968 = (((k24966 instanceof cljs.core.Keyword))?k24966.fqn:null);
switch (G__24968) {
case "magnitude":
return self__.magnitude;

break;
case "unit":
return self__.unit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24966,else__11010__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11021__auto__,writer__11022__auto__,opts__11023__auto__){
var self__ = this;
var this__11021__auto____$1 = this;
var pr_pair__11024__auto__ = ((function (this__11021__auto____$1){
return (function (keyval__11025__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,cljs.core.pr_writer,""," ","",opts__11023__auto__,keyval__11025__auto__);
});})(this__11021__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,pr_pair__11024__auto__,"#garden.types.CSSUnit{",", ","}",opts__11023__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11001__auto__){
var self__ = this;
var this__11001__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11011__auto__){
var self__ = this;
var this__11011__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11002__auto__){
var self__ = this;
var this__11002__auto____$1 = this;
var h__10828__auto__ = self__.__hash;
if(!((h__10828__auto__ == null))){
return h__10828__auto__;
} else {
var h__10828__auto____$1 = cljs.core.hash_imap.call(null,this__11002__auto____$1);
self__.__hash = h__10828__auto____$1;

return h__10828__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11003__auto__,other__11004__auto__){
var self__ = this;
var this__11003__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10400__auto__ = other__11004__auto__;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = (this__11003__auto____$1.constructor === other__11004__auto__.constructor);
if(and__10400__auto____$1){
return cljs.core.equiv_map.call(null,this__11003__auto____$1,other__11004__auto__);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11016__auto__,k__11017__auto__){
var self__ = this;
var this__11016__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__11017__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11016__auto____$1),self__.__meta),k__11017__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11017__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11014__auto__,k__11015__auto__,G__24965){
var self__ = this;
var this__11014__auto____$1 = this;
var pred__24969 = cljs.core.keyword_identical_QMARK_;
var expr__24970 = k__11015__auto__;
if(cljs.core.truth_(pred__24969.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__24970))){
return (new garden.types.CSSUnit(G__24965,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24969.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__24970))){
return (new garden.types.CSSUnit(self__.unit,G__24965,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11015__auto__,G__24965),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11019__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11006__auto__,G__24965){
var self__ = this;
var this__11006__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__24965,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11012__auto__,entry__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11013__auto__)){
return cljs.core._assoc.call(null,this__11012__auto____$1,cljs.core._nth.call(null,entry__11013__auto__,(0)),cljs.core._nth.call(null,entry__11013__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11012__auto____$1,entry__11013__auto__);
}
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__11041__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__11041__auto__,writer__11042__auto__){
return cljs.core._write.call(null,writer__11042__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__24967){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__24967),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__24967),null,cljs.core.dissoc.call(null,G__24967,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
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
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11007__auto__,k__11008__auto__){
var self__ = this;
var this__11007__auto____$1 = this;
return cljs.core._lookup.call(null,this__11007__auto____$1,k__11008__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11009__auto__,k24974,else__11010__auto__){
var self__ = this;
var this__11009__auto____$1 = this;
var G__24976 = (((k24974 instanceof cljs.core.Keyword))?k24974.fqn:null);
switch (G__24976) {
case "args":
return self__.args;

break;
case "function":
return self__.function$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24974,else__11010__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11021__auto__,writer__11022__auto__,opts__11023__auto__){
var self__ = this;
var this__11021__auto____$1 = this;
var pr_pair__11024__auto__ = ((function (this__11021__auto____$1){
return (function (keyval__11025__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,cljs.core.pr_writer,""," ","",opts__11023__auto__,keyval__11025__auto__);
});})(this__11021__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,pr_pair__11024__auto__,"#garden.types.CSSFunction{",", ","}",opts__11023__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11001__auto__){
var self__ = this;
var this__11001__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11011__auto__){
var self__ = this;
var this__11011__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11002__auto__){
var self__ = this;
var this__11002__auto____$1 = this;
var h__10828__auto__ = self__.__hash;
if(!((h__10828__auto__ == null))){
return h__10828__auto__;
} else {
var h__10828__auto____$1 = cljs.core.hash_imap.call(null,this__11002__auto____$1);
self__.__hash = h__10828__auto____$1;

return h__10828__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11003__auto__,other__11004__auto__){
var self__ = this;
var this__11003__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10400__auto__ = other__11004__auto__;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = (this__11003__auto____$1.constructor === other__11004__auto__.constructor);
if(and__10400__auto____$1){
return cljs.core.equiv_map.call(null,this__11003__auto____$1,other__11004__auto__);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11016__auto__,k__11017__auto__){
var self__ = this;
var this__11016__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__11017__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11016__auto____$1),self__.__meta),k__11017__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11017__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11014__auto__,k__11015__auto__,G__24973){
var self__ = this;
var this__11014__auto____$1 = this;
var pred__24977 = cljs.core.keyword_identical_QMARK_;
var expr__24978 = k__11015__auto__;
if(cljs.core.truth_(pred__24977.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__24978))){
return (new garden.types.CSSFunction(G__24973,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24977.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24978))){
return (new garden.types.CSSFunction(self__.function$,G__24973,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11015__auto__,G__24973),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11019__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11006__auto__,G__24973){
var self__ = this;
var this__11006__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__24973,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11012__auto__,entry__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11013__auto__)){
return cljs.core._assoc.call(null,this__11012__auto____$1,cljs.core._nth.call(null,entry__11013__auto__,(0)),cljs.core._nth.call(null,entry__11013__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11012__auto____$1,entry__11013__auto__);
}
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__11041__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__11041__auto__,writer__11042__auto__){
return cljs.core._write.call(null,writer__11042__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__24975){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__24975),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24975),null,cljs.core.dissoc.call(null,G__24975,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11007__auto__,k__11008__auto__){
var self__ = this;
var this__11007__auto____$1 = this;
return cljs.core._lookup.call(null,this__11007__auto____$1,k__11008__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11009__auto__,k24982,else__11010__auto__){
var self__ = this;
var this__11009__auto____$1 = this;
var G__24984 = (((k24982 instanceof cljs.core.Keyword))?k24982.fqn:null);
switch (G__24984) {
case "value":
return self__.value;

break;
case "identifier":
return self__.identifier;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24982,else__11010__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11021__auto__,writer__11022__auto__,opts__11023__auto__){
var self__ = this;
var this__11021__auto____$1 = this;
var pr_pair__11024__auto__ = ((function (this__11021__auto____$1){
return (function (keyval__11025__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,cljs.core.pr_writer,""," ","",opts__11023__auto__,keyval__11025__auto__);
});})(this__11021__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11022__auto__,pr_pair__11024__auto__,"#garden.types.CSSAtRule{",", ","}",opts__11023__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11001__auto__){
var self__ = this;
var this__11001__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11011__auto__){
var self__ = this;
var this__11011__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11002__auto__){
var self__ = this;
var this__11002__auto____$1 = this;
var h__10828__auto__ = self__.__hash;
if(!((h__10828__auto__ == null))){
return h__10828__auto__;
} else {
var h__10828__auto____$1 = cljs.core.hash_imap.call(null,this__11002__auto____$1);
self__.__hash = h__10828__auto____$1;

return h__10828__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11003__auto__,other__11004__auto__){
var self__ = this;
var this__11003__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10400__auto__ = other__11004__auto__;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = (this__11003__auto____$1.constructor === other__11004__auto__.constructor);
if(and__10400__auto____$1){
return cljs.core.equiv_map.call(null,this__11003__auto____$1,other__11004__auto__);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11016__auto__,k__11017__auto__){
var self__ = this;
var this__11016__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__11017__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11016__auto____$1),self__.__meta),k__11017__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11017__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11014__auto__,k__11015__auto__,G__24981){
var self__ = this;
var this__11014__auto____$1 = this;
var pred__24985 = cljs.core.keyword_identical_QMARK_;
var expr__24986 = k__11015__auto__;
if(cljs.core.truth_(pred__24985.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__24986))){
return (new garden.types.CSSAtRule(G__24981,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24985.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24986))){
return (new garden.types.CSSAtRule(self__.identifier,G__24981,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11015__auto__,G__24981),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11019__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11006__auto__,G__24981){
var self__ = this;
var this__11006__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__24981,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11012__auto__,entry__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11013__auto__)){
return cljs.core._assoc.call(null,this__11012__auto____$1,cljs.core._nth.call(null,entry__11013__auto__,(0)),cljs.core._nth.call(null,entry__11013__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11012__auto____$1,entry__11013__auto__);
}
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__11041__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__11041__auto__,writer__11042__auto__){
return cljs.core._write.call(null,writer__11042__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__24983){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__24983),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24983),null,cljs.core.dissoc.call(null,G__24983,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map
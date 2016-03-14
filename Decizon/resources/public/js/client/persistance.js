// Compiled by ClojureScript 0.0-3291 {}
goog.provide('client.persistance');
goog.require('cljs.core');
goog.require('datascript');
goog.require('client.tools');
client.persistance.user_id = (123);
client.persistance.db = cljs.core.atom.call(null,null);

/**
* @constructor
* @param {*} id
* @param {*} name
* @param {*} seq
* @param {*} weight
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.persistance.item = (function (id,name,seq,weight,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.seq = seq;
this.weight = weight;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.persistance.item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.persistance.item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k28088,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__28090 = (((k28088 instanceof cljs.core.Keyword))?k28088.fqn:null);
switch (G__28090) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "seq":
return self__.seq;

break;
case "weight":
return self__.weight;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28088,else__11939__auto__);

}
});

client.persistance.item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.persistance.item{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null))], null),self__.__extmap));
});

client.persistance.item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.persistance.item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.persistance.item(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,self__.__extmap,self__.__hash));
});

client.persistance.item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

client.persistance.item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
var self__ = this;
var this__11931__auto____$1 = this;
var h__11757__auto__ = self__.__hash;
if(!((h__11757__auto__ == null))){
return h__11757__auto__;
} else {
var h__11757__auto____$1 = cljs.core.hash_imap.call(null,this__11931__auto____$1);
self__.__hash = h__11757__auto____$1;

return h__11757__auto____$1;
}
});

client.persistance.item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
var self__ = this;
var this__11932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11329__auto__ = other__11933__auto__;
if(cljs.core.truth_(and__11329__auto__)){
var and__11329__auto____$1 = (this__11932__auto____$1.constructor === other__11933__auto__.constructor);
if(and__11329__auto____$1){
return cljs.core.equiv_map.call(null,this__11932__auto____$1,other__11933__auto__);
} else {
return and__11329__auto____$1;
}
} else {
return and__11329__auto__;
}
})())){
return true;
} else {
return false;
}
});

client.persistance.item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.persistance.item(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.persistance.item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__28087){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__28091 = cljs.core.keyword_identical_QMARK_;
var expr__28092 = k__11944__auto__;
if(cljs.core.truth_(pred__28091.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__28092))){
return (new client.persistance.item(G__28087,self__.name,self__.seq,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28091.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28092))){
return (new client.persistance.item(self__.id,G__28087,self__.seq,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28091.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28092))){
return (new client.persistance.item(self__.id,self__.name,G__28087,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28091.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__28092))){
return (new client.persistance.item(self__.id,self__.name,self__.seq,G__28087,self__.__meta,self__.__extmap,null));
} else {
return (new client.persistance.item(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__28087),null));
}
}
}
}
});

client.persistance.item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null))], null),self__.__extmap));
});

client.persistance.item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__28087){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.persistance.item(self__.id,self__.name,self__.seq,self__.weight,G__28087,self__.__extmap,self__.__hash));
});

client.persistance.item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.persistance.item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"weight","weight",377735322,null)], null);
});

client.persistance.item.cljs$lang$type = true;

client.persistance.item.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.persistance/item");
});

client.persistance.item.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.persistance/item");
});

client.persistance.__GT_item = (function client$persistance$__GT_item(id,name,seq,weight){
return (new client.persistance.item(id,name,seq,weight,null,null,null));
});

client.persistance.map__GT_item = (function client$persistance$map__GT_item(G__28089){
return (new client.persistance.item(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__28089),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28089),new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28089),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__28089),null,cljs.core.dissoc.call(null,G__28089,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"weight","weight",-1262796205)),null));
});


/**
* @constructor
* @param {*} id
* @param {*} name
* @param {*} seq
* @param {*} weight
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.persistance.category = (function (id,name,seq,weight,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.seq = seq;
this.weight = weight;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.persistance.category.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.persistance.category.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k28096,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__28098 = (((k28096 instanceof cljs.core.Keyword))?k28096.fqn:null);
switch (G__28098) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "seq":
return self__.seq;

break;
case "weight":
return self__.weight;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28096,else__11939__auto__);

}
});

client.persistance.category.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.persistance.category{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null))], null),self__.__extmap));
});

client.persistance.category.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.persistance.category.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.persistance.category(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,self__.__extmap,self__.__hash));
});

client.persistance.category.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

client.persistance.category.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
var self__ = this;
var this__11931__auto____$1 = this;
var h__11757__auto__ = self__.__hash;
if(!((h__11757__auto__ == null))){
return h__11757__auto__;
} else {
var h__11757__auto____$1 = cljs.core.hash_imap.call(null,this__11931__auto____$1);
self__.__hash = h__11757__auto____$1;

return h__11757__auto____$1;
}
});

client.persistance.category.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
var self__ = this;
var this__11932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11329__auto__ = other__11933__auto__;
if(cljs.core.truth_(and__11329__auto__)){
var and__11329__auto____$1 = (this__11932__auto____$1.constructor === other__11933__auto__.constructor);
if(and__11329__auto____$1){
return cljs.core.equiv_map.call(null,this__11932__auto____$1,other__11933__auto__);
} else {
return and__11329__auto____$1;
}
} else {
return and__11329__auto__;
}
})())){
return true;
} else {
return false;
}
});

client.persistance.category.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.persistance.category(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.persistance.category.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__28095){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__28099 = cljs.core.keyword_identical_QMARK_;
var expr__28100 = k__11944__auto__;
if(cljs.core.truth_(pred__28099.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__28100))){
return (new client.persistance.category(G__28095,self__.name,self__.seq,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28099.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28100))){
return (new client.persistance.category(self__.id,G__28095,self__.seq,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28099.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28100))){
return (new client.persistance.category(self__.id,self__.name,G__28095,self__.weight,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28099.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__28100))){
return (new client.persistance.category(self__.id,self__.name,self__.seq,G__28095,self__.__meta,self__.__extmap,null));
} else {
return (new client.persistance.category(self__.id,self__.name,self__.seq,self__.weight,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__28095),null));
}
}
}
}
});

client.persistance.category.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null))], null),self__.__extmap));
});

client.persistance.category.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__28095){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.persistance.category(self__.id,self__.name,self__.seq,self__.weight,G__28095,self__.__extmap,self__.__hash));
});

client.persistance.category.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.persistance.category.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"weight","weight",377735322,null)], null);
});

client.persistance.category.cljs$lang$type = true;

client.persistance.category.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.persistance/category");
});

client.persistance.category.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.persistance/category");
});

client.persistance.__GT_category = (function client$persistance$__GT_category(id,name,seq,weight){
return (new client.persistance.category(id,name,seq,weight,null,null,null));
});

client.persistance.map__GT_category = (function client$persistance$map__GT_category(G__28097){
return (new client.persistance.category(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__28097),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28097),new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28097),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__28097),null,cljs.core.dissoc.call(null,G__28097,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"weight","weight",-1262796205)),null));
});


/**
* @constructor
* @param {*} name
* @param {*} name_id
* @param {*} perc_comp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.persistance.summary_decision = (function (name,name_id,perc_comp,__meta,__extmap,__hash){
this.name = name;
this.name_id = name_id;
this.perc_comp = perc_comp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.persistance.summary_decision.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.persistance.summary_decision.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k28104,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__28106 = (((k28104 instanceof cljs.core.Keyword))?k28104.fqn:null);
switch (G__28106) {
case "name":
return self__.name;

break;
case "name-id":
return self__.name_id;

break;
case "perc-comp":
return self__.perc_comp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28104,else__11939__auto__);

}
});

client.persistance.summary_decision.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.persistance.summary-decision{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name-id","name-id",-279275372),self__.name_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340),self__.perc_comp],null))], null),self__.__extmap));
});

client.persistance.summary_decision.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.persistance.summary_decision.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.persistance.summary_decision(self__.name,self__.name_id,self__.perc_comp,self__.__meta,self__.__extmap,self__.__hash));
});

client.persistance.summary_decision.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

client.persistance.summary_decision.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
var self__ = this;
var this__11931__auto____$1 = this;
var h__11757__auto__ = self__.__hash;
if(!((h__11757__auto__ == null))){
return h__11757__auto__;
} else {
var h__11757__auto____$1 = cljs.core.hash_imap.call(null,this__11931__auto____$1);
self__.__hash = h__11757__auto____$1;

return h__11757__auto____$1;
}
});

client.persistance.summary_decision.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
var self__ = this;
var this__11932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11329__auto__ = other__11933__auto__;
if(cljs.core.truth_(and__11329__auto__)){
var and__11329__auto____$1 = (this__11932__auto____$1.constructor === other__11933__auto__.constructor);
if(and__11329__auto____$1){
return cljs.core.equiv_map.call(null,this__11932__auto____$1,other__11933__auto__);
} else {
return and__11329__auto____$1;
}
} else {
return and__11329__auto__;
}
})())){
return true;
} else {
return false;
}
});

client.persistance.summary_decision.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"name-id","name-id",-279275372),null,new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.persistance.summary_decision(self__.name,self__.name_id,self__.perc_comp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.persistance.summary_decision.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__28103){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__28114 = cljs.core.keyword_identical_QMARK_;
var expr__28115 = k__11944__auto__;
if(cljs.core.truth_(pred__28114.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28115))){
return (new client.persistance.summary_decision(G__28103,self__.name_id,self__.perc_comp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28114.call(null,new cljs.core.Keyword(null,"name-id","name-id",-279275372),expr__28115))){
return (new client.persistance.summary_decision(self__.name,G__28103,self__.perc_comp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28114.call(null,new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340),expr__28115))){
return (new client.persistance.summary_decision(self__.name,self__.name_id,G__28103,self__.__meta,self__.__extmap,null));
} else {
return (new client.persistance.summary_decision(self__.name,self__.name_id,self__.perc_comp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__28103),null));
}
}
}
});

client.persistance.summary_decision.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name-id","name-id",-279275372),self__.name_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340),self__.perc_comp],null))], null),self__.__extmap));
});

client.persistance.summary_decision.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__28103){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.persistance.summary_decision(self__.name,self__.name_id,self__.perc_comp,G__28103,self__.__extmap,self__.__hash));
});

client.persistance.summary_decision.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.persistance.summary_decision.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"name-id","name-id",1361256155,null),new cljs.core.Symbol(null,"perc-comp","perc-comp",1915508867,null)], null);
});

client.persistance.summary_decision.cljs$lang$type = true;

client.persistance.summary_decision.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.persistance/summary-decision");
});

client.persistance.summary_decision.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.persistance/summary-decision");
});

client.persistance.__GT_summary_decision = (function client$persistance$__GT_summary_decision(name,name_id,perc_comp){
return (new client.persistance.summary_decision(name,name_id,perc_comp,null,null,null));
});

client.persistance.map__GT_summary_decision = (function client$persistance$map__GT_summary_decision(G__28105){
return (new client.persistance.summary_decision(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28105),new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(G__28105),new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340).cljs$core$IFn$_invoke$arity$1(G__28105),null,cljs.core.dissoc.call(null,G__28105,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name-id","name-id",-279275372),new cljs.core.Keyword(null,"perc-comp","perc-comp",274977340)),null));
});


/**
* @constructor
* @param {*} id
* @param {*} item_one
* @param {*} item_two
* @param {*} category
* @param {*} result
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.persistance.decision_result = (function (id,item_one,item_two,category,result,__meta,__extmap,__hash){
this.id = id;
this.item_one = item_one;
this.item_two = item_two;
this.category = category;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.persistance.decision_result.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.persistance.decision_result.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k28119,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__28121 = (((k28119 instanceof cljs.core.Keyword))?k28119.fqn:null);
switch (G__28121) {
case "id":
return self__.id;

break;
case "item-one":
return self__.item_one;

break;
case "item-two":
return self__.item_two;

break;
case "category":
return self__.category;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28119,else__11939__auto__);

}
});

client.persistance.decision_result.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.persistance.decision-result{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-one","item-one",925867048),self__.item_one],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-two","item-two",234540201),self__.item_two],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
});

client.persistance.decision_result.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.persistance.decision_result.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,self__.category,self__.result,self__.__meta,self__.__extmap,self__.__hash));
});

client.persistance.decision_result.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

client.persistance.decision_result.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
var self__ = this;
var this__11931__auto____$1 = this;
var h__11757__auto__ = self__.__hash;
if(!((h__11757__auto__ == null))){
return h__11757__auto__;
} else {
var h__11757__auto____$1 = cljs.core.hash_imap.call(null,this__11931__auto____$1);
self__.__hash = h__11757__auto____$1;

return h__11757__auto____$1;
}
});

client.persistance.decision_result.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
var self__ = this;
var this__11932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11329__auto__ = other__11933__auto__;
if(cljs.core.truth_(and__11329__auto__)){
var and__11329__auto____$1 = (this__11932__auto____$1.constructor === other__11933__auto__.constructor);
if(and__11329__auto____$1){
return cljs.core.equiv_map.call(null,this__11932__auto____$1,other__11933__auto__);
} else {
return and__11329__auto____$1;
}
} else {
return and__11329__auto__;
}
})())){
return true;
} else {
return false;
}
});

client.persistance.decision_result.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"item-one","item-one",925867048),null,new cljs.core.Keyword(null,"item-two","item-two",234540201),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,self__.category,self__.result,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.persistance.decision_result.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__28118){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__28122 = cljs.core.keyword_identical_QMARK_;
var expr__28123 = k__11944__auto__;
if(cljs.core.truth_(pred__28122.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__28123))){
return (new client.persistance.decision_result(G__28118,self__.item_one,self__.item_two,self__.category,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28122.call(null,new cljs.core.Keyword(null,"item-one","item-one",925867048),expr__28123))){
return (new client.persistance.decision_result(self__.id,G__28118,self__.item_two,self__.category,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28122.call(null,new cljs.core.Keyword(null,"item-two","item-two",234540201),expr__28123))){
return (new client.persistance.decision_result(self__.id,self__.item_one,G__28118,self__.category,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28122.call(null,new cljs.core.Keyword(null,"category","category",-593092832),expr__28123))){
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,G__28118,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28122.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__28123))){
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,self__.category,G__28118,self__.__meta,self__.__extmap,null));
} else {
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,self__.category,self__.result,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__28118),null));
}
}
}
}
}
});

client.persistance.decision_result.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-one","item-one",925867048),self__.item_one],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-two","item-two",234540201),self__.item_two],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
});

client.persistance.decision_result.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__28118){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.persistance.decision_result(self__.id,self__.item_one,self__.item_two,self__.category,self__.result,G__28118,self__.__extmap,self__.__hash));
});

client.persistance.decision_result.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.persistance.decision_result.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"item-one","item-one",-1728568721,null),new cljs.core.Symbol(null,"item-two","item-two",1875071728,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null);
});

client.persistance.decision_result.cljs$lang$type = true;

client.persistance.decision_result.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.persistance/decision-result");
});

client.persistance.decision_result.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.persistance/decision-result");
});

client.persistance.__GT_decision_result = (function client$persistance$__GT_decision_result(id,item_one,item_two,category,result){
return (new client.persistance.decision_result(id,item_one,item_two,category,result,null,null,null));
});

client.persistance.map__GT_decision_result = (function client$persistance$map__GT_decision_result(G__28120){
return (new client.persistance.decision_result(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__28120),new cljs.core.Keyword(null,"item-one","item-one",925867048).cljs$core$IFn$_invoke$arity$1(G__28120),new cljs.core.Keyword(null,"item-two","item-two",234540201).cljs$core$IFn$_invoke$arity$1(G__28120),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(G__28120),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__28120),null,cljs.core.dissoc.call(null,G__28120,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"item-one","item-one",925867048),new cljs.core.Keyword(null,"item-two","item-two",234540201),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"result","result",1415092211)),null));
});

client.persistance.schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),new cljs.core.Keyword("item","id","item/id",-1385287903),new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),new cljs.core.Keyword("item","weight","item/weight",-1263915666),new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),new cljs.core.Keyword("category","weight","category/weight",-1279463599),new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),new cljs.core.Keyword("decision","name","decision/name",-861114347),new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Keyword("item","seq","item/seq",-1821048584),new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),new cljs.core.Keyword("decision","id","decision/id",-2021205384),new cljs.core.Keyword("rule","id","rule/id",-1375583400),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),new cljs.core.Keyword("category","seq","category/seq",-1901968645),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),new cljs.core.Keyword("item","name","item/name",1849015102)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),cljs.core.PersistentArrayMap.EMPTY]);
cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,datascript.empty_db.call(null,client.persistance.schema),cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("user","name","user/name",1848814598),"Don"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("user","id","user/id",-1375756663),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("decision","id","decision/id",-2021205384),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("decision","name","decision/name",-861114347),"Car"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),0.9], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","id","item/id",-1385287903),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","name","item/name",1849015102),"Audi"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","weight","item/weight",-1263915666),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","seq","item/seq",-1821048584),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(3),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","id","item/id",-1385287903),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","name","item/name",1849015102),"BMW"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","weight","item/weight",-1263915666),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","seq","item/seq",-1821048584),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(4),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","id","category/id",-1505923754),(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","name","category/name",1793490219),"MPG"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","weight","category/weight",-1279463599),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","seq","category/seq",-1901968645),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(5),new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","id","category/id",-1505923754),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","name","category/name",1793490219),"Acceleration"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","weight","category/weight",-1279463599),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(6),new cljs.core.Keyword("category","seq","category/seq",-1901968645),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","id","rule/id",-1375583400),(7)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(7),new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","id","rule/id",-1375583400),(8)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(8),new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(52),new cljs.core.Keyword("decision","id","decision/id",-2021205384),(52)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(52),new cljs.core.Keyword("decision","name","decision/name",-861114347),"Pet"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(52),new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(52),new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),0.9], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(52),new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),(52)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","id","item/id",-1385287903),(53)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","name","item/name",1849015102),"F150"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","weight","item/weight",-1263915666),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","seq","item/seq",-1821048584),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(53),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),(52)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","id","item/id",-1385287903),(54)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","name","item/name",1849015102),"Ram"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","weight","item/weight",-1263915666),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","seq","item/seq",-1821048584),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(54),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),(52)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","id","category/id",-1505923754),(55)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","name","category/name",1793490219),"Load"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","weight","category/weight",-1279463599),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","seq","category/seq",-1901968645),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(55),new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),(123)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),(52)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","id","rule/id",-1375583400),(56)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(56),new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),false], null)], true)));
client.persistance.get_decision_list = (function client$persistance$get_decision_list(){
return cljs.core.map.call(null,(function (p1__28126_SHARP_){
return (new client.persistance.summary_decision(cljs.core.first.call(null,p1__28126_SHARP_),cljs.core.second.call(null,p1__28126_SHARP_),cljs.core.nth.call(null,p1__28126_SHARP_,(2)),null,null,null));
}),datascript.q.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?complete-perc","?complete-perc",-1693875918,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("decision","id","decision/id",-2021205384),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null),false)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("decision","name","decision/name",-861114347),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),new cljs.core.Symbol(null,"?complete-perc","?complete-perc",-1693875918,null)], null)], null),cljs.core.deref.call(null,client.persistance.db),client.persistance.user_id));
});
client.persistance.get_item_list = (function client$persistance$get_item_list(dec_id){
return cljs.core.map.call(null,(function (p1__28127_SHARP_){
return (new client.persistance.item(cljs.core.first.call(null,p1__28127_SHARP_),cljs.core.second.call(null,p1__28127_SHARP_),cljs.core.nth.call(null,p1__28127_SHARP_,(2)),cljs.core.nth.call(null,p1__28127_SHARP_,(3)),null,null,null));
}),datascript.q.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?seq","?seq",-727321305,null),new cljs.core.Symbol(null,"?weight","?weight",-98010885,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null),false)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","id","item/id",-1385287903),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","weight","item/weight",-1263915666),new cljs.core.Symbol(null,"?weight","?weight",-98010885,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("item","seq","item/seq",-1821048584),new cljs.core.Symbol(null,"?seq","?seq",-727321305,null)], null)], null),cljs.core.deref.call(null,client.persistance.db),dec_id,client.persistance.user_id));
});
client.persistance.get_category_list = (function client$persistance$get_category_list(dec_id){
return cljs.core.map.call(null,(function (p1__28128_SHARP_){
return (new client.persistance.category(cljs.core.first.call(null,p1__28128_SHARP_),cljs.core.second.call(null,p1__28128_SHARP_),cljs.core.nth.call(null,p1__28128_SHARP_,(2)),cljs.core.nth.call(null,p1__28128_SHARP_,(3)),null,null,null));
}),datascript.q.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?seq","?seq",-727321305,null),new cljs.core.Symbol(null,"?weight","?weight",-98010885,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null),false)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","weight","category/weight",-1279463599),new cljs.core.Symbol(null,"?weight","?weight",-98010885,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("category","seq","category/seq",-1901968645),new cljs.core.Symbol(null,"?seq","?seq",-727321305,null)], null)], null),cljs.core.deref.call(null,client.persistance.db),dec_id,client.persistance.user_id));
});
client.persistance.get_rule_list = (function client$persistance$get_rule_list(dec_id){
return cljs.core.map.call(null,(function (p1__28129_SHARP_){
return (new client.persistance.decision_result(cljs.core.first.call(null,p1__28129_SHARP_),cljs.core.second.call(null,p1__28129_SHARP_),cljs.core.nth.call(null,p1__28129_SHARP_,(2)),cljs.core.nth.call(null,p1__28129_SHARP_,(3)),cljs.core.nth.call(null,p1__28129_SHARP_,(4)),null,null,null));
}),datascript.q.call(null,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?one","?one",598188707,null),new cljs.core.Symbol(null,"?two","?two",889700699,null),new cljs.core.Symbol(null,"?cat","?cat",-1179002074,null),new cljs.core.Symbol(null,"?res","?res",-1799171517,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-user-id","?r-user-id",981969891,null),new cljs.core.Symbol(null,"?user-id","?user-id",443385325,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-dec-id","?r-dec-id",-123201976,null),new cljs.core.Symbol(null,"?dec-id","?dec-id",1311383496,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","id","rule/id",-1375583400),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?r-del","?r-del",1750913903,null),false)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),new cljs.core.Symbol(null,"?one","?one",598188707,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),new cljs.core.Symbol(null,"?two","?two",889700699,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),new cljs.core.Symbol(null,"?cat","?cat",-1179002074,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),new cljs.core.Symbol(null,"?res","?res",-1799171517,null)], null)], null),cljs.core.deref.call(null,client.persistance.db),dec_id,client.persistance.user_id));
});
client.persistance.new_decision = (function client$persistance$new_decision(dec_name){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("decision","id","decision/id",-2021205384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null),new cljs.core.Keyword("decision","name","decision/name",-861114347),dec_name,new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),client.persistance.user_id,new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),0.0,new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),false], null)], null)));
});
client.persistance.update_decision = (function client$persistance$update_decision(dec_id,dec_name,complete_perc){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),client.persistance.user_id,new cljs.core.Keyword("decision","id","decision/id",-2021205384),dec_id,new cljs.core.Keyword("decision","name","decision/name",-861114347),dec_name,new cljs.core.Keyword("decision","complete-perc","decision/complete-perc",2033359843),complete_perc], null)], null)));
});
client.persistance.new_item = (function client$persistance$new_item(item_name,dec_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),client.persistance.user_id,new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),dec_id,new cljs.core.Keyword("item","id","item/id",-1385287903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null),new cljs.core.Keyword("item","name","item/name",1849015102),item_name,new cljs.core.Keyword("item","weight","item/weight",-1263915666),(-1),new cljs.core.Keyword("item","seq","item/seq",-1821048584),(-1),new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),false], null)], null)));
});
client.persistance.update_item = (function client$persistance$update_item(dec_id,item_id,item_name,weight,seq){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),client.persistance.user_id,new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),dec_id,new cljs.core.Keyword("item","id","item/id",-1385287903),item_id,new cljs.core.Keyword("item","name","item/name",1849015102),item_name,new cljs.core.Keyword("item","weight","item/weight",-1263915666),weight,new cljs.core.Keyword("item","seq","item/seq",-1821048584),seq], null)], null)));
});
client.persistance.new_category = (function client$persistance$new_category(category_name,dec_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),client.persistance.user_id,new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),dec_id,new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null),new cljs.core.Keyword("category","name","category/name",1793490219),category_name,new cljs.core.Keyword("category","weight","category/weight",-1279463599),(-1),new cljs.core.Keyword("category","seq","category/seq",-1901968645),(-1),new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),false], null)], null)));
});
client.persistance.update_category = (function client$persistance$update_category(dec_id,category_id,category_name,weight,seq){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),client.persistance.user_id,new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),dec_id,new cljs.core.Keyword("category","id","category/id",-1505923754),category_id,new cljs.core.Keyword("category","name","category/name",1793490219),category_name,new cljs.core.Keyword("category","weight","category/weight",-1279463599),weight,new cljs.core.Keyword("category","seq","category/seq",-1901968645),seq], null)], null)));
});
client.persistance.new_rule = (function client$persistance$new_rule(dec_id,item_one,item_two,cat,result){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),client.persistance.user_id,new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),dec_id,new cljs.core.Keyword("rule","id","rule/id",-1375583400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null),new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),item_one,new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),item_two,new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),cat,new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),result,new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),false], null)], null)));
});
client.persistance.update_rule = (function client$persistance$update_rule(dec_id,rule_id,item_one,item_two,cat,result){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),client.persistance.user_id,new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),dec_id,new cljs.core.Keyword("rule","id","rule/id",-1375583400),rule_id,new cljs.core.Keyword("rule","item.one.id","rule/item.one.id",-1120652939),item_one,new cljs.core.Keyword("rule","item.two.id","rule/item.two.id",-2130694036),item_two,new cljs.core.Keyword("rule","category.id","rule/category.id",-1339931638),cat,new cljs.core.Keyword("rule","item.result.id","rule/item.result.id",-1352078445),result], null)], null)));
});
client.persistance.delete_decision = (function client$persistance$delete_decision(dec_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("decision","user.id","decision/user.id",1745646933),client.persistance.user_id,new cljs.core.Keyword("decision","id","decision/id",-2021205384),client.persistance.item_id,new cljs.core.Keyword("decision","deleted?","decision/deleted?",1169545217),true], null)], null)));
});
client.persistance.delete_item = (function client$persistance$delete_item(dec_id,item_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("item","user.id","item/user.id",-1919603074),client.persistance.user_id,new cljs.core.Keyword("item","decision.id","item/decision.id",-131046407),dec_id,new cljs.core.Keyword("item","id","item/id",-1385287903),item_id,new cljs.core.Keyword("item","deleted?","item/deleted?",-483358020),true], null)], null)));
});
client.persistance.delete_category = (function client$persistance$delete_category(dec_id,item_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("category","user.id","category/user.id",-2008682389),client.persistance.user_id,new cljs.core.Keyword("category","decision.id","category/decision.id",-117399016),dec_id,new cljs.core.Keyword("category","id","category/id",-1505923754),item_id,new cljs.core.Keyword("category","deleted?","category/deleted?",1476414703),true], null)], null)));
});
client.persistance.delete_rule = (function client$persistance$delete_rule(dec_id,item_id){
return cljs.core.reset_BANG_.call(null,client.persistance.db,datascript.db_with.call(null,cljs.core.deref.call(null,client.persistance.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("rule","user.id","rule/user.id",-1920415115),client.persistance.user_id,new cljs.core.Keyword("rule","decision.id","rule/decision.id",-131315694),dec_id,new cljs.core.Keyword("rule","id","rule/id",-1375583400),item_id,new cljs.core.Keyword("rule","deleted?","rule/deleted?",-483037471),true], null)], null)));
});

//# sourceMappingURL=persistance.js.map
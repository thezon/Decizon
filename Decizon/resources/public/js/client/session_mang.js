// Compiled by ClojureScript 0.0-3291 {}
goog.provide('client.session_mang');
goog.require('cljs.core');
goog.require('client.persistance');

/**
* @constructor
* @param {*} nav_key
* @param {*} event_type
* @param {*} working_record
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.session_mang.save_event = (function (nav_key,event_type,working_record,__meta,__extmap,__hash){
this.nav_key = nav_key;
this.event_type = event_type;
this.working_record = working_record;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.session_mang.save_event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.session_mang.save_event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k20511,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__20513 = (((k20511 instanceof cljs.core.Keyword))?k20511.fqn:null);
switch (G__20513) {
case "nav-key":
return self__.nav_key;

break;
case "event-type":
return self__.event_type;

break;
case "working-record":
return self__.working_record;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20511,else__11939__auto__);

}
});

client.session_mang.save_event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.session-mang.save-event{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),self__.nav_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"working-record","working-record",1757390385),self__.working_record],null))], null),self__.__extmap));
});

client.session_mang.save_event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.session_mang.save_event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.session_mang.save_event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,self__.__extmap,self__.__hash));
});

client.session_mang.save_event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

client.session_mang.save_event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
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

client.session_mang.save_event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
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

client.session_mang.save_event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"working-record","working-record",1757390385),null,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),null,new cljs.core.Keyword(null,"event-type","event-type",319722813),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.session_mang.save_event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.session_mang.save_event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__20510){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__20514 = cljs.core.keyword_identical_QMARK_;
var expr__20515 = k__11944__auto__;
if(cljs.core.truth_(pred__20514.call(null,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),expr__20515))){
return (new client.session_mang.save_event(G__20510,self__.event_type,self__.working_record,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20514.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__20515))){
return (new client.session_mang.save_event(self__.nav_key,G__20510,self__.working_record,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20514.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),expr__20515))){
return (new client.session_mang.save_event(self__.nav_key,self__.event_type,G__20510,self__.__meta,self__.__extmap,null));
} else {
return (new client.session_mang.save_event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__20510),null));
}
}
}
});

client.session_mang.save_event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),self__.nav_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"working-record","working-record",1757390385),self__.working_record],null))], null),self__.__extmap));
});

client.session_mang.save_event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__20510){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.session_mang.save_event(self__.nav_key,self__.event_type,self__.working_record,G__20510,self__.__extmap,self__.__hash));
});

client.session_mang.save_event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.session_mang.save_event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-key","nav-key",480218017,null),new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"working-record","working-record",-897045384,null)], null);
});

client.session_mang.save_event.cljs$lang$type = true;

client.session_mang.save_event.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.session-mang/save-event");
});

client.session_mang.save_event.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.session-mang/save-event");
});

client.session_mang.__GT_save_event = (function client$session_mang$__GT_save_event(nav_key,event_type,working_record){
return (new client.session_mang.save_event(nav_key,event_type,working_record,null,null,null));
});

client.session_mang.map__GT_save_event = (function client$session_mang$map__GT_save_event(G__20512){
return (new client.session_mang.save_event(new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510).cljs$core$IFn$_invoke$arity$1(G__20512),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(G__20512),new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(G__20512),null,cljs.core.dissoc.call(null,G__20512,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"working-record","working-record",1757390385)),null));
});


/**
* @constructor
* @param {*} nav_key
* @param {*} event_type
* @param {*} working_record
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
client.session_mang.event = (function (nav_key,event_type,working_record,__meta,__extmap,__hash){
this.nav_key = nav_key;
this.event_type = event_type;
this.working_record = working_record;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
client.session_mang.event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11936__auto__,k__11937__auto__){
var self__ = this;
var this__11936__auto____$1 = this;
return cljs.core._lookup.call(null,this__11936__auto____$1,k__11937__auto__,null);
});

client.session_mang.event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11938__auto__,k20519,else__11939__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var G__20521 = (((k20519 instanceof cljs.core.Keyword))?k20519.fqn:null);
switch (G__20521) {
case "nav-key":
return self__.nav_key;

break;
case "event-type":
return self__.event_type;

break;
case "working-record":
return self__.working_record;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20519,else__11939__auto__);

}
});

client.session_mang.event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11950__auto__,writer__11951__auto__,opts__11952__auto__){
var self__ = this;
var this__11950__auto____$1 = this;
var pr_pair__11953__auto__ = ((function (this__11950__auto____$1){
return (function (keyval__11954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,cljs.core.pr_writer,""," ","",opts__11952__auto__,keyval__11954__auto__);
});})(this__11950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11951__auto__,pr_pair__11953__auto__,"#client.session-mang.event{",", ","}",opts__11952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),self__.nav_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"working-record","working-record",1757390385),self__.working_record],null))], null),self__.__extmap));
});

client.session_mang.event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11934__auto__){
var self__ = this;
var this__11934__auto____$1 = this;
return self__.__meta;
});

client.session_mang.event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11930__auto__){
var self__ = this;
var this__11930__auto____$1 = this;
return (new client.session_mang.event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,self__.__extmap,self__.__hash));
});

client.session_mang.event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11940__auto__){
var self__ = this;
var this__11940__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

client.session_mang.event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11931__auto__){
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

client.session_mang.event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11932__auto__,other__11933__auto__){
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

client.session_mang.event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11945__auto__,k__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"working-record","working-record",1757390385),null,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),null,new cljs.core.Keyword(null,"event-type","event-type",319722813),null], null), null),k__11946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11945__auto____$1),self__.__meta),k__11946__auto__);
} else {
return (new client.session_mang.event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11946__auto__)),null));
}
});

client.session_mang.event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11943__auto__,k__11944__auto__,G__20518){
var self__ = this;
var this__11943__auto____$1 = this;
var pred__20522 = cljs.core.keyword_identical_QMARK_;
var expr__20523 = k__11944__auto__;
if(cljs.core.truth_(pred__20522.call(null,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),expr__20523))){
return (new client.session_mang.event(G__20518,self__.event_type,self__.working_record,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20522.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__20523))){
return (new client.session_mang.event(self__.nav_key,G__20518,self__.working_record,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20522.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),expr__20523))){
return (new client.session_mang.event(self__.nav_key,self__.event_type,G__20518,self__.__meta,self__.__extmap,null));
} else {
return (new client.session_mang.event(self__.nav_key,self__.event_type,self__.working_record,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11944__auto__,G__20518),null));
}
}
}
});

client.session_mang.event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11948__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),self__.nav_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"working-record","working-record",1757390385),self__.working_record],null))], null),self__.__extmap));
});

client.session_mang.event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11935__auto__,G__20518){
var self__ = this;
var this__11935__auto____$1 = this;
return (new client.session_mang.event(self__.nav_key,self__.event_type,self__.working_record,G__20518,self__.__extmap,self__.__hash));
});

client.session_mang.event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11941__auto__,entry__11942__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11942__auto__)){
return cljs.core._assoc.call(null,this__11941__auto____$1,cljs.core._nth.call(null,entry__11942__auto__,(0)),cljs.core._nth.call(null,entry__11942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11941__auto____$1,entry__11942__auto__);
}
});

client.session_mang.event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-key","nav-key",480218017,null),new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"working-record","working-record",-897045384,null)], null);
});

client.session_mang.event.cljs$lang$type = true;

client.session_mang.event.cljs$lang$ctorPrSeq = (function (this__11970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"client.session-mang/event");
});

client.session_mang.event.cljs$lang$ctorPrWriter = (function (this__11970__auto__,writer__11971__auto__){
return cljs.core._write.call(null,writer__11971__auto__,"client.session-mang/event");
});

client.session_mang.__GT_event = (function client$session_mang$__GT_event(nav_key,event_type,working_record){
return (new client.session_mang.event(nav_key,event_type,working_record,null,null,null));
});

client.session_mang.map__GT_event = (function client$session_mang$map__GT_event(G__20520){
return (new client.session_mang.event(new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510).cljs$core$IFn$_invoke$arity$1(G__20520),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(G__20520),new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(G__20520),null,cljs.core.dissoc.call(null,G__20520,new cljs.core.Keyword(null,"nav-key","nav-key",-1160313510),new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"working-record","working-record",1757390385)),null));
});

client.session_mang.session = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
client.session_mang.load_decision = (function client$session_mang$load_decision(decision_data){

return cljs.core.reset_BANG_.call(null,client.session_mang.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.session_mang.session),new cljs.core.Keyword(null,"item-list","item-list",-1307039302),new cljs.core.Keyword(null,"item-list","item-list",-1307039302).cljs$core$IFn$_invoke$arity$1(decision_data)));
});
client.session_mang.add_decision_result = (function client$session_mang$add_decision_result(result){
return cljs.core.reset_BANG_.call(null,client.session_mang.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.session_mang.session),new cljs.core.Keyword(null,"decision-result-list","decision-result-list",-843904304),cljs.core.conj.call(null,new cljs.core.Keyword(null,"decision-result-list","decision-result-list",-843904304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.session_mang.session)),result)));
});
client.session_mang.session_value = (function client$session_mang$session_value(list_key,num){

return cljs.core.nth.call(null,list_key.call(null,cljs.core.deref.call(null,client.session_mang.session)),num);
});
client.session_mang.get_id_value = (function client$session_mang$get_id_value(name_key){
return document.getElementById(cljs.core.name.call(null,name_key)).value;
});
/**
 * mang. session param. if vale supples then sets if no value supplied returns current value
 */
client.session_mang.session_param = (function client$session_mang$session_param(){
var G__20527 = arguments.length;
switch (G__20527) {
case 1:
return client.session_mang.session_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return client.session_mang.session_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

client.session_mang.session_param.cljs$core$IFn$_invoke$arity$1 = (function (param_key){
return param_key.call(null,cljs.core.deref.call(null,client.session_mang.session));
});

client.session_mang.session_param.cljs$core$IFn$_invoke$arity$2 = (function (param_key,value){
return cljs.core.reset_BANG_.call(null,client.session_mang.session,cljs.core.assoc.call(null,cljs.core.deref.call(null,client.session_mang.session),param_key,value));
});

client.session_mang.session_param.cljs$lang$maxFixedArity = 2;
client.session_mang.event = (function client$session_mang$event(page_key,options_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"navigate","navigate",657596805).cljs$core$IFn$_invoke$arity$1(options_map))){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),page_key);
} else {
}

if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
client.persistance.delete_decision.call(null,new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map)));

client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),client.persistance.get_decision_list.call(null));

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),null);
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"edit","edit",-1641834166).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map));

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"decision-edit","decision-edit",561821546));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"save","save",1850079149).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
var record = new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map);
client.persistance.update_decision.call(null,new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record),0.1);

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),client.persistance.get_decision_list.call(null));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"cancel","cancel",-1964088360).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),null);
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"decision-new","decision-new",-1412327346));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decision","decision",820953053),page_key)){
cljs.core.println.call(null,"inside decision");

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),client.persistance.get_decision_list.call(null));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item","item",249373802),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"edit","edit",-1641834166).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map));

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"item-edit","item-edit",-14823426));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item","item",249373802),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"item-new","item-new",1578882871));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item","item",249373802),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),null);

return client.persistance.delete_item.call(null,new cljs.core.Keyword(null,"decision-id","decision-id",2084757438).cljs$core$IFn$_invoke$arity$1(options_map),new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"item","item",249373802),page_key)){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"item","item",249373802));

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),client.persistance.get_item_list.call(null,new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map))));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"edit","edit",-1641834166).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-record","working-record",1757390385),new cljs.core.Keyword(null,"working-record","working-record",1757390385).cljs$core$IFn$_invoke$arity$1(options_map));

return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"category-edit","category-edit",-215498291));
} else {
if(cljs.core.truth_((function (){var and__11329__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),page_key);
if(and__11329__auto__){
return new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(options_map);
} else {
return and__11329__auto__;
}
})())){
return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"category-new","category-new",-804283528));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),page_key)){
return client.session_mang.session_param.call(null,new cljs.core.Keyword(null,"working-list","working-list",-2124678747),client.persistance.get_category_list.call(null,new cljs.core.Keyword(null,"name-id","name-id",-279275372).cljs$core$IFn$_invoke$arity$1(options_map)));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=session_mang.js.map
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t20624 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20624 = (function (f,fn_handler,meta20625){
this.f = f;
this.fn_handler = fn_handler;
this.meta20625 = meta20625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20624.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20626){
var self__ = this;
var _20626__$1 = this;
return self__.meta20625;
});

cljs.core.async.t20624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20626,meta20625__$1){
var self__ = this;
var _20626__$1 = this;
return (new cljs.core.async.t20624(self__.f,self__.fn_handler,meta20625__$1));
});

cljs.core.async.t20624.cljs$lang$type = true;

cljs.core.async.t20624.cljs$lang$ctorStr = "cljs.core.async/t20624";

cljs.core.async.t20624.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t20624");
});

cljs.core.async.__GT_t20624 = (function cljs$core$async$fn_handler_$___GT_t20624(f__$1,fn_handler__$1,meta20625){
return (new cljs.core.async.t20624(f__$1,fn_handler__$1,meta20625));
});

}

return (new cljs.core.async.t20624(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__20628 = buff;
if(G__20628){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__20628.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20628.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20628);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20628);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__20630 = arguments.length;
switch (G__20630) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__20633 = arguments.length;
switch (G__20633) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20635 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20635);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20635,ret){
return (function (){
return fn1.call(null,val_20635);
});})(val_20635,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__20637 = arguments.length;
switch (G__20637) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__11297__auto___20639 = n;
var x_20640 = (0);
while(true){
if((x_20640 < n__11297__auto___20639)){
(a[x_20640] = (0));

var G__20641 = (x_20640 + (1));
x_20640 = G__20641;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20642 = (i + (1));
i = G__20642;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20646 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20646 = (function (flag,alt_flag,meta20647){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20647 = meta20647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20648){
var self__ = this;
var _20648__$1 = this;
return self__.meta20647;
});})(flag))
;

cljs.core.async.t20646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20648,meta20647__$1){
var self__ = this;
var _20648__$1 = this;
return (new cljs.core.async.t20646(self__.flag,self__.alt_flag,meta20647__$1));
});})(flag))
;

cljs.core.async.t20646.cljs$lang$type = true;

cljs.core.async.t20646.cljs$lang$ctorStr = "cljs.core.async/t20646";

cljs.core.async.t20646.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t20646");
});})(flag))
;

cljs.core.async.__GT_t20646 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t20646(flag__$1,alt_flag__$1,meta20647){
return (new cljs.core.async.t20646(flag__$1,alt_flag__$1,meta20647));
});})(flag))
;

}

return (new cljs.core.async.t20646(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t20652 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20652 = (function (cb,flag,alt_handler,meta20653){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20653 = meta20653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20654){
var self__ = this;
var _20654__$1 = this;
return self__.meta20653;
});

cljs.core.async.t20652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20654,meta20653__$1){
var self__ = this;
var _20654__$1 = this;
return (new cljs.core.async.t20652(self__.cb,self__.flag,self__.alt_handler,meta20653__$1));
});

cljs.core.async.t20652.cljs$lang$type = true;

cljs.core.async.t20652.cljs$lang$ctorStr = "cljs.core.async/t20652";

cljs.core.async.t20652.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t20652");
});

cljs.core.async.__GT_t20652 = (function cljs$core$async$alt_handler_$___GT_t20652(cb__$1,flag__$1,alt_handler__$1,meta20653){
return (new cljs.core.async.t20652(cb__$1,flag__$1,alt_handler__$1,meta20653));
});

}

return (new cljs.core.async.t20652(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20655_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20655_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20656_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20656_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10412__auto__ = wport;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20657 = (i + (1));
i = G__20657;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10412__auto__ = ret;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__10400__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20660){
var map__20661 = p__20660;
var map__20661__$1 = ((cljs.core.seq_QMARK_.call(null,map__20661))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);
var opts = map__20661__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20658){
var G__20659 = cljs.core.first.call(null,seq20658);
var seq20658__$1 = cljs.core.next.call(null,seq20658);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20659,seq20658__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__20663 = arguments.length;
switch (G__20663) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17387__auto___20712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___20712){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___20712){
return (function (state_20687){
var state_val_20688 = (state_20687[(1)]);
if((state_val_20688 === (7))){
var inst_20683 = (state_20687[(2)]);
var state_20687__$1 = state_20687;
var statearr_20689_20713 = state_20687__$1;
(statearr_20689_20713[(2)] = inst_20683);

(statearr_20689_20713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (1))){
var state_20687__$1 = state_20687;
var statearr_20690_20714 = state_20687__$1;
(statearr_20690_20714[(2)] = null);

(statearr_20690_20714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (4))){
var inst_20666 = (state_20687[(7)]);
var inst_20666__$1 = (state_20687[(2)]);
var inst_20667 = (inst_20666__$1 == null);
var state_20687__$1 = (function (){var statearr_20691 = state_20687;
(statearr_20691[(7)] = inst_20666__$1);

return statearr_20691;
})();
if(cljs.core.truth_(inst_20667)){
var statearr_20692_20715 = state_20687__$1;
(statearr_20692_20715[(1)] = (5));

} else {
var statearr_20693_20716 = state_20687__$1;
(statearr_20693_20716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (13))){
var state_20687__$1 = state_20687;
var statearr_20694_20717 = state_20687__$1;
(statearr_20694_20717[(2)] = null);

(statearr_20694_20717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (6))){
var inst_20666 = (state_20687[(7)]);
var state_20687__$1 = state_20687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20687__$1,(11),to,inst_20666);
} else {
if((state_val_20688 === (3))){
var inst_20685 = (state_20687[(2)]);
var state_20687__$1 = state_20687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20687__$1,inst_20685);
} else {
if((state_val_20688 === (12))){
var state_20687__$1 = state_20687;
var statearr_20695_20718 = state_20687__$1;
(statearr_20695_20718[(2)] = null);

(statearr_20695_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (2))){
var state_20687__$1 = state_20687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20687__$1,(4),from);
} else {
if((state_val_20688 === (11))){
var inst_20676 = (state_20687[(2)]);
var state_20687__$1 = state_20687;
if(cljs.core.truth_(inst_20676)){
var statearr_20696_20719 = state_20687__$1;
(statearr_20696_20719[(1)] = (12));

} else {
var statearr_20697_20720 = state_20687__$1;
(statearr_20697_20720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (9))){
var state_20687__$1 = state_20687;
var statearr_20698_20721 = state_20687__$1;
(statearr_20698_20721[(2)] = null);

(statearr_20698_20721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (5))){
var state_20687__$1 = state_20687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20699_20722 = state_20687__$1;
(statearr_20699_20722[(1)] = (8));

} else {
var statearr_20700_20723 = state_20687__$1;
(statearr_20700_20723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (14))){
var inst_20681 = (state_20687[(2)]);
var state_20687__$1 = state_20687;
var statearr_20701_20724 = state_20687__$1;
(statearr_20701_20724[(2)] = inst_20681);

(statearr_20701_20724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (10))){
var inst_20673 = (state_20687[(2)]);
var state_20687__$1 = state_20687;
var statearr_20702_20725 = state_20687__$1;
(statearr_20702_20725[(2)] = inst_20673);

(statearr_20702_20725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20688 === (8))){
var inst_20670 = cljs.core.async.close_BANG_.call(null,to);
var state_20687__$1 = state_20687;
var statearr_20703_20726 = state_20687__$1;
(statearr_20703_20726[(2)] = inst_20670);

(statearr_20703_20726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__17387__auto___20712))
;
return ((function (switch__17366__auto__,c__17387__auto___20712){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_20707 = [null,null,null,null,null,null,null,null];
(statearr_20707[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_20707[(1)] = (1));

return statearr_20707;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_20687){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_20687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e20708){if((e20708 instanceof Object)){
var ex__17370__auto__ = e20708;
var statearr_20709_20727 = state_20687;
(statearr_20709_20727[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20728 = state_20687;
state_20687 = G__20728;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_20687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_20687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___20712))
})();
var state__17389__auto__ = (function (){var statearr_20710 = f__17388__auto__.call(null);
(statearr_20710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___20712);

return statearr_20710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___20712))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20912){
var vec__20913 = p__20912;
var v = cljs.core.nth.call(null,vec__20913,(0),null);
var p = cljs.core.nth.call(null,vec__20913,(1),null);
var job = vec__20913;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17387__auto___21095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results){
return (function (state_20918){
var state_val_20919 = (state_20918[(1)]);
if((state_val_20919 === (2))){
var inst_20915 = (state_20918[(2)]);
var inst_20916 = cljs.core.async.close_BANG_.call(null,res);
var state_20918__$1 = (function (){var statearr_20920 = state_20918;
(statearr_20920[(7)] = inst_20915);

return statearr_20920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20918__$1,inst_20916);
} else {
if((state_val_20919 === (1))){
var state_20918__$1 = state_20918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20918__$1,(2),res,v);
} else {
return null;
}
}
});})(c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results))
;
return ((function (switch__17366__auto__,c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_20924 = [null,null,null,null,null,null,null,null];
(statearr_20924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__);

(statearr_20924[(1)] = (1));

return statearr_20924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1 = (function (state_20918){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_20918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e20925){if((e20925 instanceof Object)){
var ex__17370__auto__ = e20925;
var statearr_20926_21096 = state_20918;
(statearr_20926_21096[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21097 = state_20918;
state_20918 = G__21097;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = function(state_20918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1.call(this,state_20918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results))
})();
var state__17389__auto__ = (function (){var statearr_20927 = f__17388__auto__.call(null);
(statearr_20927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21095);

return statearr_20927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___21095,res,vec__20913,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20928){
var vec__20929 = p__20928;
var v = cljs.core.nth.call(null,vec__20929,(0),null);
var p = cljs.core.nth.call(null,vec__20929,(1),null);
var job = vec__20929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__11297__auto___21098 = n;
var __21099 = (0);
while(true){
if((__21099 < n__11297__auto___21098)){
var G__20930_21100 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20930_21100) {
case "async":
var c__17387__auto___21102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21099,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (__21099,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function (state_20943){
var state_val_20944 = (state_20943[(1)]);
if((state_val_20944 === (7))){
var inst_20939 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20945_21103 = state_20943__$1;
(statearr_20945_21103[(2)] = inst_20939);

(statearr_20945_21103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (6))){
var state_20943__$1 = state_20943;
var statearr_20946_21104 = state_20943__$1;
(statearr_20946_21104[(2)] = null);

(statearr_20946_21104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (5))){
var state_20943__$1 = state_20943;
var statearr_20947_21105 = state_20943__$1;
(statearr_20947_21105[(2)] = null);

(statearr_20947_21105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (4))){
var inst_20933 = (state_20943[(2)]);
var inst_20934 = async.call(null,inst_20933);
var state_20943__$1 = state_20943;
if(cljs.core.truth_(inst_20934)){
var statearr_20948_21106 = state_20943__$1;
(statearr_20948_21106[(1)] = (5));

} else {
var statearr_20949_21107 = state_20943__$1;
(statearr_20949_21107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (3))){
var inst_20941 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20943__$1,inst_20941);
} else {
if((state_val_20944 === (2))){
var state_20943__$1 = state_20943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20943__$1,(4),jobs);
} else {
if((state_val_20944 === (1))){
var state_20943__$1 = state_20943;
var statearr_20950_21108 = state_20943__$1;
(statearr_20950_21108[(2)] = null);

(statearr_20950_21108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21099,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
;
return ((function (__21099,switch__17366__auto__,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_20954 = [null,null,null,null,null,null,null];
(statearr_20954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__);

(statearr_20954[(1)] = (1));

return statearr_20954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1 = (function (state_20943){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_20943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e20955){if((e20955 instanceof Object)){
var ex__17370__auto__ = e20955;
var statearr_20956_21109 = state_20943;
(statearr_20956_21109[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21110 = state_20943;
state_20943 = G__21110;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = function(state_20943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1.call(this,state_20943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__;
})()
;})(__21099,switch__17366__auto__,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
})();
var state__17389__auto__ = (function (){var statearr_20957 = f__17388__auto__.call(null);
(statearr_20957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21102);

return statearr_20957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(__21099,c__17387__auto___21102,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
);


break;
case "compute":
var c__17387__auto___21111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21099,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (__21099,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function (state_20970){
var state_val_20971 = (state_20970[(1)]);
if((state_val_20971 === (7))){
var inst_20966 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20972_21112 = state_20970__$1;
(statearr_20972_21112[(2)] = inst_20966);

(statearr_20972_21112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (6))){
var state_20970__$1 = state_20970;
var statearr_20973_21113 = state_20970__$1;
(statearr_20973_21113[(2)] = null);

(statearr_20973_21113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (5))){
var state_20970__$1 = state_20970;
var statearr_20974_21114 = state_20970__$1;
(statearr_20974_21114[(2)] = null);

(statearr_20974_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (4))){
var inst_20960 = (state_20970[(2)]);
var inst_20961 = process.call(null,inst_20960);
var state_20970__$1 = state_20970;
if(cljs.core.truth_(inst_20961)){
var statearr_20975_21115 = state_20970__$1;
(statearr_20975_21115[(1)] = (5));

} else {
var statearr_20976_21116 = state_20970__$1;
(statearr_20976_21116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (3))){
var inst_20968 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20970__$1,inst_20968);
} else {
if((state_val_20971 === (2))){
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(4),jobs);
} else {
if((state_val_20971 === (1))){
var state_20970__$1 = state_20970;
var statearr_20977_21117 = state_20970__$1;
(statearr_20977_21117[(2)] = null);

(statearr_20977_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21099,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
;
return ((function (__21099,switch__17366__auto__,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_20981 = [null,null,null,null,null,null,null];
(statearr_20981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__);

(statearr_20981[(1)] = (1));

return statearr_20981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1 = (function (state_20970){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_20970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e20982){if((e20982 instanceof Object)){
var ex__17370__auto__ = e20982;
var statearr_20983_21118 = state_20970;
(statearr_20983_21118[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21119 = state_20970;
state_20970 = G__21119;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = function(state_20970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1.call(this,state_20970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__;
})()
;})(__21099,switch__17366__auto__,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
})();
var state__17389__auto__ = (function (){var statearr_20984 = f__17388__auto__.call(null);
(statearr_20984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21111);

return statearr_20984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(__21099,c__17387__auto___21111,G__20930_21100,n__11297__auto___21098,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21120 = (__21099 + (1));
__21099 = G__21120;
continue;
} else {
}
break;
}

var c__17387__auto___21121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___21121,jobs,results,process,async){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___21121,jobs,results,process,async){
return (function (state_21006){
var state_val_21007 = (state_21006[(1)]);
if((state_val_21007 === (9))){
var inst_20999 = (state_21006[(2)]);
var state_21006__$1 = (function (){var statearr_21008 = state_21006;
(statearr_21008[(7)] = inst_20999);

return statearr_21008;
})();
var statearr_21009_21122 = state_21006__$1;
(statearr_21009_21122[(2)] = null);

(statearr_21009_21122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (8))){
var inst_20992 = (state_21006[(8)]);
var inst_20997 = (state_21006[(2)]);
var state_21006__$1 = (function (){var statearr_21010 = state_21006;
(statearr_21010[(9)] = inst_20997);

return statearr_21010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(9),results,inst_20992);
} else {
if((state_val_21007 === (7))){
var inst_21002 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21011_21123 = state_21006__$1;
(statearr_21011_21123[(2)] = inst_21002);

(statearr_21011_21123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (6))){
var inst_20992 = (state_21006[(8)]);
var inst_20987 = (state_21006[(10)]);
var inst_20992__$1 = cljs.core.async.chan.call(null,(1));
var inst_20993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20994 = [inst_20987,inst_20992__$1];
var inst_20995 = (new cljs.core.PersistentVector(null,2,(5),inst_20993,inst_20994,null));
var state_21006__$1 = (function (){var statearr_21012 = state_21006;
(statearr_21012[(8)] = inst_20992__$1);

return statearr_21012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(8),jobs,inst_20995);
} else {
if((state_val_21007 === (5))){
var inst_20990 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21006__$1 = state_21006;
var statearr_21013_21124 = state_21006__$1;
(statearr_21013_21124[(2)] = inst_20990);

(statearr_21013_21124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (4))){
var inst_20987 = (state_21006[(10)]);
var inst_20987__$1 = (state_21006[(2)]);
var inst_20988 = (inst_20987__$1 == null);
var state_21006__$1 = (function (){var statearr_21014 = state_21006;
(statearr_21014[(10)] = inst_20987__$1);

return statearr_21014;
})();
if(cljs.core.truth_(inst_20988)){
var statearr_21015_21125 = state_21006__$1;
(statearr_21015_21125[(1)] = (5));

} else {
var statearr_21016_21126 = state_21006__$1;
(statearr_21016_21126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (3))){
var inst_21004 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21006__$1,inst_21004);
} else {
if((state_val_21007 === (2))){
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(4),from);
} else {
if((state_val_21007 === (1))){
var state_21006__$1 = state_21006;
var statearr_21017_21127 = state_21006__$1;
(statearr_21017_21127[(2)] = null);

(statearr_21017_21127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto___21121,jobs,results,process,async))
;
return ((function (switch__17366__auto__,c__17387__auto___21121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_21021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__);

(statearr_21021[(1)] = (1));

return statearr_21021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1 = (function (state_21006){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21022){if((e21022 instanceof Object)){
var ex__17370__auto__ = e21022;
var statearr_21023_21128 = state_21006;
(statearr_21023_21128[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21129 = state_21006;
state_21006 = G__21129;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___21121,jobs,results,process,async))
})();
var state__17389__auto__ = (function (){var statearr_21024 = f__17388__auto__.call(null);
(statearr_21024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21121);

return statearr_21024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___21121,jobs,results,process,async))
);


var c__17387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto__,jobs,results,process,async){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto__,jobs,results,process,async){
return (function (state_21062){
var state_val_21063 = (state_21062[(1)]);
if((state_val_21063 === (7))){
var inst_21058 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
var statearr_21064_21130 = state_21062__$1;
(statearr_21064_21130[(2)] = inst_21058);

(statearr_21064_21130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (20))){
var state_21062__$1 = state_21062;
var statearr_21065_21131 = state_21062__$1;
(statearr_21065_21131[(2)] = null);

(statearr_21065_21131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (1))){
var state_21062__$1 = state_21062;
var statearr_21066_21132 = state_21062__$1;
(statearr_21066_21132[(2)] = null);

(statearr_21066_21132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (4))){
var inst_21027 = (state_21062[(7)]);
var inst_21027__$1 = (state_21062[(2)]);
var inst_21028 = (inst_21027__$1 == null);
var state_21062__$1 = (function (){var statearr_21067 = state_21062;
(statearr_21067[(7)] = inst_21027__$1);

return statearr_21067;
})();
if(cljs.core.truth_(inst_21028)){
var statearr_21068_21133 = state_21062__$1;
(statearr_21068_21133[(1)] = (5));

} else {
var statearr_21069_21134 = state_21062__$1;
(statearr_21069_21134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (15))){
var inst_21040 = (state_21062[(8)]);
var state_21062__$1 = state_21062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21062__$1,(18),to,inst_21040);
} else {
if((state_val_21063 === (21))){
var inst_21053 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
var statearr_21070_21135 = state_21062__$1;
(statearr_21070_21135[(2)] = inst_21053);

(statearr_21070_21135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (13))){
var inst_21055 = (state_21062[(2)]);
var state_21062__$1 = (function (){var statearr_21071 = state_21062;
(statearr_21071[(9)] = inst_21055);

return statearr_21071;
})();
var statearr_21072_21136 = state_21062__$1;
(statearr_21072_21136[(2)] = null);

(statearr_21072_21136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (6))){
var inst_21027 = (state_21062[(7)]);
var state_21062__$1 = state_21062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21062__$1,(11),inst_21027);
} else {
if((state_val_21063 === (17))){
var inst_21048 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
if(cljs.core.truth_(inst_21048)){
var statearr_21073_21137 = state_21062__$1;
(statearr_21073_21137[(1)] = (19));

} else {
var statearr_21074_21138 = state_21062__$1;
(statearr_21074_21138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (3))){
var inst_21060 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21062__$1,inst_21060);
} else {
if((state_val_21063 === (12))){
var inst_21037 = (state_21062[(10)]);
var state_21062__$1 = state_21062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21062__$1,(14),inst_21037);
} else {
if((state_val_21063 === (2))){
var state_21062__$1 = state_21062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21062__$1,(4),results);
} else {
if((state_val_21063 === (19))){
var state_21062__$1 = state_21062;
var statearr_21075_21139 = state_21062__$1;
(statearr_21075_21139[(2)] = null);

(statearr_21075_21139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (11))){
var inst_21037 = (state_21062[(2)]);
var state_21062__$1 = (function (){var statearr_21076 = state_21062;
(statearr_21076[(10)] = inst_21037);

return statearr_21076;
})();
var statearr_21077_21140 = state_21062__$1;
(statearr_21077_21140[(2)] = null);

(statearr_21077_21140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (9))){
var state_21062__$1 = state_21062;
var statearr_21078_21141 = state_21062__$1;
(statearr_21078_21141[(2)] = null);

(statearr_21078_21141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (5))){
var state_21062__$1 = state_21062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21079_21142 = state_21062__$1;
(statearr_21079_21142[(1)] = (8));

} else {
var statearr_21080_21143 = state_21062__$1;
(statearr_21080_21143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (14))){
var inst_21040 = (state_21062[(8)]);
var inst_21042 = (state_21062[(11)]);
var inst_21040__$1 = (state_21062[(2)]);
var inst_21041 = (inst_21040__$1 == null);
var inst_21042__$1 = cljs.core.not.call(null,inst_21041);
var state_21062__$1 = (function (){var statearr_21081 = state_21062;
(statearr_21081[(8)] = inst_21040__$1);

(statearr_21081[(11)] = inst_21042__$1);

return statearr_21081;
})();
if(inst_21042__$1){
var statearr_21082_21144 = state_21062__$1;
(statearr_21082_21144[(1)] = (15));

} else {
var statearr_21083_21145 = state_21062__$1;
(statearr_21083_21145[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (16))){
var inst_21042 = (state_21062[(11)]);
var state_21062__$1 = state_21062;
var statearr_21084_21146 = state_21062__$1;
(statearr_21084_21146[(2)] = inst_21042);

(statearr_21084_21146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (10))){
var inst_21034 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
var statearr_21085_21147 = state_21062__$1;
(statearr_21085_21147[(2)] = inst_21034);

(statearr_21085_21147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (18))){
var inst_21045 = (state_21062[(2)]);
var state_21062__$1 = state_21062;
var statearr_21086_21148 = state_21062__$1;
(statearr_21086_21148[(2)] = inst_21045);

(statearr_21086_21148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21063 === (8))){
var inst_21031 = cljs.core.async.close_BANG_.call(null,to);
var state_21062__$1 = state_21062;
var statearr_21087_21149 = state_21062__$1;
(statearr_21087_21149[(2)] = inst_21031);

(statearr_21087_21149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__17387__auto__,jobs,results,process,async))
;
return ((function (switch__17366__auto__,c__17387__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_21091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__);

(statearr_21091[(1)] = (1));

return statearr_21091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1 = (function (state_21062){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21092){if((e21092 instanceof Object)){
var ex__17370__auto__ = e21092;
var statearr_21093_21150 = state_21062;
(statearr_21093_21150[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21151 = state_21062;
state_21062 = G__21151;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__ = function(state_21062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1.call(this,state_21062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto__,jobs,results,process,async))
})();
var state__17389__auto__ = (function (){var statearr_21094 = f__17388__auto__.call(null);
(statearr_21094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto__);

return statearr_21094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto__,jobs,results,process,async))
);

return c__17387__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__21153 = arguments.length;
switch (G__21153) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__21156 = arguments.length;
switch (G__21156) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__21159 = arguments.length;
switch (G__21159) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17387__auto___21211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___21211,tc,fc){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___21211,tc,fc){
return (function (state_21185){
var state_val_21186 = (state_21185[(1)]);
if((state_val_21186 === (7))){
var inst_21181 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
var statearr_21187_21212 = state_21185__$1;
(statearr_21187_21212[(2)] = inst_21181);

(statearr_21187_21212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (1))){
var state_21185__$1 = state_21185;
var statearr_21188_21213 = state_21185__$1;
(statearr_21188_21213[(2)] = null);

(statearr_21188_21213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (4))){
var inst_21162 = (state_21185[(7)]);
var inst_21162__$1 = (state_21185[(2)]);
var inst_21163 = (inst_21162__$1 == null);
var state_21185__$1 = (function (){var statearr_21189 = state_21185;
(statearr_21189[(7)] = inst_21162__$1);

return statearr_21189;
})();
if(cljs.core.truth_(inst_21163)){
var statearr_21190_21214 = state_21185__$1;
(statearr_21190_21214[(1)] = (5));

} else {
var statearr_21191_21215 = state_21185__$1;
(statearr_21191_21215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (13))){
var state_21185__$1 = state_21185;
var statearr_21192_21216 = state_21185__$1;
(statearr_21192_21216[(2)] = null);

(statearr_21192_21216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (6))){
var inst_21162 = (state_21185[(7)]);
var inst_21168 = p.call(null,inst_21162);
var state_21185__$1 = state_21185;
if(cljs.core.truth_(inst_21168)){
var statearr_21193_21217 = state_21185__$1;
(statearr_21193_21217[(1)] = (9));

} else {
var statearr_21194_21218 = state_21185__$1;
(statearr_21194_21218[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (3))){
var inst_21183 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21185__$1,inst_21183);
} else {
if((state_val_21186 === (12))){
var state_21185__$1 = state_21185;
var statearr_21195_21219 = state_21185__$1;
(statearr_21195_21219[(2)] = null);

(statearr_21195_21219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (2))){
var state_21185__$1 = state_21185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21185__$1,(4),ch);
} else {
if((state_val_21186 === (11))){
var inst_21162 = (state_21185[(7)]);
var inst_21172 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21185__$1,(8),inst_21172,inst_21162);
} else {
if((state_val_21186 === (9))){
var state_21185__$1 = state_21185;
var statearr_21196_21220 = state_21185__$1;
(statearr_21196_21220[(2)] = tc);

(statearr_21196_21220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (5))){
var inst_21165 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21166 = cljs.core.async.close_BANG_.call(null,fc);
var state_21185__$1 = (function (){var statearr_21197 = state_21185;
(statearr_21197[(8)] = inst_21165);

return statearr_21197;
})();
var statearr_21198_21221 = state_21185__$1;
(statearr_21198_21221[(2)] = inst_21166);

(statearr_21198_21221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (14))){
var inst_21179 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
var statearr_21199_21222 = state_21185__$1;
(statearr_21199_21222[(2)] = inst_21179);

(statearr_21199_21222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (10))){
var state_21185__$1 = state_21185;
var statearr_21200_21223 = state_21185__$1;
(statearr_21200_21223[(2)] = fc);

(statearr_21200_21223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (8))){
var inst_21174 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
if(cljs.core.truth_(inst_21174)){
var statearr_21201_21224 = state_21185__$1;
(statearr_21201_21224[(1)] = (12));

} else {
var statearr_21202_21225 = state_21185__$1;
(statearr_21202_21225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__17387__auto___21211,tc,fc))
;
return ((function (switch__17366__auto__,c__17387__auto___21211,tc,fc){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_21206 = [null,null,null,null,null,null,null,null,null];
(statearr_21206[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_21206[(1)] = (1));

return statearr_21206;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_21185){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21207){if((e21207 instanceof Object)){
var ex__17370__auto__ = e21207;
var statearr_21208_21226 = state_21185;
(statearr_21208_21226[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21227 = state_21185;
state_21185 = G__21227;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_21185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_21185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___21211,tc,fc))
})();
var state__17389__auto__ = (function (){var statearr_21209 = f__17388__auto__.call(null);
(statearr_21209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21211);

return statearr_21209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___21211,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto__){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto__){
return (function (state_21274){
var state_val_21275 = (state_21274[(1)]);
if((state_val_21275 === (7))){
var inst_21270 = (state_21274[(2)]);
var state_21274__$1 = state_21274;
var statearr_21276_21292 = state_21274__$1;
(statearr_21276_21292[(2)] = inst_21270);

(statearr_21276_21292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (6))){
var inst_21263 = (state_21274[(7)]);
var inst_21260 = (state_21274[(8)]);
var inst_21267 = f.call(null,inst_21260,inst_21263);
var inst_21260__$1 = inst_21267;
var state_21274__$1 = (function (){var statearr_21277 = state_21274;
(statearr_21277[(8)] = inst_21260__$1);

return statearr_21277;
})();
var statearr_21278_21293 = state_21274__$1;
(statearr_21278_21293[(2)] = null);

(statearr_21278_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (5))){
var inst_21260 = (state_21274[(8)]);
var state_21274__$1 = state_21274;
var statearr_21279_21294 = state_21274__$1;
(statearr_21279_21294[(2)] = inst_21260);

(statearr_21279_21294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (4))){
var inst_21263 = (state_21274[(7)]);
var inst_21263__$1 = (state_21274[(2)]);
var inst_21264 = (inst_21263__$1 == null);
var state_21274__$1 = (function (){var statearr_21280 = state_21274;
(statearr_21280[(7)] = inst_21263__$1);

return statearr_21280;
})();
if(cljs.core.truth_(inst_21264)){
var statearr_21281_21295 = state_21274__$1;
(statearr_21281_21295[(1)] = (5));

} else {
var statearr_21282_21296 = state_21274__$1;
(statearr_21282_21296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (3))){
var inst_21272 = (state_21274[(2)]);
var state_21274__$1 = state_21274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21274__$1,inst_21272);
} else {
if((state_val_21275 === (2))){
var state_21274__$1 = state_21274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21274__$1,(4),ch);
} else {
if((state_val_21275 === (1))){
var inst_21260 = init;
var state_21274__$1 = (function (){var statearr_21283 = state_21274;
(statearr_21283[(8)] = inst_21260);

return statearr_21283;
})();
var statearr_21284_21297 = state_21274__$1;
(statearr_21284_21297[(2)] = null);

(statearr_21284_21297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__17387__auto__))
;
return ((function (switch__17366__auto__,c__17387__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17367__auto____0 = (function (){
var statearr_21288 = [null,null,null,null,null,null,null,null,null];
(statearr_21288[(0)] = cljs$core$async$reduce_$_state_machine__17367__auto__);

(statearr_21288[(1)] = (1));

return statearr_21288;
});
var cljs$core$async$reduce_$_state_machine__17367__auto____1 = (function (state_21274){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21289){if((e21289 instanceof Object)){
var ex__17370__auto__ = e21289;
var statearr_21290_21298 = state_21274;
(statearr_21290_21298[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21299 = state_21274;
state_21274 = G__21299;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17367__auto__ = function(state_21274){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17367__auto____1.call(this,state_21274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17367__auto____0;
cljs$core$async$reduce_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17367__auto____1;
return cljs$core$async$reduce_$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto__))
})();
var state__17389__auto__ = (function (){var statearr_21291 = f__17388__auto__.call(null);
(statearr_21291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto__);

return statearr_21291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto__))
);

return c__17387__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__21301 = arguments.length;
switch (G__21301) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto__){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto__){
return (function (state_21326){
var state_val_21327 = (state_21326[(1)]);
if((state_val_21327 === (7))){
var inst_21308 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21328_21352 = state_21326__$1;
(statearr_21328_21352[(2)] = inst_21308);

(statearr_21328_21352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (1))){
var inst_21302 = cljs.core.seq.call(null,coll);
var inst_21303 = inst_21302;
var state_21326__$1 = (function (){var statearr_21329 = state_21326;
(statearr_21329[(7)] = inst_21303);

return statearr_21329;
})();
var statearr_21330_21353 = state_21326__$1;
(statearr_21330_21353[(2)] = null);

(statearr_21330_21353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (4))){
var inst_21303 = (state_21326[(7)]);
var inst_21306 = cljs.core.first.call(null,inst_21303);
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21326__$1,(7),ch,inst_21306);
} else {
if((state_val_21327 === (13))){
var inst_21320 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21331_21354 = state_21326__$1;
(statearr_21331_21354[(2)] = inst_21320);

(statearr_21331_21354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (6))){
var inst_21311 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
if(cljs.core.truth_(inst_21311)){
var statearr_21332_21355 = state_21326__$1;
(statearr_21332_21355[(1)] = (8));

} else {
var statearr_21333_21356 = state_21326__$1;
(statearr_21333_21356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (3))){
var inst_21324 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21326__$1,inst_21324);
} else {
if((state_val_21327 === (12))){
var state_21326__$1 = state_21326;
var statearr_21334_21357 = state_21326__$1;
(statearr_21334_21357[(2)] = null);

(statearr_21334_21357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (2))){
var inst_21303 = (state_21326[(7)]);
var state_21326__$1 = state_21326;
if(cljs.core.truth_(inst_21303)){
var statearr_21335_21358 = state_21326__$1;
(statearr_21335_21358[(1)] = (4));

} else {
var statearr_21336_21359 = state_21326__$1;
(statearr_21336_21359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (11))){
var inst_21317 = cljs.core.async.close_BANG_.call(null,ch);
var state_21326__$1 = state_21326;
var statearr_21337_21360 = state_21326__$1;
(statearr_21337_21360[(2)] = inst_21317);

(statearr_21337_21360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (9))){
var state_21326__$1 = state_21326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21338_21361 = state_21326__$1;
(statearr_21338_21361[(1)] = (11));

} else {
var statearr_21339_21362 = state_21326__$1;
(statearr_21339_21362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (5))){
var inst_21303 = (state_21326[(7)]);
var state_21326__$1 = state_21326;
var statearr_21340_21363 = state_21326__$1;
(statearr_21340_21363[(2)] = inst_21303);

(statearr_21340_21363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (10))){
var inst_21322 = (state_21326[(2)]);
var state_21326__$1 = state_21326;
var statearr_21341_21364 = state_21326__$1;
(statearr_21341_21364[(2)] = inst_21322);

(statearr_21341_21364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21327 === (8))){
var inst_21303 = (state_21326[(7)]);
var inst_21313 = cljs.core.next.call(null,inst_21303);
var inst_21303__$1 = inst_21313;
var state_21326__$1 = (function (){var statearr_21342 = state_21326;
(statearr_21342[(7)] = inst_21303__$1);

return statearr_21342;
})();
var statearr_21343_21365 = state_21326__$1;
(statearr_21343_21365[(2)] = null);

(statearr_21343_21365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto__))
;
return ((function (switch__17366__auto__,c__17387__auto__){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_21347 = [null,null,null,null,null,null,null,null];
(statearr_21347[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_21347[(1)] = (1));

return statearr_21347;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_21326){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21348){if((e21348 instanceof Object)){
var ex__17370__auto__ = e21348;
var statearr_21349_21366 = state_21326;
(statearr_21349_21366[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21367 = state_21326;
state_21326 = G__21367;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_21326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_21326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto__))
})();
var state__17389__auto__ = (function (){var statearr_21350 = f__17388__auto__.call(null);
(statearr_21350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto__);

return statearr_21350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto__))
);

return c__17387__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj21369 = {};
return obj21369;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__10400__auto__ = _;
if(and__10400__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__11048__auto__ = (((_ == null))?null:_);
return (function (){var or__10412__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21371 = {};
return obj21371;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t21593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21593 = (function (cs,ch,mult,meta21594){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21594 = meta21594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21593.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21593.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21595){
var self__ = this;
var _21595__$1 = this;
return self__.meta21594;
});})(cs))
;

cljs.core.async.t21593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21595,meta21594__$1){
var self__ = this;
var _21595__$1 = this;
return (new cljs.core.async.t21593(self__.cs,self__.ch,self__.mult,meta21594__$1));
});})(cs))
;

cljs.core.async.t21593.cljs$lang$type = true;

cljs.core.async.t21593.cljs$lang$ctorStr = "cljs.core.async/t21593";

cljs.core.async.t21593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t21593");
});})(cs))
;

cljs.core.async.__GT_t21593 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t21593(cs__$1,ch__$1,mult__$1,meta21594){
return (new cljs.core.async.t21593(cs__$1,ch__$1,mult__$1,meta21594));
});})(cs))
;

}

return (new cljs.core.async.t21593(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17387__auto___21814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___21814,cs,m,dchan,dctr,done){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___21814,cs,m,dchan,dctr,done){
return (function (state_21726){
var state_val_21727 = (state_21726[(1)]);
if((state_val_21727 === (7))){
var inst_21722 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21728_21815 = state_21726__$1;
(statearr_21728_21815[(2)] = inst_21722);

(statearr_21728_21815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (20))){
var inst_21627 = (state_21726[(7)]);
var inst_21637 = cljs.core.first.call(null,inst_21627);
var inst_21638 = cljs.core.nth.call(null,inst_21637,(0),null);
var inst_21639 = cljs.core.nth.call(null,inst_21637,(1),null);
var state_21726__$1 = (function (){var statearr_21729 = state_21726;
(statearr_21729[(8)] = inst_21638);

return statearr_21729;
})();
if(cljs.core.truth_(inst_21639)){
var statearr_21730_21816 = state_21726__$1;
(statearr_21730_21816[(1)] = (22));

} else {
var statearr_21731_21817 = state_21726__$1;
(statearr_21731_21817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (27))){
var inst_21669 = (state_21726[(9)]);
var inst_21598 = (state_21726[(10)]);
var inst_21674 = (state_21726[(11)]);
var inst_21667 = (state_21726[(12)]);
var inst_21674__$1 = cljs.core._nth.call(null,inst_21667,inst_21669);
var inst_21675 = cljs.core.async.put_BANG_.call(null,inst_21674__$1,inst_21598,done);
var state_21726__$1 = (function (){var statearr_21732 = state_21726;
(statearr_21732[(11)] = inst_21674__$1);

return statearr_21732;
})();
if(cljs.core.truth_(inst_21675)){
var statearr_21733_21818 = state_21726__$1;
(statearr_21733_21818[(1)] = (30));

} else {
var statearr_21734_21819 = state_21726__$1;
(statearr_21734_21819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (1))){
var state_21726__$1 = state_21726;
var statearr_21735_21820 = state_21726__$1;
(statearr_21735_21820[(2)] = null);

(statearr_21735_21820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (24))){
var inst_21627 = (state_21726[(7)]);
var inst_21644 = (state_21726[(2)]);
var inst_21645 = cljs.core.next.call(null,inst_21627);
var inst_21607 = inst_21645;
var inst_21608 = null;
var inst_21609 = (0);
var inst_21610 = (0);
var state_21726__$1 = (function (){var statearr_21736 = state_21726;
(statearr_21736[(13)] = inst_21644);

(statearr_21736[(14)] = inst_21607);

(statearr_21736[(15)] = inst_21609);

(statearr_21736[(16)] = inst_21608);

(statearr_21736[(17)] = inst_21610);

return statearr_21736;
})();
var statearr_21737_21821 = state_21726__$1;
(statearr_21737_21821[(2)] = null);

(statearr_21737_21821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (39))){
var state_21726__$1 = state_21726;
var statearr_21741_21822 = state_21726__$1;
(statearr_21741_21822[(2)] = null);

(statearr_21741_21822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (4))){
var inst_21598 = (state_21726[(10)]);
var inst_21598__$1 = (state_21726[(2)]);
var inst_21599 = (inst_21598__$1 == null);
var state_21726__$1 = (function (){var statearr_21742 = state_21726;
(statearr_21742[(10)] = inst_21598__$1);

return statearr_21742;
})();
if(cljs.core.truth_(inst_21599)){
var statearr_21743_21823 = state_21726__$1;
(statearr_21743_21823[(1)] = (5));

} else {
var statearr_21744_21824 = state_21726__$1;
(statearr_21744_21824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (15))){
var inst_21607 = (state_21726[(14)]);
var inst_21609 = (state_21726[(15)]);
var inst_21608 = (state_21726[(16)]);
var inst_21610 = (state_21726[(17)]);
var inst_21623 = (state_21726[(2)]);
var inst_21624 = (inst_21610 + (1));
var tmp21738 = inst_21607;
var tmp21739 = inst_21609;
var tmp21740 = inst_21608;
var inst_21607__$1 = tmp21738;
var inst_21608__$1 = tmp21740;
var inst_21609__$1 = tmp21739;
var inst_21610__$1 = inst_21624;
var state_21726__$1 = (function (){var statearr_21745 = state_21726;
(statearr_21745[(14)] = inst_21607__$1);

(statearr_21745[(18)] = inst_21623);

(statearr_21745[(15)] = inst_21609__$1);

(statearr_21745[(16)] = inst_21608__$1);

(statearr_21745[(17)] = inst_21610__$1);

return statearr_21745;
})();
var statearr_21746_21825 = state_21726__$1;
(statearr_21746_21825[(2)] = null);

(statearr_21746_21825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (21))){
var inst_21648 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21750_21826 = state_21726__$1;
(statearr_21750_21826[(2)] = inst_21648);

(statearr_21750_21826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (31))){
var inst_21674 = (state_21726[(11)]);
var inst_21678 = done.call(null,null);
var inst_21679 = cljs.core.async.untap_STAR_.call(null,m,inst_21674);
var state_21726__$1 = (function (){var statearr_21751 = state_21726;
(statearr_21751[(19)] = inst_21678);

return statearr_21751;
})();
var statearr_21752_21827 = state_21726__$1;
(statearr_21752_21827[(2)] = inst_21679);

(statearr_21752_21827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (32))){
var inst_21669 = (state_21726[(9)]);
var inst_21666 = (state_21726[(20)]);
var inst_21668 = (state_21726[(21)]);
var inst_21667 = (state_21726[(12)]);
var inst_21681 = (state_21726[(2)]);
var inst_21682 = (inst_21669 + (1));
var tmp21747 = inst_21666;
var tmp21748 = inst_21668;
var tmp21749 = inst_21667;
var inst_21666__$1 = tmp21747;
var inst_21667__$1 = tmp21749;
var inst_21668__$1 = tmp21748;
var inst_21669__$1 = inst_21682;
var state_21726__$1 = (function (){var statearr_21753 = state_21726;
(statearr_21753[(9)] = inst_21669__$1);

(statearr_21753[(20)] = inst_21666__$1);

(statearr_21753[(21)] = inst_21668__$1);

(statearr_21753[(22)] = inst_21681);

(statearr_21753[(12)] = inst_21667__$1);

return statearr_21753;
})();
var statearr_21754_21828 = state_21726__$1;
(statearr_21754_21828[(2)] = null);

(statearr_21754_21828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (40))){
var inst_21694 = (state_21726[(23)]);
var inst_21698 = done.call(null,null);
var inst_21699 = cljs.core.async.untap_STAR_.call(null,m,inst_21694);
var state_21726__$1 = (function (){var statearr_21755 = state_21726;
(statearr_21755[(24)] = inst_21698);

return statearr_21755;
})();
var statearr_21756_21829 = state_21726__$1;
(statearr_21756_21829[(2)] = inst_21699);

(statearr_21756_21829[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (33))){
var inst_21685 = (state_21726[(25)]);
var inst_21687 = cljs.core.chunked_seq_QMARK_.call(null,inst_21685);
var state_21726__$1 = state_21726;
if(inst_21687){
var statearr_21757_21830 = state_21726__$1;
(statearr_21757_21830[(1)] = (36));

} else {
var statearr_21758_21831 = state_21726__$1;
(statearr_21758_21831[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (13))){
var inst_21617 = (state_21726[(26)]);
var inst_21620 = cljs.core.async.close_BANG_.call(null,inst_21617);
var state_21726__$1 = state_21726;
var statearr_21759_21832 = state_21726__$1;
(statearr_21759_21832[(2)] = inst_21620);

(statearr_21759_21832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (22))){
var inst_21638 = (state_21726[(8)]);
var inst_21641 = cljs.core.async.close_BANG_.call(null,inst_21638);
var state_21726__$1 = state_21726;
var statearr_21760_21833 = state_21726__$1;
(statearr_21760_21833[(2)] = inst_21641);

(statearr_21760_21833[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (36))){
var inst_21685 = (state_21726[(25)]);
var inst_21689 = cljs.core.chunk_first.call(null,inst_21685);
var inst_21690 = cljs.core.chunk_rest.call(null,inst_21685);
var inst_21691 = cljs.core.count.call(null,inst_21689);
var inst_21666 = inst_21690;
var inst_21667 = inst_21689;
var inst_21668 = inst_21691;
var inst_21669 = (0);
var state_21726__$1 = (function (){var statearr_21761 = state_21726;
(statearr_21761[(9)] = inst_21669);

(statearr_21761[(20)] = inst_21666);

(statearr_21761[(21)] = inst_21668);

(statearr_21761[(12)] = inst_21667);

return statearr_21761;
})();
var statearr_21762_21834 = state_21726__$1;
(statearr_21762_21834[(2)] = null);

(statearr_21762_21834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (41))){
var inst_21685 = (state_21726[(25)]);
var inst_21701 = (state_21726[(2)]);
var inst_21702 = cljs.core.next.call(null,inst_21685);
var inst_21666 = inst_21702;
var inst_21667 = null;
var inst_21668 = (0);
var inst_21669 = (0);
var state_21726__$1 = (function (){var statearr_21763 = state_21726;
(statearr_21763[(27)] = inst_21701);

(statearr_21763[(9)] = inst_21669);

(statearr_21763[(20)] = inst_21666);

(statearr_21763[(21)] = inst_21668);

(statearr_21763[(12)] = inst_21667);

return statearr_21763;
})();
var statearr_21764_21835 = state_21726__$1;
(statearr_21764_21835[(2)] = null);

(statearr_21764_21835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (43))){
var state_21726__$1 = state_21726;
var statearr_21765_21836 = state_21726__$1;
(statearr_21765_21836[(2)] = null);

(statearr_21765_21836[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (29))){
var inst_21710 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21766_21837 = state_21726__$1;
(statearr_21766_21837[(2)] = inst_21710);

(statearr_21766_21837[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (44))){
var inst_21719 = (state_21726[(2)]);
var state_21726__$1 = (function (){var statearr_21767 = state_21726;
(statearr_21767[(28)] = inst_21719);

return statearr_21767;
})();
var statearr_21768_21838 = state_21726__$1;
(statearr_21768_21838[(2)] = null);

(statearr_21768_21838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (6))){
var inst_21658 = (state_21726[(29)]);
var inst_21657 = cljs.core.deref.call(null,cs);
var inst_21658__$1 = cljs.core.keys.call(null,inst_21657);
var inst_21659 = cljs.core.count.call(null,inst_21658__$1);
var inst_21660 = cljs.core.reset_BANG_.call(null,dctr,inst_21659);
var inst_21665 = cljs.core.seq.call(null,inst_21658__$1);
var inst_21666 = inst_21665;
var inst_21667 = null;
var inst_21668 = (0);
var inst_21669 = (0);
var state_21726__$1 = (function (){var statearr_21769 = state_21726;
(statearr_21769[(29)] = inst_21658__$1);

(statearr_21769[(9)] = inst_21669);

(statearr_21769[(30)] = inst_21660);

(statearr_21769[(20)] = inst_21666);

(statearr_21769[(21)] = inst_21668);

(statearr_21769[(12)] = inst_21667);

return statearr_21769;
})();
var statearr_21770_21839 = state_21726__$1;
(statearr_21770_21839[(2)] = null);

(statearr_21770_21839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (28))){
var inst_21666 = (state_21726[(20)]);
var inst_21685 = (state_21726[(25)]);
var inst_21685__$1 = cljs.core.seq.call(null,inst_21666);
var state_21726__$1 = (function (){var statearr_21771 = state_21726;
(statearr_21771[(25)] = inst_21685__$1);

return statearr_21771;
})();
if(inst_21685__$1){
var statearr_21772_21840 = state_21726__$1;
(statearr_21772_21840[(1)] = (33));

} else {
var statearr_21773_21841 = state_21726__$1;
(statearr_21773_21841[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (25))){
var inst_21669 = (state_21726[(9)]);
var inst_21668 = (state_21726[(21)]);
var inst_21671 = (inst_21669 < inst_21668);
var inst_21672 = inst_21671;
var state_21726__$1 = state_21726;
if(cljs.core.truth_(inst_21672)){
var statearr_21774_21842 = state_21726__$1;
(statearr_21774_21842[(1)] = (27));

} else {
var statearr_21775_21843 = state_21726__$1;
(statearr_21775_21843[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (34))){
var state_21726__$1 = state_21726;
var statearr_21776_21844 = state_21726__$1;
(statearr_21776_21844[(2)] = null);

(statearr_21776_21844[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (17))){
var state_21726__$1 = state_21726;
var statearr_21777_21845 = state_21726__$1;
(statearr_21777_21845[(2)] = null);

(statearr_21777_21845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (3))){
var inst_21724 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21726__$1,inst_21724);
} else {
if((state_val_21727 === (12))){
var inst_21653 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21778_21846 = state_21726__$1;
(statearr_21778_21846[(2)] = inst_21653);

(statearr_21778_21846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (2))){
var state_21726__$1 = state_21726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21726__$1,(4),ch);
} else {
if((state_val_21727 === (23))){
var state_21726__$1 = state_21726;
var statearr_21779_21847 = state_21726__$1;
(statearr_21779_21847[(2)] = null);

(statearr_21779_21847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (35))){
var inst_21708 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21780_21848 = state_21726__$1;
(statearr_21780_21848[(2)] = inst_21708);

(statearr_21780_21848[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (19))){
var inst_21627 = (state_21726[(7)]);
var inst_21631 = cljs.core.chunk_first.call(null,inst_21627);
var inst_21632 = cljs.core.chunk_rest.call(null,inst_21627);
var inst_21633 = cljs.core.count.call(null,inst_21631);
var inst_21607 = inst_21632;
var inst_21608 = inst_21631;
var inst_21609 = inst_21633;
var inst_21610 = (0);
var state_21726__$1 = (function (){var statearr_21781 = state_21726;
(statearr_21781[(14)] = inst_21607);

(statearr_21781[(15)] = inst_21609);

(statearr_21781[(16)] = inst_21608);

(statearr_21781[(17)] = inst_21610);

return statearr_21781;
})();
var statearr_21782_21849 = state_21726__$1;
(statearr_21782_21849[(2)] = null);

(statearr_21782_21849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (11))){
var inst_21607 = (state_21726[(14)]);
var inst_21627 = (state_21726[(7)]);
var inst_21627__$1 = cljs.core.seq.call(null,inst_21607);
var state_21726__$1 = (function (){var statearr_21783 = state_21726;
(statearr_21783[(7)] = inst_21627__$1);

return statearr_21783;
})();
if(inst_21627__$1){
var statearr_21784_21850 = state_21726__$1;
(statearr_21784_21850[(1)] = (16));

} else {
var statearr_21785_21851 = state_21726__$1;
(statearr_21785_21851[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (9))){
var inst_21655 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21786_21852 = state_21726__$1;
(statearr_21786_21852[(2)] = inst_21655);

(statearr_21786_21852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (5))){
var inst_21605 = cljs.core.deref.call(null,cs);
var inst_21606 = cljs.core.seq.call(null,inst_21605);
var inst_21607 = inst_21606;
var inst_21608 = null;
var inst_21609 = (0);
var inst_21610 = (0);
var state_21726__$1 = (function (){var statearr_21787 = state_21726;
(statearr_21787[(14)] = inst_21607);

(statearr_21787[(15)] = inst_21609);

(statearr_21787[(16)] = inst_21608);

(statearr_21787[(17)] = inst_21610);

return statearr_21787;
})();
var statearr_21788_21853 = state_21726__$1;
(statearr_21788_21853[(2)] = null);

(statearr_21788_21853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (14))){
var state_21726__$1 = state_21726;
var statearr_21789_21854 = state_21726__$1;
(statearr_21789_21854[(2)] = null);

(statearr_21789_21854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (45))){
var inst_21716 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21790_21855 = state_21726__$1;
(statearr_21790_21855[(2)] = inst_21716);

(statearr_21790_21855[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (26))){
var inst_21658 = (state_21726[(29)]);
var inst_21712 = (state_21726[(2)]);
var inst_21713 = cljs.core.seq.call(null,inst_21658);
var state_21726__$1 = (function (){var statearr_21791 = state_21726;
(statearr_21791[(31)] = inst_21712);

return statearr_21791;
})();
if(inst_21713){
var statearr_21792_21856 = state_21726__$1;
(statearr_21792_21856[(1)] = (42));

} else {
var statearr_21793_21857 = state_21726__$1;
(statearr_21793_21857[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (16))){
var inst_21627 = (state_21726[(7)]);
var inst_21629 = cljs.core.chunked_seq_QMARK_.call(null,inst_21627);
var state_21726__$1 = state_21726;
if(inst_21629){
var statearr_21794_21858 = state_21726__$1;
(statearr_21794_21858[(1)] = (19));

} else {
var statearr_21795_21859 = state_21726__$1;
(statearr_21795_21859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (38))){
var inst_21705 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21796_21860 = state_21726__$1;
(statearr_21796_21860[(2)] = inst_21705);

(statearr_21796_21860[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (30))){
var state_21726__$1 = state_21726;
var statearr_21797_21861 = state_21726__$1;
(statearr_21797_21861[(2)] = null);

(statearr_21797_21861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (10))){
var inst_21608 = (state_21726[(16)]);
var inst_21610 = (state_21726[(17)]);
var inst_21616 = cljs.core._nth.call(null,inst_21608,inst_21610);
var inst_21617 = cljs.core.nth.call(null,inst_21616,(0),null);
var inst_21618 = cljs.core.nth.call(null,inst_21616,(1),null);
var state_21726__$1 = (function (){var statearr_21798 = state_21726;
(statearr_21798[(26)] = inst_21617);

return statearr_21798;
})();
if(cljs.core.truth_(inst_21618)){
var statearr_21799_21862 = state_21726__$1;
(statearr_21799_21862[(1)] = (13));

} else {
var statearr_21800_21863 = state_21726__$1;
(statearr_21800_21863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (18))){
var inst_21651 = (state_21726[(2)]);
var state_21726__$1 = state_21726;
var statearr_21801_21864 = state_21726__$1;
(statearr_21801_21864[(2)] = inst_21651);

(statearr_21801_21864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (42))){
var state_21726__$1 = state_21726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21726__$1,(45),dchan);
} else {
if((state_val_21727 === (37))){
var inst_21694 = (state_21726[(23)]);
var inst_21598 = (state_21726[(10)]);
var inst_21685 = (state_21726[(25)]);
var inst_21694__$1 = cljs.core.first.call(null,inst_21685);
var inst_21695 = cljs.core.async.put_BANG_.call(null,inst_21694__$1,inst_21598,done);
var state_21726__$1 = (function (){var statearr_21802 = state_21726;
(statearr_21802[(23)] = inst_21694__$1);

return statearr_21802;
})();
if(cljs.core.truth_(inst_21695)){
var statearr_21803_21865 = state_21726__$1;
(statearr_21803_21865[(1)] = (39));

} else {
var statearr_21804_21866 = state_21726__$1;
(statearr_21804_21866[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21727 === (8))){
var inst_21609 = (state_21726[(15)]);
var inst_21610 = (state_21726[(17)]);
var inst_21612 = (inst_21610 < inst_21609);
var inst_21613 = inst_21612;
var state_21726__$1 = state_21726;
if(cljs.core.truth_(inst_21613)){
var statearr_21805_21867 = state_21726__$1;
(statearr_21805_21867[(1)] = (10));

} else {
var statearr_21806_21868 = state_21726__$1;
(statearr_21806_21868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__17387__auto___21814,cs,m,dchan,dctr,done))
;
return ((function (switch__17366__auto__,c__17387__auto___21814,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17367__auto__ = null;
var cljs$core$async$mult_$_state_machine__17367__auto____0 = (function (){
var statearr_21810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21810[(0)] = cljs$core$async$mult_$_state_machine__17367__auto__);

(statearr_21810[(1)] = (1));

return statearr_21810;
});
var cljs$core$async$mult_$_state_machine__17367__auto____1 = (function (state_21726){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_21726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e21811){if((e21811 instanceof Object)){
var ex__17370__auto__ = e21811;
var statearr_21812_21869 = state_21726;
(statearr_21812_21869[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21870 = state_21726;
state_21726 = G__21870;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17367__auto__ = function(state_21726){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17367__auto____1.call(this,state_21726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17367__auto____0;
cljs$core$async$mult_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17367__auto____1;
return cljs$core$async$mult_$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___21814,cs,m,dchan,dctr,done))
})();
var state__17389__auto__ = (function (){var statearr_21813 = f__17388__auto__.call(null);
(statearr_21813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___21814);

return statearr_21813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___21814,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__21872 = arguments.length;
switch (G__21872) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj21875 = {};
return obj21875;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__10400__auto__ = m;
if(and__10400__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__11048__auto__ = (((m == null))?null:m);
return (function (){var or__10412__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__11452__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11452__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21880){
var map__21881 = p__21880;
var map__21881__$1 = ((cljs.core.seq_QMARK_.call(null,map__21881))?cljs.core.apply.call(null,cljs.core.hash_map,map__21881):map__21881);
var opts = map__21881__$1;
var statearr_21882_21885 = state;
(statearr_21882_21885[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21881,map__21881__$1,opts){
return (function (val){
var statearr_21883_21886 = state;
(statearr_21883_21886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21881,map__21881__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21884_21887 = state;
(statearr_21884_21887[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21876){
var G__21877 = cljs.core.first.call(null,seq21876);
var seq21876__$1 = cljs.core.next.call(null,seq21876);
var G__21878 = cljs.core.first.call(null,seq21876__$1);
var seq21876__$2 = cljs.core.next.call(null,seq21876__$1);
var G__21879 = cljs.core.first.call(null,seq21876__$2);
var seq21876__$3 = cljs.core.next.call(null,seq21876__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21877,G__21878,G__21879,seq21876__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22007 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22007 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22008){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22008 = meta22008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22007.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22009){
var self__ = this;
var _22009__$1 = this;
return self__.meta22008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22009,meta22008__$1){
var self__ = this;
var _22009__$1 = this;
return (new cljs.core.async.t22007(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22007.cljs$lang$type = true;

cljs.core.async.t22007.cljs$lang$ctorStr = "cljs.core.async/t22007";

cljs.core.async.t22007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t22007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22008){
return (new cljs.core.async.t22007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22007(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17387__auto___22126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22079){
var state_val_22080 = (state_22079[(1)]);
if((state_val_22080 === (7))){
var inst_22023 = (state_22079[(7)]);
var inst_22028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22023);
var state_22079__$1 = state_22079;
var statearr_22081_22127 = state_22079__$1;
(statearr_22081_22127[(2)] = inst_22028);

(statearr_22081_22127[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (20))){
var inst_22038 = (state_22079[(8)]);
var state_22079__$1 = state_22079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22079__$1,(23),out,inst_22038);
} else {
if((state_val_22080 === (1))){
var inst_22013 = (state_22079[(9)]);
var inst_22013__$1 = calc_state.call(null);
var inst_22014 = cljs.core.seq_QMARK_.call(null,inst_22013__$1);
var state_22079__$1 = (function (){var statearr_22082 = state_22079;
(statearr_22082[(9)] = inst_22013__$1);

return statearr_22082;
})();
if(inst_22014){
var statearr_22083_22128 = state_22079__$1;
(statearr_22083_22128[(1)] = (2));

} else {
var statearr_22084_22129 = state_22079__$1;
(statearr_22084_22129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (24))){
var inst_22031 = (state_22079[(10)]);
var inst_22023 = inst_22031;
var state_22079__$1 = (function (){var statearr_22085 = state_22079;
(statearr_22085[(7)] = inst_22023);

return statearr_22085;
})();
var statearr_22086_22130 = state_22079__$1;
(statearr_22086_22130[(2)] = null);

(statearr_22086_22130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (4))){
var inst_22013 = (state_22079[(9)]);
var inst_22019 = (state_22079[(2)]);
var inst_22020 = cljs.core.get.call(null,inst_22019,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22021 = cljs.core.get.call(null,inst_22019,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22022 = cljs.core.get.call(null,inst_22019,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22023 = inst_22013;
var state_22079__$1 = (function (){var statearr_22087 = state_22079;
(statearr_22087[(7)] = inst_22023);

(statearr_22087[(11)] = inst_22022);

(statearr_22087[(12)] = inst_22020);

(statearr_22087[(13)] = inst_22021);

return statearr_22087;
})();
var statearr_22088_22131 = state_22079__$1;
(statearr_22088_22131[(2)] = null);

(statearr_22088_22131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (15))){
var state_22079__$1 = state_22079;
var statearr_22089_22132 = state_22079__$1;
(statearr_22089_22132[(2)] = null);

(statearr_22089_22132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (21))){
var inst_22031 = (state_22079[(10)]);
var inst_22023 = inst_22031;
var state_22079__$1 = (function (){var statearr_22090 = state_22079;
(statearr_22090[(7)] = inst_22023);

return statearr_22090;
})();
var statearr_22091_22133 = state_22079__$1;
(statearr_22091_22133[(2)] = null);

(statearr_22091_22133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (13))){
var inst_22075 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
var statearr_22092_22134 = state_22079__$1;
(statearr_22092_22134[(2)] = inst_22075);

(statearr_22092_22134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (22))){
var inst_22073 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
var statearr_22093_22135 = state_22079__$1;
(statearr_22093_22135[(2)] = inst_22073);

(statearr_22093_22135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (6))){
var inst_22077 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22079__$1,inst_22077);
} else {
if((state_val_22080 === (25))){
var state_22079__$1 = state_22079;
var statearr_22094_22136 = state_22079__$1;
(statearr_22094_22136[(2)] = null);

(statearr_22094_22136[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (17))){
var inst_22053 = (state_22079[(14)]);
var state_22079__$1 = state_22079;
var statearr_22095_22137 = state_22079__$1;
(statearr_22095_22137[(2)] = inst_22053);

(statearr_22095_22137[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (3))){
var inst_22013 = (state_22079[(9)]);
var state_22079__$1 = state_22079;
var statearr_22096_22138 = state_22079__$1;
(statearr_22096_22138[(2)] = inst_22013);

(statearr_22096_22138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (12))){
var inst_22053 = (state_22079[(14)]);
var inst_22034 = (state_22079[(15)]);
var inst_22039 = (state_22079[(16)]);
var inst_22053__$1 = inst_22034.call(null,inst_22039);
var state_22079__$1 = (function (){var statearr_22097 = state_22079;
(statearr_22097[(14)] = inst_22053__$1);

return statearr_22097;
})();
if(cljs.core.truth_(inst_22053__$1)){
var statearr_22098_22139 = state_22079__$1;
(statearr_22098_22139[(1)] = (17));

} else {
var statearr_22099_22140 = state_22079__$1;
(statearr_22099_22140[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (2))){
var inst_22013 = (state_22079[(9)]);
var inst_22016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22013);
var state_22079__$1 = state_22079;
var statearr_22100_22141 = state_22079__$1;
(statearr_22100_22141[(2)] = inst_22016);

(statearr_22100_22141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (23))){
var inst_22064 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
if(cljs.core.truth_(inst_22064)){
var statearr_22101_22142 = state_22079__$1;
(statearr_22101_22142[(1)] = (24));

} else {
var statearr_22102_22143 = state_22079__$1;
(statearr_22102_22143[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (19))){
var inst_22061 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
if(cljs.core.truth_(inst_22061)){
var statearr_22103_22144 = state_22079__$1;
(statearr_22103_22144[(1)] = (20));

} else {
var statearr_22104_22145 = state_22079__$1;
(statearr_22104_22145[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (11))){
var inst_22038 = (state_22079[(8)]);
var inst_22044 = (inst_22038 == null);
var state_22079__$1 = state_22079;
if(cljs.core.truth_(inst_22044)){
var statearr_22105_22146 = state_22079__$1;
(statearr_22105_22146[(1)] = (14));

} else {
var statearr_22106_22147 = state_22079__$1;
(statearr_22106_22147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (9))){
var inst_22031 = (state_22079[(10)]);
var inst_22031__$1 = (state_22079[(2)]);
var inst_22032 = cljs.core.get.call(null,inst_22031__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22033 = cljs.core.get.call(null,inst_22031__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22034 = cljs.core.get.call(null,inst_22031__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22079__$1 = (function (){var statearr_22107 = state_22079;
(statearr_22107[(17)] = inst_22033);

(statearr_22107[(15)] = inst_22034);

(statearr_22107[(10)] = inst_22031__$1);

return statearr_22107;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22079__$1,(10),inst_22032);
} else {
if((state_val_22080 === (5))){
var inst_22023 = (state_22079[(7)]);
var inst_22026 = cljs.core.seq_QMARK_.call(null,inst_22023);
var state_22079__$1 = state_22079;
if(inst_22026){
var statearr_22108_22148 = state_22079__$1;
(statearr_22108_22148[(1)] = (7));

} else {
var statearr_22109_22149 = state_22079__$1;
(statearr_22109_22149[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (14))){
var inst_22039 = (state_22079[(16)]);
var inst_22046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22039);
var state_22079__$1 = state_22079;
var statearr_22110_22150 = state_22079__$1;
(statearr_22110_22150[(2)] = inst_22046);

(statearr_22110_22150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (26))){
var inst_22069 = (state_22079[(2)]);
var state_22079__$1 = state_22079;
var statearr_22111_22151 = state_22079__$1;
(statearr_22111_22151[(2)] = inst_22069);

(statearr_22111_22151[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (16))){
var inst_22049 = (state_22079[(2)]);
var inst_22050 = calc_state.call(null);
var inst_22023 = inst_22050;
var state_22079__$1 = (function (){var statearr_22112 = state_22079;
(statearr_22112[(7)] = inst_22023);

(statearr_22112[(18)] = inst_22049);

return statearr_22112;
})();
var statearr_22113_22152 = state_22079__$1;
(statearr_22113_22152[(2)] = null);

(statearr_22113_22152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (10))){
var inst_22038 = (state_22079[(8)]);
var inst_22039 = (state_22079[(16)]);
var inst_22037 = (state_22079[(2)]);
var inst_22038__$1 = cljs.core.nth.call(null,inst_22037,(0),null);
var inst_22039__$1 = cljs.core.nth.call(null,inst_22037,(1),null);
var inst_22040 = (inst_22038__$1 == null);
var inst_22041 = cljs.core._EQ_.call(null,inst_22039__$1,change);
var inst_22042 = (inst_22040) || (inst_22041);
var state_22079__$1 = (function (){var statearr_22114 = state_22079;
(statearr_22114[(8)] = inst_22038__$1);

(statearr_22114[(16)] = inst_22039__$1);

return statearr_22114;
})();
if(cljs.core.truth_(inst_22042)){
var statearr_22115_22153 = state_22079__$1;
(statearr_22115_22153[(1)] = (11));

} else {
var statearr_22116_22154 = state_22079__$1;
(statearr_22116_22154[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (18))){
var inst_22033 = (state_22079[(17)]);
var inst_22034 = (state_22079[(15)]);
var inst_22039 = (state_22079[(16)]);
var inst_22056 = cljs.core.empty_QMARK_.call(null,inst_22034);
var inst_22057 = inst_22033.call(null,inst_22039);
var inst_22058 = cljs.core.not.call(null,inst_22057);
var inst_22059 = (inst_22056) && (inst_22058);
var state_22079__$1 = state_22079;
var statearr_22117_22155 = state_22079__$1;
(statearr_22117_22155[(2)] = inst_22059);

(statearr_22117_22155[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22080 === (8))){
var inst_22023 = (state_22079[(7)]);
var state_22079__$1 = state_22079;
var statearr_22118_22156 = state_22079__$1;
(statearr_22118_22156[(2)] = inst_22023);

(statearr_22118_22156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17366__auto__,c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17367__auto__ = null;
var cljs$core$async$mix_$_state_machine__17367__auto____0 = (function (){
var statearr_22122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22122[(0)] = cljs$core$async$mix_$_state_machine__17367__auto__);

(statearr_22122[(1)] = (1));

return statearr_22122;
});
var cljs$core$async$mix_$_state_machine__17367__auto____1 = (function (state_22079){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22123){if((e22123 instanceof Object)){
var ex__17370__auto__ = e22123;
var statearr_22124_22157 = state_22079;
(statearr_22124_22157[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22158 = state_22079;
state_22079 = G__22158;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17367__auto__ = function(state_22079){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17367__auto____1.call(this,state_22079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17367__auto____0;
cljs$core$async$mix_$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17367__auto____1;
return cljs$core$async$mix_$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17389__auto__ = (function (){var statearr_22125 = f__17388__auto__.call(null);
(statearr_22125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22126);

return statearr_22125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj22160 = {};
return obj22160;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__10400__auto__ = p;
if(and__10400__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__10400__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__11048__auto__ = (((p == null))?null:p);
return (function (){var or__10412__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__10400__auto__ = p;
if(and__10400__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__11048__auto__ = (((p == null))?null:p);
return (function (){var or__10412__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__22162 = arguments.length;
switch (G__22162) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__10400__auto__ = p;
if(and__10400__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__11048__auto__ = (((p == null))?null:p);
return (function (){var or__10412__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__10400__auto__ = p;
if(and__10400__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__11048__auto__ = (((p == null))?null:p);
return (function (){var or__10412__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__22166 = arguments.length;
switch (G__22166) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10412__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10412__auto__,mults){
return (function (p1__22164_SHARP_){
if(cljs.core.truth_(p1__22164_SHARP_.call(null,topic))){
return p1__22164_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22164_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10412__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22167 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta22168){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta22168 = meta22168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22167.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22167.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22169){
var self__ = this;
var _22169__$1 = this;
return self__.meta22168;
});})(mults,ensure_mult))
;

cljs.core.async.t22167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22169,meta22168__$1){
var self__ = this;
var _22169__$1 = this;
return (new cljs.core.async.t22167(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta22168__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22167.cljs$lang$type = true;

cljs.core.async.t22167.cljs$lang$ctorStr = "cljs.core.async/t22167";

cljs.core.async.t22167.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22167");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22167 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t22167(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22168){
return (new cljs.core.async.t22167(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22168));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22167(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17387__auto___22290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22290,mults,ensure_mult,p){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22290,mults,ensure_mult,p){
return (function (state_22241){
var state_val_22242 = (state_22241[(1)]);
if((state_val_22242 === (7))){
var inst_22237 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22243_22291 = state_22241__$1;
(statearr_22243_22291[(2)] = inst_22237);

(statearr_22243_22291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (20))){
var state_22241__$1 = state_22241;
var statearr_22244_22292 = state_22241__$1;
(statearr_22244_22292[(2)] = null);

(statearr_22244_22292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (1))){
var state_22241__$1 = state_22241;
var statearr_22245_22293 = state_22241__$1;
(statearr_22245_22293[(2)] = null);

(statearr_22245_22293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (24))){
var inst_22220 = (state_22241[(7)]);
var inst_22229 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22220);
var state_22241__$1 = state_22241;
var statearr_22246_22294 = state_22241__$1;
(statearr_22246_22294[(2)] = inst_22229);

(statearr_22246_22294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (4))){
var inst_22172 = (state_22241[(8)]);
var inst_22172__$1 = (state_22241[(2)]);
var inst_22173 = (inst_22172__$1 == null);
var state_22241__$1 = (function (){var statearr_22247 = state_22241;
(statearr_22247[(8)] = inst_22172__$1);

return statearr_22247;
})();
if(cljs.core.truth_(inst_22173)){
var statearr_22248_22295 = state_22241__$1;
(statearr_22248_22295[(1)] = (5));

} else {
var statearr_22249_22296 = state_22241__$1;
(statearr_22249_22296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (15))){
var inst_22214 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22250_22297 = state_22241__$1;
(statearr_22250_22297[(2)] = inst_22214);

(statearr_22250_22297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (21))){
var inst_22234 = (state_22241[(2)]);
var state_22241__$1 = (function (){var statearr_22251 = state_22241;
(statearr_22251[(9)] = inst_22234);

return statearr_22251;
})();
var statearr_22252_22298 = state_22241__$1;
(statearr_22252_22298[(2)] = null);

(statearr_22252_22298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (13))){
var inst_22196 = (state_22241[(10)]);
var inst_22198 = cljs.core.chunked_seq_QMARK_.call(null,inst_22196);
var state_22241__$1 = state_22241;
if(inst_22198){
var statearr_22253_22299 = state_22241__$1;
(statearr_22253_22299[(1)] = (16));

} else {
var statearr_22254_22300 = state_22241__$1;
(statearr_22254_22300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (22))){
var inst_22226 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
if(cljs.core.truth_(inst_22226)){
var statearr_22255_22301 = state_22241__$1;
(statearr_22255_22301[(1)] = (23));

} else {
var statearr_22256_22302 = state_22241__$1;
(statearr_22256_22302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (6))){
var inst_22172 = (state_22241[(8)]);
var inst_22222 = (state_22241[(11)]);
var inst_22220 = (state_22241[(7)]);
var inst_22220__$1 = topic_fn.call(null,inst_22172);
var inst_22221 = cljs.core.deref.call(null,mults);
var inst_22222__$1 = cljs.core.get.call(null,inst_22221,inst_22220__$1);
var state_22241__$1 = (function (){var statearr_22257 = state_22241;
(statearr_22257[(11)] = inst_22222__$1);

(statearr_22257[(7)] = inst_22220__$1);

return statearr_22257;
})();
if(cljs.core.truth_(inst_22222__$1)){
var statearr_22258_22303 = state_22241__$1;
(statearr_22258_22303[(1)] = (19));

} else {
var statearr_22259_22304 = state_22241__$1;
(statearr_22259_22304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (25))){
var inst_22231 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22260_22305 = state_22241__$1;
(statearr_22260_22305[(2)] = inst_22231);

(statearr_22260_22305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (17))){
var inst_22196 = (state_22241[(10)]);
var inst_22205 = cljs.core.first.call(null,inst_22196);
var inst_22206 = cljs.core.async.muxch_STAR_.call(null,inst_22205);
var inst_22207 = cljs.core.async.close_BANG_.call(null,inst_22206);
var inst_22208 = cljs.core.next.call(null,inst_22196);
var inst_22182 = inst_22208;
var inst_22183 = null;
var inst_22184 = (0);
var inst_22185 = (0);
var state_22241__$1 = (function (){var statearr_22261 = state_22241;
(statearr_22261[(12)] = inst_22207);

(statearr_22261[(13)] = inst_22185);

(statearr_22261[(14)] = inst_22184);

(statearr_22261[(15)] = inst_22183);

(statearr_22261[(16)] = inst_22182);

return statearr_22261;
})();
var statearr_22262_22306 = state_22241__$1;
(statearr_22262_22306[(2)] = null);

(statearr_22262_22306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (3))){
var inst_22239 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22241__$1,inst_22239);
} else {
if((state_val_22242 === (12))){
var inst_22216 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22263_22307 = state_22241__$1;
(statearr_22263_22307[(2)] = inst_22216);

(statearr_22263_22307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (2))){
var state_22241__$1 = state_22241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22241__$1,(4),ch);
} else {
if((state_val_22242 === (23))){
var state_22241__$1 = state_22241;
var statearr_22264_22308 = state_22241__$1;
(statearr_22264_22308[(2)] = null);

(statearr_22264_22308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (19))){
var inst_22172 = (state_22241[(8)]);
var inst_22222 = (state_22241[(11)]);
var inst_22224 = cljs.core.async.muxch_STAR_.call(null,inst_22222);
var state_22241__$1 = state_22241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22241__$1,(22),inst_22224,inst_22172);
} else {
if((state_val_22242 === (11))){
var inst_22196 = (state_22241[(10)]);
var inst_22182 = (state_22241[(16)]);
var inst_22196__$1 = cljs.core.seq.call(null,inst_22182);
var state_22241__$1 = (function (){var statearr_22265 = state_22241;
(statearr_22265[(10)] = inst_22196__$1);

return statearr_22265;
})();
if(inst_22196__$1){
var statearr_22266_22309 = state_22241__$1;
(statearr_22266_22309[(1)] = (13));

} else {
var statearr_22267_22310 = state_22241__$1;
(statearr_22267_22310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (9))){
var inst_22218 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22268_22311 = state_22241__$1;
(statearr_22268_22311[(2)] = inst_22218);

(statearr_22268_22311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (5))){
var inst_22179 = cljs.core.deref.call(null,mults);
var inst_22180 = cljs.core.vals.call(null,inst_22179);
var inst_22181 = cljs.core.seq.call(null,inst_22180);
var inst_22182 = inst_22181;
var inst_22183 = null;
var inst_22184 = (0);
var inst_22185 = (0);
var state_22241__$1 = (function (){var statearr_22269 = state_22241;
(statearr_22269[(13)] = inst_22185);

(statearr_22269[(14)] = inst_22184);

(statearr_22269[(15)] = inst_22183);

(statearr_22269[(16)] = inst_22182);

return statearr_22269;
})();
var statearr_22270_22312 = state_22241__$1;
(statearr_22270_22312[(2)] = null);

(statearr_22270_22312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (14))){
var state_22241__$1 = state_22241;
var statearr_22274_22313 = state_22241__$1;
(statearr_22274_22313[(2)] = null);

(statearr_22274_22313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (16))){
var inst_22196 = (state_22241[(10)]);
var inst_22200 = cljs.core.chunk_first.call(null,inst_22196);
var inst_22201 = cljs.core.chunk_rest.call(null,inst_22196);
var inst_22202 = cljs.core.count.call(null,inst_22200);
var inst_22182 = inst_22201;
var inst_22183 = inst_22200;
var inst_22184 = inst_22202;
var inst_22185 = (0);
var state_22241__$1 = (function (){var statearr_22275 = state_22241;
(statearr_22275[(13)] = inst_22185);

(statearr_22275[(14)] = inst_22184);

(statearr_22275[(15)] = inst_22183);

(statearr_22275[(16)] = inst_22182);

return statearr_22275;
})();
var statearr_22276_22314 = state_22241__$1;
(statearr_22276_22314[(2)] = null);

(statearr_22276_22314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (10))){
var inst_22185 = (state_22241[(13)]);
var inst_22184 = (state_22241[(14)]);
var inst_22183 = (state_22241[(15)]);
var inst_22182 = (state_22241[(16)]);
var inst_22190 = cljs.core._nth.call(null,inst_22183,inst_22185);
var inst_22191 = cljs.core.async.muxch_STAR_.call(null,inst_22190);
var inst_22192 = cljs.core.async.close_BANG_.call(null,inst_22191);
var inst_22193 = (inst_22185 + (1));
var tmp22271 = inst_22184;
var tmp22272 = inst_22183;
var tmp22273 = inst_22182;
var inst_22182__$1 = tmp22273;
var inst_22183__$1 = tmp22272;
var inst_22184__$1 = tmp22271;
var inst_22185__$1 = inst_22193;
var state_22241__$1 = (function (){var statearr_22277 = state_22241;
(statearr_22277[(13)] = inst_22185__$1);

(statearr_22277[(17)] = inst_22192);

(statearr_22277[(14)] = inst_22184__$1);

(statearr_22277[(15)] = inst_22183__$1);

(statearr_22277[(16)] = inst_22182__$1);

return statearr_22277;
})();
var statearr_22278_22315 = state_22241__$1;
(statearr_22278_22315[(2)] = null);

(statearr_22278_22315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (18))){
var inst_22211 = (state_22241[(2)]);
var state_22241__$1 = state_22241;
var statearr_22279_22316 = state_22241__$1;
(statearr_22279_22316[(2)] = inst_22211);

(statearr_22279_22316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22242 === (8))){
var inst_22185 = (state_22241[(13)]);
var inst_22184 = (state_22241[(14)]);
var inst_22187 = (inst_22185 < inst_22184);
var inst_22188 = inst_22187;
var state_22241__$1 = state_22241;
if(cljs.core.truth_(inst_22188)){
var statearr_22280_22317 = state_22241__$1;
(statearr_22280_22317[(1)] = (10));

} else {
var statearr_22281_22318 = state_22241__$1;
(statearr_22281_22318[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto___22290,mults,ensure_mult,p))
;
return ((function (switch__17366__auto__,c__17387__auto___22290,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22285[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22285[(1)] = (1));

return statearr_22285;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22241){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22286){if((e22286 instanceof Object)){
var ex__17370__auto__ = e22286;
var statearr_22287_22319 = state_22241;
(statearr_22287_22319[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22320 = state_22241;
state_22241 = G__22320;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22290,mults,ensure_mult,p))
})();
var state__17389__auto__ = (function (){var statearr_22288 = f__17388__auto__.call(null);
(statearr_22288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22290);

return statearr_22288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22290,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__22322 = arguments.length;
switch (G__22322) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__22325 = arguments.length;
switch (G__22325) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__22328 = arguments.length;
switch (G__22328) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__17387__auto___22398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22367){
var state_val_22368 = (state_22367[(1)]);
if((state_val_22368 === (7))){
var state_22367__$1 = state_22367;
var statearr_22369_22399 = state_22367__$1;
(statearr_22369_22399[(2)] = null);

(statearr_22369_22399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (1))){
var state_22367__$1 = state_22367;
var statearr_22370_22400 = state_22367__$1;
(statearr_22370_22400[(2)] = null);

(statearr_22370_22400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (4))){
var inst_22331 = (state_22367[(7)]);
var inst_22333 = (inst_22331 < cnt);
var state_22367__$1 = state_22367;
if(cljs.core.truth_(inst_22333)){
var statearr_22371_22401 = state_22367__$1;
(statearr_22371_22401[(1)] = (6));

} else {
var statearr_22372_22402 = state_22367__$1;
(statearr_22372_22402[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (15))){
var inst_22363 = (state_22367[(2)]);
var state_22367__$1 = state_22367;
var statearr_22373_22403 = state_22367__$1;
(statearr_22373_22403[(2)] = inst_22363);

(statearr_22373_22403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (13))){
var inst_22356 = cljs.core.async.close_BANG_.call(null,out);
var state_22367__$1 = state_22367;
var statearr_22374_22404 = state_22367__$1;
(statearr_22374_22404[(2)] = inst_22356);

(statearr_22374_22404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (6))){
var state_22367__$1 = state_22367;
var statearr_22375_22405 = state_22367__$1;
(statearr_22375_22405[(2)] = null);

(statearr_22375_22405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (3))){
var inst_22365 = (state_22367[(2)]);
var state_22367__$1 = state_22367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22367__$1,inst_22365);
} else {
if((state_val_22368 === (12))){
var inst_22353 = (state_22367[(8)]);
var inst_22353__$1 = (state_22367[(2)]);
var inst_22354 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22353__$1);
var state_22367__$1 = (function (){var statearr_22376 = state_22367;
(statearr_22376[(8)] = inst_22353__$1);

return statearr_22376;
})();
if(cljs.core.truth_(inst_22354)){
var statearr_22377_22406 = state_22367__$1;
(statearr_22377_22406[(1)] = (13));

} else {
var statearr_22378_22407 = state_22367__$1;
(statearr_22378_22407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (2))){
var inst_22330 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22331 = (0);
var state_22367__$1 = (function (){var statearr_22379 = state_22367;
(statearr_22379[(9)] = inst_22330);

(statearr_22379[(7)] = inst_22331);

return statearr_22379;
})();
var statearr_22380_22408 = state_22367__$1;
(statearr_22380_22408[(2)] = null);

(statearr_22380_22408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (11))){
var inst_22331 = (state_22367[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22367,(10),Object,null,(9));
var inst_22340 = chs__$1.call(null,inst_22331);
var inst_22341 = done.call(null,inst_22331);
var inst_22342 = cljs.core.async.take_BANG_.call(null,inst_22340,inst_22341);
var state_22367__$1 = state_22367;
var statearr_22381_22409 = state_22367__$1;
(statearr_22381_22409[(2)] = inst_22342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (9))){
var inst_22331 = (state_22367[(7)]);
var inst_22344 = (state_22367[(2)]);
var inst_22345 = (inst_22331 + (1));
var inst_22331__$1 = inst_22345;
var state_22367__$1 = (function (){var statearr_22382 = state_22367;
(statearr_22382[(10)] = inst_22344);

(statearr_22382[(7)] = inst_22331__$1);

return statearr_22382;
})();
var statearr_22383_22410 = state_22367__$1;
(statearr_22383_22410[(2)] = null);

(statearr_22383_22410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (5))){
var inst_22351 = (state_22367[(2)]);
var state_22367__$1 = (function (){var statearr_22384 = state_22367;
(statearr_22384[(11)] = inst_22351);

return statearr_22384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22367__$1,(12),dchan);
} else {
if((state_val_22368 === (14))){
var inst_22353 = (state_22367[(8)]);
var inst_22358 = cljs.core.apply.call(null,f,inst_22353);
var state_22367__$1 = state_22367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22367__$1,(16),out,inst_22358);
} else {
if((state_val_22368 === (16))){
var inst_22360 = (state_22367[(2)]);
var state_22367__$1 = (function (){var statearr_22385 = state_22367;
(statearr_22385[(12)] = inst_22360);

return statearr_22385;
})();
var statearr_22386_22411 = state_22367__$1;
(statearr_22386_22411[(2)] = null);

(statearr_22386_22411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (10))){
var inst_22335 = (state_22367[(2)]);
var inst_22336 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22367__$1 = (function (){var statearr_22387 = state_22367;
(statearr_22387[(13)] = inst_22335);

return statearr_22387;
})();
var statearr_22388_22412 = state_22367__$1;
(statearr_22388_22412[(2)] = inst_22336);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (8))){
var inst_22349 = (state_22367[(2)]);
var state_22367__$1 = state_22367;
var statearr_22389_22413 = state_22367__$1;
(statearr_22389_22413[(2)] = inst_22349);

(statearr_22389_22413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17366__auto__,c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22393[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22393[(1)] = (1));

return statearr_22393;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22367){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22394){if((e22394 instanceof Object)){
var ex__17370__auto__ = e22394;
var statearr_22395_22414 = state_22367;
(statearr_22395_22414[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22415 = state_22367;
state_22367 = G__22415;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17389__auto__ = (function (){var statearr_22396 = f__17388__auto__.call(null);
(statearr_22396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22398);

return statearr_22396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22398,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__22418 = arguments.length;
switch (G__22418) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___22473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22473,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22473,out){
return (function (state_22448){
var state_val_22449 = (state_22448[(1)]);
if((state_val_22449 === (7))){
var inst_22428 = (state_22448[(7)]);
var inst_22427 = (state_22448[(8)]);
var inst_22427__$1 = (state_22448[(2)]);
var inst_22428__$1 = cljs.core.nth.call(null,inst_22427__$1,(0),null);
var inst_22429 = cljs.core.nth.call(null,inst_22427__$1,(1),null);
var inst_22430 = (inst_22428__$1 == null);
var state_22448__$1 = (function (){var statearr_22450 = state_22448;
(statearr_22450[(9)] = inst_22429);

(statearr_22450[(7)] = inst_22428__$1);

(statearr_22450[(8)] = inst_22427__$1);

return statearr_22450;
})();
if(cljs.core.truth_(inst_22430)){
var statearr_22451_22474 = state_22448__$1;
(statearr_22451_22474[(1)] = (8));

} else {
var statearr_22452_22475 = state_22448__$1;
(statearr_22452_22475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (1))){
var inst_22419 = cljs.core.vec.call(null,chs);
var inst_22420 = inst_22419;
var state_22448__$1 = (function (){var statearr_22453 = state_22448;
(statearr_22453[(10)] = inst_22420);

return statearr_22453;
})();
var statearr_22454_22476 = state_22448__$1;
(statearr_22454_22476[(2)] = null);

(statearr_22454_22476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (4))){
var inst_22420 = (state_22448[(10)]);
var state_22448__$1 = state_22448;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22448__$1,(7),inst_22420);
} else {
if((state_val_22449 === (6))){
var inst_22444 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22455_22477 = state_22448__$1;
(statearr_22455_22477[(2)] = inst_22444);

(statearr_22455_22477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (3))){
var inst_22446 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22448__$1,inst_22446);
} else {
if((state_val_22449 === (2))){
var inst_22420 = (state_22448[(10)]);
var inst_22422 = cljs.core.count.call(null,inst_22420);
var inst_22423 = (inst_22422 > (0));
var state_22448__$1 = state_22448;
if(cljs.core.truth_(inst_22423)){
var statearr_22457_22478 = state_22448__$1;
(statearr_22457_22478[(1)] = (4));

} else {
var statearr_22458_22479 = state_22448__$1;
(statearr_22458_22479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (11))){
var inst_22420 = (state_22448[(10)]);
var inst_22437 = (state_22448[(2)]);
var tmp22456 = inst_22420;
var inst_22420__$1 = tmp22456;
var state_22448__$1 = (function (){var statearr_22459 = state_22448;
(statearr_22459[(11)] = inst_22437);

(statearr_22459[(10)] = inst_22420__$1);

return statearr_22459;
})();
var statearr_22460_22480 = state_22448__$1;
(statearr_22460_22480[(2)] = null);

(statearr_22460_22480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (9))){
var inst_22428 = (state_22448[(7)]);
var state_22448__$1 = state_22448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22448__$1,(11),out,inst_22428);
} else {
if((state_val_22449 === (5))){
var inst_22442 = cljs.core.async.close_BANG_.call(null,out);
var state_22448__$1 = state_22448;
var statearr_22461_22481 = state_22448__$1;
(statearr_22461_22481[(2)] = inst_22442);

(statearr_22461_22481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (10))){
var inst_22440 = (state_22448[(2)]);
var state_22448__$1 = state_22448;
var statearr_22462_22482 = state_22448__$1;
(statearr_22462_22482[(2)] = inst_22440);

(statearr_22462_22482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22449 === (8))){
var inst_22429 = (state_22448[(9)]);
var inst_22420 = (state_22448[(10)]);
var inst_22428 = (state_22448[(7)]);
var inst_22427 = (state_22448[(8)]);
var inst_22432 = (function (){var c = inst_22429;
var v = inst_22428;
var vec__22425 = inst_22427;
var cs = inst_22420;
return ((function (c,v,vec__22425,cs,inst_22429,inst_22420,inst_22428,inst_22427,state_val_22449,c__17387__auto___22473,out){
return (function (p1__22416_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22416_SHARP_);
});
;})(c,v,vec__22425,cs,inst_22429,inst_22420,inst_22428,inst_22427,state_val_22449,c__17387__auto___22473,out))
})();
var inst_22433 = cljs.core.filterv.call(null,inst_22432,inst_22420);
var inst_22420__$1 = inst_22433;
var state_22448__$1 = (function (){var statearr_22463 = state_22448;
(statearr_22463[(10)] = inst_22420__$1);

return statearr_22463;
})();
var statearr_22464_22483 = state_22448__$1;
(statearr_22464_22483[(2)] = null);

(statearr_22464_22483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto___22473,out))
;
return ((function (switch__17366__auto__,c__17387__auto___22473,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22468[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22468[(1)] = (1));

return statearr_22468;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22448){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22469){if((e22469 instanceof Object)){
var ex__17370__auto__ = e22469;
var statearr_22470_22484 = state_22448;
(statearr_22470_22484[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22485 = state_22448;
state_22448 = G__22485;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22473,out))
})();
var state__17389__auto__ = (function (){var statearr_22471 = f__17388__auto__.call(null);
(statearr_22471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22473);

return statearr_22471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22473,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__22487 = arguments.length;
switch (G__22487) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___22535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22535,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22535,out){
return (function (state_22511){
var state_val_22512 = (state_22511[(1)]);
if((state_val_22512 === (7))){
var inst_22493 = (state_22511[(7)]);
var inst_22493__$1 = (state_22511[(2)]);
var inst_22494 = (inst_22493__$1 == null);
var inst_22495 = cljs.core.not.call(null,inst_22494);
var state_22511__$1 = (function (){var statearr_22513 = state_22511;
(statearr_22513[(7)] = inst_22493__$1);

return statearr_22513;
})();
if(inst_22495){
var statearr_22514_22536 = state_22511__$1;
(statearr_22514_22536[(1)] = (8));

} else {
var statearr_22515_22537 = state_22511__$1;
(statearr_22515_22537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (1))){
var inst_22488 = (0);
var state_22511__$1 = (function (){var statearr_22516 = state_22511;
(statearr_22516[(8)] = inst_22488);

return statearr_22516;
})();
var statearr_22517_22538 = state_22511__$1;
(statearr_22517_22538[(2)] = null);

(statearr_22517_22538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (4))){
var state_22511__$1 = state_22511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22511__$1,(7),ch);
} else {
if((state_val_22512 === (6))){
var inst_22506 = (state_22511[(2)]);
var state_22511__$1 = state_22511;
var statearr_22518_22539 = state_22511__$1;
(statearr_22518_22539[(2)] = inst_22506);

(statearr_22518_22539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (3))){
var inst_22508 = (state_22511[(2)]);
var inst_22509 = cljs.core.async.close_BANG_.call(null,out);
var state_22511__$1 = (function (){var statearr_22519 = state_22511;
(statearr_22519[(9)] = inst_22508);

return statearr_22519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22511__$1,inst_22509);
} else {
if((state_val_22512 === (2))){
var inst_22488 = (state_22511[(8)]);
var inst_22490 = (inst_22488 < n);
var state_22511__$1 = state_22511;
if(cljs.core.truth_(inst_22490)){
var statearr_22520_22540 = state_22511__$1;
(statearr_22520_22540[(1)] = (4));

} else {
var statearr_22521_22541 = state_22511__$1;
(statearr_22521_22541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (11))){
var inst_22488 = (state_22511[(8)]);
var inst_22498 = (state_22511[(2)]);
var inst_22499 = (inst_22488 + (1));
var inst_22488__$1 = inst_22499;
var state_22511__$1 = (function (){var statearr_22522 = state_22511;
(statearr_22522[(8)] = inst_22488__$1);

(statearr_22522[(10)] = inst_22498);

return statearr_22522;
})();
var statearr_22523_22542 = state_22511__$1;
(statearr_22523_22542[(2)] = null);

(statearr_22523_22542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (9))){
var state_22511__$1 = state_22511;
var statearr_22524_22543 = state_22511__$1;
(statearr_22524_22543[(2)] = null);

(statearr_22524_22543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (5))){
var state_22511__$1 = state_22511;
var statearr_22525_22544 = state_22511__$1;
(statearr_22525_22544[(2)] = null);

(statearr_22525_22544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (10))){
var inst_22503 = (state_22511[(2)]);
var state_22511__$1 = state_22511;
var statearr_22526_22545 = state_22511__$1;
(statearr_22526_22545[(2)] = inst_22503);

(statearr_22526_22545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22512 === (8))){
var inst_22493 = (state_22511[(7)]);
var state_22511__$1 = state_22511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22511__$1,(11),out,inst_22493);
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
});})(c__17387__auto___22535,out))
;
return ((function (switch__17366__auto__,c__17387__auto___22535,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22530[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22530[(1)] = (1));

return statearr_22530;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22511){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22531){if((e22531 instanceof Object)){
var ex__17370__auto__ = e22531;
var statearr_22532_22546 = state_22511;
(statearr_22532_22546[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22547 = state_22511;
state_22511 = G__22547;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22535,out))
})();
var state__17389__auto__ = (function (){var statearr_22533 = f__17388__auto__.call(null);
(statearr_22533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22535);

return statearr_22533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22535,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t22555 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22555 = (function (ch,f,map_LT_,meta22556){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22556 = meta22556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22558 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22558 = (function (fn1,_,meta22556,map_LT_,f,ch,meta22559){
this.fn1 = fn1;
this._ = _;
this.meta22556 = meta22556;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22559 = meta22559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22558.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22548_SHARP_){
return f1.call(null,(((p1__22548_SHARP_ == null))?null:self__.f.call(null,p1__22548_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22560){
var self__ = this;
var _22560__$1 = this;
return self__.meta22559;
});})(___$1))
;

cljs.core.async.t22558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22560,meta22559__$1){
var self__ = this;
var _22560__$1 = this;
return (new cljs.core.async.t22558(self__.fn1,self__._,self__.meta22556,self__.map_LT_,self__.f,self__.ch,meta22559__$1));
});})(___$1))
;

cljs.core.async.t22558.cljs$lang$type = true;

cljs.core.async.t22558.cljs$lang$ctorStr = "cljs.core.async/t22558";

cljs.core.async.t22558.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22558");
});})(___$1))
;

cljs.core.async.__GT_t22558 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t22558(fn1__$1,___$2,meta22556__$1,map_LT___$1,f__$1,ch__$1,meta22559){
return (new cljs.core.async.t22558(fn1__$1,___$2,meta22556__$1,map_LT___$1,f__$1,ch__$1,meta22559));
});})(___$1))
;

}

return (new cljs.core.async.t22558(fn1,___$1,self__.meta22556,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10400__auto__ = ret;
if(cljs.core.truth_(and__10400__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__10400__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22555.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22557){
var self__ = this;
var _22557__$1 = this;
return self__.meta22556;
});

cljs.core.async.t22555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22557,meta22556__$1){
var self__ = this;
var _22557__$1 = this;
return (new cljs.core.async.t22555(self__.ch,self__.f,self__.map_LT_,meta22556__$1));
});

cljs.core.async.t22555.cljs$lang$type = true;

cljs.core.async.t22555.cljs$lang$ctorStr = "cljs.core.async/t22555";

cljs.core.async.t22555.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22555");
});

cljs.core.async.__GT_t22555 = (function cljs$core$async$map_LT__$___GT_t22555(ch__$1,f__$1,map_LT___$1,meta22556){
return (new cljs.core.async.t22555(ch__$1,f__$1,map_LT___$1,meta22556));
});

}

return (new cljs.core.async.t22555(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t22564 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22564 = (function (ch,f,map_GT_,meta22565){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22565 = meta22565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22566){
var self__ = this;
var _22566__$1 = this;
return self__.meta22565;
});

cljs.core.async.t22564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22566,meta22565__$1){
var self__ = this;
var _22566__$1 = this;
return (new cljs.core.async.t22564(self__.ch,self__.f,self__.map_GT_,meta22565__$1));
});

cljs.core.async.t22564.cljs$lang$type = true;

cljs.core.async.t22564.cljs$lang$ctorStr = "cljs.core.async/t22564";

cljs.core.async.t22564.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22564");
});

cljs.core.async.__GT_t22564 = (function cljs$core$async$map_GT__$___GT_t22564(ch__$1,f__$1,map_GT___$1,meta22565){
return (new cljs.core.async.t22564(ch__$1,f__$1,map_GT___$1,meta22565));
});

}

return (new cljs.core.async.t22564(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t22570 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22570 = (function (ch,p,filter_GT_,meta22571){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){
var self__ = this;
var _22572__$1 = this;
return self__.meta22571;
});

cljs.core.async.t22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){
var self__ = this;
var _22572__$1 = this;
return (new cljs.core.async.t22570(self__.ch,self__.p,self__.filter_GT_,meta22571__$1));
});

cljs.core.async.t22570.cljs$lang$type = true;

cljs.core.async.t22570.cljs$lang$ctorStr = "cljs.core.async/t22570";

cljs.core.async.t22570.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cljs.core.async/t22570");
});

cljs.core.async.__GT_t22570 = (function cljs$core$async$filter_GT__$___GT_t22570(ch__$1,p__$1,filter_GT___$1,meta22571){
return (new cljs.core.async.t22570(ch__$1,p__$1,filter_GT___$1,meta22571));
});

}

return (new cljs.core.async.t22570(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__22574 = arguments.length;
switch (G__22574) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___22617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22617,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22617,out){
return (function (state_22595){
var state_val_22596 = (state_22595[(1)]);
if((state_val_22596 === (7))){
var inst_22591 = (state_22595[(2)]);
var state_22595__$1 = state_22595;
var statearr_22597_22618 = state_22595__$1;
(statearr_22597_22618[(2)] = inst_22591);

(statearr_22597_22618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (1))){
var state_22595__$1 = state_22595;
var statearr_22598_22619 = state_22595__$1;
(statearr_22598_22619[(2)] = null);

(statearr_22598_22619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (4))){
var inst_22577 = (state_22595[(7)]);
var inst_22577__$1 = (state_22595[(2)]);
var inst_22578 = (inst_22577__$1 == null);
var state_22595__$1 = (function (){var statearr_22599 = state_22595;
(statearr_22599[(7)] = inst_22577__$1);

return statearr_22599;
})();
if(cljs.core.truth_(inst_22578)){
var statearr_22600_22620 = state_22595__$1;
(statearr_22600_22620[(1)] = (5));

} else {
var statearr_22601_22621 = state_22595__$1;
(statearr_22601_22621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (6))){
var inst_22577 = (state_22595[(7)]);
var inst_22582 = p.call(null,inst_22577);
var state_22595__$1 = state_22595;
if(cljs.core.truth_(inst_22582)){
var statearr_22602_22622 = state_22595__$1;
(statearr_22602_22622[(1)] = (8));

} else {
var statearr_22603_22623 = state_22595__$1;
(statearr_22603_22623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (3))){
var inst_22593 = (state_22595[(2)]);
var state_22595__$1 = state_22595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22595__$1,inst_22593);
} else {
if((state_val_22596 === (2))){
var state_22595__$1 = state_22595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22595__$1,(4),ch);
} else {
if((state_val_22596 === (11))){
var inst_22585 = (state_22595[(2)]);
var state_22595__$1 = state_22595;
var statearr_22604_22624 = state_22595__$1;
(statearr_22604_22624[(2)] = inst_22585);

(statearr_22604_22624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (9))){
var state_22595__$1 = state_22595;
var statearr_22605_22625 = state_22595__$1;
(statearr_22605_22625[(2)] = null);

(statearr_22605_22625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (5))){
var inst_22580 = cljs.core.async.close_BANG_.call(null,out);
var state_22595__$1 = state_22595;
var statearr_22606_22626 = state_22595__$1;
(statearr_22606_22626[(2)] = inst_22580);

(statearr_22606_22626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (10))){
var inst_22588 = (state_22595[(2)]);
var state_22595__$1 = (function (){var statearr_22607 = state_22595;
(statearr_22607[(8)] = inst_22588);

return statearr_22607;
})();
var statearr_22608_22627 = state_22595__$1;
(statearr_22608_22627[(2)] = null);

(statearr_22608_22627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (8))){
var inst_22577 = (state_22595[(7)]);
var state_22595__$1 = state_22595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22595__$1,(11),out,inst_22577);
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
});})(c__17387__auto___22617,out))
;
return ((function (switch__17366__auto__,c__17387__auto___22617,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22612 = [null,null,null,null,null,null,null,null,null];
(statearr_22612[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22612[(1)] = (1));

return statearr_22612;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22595){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22613){if((e22613 instanceof Object)){
var ex__17370__auto__ = e22613;
var statearr_22614_22628 = state_22595;
(statearr_22614_22628[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22629 = state_22595;
state_22595 = G__22629;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22617,out))
})();
var state__17389__auto__ = (function (){var statearr_22615 = f__17388__auto__.call(null);
(statearr_22615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22617);

return statearr_22615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22617,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__22631 = arguments.length;
switch (G__22631) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto__){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto__){
return (function (state_22798){
var state_val_22799 = (state_22798[(1)]);
if((state_val_22799 === (7))){
var inst_22794 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22800_22841 = state_22798__$1;
(statearr_22800_22841[(2)] = inst_22794);

(statearr_22800_22841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (20))){
var inst_22764 = (state_22798[(7)]);
var inst_22775 = (state_22798[(2)]);
var inst_22776 = cljs.core.next.call(null,inst_22764);
var inst_22750 = inst_22776;
var inst_22751 = null;
var inst_22752 = (0);
var inst_22753 = (0);
var state_22798__$1 = (function (){var statearr_22801 = state_22798;
(statearr_22801[(8)] = inst_22752);

(statearr_22801[(9)] = inst_22753);

(statearr_22801[(10)] = inst_22750);

(statearr_22801[(11)] = inst_22775);

(statearr_22801[(12)] = inst_22751);

return statearr_22801;
})();
var statearr_22802_22842 = state_22798__$1;
(statearr_22802_22842[(2)] = null);

(statearr_22802_22842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (1))){
var state_22798__$1 = state_22798;
var statearr_22803_22843 = state_22798__$1;
(statearr_22803_22843[(2)] = null);

(statearr_22803_22843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (4))){
var inst_22739 = (state_22798[(13)]);
var inst_22739__$1 = (state_22798[(2)]);
var inst_22740 = (inst_22739__$1 == null);
var state_22798__$1 = (function (){var statearr_22804 = state_22798;
(statearr_22804[(13)] = inst_22739__$1);

return statearr_22804;
})();
if(cljs.core.truth_(inst_22740)){
var statearr_22805_22844 = state_22798__$1;
(statearr_22805_22844[(1)] = (5));

} else {
var statearr_22806_22845 = state_22798__$1;
(statearr_22806_22845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (15))){
var state_22798__$1 = state_22798;
var statearr_22810_22846 = state_22798__$1;
(statearr_22810_22846[(2)] = null);

(statearr_22810_22846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (21))){
var state_22798__$1 = state_22798;
var statearr_22811_22847 = state_22798__$1;
(statearr_22811_22847[(2)] = null);

(statearr_22811_22847[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (13))){
var inst_22752 = (state_22798[(8)]);
var inst_22753 = (state_22798[(9)]);
var inst_22750 = (state_22798[(10)]);
var inst_22751 = (state_22798[(12)]);
var inst_22760 = (state_22798[(2)]);
var inst_22761 = (inst_22753 + (1));
var tmp22807 = inst_22752;
var tmp22808 = inst_22750;
var tmp22809 = inst_22751;
var inst_22750__$1 = tmp22808;
var inst_22751__$1 = tmp22809;
var inst_22752__$1 = tmp22807;
var inst_22753__$1 = inst_22761;
var state_22798__$1 = (function (){var statearr_22812 = state_22798;
(statearr_22812[(14)] = inst_22760);

(statearr_22812[(8)] = inst_22752__$1);

(statearr_22812[(9)] = inst_22753__$1);

(statearr_22812[(10)] = inst_22750__$1);

(statearr_22812[(12)] = inst_22751__$1);

return statearr_22812;
})();
var statearr_22813_22848 = state_22798__$1;
(statearr_22813_22848[(2)] = null);

(statearr_22813_22848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (22))){
var state_22798__$1 = state_22798;
var statearr_22814_22849 = state_22798__$1;
(statearr_22814_22849[(2)] = null);

(statearr_22814_22849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (6))){
var inst_22739 = (state_22798[(13)]);
var inst_22748 = f.call(null,inst_22739);
var inst_22749 = cljs.core.seq.call(null,inst_22748);
var inst_22750 = inst_22749;
var inst_22751 = null;
var inst_22752 = (0);
var inst_22753 = (0);
var state_22798__$1 = (function (){var statearr_22815 = state_22798;
(statearr_22815[(8)] = inst_22752);

(statearr_22815[(9)] = inst_22753);

(statearr_22815[(10)] = inst_22750);

(statearr_22815[(12)] = inst_22751);

return statearr_22815;
})();
var statearr_22816_22850 = state_22798__$1;
(statearr_22816_22850[(2)] = null);

(statearr_22816_22850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (17))){
var inst_22764 = (state_22798[(7)]);
var inst_22768 = cljs.core.chunk_first.call(null,inst_22764);
var inst_22769 = cljs.core.chunk_rest.call(null,inst_22764);
var inst_22770 = cljs.core.count.call(null,inst_22768);
var inst_22750 = inst_22769;
var inst_22751 = inst_22768;
var inst_22752 = inst_22770;
var inst_22753 = (0);
var state_22798__$1 = (function (){var statearr_22817 = state_22798;
(statearr_22817[(8)] = inst_22752);

(statearr_22817[(9)] = inst_22753);

(statearr_22817[(10)] = inst_22750);

(statearr_22817[(12)] = inst_22751);

return statearr_22817;
})();
var statearr_22818_22851 = state_22798__$1;
(statearr_22818_22851[(2)] = null);

(statearr_22818_22851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (3))){
var inst_22796 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22798__$1,inst_22796);
} else {
if((state_val_22799 === (12))){
var inst_22784 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22819_22852 = state_22798__$1;
(statearr_22819_22852[(2)] = inst_22784);

(statearr_22819_22852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (2))){
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22798__$1,(4),in$);
} else {
if((state_val_22799 === (23))){
var inst_22792 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22820_22853 = state_22798__$1;
(statearr_22820_22853[(2)] = inst_22792);

(statearr_22820_22853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (19))){
var inst_22779 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22821_22854 = state_22798__$1;
(statearr_22821_22854[(2)] = inst_22779);

(statearr_22821_22854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (11))){
var inst_22750 = (state_22798[(10)]);
var inst_22764 = (state_22798[(7)]);
var inst_22764__$1 = cljs.core.seq.call(null,inst_22750);
var state_22798__$1 = (function (){var statearr_22822 = state_22798;
(statearr_22822[(7)] = inst_22764__$1);

return statearr_22822;
})();
if(inst_22764__$1){
var statearr_22823_22855 = state_22798__$1;
(statearr_22823_22855[(1)] = (14));

} else {
var statearr_22824_22856 = state_22798__$1;
(statearr_22824_22856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (9))){
var inst_22786 = (state_22798[(2)]);
var inst_22787 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22798__$1 = (function (){var statearr_22825 = state_22798;
(statearr_22825[(15)] = inst_22786);

return statearr_22825;
})();
if(cljs.core.truth_(inst_22787)){
var statearr_22826_22857 = state_22798__$1;
(statearr_22826_22857[(1)] = (21));

} else {
var statearr_22827_22858 = state_22798__$1;
(statearr_22827_22858[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (5))){
var inst_22742 = cljs.core.async.close_BANG_.call(null,out);
var state_22798__$1 = state_22798;
var statearr_22828_22859 = state_22798__$1;
(statearr_22828_22859[(2)] = inst_22742);

(statearr_22828_22859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (14))){
var inst_22764 = (state_22798[(7)]);
var inst_22766 = cljs.core.chunked_seq_QMARK_.call(null,inst_22764);
var state_22798__$1 = state_22798;
if(inst_22766){
var statearr_22829_22860 = state_22798__$1;
(statearr_22829_22860[(1)] = (17));

} else {
var statearr_22830_22861 = state_22798__$1;
(statearr_22830_22861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (16))){
var inst_22782 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22831_22862 = state_22798__$1;
(statearr_22831_22862[(2)] = inst_22782);

(statearr_22831_22862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (10))){
var inst_22753 = (state_22798[(9)]);
var inst_22751 = (state_22798[(12)]);
var inst_22758 = cljs.core._nth.call(null,inst_22751,inst_22753);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22798__$1,(13),out,inst_22758);
} else {
if((state_val_22799 === (18))){
var inst_22764 = (state_22798[(7)]);
var inst_22773 = cljs.core.first.call(null,inst_22764);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22798__$1,(20),out,inst_22773);
} else {
if((state_val_22799 === (8))){
var inst_22752 = (state_22798[(8)]);
var inst_22753 = (state_22798[(9)]);
var inst_22755 = (inst_22753 < inst_22752);
var inst_22756 = inst_22755;
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22756)){
var statearr_22832_22863 = state_22798__$1;
(statearr_22832_22863[(1)] = (10));

} else {
var statearr_22833_22864 = state_22798__$1;
(statearr_22833_22864[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto__))
;
return ((function (switch__17366__auto__,c__17387__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____0 = (function (){
var statearr_22837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22837[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__);

(statearr_22837[(1)] = (1));

return statearr_22837;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____1 = (function (state_22798){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22838){if((e22838 instanceof Object)){
var ex__17370__auto__ = e22838;
var statearr_22839_22865 = state_22798;
(statearr_22839_22865[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22866 = state_22798;
state_22798 = G__22866;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__ = function(state_22798){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____1.call(this,state_22798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto__))
})();
var state__17389__auto__ = (function (){var statearr_22840 = f__17388__auto__.call(null);
(statearr_22840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto__);

return statearr_22840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto__))
);

return c__17387__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__22868 = arguments.length;
switch (G__22868) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__22871 = arguments.length;
switch (G__22871) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__22874 = arguments.length;
switch (G__22874) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___22924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___22924,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___22924,out){
return (function (state_22898){
var state_val_22899 = (state_22898[(1)]);
if((state_val_22899 === (7))){
var inst_22893 = (state_22898[(2)]);
var state_22898__$1 = state_22898;
var statearr_22900_22925 = state_22898__$1;
(statearr_22900_22925[(2)] = inst_22893);

(statearr_22900_22925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (1))){
var inst_22875 = null;
var state_22898__$1 = (function (){var statearr_22901 = state_22898;
(statearr_22901[(7)] = inst_22875);

return statearr_22901;
})();
var statearr_22902_22926 = state_22898__$1;
(statearr_22902_22926[(2)] = null);

(statearr_22902_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (4))){
var inst_22878 = (state_22898[(8)]);
var inst_22878__$1 = (state_22898[(2)]);
var inst_22879 = (inst_22878__$1 == null);
var inst_22880 = cljs.core.not.call(null,inst_22879);
var state_22898__$1 = (function (){var statearr_22903 = state_22898;
(statearr_22903[(8)] = inst_22878__$1);

return statearr_22903;
})();
if(inst_22880){
var statearr_22904_22927 = state_22898__$1;
(statearr_22904_22927[(1)] = (5));

} else {
var statearr_22905_22928 = state_22898__$1;
(statearr_22905_22928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (6))){
var state_22898__$1 = state_22898;
var statearr_22906_22929 = state_22898__$1;
(statearr_22906_22929[(2)] = null);

(statearr_22906_22929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (3))){
var inst_22895 = (state_22898[(2)]);
var inst_22896 = cljs.core.async.close_BANG_.call(null,out);
var state_22898__$1 = (function (){var statearr_22907 = state_22898;
(statearr_22907[(9)] = inst_22895);

return statearr_22907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22898__$1,inst_22896);
} else {
if((state_val_22899 === (2))){
var state_22898__$1 = state_22898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22898__$1,(4),ch);
} else {
if((state_val_22899 === (11))){
var inst_22878 = (state_22898[(8)]);
var inst_22887 = (state_22898[(2)]);
var inst_22875 = inst_22878;
var state_22898__$1 = (function (){var statearr_22908 = state_22898;
(statearr_22908[(7)] = inst_22875);

(statearr_22908[(10)] = inst_22887);

return statearr_22908;
})();
var statearr_22909_22930 = state_22898__$1;
(statearr_22909_22930[(2)] = null);

(statearr_22909_22930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (9))){
var inst_22878 = (state_22898[(8)]);
var state_22898__$1 = state_22898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22898__$1,(11),out,inst_22878);
} else {
if((state_val_22899 === (5))){
var inst_22878 = (state_22898[(8)]);
var inst_22875 = (state_22898[(7)]);
var inst_22882 = cljs.core._EQ_.call(null,inst_22878,inst_22875);
var state_22898__$1 = state_22898;
if(inst_22882){
var statearr_22911_22931 = state_22898__$1;
(statearr_22911_22931[(1)] = (8));

} else {
var statearr_22912_22932 = state_22898__$1;
(statearr_22912_22932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (10))){
var inst_22890 = (state_22898[(2)]);
var state_22898__$1 = state_22898;
var statearr_22913_22933 = state_22898__$1;
(statearr_22913_22933[(2)] = inst_22890);

(statearr_22913_22933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22899 === (8))){
var inst_22875 = (state_22898[(7)]);
var tmp22910 = inst_22875;
var inst_22875__$1 = tmp22910;
var state_22898__$1 = (function (){var statearr_22914 = state_22898;
(statearr_22914[(7)] = inst_22875__$1);

return statearr_22914;
})();
var statearr_22915_22934 = state_22898__$1;
(statearr_22915_22934[(2)] = null);

(statearr_22915_22934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__17387__auto___22924,out))
;
return ((function (switch__17366__auto__,c__17387__auto___22924,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_22919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22919[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_22919[(1)] = (1));

return statearr_22919;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22898){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e22920){if((e22920 instanceof Object)){
var ex__17370__auto__ = e22920;
var statearr_22921_22935 = state_22898;
(statearr_22921_22935[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22936 = state_22898;
state_22898 = G__22936;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___22924,out))
})();
var state__17389__auto__ = (function (){var statearr_22922 = f__17388__auto__.call(null);
(statearr_22922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___22924);

return statearr_22922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___22924,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__22938 = arguments.length;
switch (G__22938) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___23007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___23007,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___23007,out){
return (function (state_22976){
var state_val_22977 = (state_22976[(1)]);
if((state_val_22977 === (7))){
var inst_22972 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22978_23008 = state_22976__$1;
(statearr_22978_23008[(2)] = inst_22972);

(statearr_22978_23008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (1))){
var inst_22939 = (new Array(n));
var inst_22940 = inst_22939;
var inst_22941 = (0);
var state_22976__$1 = (function (){var statearr_22979 = state_22976;
(statearr_22979[(7)] = inst_22940);

(statearr_22979[(8)] = inst_22941);

return statearr_22979;
})();
var statearr_22980_23009 = state_22976__$1;
(statearr_22980_23009[(2)] = null);

(statearr_22980_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (4))){
var inst_22944 = (state_22976[(9)]);
var inst_22944__$1 = (state_22976[(2)]);
var inst_22945 = (inst_22944__$1 == null);
var inst_22946 = cljs.core.not.call(null,inst_22945);
var state_22976__$1 = (function (){var statearr_22981 = state_22976;
(statearr_22981[(9)] = inst_22944__$1);

return statearr_22981;
})();
if(inst_22946){
var statearr_22982_23010 = state_22976__$1;
(statearr_22982_23010[(1)] = (5));

} else {
var statearr_22983_23011 = state_22976__$1;
(statearr_22983_23011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (15))){
var inst_22966 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22984_23012 = state_22976__$1;
(statearr_22984_23012[(2)] = inst_22966);

(statearr_22984_23012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (13))){
var state_22976__$1 = state_22976;
var statearr_22985_23013 = state_22976__$1;
(statearr_22985_23013[(2)] = null);

(statearr_22985_23013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (6))){
var inst_22941 = (state_22976[(8)]);
var inst_22962 = (inst_22941 > (0));
var state_22976__$1 = state_22976;
if(cljs.core.truth_(inst_22962)){
var statearr_22986_23014 = state_22976__$1;
(statearr_22986_23014[(1)] = (12));

} else {
var statearr_22987_23015 = state_22976__$1;
(statearr_22987_23015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (3))){
var inst_22974 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,inst_22974);
} else {
if((state_val_22977 === (12))){
var inst_22940 = (state_22976[(7)]);
var inst_22964 = cljs.core.vec.call(null,inst_22940);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(15),out,inst_22964);
} else {
if((state_val_22977 === (2))){
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(4),ch);
} else {
if((state_val_22977 === (11))){
var inst_22956 = (state_22976[(2)]);
var inst_22957 = (new Array(n));
var inst_22940 = inst_22957;
var inst_22941 = (0);
var state_22976__$1 = (function (){var statearr_22988 = state_22976;
(statearr_22988[(10)] = inst_22956);

(statearr_22988[(7)] = inst_22940);

(statearr_22988[(8)] = inst_22941);

return statearr_22988;
})();
var statearr_22989_23016 = state_22976__$1;
(statearr_22989_23016[(2)] = null);

(statearr_22989_23016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (9))){
var inst_22940 = (state_22976[(7)]);
var inst_22954 = cljs.core.vec.call(null,inst_22940);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(11),out,inst_22954);
} else {
if((state_val_22977 === (5))){
var inst_22944 = (state_22976[(9)]);
var inst_22949 = (state_22976[(11)]);
var inst_22940 = (state_22976[(7)]);
var inst_22941 = (state_22976[(8)]);
var inst_22948 = (inst_22940[inst_22941] = inst_22944);
var inst_22949__$1 = (inst_22941 + (1));
var inst_22950 = (inst_22949__$1 < n);
var state_22976__$1 = (function (){var statearr_22990 = state_22976;
(statearr_22990[(12)] = inst_22948);

(statearr_22990[(11)] = inst_22949__$1);

return statearr_22990;
})();
if(cljs.core.truth_(inst_22950)){
var statearr_22991_23017 = state_22976__$1;
(statearr_22991_23017[(1)] = (8));

} else {
var statearr_22992_23018 = state_22976__$1;
(statearr_22992_23018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (14))){
var inst_22969 = (state_22976[(2)]);
var inst_22970 = cljs.core.async.close_BANG_.call(null,out);
var state_22976__$1 = (function (){var statearr_22994 = state_22976;
(statearr_22994[(13)] = inst_22969);

return statearr_22994;
})();
var statearr_22995_23019 = state_22976__$1;
(statearr_22995_23019[(2)] = inst_22970);

(statearr_22995_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (10))){
var inst_22960 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22996_23020 = state_22976__$1;
(statearr_22996_23020[(2)] = inst_22960);

(statearr_22996_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (8))){
var inst_22949 = (state_22976[(11)]);
var inst_22940 = (state_22976[(7)]);
var tmp22993 = inst_22940;
var inst_22940__$1 = tmp22993;
var inst_22941 = inst_22949;
var state_22976__$1 = (function (){var statearr_22997 = state_22976;
(statearr_22997[(7)] = inst_22940__$1);

(statearr_22997[(8)] = inst_22941);

return statearr_22997;
})();
var statearr_22998_23021 = state_22976__$1;
(statearr_22998_23021[(2)] = null);

(statearr_22998_23021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__17387__auto___23007,out))
;
return ((function (switch__17366__auto__,c__17387__auto___23007,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_23002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23002[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_23002[(1)] = (1));

return statearr_23002;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_22976){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_22976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object)){
var ex__17370__auto__ = e23003;
var statearr_23004_23022 = state_22976;
(statearr_23004_23022[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23023 = state_22976;
state_22976 = G__23023;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___23007,out))
})();
var state__17389__auto__ = (function (){var statearr_23005 = f__17388__auto__.call(null);
(statearr_23005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___23007);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___23007,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__23025 = arguments.length;
switch (G__23025) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17387__auto___23098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17387__auto___23098,out){
return (function (){
var f__17388__auto__ = (function (){var switch__17366__auto__ = ((function (c__17387__auto___23098,out){
return (function (state_23067){
var state_val_23068 = (state_23067[(1)]);
if((state_val_23068 === (7))){
var inst_23063 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23069_23099 = state_23067__$1;
(statearr_23069_23099[(2)] = inst_23063);

(statearr_23069_23099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (1))){
var inst_23026 = [];
var inst_23027 = inst_23026;
var inst_23028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23067__$1 = (function (){var statearr_23070 = state_23067;
(statearr_23070[(7)] = inst_23027);

(statearr_23070[(8)] = inst_23028);

return statearr_23070;
})();
var statearr_23071_23100 = state_23067__$1;
(statearr_23071_23100[(2)] = null);

(statearr_23071_23100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (4))){
var inst_23031 = (state_23067[(9)]);
var inst_23031__$1 = (state_23067[(2)]);
var inst_23032 = (inst_23031__$1 == null);
var inst_23033 = cljs.core.not.call(null,inst_23032);
var state_23067__$1 = (function (){var statearr_23072 = state_23067;
(statearr_23072[(9)] = inst_23031__$1);

return statearr_23072;
})();
if(inst_23033){
var statearr_23073_23101 = state_23067__$1;
(statearr_23073_23101[(1)] = (5));

} else {
var statearr_23074_23102 = state_23067__$1;
(statearr_23074_23102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (15))){
var inst_23057 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23075_23103 = state_23067__$1;
(statearr_23075_23103[(2)] = inst_23057);

(statearr_23075_23103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (13))){
var state_23067__$1 = state_23067;
var statearr_23076_23104 = state_23067__$1;
(statearr_23076_23104[(2)] = null);

(statearr_23076_23104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (6))){
var inst_23027 = (state_23067[(7)]);
var inst_23052 = inst_23027.length;
var inst_23053 = (inst_23052 > (0));
var state_23067__$1 = state_23067;
if(cljs.core.truth_(inst_23053)){
var statearr_23077_23105 = state_23067__$1;
(statearr_23077_23105[(1)] = (12));

} else {
var statearr_23078_23106 = state_23067__$1;
(statearr_23078_23106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (3))){
var inst_23065 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23067__$1,inst_23065);
} else {
if((state_val_23068 === (12))){
var inst_23027 = (state_23067[(7)]);
var inst_23055 = cljs.core.vec.call(null,inst_23027);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23067__$1,(15),out,inst_23055);
} else {
if((state_val_23068 === (2))){
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23067__$1,(4),ch);
} else {
if((state_val_23068 === (11))){
var inst_23035 = (state_23067[(10)]);
var inst_23031 = (state_23067[(9)]);
var inst_23045 = (state_23067[(2)]);
var inst_23046 = [];
var inst_23047 = inst_23046.push(inst_23031);
var inst_23027 = inst_23046;
var inst_23028 = inst_23035;
var state_23067__$1 = (function (){var statearr_23079 = state_23067;
(statearr_23079[(7)] = inst_23027);

(statearr_23079[(11)] = inst_23045);

(statearr_23079[(12)] = inst_23047);

(statearr_23079[(8)] = inst_23028);

return statearr_23079;
})();
var statearr_23080_23107 = state_23067__$1;
(statearr_23080_23107[(2)] = null);

(statearr_23080_23107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (9))){
var inst_23027 = (state_23067[(7)]);
var inst_23043 = cljs.core.vec.call(null,inst_23027);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23067__$1,(11),out,inst_23043);
} else {
if((state_val_23068 === (5))){
var inst_23035 = (state_23067[(10)]);
var inst_23028 = (state_23067[(8)]);
var inst_23031 = (state_23067[(9)]);
var inst_23035__$1 = f.call(null,inst_23031);
var inst_23036 = cljs.core._EQ_.call(null,inst_23035__$1,inst_23028);
var inst_23037 = cljs.core.keyword_identical_QMARK_.call(null,inst_23028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23038 = (inst_23036) || (inst_23037);
var state_23067__$1 = (function (){var statearr_23081 = state_23067;
(statearr_23081[(10)] = inst_23035__$1);

return statearr_23081;
})();
if(cljs.core.truth_(inst_23038)){
var statearr_23082_23108 = state_23067__$1;
(statearr_23082_23108[(1)] = (8));

} else {
var statearr_23083_23109 = state_23067__$1;
(statearr_23083_23109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (14))){
var inst_23060 = (state_23067[(2)]);
var inst_23061 = cljs.core.async.close_BANG_.call(null,out);
var state_23067__$1 = (function (){var statearr_23085 = state_23067;
(statearr_23085[(13)] = inst_23060);

return statearr_23085;
})();
var statearr_23086_23110 = state_23067__$1;
(statearr_23086_23110[(2)] = inst_23061);

(statearr_23086_23110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (10))){
var inst_23050 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23087_23111 = state_23067__$1;
(statearr_23087_23111[(2)] = inst_23050);

(statearr_23087_23111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (8))){
var inst_23027 = (state_23067[(7)]);
var inst_23035 = (state_23067[(10)]);
var inst_23031 = (state_23067[(9)]);
var inst_23040 = inst_23027.push(inst_23031);
var tmp23084 = inst_23027;
var inst_23027__$1 = tmp23084;
var inst_23028 = inst_23035;
var state_23067__$1 = (function (){var statearr_23088 = state_23067;
(statearr_23088[(14)] = inst_23040);

(statearr_23088[(7)] = inst_23027__$1);

(statearr_23088[(8)] = inst_23028);

return statearr_23088;
})();
var statearr_23089_23112 = state_23067__$1;
(statearr_23089_23112[(2)] = null);

(statearr_23089_23112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__17387__auto___23098,out))
;
return ((function (switch__17366__auto__,c__17387__auto___23098,out){
return (function() {
var cljs$core$async$state_machine__17367__auto__ = null;
var cljs$core$async$state_machine__17367__auto____0 = (function (){
var statearr_23093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23093[(0)] = cljs$core$async$state_machine__17367__auto__);

(statearr_23093[(1)] = (1));

return statearr_23093;
});
var cljs$core$async$state_machine__17367__auto____1 = (function (state_23067){
while(true){
var ret_value__17368__auto__ = (function (){try{while(true){
var result__17369__auto__ = switch__17366__auto__.call(null,state_23067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17369__auto__;
}
break;
}
}catch (e23094){if((e23094 instanceof Object)){
var ex__17370__auto__ = e23094;
var statearr_23095_23113 = state_23067;
(statearr_23095_23113[(5)] = ex__17370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23114 = state_23067;
state_23067 = G__23114;
continue;
} else {
return ret_value__17368__auto__;
}
break;
}
});
cljs$core$async$state_machine__17367__auto__ = function(state_23067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17367__auto____1.call(this,state_23067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17367__auto____0;
cljs$core$async$state_machine__17367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17367__auto____1;
return cljs$core$async$state_machine__17367__auto__;
})()
;})(switch__17366__auto__,c__17387__auto___23098,out))
})();
var state__17389__auto__ = (function (){var statearr_23096 = f__17388__auto__.call(null);
(statearr_23096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17387__auto___23098);

return statearr_23096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17389__auto__);
});})(c__17387__auto___23098,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
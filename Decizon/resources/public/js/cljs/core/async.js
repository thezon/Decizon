// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28763 = (function (fn_handler,f,meta28764){
this.fn_handler = fn_handler;
this.f = f;
this.meta28764 = meta28764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28765,meta28764__$1){
var self__ = this;
var _28765__$1 = this;
return (new cljs.core.async.t28763(self__.fn_handler,self__.f,meta28764__$1));
});

cljs.core.async.t28763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28765){
var self__ = this;
var _28765__$1 = this;
return self__.meta28764;
});

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28764","meta28764",247249738,null)], null);
});

cljs.core.async.t28763.cljs$lang$type = true;

cljs.core.async.t28763.cljs$lang$ctorStr = "cljs.core.async/t28763";

cljs.core.async.t28763.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t28763");
});

cljs.core.async.__GT_t28763 = (function cljs$core$async$fn_handler_$___GT_t28763(fn_handler__$1,f__$1,meta28764){
return (new cljs.core.async.t28763(fn_handler__$1,f__$1,meta28764));
});

}

return (new cljs.core.async.t28763(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28767 = buff;
if(G__28767){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__28767.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28767.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28767);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28767);
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
var G__28769 = arguments.length;
switch (G__28769) {
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
var G__28772 = arguments.length;
switch (G__28772) {
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
var val_28774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28774,ret){
return (function (){
return fn1.call(null,val_28774);
});})(val_28774,ret))
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
var G__28776 = arguments.length;
switch (G__28776) {
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
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__12233__auto___28778 = n;
var x_28779 = (0);
while(true){
if((x_28779 < n__12233__auto___28778)){
(a[x_28779] = (0));

var G__28780 = (x_28779 + (1));
x_28779 = G__28780;
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

var G__28781 = (i + (1));
i = G__28781;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28785 = (function (alt_flag,flag,meta28786){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28786 = meta28786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28787,meta28786__$1){
var self__ = this;
var _28787__$1 = this;
return (new cljs.core.async.t28785(self__.alt_flag,self__.flag,meta28786__$1));
});})(flag))
;

cljs.core.async.t28785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28787){
var self__ = this;
var _28787__$1 = this;
return self__.meta28786;
});})(flag))
;

cljs.core.async.t28785.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28785.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28786","meta28786",191232119,null)], null);
});})(flag))
;

cljs.core.async.t28785.cljs$lang$type = true;

cljs.core.async.t28785.cljs$lang$ctorStr = "cljs.core.async/t28785";

cljs.core.async.t28785.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t28785");
});})(flag))
;

cljs.core.async.__GT_t28785 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28785(alt_flag__$1,flag__$1,meta28786){
return (new cljs.core.async.t28785(alt_flag__$1,flag__$1,meta28786));
});})(flag))
;

}

return (new cljs.core.async.t28785(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28791 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28791 = (function (alt_handler,flag,cb,meta28792){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28792 = meta28792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28793,meta28792__$1){
var self__ = this;
var _28793__$1 = this;
return (new cljs.core.async.t28791(self__.alt_handler,self__.flag,self__.cb,meta28792__$1));
});

cljs.core.async.t28791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28793){
var self__ = this;
var _28793__$1 = this;
return self__.meta28792;
});

cljs.core.async.t28791.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28792","meta28792",463538299,null)], null);
});

cljs.core.async.t28791.cljs$lang$type = true;

cljs.core.async.t28791.cljs$lang$ctorStr = "cljs.core.async/t28791";

cljs.core.async.t28791.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t28791");
});

cljs.core.async.__GT_t28791 = (function cljs$core$async$alt_handler_$___GT_t28791(alt_handler__$1,flag__$1,cb__$1,meta28792){
return (new cljs.core.async.t28791(alt_handler__$1,flag__$1,cb__$1,meta28792));
});

}

return (new cljs.core.async.t28791(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28794_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28794_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28795_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28795_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11348__auto__ = wport;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28796 = (i + (1));
i = G__28796;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11348__auto__ = ret;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__11336__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11336__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28799){
var map__28800 = p__28799;
var map__28800__$1 = ((cljs.core.seq_QMARK_.call(null,map__28800))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);
var opts = map__28800__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28797){
var G__28798 = cljs.core.first.call(null,seq28797);
var seq28797__$1 = cljs.core.next.call(null,seq28797);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28798,seq28797__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28802 = arguments.length;
switch (G__28802) {
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
var c__23477__auto___28851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___28851){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___28851){
return (function (state_28826){
var state_val_28827 = (state_28826[(1)]);
if((state_val_28827 === (7))){
var inst_28822 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28828_28852 = state_28826__$1;
(statearr_28828_28852[(2)] = inst_28822);

(statearr_28828_28852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (1))){
var state_28826__$1 = state_28826;
var statearr_28829_28853 = state_28826__$1;
(statearr_28829_28853[(2)] = null);

(statearr_28829_28853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (4))){
var inst_28805 = (state_28826[(7)]);
var inst_28805__$1 = (state_28826[(2)]);
var inst_28806 = (inst_28805__$1 == null);
var state_28826__$1 = (function (){var statearr_28830 = state_28826;
(statearr_28830[(7)] = inst_28805__$1);

return statearr_28830;
})();
if(cljs.core.truth_(inst_28806)){
var statearr_28831_28854 = state_28826__$1;
(statearr_28831_28854[(1)] = (5));

} else {
var statearr_28832_28855 = state_28826__$1;
(statearr_28832_28855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (13))){
var state_28826__$1 = state_28826;
var statearr_28833_28856 = state_28826__$1;
(statearr_28833_28856[(2)] = null);

(statearr_28833_28856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (6))){
var inst_28805 = (state_28826[(7)]);
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28826__$1,(11),to,inst_28805);
} else {
if((state_val_28827 === (3))){
var inst_28824 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28826__$1,inst_28824);
} else {
if((state_val_28827 === (12))){
var state_28826__$1 = state_28826;
var statearr_28834_28857 = state_28826__$1;
(statearr_28834_28857[(2)] = null);

(statearr_28834_28857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (2))){
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(4),from);
} else {
if((state_val_28827 === (11))){
var inst_28815 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
if(cljs.core.truth_(inst_28815)){
var statearr_28835_28858 = state_28826__$1;
(statearr_28835_28858[(1)] = (12));

} else {
var statearr_28836_28859 = state_28826__$1;
(statearr_28836_28859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (9))){
var state_28826__$1 = state_28826;
var statearr_28837_28860 = state_28826__$1;
(statearr_28837_28860[(2)] = null);

(statearr_28837_28860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (5))){
var state_28826__$1 = state_28826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28838_28861 = state_28826__$1;
(statearr_28838_28861[(1)] = (8));

} else {
var statearr_28839_28862 = state_28826__$1;
(statearr_28839_28862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (14))){
var inst_28820 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28840_28863 = state_28826__$1;
(statearr_28840_28863[(2)] = inst_28820);

(statearr_28840_28863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (10))){
var inst_28812 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28841_28864 = state_28826__$1;
(statearr_28841_28864[(2)] = inst_28812);

(statearr_28841_28864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (8))){
var inst_28809 = cljs.core.async.close_BANG_.call(null,to);
var state_28826__$1 = state_28826;
var statearr_28842_28865 = state_28826__$1;
(statearr_28842_28865[(2)] = inst_28809);

(statearr_28842_28865[(1)] = (10));


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
});})(c__23477__auto___28851))
;
return ((function (switch__23415__auto__,c__23477__auto___28851){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_28846 = [null,null,null,null,null,null,null,null];
(statearr_28846[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_28846[(1)] = (1));

return statearr_28846;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_28826){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_28826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e28847){if((e28847 instanceof Object)){
var ex__23419__auto__ = e28847;
var statearr_28848_28866 = state_28826;
(statearr_28848_28866[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28867 = state_28826;
state_28826 = G__28867;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_28826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_28826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___28851))
})();
var state__23479__auto__ = (function (){var statearr_28849 = f__23478__auto__.call(null);
(statearr_28849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___28851);

return statearr_28849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___28851))
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
return (function (p__29051){
var vec__29052 = p__29051;
var v = cljs.core.nth.call(null,vec__29052,(0),null);
var p = cljs.core.nth.call(null,vec__29052,(1),null);
var job = vec__29052;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23477__auto___29234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results){
return (function (state_29057){
var state_val_29058 = (state_29057[(1)]);
if((state_val_29058 === (1))){
var state_29057__$1 = state_29057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29057__$1,(2),res,v);
} else {
if((state_val_29058 === (2))){
var inst_29054 = (state_29057[(2)]);
var inst_29055 = cljs.core.async.close_BANG_.call(null,res);
var state_29057__$1 = (function (){var statearr_29059 = state_29057;
(statearr_29059[(7)] = inst_29054);

return statearr_29059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29057__$1,inst_29055);
} else {
return null;
}
}
});})(c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results))
;
return ((function (switch__23415__auto__,c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_29063 = [null,null,null,null,null,null,null,null];
(statearr_29063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__);

(statearr_29063[(1)] = (1));

return statearr_29063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1 = (function (state_29057){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29064){if((e29064 instanceof Object)){
var ex__23419__auto__ = e29064;
var statearr_29065_29235 = state_29057;
(statearr_29065_29235[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29236 = state_29057;
state_29057 = G__29236;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = function(state_29057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1.call(this,state_29057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results))
})();
var state__23479__auto__ = (function (){var statearr_29066 = f__23478__auto__.call(null);
(statearr_29066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29234);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___29234,res,vec__29052,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29067){
var vec__29068 = p__29067;
var v = cljs.core.nth.call(null,vec__29068,(0),null);
var p = cljs.core.nth.call(null,vec__29068,(1),null);
var job = vec__29068;
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
var n__12233__auto___29237 = n;
var __29238 = (0);
while(true){
if((__29238 < n__12233__auto___29237)){
var G__29069_29239 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29069_29239) {
case "compute":
var c__23477__auto___29241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29238,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (__29238,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function (state_29082){
var state_val_29083 = (state_29082[(1)]);
if((state_val_29083 === (1))){
var state_29082__$1 = state_29082;
var statearr_29084_29242 = state_29082__$1;
(statearr_29084_29242[(2)] = null);

(statearr_29084_29242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (2))){
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29082__$1,(4),jobs);
} else {
if((state_val_29083 === (3))){
var inst_29080 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29082__$1,inst_29080);
} else {
if((state_val_29083 === (4))){
var inst_29072 = (state_29082[(2)]);
var inst_29073 = process.call(null,inst_29072);
var state_29082__$1 = state_29082;
if(cljs.core.truth_(inst_29073)){
var statearr_29085_29243 = state_29082__$1;
(statearr_29085_29243[(1)] = (5));

} else {
var statearr_29086_29244 = state_29082__$1;
(statearr_29086_29244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (5))){
var state_29082__$1 = state_29082;
var statearr_29087_29245 = state_29082__$1;
(statearr_29087_29245[(2)] = null);

(statearr_29087_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (6))){
var state_29082__$1 = state_29082;
var statearr_29088_29246 = state_29082__$1;
(statearr_29088_29246[(2)] = null);

(statearr_29088_29246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (7))){
var inst_29078 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29089_29247 = state_29082__$1;
(statearr_29089_29247[(2)] = inst_29078);

(statearr_29089_29247[(1)] = (3));


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
});})(__29238,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
;
return ((function (__29238,switch__23415__auto__,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null];
(statearr_29093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1 = (function (state_29082){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__23419__auto__ = e29094;
var statearr_29095_29248 = state_29082;
(statearr_29095_29248[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29249 = state_29082;
state_29082 = G__29249;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = function(state_29082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1.call(this,state_29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__;
})()
;})(__29238,switch__23415__auto__,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
})();
var state__23479__auto__ = (function (){var statearr_29096 = f__23478__auto__.call(null);
(statearr_29096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29241);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(__29238,c__23477__auto___29241,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
);


break;
case "async":
var c__23477__auto___29250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29238,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (__29238,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function (state_29109){
var state_val_29110 = (state_29109[(1)]);
if((state_val_29110 === (1))){
var state_29109__$1 = state_29109;
var statearr_29111_29251 = state_29109__$1;
(statearr_29111_29251[(2)] = null);

(statearr_29111_29251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (2))){
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(4),jobs);
} else {
if((state_val_29110 === (3))){
var inst_29107 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else {
if((state_val_29110 === (4))){
var inst_29099 = (state_29109[(2)]);
var inst_29100 = async.call(null,inst_29099);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29100)){
var statearr_29112_29252 = state_29109__$1;
(statearr_29112_29252[(1)] = (5));

} else {
var statearr_29113_29253 = state_29109__$1;
(statearr_29113_29253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (5))){
var state_29109__$1 = state_29109;
var statearr_29114_29254 = state_29109__$1;
(statearr_29114_29254[(2)] = null);

(statearr_29114_29254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (6))){
var state_29109__$1 = state_29109;
var statearr_29115_29255 = state_29109__$1;
(statearr_29115_29255[(2)] = null);

(statearr_29115_29255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (7))){
var inst_29105 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29116_29256 = state_29109__$1;
(statearr_29116_29256[(2)] = inst_29105);

(statearr_29116_29256[(1)] = (3));


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
});})(__29238,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
;
return ((function (__29238,switch__23415__auto__,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_29120 = [null,null,null,null,null,null,null];
(statearr_29120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__);

(statearr_29120[(1)] = (1));

return statearr_29120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1 = (function (state_29109){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29121){if((e29121 instanceof Object)){
var ex__23419__auto__ = e29121;
var statearr_29122_29257 = state_29109;
(statearr_29122_29257[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29258 = state_29109;
state_29109 = G__29258;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__;
})()
;})(__29238,switch__23415__auto__,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
})();
var state__23479__auto__ = (function (){var statearr_29123 = f__23478__auto__.call(null);
(statearr_29123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29250);

return statearr_29123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(__29238,c__23477__auto___29250,G__29069_29239,n__12233__auto___29237,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29259 = (__29238 + (1));
__29238 = G__29259;
continue;
} else {
}
break;
}

var c__23477__auto___29260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___29260,jobs,results,process,async){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___29260,jobs,results,process,async){
return (function (state_29145){
var state_val_29146 = (state_29145[(1)]);
if((state_val_29146 === (1))){
var state_29145__$1 = state_29145;
var statearr_29147_29261 = state_29145__$1;
(statearr_29147_29261[(2)] = null);

(statearr_29147_29261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (2))){
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29145__$1,(4),from);
} else {
if((state_val_29146 === (3))){
var inst_29143 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29145__$1,inst_29143);
} else {
if((state_val_29146 === (4))){
var inst_29126 = (state_29145[(7)]);
var inst_29126__$1 = (state_29145[(2)]);
var inst_29127 = (inst_29126__$1 == null);
var state_29145__$1 = (function (){var statearr_29148 = state_29145;
(statearr_29148[(7)] = inst_29126__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29149_29262 = state_29145__$1;
(statearr_29149_29262[(1)] = (5));

} else {
var statearr_29150_29263 = state_29145__$1;
(statearr_29150_29263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (5))){
var inst_29129 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29145__$1 = state_29145;
var statearr_29151_29264 = state_29145__$1;
(statearr_29151_29264[(2)] = inst_29129);

(statearr_29151_29264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (6))){
var inst_29131 = (state_29145[(8)]);
var inst_29126 = (state_29145[(7)]);
var inst_29131__$1 = cljs.core.async.chan.call(null,(1));
var inst_29132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29133 = [inst_29126,inst_29131__$1];
var inst_29134 = (new cljs.core.PersistentVector(null,2,(5),inst_29132,inst_29133,null));
var state_29145__$1 = (function (){var statearr_29152 = state_29145;
(statearr_29152[(8)] = inst_29131__$1);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29145__$1,(8),jobs,inst_29134);
} else {
if((state_val_29146 === (7))){
var inst_29141 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29153_29265 = state_29145__$1;
(statearr_29153_29265[(2)] = inst_29141);

(statearr_29153_29265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (8))){
var inst_29131 = (state_29145[(8)]);
var inst_29136 = (state_29145[(2)]);
var state_29145__$1 = (function (){var statearr_29154 = state_29145;
(statearr_29154[(9)] = inst_29136);

return statearr_29154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29145__$1,(9),results,inst_29131);
} else {
if((state_val_29146 === (9))){
var inst_29138 = (state_29145[(2)]);
var state_29145__$1 = (function (){var statearr_29155 = state_29145;
(statearr_29155[(10)] = inst_29138);

return statearr_29155;
})();
var statearr_29156_29266 = state_29145__$1;
(statearr_29156_29266[(2)] = null);

(statearr_29156_29266[(1)] = (2));


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
});})(c__23477__auto___29260,jobs,results,process,async))
;
return ((function (switch__23415__auto__,c__23477__auto___29260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_29160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__);

(statearr_29160[(1)] = (1));

return statearr_29160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1 = (function (state_29145){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29161){if((e29161 instanceof Object)){
var ex__23419__auto__ = e29161;
var statearr_29162_29267 = state_29145;
(statearr_29162_29267[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29268 = state_29145;
state_29145 = G__29268;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = function(state_29145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1.call(this,state_29145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___29260,jobs,results,process,async))
})();
var state__23479__auto__ = (function (){var statearr_29163 = f__23478__auto__.call(null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29260);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___29260,jobs,results,process,async))
);


var c__23477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto__,jobs,results,process,async){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto__,jobs,results,process,async){
return (function (state_29201){
var state_val_29202 = (state_29201[(1)]);
if((state_val_29202 === (7))){
var inst_29197 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29203_29269 = state_29201__$1;
(statearr_29203_29269[(2)] = inst_29197);

(statearr_29203_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (20))){
var state_29201__$1 = state_29201;
var statearr_29204_29270 = state_29201__$1;
(statearr_29204_29270[(2)] = null);

(statearr_29204_29270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (1))){
var state_29201__$1 = state_29201;
var statearr_29205_29271 = state_29201__$1;
(statearr_29205_29271[(2)] = null);

(statearr_29205_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (4))){
var inst_29166 = (state_29201[(7)]);
var inst_29166__$1 = (state_29201[(2)]);
var inst_29167 = (inst_29166__$1 == null);
var state_29201__$1 = (function (){var statearr_29206 = state_29201;
(statearr_29206[(7)] = inst_29166__$1);

return statearr_29206;
})();
if(cljs.core.truth_(inst_29167)){
var statearr_29207_29272 = state_29201__$1;
(statearr_29207_29272[(1)] = (5));

} else {
var statearr_29208_29273 = state_29201__$1;
(statearr_29208_29273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (15))){
var inst_29179 = (state_29201[(8)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29201__$1,(18),to,inst_29179);
} else {
if((state_val_29202 === (21))){
var inst_29192 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29209_29274 = state_29201__$1;
(statearr_29209_29274[(2)] = inst_29192);

(statearr_29209_29274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (13))){
var inst_29194 = (state_29201[(2)]);
var state_29201__$1 = (function (){var statearr_29210 = state_29201;
(statearr_29210[(9)] = inst_29194);

return statearr_29210;
})();
var statearr_29211_29275 = state_29201__$1;
(statearr_29211_29275[(2)] = null);

(statearr_29211_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (6))){
var inst_29166 = (state_29201[(7)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(11),inst_29166);
} else {
if((state_val_29202 === (17))){
var inst_29187 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
if(cljs.core.truth_(inst_29187)){
var statearr_29212_29276 = state_29201__$1;
(statearr_29212_29276[(1)] = (19));

} else {
var statearr_29213_29277 = state_29201__$1;
(statearr_29213_29277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (3))){
var inst_29199 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29201__$1,inst_29199);
} else {
if((state_val_29202 === (12))){
var inst_29176 = (state_29201[(10)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(14),inst_29176);
} else {
if((state_val_29202 === (2))){
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(4),results);
} else {
if((state_val_29202 === (19))){
var state_29201__$1 = state_29201;
var statearr_29214_29278 = state_29201__$1;
(statearr_29214_29278[(2)] = null);

(statearr_29214_29278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (11))){
var inst_29176 = (state_29201[(2)]);
var state_29201__$1 = (function (){var statearr_29215 = state_29201;
(statearr_29215[(10)] = inst_29176);

return statearr_29215;
})();
var statearr_29216_29279 = state_29201__$1;
(statearr_29216_29279[(2)] = null);

(statearr_29216_29279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (9))){
var state_29201__$1 = state_29201;
var statearr_29217_29280 = state_29201__$1;
(statearr_29217_29280[(2)] = null);

(statearr_29217_29280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (5))){
var state_29201__$1 = state_29201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29218_29281 = state_29201__$1;
(statearr_29218_29281[(1)] = (8));

} else {
var statearr_29219_29282 = state_29201__$1;
(statearr_29219_29282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (14))){
var inst_29181 = (state_29201[(11)]);
var inst_29179 = (state_29201[(8)]);
var inst_29179__$1 = (state_29201[(2)]);
var inst_29180 = (inst_29179__$1 == null);
var inst_29181__$1 = cljs.core.not.call(null,inst_29180);
var state_29201__$1 = (function (){var statearr_29220 = state_29201;
(statearr_29220[(11)] = inst_29181__$1);

(statearr_29220[(8)] = inst_29179__$1);

return statearr_29220;
})();
if(inst_29181__$1){
var statearr_29221_29283 = state_29201__$1;
(statearr_29221_29283[(1)] = (15));

} else {
var statearr_29222_29284 = state_29201__$1;
(statearr_29222_29284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (16))){
var inst_29181 = (state_29201[(11)]);
var state_29201__$1 = state_29201;
var statearr_29223_29285 = state_29201__$1;
(statearr_29223_29285[(2)] = inst_29181);

(statearr_29223_29285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (10))){
var inst_29173 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29224_29286 = state_29201__$1;
(statearr_29224_29286[(2)] = inst_29173);

(statearr_29224_29286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (18))){
var inst_29184 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29225_29287 = state_29201__$1;
(statearr_29225_29287[(2)] = inst_29184);

(statearr_29225_29287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (8))){
var inst_29170 = cljs.core.async.close_BANG_.call(null,to);
var state_29201__$1 = state_29201;
var statearr_29226_29288 = state_29201__$1;
(statearr_29226_29288[(2)] = inst_29170);

(statearr_29226_29288[(1)] = (10));


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
});})(c__23477__auto__,jobs,results,process,async))
;
return ((function (switch__23415__auto__,c__23477__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_29230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__);

(statearr_29230[(1)] = (1));

return statearr_29230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1 = (function (state_29201){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29231){if((e29231 instanceof Object)){
var ex__23419__auto__ = e29231;
var statearr_29232_29289 = state_29201;
(statearr_29232_29289[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29290 = state_29201;
state_29201 = G__29290;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__ = function(state_29201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1.call(this,state_29201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto__,jobs,results,process,async))
})();
var state__23479__auto__ = (function (){var statearr_29233 = f__23478__auto__.call(null);
(statearr_29233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto__);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto__,jobs,results,process,async))
);

return c__23477__auto__;
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
var G__29292 = arguments.length;
switch (G__29292) {
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
var G__29295 = arguments.length;
switch (G__29295) {
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
var G__29298 = arguments.length;
switch (G__29298) {
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
var c__23477__auto___29350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___29350,tc,fc){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___29350,tc,fc){
return (function (state_29324){
var state_val_29325 = (state_29324[(1)]);
if((state_val_29325 === (7))){
var inst_29320 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29326_29351 = state_29324__$1;
(statearr_29326_29351[(2)] = inst_29320);

(statearr_29326_29351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (1))){
var state_29324__$1 = state_29324;
var statearr_29327_29352 = state_29324__$1;
(statearr_29327_29352[(2)] = null);

(statearr_29327_29352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (4))){
var inst_29301 = (state_29324[(7)]);
var inst_29301__$1 = (state_29324[(2)]);
var inst_29302 = (inst_29301__$1 == null);
var state_29324__$1 = (function (){var statearr_29328 = state_29324;
(statearr_29328[(7)] = inst_29301__$1);

return statearr_29328;
})();
if(cljs.core.truth_(inst_29302)){
var statearr_29329_29353 = state_29324__$1;
(statearr_29329_29353[(1)] = (5));

} else {
var statearr_29330_29354 = state_29324__$1;
(statearr_29330_29354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (13))){
var state_29324__$1 = state_29324;
var statearr_29331_29355 = state_29324__$1;
(statearr_29331_29355[(2)] = null);

(statearr_29331_29355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (6))){
var inst_29301 = (state_29324[(7)]);
var inst_29307 = p.call(null,inst_29301);
var state_29324__$1 = state_29324;
if(cljs.core.truth_(inst_29307)){
var statearr_29332_29356 = state_29324__$1;
(statearr_29332_29356[(1)] = (9));

} else {
var statearr_29333_29357 = state_29324__$1;
(statearr_29333_29357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (3))){
var inst_29322 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29324__$1,inst_29322);
} else {
if((state_val_29325 === (12))){
var state_29324__$1 = state_29324;
var statearr_29334_29358 = state_29324__$1;
(statearr_29334_29358[(2)] = null);

(statearr_29334_29358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (2))){
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(4),ch);
} else {
if((state_val_29325 === (11))){
var inst_29301 = (state_29324[(7)]);
var inst_29311 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29324__$1,(8),inst_29311,inst_29301);
} else {
if((state_val_29325 === (9))){
var state_29324__$1 = state_29324;
var statearr_29335_29359 = state_29324__$1;
(statearr_29335_29359[(2)] = tc);

(statearr_29335_29359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (5))){
var inst_29304 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29305 = cljs.core.async.close_BANG_.call(null,fc);
var state_29324__$1 = (function (){var statearr_29336 = state_29324;
(statearr_29336[(8)] = inst_29304);

return statearr_29336;
})();
var statearr_29337_29360 = state_29324__$1;
(statearr_29337_29360[(2)] = inst_29305);

(statearr_29337_29360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (14))){
var inst_29318 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29338_29361 = state_29324__$1;
(statearr_29338_29361[(2)] = inst_29318);

(statearr_29338_29361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (10))){
var state_29324__$1 = state_29324;
var statearr_29339_29362 = state_29324__$1;
(statearr_29339_29362[(2)] = fc);

(statearr_29339_29362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (8))){
var inst_29313 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
if(cljs.core.truth_(inst_29313)){
var statearr_29340_29363 = state_29324__$1;
(statearr_29340_29363[(1)] = (12));

} else {
var statearr_29341_29364 = state_29324__$1;
(statearr_29341_29364[(1)] = (13));

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
});})(c__23477__auto___29350,tc,fc))
;
return ((function (switch__23415__auto__,c__23477__auto___29350,tc,fc){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_29345 = [null,null,null,null,null,null,null,null,null];
(statearr_29345[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_29345[(1)] = (1));

return statearr_29345;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_29324){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29346){if((e29346 instanceof Object)){
var ex__23419__auto__ = e29346;
var statearr_29347_29365 = state_29324;
(statearr_29347_29365[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29366 = state_29324;
state_29324 = G__29366;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_29324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_29324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___29350,tc,fc))
})();
var state__23479__auto__ = (function (){var statearr_29348 = f__23478__auto__.call(null);
(statearr_29348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29350);

return statearr_29348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___29350,tc,fc))
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
var c__23477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto__){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto__){
return (function (state_29413){
var state_val_29414 = (state_29413[(1)]);
if((state_val_29414 === (1))){
var inst_29399 = init;
var state_29413__$1 = (function (){var statearr_29415 = state_29413;
(statearr_29415[(7)] = inst_29399);

return statearr_29415;
})();
var statearr_29416_29431 = state_29413__$1;
(statearr_29416_29431[(2)] = null);

(statearr_29416_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (2))){
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29413__$1,(4),ch);
} else {
if((state_val_29414 === (3))){
var inst_29411 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29413__$1,inst_29411);
} else {
if((state_val_29414 === (4))){
var inst_29402 = (state_29413[(8)]);
var inst_29402__$1 = (state_29413[(2)]);
var inst_29403 = (inst_29402__$1 == null);
var state_29413__$1 = (function (){var statearr_29417 = state_29413;
(statearr_29417[(8)] = inst_29402__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29403)){
var statearr_29418_29432 = state_29413__$1;
(statearr_29418_29432[(1)] = (5));

} else {
var statearr_29419_29433 = state_29413__$1;
(statearr_29419_29433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (5))){
var inst_29399 = (state_29413[(7)]);
var state_29413__$1 = state_29413;
var statearr_29420_29434 = state_29413__$1;
(statearr_29420_29434[(2)] = inst_29399);

(statearr_29420_29434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (6))){
var inst_29399 = (state_29413[(7)]);
var inst_29402 = (state_29413[(8)]);
var inst_29406 = f.call(null,inst_29399,inst_29402);
var inst_29399__$1 = inst_29406;
var state_29413__$1 = (function (){var statearr_29421 = state_29413;
(statearr_29421[(7)] = inst_29399__$1);

return statearr_29421;
})();
var statearr_29422_29435 = state_29413__$1;
(statearr_29422_29435[(2)] = null);

(statearr_29422_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (7))){
var inst_29409 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29423_29436 = state_29413__$1;
(statearr_29423_29436[(2)] = inst_29409);

(statearr_29423_29436[(1)] = (3));


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
});})(c__23477__auto__))
;
return ((function (switch__23415__auto__,c__23477__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23416__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23416__auto____0 = (function (){
var statearr_29427 = [null,null,null,null,null,null,null,null,null];
(statearr_29427[(0)] = cljs$core$async$reduce_$_state_machine__23416__auto__);

(statearr_29427[(1)] = (1));

return statearr_29427;
});
var cljs$core$async$reduce_$_state_machine__23416__auto____1 = (function (state_29413){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29428){if((e29428 instanceof Object)){
var ex__23419__auto__ = e29428;
var statearr_29429_29437 = state_29413;
(statearr_29429_29437[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29438 = state_29413;
state_29413 = G__29438;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23416__auto__ = function(state_29413){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23416__auto____1.call(this,state_29413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23416__auto____0;
cljs$core$async$reduce_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23416__auto____1;
return cljs$core$async$reduce_$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto__))
})();
var state__23479__auto__ = (function (){var statearr_29430 = f__23478__auto__.call(null);
(statearr_29430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto__);

return statearr_29430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto__))
);

return c__23477__auto__;
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
var G__29440 = arguments.length;
switch (G__29440) {
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
var c__23477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto__){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto__){
return (function (state_29465){
var state_val_29466 = (state_29465[(1)]);
if((state_val_29466 === (7))){
var inst_29447 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29467_29491 = state_29465__$1;
(statearr_29467_29491[(2)] = inst_29447);

(statearr_29467_29491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (1))){
var inst_29441 = cljs.core.seq.call(null,coll);
var inst_29442 = inst_29441;
var state_29465__$1 = (function (){var statearr_29468 = state_29465;
(statearr_29468[(7)] = inst_29442);

return statearr_29468;
})();
var statearr_29469_29492 = state_29465__$1;
(statearr_29469_29492[(2)] = null);

(statearr_29469_29492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (4))){
var inst_29442 = (state_29465[(7)]);
var inst_29445 = cljs.core.first.call(null,inst_29442);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29465__$1,(7),ch,inst_29445);
} else {
if((state_val_29466 === (13))){
var inst_29459 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29470_29493 = state_29465__$1;
(statearr_29470_29493[(2)] = inst_29459);

(statearr_29470_29493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (6))){
var inst_29450 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29450)){
var statearr_29471_29494 = state_29465__$1;
(statearr_29471_29494[(1)] = (8));

} else {
var statearr_29472_29495 = state_29465__$1;
(statearr_29472_29495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (3))){
var inst_29463 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29465__$1,inst_29463);
} else {
if((state_val_29466 === (12))){
var state_29465__$1 = state_29465;
var statearr_29473_29496 = state_29465__$1;
(statearr_29473_29496[(2)] = null);

(statearr_29473_29496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (2))){
var inst_29442 = (state_29465[(7)]);
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29442)){
var statearr_29474_29497 = state_29465__$1;
(statearr_29474_29497[(1)] = (4));

} else {
var statearr_29475_29498 = state_29465__$1;
(statearr_29475_29498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (11))){
var inst_29456 = cljs.core.async.close_BANG_.call(null,ch);
var state_29465__$1 = state_29465;
var statearr_29476_29499 = state_29465__$1;
(statearr_29476_29499[(2)] = inst_29456);

(statearr_29476_29499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (9))){
var state_29465__$1 = state_29465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29477_29500 = state_29465__$1;
(statearr_29477_29500[(1)] = (11));

} else {
var statearr_29478_29501 = state_29465__$1;
(statearr_29478_29501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (5))){
var inst_29442 = (state_29465[(7)]);
var state_29465__$1 = state_29465;
var statearr_29479_29502 = state_29465__$1;
(statearr_29479_29502[(2)] = inst_29442);

(statearr_29479_29502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (10))){
var inst_29461 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29480_29503 = state_29465__$1;
(statearr_29480_29503[(2)] = inst_29461);

(statearr_29480_29503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (8))){
var inst_29442 = (state_29465[(7)]);
var inst_29452 = cljs.core.next.call(null,inst_29442);
var inst_29442__$1 = inst_29452;
var state_29465__$1 = (function (){var statearr_29481 = state_29465;
(statearr_29481[(7)] = inst_29442__$1);

return statearr_29481;
})();
var statearr_29482_29504 = state_29465__$1;
(statearr_29482_29504[(2)] = null);

(statearr_29482_29504[(1)] = (2));


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
});})(c__23477__auto__))
;
return ((function (switch__23415__auto__,c__23477__auto__){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_29486 = [null,null,null,null,null,null,null,null];
(statearr_29486[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_29486[(1)] = (1));

return statearr_29486;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_29465){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29487){if((e29487 instanceof Object)){
var ex__23419__auto__ = e29487;
var statearr_29488_29505 = state_29465;
(statearr_29488_29505[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29506 = state_29465;
state_29465 = G__29506;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_29465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_29465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto__))
})();
var state__23479__auto__ = (function (){var statearr_29489 = f__23478__auto__.call(null);
(statearr_29489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto__);

return statearr_29489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto__))
);

return c__23477__auto__;
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

cljs.core.async.Mux = (function (){var obj29508 = {};
return obj29508;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__11336__auto__ = _;
if(and__11336__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__11336__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__11984__auto__ = (((_ == null))?null:_);
return (function (){var or__11348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29510 = {};
return obj29510;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
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
if(typeof cljs.core.async.t29732 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29732 = (function (mult,ch,cs,meta29733){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29733 = meta29733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29734,meta29733__$1){
var self__ = this;
var _29734__$1 = this;
return (new cljs.core.async.t29732(self__.mult,self__.ch,self__.cs,meta29733__$1));
});})(cs))
;

cljs.core.async.t29732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29734){
var self__ = this;
var _29734__$1 = this;
return self__.meta29733;
});})(cs))
;

cljs.core.async.t29732.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29732.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29732.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29732.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29732.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29732.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29733","meta29733",1776488162,null)], null);
});})(cs))
;

cljs.core.async.t29732.cljs$lang$type = true;

cljs.core.async.t29732.cljs$lang$ctorStr = "cljs.core.async/t29732";

cljs.core.async.t29732.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t29732");
});})(cs))
;

cljs.core.async.__GT_t29732 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29732(mult__$1,ch__$1,cs__$1,meta29733){
return (new cljs.core.async.t29732(mult__$1,ch__$1,cs__$1,meta29733));
});})(cs))
;

}

return (new cljs.core.async.t29732(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23477__auto___29953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___29953,cs,m,dchan,dctr,done){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___29953,cs,m,dchan,dctr,done){
return (function (state_29865){
var state_val_29866 = (state_29865[(1)]);
if((state_val_29866 === (7))){
var inst_29861 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29867_29954 = state_29865__$1;
(statearr_29867_29954[(2)] = inst_29861);

(statearr_29867_29954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (20))){
var inst_29766 = (state_29865[(7)]);
var inst_29776 = cljs.core.first.call(null,inst_29766);
var inst_29777 = cljs.core.nth.call(null,inst_29776,(0),null);
var inst_29778 = cljs.core.nth.call(null,inst_29776,(1),null);
var state_29865__$1 = (function (){var statearr_29868 = state_29865;
(statearr_29868[(8)] = inst_29777);

return statearr_29868;
})();
if(cljs.core.truth_(inst_29778)){
var statearr_29869_29955 = state_29865__$1;
(statearr_29869_29955[(1)] = (22));

} else {
var statearr_29870_29956 = state_29865__$1;
(statearr_29870_29956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (27))){
var inst_29808 = (state_29865[(9)]);
var inst_29737 = (state_29865[(10)]);
var inst_29806 = (state_29865[(11)]);
var inst_29813 = (state_29865[(12)]);
var inst_29813__$1 = cljs.core._nth.call(null,inst_29806,inst_29808);
var inst_29814 = cljs.core.async.put_BANG_.call(null,inst_29813__$1,inst_29737,done);
var state_29865__$1 = (function (){var statearr_29871 = state_29865;
(statearr_29871[(12)] = inst_29813__$1);

return statearr_29871;
})();
if(cljs.core.truth_(inst_29814)){
var statearr_29872_29957 = state_29865__$1;
(statearr_29872_29957[(1)] = (30));

} else {
var statearr_29873_29958 = state_29865__$1;
(statearr_29873_29958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (1))){
var state_29865__$1 = state_29865;
var statearr_29874_29959 = state_29865__$1;
(statearr_29874_29959[(2)] = null);

(statearr_29874_29959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (24))){
var inst_29766 = (state_29865[(7)]);
var inst_29783 = (state_29865[(2)]);
var inst_29784 = cljs.core.next.call(null,inst_29766);
var inst_29746 = inst_29784;
var inst_29747 = null;
var inst_29748 = (0);
var inst_29749 = (0);
var state_29865__$1 = (function (){var statearr_29875 = state_29865;
(statearr_29875[(13)] = inst_29746);

(statearr_29875[(14)] = inst_29749);

(statearr_29875[(15)] = inst_29783);

(statearr_29875[(16)] = inst_29748);

(statearr_29875[(17)] = inst_29747);

return statearr_29875;
})();
var statearr_29876_29960 = state_29865__$1;
(statearr_29876_29960[(2)] = null);

(statearr_29876_29960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (39))){
var state_29865__$1 = state_29865;
var statearr_29880_29961 = state_29865__$1;
(statearr_29880_29961[(2)] = null);

(statearr_29880_29961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (4))){
var inst_29737 = (state_29865[(10)]);
var inst_29737__$1 = (state_29865[(2)]);
var inst_29738 = (inst_29737__$1 == null);
var state_29865__$1 = (function (){var statearr_29881 = state_29865;
(statearr_29881[(10)] = inst_29737__$1);

return statearr_29881;
})();
if(cljs.core.truth_(inst_29738)){
var statearr_29882_29962 = state_29865__$1;
(statearr_29882_29962[(1)] = (5));

} else {
var statearr_29883_29963 = state_29865__$1;
(statearr_29883_29963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (15))){
var inst_29746 = (state_29865[(13)]);
var inst_29749 = (state_29865[(14)]);
var inst_29748 = (state_29865[(16)]);
var inst_29747 = (state_29865[(17)]);
var inst_29762 = (state_29865[(2)]);
var inst_29763 = (inst_29749 + (1));
var tmp29877 = inst_29746;
var tmp29878 = inst_29748;
var tmp29879 = inst_29747;
var inst_29746__$1 = tmp29877;
var inst_29747__$1 = tmp29879;
var inst_29748__$1 = tmp29878;
var inst_29749__$1 = inst_29763;
var state_29865__$1 = (function (){var statearr_29884 = state_29865;
(statearr_29884[(13)] = inst_29746__$1);

(statearr_29884[(18)] = inst_29762);

(statearr_29884[(14)] = inst_29749__$1);

(statearr_29884[(16)] = inst_29748__$1);

(statearr_29884[(17)] = inst_29747__$1);

return statearr_29884;
})();
var statearr_29885_29964 = state_29865__$1;
(statearr_29885_29964[(2)] = null);

(statearr_29885_29964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (21))){
var inst_29787 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29889_29965 = state_29865__$1;
(statearr_29889_29965[(2)] = inst_29787);

(statearr_29889_29965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (31))){
var inst_29813 = (state_29865[(12)]);
var inst_29817 = done.call(null,null);
var inst_29818 = cljs.core.async.untap_STAR_.call(null,m,inst_29813);
var state_29865__$1 = (function (){var statearr_29890 = state_29865;
(statearr_29890[(19)] = inst_29817);

return statearr_29890;
})();
var statearr_29891_29966 = state_29865__$1;
(statearr_29891_29966[(2)] = inst_29818);

(statearr_29891_29966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (32))){
var inst_29808 = (state_29865[(9)]);
var inst_29805 = (state_29865[(20)]);
var inst_29807 = (state_29865[(21)]);
var inst_29806 = (state_29865[(11)]);
var inst_29820 = (state_29865[(2)]);
var inst_29821 = (inst_29808 + (1));
var tmp29886 = inst_29805;
var tmp29887 = inst_29807;
var tmp29888 = inst_29806;
var inst_29805__$1 = tmp29886;
var inst_29806__$1 = tmp29888;
var inst_29807__$1 = tmp29887;
var inst_29808__$1 = inst_29821;
var state_29865__$1 = (function (){var statearr_29892 = state_29865;
(statearr_29892[(9)] = inst_29808__$1);

(statearr_29892[(20)] = inst_29805__$1);

(statearr_29892[(21)] = inst_29807__$1);

(statearr_29892[(22)] = inst_29820);

(statearr_29892[(11)] = inst_29806__$1);

return statearr_29892;
})();
var statearr_29893_29967 = state_29865__$1;
(statearr_29893_29967[(2)] = null);

(statearr_29893_29967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (40))){
var inst_29833 = (state_29865[(23)]);
var inst_29837 = done.call(null,null);
var inst_29838 = cljs.core.async.untap_STAR_.call(null,m,inst_29833);
var state_29865__$1 = (function (){var statearr_29894 = state_29865;
(statearr_29894[(24)] = inst_29837);

return statearr_29894;
})();
var statearr_29895_29968 = state_29865__$1;
(statearr_29895_29968[(2)] = inst_29838);

(statearr_29895_29968[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (33))){
var inst_29824 = (state_29865[(25)]);
var inst_29826 = cljs.core.chunked_seq_QMARK_.call(null,inst_29824);
var state_29865__$1 = state_29865;
if(inst_29826){
var statearr_29896_29969 = state_29865__$1;
(statearr_29896_29969[(1)] = (36));

} else {
var statearr_29897_29970 = state_29865__$1;
(statearr_29897_29970[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (13))){
var inst_29756 = (state_29865[(26)]);
var inst_29759 = cljs.core.async.close_BANG_.call(null,inst_29756);
var state_29865__$1 = state_29865;
var statearr_29898_29971 = state_29865__$1;
(statearr_29898_29971[(2)] = inst_29759);

(statearr_29898_29971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (22))){
var inst_29777 = (state_29865[(8)]);
var inst_29780 = cljs.core.async.close_BANG_.call(null,inst_29777);
var state_29865__$1 = state_29865;
var statearr_29899_29972 = state_29865__$1;
(statearr_29899_29972[(2)] = inst_29780);

(statearr_29899_29972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (36))){
var inst_29824 = (state_29865[(25)]);
var inst_29828 = cljs.core.chunk_first.call(null,inst_29824);
var inst_29829 = cljs.core.chunk_rest.call(null,inst_29824);
var inst_29830 = cljs.core.count.call(null,inst_29828);
var inst_29805 = inst_29829;
var inst_29806 = inst_29828;
var inst_29807 = inst_29830;
var inst_29808 = (0);
var state_29865__$1 = (function (){var statearr_29900 = state_29865;
(statearr_29900[(9)] = inst_29808);

(statearr_29900[(20)] = inst_29805);

(statearr_29900[(21)] = inst_29807);

(statearr_29900[(11)] = inst_29806);

return statearr_29900;
})();
var statearr_29901_29973 = state_29865__$1;
(statearr_29901_29973[(2)] = null);

(statearr_29901_29973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (41))){
var inst_29824 = (state_29865[(25)]);
var inst_29840 = (state_29865[(2)]);
var inst_29841 = cljs.core.next.call(null,inst_29824);
var inst_29805 = inst_29841;
var inst_29806 = null;
var inst_29807 = (0);
var inst_29808 = (0);
var state_29865__$1 = (function (){var statearr_29902 = state_29865;
(statearr_29902[(9)] = inst_29808);

(statearr_29902[(20)] = inst_29805);

(statearr_29902[(21)] = inst_29807);

(statearr_29902[(11)] = inst_29806);

(statearr_29902[(27)] = inst_29840);

return statearr_29902;
})();
var statearr_29903_29974 = state_29865__$1;
(statearr_29903_29974[(2)] = null);

(statearr_29903_29974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (43))){
var state_29865__$1 = state_29865;
var statearr_29904_29975 = state_29865__$1;
(statearr_29904_29975[(2)] = null);

(statearr_29904_29975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (29))){
var inst_29849 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29905_29976 = state_29865__$1;
(statearr_29905_29976[(2)] = inst_29849);

(statearr_29905_29976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (44))){
var inst_29858 = (state_29865[(2)]);
var state_29865__$1 = (function (){var statearr_29906 = state_29865;
(statearr_29906[(28)] = inst_29858);

return statearr_29906;
})();
var statearr_29907_29977 = state_29865__$1;
(statearr_29907_29977[(2)] = null);

(statearr_29907_29977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (6))){
var inst_29797 = (state_29865[(29)]);
var inst_29796 = cljs.core.deref.call(null,cs);
var inst_29797__$1 = cljs.core.keys.call(null,inst_29796);
var inst_29798 = cljs.core.count.call(null,inst_29797__$1);
var inst_29799 = cljs.core.reset_BANG_.call(null,dctr,inst_29798);
var inst_29804 = cljs.core.seq.call(null,inst_29797__$1);
var inst_29805 = inst_29804;
var inst_29806 = null;
var inst_29807 = (0);
var inst_29808 = (0);
var state_29865__$1 = (function (){var statearr_29908 = state_29865;
(statearr_29908[(9)] = inst_29808);

(statearr_29908[(20)] = inst_29805);

(statearr_29908[(29)] = inst_29797__$1);

(statearr_29908[(21)] = inst_29807);

(statearr_29908[(11)] = inst_29806);

(statearr_29908[(30)] = inst_29799);

return statearr_29908;
})();
var statearr_29909_29978 = state_29865__$1;
(statearr_29909_29978[(2)] = null);

(statearr_29909_29978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (28))){
var inst_29805 = (state_29865[(20)]);
var inst_29824 = (state_29865[(25)]);
var inst_29824__$1 = cljs.core.seq.call(null,inst_29805);
var state_29865__$1 = (function (){var statearr_29910 = state_29865;
(statearr_29910[(25)] = inst_29824__$1);

return statearr_29910;
})();
if(inst_29824__$1){
var statearr_29911_29979 = state_29865__$1;
(statearr_29911_29979[(1)] = (33));

} else {
var statearr_29912_29980 = state_29865__$1;
(statearr_29912_29980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (25))){
var inst_29808 = (state_29865[(9)]);
var inst_29807 = (state_29865[(21)]);
var inst_29810 = (inst_29808 < inst_29807);
var inst_29811 = inst_29810;
var state_29865__$1 = state_29865;
if(cljs.core.truth_(inst_29811)){
var statearr_29913_29981 = state_29865__$1;
(statearr_29913_29981[(1)] = (27));

} else {
var statearr_29914_29982 = state_29865__$1;
(statearr_29914_29982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (34))){
var state_29865__$1 = state_29865;
var statearr_29915_29983 = state_29865__$1;
(statearr_29915_29983[(2)] = null);

(statearr_29915_29983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (17))){
var state_29865__$1 = state_29865;
var statearr_29916_29984 = state_29865__$1;
(statearr_29916_29984[(2)] = null);

(statearr_29916_29984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (3))){
var inst_29863 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29865__$1,inst_29863);
} else {
if((state_val_29866 === (12))){
var inst_29792 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29917_29985 = state_29865__$1;
(statearr_29917_29985[(2)] = inst_29792);

(statearr_29917_29985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (2))){
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29865__$1,(4),ch);
} else {
if((state_val_29866 === (23))){
var state_29865__$1 = state_29865;
var statearr_29918_29986 = state_29865__$1;
(statearr_29918_29986[(2)] = null);

(statearr_29918_29986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (35))){
var inst_29847 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29919_29987 = state_29865__$1;
(statearr_29919_29987[(2)] = inst_29847);

(statearr_29919_29987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (19))){
var inst_29766 = (state_29865[(7)]);
var inst_29770 = cljs.core.chunk_first.call(null,inst_29766);
var inst_29771 = cljs.core.chunk_rest.call(null,inst_29766);
var inst_29772 = cljs.core.count.call(null,inst_29770);
var inst_29746 = inst_29771;
var inst_29747 = inst_29770;
var inst_29748 = inst_29772;
var inst_29749 = (0);
var state_29865__$1 = (function (){var statearr_29920 = state_29865;
(statearr_29920[(13)] = inst_29746);

(statearr_29920[(14)] = inst_29749);

(statearr_29920[(16)] = inst_29748);

(statearr_29920[(17)] = inst_29747);

return statearr_29920;
})();
var statearr_29921_29988 = state_29865__$1;
(statearr_29921_29988[(2)] = null);

(statearr_29921_29988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (11))){
var inst_29746 = (state_29865[(13)]);
var inst_29766 = (state_29865[(7)]);
var inst_29766__$1 = cljs.core.seq.call(null,inst_29746);
var state_29865__$1 = (function (){var statearr_29922 = state_29865;
(statearr_29922[(7)] = inst_29766__$1);

return statearr_29922;
})();
if(inst_29766__$1){
var statearr_29923_29989 = state_29865__$1;
(statearr_29923_29989[(1)] = (16));

} else {
var statearr_29924_29990 = state_29865__$1;
(statearr_29924_29990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (9))){
var inst_29794 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29925_29991 = state_29865__$1;
(statearr_29925_29991[(2)] = inst_29794);

(statearr_29925_29991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (5))){
var inst_29744 = cljs.core.deref.call(null,cs);
var inst_29745 = cljs.core.seq.call(null,inst_29744);
var inst_29746 = inst_29745;
var inst_29747 = null;
var inst_29748 = (0);
var inst_29749 = (0);
var state_29865__$1 = (function (){var statearr_29926 = state_29865;
(statearr_29926[(13)] = inst_29746);

(statearr_29926[(14)] = inst_29749);

(statearr_29926[(16)] = inst_29748);

(statearr_29926[(17)] = inst_29747);

return statearr_29926;
})();
var statearr_29927_29992 = state_29865__$1;
(statearr_29927_29992[(2)] = null);

(statearr_29927_29992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (14))){
var state_29865__$1 = state_29865;
var statearr_29928_29993 = state_29865__$1;
(statearr_29928_29993[(2)] = null);

(statearr_29928_29993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (45))){
var inst_29855 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29929_29994 = state_29865__$1;
(statearr_29929_29994[(2)] = inst_29855);

(statearr_29929_29994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (26))){
var inst_29797 = (state_29865[(29)]);
var inst_29851 = (state_29865[(2)]);
var inst_29852 = cljs.core.seq.call(null,inst_29797);
var state_29865__$1 = (function (){var statearr_29930 = state_29865;
(statearr_29930[(31)] = inst_29851);

return statearr_29930;
})();
if(inst_29852){
var statearr_29931_29995 = state_29865__$1;
(statearr_29931_29995[(1)] = (42));

} else {
var statearr_29932_29996 = state_29865__$1;
(statearr_29932_29996[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (16))){
var inst_29766 = (state_29865[(7)]);
var inst_29768 = cljs.core.chunked_seq_QMARK_.call(null,inst_29766);
var state_29865__$1 = state_29865;
if(inst_29768){
var statearr_29933_29997 = state_29865__$1;
(statearr_29933_29997[(1)] = (19));

} else {
var statearr_29934_29998 = state_29865__$1;
(statearr_29934_29998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (38))){
var inst_29844 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29935_29999 = state_29865__$1;
(statearr_29935_29999[(2)] = inst_29844);

(statearr_29935_29999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (30))){
var state_29865__$1 = state_29865;
var statearr_29936_30000 = state_29865__$1;
(statearr_29936_30000[(2)] = null);

(statearr_29936_30000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (10))){
var inst_29749 = (state_29865[(14)]);
var inst_29747 = (state_29865[(17)]);
var inst_29755 = cljs.core._nth.call(null,inst_29747,inst_29749);
var inst_29756 = cljs.core.nth.call(null,inst_29755,(0),null);
var inst_29757 = cljs.core.nth.call(null,inst_29755,(1),null);
var state_29865__$1 = (function (){var statearr_29937 = state_29865;
(statearr_29937[(26)] = inst_29756);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29757)){
var statearr_29938_30001 = state_29865__$1;
(statearr_29938_30001[(1)] = (13));

} else {
var statearr_29939_30002 = state_29865__$1;
(statearr_29939_30002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (18))){
var inst_29790 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29940_30003 = state_29865__$1;
(statearr_29940_30003[(2)] = inst_29790);

(statearr_29940_30003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (42))){
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29865__$1,(45),dchan);
} else {
if((state_val_29866 === (37))){
var inst_29737 = (state_29865[(10)]);
var inst_29833 = (state_29865[(23)]);
var inst_29824 = (state_29865[(25)]);
var inst_29833__$1 = cljs.core.first.call(null,inst_29824);
var inst_29834 = cljs.core.async.put_BANG_.call(null,inst_29833__$1,inst_29737,done);
var state_29865__$1 = (function (){var statearr_29941 = state_29865;
(statearr_29941[(23)] = inst_29833__$1);

return statearr_29941;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29942_30004 = state_29865__$1;
(statearr_29942_30004[(1)] = (39));

} else {
var statearr_29943_30005 = state_29865__$1;
(statearr_29943_30005[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (8))){
var inst_29749 = (state_29865[(14)]);
var inst_29748 = (state_29865[(16)]);
var inst_29751 = (inst_29749 < inst_29748);
var inst_29752 = inst_29751;
var state_29865__$1 = state_29865;
if(cljs.core.truth_(inst_29752)){
var statearr_29944_30006 = state_29865__$1;
(statearr_29944_30006[(1)] = (10));

} else {
var statearr_29945_30007 = state_29865__$1;
(statearr_29945_30007[(1)] = (11));

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
});})(c__23477__auto___29953,cs,m,dchan,dctr,done))
;
return ((function (switch__23415__auto__,c__23477__auto___29953,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23416__auto__ = null;
var cljs$core$async$mult_$_state_machine__23416__auto____0 = (function (){
var statearr_29949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29949[(0)] = cljs$core$async$mult_$_state_machine__23416__auto__);

(statearr_29949[(1)] = (1));

return statearr_29949;
});
var cljs$core$async$mult_$_state_machine__23416__auto____1 = (function (state_29865){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_29865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e29950){if((e29950 instanceof Object)){
var ex__23419__auto__ = e29950;
var statearr_29951_30008 = state_29865;
(statearr_29951_30008[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30009 = state_29865;
state_29865 = G__30009;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23416__auto__ = function(state_29865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23416__auto____1.call(this,state_29865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23416__auto____0;
cljs$core$async$mult_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23416__auto____1;
return cljs$core$async$mult_$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___29953,cs,m,dchan,dctr,done))
})();
var state__23479__auto__ = (function (){var statearr_29952 = f__23478__auto__.call(null);
(statearr_29952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___29953);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___29953,cs,m,dchan,dctr,done))
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
var G__30011 = arguments.length;
switch (G__30011) {
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

cljs.core.async.Mix = (function (){var obj30014 = {};
return obj30014;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__11336__auto__ = m;
if(and__11336__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__11984__auto__ = (((m == null))?null:m);
return (function (){var or__11348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__12388__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12388__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30019){
var map__30020 = p__30019;
var map__30020__$1 = ((cljs.core.seq_QMARK_.call(null,map__30020))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);
var opts = map__30020__$1;
var statearr_30021_30024 = state;
(statearr_30021_30024[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30020,map__30020__$1,opts){
return (function (val){
var statearr_30022_30025 = state;
(statearr_30022_30025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30020,map__30020__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30023_30026 = state;
(statearr_30023_30026[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30015){
var G__30016 = cljs.core.first.call(null,seq30015);
var seq30015__$1 = cljs.core.next.call(null,seq30015);
var G__30017 = cljs.core.first.call(null,seq30015__$1);
var seq30015__$2 = cljs.core.next.call(null,seq30015__$1);
var G__30018 = cljs.core.first.call(null,seq30015__$2);
var seq30015__$3 = cljs.core.next.call(null,seq30015__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30016,G__30017,G__30018,seq30015__$3);
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
if(typeof cljs.core.async.t30146 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30146 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30147){
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
this.meta30147 = meta30147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30148,meta30147__$1){
var self__ = this;
var _30148__$1 = this;
return (new cljs.core.async.t30146(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30147__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30148){
var self__ = this;
var _30148__$1 = this;
return self__.meta30147;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30146.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30147","meta30147",-1730398299,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30146.cljs$lang$type = true;

cljs.core.async.t30146.cljs$lang$ctorStr = "cljs.core.async/t30146";

cljs.core.async.t30146.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30146");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30146 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30147){
return (new cljs.core.async.t30146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30147));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30146(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23477__auto___30265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30218){
var state_val_30219 = (state_30218[(1)]);
if((state_val_30219 === (7))){
var inst_30162 = (state_30218[(7)]);
var inst_30167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30162);
var state_30218__$1 = state_30218;
var statearr_30220_30266 = state_30218__$1;
(statearr_30220_30266[(2)] = inst_30167);

(statearr_30220_30266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (20))){
var inst_30177 = (state_30218[(8)]);
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30218__$1,(23),out,inst_30177);
} else {
if((state_val_30219 === (1))){
var inst_30152 = (state_30218[(9)]);
var inst_30152__$1 = calc_state.call(null);
var inst_30153 = cljs.core.seq_QMARK_.call(null,inst_30152__$1);
var state_30218__$1 = (function (){var statearr_30221 = state_30218;
(statearr_30221[(9)] = inst_30152__$1);

return statearr_30221;
})();
if(inst_30153){
var statearr_30222_30267 = state_30218__$1;
(statearr_30222_30267[(1)] = (2));

} else {
var statearr_30223_30268 = state_30218__$1;
(statearr_30223_30268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (24))){
var inst_30170 = (state_30218[(10)]);
var inst_30162 = inst_30170;
var state_30218__$1 = (function (){var statearr_30224 = state_30218;
(statearr_30224[(7)] = inst_30162);

return statearr_30224;
})();
var statearr_30225_30269 = state_30218__$1;
(statearr_30225_30269[(2)] = null);

(statearr_30225_30269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (4))){
var inst_30152 = (state_30218[(9)]);
var inst_30158 = (state_30218[(2)]);
var inst_30159 = cljs.core.get.call(null,inst_30158,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30160 = cljs.core.get.call(null,inst_30158,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30161 = cljs.core.get.call(null,inst_30158,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30162 = inst_30152;
var state_30218__$1 = (function (){var statearr_30226 = state_30218;
(statearr_30226[(11)] = inst_30159);

(statearr_30226[(12)] = inst_30161);

(statearr_30226[(13)] = inst_30160);

(statearr_30226[(7)] = inst_30162);

return statearr_30226;
})();
var statearr_30227_30270 = state_30218__$1;
(statearr_30227_30270[(2)] = null);

(statearr_30227_30270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (15))){
var state_30218__$1 = state_30218;
var statearr_30228_30271 = state_30218__$1;
(statearr_30228_30271[(2)] = null);

(statearr_30228_30271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (21))){
var inst_30170 = (state_30218[(10)]);
var inst_30162 = inst_30170;
var state_30218__$1 = (function (){var statearr_30229 = state_30218;
(statearr_30229[(7)] = inst_30162);

return statearr_30229;
})();
var statearr_30230_30272 = state_30218__$1;
(statearr_30230_30272[(2)] = null);

(statearr_30230_30272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (13))){
var inst_30214 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30231_30273 = state_30218__$1;
(statearr_30231_30273[(2)] = inst_30214);

(statearr_30231_30273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (22))){
var inst_30212 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30232_30274 = state_30218__$1;
(statearr_30232_30274[(2)] = inst_30212);

(statearr_30232_30274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (6))){
var inst_30216 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30218__$1,inst_30216);
} else {
if((state_val_30219 === (25))){
var state_30218__$1 = state_30218;
var statearr_30233_30275 = state_30218__$1;
(statearr_30233_30275[(2)] = null);

(statearr_30233_30275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (17))){
var inst_30192 = (state_30218[(14)]);
var state_30218__$1 = state_30218;
var statearr_30234_30276 = state_30218__$1;
(statearr_30234_30276[(2)] = inst_30192);

(statearr_30234_30276[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (3))){
var inst_30152 = (state_30218[(9)]);
var state_30218__$1 = state_30218;
var statearr_30235_30277 = state_30218__$1;
(statearr_30235_30277[(2)] = inst_30152);

(statearr_30235_30277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (12))){
var inst_30192 = (state_30218[(14)]);
var inst_30178 = (state_30218[(15)]);
var inst_30171 = (state_30218[(16)]);
var inst_30192__$1 = inst_30171.call(null,inst_30178);
var state_30218__$1 = (function (){var statearr_30236 = state_30218;
(statearr_30236[(14)] = inst_30192__$1);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30192__$1)){
var statearr_30237_30278 = state_30218__$1;
(statearr_30237_30278[(1)] = (17));

} else {
var statearr_30238_30279 = state_30218__$1;
(statearr_30238_30279[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (2))){
var inst_30152 = (state_30218[(9)]);
var inst_30155 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30152);
var state_30218__$1 = state_30218;
var statearr_30239_30280 = state_30218__$1;
(statearr_30239_30280[(2)] = inst_30155);

(statearr_30239_30280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (23))){
var inst_30203 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
if(cljs.core.truth_(inst_30203)){
var statearr_30240_30281 = state_30218__$1;
(statearr_30240_30281[(1)] = (24));

} else {
var statearr_30241_30282 = state_30218__$1;
(statearr_30241_30282[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (19))){
var inst_30200 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
if(cljs.core.truth_(inst_30200)){
var statearr_30242_30283 = state_30218__$1;
(statearr_30242_30283[(1)] = (20));

} else {
var statearr_30243_30284 = state_30218__$1;
(statearr_30243_30284[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (11))){
var inst_30177 = (state_30218[(8)]);
var inst_30183 = (inst_30177 == null);
var state_30218__$1 = state_30218;
if(cljs.core.truth_(inst_30183)){
var statearr_30244_30285 = state_30218__$1;
(statearr_30244_30285[(1)] = (14));

} else {
var statearr_30245_30286 = state_30218__$1;
(statearr_30245_30286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (9))){
var inst_30170 = (state_30218[(10)]);
var inst_30170__$1 = (state_30218[(2)]);
var inst_30171 = cljs.core.get.call(null,inst_30170__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30172 = cljs.core.get.call(null,inst_30170__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30173 = cljs.core.get.call(null,inst_30170__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30218__$1 = (function (){var statearr_30246 = state_30218;
(statearr_30246[(10)] = inst_30170__$1);

(statearr_30246[(17)] = inst_30172);

(statearr_30246[(16)] = inst_30171);

return statearr_30246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30218__$1,(10),inst_30173);
} else {
if((state_val_30219 === (5))){
var inst_30162 = (state_30218[(7)]);
var inst_30165 = cljs.core.seq_QMARK_.call(null,inst_30162);
var state_30218__$1 = state_30218;
if(inst_30165){
var statearr_30247_30287 = state_30218__$1;
(statearr_30247_30287[(1)] = (7));

} else {
var statearr_30248_30288 = state_30218__$1;
(statearr_30248_30288[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (14))){
var inst_30178 = (state_30218[(15)]);
var inst_30185 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30178);
var state_30218__$1 = state_30218;
var statearr_30249_30289 = state_30218__$1;
(statearr_30249_30289[(2)] = inst_30185);

(statearr_30249_30289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (26))){
var inst_30208 = (state_30218[(2)]);
var state_30218__$1 = state_30218;
var statearr_30250_30290 = state_30218__$1;
(statearr_30250_30290[(2)] = inst_30208);

(statearr_30250_30290[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (16))){
var inst_30188 = (state_30218[(2)]);
var inst_30189 = calc_state.call(null);
var inst_30162 = inst_30189;
var state_30218__$1 = (function (){var statearr_30251 = state_30218;
(statearr_30251[(18)] = inst_30188);

(statearr_30251[(7)] = inst_30162);

return statearr_30251;
})();
var statearr_30252_30291 = state_30218__$1;
(statearr_30252_30291[(2)] = null);

(statearr_30252_30291[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (10))){
var inst_30178 = (state_30218[(15)]);
var inst_30177 = (state_30218[(8)]);
var inst_30176 = (state_30218[(2)]);
var inst_30177__$1 = cljs.core.nth.call(null,inst_30176,(0),null);
var inst_30178__$1 = cljs.core.nth.call(null,inst_30176,(1),null);
var inst_30179 = (inst_30177__$1 == null);
var inst_30180 = cljs.core._EQ_.call(null,inst_30178__$1,change);
var inst_30181 = (inst_30179) || (inst_30180);
var state_30218__$1 = (function (){var statearr_30253 = state_30218;
(statearr_30253[(15)] = inst_30178__$1);

(statearr_30253[(8)] = inst_30177__$1);

return statearr_30253;
})();
if(cljs.core.truth_(inst_30181)){
var statearr_30254_30292 = state_30218__$1;
(statearr_30254_30292[(1)] = (11));

} else {
var statearr_30255_30293 = state_30218__$1;
(statearr_30255_30293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (18))){
var inst_30172 = (state_30218[(17)]);
var inst_30178 = (state_30218[(15)]);
var inst_30171 = (state_30218[(16)]);
var inst_30195 = cljs.core.empty_QMARK_.call(null,inst_30171);
var inst_30196 = inst_30172.call(null,inst_30178);
var inst_30197 = cljs.core.not.call(null,inst_30196);
var inst_30198 = (inst_30195) && (inst_30197);
var state_30218__$1 = state_30218;
var statearr_30256_30294 = state_30218__$1;
(statearr_30256_30294[(2)] = inst_30198);

(statearr_30256_30294[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30219 === (8))){
var inst_30162 = (state_30218[(7)]);
var state_30218__$1 = state_30218;
var statearr_30257_30295 = state_30218__$1;
(statearr_30257_30295[(2)] = inst_30162);

(statearr_30257_30295[(1)] = (9));


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
});})(c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23415__auto__,c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23416__auto__ = null;
var cljs$core$async$mix_$_state_machine__23416__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30261[(0)] = cljs$core$async$mix_$_state_machine__23416__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var cljs$core$async$mix_$_state_machine__23416__auto____1 = (function (state_30218){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__23419__auto__ = e30262;
var statearr_30263_30296 = state_30218;
(statearr_30263_30296[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30297 = state_30218;
state_30218 = G__30297;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23416__auto__ = function(state_30218){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23416__auto____1.call(this,state_30218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23416__auto____0;
cljs$core$async$mix_$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23416__auto____1;
return cljs$core$async$mix_$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23479__auto__ = (function (){var statearr_30264 = f__23478__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30265);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30265,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30299 = {};
return obj30299;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__11336__auto__ = p;
if(and__11336__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__11336__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__11984__auto__ = (((p == null))?null:p);
return (function (){var or__11348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__11336__auto__ = p;
if(and__11336__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__11336__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__11984__auto__ = (((p == null))?null:p);
return (function (){var or__11348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30301 = arguments.length;
switch (G__30301) {
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
if((function (){var and__11336__auto__ = p;
if(and__11336__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__11336__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__11984__auto__ = (((p == null))?null:p);
return (function (){var or__11348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__11336__auto__ = p;
if(and__11336__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__11336__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__11984__auto__ = (((p == null))?null:p);
return (function (){var or__11348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
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
var G__30305 = arguments.length;
switch (G__30305) {
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
var or__11348__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11348__auto__,mults){
return (function (p1__30303_SHARP_){
if(cljs.core.truth_(p1__30303_SHARP_.call(null,topic))){
return p1__30303_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11348__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30306 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30307 = meta30307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30308,meta30307__$1){
var self__ = this;
var _30308__$1 = this;
return (new cljs.core.async.t30306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30308){
var self__ = this;
var _30308__$1 = this;
return self__.meta30307;
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30307","meta30307",1276656583,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30306.cljs$lang$type = true;

cljs.core.async.t30306.cljs$lang$ctorStr = "cljs.core.async/t30306";

cljs.core.async.t30306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30307){
return (new cljs.core.async.t30306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23477__auto___30429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30429,mults,ensure_mult,p){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30429,mults,ensure_mult,p){
return (function (state_30380){
var state_val_30381 = (state_30380[(1)]);
if((state_val_30381 === (7))){
var inst_30376 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30382_30430 = state_30380__$1;
(statearr_30382_30430[(2)] = inst_30376);

(statearr_30382_30430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (20))){
var state_30380__$1 = state_30380;
var statearr_30383_30431 = state_30380__$1;
(statearr_30383_30431[(2)] = null);

(statearr_30383_30431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (1))){
var state_30380__$1 = state_30380;
var statearr_30384_30432 = state_30380__$1;
(statearr_30384_30432[(2)] = null);

(statearr_30384_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (24))){
var inst_30359 = (state_30380[(7)]);
var inst_30368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30359);
var state_30380__$1 = state_30380;
var statearr_30385_30433 = state_30380__$1;
(statearr_30385_30433[(2)] = inst_30368);

(statearr_30385_30433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (4))){
var inst_30311 = (state_30380[(8)]);
var inst_30311__$1 = (state_30380[(2)]);
var inst_30312 = (inst_30311__$1 == null);
var state_30380__$1 = (function (){var statearr_30386 = state_30380;
(statearr_30386[(8)] = inst_30311__$1);

return statearr_30386;
})();
if(cljs.core.truth_(inst_30312)){
var statearr_30387_30434 = state_30380__$1;
(statearr_30387_30434[(1)] = (5));

} else {
var statearr_30388_30435 = state_30380__$1;
(statearr_30388_30435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (15))){
var inst_30353 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30389_30436 = state_30380__$1;
(statearr_30389_30436[(2)] = inst_30353);

(statearr_30389_30436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (21))){
var inst_30373 = (state_30380[(2)]);
var state_30380__$1 = (function (){var statearr_30390 = state_30380;
(statearr_30390[(9)] = inst_30373);

return statearr_30390;
})();
var statearr_30391_30437 = state_30380__$1;
(statearr_30391_30437[(2)] = null);

(statearr_30391_30437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (13))){
var inst_30335 = (state_30380[(10)]);
var inst_30337 = cljs.core.chunked_seq_QMARK_.call(null,inst_30335);
var state_30380__$1 = state_30380;
if(inst_30337){
var statearr_30392_30438 = state_30380__$1;
(statearr_30392_30438[(1)] = (16));

} else {
var statearr_30393_30439 = state_30380__$1;
(statearr_30393_30439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (22))){
var inst_30365 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
if(cljs.core.truth_(inst_30365)){
var statearr_30394_30440 = state_30380__$1;
(statearr_30394_30440[(1)] = (23));

} else {
var statearr_30395_30441 = state_30380__$1;
(statearr_30395_30441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (6))){
var inst_30359 = (state_30380[(7)]);
var inst_30311 = (state_30380[(8)]);
var inst_30361 = (state_30380[(11)]);
var inst_30359__$1 = topic_fn.call(null,inst_30311);
var inst_30360 = cljs.core.deref.call(null,mults);
var inst_30361__$1 = cljs.core.get.call(null,inst_30360,inst_30359__$1);
var state_30380__$1 = (function (){var statearr_30396 = state_30380;
(statearr_30396[(7)] = inst_30359__$1);

(statearr_30396[(11)] = inst_30361__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30361__$1)){
var statearr_30397_30442 = state_30380__$1;
(statearr_30397_30442[(1)] = (19));

} else {
var statearr_30398_30443 = state_30380__$1;
(statearr_30398_30443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (25))){
var inst_30370 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30399_30444 = state_30380__$1;
(statearr_30399_30444[(2)] = inst_30370);

(statearr_30399_30444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (17))){
var inst_30335 = (state_30380[(10)]);
var inst_30344 = cljs.core.first.call(null,inst_30335);
var inst_30345 = cljs.core.async.muxch_STAR_.call(null,inst_30344);
var inst_30346 = cljs.core.async.close_BANG_.call(null,inst_30345);
var inst_30347 = cljs.core.next.call(null,inst_30335);
var inst_30321 = inst_30347;
var inst_30322 = null;
var inst_30323 = (0);
var inst_30324 = (0);
var state_30380__$1 = (function (){var statearr_30400 = state_30380;
(statearr_30400[(12)] = inst_30323);

(statearr_30400[(13)] = inst_30322);

(statearr_30400[(14)] = inst_30321);

(statearr_30400[(15)] = inst_30346);

(statearr_30400[(16)] = inst_30324);

return statearr_30400;
})();
var statearr_30401_30445 = state_30380__$1;
(statearr_30401_30445[(2)] = null);

(statearr_30401_30445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (3))){
var inst_30378 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30380__$1,inst_30378);
} else {
if((state_val_30381 === (12))){
var inst_30355 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30402_30446 = state_30380__$1;
(statearr_30402_30446[(2)] = inst_30355);

(statearr_30402_30446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (2))){
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30380__$1,(4),ch);
} else {
if((state_val_30381 === (23))){
var state_30380__$1 = state_30380;
var statearr_30403_30447 = state_30380__$1;
(statearr_30403_30447[(2)] = null);

(statearr_30403_30447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (19))){
var inst_30311 = (state_30380[(8)]);
var inst_30361 = (state_30380[(11)]);
var inst_30363 = cljs.core.async.muxch_STAR_.call(null,inst_30361);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30380__$1,(22),inst_30363,inst_30311);
} else {
if((state_val_30381 === (11))){
var inst_30335 = (state_30380[(10)]);
var inst_30321 = (state_30380[(14)]);
var inst_30335__$1 = cljs.core.seq.call(null,inst_30321);
var state_30380__$1 = (function (){var statearr_30404 = state_30380;
(statearr_30404[(10)] = inst_30335__$1);

return statearr_30404;
})();
if(inst_30335__$1){
var statearr_30405_30448 = state_30380__$1;
(statearr_30405_30448[(1)] = (13));

} else {
var statearr_30406_30449 = state_30380__$1;
(statearr_30406_30449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (9))){
var inst_30357 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30407_30450 = state_30380__$1;
(statearr_30407_30450[(2)] = inst_30357);

(statearr_30407_30450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (5))){
var inst_30318 = cljs.core.deref.call(null,mults);
var inst_30319 = cljs.core.vals.call(null,inst_30318);
var inst_30320 = cljs.core.seq.call(null,inst_30319);
var inst_30321 = inst_30320;
var inst_30322 = null;
var inst_30323 = (0);
var inst_30324 = (0);
var state_30380__$1 = (function (){var statearr_30408 = state_30380;
(statearr_30408[(12)] = inst_30323);

(statearr_30408[(13)] = inst_30322);

(statearr_30408[(14)] = inst_30321);

(statearr_30408[(16)] = inst_30324);

return statearr_30408;
})();
var statearr_30409_30451 = state_30380__$1;
(statearr_30409_30451[(2)] = null);

(statearr_30409_30451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (14))){
var state_30380__$1 = state_30380;
var statearr_30413_30452 = state_30380__$1;
(statearr_30413_30452[(2)] = null);

(statearr_30413_30452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (16))){
var inst_30335 = (state_30380[(10)]);
var inst_30339 = cljs.core.chunk_first.call(null,inst_30335);
var inst_30340 = cljs.core.chunk_rest.call(null,inst_30335);
var inst_30341 = cljs.core.count.call(null,inst_30339);
var inst_30321 = inst_30340;
var inst_30322 = inst_30339;
var inst_30323 = inst_30341;
var inst_30324 = (0);
var state_30380__$1 = (function (){var statearr_30414 = state_30380;
(statearr_30414[(12)] = inst_30323);

(statearr_30414[(13)] = inst_30322);

(statearr_30414[(14)] = inst_30321);

(statearr_30414[(16)] = inst_30324);

return statearr_30414;
})();
var statearr_30415_30453 = state_30380__$1;
(statearr_30415_30453[(2)] = null);

(statearr_30415_30453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (10))){
var inst_30323 = (state_30380[(12)]);
var inst_30322 = (state_30380[(13)]);
var inst_30321 = (state_30380[(14)]);
var inst_30324 = (state_30380[(16)]);
var inst_30329 = cljs.core._nth.call(null,inst_30322,inst_30324);
var inst_30330 = cljs.core.async.muxch_STAR_.call(null,inst_30329);
var inst_30331 = cljs.core.async.close_BANG_.call(null,inst_30330);
var inst_30332 = (inst_30324 + (1));
var tmp30410 = inst_30323;
var tmp30411 = inst_30322;
var tmp30412 = inst_30321;
var inst_30321__$1 = tmp30412;
var inst_30322__$1 = tmp30411;
var inst_30323__$1 = tmp30410;
var inst_30324__$1 = inst_30332;
var state_30380__$1 = (function (){var statearr_30416 = state_30380;
(statearr_30416[(12)] = inst_30323__$1);

(statearr_30416[(13)] = inst_30322__$1);

(statearr_30416[(14)] = inst_30321__$1);

(statearr_30416[(16)] = inst_30324__$1);

(statearr_30416[(17)] = inst_30331);

return statearr_30416;
})();
var statearr_30417_30454 = state_30380__$1;
(statearr_30417_30454[(2)] = null);

(statearr_30417_30454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (18))){
var inst_30350 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30418_30455 = state_30380__$1;
(statearr_30418_30455[(2)] = inst_30350);

(statearr_30418_30455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (8))){
var inst_30323 = (state_30380[(12)]);
var inst_30324 = (state_30380[(16)]);
var inst_30326 = (inst_30324 < inst_30323);
var inst_30327 = inst_30326;
var state_30380__$1 = state_30380;
if(cljs.core.truth_(inst_30327)){
var statearr_30419_30456 = state_30380__$1;
(statearr_30419_30456[(1)] = (10));

} else {
var statearr_30420_30457 = state_30380__$1;
(statearr_30420_30457[(1)] = (11));

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
});})(c__23477__auto___30429,mults,ensure_mult,p))
;
return ((function (switch__23415__auto__,c__23477__auto___30429,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_30380){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__23419__auto__ = e30425;
var statearr_30426_30458 = state_30380;
(statearr_30426_30458[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30459 = state_30380;
state_30380 = G__30459;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_30380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_30380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30429,mults,ensure_mult,p))
})();
var state__23479__auto__ = (function (){var statearr_30427 = f__23478__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30429);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30429,mults,ensure_mult,p))
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
var G__30461 = arguments.length;
switch (G__30461) {
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
var G__30464 = arguments.length;
switch (G__30464) {
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
var G__30467 = arguments.length;
switch (G__30467) {
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
var c__23477__auto___30537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30506){
var state_val_30507 = (state_30506[(1)]);
if((state_val_30507 === (7))){
var state_30506__$1 = state_30506;
var statearr_30508_30538 = state_30506__$1;
(statearr_30508_30538[(2)] = null);

(statearr_30508_30538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (1))){
var state_30506__$1 = state_30506;
var statearr_30509_30539 = state_30506__$1;
(statearr_30509_30539[(2)] = null);

(statearr_30509_30539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (4))){
var inst_30470 = (state_30506[(7)]);
var inst_30472 = (inst_30470 < cnt);
var state_30506__$1 = state_30506;
if(cljs.core.truth_(inst_30472)){
var statearr_30510_30540 = state_30506__$1;
(statearr_30510_30540[(1)] = (6));

} else {
var statearr_30511_30541 = state_30506__$1;
(statearr_30511_30541[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (15))){
var inst_30502 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30512_30542 = state_30506__$1;
(statearr_30512_30542[(2)] = inst_30502);

(statearr_30512_30542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (13))){
var inst_30495 = cljs.core.async.close_BANG_.call(null,out);
var state_30506__$1 = state_30506;
var statearr_30513_30543 = state_30506__$1;
(statearr_30513_30543[(2)] = inst_30495);

(statearr_30513_30543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (6))){
var state_30506__$1 = state_30506;
var statearr_30514_30544 = state_30506__$1;
(statearr_30514_30544[(2)] = null);

(statearr_30514_30544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (3))){
var inst_30504 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30506__$1,inst_30504);
} else {
if((state_val_30507 === (12))){
var inst_30492 = (state_30506[(8)]);
var inst_30492__$1 = (state_30506[(2)]);
var inst_30493 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30492__$1);
var state_30506__$1 = (function (){var statearr_30515 = state_30506;
(statearr_30515[(8)] = inst_30492__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30493)){
var statearr_30516_30545 = state_30506__$1;
(statearr_30516_30545[(1)] = (13));

} else {
var statearr_30517_30546 = state_30506__$1;
(statearr_30517_30546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (2))){
var inst_30469 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30470 = (0);
var state_30506__$1 = (function (){var statearr_30518 = state_30506;
(statearr_30518[(7)] = inst_30470);

(statearr_30518[(9)] = inst_30469);

return statearr_30518;
})();
var statearr_30519_30547 = state_30506__$1;
(statearr_30519_30547[(2)] = null);

(statearr_30519_30547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (11))){
var inst_30470 = (state_30506[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30506,(10),Object,null,(9));
var inst_30479 = chs__$1.call(null,inst_30470);
var inst_30480 = done.call(null,inst_30470);
var inst_30481 = cljs.core.async.take_BANG_.call(null,inst_30479,inst_30480);
var state_30506__$1 = state_30506;
var statearr_30520_30548 = state_30506__$1;
(statearr_30520_30548[(2)] = inst_30481);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30506__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (9))){
var inst_30470 = (state_30506[(7)]);
var inst_30483 = (state_30506[(2)]);
var inst_30484 = (inst_30470 + (1));
var inst_30470__$1 = inst_30484;
var state_30506__$1 = (function (){var statearr_30521 = state_30506;
(statearr_30521[(10)] = inst_30483);

(statearr_30521[(7)] = inst_30470__$1);

return statearr_30521;
})();
var statearr_30522_30549 = state_30506__$1;
(statearr_30522_30549[(2)] = null);

(statearr_30522_30549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (5))){
var inst_30490 = (state_30506[(2)]);
var state_30506__$1 = (function (){var statearr_30523 = state_30506;
(statearr_30523[(11)] = inst_30490);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30506__$1,(12),dchan);
} else {
if((state_val_30507 === (14))){
var inst_30492 = (state_30506[(8)]);
var inst_30497 = cljs.core.apply.call(null,f,inst_30492);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30506__$1,(16),out,inst_30497);
} else {
if((state_val_30507 === (16))){
var inst_30499 = (state_30506[(2)]);
var state_30506__$1 = (function (){var statearr_30524 = state_30506;
(statearr_30524[(12)] = inst_30499);

return statearr_30524;
})();
var statearr_30525_30550 = state_30506__$1;
(statearr_30525_30550[(2)] = null);

(statearr_30525_30550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (10))){
var inst_30474 = (state_30506[(2)]);
var inst_30475 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30506__$1 = (function (){var statearr_30526 = state_30506;
(statearr_30526[(13)] = inst_30474);

return statearr_30526;
})();
var statearr_30527_30551 = state_30506__$1;
(statearr_30527_30551[(2)] = inst_30475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30506__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (8))){
var inst_30488 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30528_30552 = state_30506__$1;
(statearr_30528_30552[(2)] = inst_30488);

(statearr_30528_30552[(1)] = (5));


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
});})(c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23415__auto__,c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_30506){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object)){
var ex__23419__auto__ = e30533;
var statearr_30534_30553 = state_30506;
(statearr_30534_30553[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30554 = state_30506;
state_30506 = G__30554;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_30506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_30506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23479__auto__ = (function (){var statearr_30535 = f__23478__auto__.call(null);
(statearr_30535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30537);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30537,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30557 = arguments.length;
switch (G__30557) {
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
var c__23477__auto___30612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30612,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30612,out){
return (function (state_30587){
var state_val_30588 = (state_30587[(1)]);
if((state_val_30588 === (7))){
var inst_30567 = (state_30587[(7)]);
var inst_30566 = (state_30587[(8)]);
var inst_30566__$1 = (state_30587[(2)]);
var inst_30567__$1 = cljs.core.nth.call(null,inst_30566__$1,(0),null);
var inst_30568 = cljs.core.nth.call(null,inst_30566__$1,(1),null);
var inst_30569 = (inst_30567__$1 == null);
var state_30587__$1 = (function (){var statearr_30589 = state_30587;
(statearr_30589[(7)] = inst_30567__$1);

(statearr_30589[(8)] = inst_30566__$1);

(statearr_30589[(9)] = inst_30568);

return statearr_30589;
})();
if(cljs.core.truth_(inst_30569)){
var statearr_30590_30613 = state_30587__$1;
(statearr_30590_30613[(1)] = (8));

} else {
var statearr_30591_30614 = state_30587__$1;
(statearr_30591_30614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (1))){
var inst_30558 = cljs.core.vec.call(null,chs);
var inst_30559 = inst_30558;
var state_30587__$1 = (function (){var statearr_30592 = state_30587;
(statearr_30592[(10)] = inst_30559);

return statearr_30592;
})();
var statearr_30593_30615 = state_30587__$1;
(statearr_30593_30615[(2)] = null);

(statearr_30593_30615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (4))){
var inst_30559 = (state_30587[(10)]);
var state_30587__$1 = state_30587;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30587__$1,(7),inst_30559);
} else {
if((state_val_30588 === (6))){
var inst_30583 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
var statearr_30594_30616 = state_30587__$1;
(statearr_30594_30616[(2)] = inst_30583);

(statearr_30594_30616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (3))){
var inst_30585 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30587__$1,inst_30585);
} else {
if((state_val_30588 === (2))){
var inst_30559 = (state_30587[(10)]);
var inst_30561 = cljs.core.count.call(null,inst_30559);
var inst_30562 = (inst_30561 > (0));
var state_30587__$1 = state_30587;
if(cljs.core.truth_(inst_30562)){
var statearr_30596_30617 = state_30587__$1;
(statearr_30596_30617[(1)] = (4));

} else {
var statearr_30597_30618 = state_30587__$1;
(statearr_30597_30618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (11))){
var inst_30559 = (state_30587[(10)]);
var inst_30576 = (state_30587[(2)]);
var tmp30595 = inst_30559;
var inst_30559__$1 = tmp30595;
var state_30587__$1 = (function (){var statearr_30598 = state_30587;
(statearr_30598[(11)] = inst_30576);

(statearr_30598[(10)] = inst_30559__$1);

return statearr_30598;
})();
var statearr_30599_30619 = state_30587__$1;
(statearr_30599_30619[(2)] = null);

(statearr_30599_30619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (9))){
var inst_30567 = (state_30587[(7)]);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30587__$1,(11),out,inst_30567);
} else {
if((state_val_30588 === (5))){
var inst_30581 = cljs.core.async.close_BANG_.call(null,out);
var state_30587__$1 = state_30587;
var statearr_30600_30620 = state_30587__$1;
(statearr_30600_30620[(2)] = inst_30581);

(statearr_30600_30620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (10))){
var inst_30579 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
var statearr_30601_30621 = state_30587__$1;
(statearr_30601_30621[(2)] = inst_30579);

(statearr_30601_30621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (8))){
var inst_30567 = (state_30587[(7)]);
var inst_30566 = (state_30587[(8)]);
var inst_30559 = (state_30587[(10)]);
var inst_30568 = (state_30587[(9)]);
var inst_30571 = (function (){var cs = inst_30559;
var vec__30564 = inst_30566;
var v = inst_30567;
var c = inst_30568;
return ((function (cs,vec__30564,v,c,inst_30567,inst_30566,inst_30559,inst_30568,state_val_30588,c__23477__auto___30612,out){
return (function (p1__30555_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30555_SHARP_);
});
;})(cs,vec__30564,v,c,inst_30567,inst_30566,inst_30559,inst_30568,state_val_30588,c__23477__auto___30612,out))
})();
var inst_30572 = cljs.core.filterv.call(null,inst_30571,inst_30559);
var inst_30559__$1 = inst_30572;
var state_30587__$1 = (function (){var statearr_30602 = state_30587;
(statearr_30602[(10)] = inst_30559__$1);

return statearr_30602;
})();
var statearr_30603_30622 = state_30587__$1;
(statearr_30603_30622[(2)] = null);

(statearr_30603_30622[(1)] = (2));


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
});})(c__23477__auto___30612,out))
;
return ((function (switch__23415__auto__,c__23477__auto___30612,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_30607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30607[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_30607[(1)] = (1));

return statearr_30607;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_30587){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30608){if((e30608 instanceof Object)){
var ex__23419__auto__ = e30608;
var statearr_30609_30623 = state_30587;
(statearr_30609_30623[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30587;
state_30587 = G__30624;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_30587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_30587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30612,out))
})();
var state__23479__auto__ = (function (){var statearr_30610 = f__23478__auto__.call(null);
(statearr_30610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30612);

return statearr_30610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30612,out))
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
var G__30626 = arguments.length;
switch (G__30626) {
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
var c__23477__auto___30674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30674,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30674,out){
return (function (state_30650){
var state_val_30651 = (state_30650[(1)]);
if((state_val_30651 === (7))){
var inst_30632 = (state_30650[(7)]);
var inst_30632__$1 = (state_30650[(2)]);
var inst_30633 = (inst_30632__$1 == null);
var inst_30634 = cljs.core.not.call(null,inst_30633);
var state_30650__$1 = (function (){var statearr_30652 = state_30650;
(statearr_30652[(7)] = inst_30632__$1);

return statearr_30652;
})();
if(inst_30634){
var statearr_30653_30675 = state_30650__$1;
(statearr_30653_30675[(1)] = (8));

} else {
var statearr_30654_30676 = state_30650__$1;
(statearr_30654_30676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (1))){
var inst_30627 = (0);
var state_30650__$1 = (function (){var statearr_30655 = state_30650;
(statearr_30655[(8)] = inst_30627);

return statearr_30655;
})();
var statearr_30656_30677 = state_30650__$1;
(statearr_30656_30677[(2)] = null);

(statearr_30656_30677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (4))){
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(7),ch);
} else {
if((state_val_30651 === (6))){
var inst_30645 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30657_30678 = state_30650__$1;
(statearr_30657_30678[(2)] = inst_30645);

(statearr_30657_30678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30647 = (state_30650[(2)]);
var inst_30648 = cljs.core.async.close_BANG_.call(null,out);
var state_30650__$1 = (function (){var statearr_30658 = state_30650;
(statearr_30658[(9)] = inst_30647);

return statearr_30658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30650__$1,inst_30648);
} else {
if((state_val_30651 === (2))){
var inst_30627 = (state_30650[(8)]);
var inst_30629 = (inst_30627 < n);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30629)){
var statearr_30659_30679 = state_30650__$1;
(statearr_30659_30679[(1)] = (4));

} else {
var statearr_30660_30680 = state_30650__$1;
(statearr_30660_30680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (11))){
var inst_30627 = (state_30650[(8)]);
var inst_30637 = (state_30650[(2)]);
var inst_30638 = (inst_30627 + (1));
var inst_30627__$1 = inst_30638;
var state_30650__$1 = (function (){var statearr_30661 = state_30650;
(statearr_30661[(10)] = inst_30637);

(statearr_30661[(8)] = inst_30627__$1);

return statearr_30661;
})();
var statearr_30662_30681 = state_30650__$1;
(statearr_30662_30681[(2)] = null);

(statearr_30662_30681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (9))){
var state_30650__$1 = state_30650;
var statearr_30663_30682 = state_30650__$1;
(statearr_30663_30682[(2)] = null);

(statearr_30663_30682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (5))){
var state_30650__$1 = state_30650;
var statearr_30664_30683 = state_30650__$1;
(statearr_30664_30683[(2)] = null);

(statearr_30664_30683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (10))){
var inst_30642 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30665_30684 = state_30650__$1;
(statearr_30665_30684[(2)] = inst_30642);

(statearr_30665_30684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (8))){
var inst_30632 = (state_30650[(7)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30650__$1,(11),out,inst_30632);
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
});})(c__23477__auto___30674,out))
;
return ((function (switch__23415__auto__,c__23477__auto___30674,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_30669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30669[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_30669[(1)] = (1));

return statearr_30669;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_30650){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30670){if((e30670 instanceof Object)){
var ex__23419__auto__ = e30670;
var statearr_30671_30685 = state_30650;
(statearr_30671_30685[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30686 = state_30650;
state_30650 = G__30686;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30674,out))
})();
var state__23479__auto__ = (function (){var statearr_30672 = f__23478__auto__.call(null);
(statearr_30672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30674);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30674,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30694 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30694 = (function (map_LT_,f,ch,meta30695){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30695 = meta30695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30696,meta30695__$1){
var self__ = this;
var _30696__$1 = this;
return (new cljs.core.async.t30694(self__.map_LT_,self__.f,self__.ch,meta30695__$1));
});

cljs.core.async.t30694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30696){
var self__ = this;
var _30696__$1 = this;
return self__.meta30695;
});

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30697 = (function (map_LT_,f,ch,meta30695,_,fn1,meta30698){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30695 = meta30695;
this._ = _;
this.fn1 = fn1;
this.meta30698 = meta30698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30699,meta30698__$1){
var self__ = this;
var _30699__$1 = this;
return (new cljs.core.async.t30697(self__.map_LT_,self__.f,self__.ch,self__.meta30695,self__._,self__.fn1,meta30698__$1));
});})(___$1))
;

cljs.core.async.t30697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30699){
var self__ = this;
var _30699__$1 = this;
return self__.meta30698;
});})(___$1))
;

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30687_SHARP_){
return f1.call(null,(((p1__30687_SHARP_ == null))?null:self__.f.call(null,p1__30687_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30697.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30695","meta30695",1532074891,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30698","meta30698",1383994088,null)], null);
});})(___$1))
;

cljs.core.async.t30697.cljs$lang$type = true;

cljs.core.async.t30697.cljs$lang$ctorStr = "cljs.core.async/t30697";

cljs.core.async.t30697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30697");
});})(___$1))
;

cljs.core.async.__GT_t30697 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30697(map_LT___$1,f__$1,ch__$1,meta30695__$1,___$2,fn1__$1,meta30698){
return (new cljs.core.async.t30697(map_LT___$1,f__$1,ch__$1,meta30695__$1,___$2,fn1__$1,meta30698));
});})(___$1))
;

}

return (new cljs.core.async.t30697(self__.map_LT_,self__.f,self__.ch,self__.meta30695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11336__auto__ = ret;
if(cljs.core.truth_(and__11336__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11336__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30695","meta30695",1532074891,null)], null);
});

cljs.core.async.t30694.cljs$lang$type = true;

cljs.core.async.t30694.cljs$lang$ctorStr = "cljs.core.async/t30694";

cljs.core.async.t30694.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30694");
});

cljs.core.async.__GT_t30694 = (function cljs$core$async$map_LT__$___GT_t30694(map_LT___$1,f__$1,ch__$1,meta30695){
return (new cljs.core.async.t30694(map_LT___$1,f__$1,ch__$1,meta30695));
});

}

return (new cljs.core.async.t30694(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30703 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30703 = (function (map_GT_,f,ch,meta30704){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30704 = meta30704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30705,meta30704__$1){
var self__ = this;
var _30705__$1 = this;
return (new cljs.core.async.t30703(self__.map_GT_,self__.f,self__.ch,meta30704__$1));
});

cljs.core.async.t30703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30705){
var self__ = this;
var _30705__$1 = this;
return self__.meta30704;
});

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30704","meta30704",614299279,null)], null);
});

cljs.core.async.t30703.cljs$lang$type = true;

cljs.core.async.t30703.cljs$lang$ctorStr = "cljs.core.async/t30703";

cljs.core.async.t30703.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30703");
});

cljs.core.async.__GT_t30703 = (function cljs$core$async$map_GT__$___GT_t30703(map_GT___$1,f__$1,ch__$1,meta30704){
return (new cljs.core.async.t30703(map_GT___$1,f__$1,ch__$1,meta30704));
});

}

return (new cljs.core.async.t30703(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30709 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30709 = (function (filter_GT_,p,ch,meta30710){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30710 = meta30710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30711,meta30710__$1){
var self__ = this;
var _30711__$1 = this;
return (new cljs.core.async.t30709(self__.filter_GT_,self__.p,self__.ch,meta30710__$1));
});

cljs.core.async.t30709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30711){
var self__ = this;
var _30711__$1 = this;
return self__.meta30710;
});

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30710","meta30710",1165503475,null)], null);
});

cljs.core.async.t30709.cljs$lang$type = true;

cljs.core.async.t30709.cljs$lang$ctorStr = "cljs.core.async/t30709";

cljs.core.async.t30709.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"cljs.core.async/t30709");
});

cljs.core.async.__GT_t30709 = (function cljs$core$async$filter_GT__$___GT_t30709(filter_GT___$1,p__$1,ch__$1,meta30710){
return (new cljs.core.async.t30709(filter_GT___$1,p__$1,ch__$1,meta30710));
});

}

return (new cljs.core.async.t30709(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30713 = arguments.length;
switch (G__30713) {
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
var c__23477__auto___30756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___30756,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___30756,out){
return (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (7))){
var inst_30730 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30736_30757 = state_30734__$1;
(statearr_30736_30757[(2)] = inst_30730);

(statearr_30736_30757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (1))){
var state_30734__$1 = state_30734;
var statearr_30737_30758 = state_30734__$1;
(statearr_30737_30758[(2)] = null);

(statearr_30737_30758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (4))){
var inst_30716 = (state_30734[(7)]);
var inst_30716__$1 = (state_30734[(2)]);
var inst_30717 = (inst_30716__$1 == null);
var state_30734__$1 = (function (){var statearr_30738 = state_30734;
(statearr_30738[(7)] = inst_30716__$1);

return statearr_30738;
})();
if(cljs.core.truth_(inst_30717)){
var statearr_30739_30759 = state_30734__$1;
(statearr_30739_30759[(1)] = (5));

} else {
var statearr_30740_30760 = state_30734__$1;
(statearr_30740_30760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (6))){
var inst_30716 = (state_30734[(7)]);
var inst_30721 = p.call(null,inst_30716);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30721)){
var statearr_30741_30761 = state_30734__$1;
(statearr_30741_30761[(1)] = (8));

} else {
var statearr_30742_30762 = state_30734__$1;
(statearr_30742_30762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (3))){
var inst_30732 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30734__$1,inst_30732);
} else {
if((state_val_30735 === (2))){
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30734__$1,(4),ch);
} else {
if((state_val_30735 === (11))){
var inst_30724 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30743_30763 = state_30734__$1;
(statearr_30743_30763[(2)] = inst_30724);

(statearr_30743_30763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (9))){
var state_30734__$1 = state_30734;
var statearr_30744_30764 = state_30734__$1;
(statearr_30744_30764[(2)] = null);

(statearr_30744_30764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (5))){
var inst_30719 = cljs.core.async.close_BANG_.call(null,out);
var state_30734__$1 = state_30734;
var statearr_30745_30765 = state_30734__$1;
(statearr_30745_30765[(2)] = inst_30719);

(statearr_30745_30765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (10))){
var inst_30727 = (state_30734[(2)]);
var state_30734__$1 = (function (){var statearr_30746 = state_30734;
(statearr_30746[(8)] = inst_30727);

return statearr_30746;
})();
var statearr_30747_30766 = state_30734__$1;
(statearr_30747_30766[(2)] = null);

(statearr_30747_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (8))){
var inst_30716 = (state_30734[(7)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30734__$1,(11),out,inst_30716);
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
});})(c__23477__auto___30756,out))
;
return ((function (switch__23415__auto__,c__23477__auto___30756,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_30751 = [null,null,null,null,null,null,null,null,null];
(statearr_30751[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_30751[(1)] = (1));

return statearr_30751;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_30734){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30752){if((e30752 instanceof Object)){
var ex__23419__auto__ = e30752;
var statearr_30753_30767 = state_30734;
(statearr_30753_30767[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30768 = state_30734;
state_30734 = G__30768;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___30756,out))
})();
var state__23479__auto__ = (function (){var statearr_30754 = f__23478__auto__.call(null);
(statearr_30754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___30756);

return statearr_30754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___30756,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30770 = arguments.length;
switch (G__30770) {
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
var c__23477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto__){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto__){
return (function (state_30937){
var state_val_30938 = (state_30937[(1)]);
if((state_val_30938 === (7))){
var inst_30933 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30939_30980 = state_30937__$1;
(statearr_30939_30980[(2)] = inst_30933);

(statearr_30939_30980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (20))){
var inst_30903 = (state_30937[(7)]);
var inst_30914 = (state_30937[(2)]);
var inst_30915 = cljs.core.next.call(null,inst_30903);
var inst_30889 = inst_30915;
var inst_30890 = null;
var inst_30891 = (0);
var inst_30892 = (0);
var state_30937__$1 = (function (){var statearr_30940 = state_30937;
(statearr_30940[(8)] = inst_30914);

(statearr_30940[(9)] = inst_30889);

(statearr_30940[(10)] = inst_30890);

(statearr_30940[(11)] = inst_30892);

(statearr_30940[(12)] = inst_30891);

return statearr_30940;
})();
var statearr_30941_30981 = state_30937__$1;
(statearr_30941_30981[(2)] = null);

(statearr_30941_30981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (1))){
var state_30937__$1 = state_30937;
var statearr_30942_30982 = state_30937__$1;
(statearr_30942_30982[(2)] = null);

(statearr_30942_30982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (4))){
var inst_30878 = (state_30937[(13)]);
var inst_30878__$1 = (state_30937[(2)]);
var inst_30879 = (inst_30878__$1 == null);
var state_30937__$1 = (function (){var statearr_30943 = state_30937;
(statearr_30943[(13)] = inst_30878__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30879)){
var statearr_30944_30983 = state_30937__$1;
(statearr_30944_30983[(1)] = (5));

} else {
var statearr_30945_30984 = state_30937__$1;
(statearr_30945_30984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (15))){
var state_30937__$1 = state_30937;
var statearr_30949_30985 = state_30937__$1;
(statearr_30949_30985[(2)] = null);

(statearr_30949_30985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (21))){
var state_30937__$1 = state_30937;
var statearr_30950_30986 = state_30937__$1;
(statearr_30950_30986[(2)] = null);

(statearr_30950_30986[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (13))){
var inst_30889 = (state_30937[(9)]);
var inst_30890 = (state_30937[(10)]);
var inst_30892 = (state_30937[(11)]);
var inst_30891 = (state_30937[(12)]);
var inst_30899 = (state_30937[(2)]);
var inst_30900 = (inst_30892 + (1));
var tmp30946 = inst_30889;
var tmp30947 = inst_30890;
var tmp30948 = inst_30891;
var inst_30889__$1 = tmp30946;
var inst_30890__$1 = tmp30947;
var inst_30891__$1 = tmp30948;
var inst_30892__$1 = inst_30900;
var state_30937__$1 = (function (){var statearr_30951 = state_30937;
(statearr_30951[(9)] = inst_30889__$1);

(statearr_30951[(10)] = inst_30890__$1);

(statearr_30951[(11)] = inst_30892__$1);

(statearr_30951[(14)] = inst_30899);

(statearr_30951[(12)] = inst_30891__$1);

return statearr_30951;
})();
var statearr_30952_30987 = state_30937__$1;
(statearr_30952_30987[(2)] = null);

(statearr_30952_30987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (22))){
var state_30937__$1 = state_30937;
var statearr_30953_30988 = state_30937__$1;
(statearr_30953_30988[(2)] = null);

(statearr_30953_30988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (6))){
var inst_30878 = (state_30937[(13)]);
var inst_30887 = f.call(null,inst_30878);
var inst_30888 = cljs.core.seq.call(null,inst_30887);
var inst_30889 = inst_30888;
var inst_30890 = null;
var inst_30891 = (0);
var inst_30892 = (0);
var state_30937__$1 = (function (){var statearr_30954 = state_30937;
(statearr_30954[(9)] = inst_30889);

(statearr_30954[(10)] = inst_30890);

(statearr_30954[(11)] = inst_30892);

(statearr_30954[(12)] = inst_30891);

return statearr_30954;
})();
var statearr_30955_30989 = state_30937__$1;
(statearr_30955_30989[(2)] = null);

(statearr_30955_30989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (17))){
var inst_30903 = (state_30937[(7)]);
var inst_30907 = cljs.core.chunk_first.call(null,inst_30903);
var inst_30908 = cljs.core.chunk_rest.call(null,inst_30903);
var inst_30909 = cljs.core.count.call(null,inst_30907);
var inst_30889 = inst_30908;
var inst_30890 = inst_30907;
var inst_30891 = inst_30909;
var inst_30892 = (0);
var state_30937__$1 = (function (){var statearr_30956 = state_30937;
(statearr_30956[(9)] = inst_30889);

(statearr_30956[(10)] = inst_30890);

(statearr_30956[(11)] = inst_30892);

(statearr_30956[(12)] = inst_30891);

return statearr_30956;
})();
var statearr_30957_30990 = state_30937__$1;
(statearr_30957_30990[(2)] = null);

(statearr_30957_30990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (3))){
var inst_30935 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30937__$1,inst_30935);
} else {
if((state_val_30938 === (12))){
var inst_30923 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30958_30991 = state_30937__$1;
(statearr_30958_30991[(2)] = inst_30923);

(statearr_30958_30991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (2))){
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30937__$1,(4),in$);
} else {
if((state_val_30938 === (23))){
var inst_30931 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30959_30992 = state_30937__$1;
(statearr_30959_30992[(2)] = inst_30931);

(statearr_30959_30992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (19))){
var inst_30918 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30960_30993 = state_30937__$1;
(statearr_30960_30993[(2)] = inst_30918);

(statearr_30960_30993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (11))){
var inst_30889 = (state_30937[(9)]);
var inst_30903 = (state_30937[(7)]);
var inst_30903__$1 = cljs.core.seq.call(null,inst_30889);
var state_30937__$1 = (function (){var statearr_30961 = state_30937;
(statearr_30961[(7)] = inst_30903__$1);

return statearr_30961;
})();
if(inst_30903__$1){
var statearr_30962_30994 = state_30937__$1;
(statearr_30962_30994[(1)] = (14));

} else {
var statearr_30963_30995 = state_30937__$1;
(statearr_30963_30995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (9))){
var inst_30925 = (state_30937[(2)]);
var inst_30926 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30937__$1 = (function (){var statearr_30964 = state_30937;
(statearr_30964[(15)] = inst_30925);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30926)){
var statearr_30965_30996 = state_30937__$1;
(statearr_30965_30996[(1)] = (21));

} else {
var statearr_30966_30997 = state_30937__$1;
(statearr_30966_30997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (5))){
var inst_30881 = cljs.core.async.close_BANG_.call(null,out);
var state_30937__$1 = state_30937;
var statearr_30967_30998 = state_30937__$1;
(statearr_30967_30998[(2)] = inst_30881);

(statearr_30967_30998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (14))){
var inst_30903 = (state_30937[(7)]);
var inst_30905 = cljs.core.chunked_seq_QMARK_.call(null,inst_30903);
var state_30937__$1 = state_30937;
if(inst_30905){
var statearr_30968_30999 = state_30937__$1;
(statearr_30968_30999[(1)] = (17));

} else {
var statearr_30969_31000 = state_30937__$1;
(statearr_30969_31000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (16))){
var inst_30921 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30970_31001 = state_30937__$1;
(statearr_30970_31001[(2)] = inst_30921);

(statearr_30970_31001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (10))){
var inst_30890 = (state_30937[(10)]);
var inst_30892 = (state_30937[(11)]);
var inst_30897 = cljs.core._nth.call(null,inst_30890,inst_30892);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30937__$1,(13),out,inst_30897);
} else {
if((state_val_30938 === (18))){
var inst_30903 = (state_30937[(7)]);
var inst_30912 = cljs.core.first.call(null,inst_30903);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30937__$1,(20),out,inst_30912);
} else {
if((state_val_30938 === (8))){
var inst_30892 = (state_30937[(11)]);
var inst_30891 = (state_30937[(12)]);
var inst_30894 = (inst_30892 < inst_30891);
var inst_30895 = inst_30894;
var state_30937__$1 = state_30937;
if(cljs.core.truth_(inst_30895)){
var statearr_30971_31002 = state_30937__$1;
(statearr_30971_31002[(1)] = (10));

} else {
var statearr_30972_31003 = state_30937__$1;
(statearr_30972_31003[(1)] = (11));

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
});})(c__23477__auto__))
;
return ((function (switch__23415__auto__,c__23477__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____0 = (function (){
var statearr_30976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__);

(statearr_30976[(1)] = (1));

return statearr_30976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____1 = (function (state_30937){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_30937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e30977){if((e30977 instanceof Object)){
var ex__23419__auto__ = e30977;
var statearr_30978_31004 = state_30937;
(statearr_30978_31004[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31005 = state_30937;
state_30937 = G__31005;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__ = function(state_30937){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____1.call(this,state_30937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23416__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto__))
})();
var state__23479__auto__ = (function (){var statearr_30979 = f__23478__auto__.call(null);
(statearr_30979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto__);

return statearr_30979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto__))
);

return c__23477__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__31007 = arguments.length;
switch (G__31007) {
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
var G__31010 = arguments.length;
switch (G__31010) {
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
var G__31013 = arguments.length;
switch (G__31013) {
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
var c__23477__auto___31063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___31063,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___31063,out){
return (function (state_31037){
var state_val_31038 = (state_31037[(1)]);
if((state_val_31038 === (7))){
var inst_31032 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31039_31064 = state_31037__$1;
(statearr_31039_31064[(2)] = inst_31032);

(statearr_31039_31064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (1))){
var inst_31014 = null;
var state_31037__$1 = (function (){var statearr_31040 = state_31037;
(statearr_31040[(7)] = inst_31014);

return statearr_31040;
})();
var statearr_31041_31065 = state_31037__$1;
(statearr_31041_31065[(2)] = null);

(statearr_31041_31065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (4))){
var inst_31017 = (state_31037[(8)]);
var inst_31017__$1 = (state_31037[(2)]);
var inst_31018 = (inst_31017__$1 == null);
var inst_31019 = cljs.core.not.call(null,inst_31018);
var state_31037__$1 = (function (){var statearr_31042 = state_31037;
(statearr_31042[(8)] = inst_31017__$1);

return statearr_31042;
})();
if(inst_31019){
var statearr_31043_31066 = state_31037__$1;
(statearr_31043_31066[(1)] = (5));

} else {
var statearr_31044_31067 = state_31037__$1;
(statearr_31044_31067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (6))){
var state_31037__$1 = state_31037;
var statearr_31045_31068 = state_31037__$1;
(statearr_31045_31068[(2)] = null);

(statearr_31045_31068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (3))){
var inst_31034 = (state_31037[(2)]);
var inst_31035 = cljs.core.async.close_BANG_.call(null,out);
var state_31037__$1 = (function (){var statearr_31046 = state_31037;
(statearr_31046[(9)] = inst_31034);

return statearr_31046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31037__$1,inst_31035);
} else {
if((state_val_31038 === (2))){
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31037__$1,(4),ch);
} else {
if((state_val_31038 === (11))){
var inst_31017 = (state_31037[(8)]);
var inst_31026 = (state_31037[(2)]);
var inst_31014 = inst_31017;
var state_31037__$1 = (function (){var statearr_31047 = state_31037;
(statearr_31047[(7)] = inst_31014);

(statearr_31047[(10)] = inst_31026);

return statearr_31047;
})();
var statearr_31048_31069 = state_31037__$1;
(statearr_31048_31069[(2)] = null);

(statearr_31048_31069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (9))){
var inst_31017 = (state_31037[(8)]);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31037__$1,(11),out,inst_31017);
} else {
if((state_val_31038 === (5))){
var inst_31017 = (state_31037[(8)]);
var inst_31014 = (state_31037[(7)]);
var inst_31021 = cljs.core._EQ_.call(null,inst_31017,inst_31014);
var state_31037__$1 = state_31037;
if(inst_31021){
var statearr_31050_31070 = state_31037__$1;
(statearr_31050_31070[(1)] = (8));

} else {
var statearr_31051_31071 = state_31037__$1;
(statearr_31051_31071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (10))){
var inst_31029 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31052_31072 = state_31037__$1;
(statearr_31052_31072[(2)] = inst_31029);

(statearr_31052_31072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (8))){
var inst_31014 = (state_31037[(7)]);
var tmp31049 = inst_31014;
var inst_31014__$1 = tmp31049;
var state_31037__$1 = (function (){var statearr_31053 = state_31037;
(statearr_31053[(7)] = inst_31014__$1);

return statearr_31053;
})();
var statearr_31054_31073 = state_31037__$1;
(statearr_31054_31073[(2)] = null);

(statearr_31054_31073[(1)] = (2));


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
});})(c__23477__auto___31063,out))
;
return ((function (switch__23415__auto__,c__23477__auto___31063,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_31058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31058[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_31058[(1)] = (1));

return statearr_31058;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_31037){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_31037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e31059){if((e31059 instanceof Object)){
var ex__23419__auto__ = e31059;
var statearr_31060_31074 = state_31037;
(statearr_31060_31074[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31075 = state_31037;
state_31037 = G__31075;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___31063,out))
})();
var state__23479__auto__ = (function (){var statearr_31061 = f__23478__auto__.call(null);
(statearr_31061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___31063);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___31063,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31077 = arguments.length;
switch (G__31077) {
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
var c__23477__auto___31146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___31146,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___31146,out){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (7))){
var inst_31111 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31117_31147 = state_31115__$1;
(statearr_31117_31147[(2)] = inst_31111);

(statearr_31117_31147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (1))){
var inst_31078 = (new Array(n));
var inst_31079 = inst_31078;
var inst_31080 = (0);
var state_31115__$1 = (function (){var statearr_31118 = state_31115;
(statearr_31118[(7)] = inst_31079);

(statearr_31118[(8)] = inst_31080);

return statearr_31118;
})();
var statearr_31119_31148 = state_31115__$1;
(statearr_31119_31148[(2)] = null);

(statearr_31119_31148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (4))){
var inst_31083 = (state_31115[(9)]);
var inst_31083__$1 = (state_31115[(2)]);
var inst_31084 = (inst_31083__$1 == null);
var inst_31085 = cljs.core.not.call(null,inst_31084);
var state_31115__$1 = (function (){var statearr_31120 = state_31115;
(statearr_31120[(9)] = inst_31083__$1);

return statearr_31120;
})();
if(inst_31085){
var statearr_31121_31149 = state_31115__$1;
(statearr_31121_31149[(1)] = (5));

} else {
var statearr_31122_31150 = state_31115__$1;
(statearr_31122_31150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (15))){
var inst_31105 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31123_31151 = state_31115__$1;
(statearr_31123_31151[(2)] = inst_31105);

(statearr_31123_31151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (13))){
var state_31115__$1 = state_31115;
var statearr_31124_31152 = state_31115__$1;
(statearr_31124_31152[(2)] = null);

(statearr_31124_31152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31080 = (state_31115[(8)]);
var inst_31101 = (inst_31080 > (0));
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31101)){
var statearr_31125_31153 = state_31115__$1;
(statearr_31125_31153[(1)] = (12));

} else {
var statearr_31126_31154 = state_31115__$1;
(statearr_31126_31154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (3))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (12))){
var inst_31079 = (state_31115[(7)]);
var inst_31103 = cljs.core.vec.call(null,inst_31079);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31115__$1,(15),out,inst_31103);
} else {
if((state_val_31116 === (2))){
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31115__$1,(4),ch);
} else {
if((state_val_31116 === (11))){
var inst_31095 = (state_31115[(2)]);
var inst_31096 = (new Array(n));
var inst_31079 = inst_31096;
var inst_31080 = (0);
var state_31115__$1 = (function (){var statearr_31127 = state_31115;
(statearr_31127[(7)] = inst_31079);

(statearr_31127[(10)] = inst_31095);

(statearr_31127[(8)] = inst_31080);

return statearr_31127;
})();
var statearr_31128_31155 = state_31115__$1;
(statearr_31128_31155[(2)] = null);

(statearr_31128_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (9))){
var inst_31079 = (state_31115[(7)]);
var inst_31093 = cljs.core.vec.call(null,inst_31079);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31115__$1,(11),out,inst_31093);
} else {
if((state_val_31116 === (5))){
var inst_31083 = (state_31115[(9)]);
var inst_31079 = (state_31115[(7)]);
var inst_31088 = (state_31115[(11)]);
var inst_31080 = (state_31115[(8)]);
var inst_31087 = (inst_31079[inst_31080] = inst_31083);
var inst_31088__$1 = (inst_31080 + (1));
var inst_31089 = (inst_31088__$1 < n);
var state_31115__$1 = (function (){var statearr_31129 = state_31115;
(statearr_31129[(12)] = inst_31087);

(statearr_31129[(11)] = inst_31088__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_31089)){
var statearr_31130_31156 = state_31115__$1;
(statearr_31130_31156[(1)] = (8));

} else {
var statearr_31131_31157 = state_31115__$1;
(statearr_31131_31157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (14))){
var inst_31108 = (state_31115[(2)]);
var inst_31109 = cljs.core.async.close_BANG_.call(null,out);
var state_31115__$1 = (function (){var statearr_31133 = state_31115;
(statearr_31133[(13)] = inst_31108);

return statearr_31133;
})();
var statearr_31134_31158 = state_31115__$1;
(statearr_31134_31158[(2)] = inst_31109);

(statearr_31134_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (10))){
var inst_31099 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31135_31159 = state_31115__$1;
(statearr_31135_31159[(2)] = inst_31099);

(statearr_31135_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (8))){
var inst_31079 = (state_31115[(7)]);
var inst_31088 = (state_31115[(11)]);
var tmp31132 = inst_31079;
var inst_31079__$1 = tmp31132;
var inst_31080 = inst_31088;
var state_31115__$1 = (function (){var statearr_31136 = state_31115;
(statearr_31136[(7)] = inst_31079__$1);

(statearr_31136[(8)] = inst_31080);

return statearr_31136;
})();
var statearr_31137_31160 = state_31115__$1;
(statearr_31137_31160[(2)] = null);

(statearr_31137_31160[(1)] = (2));


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
});})(c__23477__auto___31146,out))
;
return ((function (switch__23415__auto__,c__23477__auto___31146,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_31141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31141[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_31141[(1)] = (1));

return statearr_31141;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_31115){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_31115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e31142){if((e31142 instanceof Object)){
var ex__23419__auto__ = e31142;
var statearr_31143_31161 = state_31115;
(statearr_31143_31161[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31115;
state_31115 = G__31162;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___31146,out))
})();
var state__23479__auto__ = (function (){var statearr_31144 = f__23478__auto__.call(null);
(statearr_31144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___31146);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___31146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31164 = arguments.length;
switch (G__31164) {
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
var c__23477__auto___31237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23477__auto___31237,out){
return (function (){
var f__23478__auto__ = (function (){var switch__23415__auto__ = ((function (c__23477__auto___31237,out){
return (function (state_31206){
var state_val_31207 = (state_31206[(1)]);
if((state_val_31207 === (7))){
var inst_31202 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31208_31238 = state_31206__$1;
(statearr_31208_31238[(2)] = inst_31202);

(statearr_31208_31238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (1))){
var inst_31165 = [];
var inst_31166 = inst_31165;
var inst_31167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31206__$1 = (function (){var statearr_31209 = state_31206;
(statearr_31209[(7)] = inst_31167);

(statearr_31209[(8)] = inst_31166);

return statearr_31209;
})();
var statearr_31210_31239 = state_31206__$1;
(statearr_31210_31239[(2)] = null);

(statearr_31210_31239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (4))){
var inst_31170 = (state_31206[(9)]);
var inst_31170__$1 = (state_31206[(2)]);
var inst_31171 = (inst_31170__$1 == null);
var inst_31172 = cljs.core.not.call(null,inst_31171);
var state_31206__$1 = (function (){var statearr_31211 = state_31206;
(statearr_31211[(9)] = inst_31170__$1);

return statearr_31211;
})();
if(inst_31172){
var statearr_31212_31240 = state_31206__$1;
(statearr_31212_31240[(1)] = (5));

} else {
var statearr_31213_31241 = state_31206__$1;
(statearr_31213_31241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (15))){
var inst_31196 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31214_31242 = state_31206__$1;
(statearr_31214_31242[(2)] = inst_31196);

(statearr_31214_31242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (13))){
var state_31206__$1 = state_31206;
var statearr_31215_31243 = state_31206__$1;
(statearr_31215_31243[(2)] = null);

(statearr_31215_31243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (6))){
var inst_31166 = (state_31206[(8)]);
var inst_31191 = inst_31166.length;
var inst_31192 = (inst_31191 > (0));
var state_31206__$1 = state_31206;
if(cljs.core.truth_(inst_31192)){
var statearr_31216_31244 = state_31206__$1;
(statearr_31216_31244[(1)] = (12));

} else {
var statearr_31217_31245 = state_31206__$1;
(statearr_31217_31245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (3))){
var inst_31204 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31206__$1,inst_31204);
} else {
if((state_val_31207 === (12))){
var inst_31166 = (state_31206[(8)]);
var inst_31194 = cljs.core.vec.call(null,inst_31166);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31206__$1,(15),out,inst_31194);
} else {
if((state_val_31207 === (2))){
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31206__$1,(4),ch);
} else {
if((state_val_31207 === (11))){
var inst_31174 = (state_31206[(10)]);
var inst_31170 = (state_31206[(9)]);
var inst_31184 = (state_31206[(2)]);
var inst_31185 = [];
var inst_31186 = inst_31185.push(inst_31170);
var inst_31166 = inst_31185;
var inst_31167 = inst_31174;
var state_31206__$1 = (function (){var statearr_31218 = state_31206;
(statearr_31218[(7)] = inst_31167);

(statearr_31218[(11)] = inst_31186);

(statearr_31218[(8)] = inst_31166);

(statearr_31218[(12)] = inst_31184);

return statearr_31218;
})();
var statearr_31219_31246 = state_31206__$1;
(statearr_31219_31246[(2)] = null);

(statearr_31219_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (9))){
var inst_31166 = (state_31206[(8)]);
var inst_31182 = cljs.core.vec.call(null,inst_31166);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31206__$1,(11),out,inst_31182);
} else {
if((state_val_31207 === (5))){
var inst_31167 = (state_31206[(7)]);
var inst_31174 = (state_31206[(10)]);
var inst_31170 = (state_31206[(9)]);
var inst_31174__$1 = f.call(null,inst_31170);
var inst_31175 = cljs.core._EQ_.call(null,inst_31174__$1,inst_31167);
var inst_31176 = cljs.core.keyword_identical_QMARK_.call(null,inst_31167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31177 = (inst_31175) || (inst_31176);
var state_31206__$1 = (function (){var statearr_31220 = state_31206;
(statearr_31220[(10)] = inst_31174__$1);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31177)){
var statearr_31221_31247 = state_31206__$1;
(statearr_31221_31247[(1)] = (8));

} else {
var statearr_31222_31248 = state_31206__$1;
(statearr_31222_31248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (14))){
var inst_31199 = (state_31206[(2)]);
var inst_31200 = cljs.core.async.close_BANG_.call(null,out);
var state_31206__$1 = (function (){var statearr_31224 = state_31206;
(statearr_31224[(13)] = inst_31199);

return statearr_31224;
})();
var statearr_31225_31249 = state_31206__$1;
(statearr_31225_31249[(2)] = inst_31200);

(statearr_31225_31249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (10))){
var inst_31189 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31226_31250 = state_31206__$1;
(statearr_31226_31250[(2)] = inst_31189);

(statearr_31226_31250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (8))){
var inst_31166 = (state_31206[(8)]);
var inst_31174 = (state_31206[(10)]);
var inst_31170 = (state_31206[(9)]);
var inst_31179 = inst_31166.push(inst_31170);
var tmp31223 = inst_31166;
var inst_31166__$1 = tmp31223;
var inst_31167 = inst_31174;
var state_31206__$1 = (function (){var statearr_31227 = state_31206;
(statearr_31227[(7)] = inst_31167);

(statearr_31227[(8)] = inst_31166__$1);

(statearr_31227[(14)] = inst_31179);

return statearr_31227;
})();
var statearr_31228_31251 = state_31206__$1;
(statearr_31228_31251[(2)] = null);

(statearr_31228_31251[(1)] = (2));


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
});})(c__23477__auto___31237,out))
;
return ((function (switch__23415__auto__,c__23477__auto___31237,out){
return (function() {
var cljs$core$async$state_machine__23416__auto__ = null;
var cljs$core$async$state_machine__23416__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31232[(0)] = cljs$core$async$state_machine__23416__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var cljs$core$async$state_machine__23416__auto____1 = (function (state_31206){
while(true){
var ret_value__23417__auto__ = (function (){try{while(true){
var result__23418__auto__ = switch__23415__auto__.call(null,state_31206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23418__auto__;
}
break;
}
}catch (e31233){if((e31233 instanceof Object)){
var ex__23419__auto__ = e31233;
var statearr_31234_31252 = state_31206;
(statearr_31234_31252[(5)] = ex__23419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31253 = state_31206;
state_31206 = G__31253;
continue;
} else {
return ret_value__23417__auto__;
}
break;
}
});
cljs$core$async$state_machine__23416__auto__ = function(state_31206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23416__auto____1.call(this,state_31206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23416__auto____0;
cljs$core$async$state_machine__23416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23416__auto____1;
return cljs$core$async$state_machine__23416__auto__;
})()
;})(switch__23415__auto__,c__23477__auto___31237,out))
})();
var state__23479__auto__ = (function (){var statearr_31235 = f__23478__auto__.call(null);
(statearr_31235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23477__auto___31237);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23479__auto__);
});})(c__23477__auto___31237,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
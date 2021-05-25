goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50475 = arguments.length;
switch (G__50475) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50476 = (function (f,blockable,meta50477){
this.f = f;
this.blockable = blockable;
this.meta50477 = meta50477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50478,meta50477__$1){
var self__ = this;
var _50478__$1 = this;
return (new cljs.core.async.t_cljs$core$async50476(self__.f,self__.blockable,meta50477__$1));
}));

(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50478){
var self__ = this;
var _50478__$1 = this;
return self__.meta50477;
}));

(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50477","meta50477",1396908301,null)], null);
}));

(cljs.core.async.t_cljs$core$async50476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50476");

(cljs.core.async.t_cljs$core$async50476.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50476.
 */
cljs.core.async.__GT_t_cljs$core$async50476 = (function cljs$core$async$__GT_t_cljs$core$async50476(f__$1,blockable__$1,meta50477){
return (new cljs.core.async.t_cljs$core$async50476(f__$1,blockable__$1,meta50477));
});

}

return (new cljs.core.async.t_cljs$core$async50476(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50481 = arguments.length;
switch (G__50481) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50483 = arguments.length;
switch (G__50483) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50485 = arguments.length;
switch (G__50485) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_51965 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51965) : fn1.call(null,val_51965));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51965) : fn1.call(null,val_51965));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50487 = arguments.length;
switch (G__50487) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___51968 = n;
var x_51972 = (0);
while(true){
if((x_51972 < n__4613__auto___51968)){
(a[x_51972] = x_51972);

var G__51973 = (x_51972 + (1));
x_51972 = G__51973;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50488 = (function (flag,meta50489){
this.flag = flag;
this.meta50489 = meta50489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50490,meta50489__$1){
var self__ = this;
var _50490__$1 = this;
return (new cljs.core.async.t_cljs$core$async50488(self__.flag,meta50489__$1));
}));

(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50490){
var self__ = this;
var _50490__$1 = this;
return self__.meta50489;
}));

(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50489","meta50489",2123414969,null)], null);
}));

(cljs.core.async.t_cljs$core$async50488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50488");

(cljs.core.async.t_cljs$core$async50488.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50488.
 */
cljs.core.async.__GT_t_cljs$core$async50488 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50488(flag__$1,meta50489){
return (new cljs.core.async.t_cljs$core$async50488(flag__$1,meta50489));
});

}

return (new cljs.core.async.t_cljs$core$async50488(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50491 = (function (flag,cb,meta50492){
this.flag = flag;
this.cb = cb;
this.meta50492 = meta50492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50493,meta50492__$1){
var self__ = this;
var _50493__$1 = this;
return (new cljs.core.async.t_cljs$core$async50491(self__.flag,self__.cb,meta50492__$1));
}));

(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50493){
var self__ = this;
var _50493__$1 = this;
return self__.meta50492;
}));

(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50492","meta50492",1613163304,null)], null);
}));

(cljs.core.async.t_cljs$core$async50491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50491");

(cljs.core.async.t_cljs$core$async50491.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50491.
 */
cljs.core.async.__GT_t_cljs$core$async50491 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50491(flag__$1,cb__$1,meta50492){
return (new cljs.core.async.t_cljs$core$async50491(flag__$1,cb__$1,meta50492));
});

}

return (new cljs.core.async.t_cljs$core$async50491(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50494_SHARP_){
var G__50496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50494_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50496) : fret.call(null,G__50496));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50495_SHARP_){
var G__50497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50495_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50497) : fret.call(null,G__50497));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51982 = (i + (1));
i = G__51982;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51983 = arguments.length;
var i__4737__auto___51984 = (0);
while(true){
if((i__4737__auto___51984 < len__4736__auto___51983)){
args__4742__auto__.push((arguments[i__4737__auto___51984]));

var G__51985 = (i__4737__auto___51984 + (1));
i__4737__auto___51984 = G__51985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50500){
var map__50501 = p__50500;
var map__50501__$1 = (((((!((map__50501 == null))))?(((((map__50501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50501):map__50501);
var opts = map__50501__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50498){
var G__50499 = cljs.core.first(seq50498);
var seq50498__$1 = cljs.core.next(seq50498);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50499,seq50498__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50504 = arguments.length;
switch (G__50504) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50417__auto___51988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50528){
var state_val_50529 = (state_50528[(1)]);
if((state_val_50529 === (7))){
var inst_50524 = (state_50528[(2)]);
var state_50528__$1 = state_50528;
var statearr_50530_51989 = state_50528__$1;
(statearr_50530_51989[(2)] = inst_50524);

(statearr_50530_51989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (1))){
var state_50528__$1 = state_50528;
var statearr_50531_51990 = state_50528__$1;
(statearr_50531_51990[(2)] = null);

(statearr_50531_51990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (4))){
var inst_50507 = (state_50528[(7)]);
var inst_50507__$1 = (state_50528[(2)]);
var inst_50508 = (inst_50507__$1 == null);
var state_50528__$1 = (function (){var statearr_50532 = state_50528;
(statearr_50532[(7)] = inst_50507__$1);

return statearr_50532;
})();
if(cljs.core.truth_(inst_50508)){
var statearr_50533_51991 = state_50528__$1;
(statearr_50533_51991[(1)] = (5));

} else {
var statearr_50534_51992 = state_50528__$1;
(statearr_50534_51992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (13))){
var state_50528__$1 = state_50528;
var statearr_50535_51993 = state_50528__$1;
(statearr_50535_51993[(2)] = null);

(statearr_50535_51993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (6))){
var inst_50507 = (state_50528[(7)]);
var state_50528__$1 = state_50528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50528__$1,(11),to,inst_50507);
} else {
if((state_val_50529 === (3))){
var inst_50526 = (state_50528[(2)]);
var state_50528__$1 = state_50528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50528__$1,inst_50526);
} else {
if((state_val_50529 === (12))){
var state_50528__$1 = state_50528;
var statearr_50536_51995 = state_50528__$1;
(statearr_50536_51995[(2)] = null);

(statearr_50536_51995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (2))){
var state_50528__$1 = state_50528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50528__$1,(4),from);
} else {
if((state_val_50529 === (11))){
var inst_50517 = (state_50528[(2)]);
var state_50528__$1 = state_50528;
if(cljs.core.truth_(inst_50517)){
var statearr_50537_51996 = state_50528__$1;
(statearr_50537_51996[(1)] = (12));

} else {
var statearr_50538_51997 = state_50528__$1;
(statearr_50538_51997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (9))){
var state_50528__$1 = state_50528;
var statearr_50539_52003 = state_50528__$1;
(statearr_50539_52003[(2)] = null);

(statearr_50539_52003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (5))){
var state_50528__$1 = state_50528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50540_52011 = state_50528__$1;
(statearr_50540_52011[(1)] = (8));

} else {
var statearr_50541_52012 = state_50528__$1;
(statearr_50541_52012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (14))){
var inst_50522 = (state_50528[(2)]);
var state_50528__$1 = state_50528;
var statearr_50542_52013 = state_50528__$1;
(statearr_50542_52013[(2)] = inst_50522);

(statearr_50542_52013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (10))){
var inst_50514 = (state_50528[(2)]);
var state_50528__$1 = state_50528;
var statearr_50543_52014 = state_50528__$1;
(statearr_50543_52014[(2)] = inst_50514);

(statearr_50543_52014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50529 === (8))){
var inst_50511 = cljs.core.async.close_BANG_(to);
var state_50528__$1 = state_50528;
var statearr_50544_52016 = state_50528__$1;
(statearr_50544_52016[(2)] = inst_50511);

(statearr_50544_52016[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_50545 = [null,null,null,null,null,null,null,null];
(statearr_50545[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_50545[(1)] = (1));

return statearr_50545;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_50528){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50528);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50546){var ex__50385__auto__ = e50546;
var statearr_50547_52021 = state_50528;
(statearr_50547_52021[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50528[(4)]))){
var statearr_50548_52022 = state_50528;
(statearr_50548_52022[(1)] = cljs.core.first((state_50528[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52023 = state_50528;
state_50528 = G__52023;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_50528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_50528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50549 = f__50418__auto__();
(statearr_50549[(6)] = c__50417__auto___51988);

return statearr_50549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50550){
var vec__50551 = p__50550;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50551,(1),null);
var job = vec__50551;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50417__auto___52029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50558){
var state_val_50559 = (state_50558[(1)]);
if((state_val_50559 === (1))){
var state_50558__$1 = state_50558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50558__$1,(2),res,v);
} else {
if((state_val_50559 === (2))){
var inst_50555 = (state_50558[(2)]);
var inst_50556 = cljs.core.async.close_BANG_(res);
var state_50558__$1 = (function (){var statearr_50560 = state_50558;
(statearr_50560[(7)] = inst_50555);

return statearr_50560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50558__$1,inst_50556);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_50561 = [null,null,null,null,null,null,null,null];
(statearr_50561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__);

(statearr_50561[(1)] = (1));

return statearr_50561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1 = (function (state_50558){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50558);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50562){var ex__50385__auto__ = e50562;
var statearr_50563_52033 = state_50558;
(statearr_50563_52033[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50558[(4)]))){
var statearr_50564_52034 = state_50558;
(statearr_50564_52034[(1)] = cljs.core.first((state_50558[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52035 = state_50558;
state_50558 = G__52035;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = function(state_50558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1.call(this,state_50558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50565 = f__50418__auto__();
(statearr_50565[(6)] = c__50417__auto___52029);

return statearr_50565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50566){
var vec__50567 = p__50566;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(1),null);
var job = vec__50567;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___52036 = n;
var __52037 = (0);
while(true){
if((__52037 < n__4613__auto___52036)){
var G__50570_52038 = type;
var G__50570_52039__$1 = (((G__50570_52038 instanceof cljs.core.Keyword))?G__50570_52038.fqn:null);
switch (G__50570_52039__$1) {
case "compute":
var c__50417__auto___52041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52037,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = ((function (__52037,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function (state_50583){
var state_val_50584 = (state_50583[(1)]);
if((state_val_50584 === (1))){
var state_50583__$1 = state_50583;
var statearr_50585_52042 = state_50583__$1;
(statearr_50585_52042[(2)] = null);

(statearr_50585_52042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50584 === (2))){
var state_50583__$1 = state_50583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50583__$1,(4),jobs);
} else {
if((state_val_50584 === (3))){
var inst_50581 = (state_50583[(2)]);
var state_50583__$1 = state_50583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50583__$1,inst_50581);
} else {
if((state_val_50584 === (4))){
var inst_50573 = (state_50583[(2)]);
var inst_50574 = process(inst_50573);
var state_50583__$1 = state_50583;
if(cljs.core.truth_(inst_50574)){
var statearr_50586_52046 = state_50583__$1;
(statearr_50586_52046[(1)] = (5));

} else {
var statearr_50587_52050 = state_50583__$1;
(statearr_50587_52050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50584 === (5))){
var state_50583__$1 = state_50583;
var statearr_50588_52051 = state_50583__$1;
(statearr_50588_52051[(2)] = null);

(statearr_50588_52051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50584 === (6))){
var state_50583__$1 = state_50583;
var statearr_50589_52052 = state_50583__$1;
(statearr_50589_52052[(2)] = null);

(statearr_50589_52052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50584 === (7))){
var inst_50579 = (state_50583[(2)]);
var state_50583__$1 = state_50583;
var statearr_50590_52053 = state_50583__$1;
(statearr_50590_52053[(2)] = inst_50579);

(statearr_50590_52053[(1)] = (3));


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
});})(__52037,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
;
return ((function (__52037,switch__50381__auto__,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_50591 = [null,null,null,null,null,null,null];
(statearr_50591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__);

(statearr_50591[(1)] = (1));

return statearr_50591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1 = (function (state_50583){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50583);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50592){var ex__50385__auto__ = e50592;
var statearr_50593_52057 = state_50583;
(statearr_50593_52057[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50583[(4)]))){
var statearr_50594_52059 = state_50583;
(statearr_50594_52059[(1)] = cljs.core.first((state_50583[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52062 = state_50583;
state_50583 = G__52062;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = function(state_50583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1.call(this,state_50583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__;
})()
;})(__52037,switch__50381__auto__,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
})();
var state__50419__auto__ = (function (){var statearr_50595 = f__50418__auto__();
(statearr_50595[(6)] = c__50417__auto___52041);

return statearr_50595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
});})(__52037,c__50417__auto___52041,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
);


break;
case "async":
var c__50417__auto___52065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52037,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = ((function (__52037,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function (state_50608){
var state_val_50609 = (state_50608[(1)]);
if((state_val_50609 === (1))){
var state_50608__$1 = state_50608;
var statearr_50610_52067 = state_50608__$1;
(statearr_50610_52067[(2)] = null);

(statearr_50610_52067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50609 === (2))){
var state_50608__$1 = state_50608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50608__$1,(4),jobs);
} else {
if((state_val_50609 === (3))){
var inst_50606 = (state_50608[(2)]);
var state_50608__$1 = state_50608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50608__$1,inst_50606);
} else {
if((state_val_50609 === (4))){
var inst_50598 = (state_50608[(2)]);
var inst_50599 = async(inst_50598);
var state_50608__$1 = state_50608;
if(cljs.core.truth_(inst_50599)){
var statearr_50611_52068 = state_50608__$1;
(statearr_50611_52068[(1)] = (5));

} else {
var statearr_50612_52069 = state_50608__$1;
(statearr_50612_52069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50609 === (5))){
var state_50608__$1 = state_50608;
var statearr_50613_52070 = state_50608__$1;
(statearr_50613_52070[(2)] = null);

(statearr_50613_52070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50609 === (6))){
var state_50608__$1 = state_50608;
var statearr_50614_52071 = state_50608__$1;
(statearr_50614_52071[(2)] = null);

(statearr_50614_52071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50609 === (7))){
var inst_50604 = (state_50608[(2)]);
var state_50608__$1 = state_50608;
var statearr_50615_52072 = state_50608__$1;
(statearr_50615_52072[(2)] = inst_50604);

(statearr_50615_52072[(1)] = (3));


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
});})(__52037,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
;
return ((function (__52037,switch__50381__auto__,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_50616 = [null,null,null,null,null,null,null];
(statearr_50616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__);

(statearr_50616[(1)] = (1));

return statearr_50616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1 = (function (state_50608){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50608);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50617){var ex__50385__auto__ = e50617;
var statearr_50618_52073 = state_50608;
(statearr_50618_52073[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50608[(4)]))){
var statearr_50619_52074 = state_50608;
(statearr_50619_52074[(1)] = cljs.core.first((state_50608[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52075 = state_50608;
state_50608 = G__52075;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = function(state_50608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1.call(this,state_50608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__;
})()
;})(__52037,switch__50381__auto__,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
})();
var state__50419__auto__ = (function (){var statearr_50620 = f__50418__auto__();
(statearr_50620[(6)] = c__50417__auto___52065);

return statearr_50620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
});})(__52037,c__50417__auto___52065,G__50570_52038,G__50570_52039__$1,n__4613__auto___52036,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50570_52039__$1)].join('')));

}

var G__52076 = (__52037 + (1));
__52037 = G__52076;
continue;
} else {
}
break;
}

var c__50417__auto___52077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50642){
var state_val_50643 = (state_50642[(1)]);
if((state_val_50643 === (7))){
var inst_50638 = (state_50642[(2)]);
var state_50642__$1 = state_50642;
var statearr_50644_52078 = state_50642__$1;
(statearr_50644_52078[(2)] = inst_50638);

(statearr_50644_52078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (1))){
var state_50642__$1 = state_50642;
var statearr_50645_52079 = state_50642__$1;
(statearr_50645_52079[(2)] = null);

(statearr_50645_52079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (4))){
var inst_50623 = (state_50642[(7)]);
var inst_50623__$1 = (state_50642[(2)]);
var inst_50624 = (inst_50623__$1 == null);
var state_50642__$1 = (function (){var statearr_50646 = state_50642;
(statearr_50646[(7)] = inst_50623__$1);

return statearr_50646;
})();
if(cljs.core.truth_(inst_50624)){
var statearr_50647_52080 = state_50642__$1;
(statearr_50647_52080[(1)] = (5));

} else {
var statearr_50648_52081 = state_50642__$1;
(statearr_50648_52081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (6))){
var inst_50623 = (state_50642[(7)]);
var inst_50628 = (state_50642[(8)]);
var inst_50628__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50630 = [inst_50623,inst_50628__$1];
var inst_50631 = (new cljs.core.PersistentVector(null,2,(5),inst_50629,inst_50630,null));
var state_50642__$1 = (function (){var statearr_50649 = state_50642;
(statearr_50649[(8)] = inst_50628__$1);

return statearr_50649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50642__$1,(8),jobs,inst_50631);
} else {
if((state_val_50643 === (3))){
var inst_50640 = (state_50642[(2)]);
var state_50642__$1 = state_50642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50642__$1,inst_50640);
} else {
if((state_val_50643 === (2))){
var state_50642__$1 = state_50642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50642__$1,(4),from);
} else {
if((state_val_50643 === (9))){
var inst_50635 = (state_50642[(2)]);
var state_50642__$1 = (function (){var statearr_50650 = state_50642;
(statearr_50650[(9)] = inst_50635);

return statearr_50650;
})();
var statearr_50651_52082 = state_50642__$1;
(statearr_50651_52082[(2)] = null);

(statearr_50651_52082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (5))){
var inst_50626 = cljs.core.async.close_BANG_(jobs);
var state_50642__$1 = state_50642;
var statearr_50652_52083 = state_50642__$1;
(statearr_50652_52083[(2)] = inst_50626);

(statearr_50652_52083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50643 === (8))){
var inst_50628 = (state_50642[(8)]);
var inst_50633 = (state_50642[(2)]);
var state_50642__$1 = (function (){var statearr_50653 = state_50642;
(statearr_50653[(10)] = inst_50633);

return statearr_50653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50642__$1,(9),results,inst_50628);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_50654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__);

(statearr_50654[(1)] = (1));

return statearr_50654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1 = (function (state_50642){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50642);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50655){var ex__50385__auto__ = e50655;
var statearr_50656_52086 = state_50642;
(statearr_50656_52086[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50642[(4)]))){
var statearr_50657_52088 = state_50642;
(statearr_50657_52088[(1)] = cljs.core.first((state_50642[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52089 = state_50642;
state_50642 = G__52089;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = function(state_50642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1.call(this,state_50642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50658 = f__50418__auto__();
(statearr_50658[(6)] = c__50417__auto___52077);

return statearr_50658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50696){
var state_val_50697 = (state_50696[(1)]);
if((state_val_50697 === (7))){
var inst_50692 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
var statearr_50698_52093 = state_50696__$1;
(statearr_50698_52093[(2)] = inst_50692);

(statearr_50698_52093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (20))){
var state_50696__$1 = state_50696;
var statearr_50699_52095 = state_50696__$1;
(statearr_50699_52095[(2)] = null);

(statearr_50699_52095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (1))){
var state_50696__$1 = state_50696;
var statearr_50700_52096 = state_50696__$1;
(statearr_50700_52096[(2)] = null);

(statearr_50700_52096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (4))){
var inst_50661 = (state_50696[(7)]);
var inst_50661__$1 = (state_50696[(2)]);
var inst_50662 = (inst_50661__$1 == null);
var state_50696__$1 = (function (){var statearr_50701 = state_50696;
(statearr_50701[(7)] = inst_50661__$1);

return statearr_50701;
})();
if(cljs.core.truth_(inst_50662)){
var statearr_50702_52097 = state_50696__$1;
(statearr_50702_52097[(1)] = (5));

} else {
var statearr_50703_52099 = state_50696__$1;
(statearr_50703_52099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (15))){
var inst_50674 = (state_50696[(8)]);
var state_50696__$1 = state_50696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50696__$1,(18),to,inst_50674);
} else {
if((state_val_50697 === (21))){
var inst_50687 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
var statearr_50704_52102 = state_50696__$1;
(statearr_50704_52102[(2)] = inst_50687);

(statearr_50704_52102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (13))){
var inst_50689 = (state_50696[(2)]);
var state_50696__$1 = (function (){var statearr_50705 = state_50696;
(statearr_50705[(9)] = inst_50689);

return statearr_50705;
})();
var statearr_50706_52103 = state_50696__$1;
(statearr_50706_52103[(2)] = null);

(statearr_50706_52103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (6))){
var inst_50661 = (state_50696[(7)]);
var state_50696__$1 = state_50696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50696__$1,(11),inst_50661);
} else {
if((state_val_50697 === (17))){
var inst_50682 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
if(cljs.core.truth_(inst_50682)){
var statearr_50707_52104 = state_50696__$1;
(statearr_50707_52104[(1)] = (19));

} else {
var statearr_50708_52105 = state_50696__$1;
(statearr_50708_52105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (3))){
var inst_50694 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50696__$1,inst_50694);
} else {
if((state_val_50697 === (12))){
var inst_50671 = (state_50696[(10)]);
var state_50696__$1 = state_50696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50696__$1,(14),inst_50671);
} else {
if((state_val_50697 === (2))){
var state_50696__$1 = state_50696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50696__$1,(4),results);
} else {
if((state_val_50697 === (19))){
var state_50696__$1 = state_50696;
var statearr_50709_52107 = state_50696__$1;
(statearr_50709_52107[(2)] = null);

(statearr_50709_52107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (11))){
var inst_50671 = (state_50696[(2)]);
var state_50696__$1 = (function (){var statearr_50710 = state_50696;
(statearr_50710[(10)] = inst_50671);

return statearr_50710;
})();
var statearr_50711_52108 = state_50696__$1;
(statearr_50711_52108[(2)] = null);

(statearr_50711_52108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (9))){
var state_50696__$1 = state_50696;
var statearr_50712_52109 = state_50696__$1;
(statearr_50712_52109[(2)] = null);

(statearr_50712_52109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (5))){
var state_50696__$1 = state_50696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50713_52111 = state_50696__$1;
(statearr_50713_52111[(1)] = (8));

} else {
var statearr_50714_52112 = state_50696__$1;
(statearr_50714_52112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (14))){
var inst_50674 = (state_50696[(8)]);
var inst_50674__$1 = (state_50696[(2)]);
var inst_50675 = (inst_50674__$1 == null);
var inst_50676 = cljs.core.not(inst_50675);
var state_50696__$1 = (function (){var statearr_50715 = state_50696;
(statearr_50715[(8)] = inst_50674__$1);

return statearr_50715;
})();
if(inst_50676){
var statearr_50716_52113 = state_50696__$1;
(statearr_50716_52113[(1)] = (15));

} else {
var statearr_50717_52114 = state_50696__$1;
(statearr_50717_52114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (16))){
var state_50696__$1 = state_50696;
var statearr_50718_52115 = state_50696__$1;
(statearr_50718_52115[(2)] = false);

(statearr_50718_52115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (10))){
var inst_50668 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
var statearr_50719_52117 = state_50696__$1;
(statearr_50719_52117[(2)] = inst_50668);

(statearr_50719_52117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (18))){
var inst_50679 = (state_50696[(2)]);
var state_50696__$1 = state_50696;
var statearr_50720_52119 = state_50696__$1;
(statearr_50720_52119[(2)] = inst_50679);

(statearr_50720_52119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50697 === (8))){
var inst_50665 = cljs.core.async.close_BANG_(to);
var state_50696__$1 = state_50696;
var statearr_50721_52121 = state_50696__$1;
(statearr_50721_52121[(2)] = inst_50665);

(statearr_50721_52121[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_50722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__);

(statearr_50722[(1)] = (1));

return statearr_50722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1 = (function (state_50696){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50696);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50723){var ex__50385__auto__ = e50723;
var statearr_50724_52122 = state_50696;
(statearr_50724_52122[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50696[(4)]))){
var statearr_50725_52123 = state_50696;
(statearr_50725_52123[(1)] = cljs.core.first((state_50696[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52124 = state_50696;
state_50696 = G__52124;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__ = function(state_50696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1.call(this,state_50696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50726 = f__50418__auto__();
(statearr_50726[(6)] = c__50417__auto__);

return statearr_50726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50728 = arguments.length;
switch (G__50728) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50730 = arguments.length;
switch (G__50730) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50732 = arguments.length;
switch (G__50732) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50417__auto___52128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50758){
var state_val_50759 = (state_50758[(1)]);
if((state_val_50759 === (7))){
var inst_50754 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
var statearr_50760_52129 = state_50758__$1;
(statearr_50760_52129[(2)] = inst_50754);

(statearr_50760_52129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (1))){
var state_50758__$1 = state_50758;
var statearr_50761_52130 = state_50758__$1;
(statearr_50761_52130[(2)] = null);

(statearr_50761_52130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (4))){
var inst_50735 = (state_50758[(7)]);
var inst_50735__$1 = (state_50758[(2)]);
var inst_50736 = (inst_50735__$1 == null);
var state_50758__$1 = (function (){var statearr_50762 = state_50758;
(statearr_50762[(7)] = inst_50735__$1);

return statearr_50762;
})();
if(cljs.core.truth_(inst_50736)){
var statearr_50763_52131 = state_50758__$1;
(statearr_50763_52131[(1)] = (5));

} else {
var statearr_50764_52132 = state_50758__$1;
(statearr_50764_52132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (13))){
var state_50758__$1 = state_50758;
var statearr_50765_52133 = state_50758__$1;
(statearr_50765_52133[(2)] = null);

(statearr_50765_52133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (6))){
var inst_50735 = (state_50758[(7)]);
var inst_50741 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50735) : p.call(null,inst_50735));
var state_50758__$1 = state_50758;
if(cljs.core.truth_(inst_50741)){
var statearr_50766_52134 = state_50758__$1;
(statearr_50766_52134[(1)] = (9));

} else {
var statearr_50767_52135 = state_50758__$1;
(statearr_50767_52135[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (3))){
var inst_50756 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50758__$1,inst_50756);
} else {
if((state_val_50759 === (12))){
var state_50758__$1 = state_50758;
var statearr_50768_52136 = state_50758__$1;
(statearr_50768_52136[(2)] = null);

(statearr_50768_52136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (2))){
var state_50758__$1 = state_50758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50758__$1,(4),ch);
} else {
if((state_val_50759 === (11))){
var inst_50735 = (state_50758[(7)]);
var inst_50745 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50758__$1,(8),inst_50745,inst_50735);
} else {
if((state_val_50759 === (9))){
var state_50758__$1 = state_50758;
var statearr_50769_52137 = state_50758__$1;
(statearr_50769_52137[(2)] = tc);

(statearr_50769_52137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (5))){
var inst_50738 = cljs.core.async.close_BANG_(tc);
var inst_50739 = cljs.core.async.close_BANG_(fc);
var state_50758__$1 = (function (){var statearr_50770 = state_50758;
(statearr_50770[(8)] = inst_50738);

return statearr_50770;
})();
var statearr_50771_52138 = state_50758__$1;
(statearr_50771_52138[(2)] = inst_50739);

(statearr_50771_52138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (14))){
var inst_50752 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
var statearr_50772_52139 = state_50758__$1;
(statearr_50772_52139[(2)] = inst_50752);

(statearr_50772_52139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (10))){
var state_50758__$1 = state_50758;
var statearr_50773_52140 = state_50758__$1;
(statearr_50773_52140[(2)] = fc);

(statearr_50773_52140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (8))){
var inst_50747 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
if(cljs.core.truth_(inst_50747)){
var statearr_50774_52141 = state_50758__$1;
(statearr_50774_52141[(1)] = (12));

} else {
var statearr_50775_52142 = state_50758__$1;
(statearr_50775_52142[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_50776 = [null,null,null,null,null,null,null,null,null];
(statearr_50776[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_50776[(1)] = (1));

return statearr_50776;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_50758){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50758);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50777){var ex__50385__auto__ = e50777;
var statearr_50778_52143 = state_50758;
(statearr_50778_52143[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50758[(4)]))){
var statearr_50779_52144 = state_50758;
(statearr_50779_52144[(1)] = cljs.core.first((state_50758[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52145 = state_50758;
state_50758 = G__52145;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_50758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_50758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50780 = f__50418__auto__();
(statearr_50780[(6)] = c__50417__auto___52128);

return statearr_50780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50802){
var state_val_50803 = (state_50802[(1)]);
if((state_val_50803 === (7))){
var inst_50798 = (state_50802[(2)]);
var state_50802__$1 = state_50802;
var statearr_50804_52146 = state_50802__$1;
(statearr_50804_52146[(2)] = inst_50798);

(statearr_50804_52146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (1))){
var inst_50781 = init;
var inst_50782 = inst_50781;
var state_50802__$1 = (function (){var statearr_50805 = state_50802;
(statearr_50805[(7)] = inst_50782);

return statearr_50805;
})();
var statearr_50806_52147 = state_50802__$1;
(statearr_50806_52147[(2)] = null);

(statearr_50806_52147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (4))){
var inst_50785 = (state_50802[(8)]);
var inst_50785__$1 = (state_50802[(2)]);
var inst_50786 = (inst_50785__$1 == null);
var state_50802__$1 = (function (){var statearr_50807 = state_50802;
(statearr_50807[(8)] = inst_50785__$1);

return statearr_50807;
})();
if(cljs.core.truth_(inst_50786)){
var statearr_50808_52148 = state_50802__$1;
(statearr_50808_52148[(1)] = (5));

} else {
var statearr_50809_52149 = state_50802__$1;
(statearr_50809_52149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (6))){
var inst_50782 = (state_50802[(7)]);
var inst_50785 = (state_50802[(8)]);
var inst_50789 = (state_50802[(9)]);
var inst_50789__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50782,inst_50785) : f.call(null,inst_50782,inst_50785));
var inst_50790 = cljs.core.reduced_QMARK_(inst_50789__$1);
var state_50802__$1 = (function (){var statearr_50810 = state_50802;
(statearr_50810[(9)] = inst_50789__$1);

return statearr_50810;
})();
if(inst_50790){
var statearr_50811_52150 = state_50802__$1;
(statearr_50811_52150[(1)] = (8));

} else {
var statearr_50812_52151 = state_50802__$1;
(statearr_50812_52151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (3))){
var inst_50800 = (state_50802[(2)]);
var state_50802__$1 = state_50802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50802__$1,inst_50800);
} else {
if((state_val_50803 === (2))){
var state_50802__$1 = state_50802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50802__$1,(4),ch);
} else {
if((state_val_50803 === (9))){
var inst_50789 = (state_50802[(9)]);
var inst_50782 = inst_50789;
var state_50802__$1 = (function (){var statearr_50813 = state_50802;
(statearr_50813[(7)] = inst_50782);

return statearr_50813;
})();
var statearr_50814_52152 = state_50802__$1;
(statearr_50814_52152[(2)] = null);

(statearr_50814_52152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (5))){
var inst_50782 = (state_50802[(7)]);
var state_50802__$1 = state_50802;
var statearr_50815_52153 = state_50802__$1;
(statearr_50815_52153[(2)] = inst_50782);

(statearr_50815_52153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (10))){
var inst_50796 = (state_50802[(2)]);
var state_50802__$1 = state_50802;
var statearr_50816_52154 = state_50802__$1;
(statearr_50816_52154[(2)] = inst_50796);

(statearr_50816_52154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (8))){
var inst_50789 = (state_50802[(9)]);
var inst_50792 = cljs.core.deref(inst_50789);
var state_50802__$1 = state_50802;
var statearr_50817_52155 = state_50802__$1;
(statearr_50817_52155[(2)] = inst_50792);

(statearr_50817_52155[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50382__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50382__auto____0 = (function (){
var statearr_50818 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50818[(0)] = cljs$core$async$reduce_$_state_machine__50382__auto__);

(statearr_50818[(1)] = (1));

return statearr_50818;
});
var cljs$core$async$reduce_$_state_machine__50382__auto____1 = (function (state_50802){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50802);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50819){var ex__50385__auto__ = e50819;
var statearr_50820_52156 = state_50802;
(statearr_50820_52156[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50802[(4)]))){
var statearr_50821_52157 = state_50802;
(statearr_50821_52157[(1)] = cljs.core.first((state_50802[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52158 = state_50802;
state_50802 = G__52158;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50382__auto__ = function(state_50802){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50382__auto____1.call(this,state_50802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50382__auto____0;
cljs$core$async$reduce_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50382__auto____1;
return cljs$core$async$reduce_$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50822 = f__50418__auto__();
(statearr_50822[(6)] = c__50417__auto__);

return statearr_50822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50828){
var state_val_50829 = (state_50828[(1)]);
if((state_val_50829 === (1))){
var inst_50823 = cljs.core.async.reduce(f__$1,init,ch);
var state_50828__$1 = state_50828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50828__$1,(2),inst_50823);
} else {
if((state_val_50829 === (2))){
var inst_50825 = (state_50828[(2)]);
var inst_50826 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50825) : f__$1.call(null,inst_50825));
var state_50828__$1 = state_50828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50828__$1,inst_50826);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50382__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50382__auto____0 = (function (){
var statearr_50830 = [null,null,null,null,null,null,null];
(statearr_50830[(0)] = cljs$core$async$transduce_$_state_machine__50382__auto__);

(statearr_50830[(1)] = (1));

return statearr_50830;
});
var cljs$core$async$transduce_$_state_machine__50382__auto____1 = (function (state_50828){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50828);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50831){var ex__50385__auto__ = e50831;
var statearr_50832_52159 = state_50828;
(statearr_50832_52159[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50828[(4)]))){
var statearr_50833_52160 = state_50828;
(statearr_50833_52160[(1)] = cljs.core.first((state_50828[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52161 = state_50828;
state_50828 = G__52161;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50382__auto__ = function(state_50828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50382__auto____1.call(this,state_50828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50382__auto____0;
cljs$core$async$transduce_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50382__auto____1;
return cljs$core$async$transduce_$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50834 = f__50418__auto__();
(statearr_50834[(6)] = c__50417__auto__);

return statearr_50834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50836 = arguments.length;
switch (G__50836) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_50861){
var state_val_50862 = (state_50861[(1)]);
if((state_val_50862 === (7))){
var inst_50843 = (state_50861[(2)]);
var state_50861__$1 = state_50861;
var statearr_50863_52163 = state_50861__$1;
(statearr_50863_52163[(2)] = inst_50843);

(statearr_50863_52163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (1))){
var inst_50837 = cljs.core.seq(coll);
var inst_50838 = inst_50837;
var state_50861__$1 = (function (){var statearr_50864 = state_50861;
(statearr_50864[(7)] = inst_50838);

return statearr_50864;
})();
var statearr_50865_52164 = state_50861__$1;
(statearr_50865_52164[(2)] = null);

(statearr_50865_52164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (4))){
var inst_50838 = (state_50861[(7)]);
var inst_50841 = cljs.core.first(inst_50838);
var state_50861__$1 = state_50861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50861__$1,(7),ch,inst_50841);
} else {
if((state_val_50862 === (13))){
var inst_50855 = (state_50861[(2)]);
var state_50861__$1 = state_50861;
var statearr_50866_52165 = state_50861__$1;
(statearr_50866_52165[(2)] = inst_50855);

(statearr_50866_52165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (6))){
var inst_50846 = (state_50861[(2)]);
var state_50861__$1 = state_50861;
if(cljs.core.truth_(inst_50846)){
var statearr_50867_52166 = state_50861__$1;
(statearr_50867_52166[(1)] = (8));

} else {
var statearr_50868_52167 = state_50861__$1;
(statearr_50868_52167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (3))){
var inst_50859 = (state_50861[(2)]);
var state_50861__$1 = state_50861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50861__$1,inst_50859);
} else {
if((state_val_50862 === (12))){
var state_50861__$1 = state_50861;
var statearr_50869_52168 = state_50861__$1;
(statearr_50869_52168[(2)] = null);

(statearr_50869_52168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (2))){
var inst_50838 = (state_50861[(7)]);
var state_50861__$1 = state_50861;
if(cljs.core.truth_(inst_50838)){
var statearr_50870_52169 = state_50861__$1;
(statearr_50870_52169[(1)] = (4));

} else {
var statearr_50871_52170 = state_50861__$1;
(statearr_50871_52170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (11))){
var inst_50852 = cljs.core.async.close_BANG_(ch);
var state_50861__$1 = state_50861;
var statearr_50872_52171 = state_50861__$1;
(statearr_50872_52171[(2)] = inst_50852);

(statearr_50872_52171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (9))){
var state_50861__$1 = state_50861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50873_52172 = state_50861__$1;
(statearr_50873_52172[(1)] = (11));

} else {
var statearr_50874_52173 = state_50861__$1;
(statearr_50874_52173[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (5))){
var inst_50838 = (state_50861[(7)]);
var state_50861__$1 = state_50861;
var statearr_50875_52174 = state_50861__$1;
(statearr_50875_52174[(2)] = inst_50838);

(statearr_50875_52174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (10))){
var inst_50857 = (state_50861[(2)]);
var state_50861__$1 = state_50861;
var statearr_50876_52175 = state_50861__$1;
(statearr_50876_52175[(2)] = inst_50857);

(statearr_50876_52175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50862 === (8))){
var inst_50838 = (state_50861[(7)]);
var inst_50848 = cljs.core.next(inst_50838);
var inst_50838__$1 = inst_50848;
var state_50861__$1 = (function (){var statearr_50877 = state_50861;
(statearr_50877[(7)] = inst_50838__$1);

return statearr_50877;
})();
var statearr_50878_52176 = state_50861__$1;
(statearr_50878_52176[(2)] = null);

(statearr_50878_52176[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_50879 = [null,null,null,null,null,null,null,null];
(statearr_50879[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_50879[(1)] = (1));

return statearr_50879;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_50861){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_50861);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e50880){var ex__50385__auto__ = e50880;
var statearr_50881_52177 = state_50861;
(statearr_50881_52177[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_50861[(4)]))){
var statearr_50882_52178 = state_50861;
(statearr_50882_52178[(1)] = cljs.core.first((state_50861[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52179 = state_50861;
state_50861 = G__52179;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_50861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_50861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_50883 = f__50418__auto__();
(statearr_50883[(6)] = c__50417__auto__);

return statearr_50883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50885 = arguments.length;
switch (G__50885) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52181 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52181(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52184 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52184(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52188 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52188(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52189 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52189(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50886 = (function (ch,cs,meta50887){
this.ch = ch;
this.cs = cs;
this.meta50887 = meta50887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50888,meta50887__$1){
var self__ = this;
var _50888__$1 = this;
return (new cljs.core.async.t_cljs$core$async50886(self__.ch,self__.cs,meta50887__$1));
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50888){
var self__ = this;
var _50888__$1 = this;
return self__.meta50887;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50887","meta50887",-391316792,null)], null);
}));

(cljs.core.async.t_cljs$core$async50886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50886");

(cljs.core.async.t_cljs$core$async50886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50886.
 */
cljs.core.async.__GT_t_cljs$core$async50886 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50886(ch__$1,cs__$1,meta50887){
return (new cljs.core.async.t_cljs$core$async50886(ch__$1,cs__$1,meta50887));
});

}

return (new cljs.core.async.t_cljs$core$async50886(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50417__auto___52196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51021){
var state_val_51022 = (state_51021[(1)]);
if((state_val_51022 === (7))){
var inst_51017 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51023_52197 = state_51021__$1;
(statearr_51023_52197[(2)] = inst_51017);

(statearr_51023_52197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (20))){
var inst_50922 = (state_51021[(7)]);
var inst_50934 = cljs.core.first(inst_50922);
var inst_50935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50934,(0),null);
var inst_50936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50934,(1),null);
var state_51021__$1 = (function (){var statearr_51024 = state_51021;
(statearr_51024[(8)] = inst_50935);

return statearr_51024;
})();
if(cljs.core.truth_(inst_50936)){
var statearr_51025_52198 = state_51021__$1;
(statearr_51025_52198[(1)] = (22));

} else {
var statearr_51026_52199 = state_51021__$1;
(statearr_51026_52199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (27))){
var inst_50971 = (state_51021[(9)]);
var inst_50891 = (state_51021[(10)]);
var inst_50964 = (state_51021[(11)]);
var inst_50966 = (state_51021[(12)]);
var inst_50971__$1 = cljs.core._nth(inst_50964,inst_50966);
var inst_50972 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50971__$1,inst_50891,done);
var state_51021__$1 = (function (){var statearr_51027 = state_51021;
(statearr_51027[(9)] = inst_50971__$1);

return statearr_51027;
})();
if(cljs.core.truth_(inst_50972)){
var statearr_51028_52200 = state_51021__$1;
(statearr_51028_52200[(1)] = (30));

} else {
var statearr_51029_52201 = state_51021__$1;
(statearr_51029_52201[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (1))){
var state_51021__$1 = state_51021;
var statearr_51030_52204 = state_51021__$1;
(statearr_51030_52204[(2)] = null);

(statearr_51030_52204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (24))){
var inst_50922 = (state_51021[(7)]);
var inst_50941 = (state_51021[(2)]);
var inst_50942 = cljs.core.next(inst_50922);
var inst_50900 = inst_50942;
var inst_50901 = null;
var inst_50902 = (0);
var inst_50903 = (0);
var state_51021__$1 = (function (){var statearr_51031 = state_51021;
(statearr_51031[(13)] = inst_50941);

(statearr_51031[(14)] = inst_50902);

(statearr_51031[(15)] = inst_50903);

(statearr_51031[(16)] = inst_50901);

(statearr_51031[(17)] = inst_50900);

return statearr_51031;
})();
var statearr_51032_52205 = state_51021__$1;
(statearr_51032_52205[(2)] = null);

(statearr_51032_52205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (39))){
var state_51021__$1 = state_51021;
var statearr_51036_52208 = state_51021__$1;
(statearr_51036_52208[(2)] = null);

(statearr_51036_52208[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (4))){
var inst_50891 = (state_51021[(10)]);
var inst_50891__$1 = (state_51021[(2)]);
var inst_50892 = (inst_50891__$1 == null);
var state_51021__$1 = (function (){var statearr_51037 = state_51021;
(statearr_51037[(10)] = inst_50891__$1);

return statearr_51037;
})();
if(cljs.core.truth_(inst_50892)){
var statearr_51038_52209 = state_51021__$1;
(statearr_51038_52209[(1)] = (5));

} else {
var statearr_51039_52210 = state_51021__$1;
(statearr_51039_52210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (15))){
var inst_50902 = (state_51021[(14)]);
var inst_50903 = (state_51021[(15)]);
var inst_50901 = (state_51021[(16)]);
var inst_50900 = (state_51021[(17)]);
var inst_50918 = (state_51021[(2)]);
var inst_50919 = (inst_50903 + (1));
var tmp51033 = inst_50902;
var tmp51034 = inst_50901;
var tmp51035 = inst_50900;
var inst_50900__$1 = tmp51035;
var inst_50901__$1 = tmp51034;
var inst_50902__$1 = tmp51033;
var inst_50903__$1 = inst_50919;
var state_51021__$1 = (function (){var statearr_51040 = state_51021;
(statearr_51040[(14)] = inst_50902__$1);

(statearr_51040[(15)] = inst_50903__$1);

(statearr_51040[(16)] = inst_50901__$1);

(statearr_51040[(17)] = inst_50900__$1);

(statearr_51040[(18)] = inst_50918);

return statearr_51040;
})();
var statearr_51041_52216 = state_51021__$1;
(statearr_51041_52216[(2)] = null);

(statearr_51041_52216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (21))){
var inst_50945 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51045_52217 = state_51021__$1;
(statearr_51045_52217[(2)] = inst_50945);

(statearr_51045_52217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (31))){
var inst_50971 = (state_51021[(9)]);
var inst_50975 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50971);
var state_51021__$1 = state_51021;
var statearr_51046_52218 = state_51021__$1;
(statearr_51046_52218[(2)] = inst_50975);

(statearr_51046_52218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (32))){
var inst_50965 = (state_51021[(19)]);
var inst_50964 = (state_51021[(11)]);
var inst_50963 = (state_51021[(20)]);
var inst_50966 = (state_51021[(12)]);
var inst_50977 = (state_51021[(2)]);
var inst_50978 = (inst_50966 + (1));
var tmp51042 = inst_50965;
var tmp51043 = inst_50964;
var tmp51044 = inst_50963;
var inst_50963__$1 = tmp51044;
var inst_50964__$1 = tmp51043;
var inst_50965__$1 = tmp51042;
var inst_50966__$1 = inst_50978;
var state_51021__$1 = (function (){var statearr_51047 = state_51021;
(statearr_51047[(19)] = inst_50965__$1);

(statearr_51047[(11)] = inst_50964__$1);

(statearr_51047[(20)] = inst_50963__$1);

(statearr_51047[(12)] = inst_50966__$1);

(statearr_51047[(21)] = inst_50977);

return statearr_51047;
})();
var statearr_51048_52221 = state_51021__$1;
(statearr_51048_52221[(2)] = null);

(statearr_51048_52221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (40))){
var inst_50990 = (state_51021[(22)]);
var inst_50994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50990);
var state_51021__$1 = state_51021;
var statearr_51049_52226 = state_51021__$1;
(statearr_51049_52226[(2)] = inst_50994);

(statearr_51049_52226[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (33))){
var inst_50981 = (state_51021[(23)]);
var inst_50983 = cljs.core.chunked_seq_QMARK_(inst_50981);
var state_51021__$1 = state_51021;
if(inst_50983){
var statearr_51050_52227 = state_51021__$1;
(statearr_51050_52227[(1)] = (36));

} else {
var statearr_51051_52228 = state_51021__$1;
(statearr_51051_52228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (13))){
var inst_50912 = (state_51021[(24)]);
var inst_50915 = cljs.core.async.close_BANG_(inst_50912);
var state_51021__$1 = state_51021;
var statearr_51052_52230 = state_51021__$1;
(statearr_51052_52230[(2)] = inst_50915);

(statearr_51052_52230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (22))){
var inst_50935 = (state_51021[(8)]);
var inst_50938 = cljs.core.async.close_BANG_(inst_50935);
var state_51021__$1 = state_51021;
var statearr_51053_52231 = state_51021__$1;
(statearr_51053_52231[(2)] = inst_50938);

(statearr_51053_52231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (36))){
var inst_50981 = (state_51021[(23)]);
var inst_50985 = cljs.core.chunk_first(inst_50981);
var inst_50986 = cljs.core.chunk_rest(inst_50981);
var inst_50987 = cljs.core.count(inst_50985);
var inst_50963 = inst_50986;
var inst_50964 = inst_50985;
var inst_50965 = inst_50987;
var inst_50966 = (0);
var state_51021__$1 = (function (){var statearr_51054 = state_51021;
(statearr_51054[(19)] = inst_50965);

(statearr_51054[(11)] = inst_50964);

(statearr_51054[(20)] = inst_50963);

(statearr_51054[(12)] = inst_50966);

return statearr_51054;
})();
var statearr_51055_52234 = state_51021__$1;
(statearr_51055_52234[(2)] = null);

(statearr_51055_52234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (41))){
var inst_50981 = (state_51021[(23)]);
var inst_50996 = (state_51021[(2)]);
var inst_50997 = cljs.core.next(inst_50981);
var inst_50963 = inst_50997;
var inst_50964 = null;
var inst_50965 = (0);
var inst_50966 = (0);
var state_51021__$1 = (function (){var statearr_51056 = state_51021;
(statearr_51056[(25)] = inst_50996);

(statearr_51056[(19)] = inst_50965);

(statearr_51056[(11)] = inst_50964);

(statearr_51056[(20)] = inst_50963);

(statearr_51056[(12)] = inst_50966);

return statearr_51056;
})();
var statearr_51057_52236 = state_51021__$1;
(statearr_51057_52236[(2)] = null);

(statearr_51057_52236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (43))){
var state_51021__$1 = state_51021;
var statearr_51058_52240 = state_51021__$1;
(statearr_51058_52240[(2)] = null);

(statearr_51058_52240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (29))){
var inst_51005 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51059_52241 = state_51021__$1;
(statearr_51059_52241[(2)] = inst_51005);

(statearr_51059_52241[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (44))){
var inst_51014 = (state_51021[(2)]);
var state_51021__$1 = (function (){var statearr_51060 = state_51021;
(statearr_51060[(26)] = inst_51014);

return statearr_51060;
})();
var statearr_51061_52243 = state_51021__$1;
(statearr_51061_52243[(2)] = null);

(statearr_51061_52243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (6))){
var inst_50955 = (state_51021[(27)]);
var inst_50954 = cljs.core.deref(cs);
var inst_50955__$1 = cljs.core.keys(inst_50954);
var inst_50956 = cljs.core.count(inst_50955__$1);
var inst_50957 = cljs.core.reset_BANG_(dctr,inst_50956);
var inst_50962 = cljs.core.seq(inst_50955__$1);
var inst_50963 = inst_50962;
var inst_50964 = null;
var inst_50965 = (0);
var inst_50966 = (0);
var state_51021__$1 = (function (){var statearr_51062 = state_51021;
(statearr_51062[(28)] = inst_50957);

(statearr_51062[(19)] = inst_50965);

(statearr_51062[(11)] = inst_50964);

(statearr_51062[(20)] = inst_50963);

(statearr_51062[(12)] = inst_50966);

(statearr_51062[(27)] = inst_50955__$1);

return statearr_51062;
})();
var statearr_51063_52244 = state_51021__$1;
(statearr_51063_52244[(2)] = null);

(statearr_51063_52244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (28))){
var inst_50963 = (state_51021[(20)]);
var inst_50981 = (state_51021[(23)]);
var inst_50981__$1 = cljs.core.seq(inst_50963);
var state_51021__$1 = (function (){var statearr_51064 = state_51021;
(statearr_51064[(23)] = inst_50981__$1);

return statearr_51064;
})();
if(inst_50981__$1){
var statearr_51065_52246 = state_51021__$1;
(statearr_51065_52246[(1)] = (33));

} else {
var statearr_51066_52247 = state_51021__$1;
(statearr_51066_52247[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (25))){
var inst_50965 = (state_51021[(19)]);
var inst_50966 = (state_51021[(12)]);
var inst_50968 = (inst_50966 < inst_50965);
var inst_50969 = inst_50968;
var state_51021__$1 = state_51021;
if(cljs.core.truth_(inst_50969)){
var statearr_51067_52249 = state_51021__$1;
(statearr_51067_52249[(1)] = (27));

} else {
var statearr_51068_52250 = state_51021__$1;
(statearr_51068_52250[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (34))){
var state_51021__$1 = state_51021;
var statearr_51069_52252 = state_51021__$1;
(statearr_51069_52252[(2)] = null);

(statearr_51069_52252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (17))){
var state_51021__$1 = state_51021;
var statearr_51070_52253 = state_51021__$1;
(statearr_51070_52253[(2)] = null);

(statearr_51070_52253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (3))){
var inst_51019 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51021__$1,inst_51019);
} else {
if((state_val_51022 === (12))){
var inst_50950 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51071_52256 = state_51021__$1;
(statearr_51071_52256[(2)] = inst_50950);

(statearr_51071_52256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (2))){
var state_51021__$1 = state_51021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51021__$1,(4),ch);
} else {
if((state_val_51022 === (23))){
var state_51021__$1 = state_51021;
var statearr_51072_52259 = state_51021__$1;
(statearr_51072_52259[(2)] = null);

(statearr_51072_52259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (35))){
var inst_51003 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51073_52260 = state_51021__$1;
(statearr_51073_52260[(2)] = inst_51003);

(statearr_51073_52260[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (19))){
var inst_50922 = (state_51021[(7)]);
var inst_50926 = cljs.core.chunk_first(inst_50922);
var inst_50927 = cljs.core.chunk_rest(inst_50922);
var inst_50928 = cljs.core.count(inst_50926);
var inst_50900 = inst_50927;
var inst_50901 = inst_50926;
var inst_50902 = inst_50928;
var inst_50903 = (0);
var state_51021__$1 = (function (){var statearr_51074 = state_51021;
(statearr_51074[(14)] = inst_50902);

(statearr_51074[(15)] = inst_50903);

(statearr_51074[(16)] = inst_50901);

(statearr_51074[(17)] = inst_50900);

return statearr_51074;
})();
var statearr_51075_52261 = state_51021__$1;
(statearr_51075_52261[(2)] = null);

(statearr_51075_52261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (11))){
var inst_50900 = (state_51021[(17)]);
var inst_50922 = (state_51021[(7)]);
var inst_50922__$1 = cljs.core.seq(inst_50900);
var state_51021__$1 = (function (){var statearr_51076 = state_51021;
(statearr_51076[(7)] = inst_50922__$1);

return statearr_51076;
})();
if(inst_50922__$1){
var statearr_51077_52262 = state_51021__$1;
(statearr_51077_52262[(1)] = (16));

} else {
var statearr_51078_52264 = state_51021__$1;
(statearr_51078_52264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (9))){
var inst_50952 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51079_52265 = state_51021__$1;
(statearr_51079_52265[(2)] = inst_50952);

(statearr_51079_52265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (5))){
var inst_50898 = cljs.core.deref(cs);
var inst_50899 = cljs.core.seq(inst_50898);
var inst_50900 = inst_50899;
var inst_50901 = null;
var inst_50902 = (0);
var inst_50903 = (0);
var state_51021__$1 = (function (){var statearr_51080 = state_51021;
(statearr_51080[(14)] = inst_50902);

(statearr_51080[(15)] = inst_50903);

(statearr_51080[(16)] = inst_50901);

(statearr_51080[(17)] = inst_50900);

return statearr_51080;
})();
var statearr_51081_52267 = state_51021__$1;
(statearr_51081_52267[(2)] = null);

(statearr_51081_52267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (14))){
var state_51021__$1 = state_51021;
var statearr_51082_52268 = state_51021__$1;
(statearr_51082_52268[(2)] = null);

(statearr_51082_52268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (45))){
var inst_51011 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51083_52269 = state_51021__$1;
(statearr_51083_52269[(2)] = inst_51011);

(statearr_51083_52269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (26))){
var inst_50955 = (state_51021[(27)]);
var inst_51007 = (state_51021[(2)]);
var inst_51008 = cljs.core.seq(inst_50955);
var state_51021__$1 = (function (){var statearr_51084 = state_51021;
(statearr_51084[(29)] = inst_51007);

return statearr_51084;
})();
if(inst_51008){
var statearr_51085_52270 = state_51021__$1;
(statearr_51085_52270[(1)] = (42));

} else {
var statearr_51086_52271 = state_51021__$1;
(statearr_51086_52271[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (16))){
var inst_50922 = (state_51021[(7)]);
var inst_50924 = cljs.core.chunked_seq_QMARK_(inst_50922);
var state_51021__$1 = state_51021;
if(inst_50924){
var statearr_51087_52272 = state_51021__$1;
(statearr_51087_52272[(1)] = (19));

} else {
var statearr_51088_52273 = state_51021__$1;
(statearr_51088_52273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (38))){
var inst_51000 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51089_52274 = state_51021__$1;
(statearr_51089_52274[(2)] = inst_51000);

(statearr_51089_52274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (30))){
var state_51021__$1 = state_51021;
var statearr_51090_52275 = state_51021__$1;
(statearr_51090_52275[(2)] = null);

(statearr_51090_52275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (10))){
var inst_50903 = (state_51021[(15)]);
var inst_50901 = (state_51021[(16)]);
var inst_50911 = cljs.core._nth(inst_50901,inst_50903);
var inst_50912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50911,(0),null);
var inst_50913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50911,(1),null);
var state_51021__$1 = (function (){var statearr_51091 = state_51021;
(statearr_51091[(24)] = inst_50912);

return statearr_51091;
})();
if(cljs.core.truth_(inst_50913)){
var statearr_51092_52279 = state_51021__$1;
(statearr_51092_52279[(1)] = (13));

} else {
var statearr_51093_52280 = state_51021__$1;
(statearr_51093_52280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (18))){
var inst_50948 = (state_51021[(2)]);
var state_51021__$1 = state_51021;
var statearr_51094_52282 = state_51021__$1;
(statearr_51094_52282[(2)] = inst_50948);

(statearr_51094_52282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (42))){
var state_51021__$1 = state_51021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51021__$1,(45),dchan);
} else {
if((state_val_51022 === (37))){
var inst_50990 = (state_51021[(22)]);
var inst_50891 = (state_51021[(10)]);
var inst_50981 = (state_51021[(23)]);
var inst_50990__$1 = cljs.core.first(inst_50981);
var inst_50991 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50990__$1,inst_50891,done);
var state_51021__$1 = (function (){var statearr_51095 = state_51021;
(statearr_51095[(22)] = inst_50990__$1);

return statearr_51095;
})();
if(cljs.core.truth_(inst_50991)){
var statearr_51096_52283 = state_51021__$1;
(statearr_51096_52283[(1)] = (39));

} else {
var statearr_51097_52284 = state_51021__$1;
(statearr_51097_52284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51022 === (8))){
var inst_50902 = (state_51021[(14)]);
var inst_50903 = (state_51021[(15)]);
var inst_50905 = (inst_50903 < inst_50902);
var inst_50906 = inst_50905;
var state_51021__$1 = state_51021;
if(cljs.core.truth_(inst_50906)){
var statearr_51098_52288 = state_51021__$1;
(statearr_51098_52288[(1)] = (10));

} else {
var statearr_51099_52289 = state_51021__$1;
(statearr_51099_52289[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__50382__auto__ = null;
var cljs$core$async$mult_$_state_machine__50382__auto____0 = (function (){
var statearr_51100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51100[(0)] = cljs$core$async$mult_$_state_machine__50382__auto__);

(statearr_51100[(1)] = (1));

return statearr_51100;
});
var cljs$core$async$mult_$_state_machine__50382__auto____1 = (function (state_51021){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51021);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51101){var ex__50385__auto__ = e51101;
var statearr_51102_52292 = state_51021;
(statearr_51102_52292[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51021[(4)]))){
var statearr_51103_52293 = state_51021;
(statearr_51103_52293[(1)] = cljs.core.first((state_51021[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52294 = state_51021;
state_51021 = G__52294;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50382__auto__ = function(state_51021){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50382__auto____1.call(this,state_51021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50382__auto____0;
cljs$core$async$mult_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50382__auto____1;
return cljs$core$async$mult_$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51104 = f__50418__auto__();
(statearr_51104[(6)] = c__50417__auto___52196);

return statearr_51104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51106 = arguments.length;
switch (G__51106) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52306 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52306(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52310 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52310(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52314 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52314(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52317 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52317(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52321 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52321(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52323 = arguments.length;
var i__4737__auto___52324 = (0);
while(true){
if((i__4737__auto___52324 < len__4736__auto___52323)){
args__4742__auto__.push((arguments[i__4737__auto___52324]));

var G__52325 = (i__4737__auto___52324 + (1));
i__4737__auto___52324 = G__52325;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51111){
var map__51112 = p__51111;
var map__51112__$1 = (((((!((map__51112 == null))))?(((((map__51112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51112):map__51112);
var opts = map__51112__$1;
var statearr_51114_52328 = state;
(statearr_51114_52328[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51115_52330 = state;
(statearr_51115_52330[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51116_52331 = state;
(statearr_51116_52331[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51107){
var G__51108 = cljs.core.first(seq51107);
var seq51107__$1 = cljs.core.next(seq51107);
var G__51109 = cljs.core.first(seq51107__$1);
var seq51107__$2 = cljs.core.next(seq51107__$1);
var G__51110 = cljs.core.first(seq51107__$2);
var seq51107__$3 = cljs.core.next(seq51107__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51108,G__51109,G__51110,seq51107__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51118 = meta51118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51119,meta51118__$1){
var self__ = this;
var _51119__$1 = this;
return (new cljs.core.async.t_cljs$core$async51117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51118__$1));
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51119){
var self__ = this;
var _51119__$1 = this;
return self__.meta51118;
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51118","meta51118",1929693971,null)], null);
}));

(cljs.core.async.t_cljs$core$async51117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51117");

(cljs.core.async.t_cljs$core$async51117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51117.
 */
cljs.core.async.__GT_t_cljs$core$async51117 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51118){
return (new cljs.core.async.t_cljs$core$async51117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51118));
});

}

return (new cljs.core.async.t_cljs$core$async51117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50417__auto___52344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51221){
var state_val_51222 = (state_51221[(1)]);
if((state_val_51222 === (7))){
var inst_51136 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51223_52345 = state_51221__$1;
(statearr_51223_52345[(2)] = inst_51136);

(statearr_51223_52345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (20))){
var inst_51148 = (state_51221[(7)]);
var state_51221__$1 = state_51221;
var statearr_51224_52346 = state_51221__$1;
(statearr_51224_52346[(2)] = inst_51148);

(statearr_51224_52346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (27))){
var state_51221__$1 = state_51221;
var statearr_51225_52347 = state_51221__$1;
(statearr_51225_52347[(2)] = null);

(statearr_51225_52347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (1))){
var inst_51123 = (state_51221[(8)]);
var inst_51123__$1 = calc_state();
var inst_51125 = (inst_51123__$1 == null);
var inst_51126 = cljs.core.not(inst_51125);
var state_51221__$1 = (function (){var statearr_51226 = state_51221;
(statearr_51226[(8)] = inst_51123__$1);

return statearr_51226;
})();
if(inst_51126){
var statearr_51227_52350 = state_51221__$1;
(statearr_51227_52350[(1)] = (2));

} else {
var statearr_51228_52351 = state_51221__$1;
(statearr_51228_52351[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (24))){
var inst_51181 = (state_51221[(9)]);
var inst_51172 = (state_51221[(10)]);
var inst_51195 = (state_51221[(11)]);
var inst_51195__$1 = (inst_51172.cljs$core$IFn$_invoke$arity$1 ? inst_51172.cljs$core$IFn$_invoke$arity$1(inst_51181) : inst_51172.call(null,inst_51181));
var state_51221__$1 = (function (){var statearr_51229 = state_51221;
(statearr_51229[(11)] = inst_51195__$1);

return statearr_51229;
})();
if(cljs.core.truth_(inst_51195__$1)){
var statearr_51230_52353 = state_51221__$1;
(statearr_51230_52353[(1)] = (29));

} else {
var statearr_51231_52357 = state_51221__$1;
(statearr_51231_52357[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (4))){
var inst_51139 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51139)){
var statearr_51232_52358 = state_51221__$1;
(statearr_51232_52358[(1)] = (8));

} else {
var statearr_51233_52359 = state_51221__$1;
(statearr_51233_52359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (15))){
var inst_51166 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51166)){
var statearr_51234_52360 = state_51221__$1;
(statearr_51234_52360[(1)] = (19));

} else {
var statearr_51235_52361 = state_51221__$1;
(statearr_51235_52361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (21))){
var inst_51171 = (state_51221[(12)]);
var inst_51171__$1 = (state_51221[(2)]);
var inst_51172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51171__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51171__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51171__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51221__$1 = (function (){var statearr_51236 = state_51221;
(statearr_51236[(12)] = inst_51171__$1);

(statearr_51236[(13)] = inst_51173);

(statearr_51236[(10)] = inst_51172);

return statearr_51236;
})();
return cljs.core.async.ioc_alts_BANG_(state_51221__$1,(22),inst_51174);
} else {
if((state_val_51222 === (31))){
var inst_51203 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51203)){
var statearr_51237_52364 = state_51221__$1;
(statearr_51237_52364[(1)] = (32));

} else {
var statearr_51238_52365 = state_51221__$1;
(statearr_51238_52365[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (32))){
var inst_51180 = (state_51221[(14)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51221__$1,(35),out,inst_51180);
} else {
if((state_val_51222 === (33))){
var inst_51171 = (state_51221[(12)]);
var inst_51148 = inst_51171;
var state_51221__$1 = (function (){var statearr_51239 = state_51221;
(statearr_51239[(7)] = inst_51148);

return statearr_51239;
})();
var statearr_51240_52370 = state_51221__$1;
(statearr_51240_52370[(2)] = null);

(statearr_51240_52370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (13))){
var inst_51148 = (state_51221[(7)]);
var inst_51155 = inst_51148.cljs$lang$protocol_mask$partition0$;
var inst_51156 = (inst_51155 & (64));
var inst_51157 = inst_51148.cljs$core$ISeq$;
var inst_51158 = (cljs.core.PROTOCOL_SENTINEL === inst_51157);
var inst_51159 = ((inst_51156) || (inst_51158));
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51159)){
var statearr_51241_52371 = state_51221__$1;
(statearr_51241_52371[(1)] = (16));

} else {
var statearr_51242_52372 = state_51221__$1;
(statearr_51242_52372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (22))){
var inst_51181 = (state_51221[(9)]);
var inst_51180 = (state_51221[(14)]);
var inst_51179 = (state_51221[(2)]);
var inst_51180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51179,(0),null);
var inst_51181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51179,(1),null);
var inst_51182 = (inst_51180__$1 == null);
var inst_51183 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51181__$1,change);
var inst_51184 = ((inst_51182) || (inst_51183));
var state_51221__$1 = (function (){var statearr_51243 = state_51221;
(statearr_51243[(9)] = inst_51181__$1);

(statearr_51243[(14)] = inst_51180__$1);

return statearr_51243;
})();
if(cljs.core.truth_(inst_51184)){
var statearr_51244_52375 = state_51221__$1;
(statearr_51244_52375[(1)] = (23));

} else {
var statearr_51245_52376 = state_51221__$1;
(statearr_51245_52376[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (36))){
var inst_51171 = (state_51221[(12)]);
var inst_51148 = inst_51171;
var state_51221__$1 = (function (){var statearr_51246 = state_51221;
(statearr_51246[(7)] = inst_51148);

return statearr_51246;
})();
var statearr_51247_52381 = state_51221__$1;
(statearr_51247_52381[(2)] = null);

(statearr_51247_52381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (29))){
var inst_51195 = (state_51221[(11)]);
var state_51221__$1 = state_51221;
var statearr_51248_52382 = state_51221__$1;
(statearr_51248_52382[(2)] = inst_51195);

(statearr_51248_52382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (6))){
var state_51221__$1 = state_51221;
var statearr_51249_52383 = state_51221__$1;
(statearr_51249_52383[(2)] = false);

(statearr_51249_52383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (28))){
var inst_51191 = (state_51221[(2)]);
var inst_51192 = calc_state();
var inst_51148 = inst_51192;
var state_51221__$1 = (function (){var statearr_51250 = state_51221;
(statearr_51250[(7)] = inst_51148);

(statearr_51250[(15)] = inst_51191);

return statearr_51250;
})();
var statearr_51251_52386 = state_51221__$1;
(statearr_51251_52386[(2)] = null);

(statearr_51251_52386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (25))){
var inst_51217 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51252_52387 = state_51221__$1;
(statearr_51252_52387[(2)] = inst_51217);

(statearr_51252_52387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (34))){
var inst_51215 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51253_52388 = state_51221__$1;
(statearr_51253_52388[(2)] = inst_51215);

(statearr_51253_52388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (17))){
var state_51221__$1 = state_51221;
var statearr_51254_52389 = state_51221__$1;
(statearr_51254_52389[(2)] = false);

(statearr_51254_52389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (3))){
var state_51221__$1 = state_51221;
var statearr_51255_52394 = state_51221__$1;
(statearr_51255_52394[(2)] = false);

(statearr_51255_52394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (12))){
var inst_51219 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51221__$1,inst_51219);
} else {
if((state_val_51222 === (2))){
var inst_51123 = (state_51221[(8)]);
var inst_51128 = inst_51123.cljs$lang$protocol_mask$partition0$;
var inst_51129 = (inst_51128 & (64));
var inst_51130 = inst_51123.cljs$core$ISeq$;
var inst_51131 = (cljs.core.PROTOCOL_SENTINEL === inst_51130);
var inst_51132 = ((inst_51129) || (inst_51131));
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51132)){
var statearr_51256_52395 = state_51221__$1;
(statearr_51256_52395[(1)] = (5));

} else {
var statearr_51257_52396 = state_51221__$1;
(statearr_51257_52396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (23))){
var inst_51180 = (state_51221[(14)]);
var inst_51186 = (inst_51180 == null);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51186)){
var statearr_51258_52403 = state_51221__$1;
(statearr_51258_52403[(1)] = (26));

} else {
var statearr_51259_52404 = state_51221__$1;
(statearr_51259_52404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (35))){
var inst_51206 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51206)){
var statearr_51260_52405 = state_51221__$1;
(statearr_51260_52405[(1)] = (36));

} else {
var statearr_51261_52406 = state_51221__$1;
(statearr_51261_52406[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (19))){
var inst_51148 = (state_51221[(7)]);
var inst_51168 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51148);
var state_51221__$1 = state_51221;
var statearr_51262_52409 = state_51221__$1;
(statearr_51262_52409[(2)] = inst_51168);

(statearr_51262_52409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (11))){
var inst_51148 = (state_51221[(7)]);
var inst_51152 = (inst_51148 == null);
var inst_51153 = cljs.core.not(inst_51152);
var state_51221__$1 = state_51221;
if(inst_51153){
var statearr_51263_52410 = state_51221__$1;
(statearr_51263_52410[(1)] = (13));

} else {
var statearr_51264_52411 = state_51221__$1;
(statearr_51264_52411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (9))){
var inst_51123 = (state_51221[(8)]);
var state_51221__$1 = state_51221;
var statearr_51265_52413 = state_51221__$1;
(statearr_51265_52413[(2)] = inst_51123);

(statearr_51265_52413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (5))){
var state_51221__$1 = state_51221;
var statearr_51266_52417 = state_51221__$1;
(statearr_51266_52417[(2)] = true);

(statearr_51266_52417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (14))){
var state_51221__$1 = state_51221;
var statearr_51267_52418 = state_51221__$1;
(statearr_51267_52418[(2)] = false);

(statearr_51267_52418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (26))){
var inst_51181 = (state_51221[(9)]);
var inst_51188 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51181);
var state_51221__$1 = state_51221;
var statearr_51268_52419 = state_51221__$1;
(statearr_51268_52419[(2)] = inst_51188);

(statearr_51268_52419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (16))){
var state_51221__$1 = state_51221;
var statearr_51269_52422 = state_51221__$1;
(statearr_51269_52422[(2)] = true);

(statearr_51269_52422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (38))){
var inst_51211 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51270_52423 = state_51221__$1;
(statearr_51270_52423[(2)] = inst_51211);

(statearr_51270_52423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (30))){
var inst_51181 = (state_51221[(9)]);
var inst_51173 = (state_51221[(13)]);
var inst_51172 = (state_51221[(10)]);
var inst_51198 = cljs.core.empty_QMARK_(inst_51172);
var inst_51199 = (inst_51173.cljs$core$IFn$_invoke$arity$1 ? inst_51173.cljs$core$IFn$_invoke$arity$1(inst_51181) : inst_51173.call(null,inst_51181));
var inst_51200 = cljs.core.not(inst_51199);
var inst_51201 = ((inst_51198) && (inst_51200));
var state_51221__$1 = state_51221;
var statearr_51271_52424 = state_51221__$1;
(statearr_51271_52424[(2)] = inst_51201);

(statearr_51271_52424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (10))){
var inst_51123 = (state_51221[(8)]);
var inst_51144 = (state_51221[(2)]);
var inst_51145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51148 = inst_51123;
var state_51221__$1 = (function (){var statearr_51272 = state_51221;
(statearr_51272[(7)] = inst_51148);

(statearr_51272[(16)] = inst_51147);

(statearr_51272[(17)] = inst_51145);

(statearr_51272[(18)] = inst_51146);

return statearr_51272;
})();
var statearr_51273_52429 = state_51221__$1;
(statearr_51273_52429[(2)] = null);

(statearr_51273_52429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (18))){
var inst_51163 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51274_52430 = state_51221__$1;
(statearr_51274_52430[(2)] = inst_51163);

(statearr_51274_52430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (37))){
var state_51221__$1 = state_51221;
var statearr_51275_52431 = state_51221__$1;
(statearr_51275_52431[(2)] = null);

(statearr_51275_52431[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (8))){
var inst_51123 = (state_51221[(8)]);
var inst_51141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51123);
var state_51221__$1 = state_51221;
var statearr_51276_52434 = state_51221__$1;
(statearr_51276_52434[(2)] = inst_51141);

(statearr_51276_52434[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__50382__auto__ = null;
var cljs$core$async$mix_$_state_machine__50382__auto____0 = (function (){
var statearr_51277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51277[(0)] = cljs$core$async$mix_$_state_machine__50382__auto__);

(statearr_51277[(1)] = (1));

return statearr_51277;
});
var cljs$core$async$mix_$_state_machine__50382__auto____1 = (function (state_51221){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51221);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51278){var ex__50385__auto__ = e51278;
var statearr_51279_52439 = state_51221;
(statearr_51279_52439[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51221[(4)]))){
var statearr_51280_52440 = state_51221;
(statearr_51280_52440[(1)] = cljs.core.first((state_51221[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52441 = state_51221;
state_51221 = G__52441;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50382__auto__ = function(state_51221){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50382__auto____1.call(this,state_51221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50382__auto____0;
cljs$core$async$mix_$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50382__auto____1;
return cljs$core$async$mix_$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51281 = f__50418__auto__();
(statearr_51281[(6)] = c__50417__auto___52344);

return statearr_51281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52444 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52444(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52449 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52449(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52450 = (function() {
var G__52451 = null;
var G__52451__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52451__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52451 = function(p,v){
switch(arguments.length){
case 1:
return G__52451__1.call(this,p);
case 2:
return G__52451__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52451.cljs$core$IFn$_invoke$arity$1 = G__52451__1;
G__52451.cljs$core$IFn$_invoke$arity$2 = G__52451__2;
return G__52451;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51283 = arguments.length;
switch (G__51283) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52450(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52450(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51286 = arguments.length;
switch (G__51286) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51284_SHARP_){
if(cljs.core.truth_((p1__51284_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51284_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51284_SHARP_.call(null,topic)))){
return p1__51284_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51284_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51287 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51288){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51288 = meta51288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51289,meta51288__$1){
var self__ = this;
var _51289__$1 = this;
return (new cljs.core.async.t_cljs$core$async51287(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51288__$1));
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51289){
var self__ = this;
var _51289__$1 = this;
return self__.meta51288;
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51288","meta51288",1393246442,null)], null);
}));

(cljs.core.async.t_cljs$core$async51287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51287");

(cljs.core.async.t_cljs$core$async51287.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51287.
 */
cljs.core.async.__GT_t_cljs$core$async51287 = (function cljs$core$async$__GT_t_cljs$core$async51287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51288){
return (new cljs.core.async.t_cljs$core$async51287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51288));
});

}

return (new cljs.core.async.t_cljs$core$async51287(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50417__auto___52457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51361){
var state_val_51362 = (state_51361[(1)]);
if((state_val_51362 === (7))){
var inst_51357 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51363_52458 = state_51361__$1;
(statearr_51363_52458[(2)] = inst_51357);

(statearr_51363_52458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (20))){
var state_51361__$1 = state_51361;
var statearr_51364_52459 = state_51361__$1;
(statearr_51364_52459[(2)] = null);

(statearr_51364_52459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (1))){
var state_51361__$1 = state_51361;
var statearr_51365_52460 = state_51361__$1;
(statearr_51365_52460[(2)] = null);

(statearr_51365_52460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (24))){
var inst_51340 = (state_51361[(7)]);
var inst_51349 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51340);
var state_51361__$1 = state_51361;
var statearr_51366_52463 = state_51361__$1;
(statearr_51366_52463[(2)] = inst_51349);

(statearr_51366_52463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (4))){
var inst_51292 = (state_51361[(8)]);
var inst_51292__$1 = (state_51361[(2)]);
var inst_51293 = (inst_51292__$1 == null);
var state_51361__$1 = (function (){var statearr_51367 = state_51361;
(statearr_51367[(8)] = inst_51292__$1);

return statearr_51367;
})();
if(cljs.core.truth_(inst_51293)){
var statearr_51368_52465 = state_51361__$1;
(statearr_51368_52465[(1)] = (5));

} else {
var statearr_51369_52466 = state_51361__$1;
(statearr_51369_52466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (15))){
var inst_51334 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51370_52467 = state_51361__$1;
(statearr_51370_52467[(2)] = inst_51334);

(statearr_51370_52467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (21))){
var inst_51354 = (state_51361[(2)]);
var state_51361__$1 = (function (){var statearr_51371 = state_51361;
(statearr_51371[(9)] = inst_51354);

return statearr_51371;
})();
var statearr_51372_52468 = state_51361__$1;
(statearr_51372_52468[(2)] = null);

(statearr_51372_52468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (13))){
var inst_51316 = (state_51361[(10)]);
var inst_51318 = cljs.core.chunked_seq_QMARK_(inst_51316);
var state_51361__$1 = state_51361;
if(inst_51318){
var statearr_51373_52471 = state_51361__$1;
(statearr_51373_52471[(1)] = (16));

} else {
var statearr_51374_52472 = state_51361__$1;
(statearr_51374_52472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (22))){
var inst_51346 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
if(cljs.core.truth_(inst_51346)){
var statearr_51375_52474 = state_51361__$1;
(statearr_51375_52474[(1)] = (23));

} else {
var statearr_51376_52475 = state_51361__$1;
(statearr_51376_52475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (6))){
var inst_51340 = (state_51361[(7)]);
var inst_51292 = (state_51361[(8)]);
var inst_51342 = (state_51361[(11)]);
var inst_51340__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51292) : topic_fn.call(null,inst_51292));
var inst_51341 = cljs.core.deref(mults);
var inst_51342__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51341,inst_51340__$1);
var state_51361__$1 = (function (){var statearr_51377 = state_51361;
(statearr_51377[(7)] = inst_51340__$1);

(statearr_51377[(11)] = inst_51342__$1);

return statearr_51377;
})();
if(cljs.core.truth_(inst_51342__$1)){
var statearr_51378_52476 = state_51361__$1;
(statearr_51378_52476[(1)] = (19));

} else {
var statearr_51379_52477 = state_51361__$1;
(statearr_51379_52477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (25))){
var inst_51351 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51380_52478 = state_51361__$1;
(statearr_51380_52478[(2)] = inst_51351);

(statearr_51380_52478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (17))){
var inst_51316 = (state_51361[(10)]);
var inst_51325 = cljs.core.first(inst_51316);
var inst_51326 = cljs.core.async.muxch_STAR_(inst_51325);
var inst_51327 = cljs.core.async.close_BANG_(inst_51326);
var inst_51328 = cljs.core.next(inst_51316);
var inst_51302 = inst_51328;
var inst_51303 = null;
var inst_51304 = (0);
var inst_51305 = (0);
var state_51361__$1 = (function (){var statearr_51381 = state_51361;
(statearr_51381[(12)] = inst_51303);

(statearr_51381[(13)] = inst_51302);

(statearr_51381[(14)] = inst_51304);

(statearr_51381[(15)] = inst_51305);

(statearr_51381[(16)] = inst_51327);

return statearr_51381;
})();
var statearr_51382_52479 = state_51361__$1;
(statearr_51382_52479[(2)] = null);

(statearr_51382_52479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (3))){
var inst_51359 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51361__$1,inst_51359);
} else {
if((state_val_51362 === (12))){
var inst_51336 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51383_52480 = state_51361__$1;
(statearr_51383_52480[(2)] = inst_51336);

(statearr_51383_52480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (2))){
var state_51361__$1 = state_51361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51361__$1,(4),ch);
} else {
if((state_val_51362 === (23))){
var state_51361__$1 = state_51361;
var statearr_51384_52481 = state_51361__$1;
(statearr_51384_52481[(2)] = null);

(statearr_51384_52481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (19))){
var inst_51292 = (state_51361[(8)]);
var inst_51342 = (state_51361[(11)]);
var inst_51344 = cljs.core.async.muxch_STAR_(inst_51342);
var state_51361__$1 = state_51361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51361__$1,(22),inst_51344,inst_51292);
} else {
if((state_val_51362 === (11))){
var inst_51302 = (state_51361[(13)]);
var inst_51316 = (state_51361[(10)]);
var inst_51316__$1 = cljs.core.seq(inst_51302);
var state_51361__$1 = (function (){var statearr_51385 = state_51361;
(statearr_51385[(10)] = inst_51316__$1);

return statearr_51385;
})();
if(inst_51316__$1){
var statearr_51386_52482 = state_51361__$1;
(statearr_51386_52482[(1)] = (13));

} else {
var statearr_51387_52483 = state_51361__$1;
(statearr_51387_52483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (9))){
var inst_51338 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51388_52484 = state_51361__$1;
(statearr_51388_52484[(2)] = inst_51338);

(statearr_51388_52484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (5))){
var inst_51299 = cljs.core.deref(mults);
var inst_51300 = cljs.core.vals(inst_51299);
var inst_51301 = cljs.core.seq(inst_51300);
var inst_51302 = inst_51301;
var inst_51303 = null;
var inst_51304 = (0);
var inst_51305 = (0);
var state_51361__$1 = (function (){var statearr_51389 = state_51361;
(statearr_51389[(12)] = inst_51303);

(statearr_51389[(13)] = inst_51302);

(statearr_51389[(14)] = inst_51304);

(statearr_51389[(15)] = inst_51305);

return statearr_51389;
})();
var statearr_51390_52485 = state_51361__$1;
(statearr_51390_52485[(2)] = null);

(statearr_51390_52485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (14))){
var state_51361__$1 = state_51361;
var statearr_51394_52486 = state_51361__$1;
(statearr_51394_52486[(2)] = null);

(statearr_51394_52486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (16))){
var inst_51316 = (state_51361[(10)]);
var inst_51320 = cljs.core.chunk_first(inst_51316);
var inst_51321 = cljs.core.chunk_rest(inst_51316);
var inst_51322 = cljs.core.count(inst_51320);
var inst_51302 = inst_51321;
var inst_51303 = inst_51320;
var inst_51304 = inst_51322;
var inst_51305 = (0);
var state_51361__$1 = (function (){var statearr_51395 = state_51361;
(statearr_51395[(12)] = inst_51303);

(statearr_51395[(13)] = inst_51302);

(statearr_51395[(14)] = inst_51304);

(statearr_51395[(15)] = inst_51305);

return statearr_51395;
})();
var statearr_51396_52487 = state_51361__$1;
(statearr_51396_52487[(2)] = null);

(statearr_51396_52487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (10))){
var inst_51303 = (state_51361[(12)]);
var inst_51302 = (state_51361[(13)]);
var inst_51304 = (state_51361[(14)]);
var inst_51305 = (state_51361[(15)]);
var inst_51310 = cljs.core._nth(inst_51303,inst_51305);
var inst_51311 = cljs.core.async.muxch_STAR_(inst_51310);
var inst_51312 = cljs.core.async.close_BANG_(inst_51311);
var inst_51313 = (inst_51305 + (1));
var tmp51391 = inst_51303;
var tmp51392 = inst_51302;
var tmp51393 = inst_51304;
var inst_51302__$1 = tmp51392;
var inst_51303__$1 = tmp51391;
var inst_51304__$1 = tmp51393;
var inst_51305__$1 = inst_51313;
var state_51361__$1 = (function (){var statearr_51397 = state_51361;
(statearr_51397[(12)] = inst_51303__$1);

(statearr_51397[(17)] = inst_51312);

(statearr_51397[(13)] = inst_51302__$1);

(statearr_51397[(14)] = inst_51304__$1);

(statearr_51397[(15)] = inst_51305__$1);

return statearr_51397;
})();
var statearr_51398_52488 = state_51361__$1;
(statearr_51398_52488[(2)] = null);

(statearr_51398_52488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (18))){
var inst_51331 = (state_51361[(2)]);
var state_51361__$1 = state_51361;
var statearr_51399_52489 = state_51361__$1;
(statearr_51399_52489[(2)] = inst_51331);

(statearr_51399_52489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51362 === (8))){
var inst_51304 = (state_51361[(14)]);
var inst_51305 = (state_51361[(15)]);
var inst_51307 = (inst_51305 < inst_51304);
var inst_51308 = inst_51307;
var state_51361__$1 = state_51361;
if(cljs.core.truth_(inst_51308)){
var statearr_51400_52490 = state_51361__$1;
(statearr_51400_52490[(1)] = (10));

} else {
var statearr_51401_52491 = state_51361__$1;
(statearr_51401_52491[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51402[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51402[(1)] = (1));

return statearr_51402;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51361){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51361);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51403){var ex__50385__auto__ = e51403;
var statearr_51404_52499 = state_51361;
(statearr_51404_52499[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51361[(4)]))){
var statearr_51405_52504 = state_51361;
(statearr_51405_52504[(1)] = cljs.core.first((state_51361[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52512 = state_51361;
state_51361 = G__52512;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51406 = f__50418__auto__();
(statearr_51406[(6)] = c__50417__auto___52457);

return statearr_51406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51408 = arguments.length;
switch (G__51408) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51410 = arguments.length;
switch (G__51410) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51412 = arguments.length;
switch (G__51412) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50417__auto___52523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51455){
var state_val_51456 = (state_51455[(1)]);
if((state_val_51456 === (7))){
var state_51455__$1 = state_51455;
var statearr_51457_52524 = state_51455__$1;
(statearr_51457_52524[(2)] = null);

(statearr_51457_52524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (1))){
var state_51455__$1 = state_51455;
var statearr_51458_52525 = state_51455__$1;
(statearr_51458_52525[(2)] = null);

(statearr_51458_52525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (4))){
var inst_51416 = (state_51455[(7)]);
var inst_51415 = (state_51455[(8)]);
var inst_51418 = (inst_51416 < inst_51415);
var state_51455__$1 = state_51455;
if(cljs.core.truth_(inst_51418)){
var statearr_51459_52529 = state_51455__$1;
(statearr_51459_52529[(1)] = (6));

} else {
var statearr_51460_52530 = state_51455__$1;
(statearr_51460_52530[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (15))){
var inst_51441 = (state_51455[(9)]);
var inst_51446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51441);
var state_51455__$1 = state_51455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51455__$1,(17),out,inst_51446);
} else {
if((state_val_51456 === (13))){
var inst_51441 = (state_51455[(9)]);
var inst_51441__$1 = (state_51455[(2)]);
var inst_51442 = cljs.core.some(cljs.core.nil_QMARK_,inst_51441__$1);
var state_51455__$1 = (function (){var statearr_51461 = state_51455;
(statearr_51461[(9)] = inst_51441__$1);

return statearr_51461;
})();
if(cljs.core.truth_(inst_51442)){
var statearr_51462_52531 = state_51455__$1;
(statearr_51462_52531[(1)] = (14));

} else {
var statearr_51463_52532 = state_51455__$1;
(statearr_51463_52532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (6))){
var state_51455__$1 = state_51455;
var statearr_51464_52533 = state_51455__$1;
(statearr_51464_52533[(2)] = null);

(statearr_51464_52533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (17))){
var inst_51448 = (state_51455[(2)]);
var state_51455__$1 = (function (){var statearr_51466 = state_51455;
(statearr_51466[(10)] = inst_51448);

return statearr_51466;
})();
var statearr_51467_52534 = state_51455__$1;
(statearr_51467_52534[(2)] = null);

(statearr_51467_52534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (3))){
var inst_51453 = (state_51455[(2)]);
var state_51455__$1 = state_51455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51455__$1,inst_51453);
} else {
if((state_val_51456 === (12))){
var _ = (function (){var statearr_51468 = state_51455;
(statearr_51468[(4)] = cljs.core.rest((state_51455[(4)])));

return statearr_51468;
})();
var state_51455__$1 = state_51455;
var ex51465 = (state_51455__$1[(2)]);
var statearr_51469_52535 = state_51455__$1;
(statearr_51469_52535[(5)] = ex51465);


if((ex51465 instanceof Object)){
var statearr_51470_52536 = state_51455__$1;
(statearr_51470_52536[(1)] = (11));

(statearr_51470_52536[(5)] = null);

} else {
throw ex51465;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (2))){
var inst_51414 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51415 = cnt;
var inst_51416 = (0);
var state_51455__$1 = (function (){var statearr_51471 = state_51455;
(statearr_51471[(7)] = inst_51416);

(statearr_51471[(8)] = inst_51415);

(statearr_51471[(11)] = inst_51414);

return statearr_51471;
})();
var statearr_51472_52537 = state_51455__$1;
(statearr_51472_52537[(2)] = null);

(statearr_51472_52537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (11))){
var inst_51420 = (state_51455[(2)]);
var inst_51421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51455__$1 = (function (){var statearr_51473 = state_51455;
(statearr_51473[(12)] = inst_51420);

return statearr_51473;
})();
var statearr_51474_52540 = state_51455__$1;
(statearr_51474_52540[(2)] = inst_51421);

(statearr_51474_52540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (9))){
var inst_51416 = (state_51455[(7)]);
var _ = (function (){var statearr_51475 = state_51455;
(statearr_51475[(4)] = cljs.core.cons((12),(state_51455[(4)])));

return statearr_51475;
})();
var inst_51427 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51416) : chs__$1.call(null,inst_51416));
var inst_51428 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51416) : done.call(null,inst_51416));
var inst_51429 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51427,inst_51428);
var ___$1 = (function (){var statearr_51476 = state_51455;
(statearr_51476[(4)] = cljs.core.rest((state_51455[(4)])));

return statearr_51476;
})();
var state_51455__$1 = state_51455;
var statearr_51477_52542 = state_51455__$1;
(statearr_51477_52542[(2)] = inst_51429);

(statearr_51477_52542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (5))){
var inst_51439 = (state_51455[(2)]);
var state_51455__$1 = (function (){var statearr_51478 = state_51455;
(statearr_51478[(13)] = inst_51439);

return statearr_51478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51455__$1,(13),dchan);
} else {
if((state_val_51456 === (14))){
var inst_51444 = cljs.core.async.close_BANG_(out);
var state_51455__$1 = state_51455;
var statearr_51479_52546 = state_51455__$1;
(statearr_51479_52546[(2)] = inst_51444);

(statearr_51479_52546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (16))){
var inst_51451 = (state_51455[(2)]);
var state_51455__$1 = state_51455;
var statearr_51480_52547 = state_51455__$1;
(statearr_51480_52547[(2)] = inst_51451);

(statearr_51480_52547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (10))){
var inst_51416 = (state_51455[(7)]);
var inst_51432 = (state_51455[(2)]);
var inst_51433 = (inst_51416 + (1));
var inst_51416__$1 = inst_51433;
var state_51455__$1 = (function (){var statearr_51481 = state_51455;
(statearr_51481[(7)] = inst_51416__$1);

(statearr_51481[(14)] = inst_51432);

return statearr_51481;
})();
var statearr_51482_52548 = state_51455__$1;
(statearr_51482_52548[(2)] = null);

(statearr_51482_52548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51456 === (8))){
var inst_51437 = (state_51455[(2)]);
var state_51455__$1 = state_51455;
var statearr_51483_52550 = state_51455__$1;
(statearr_51483_52550[(2)] = inst_51437);

(statearr_51483_52550[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51484[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51484[(1)] = (1));

return statearr_51484;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51455){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51455);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51485){var ex__50385__auto__ = e51485;
var statearr_51486_52553 = state_51455;
(statearr_51486_52553[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51455[(4)]))){
var statearr_51487_52554 = state_51455;
(statearr_51487_52554[(1)] = cljs.core.first((state_51455[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52556 = state_51455;
state_51455 = G__52556;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51488 = f__50418__auto__();
(statearr_51488[(6)] = c__50417__auto___52523);

return statearr_51488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51491 = arguments.length;
switch (G__51491) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51523){
var state_val_51524 = (state_51523[(1)]);
if((state_val_51524 === (7))){
var inst_51502 = (state_51523[(7)]);
var inst_51503 = (state_51523[(8)]);
var inst_51502__$1 = (state_51523[(2)]);
var inst_51503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51502__$1,(0),null);
var inst_51504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51502__$1,(1),null);
var inst_51505 = (inst_51503__$1 == null);
var state_51523__$1 = (function (){var statearr_51525 = state_51523;
(statearr_51525[(7)] = inst_51502__$1);

(statearr_51525[(8)] = inst_51503__$1);

(statearr_51525[(9)] = inst_51504);

return statearr_51525;
})();
if(cljs.core.truth_(inst_51505)){
var statearr_51526_52564 = state_51523__$1;
(statearr_51526_52564[(1)] = (8));

} else {
var statearr_51527_52565 = state_51523__$1;
(statearr_51527_52565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (1))){
var inst_51492 = cljs.core.vec(chs);
var inst_51493 = inst_51492;
var state_51523__$1 = (function (){var statearr_51528 = state_51523;
(statearr_51528[(10)] = inst_51493);

return statearr_51528;
})();
var statearr_51529_52566 = state_51523__$1;
(statearr_51529_52566[(2)] = null);

(statearr_51529_52566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (4))){
var inst_51493 = (state_51523[(10)]);
var state_51523__$1 = state_51523;
return cljs.core.async.ioc_alts_BANG_(state_51523__$1,(7),inst_51493);
} else {
if((state_val_51524 === (6))){
var inst_51519 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51530_52570 = state_51523__$1;
(statearr_51530_52570[(2)] = inst_51519);

(statearr_51530_52570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (3))){
var inst_51521 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51523__$1,inst_51521);
} else {
if((state_val_51524 === (2))){
var inst_51493 = (state_51523[(10)]);
var inst_51495 = cljs.core.count(inst_51493);
var inst_51496 = (inst_51495 > (0));
var state_51523__$1 = state_51523;
if(cljs.core.truth_(inst_51496)){
var statearr_51532_52571 = state_51523__$1;
(statearr_51532_52571[(1)] = (4));

} else {
var statearr_51533_52572 = state_51523__$1;
(statearr_51533_52572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (11))){
var inst_51493 = (state_51523[(10)]);
var inst_51512 = (state_51523[(2)]);
var tmp51531 = inst_51493;
var inst_51493__$1 = tmp51531;
var state_51523__$1 = (function (){var statearr_51534 = state_51523;
(statearr_51534[(11)] = inst_51512);

(statearr_51534[(10)] = inst_51493__$1);

return statearr_51534;
})();
var statearr_51535_52575 = state_51523__$1;
(statearr_51535_52575[(2)] = null);

(statearr_51535_52575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (9))){
var inst_51503 = (state_51523[(8)]);
var state_51523__$1 = state_51523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51523__$1,(11),out,inst_51503);
} else {
if((state_val_51524 === (5))){
var inst_51517 = cljs.core.async.close_BANG_(out);
var state_51523__$1 = state_51523;
var statearr_51536_52577 = state_51523__$1;
(statearr_51536_52577[(2)] = inst_51517);

(statearr_51536_52577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (10))){
var inst_51515 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51537_52578 = state_51523__$1;
(statearr_51537_52578[(2)] = inst_51515);

(statearr_51537_52578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (8))){
var inst_51502 = (state_51523[(7)]);
var inst_51503 = (state_51523[(8)]);
var inst_51504 = (state_51523[(9)]);
var inst_51493 = (state_51523[(10)]);
var inst_51507 = (function (){var cs = inst_51493;
var vec__51498 = inst_51502;
var v = inst_51503;
var c = inst_51504;
return (function (p1__51489_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51489_SHARP_);
});
})();
var inst_51508 = cljs.core.filterv(inst_51507,inst_51493);
var inst_51493__$1 = inst_51508;
var state_51523__$1 = (function (){var statearr_51538 = state_51523;
(statearr_51538[(10)] = inst_51493__$1);

return statearr_51538;
})();
var statearr_51539_52582 = state_51523__$1;
(statearr_51539_52582[(2)] = null);

(statearr_51539_52582[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51540[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51540[(1)] = (1));

return statearr_51540;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51523){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51523);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51541){var ex__50385__auto__ = e51541;
var statearr_51542_52583 = state_51523;
(statearr_51542_52583[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51523[(4)]))){
var statearr_51543_52585 = state_51523;
(statearr_51543_52585[(1)] = cljs.core.first((state_51523[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52588 = state_51523;
state_51523 = G__52588;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51544 = f__50418__auto__();
(statearr_51544[(6)] = c__50417__auto___52560);

return statearr_51544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51546 = arguments.length;
switch (G__51546) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51570){
var state_val_51571 = (state_51570[(1)]);
if((state_val_51571 === (7))){
var inst_51552 = (state_51570[(7)]);
var inst_51552__$1 = (state_51570[(2)]);
var inst_51553 = (inst_51552__$1 == null);
var inst_51554 = cljs.core.not(inst_51553);
var state_51570__$1 = (function (){var statearr_51572 = state_51570;
(statearr_51572[(7)] = inst_51552__$1);

return statearr_51572;
})();
if(inst_51554){
var statearr_51573_52591 = state_51570__$1;
(statearr_51573_52591[(1)] = (8));

} else {
var statearr_51574_52592 = state_51570__$1;
(statearr_51574_52592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (1))){
var inst_51547 = (0);
var state_51570__$1 = (function (){var statearr_51575 = state_51570;
(statearr_51575[(8)] = inst_51547);

return statearr_51575;
})();
var statearr_51576_52593 = state_51570__$1;
(statearr_51576_52593[(2)] = null);

(statearr_51576_52593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (4))){
var state_51570__$1 = state_51570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51570__$1,(7),ch);
} else {
if((state_val_51571 === (6))){
var inst_51565 = (state_51570[(2)]);
var state_51570__$1 = state_51570;
var statearr_51577_52594 = state_51570__$1;
(statearr_51577_52594[(2)] = inst_51565);

(statearr_51577_52594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (3))){
var inst_51567 = (state_51570[(2)]);
var inst_51568 = cljs.core.async.close_BANG_(out);
var state_51570__$1 = (function (){var statearr_51578 = state_51570;
(statearr_51578[(9)] = inst_51567);

return statearr_51578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51570__$1,inst_51568);
} else {
if((state_val_51571 === (2))){
var inst_51547 = (state_51570[(8)]);
var inst_51549 = (inst_51547 < n);
var state_51570__$1 = state_51570;
if(cljs.core.truth_(inst_51549)){
var statearr_51579_52595 = state_51570__$1;
(statearr_51579_52595[(1)] = (4));

} else {
var statearr_51580_52596 = state_51570__$1;
(statearr_51580_52596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (11))){
var inst_51547 = (state_51570[(8)]);
var inst_51557 = (state_51570[(2)]);
var inst_51558 = (inst_51547 + (1));
var inst_51547__$1 = inst_51558;
var state_51570__$1 = (function (){var statearr_51581 = state_51570;
(statearr_51581[(8)] = inst_51547__$1);

(statearr_51581[(10)] = inst_51557);

return statearr_51581;
})();
var statearr_51582_52597 = state_51570__$1;
(statearr_51582_52597[(2)] = null);

(statearr_51582_52597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (9))){
var state_51570__$1 = state_51570;
var statearr_51583_52598 = state_51570__$1;
(statearr_51583_52598[(2)] = null);

(statearr_51583_52598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (5))){
var state_51570__$1 = state_51570;
var statearr_51584_52599 = state_51570__$1;
(statearr_51584_52599[(2)] = null);

(statearr_51584_52599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (10))){
var inst_51562 = (state_51570[(2)]);
var state_51570__$1 = state_51570;
var statearr_51585_52600 = state_51570__$1;
(statearr_51585_52600[(2)] = inst_51562);

(statearr_51585_52600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51571 === (8))){
var inst_51552 = (state_51570[(7)]);
var state_51570__$1 = state_51570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51570__$1,(11),out,inst_51552);
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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51586[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51586[(1)] = (1));

return statearr_51586;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51570){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51570);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51587){var ex__50385__auto__ = e51587;
var statearr_51588_52601 = state_51570;
(statearr_51588_52601[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51570[(4)]))){
var statearr_51589_52602 = state_51570;
(statearr_51589_52602[(1)] = cljs.core.first((state_51570[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52603 = state_51570;
state_51570 = G__52603;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51590 = f__50418__auto__();
(statearr_51590[(6)] = c__50417__auto___52590);

return statearr_51590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51592 = (function (f,ch,meta51593){
this.f = f;
this.ch = ch;
this.meta51593 = meta51593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51594,meta51593__$1){
var self__ = this;
var _51594__$1 = this;
return (new cljs.core.async.t_cljs$core$async51592(self__.f,self__.ch,meta51593__$1));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51594){
var self__ = this;
var _51594__$1 = this;
return self__.meta51593;
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51595 = (function (f,ch,meta51593,_,fn1,meta51596){
this.f = f;
this.ch = ch;
this.meta51593 = meta51593;
this._ = _;
this.fn1 = fn1;
this.meta51596 = meta51596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51597,meta51596__$1){
var self__ = this;
var _51597__$1 = this;
return (new cljs.core.async.t_cljs$core$async51595(self__.f,self__.ch,self__.meta51593,self__._,self__.fn1,meta51596__$1));
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51597){
var self__ = this;
var _51597__$1 = this;
return self__.meta51596;
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51591_SHARP_){
var G__51598 = (((p1__51591_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51591_SHARP_) : self__.f.call(null,p1__51591_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51598) : f1.call(null,G__51598));
});
}));

(cljs.core.async.t_cljs$core$async51595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51593","meta51593",-478092088,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51592","cljs.core.async/t_cljs$core$async51592",1529315902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51596","meta51596",-3966992,null)], null);
}));

(cljs.core.async.t_cljs$core$async51595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51595");

(cljs.core.async.t_cljs$core$async51595.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51595.
 */
cljs.core.async.__GT_t_cljs$core$async51595 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51595(f__$1,ch__$1,meta51593__$1,___$2,fn1__$1,meta51596){
return (new cljs.core.async.t_cljs$core$async51595(f__$1,ch__$1,meta51593__$1,___$2,fn1__$1,meta51596));
});

}

return (new cljs.core.async.t_cljs$core$async51595(self__.f,self__.ch,self__.meta51593,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51599 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51599) : self__.f.call(null,G__51599));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51593","meta51593",-478092088,null)], null);
}));

(cljs.core.async.t_cljs$core$async51592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51592");

(cljs.core.async.t_cljs$core$async51592.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51592.
 */
cljs.core.async.__GT_t_cljs$core$async51592 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51592(f__$1,ch__$1,meta51593){
return (new cljs.core.async.t_cljs$core$async51592(f__$1,ch__$1,meta51593));
});

}

return (new cljs.core.async.t_cljs$core$async51592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51600 = (function (f,ch,meta51601){
this.f = f;
this.ch = ch;
this.meta51601 = meta51601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51602,meta51601__$1){
var self__ = this;
var _51602__$1 = this;
return (new cljs.core.async.t_cljs$core$async51600(self__.f,self__.ch,meta51601__$1));
}));

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51602){
var self__ = this;
var _51602__$1 = this;
return self__.meta51601;
}));

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51601","meta51601",566908817,null)], null);
}));

(cljs.core.async.t_cljs$core$async51600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51600");

(cljs.core.async.t_cljs$core$async51600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51600.
 */
cljs.core.async.__GT_t_cljs$core$async51600 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51600(f__$1,ch__$1,meta51601){
return (new cljs.core.async.t_cljs$core$async51600(f__$1,ch__$1,meta51601));
});

}

return (new cljs.core.async.t_cljs$core$async51600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51603 = (function (p,ch,meta51604){
this.p = p;
this.ch = ch;
this.meta51604 = meta51604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51605,meta51604__$1){
var self__ = this;
var _51605__$1 = this;
return (new cljs.core.async.t_cljs$core$async51603(self__.p,self__.ch,meta51604__$1));
}));

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51605){
var self__ = this;
var _51605__$1 = this;
return self__.meta51604;
}));

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51604","meta51604",-205447240,null)], null);
}));

(cljs.core.async.t_cljs$core$async51603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51603");

(cljs.core.async.t_cljs$core$async51603.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51603.
 */
cljs.core.async.__GT_t_cljs$core$async51603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51603(p__$1,ch__$1,meta51604){
return (new cljs.core.async.t_cljs$core$async51603(p__$1,ch__$1,meta51604));
});

}

return (new cljs.core.async.t_cljs$core$async51603(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51607 = arguments.length;
switch (G__51607) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51628){
var state_val_51629 = (state_51628[(1)]);
if((state_val_51629 === (7))){
var inst_51624 = (state_51628[(2)]);
var state_51628__$1 = state_51628;
var statearr_51630_52606 = state_51628__$1;
(statearr_51630_52606[(2)] = inst_51624);

(statearr_51630_52606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (1))){
var state_51628__$1 = state_51628;
var statearr_51631_52607 = state_51628__$1;
(statearr_51631_52607[(2)] = null);

(statearr_51631_52607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (4))){
var inst_51610 = (state_51628[(7)]);
var inst_51610__$1 = (state_51628[(2)]);
var inst_51611 = (inst_51610__$1 == null);
var state_51628__$1 = (function (){var statearr_51632 = state_51628;
(statearr_51632[(7)] = inst_51610__$1);

return statearr_51632;
})();
if(cljs.core.truth_(inst_51611)){
var statearr_51633_52608 = state_51628__$1;
(statearr_51633_52608[(1)] = (5));

} else {
var statearr_51634_52609 = state_51628__$1;
(statearr_51634_52609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (6))){
var inst_51610 = (state_51628[(7)]);
var inst_51615 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51610) : p.call(null,inst_51610));
var state_51628__$1 = state_51628;
if(cljs.core.truth_(inst_51615)){
var statearr_51635_52610 = state_51628__$1;
(statearr_51635_52610[(1)] = (8));

} else {
var statearr_51636_52611 = state_51628__$1;
(statearr_51636_52611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (3))){
var inst_51626 = (state_51628[(2)]);
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51628__$1,inst_51626);
} else {
if((state_val_51629 === (2))){
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51628__$1,(4),ch);
} else {
if((state_val_51629 === (11))){
var inst_51618 = (state_51628[(2)]);
var state_51628__$1 = state_51628;
var statearr_51637_52612 = state_51628__$1;
(statearr_51637_52612[(2)] = inst_51618);

(statearr_51637_52612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (9))){
var state_51628__$1 = state_51628;
var statearr_51638_52613 = state_51628__$1;
(statearr_51638_52613[(2)] = null);

(statearr_51638_52613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (5))){
var inst_51613 = cljs.core.async.close_BANG_(out);
var state_51628__$1 = state_51628;
var statearr_51639_52614 = state_51628__$1;
(statearr_51639_52614[(2)] = inst_51613);

(statearr_51639_52614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (10))){
var inst_51621 = (state_51628[(2)]);
var state_51628__$1 = (function (){var statearr_51640 = state_51628;
(statearr_51640[(8)] = inst_51621);

return statearr_51640;
})();
var statearr_51641_52615 = state_51628__$1;
(statearr_51641_52615[(2)] = null);

(statearr_51641_52615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (8))){
var inst_51610 = (state_51628[(7)]);
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51628__$1,(11),out,inst_51610);
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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51642 = [null,null,null,null,null,null,null,null,null];
(statearr_51642[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51642[(1)] = (1));

return statearr_51642;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51628){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51628);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51643){var ex__50385__auto__ = e51643;
var statearr_51644_52616 = state_51628;
(statearr_51644_52616[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51628[(4)]))){
var statearr_51645_52617 = state_51628;
(statearr_51645_52617[(1)] = cljs.core.first((state_51628[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52618 = state_51628;
state_51628 = G__52618;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51646 = f__50418__auto__();
(statearr_51646[(6)] = c__50417__auto___52605);

return statearr_51646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51648 = arguments.length;
switch (G__51648) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51710){
var state_val_51711 = (state_51710[(1)]);
if((state_val_51711 === (7))){
var inst_51706 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
var statearr_51712_52620 = state_51710__$1;
(statearr_51712_52620[(2)] = inst_51706);

(statearr_51712_52620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (20))){
var inst_51676 = (state_51710[(7)]);
var inst_51687 = (state_51710[(2)]);
var inst_51688 = cljs.core.next(inst_51676);
var inst_51662 = inst_51688;
var inst_51663 = null;
var inst_51664 = (0);
var inst_51665 = (0);
var state_51710__$1 = (function (){var statearr_51713 = state_51710;
(statearr_51713[(8)] = inst_51663);

(statearr_51713[(9)] = inst_51664);

(statearr_51713[(10)] = inst_51665);

(statearr_51713[(11)] = inst_51687);

(statearr_51713[(12)] = inst_51662);

return statearr_51713;
})();
var statearr_51714_52621 = state_51710__$1;
(statearr_51714_52621[(2)] = null);

(statearr_51714_52621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (1))){
var state_51710__$1 = state_51710;
var statearr_51715_52622 = state_51710__$1;
(statearr_51715_52622[(2)] = null);

(statearr_51715_52622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (4))){
var inst_51651 = (state_51710[(13)]);
var inst_51651__$1 = (state_51710[(2)]);
var inst_51652 = (inst_51651__$1 == null);
var state_51710__$1 = (function (){var statearr_51716 = state_51710;
(statearr_51716[(13)] = inst_51651__$1);

return statearr_51716;
})();
if(cljs.core.truth_(inst_51652)){
var statearr_51717_52623 = state_51710__$1;
(statearr_51717_52623[(1)] = (5));

} else {
var statearr_51718_52624 = state_51710__$1;
(statearr_51718_52624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (15))){
var state_51710__$1 = state_51710;
var statearr_51722_52625 = state_51710__$1;
(statearr_51722_52625[(2)] = null);

(statearr_51722_52625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (21))){
var state_51710__$1 = state_51710;
var statearr_51723_52626 = state_51710__$1;
(statearr_51723_52626[(2)] = null);

(statearr_51723_52626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (13))){
var inst_51663 = (state_51710[(8)]);
var inst_51664 = (state_51710[(9)]);
var inst_51665 = (state_51710[(10)]);
var inst_51662 = (state_51710[(12)]);
var inst_51672 = (state_51710[(2)]);
var inst_51673 = (inst_51665 + (1));
var tmp51719 = inst_51663;
var tmp51720 = inst_51664;
var tmp51721 = inst_51662;
var inst_51662__$1 = tmp51721;
var inst_51663__$1 = tmp51719;
var inst_51664__$1 = tmp51720;
var inst_51665__$1 = inst_51673;
var state_51710__$1 = (function (){var statearr_51724 = state_51710;
(statearr_51724[(8)] = inst_51663__$1);

(statearr_51724[(9)] = inst_51664__$1);

(statearr_51724[(10)] = inst_51665__$1);

(statearr_51724[(14)] = inst_51672);

(statearr_51724[(12)] = inst_51662__$1);

return statearr_51724;
})();
var statearr_51725_52627 = state_51710__$1;
(statearr_51725_52627[(2)] = null);

(statearr_51725_52627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (22))){
var state_51710__$1 = state_51710;
var statearr_51726_52628 = state_51710__$1;
(statearr_51726_52628[(2)] = null);

(statearr_51726_52628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (6))){
var inst_51651 = (state_51710[(13)]);
var inst_51660 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51651) : f.call(null,inst_51651));
var inst_51661 = cljs.core.seq(inst_51660);
var inst_51662 = inst_51661;
var inst_51663 = null;
var inst_51664 = (0);
var inst_51665 = (0);
var state_51710__$1 = (function (){var statearr_51727 = state_51710;
(statearr_51727[(8)] = inst_51663);

(statearr_51727[(9)] = inst_51664);

(statearr_51727[(10)] = inst_51665);

(statearr_51727[(12)] = inst_51662);

return statearr_51727;
})();
var statearr_51728_52629 = state_51710__$1;
(statearr_51728_52629[(2)] = null);

(statearr_51728_52629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (17))){
var inst_51676 = (state_51710[(7)]);
var inst_51680 = cljs.core.chunk_first(inst_51676);
var inst_51681 = cljs.core.chunk_rest(inst_51676);
var inst_51682 = cljs.core.count(inst_51680);
var inst_51662 = inst_51681;
var inst_51663 = inst_51680;
var inst_51664 = inst_51682;
var inst_51665 = (0);
var state_51710__$1 = (function (){var statearr_51729 = state_51710;
(statearr_51729[(8)] = inst_51663);

(statearr_51729[(9)] = inst_51664);

(statearr_51729[(10)] = inst_51665);

(statearr_51729[(12)] = inst_51662);

return statearr_51729;
})();
var statearr_51730_52630 = state_51710__$1;
(statearr_51730_52630[(2)] = null);

(statearr_51730_52630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (3))){
var inst_51708 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51710__$1,inst_51708);
} else {
if((state_val_51711 === (12))){
var inst_51696 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
var statearr_51731_52631 = state_51710__$1;
(statearr_51731_52631[(2)] = inst_51696);

(statearr_51731_52631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (2))){
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51710__$1,(4),in$);
} else {
if((state_val_51711 === (23))){
var inst_51704 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
var statearr_51732_52632 = state_51710__$1;
(statearr_51732_52632[(2)] = inst_51704);

(statearr_51732_52632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (19))){
var inst_51691 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
var statearr_51733_52633 = state_51710__$1;
(statearr_51733_52633[(2)] = inst_51691);

(statearr_51733_52633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (11))){
var inst_51676 = (state_51710[(7)]);
var inst_51662 = (state_51710[(12)]);
var inst_51676__$1 = cljs.core.seq(inst_51662);
var state_51710__$1 = (function (){var statearr_51734 = state_51710;
(statearr_51734[(7)] = inst_51676__$1);

return statearr_51734;
})();
if(inst_51676__$1){
var statearr_51735_52634 = state_51710__$1;
(statearr_51735_52634[(1)] = (14));

} else {
var statearr_51736_52635 = state_51710__$1;
(statearr_51736_52635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (9))){
var inst_51698 = (state_51710[(2)]);
var inst_51699 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51710__$1 = (function (){var statearr_51737 = state_51710;
(statearr_51737[(15)] = inst_51698);

return statearr_51737;
})();
if(cljs.core.truth_(inst_51699)){
var statearr_51738_52636 = state_51710__$1;
(statearr_51738_52636[(1)] = (21));

} else {
var statearr_51739_52637 = state_51710__$1;
(statearr_51739_52637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (5))){
var inst_51654 = cljs.core.async.close_BANG_(out);
var state_51710__$1 = state_51710;
var statearr_51740_52638 = state_51710__$1;
(statearr_51740_52638[(2)] = inst_51654);

(statearr_51740_52638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (14))){
var inst_51676 = (state_51710[(7)]);
var inst_51678 = cljs.core.chunked_seq_QMARK_(inst_51676);
var state_51710__$1 = state_51710;
if(inst_51678){
var statearr_51741_52639 = state_51710__$1;
(statearr_51741_52639[(1)] = (17));

} else {
var statearr_51742_52640 = state_51710__$1;
(statearr_51742_52640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (16))){
var inst_51694 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
var statearr_51743_52641 = state_51710__$1;
(statearr_51743_52641[(2)] = inst_51694);

(statearr_51743_52641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51711 === (10))){
var inst_51663 = (state_51710[(8)]);
var inst_51665 = (state_51710[(10)]);
var inst_51670 = cljs.core._nth(inst_51663,inst_51665);
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51710__$1,(13),out,inst_51670);
} else {
if((state_val_51711 === (18))){
var inst_51676 = (state_51710[(7)]);
var inst_51685 = cljs.core.first(inst_51676);
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51710__$1,(20),out,inst_51685);
} else {
if((state_val_51711 === (8))){
var inst_51664 = (state_51710[(9)]);
var inst_51665 = (state_51710[(10)]);
var inst_51667 = (inst_51665 < inst_51664);
var inst_51668 = inst_51667;
var state_51710__$1 = state_51710;
if(cljs.core.truth_(inst_51668)){
var statearr_51744_52642 = state_51710__$1;
(statearr_51744_52642[(1)] = (10));

} else {
var statearr_51745_52643 = state_51710__$1;
(statearr_51745_52643[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____0 = (function (){
var statearr_51746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51746[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__);

(statearr_51746[(1)] = (1));

return statearr_51746;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____1 = (function (state_51710){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51710);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51747){var ex__50385__auto__ = e51747;
var statearr_51748_52644 = state_51710;
(statearr_51748_52644[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51710[(4)]))){
var statearr_51749_52645 = state_51710;
(statearr_51749_52645[(1)] = cljs.core.first((state_51710[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52646 = state_51710;
state_51710 = G__52646;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__ = function(state_51710){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____1.call(this,state_51710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50382__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51750 = f__50418__auto__();
(statearr_51750[(6)] = c__50417__auto__);

return statearr_51750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));

return c__50417__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51752 = arguments.length;
switch (G__51752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51754 = arguments.length;
switch (G__51754) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51756 = arguments.length;
switch (G__51756) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51780){
var state_val_51781 = (state_51780[(1)]);
if((state_val_51781 === (7))){
var inst_51775 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51782_52651 = state_51780__$1;
(statearr_51782_52651[(2)] = inst_51775);

(statearr_51782_52651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (1))){
var inst_51757 = null;
var state_51780__$1 = (function (){var statearr_51783 = state_51780;
(statearr_51783[(7)] = inst_51757);

return statearr_51783;
})();
var statearr_51784_52652 = state_51780__$1;
(statearr_51784_52652[(2)] = null);

(statearr_51784_52652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (4))){
var inst_51760 = (state_51780[(8)]);
var inst_51760__$1 = (state_51780[(2)]);
var inst_51761 = (inst_51760__$1 == null);
var inst_51762 = cljs.core.not(inst_51761);
var state_51780__$1 = (function (){var statearr_51785 = state_51780;
(statearr_51785[(8)] = inst_51760__$1);

return statearr_51785;
})();
if(inst_51762){
var statearr_51786_52653 = state_51780__$1;
(statearr_51786_52653[(1)] = (5));

} else {
var statearr_51787_52654 = state_51780__$1;
(statearr_51787_52654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (6))){
var state_51780__$1 = state_51780;
var statearr_51788_52655 = state_51780__$1;
(statearr_51788_52655[(2)] = null);

(statearr_51788_52655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (3))){
var inst_51777 = (state_51780[(2)]);
var inst_51778 = cljs.core.async.close_BANG_(out);
var state_51780__$1 = (function (){var statearr_51789 = state_51780;
(statearr_51789[(9)] = inst_51777);

return statearr_51789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51780__$1,inst_51778);
} else {
if((state_val_51781 === (2))){
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51780__$1,(4),ch);
} else {
if((state_val_51781 === (11))){
var inst_51760 = (state_51780[(8)]);
var inst_51769 = (state_51780[(2)]);
var inst_51757 = inst_51760;
var state_51780__$1 = (function (){var statearr_51790 = state_51780;
(statearr_51790[(7)] = inst_51757);

(statearr_51790[(10)] = inst_51769);

return statearr_51790;
})();
var statearr_51791_52656 = state_51780__$1;
(statearr_51791_52656[(2)] = null);

(statearr_51791_52656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (9))){
var inst_51760 = (state_51780[(8)]);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51780__$1,(11),out,inst_51760);
} else {
if((state_val_51781 === (5))){
var inst_51757 = (state_51780[(7)]);
var inst_51760 = (state_51780[(8)]);
var inst_51764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51760,inst_51757);
var state_51780__$1 = state_51780;
if(inst_51764){
var statearr_51793_52657 = state_51780__$1;
(statearr_51793_52657[(1)] = (8));

} else {
var statearr_51794_52658 = state_51780__$1;
(statearr_51794_52658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (10))){
var inst_51772 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51795_52659 = state_51780__$1;
(statearr_51795_52659[(2)] = inst_51772);

(statearr_51795_52659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (8))){
var inst_51757 = (state_51780[(7)]);
var tmp51792 = inst_51757;
var inst_51757__$1 = tmp51792;
var state_51780__$1 = (function (){var statearr_51796 = state_51780;
(statearr_51796[(7)] = inst_51757__$1);

return statearr_51796;
})();
var statearr_51797_52660 = state_51780__$1;
(statearr_51797_52660[(2)] = null);

(statearr_51797_52660[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51798[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51798[(1)] = (1));

return statearr_51798;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51780){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51780);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51799){var ex__50385__auto__ = e51799;
var statearr_51800_52661 = state_51780;
(statearr_51800_52661[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51780[(4)]))){
var statearr_51801_52662 = state_51780;
(statearr_51801_52662[(1)] = cljs.core.first((state_51780[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52663 = state_51780;
state_51780 = G__52663;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51802 = f__50418__auto__();
(statearr_51802[(6)] = c__50417__auto___52650);

return statearr_51802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51804 = arguments.length;
switch (G__51804) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51842){
var state_val_51843 = (state_51842[(1)]);
if((state_val_51843 === (7))){
var inst_51838 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51844_52666 = state_51842__$1;
(statearr_51844_52666[(2)] = inst_51838);

(statearr_51844_52666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (1))){
var inst_51805 = (new Array(n));
var inst_51806 = inst_51805;
var inst_51807 = (0);
var state_51842__$1 = (function (){var statearr_51845 = state_51842;
(statearr_51845[(7)] = inst_51806);

(statearr_51845[(8)] = inst_51807);

return statearr_51845;
})();
var statearr_51846_52667 = state_51842__$1;
(statearr_51846_52667[(2)] = null);

(statearr_51846_52667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (4))){
var inst_51810 = (state_51842[(9)]);
var inst_51810__$1 = (state_51842[(2)]);
var inst_51811 = (inst_51810__$1 == null);
var inst_51812 = cljs.core.not(inst_51811);
var state_51842__$1 = (function (){var statearr_51847 = state_51842;
(statearr_51847[(9)] = inst_51810__$1);

return statearr_51847;
})();
if(inst_51812){
var statearr_51848_52668 = state_51842__$1;
(statearr_51848_52668[(1)] = (5));

} else {
var statearr_51849_52669 = state_51842__$1;
(statearr_51849_52669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (15))){
var inst_51832 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51850_52670 = state_51842__$1;
(statearr_51850_52670[(2)] = inst_51832);

(statearr_51850_52670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (13))){
var state_51842__$1 = state_51842;
var statearr_51851_52671 = state_51842__$1;
(statearr_51851_52671[(2)] = null);

(statearr_51851_52671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (6))){
var inst_51807 = (state_51842[(8)]);
var inst_51828 = (inst_51807 > (0));
var state_51842__$1 = state_51842;
if(cljs.core.truth_(inst_51828)){
var statearr_51852_52672 = state_51842__$1;
(statearr_51852_52672[(1)] = (12));

} else {
var statearr_51853_52673 = state_51842__$1;
(statearr_51853_52673[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (3))){
var inst_51840 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51842__$1,inst_51840);
} else {
if((state_val_51843 === (12))){
var inst_51806 = (state_51842[(7)]);
var inst_51830 = cljs.core.vec(inst_51806);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51842__$1,(15),out,inst_51830);
} else {
if((state_val_51843 === (2))){
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51842__$1,(4),ch);
} else {
if((state_val_51843 === (11))){
var inst_51822 = (state_51842[(2)]);
var inst_51823 = (new Array(n));
var inst_51806 = inst_51823;
var inst_51807 = (0);
var state_51842__$1 = (function (){var statearr_51854 = state_51842;
(statearr_51854[(7)] = inst_51806);

(statearr_51854[(8)] = inst_51807);

(statearr_51854[(10)] = inst_51822);

return statearr_51854;
})();
var statearr_51855_52674 = state_51842__$1;
(statearr_51855_52674[(2)] = null);

(statearr_51855_52674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (9))){
var inst_51806 = (state_51842[(7)]);
var inst_51820 = cljs.core.vec(inst_51806);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51842__$1,(11),out,inst_51820);
} else {
if((state_val_51843 === (5))){
var inst_51806 = (state_51842[(7)]);
var inst_51807 = (state_51842[(8)]);
var inst_51810 = (state_51842[(9)]);
var inst_51815 = (state_51842[(11)]);
var inst_51814 = (inst_51806[inst_51807] = inst_51810);
var inst_51815__$1 = (inst_51807 + (1));
var inst_51816 = (inst_51815__$1 < n);
var state_51842__$1 = (function (){var statearr_51856 = state_51842;
(statearr_51856[(11)] = inst_51815__$1);

(statearr_51856[(12)] = inst_51814);

return statearr_51856;
})();
if(cljs.core.truth_(inst_51816)){
var statearr_51857_52675 = state_51842__$1;
(statearr_51857_52675[(1)] = (8));

} else {
var statearr_51858_52676 = state_51842__$1;
(statearr_51858_52676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (14))){
var inst_51835 = (state_51842[(2)]);
var inst_51836 = cljs.core.async.close_BANG_(out);
var state_51842__$1 = (function (){var statearr_51860 = state_51842;
(statearr_51860[(13)] = inst_51835);

return statearr_51860;
})();
var statearr_51861_52677 = state_51842__$1;
(statearr_51861_52677[(2)] = inst_51836);

(statearr_51861_52677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (10))){
var inst_51826 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51862_52678 = state_51842__$1;
(statearr_51862_52678[(2)] = inst_51826);

(statearr_51862_52678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (8))){
var inst_51806 = (state_51842[(7)]);
var inst_51815 = (state_51842[(11)]);
var tmp51859 = inst_51806;
var inst_51806__$1 = tmp51859;
var inst_51807 = inst_51815;
var state_51842__$1 = (function (){var statearr_51863 = state_51842;
(statearr_51863[(7)] = inst_51806__$1);

(statearr_51863[(8)] = inst_51807);

return statearr_51863;
})();
var statearr_51864_52679 = state_51842__$1;
(statearr_51864_52679[(2)] = null);

(statearr_51864_52679[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51865[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51865[(1)] = (1));

return statearr_51865;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51842){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51842);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51866){var ex__50385__auto__ = e51866;
var statearr_51867_52680 = state_51842;
(statearr_51867_52680[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51842[(4)]))){
var statearr_51868_52681 = state_51842;
(statearr_51868_52681[(1)] = cljs.core.first((state_51842[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52682 = state_51842;
state_51842 = G__52682;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51869 = f__50418__auto__();
(statearr_51869[(6)] = c__50417__auto___52665);

return statearr_51869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51871 = arguments.length;
switch (G__51871) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50417__auto___52684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50418__auto__ = (function (){var switch__50381__auto__ = (function (state_51913){
var state_val_51914 = (state_51913[(1)]);
if((state_val_51914 === (7))){
var inst_51909 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51915_52685 = state_51913__$1;
(statearr_51915_52685[(2)] = inst_51909);

(statearr_51915_52685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (1))){
var inst_51872 = [];
var inst_51873 = inst_51872;
var inst_51874 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51913__$1 = (function (){var statearr_51916 = state_51913;
(statearr_51916[(7)] = inst_51873);

(statearr_51916[(8)] = inst_51874);

return statearr_51916;
})();
var statearr_51917_52686 = state_51913__$1;
(statearr_51917_52686[(2)] = null);

(statearr_51917_52686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (4))){
var inst_51877 = (state_51913[(9)]);
var inst_51877__$1 = (state_51913[(2)]);
var inst_51878 = (inst_51877__$1 == null);
var inst_51879 = cljs.core.not(inst_51878);
var state_51913__$1 = (function (){var statearr_51918 = state_51913;
(statearr_51918[(9)] = inst_51877__$1);

return statearr_51918;
})();
if(inst_51879){
var statearr_51919_52691 = state_51913__$1;
(statearr_51919_52691[(1)] = (5));

} else {
var statearr_51920_52692 = state_51913__$1;
(statearr_51920_52692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (15))){
var inst_51903 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51921_52693 = state_51913__$1;
(statearr_51921_52693[(2)] = inst_51903);

(statearr_51921_52693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (13))){
var state_51913__$1 = state_51913;
var statearr_51922_52694 = state_51913__$1;
(statearr_51922_52694[(2)] = null);

(statearr_51922_52694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (6))){
var inst_51873 = (state_51913[(7)]);
var inst_51898 = inst_51873.length;
var inst_51899 = (inst_51898 > (0));
var state_51913__$1 = state_51913;
if(cljs.core.truth_(inst_51899)){
var statearr_51923_52695 = state_51913__$1;
(statearr_51923_52695[(1)] = (12));

} else {
var statearr_51924_52696 = state_51913__$1;
(statearr_51924_52696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (3))){
var inst_51911 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51913__$1,inst_51911);
} else {
if((state_val_51914 === (12))){
var inst_51873 = (state_51913[(7)]);
var inst_51901 = cljs.core.vec(inst_51873);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51913__$1,(15),out,inst_51901);
} else {
if((state_val_51914 === (2))){
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51913__$1,(4),ch);
} else {
if((state_val_51914 === (11))){
var inst_51881 = (state_51913[(10)]);
var inst_51877 = (state_51913[(9)]);
var inst_51891 = (state_51913[(2)]);
var inst_51892 = [];
var inst_51893 = inst_51892.push(inst_51877);
var inst_51873 = inst_51892;
var inst_51874 = inst_51881;
var state_51913__$1 = (function (){var statearr_51925 = state_51913;
(statearr_51925[(7)] = inst_51873);

(statearr_51925[(8)] = inst_51874);

(statearr_51925[(11)] = inst_51893);

(statearr_51925[(12)] = inst_51891);

return statearr_51925;
})();
var statearr_51926_52700 = state_51913__$1;
(statearr_51926_52700[(2)] = null);

(statearr_51926_52700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (9))){
var inst_51873 = (state_51913[(7)]);
var inst_51889 = cljs.core.vec(inst_51873);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51913__$1,(11),out,inst_51889);
} else {
if((state_val_51914 === (5))){
var inst_51874 = (state_51913[(8)]);
var inst_51881 = (state_51913[(10)]);
var inst_51877 = (state_51913[(9)]);
var inst_51881__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51877) : f.call(null,inst_51877));
var inst_51882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51881__$1,inst_51874);
var inst_51883 = cljs.core.keyword_identical_QMARK_(inst_51874,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51884 = ((inst_51882) || (inst_51883));
var state_51913__$1 = (function (){var statearr_51927 = state_51913;
(statearr_51927[(10)] = inst_51881__$1);

return statearr_51927;
})();
if(cljs.core.truth_(inst_51884)){
var statearr_51928_52701 = state_51913__$1;
(statearr_51928_52701[(1)] = (8));

} else {
var statearr_51929_52702 = state_51913__$1;
(statearr_51929_52702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (14))){
var inst_51906 = (state_51913[(2)]);
var inst_51907 = cljs.core.async.close_BANG_(out);
var state_51913__$1 = (function (){var statearr_51931 = state_51913;
(statearr_51931[(13)] = inst_51906);

return statearr_51931;
})();
var statearr_51932_52703 = state_51913__$1;
(statearr_51932_52703[(2)] = inst_51907);

(statearr_51932_52703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (10))){
var inst_51896 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51933_52704 = state_51913__$1;
(statearr_51933_52704[(2)] = inst_51896);

(statearr_51933_52704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (8))){
var inst_51873 = (state_51913[(7)]);
var inst_51881 = (state_51913[(10)]);
var inst_51877 = (state_51913[(9)]);
var inst_51886 = inst_51873.push(inst_51877);
var tmp51930 = inst_51873;
var inst_51873__$1 = tmp51930;
var inst_51874 = inst_51881;
var state_51913__$1 = (function (){var statearr_51934 = state_51913;
(statearr_51934[(14)] = inst_51886);

(statearr_51934[(7)] = inst_51873__$1);

(statearr_51934[(8)] = inst_51874);

return statearr_51934;
})();
var statearr_51935_52705 = state_51913__$1;
(statearr_51935_52705[(2)] = null);

(statearr_51935_52705[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50382__auto__ = null;
var cljs$core$async$state_machine__50382__auto____0 = (function (){
var statearr_51936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51936[(0)] = cljs$core$async$state_machine__50382__auto__);

(statearr_51936[(1)] = (1));

return statearr_51936;
});
var cljs$core$async$state_machine__50382__auto____1 = (function (state_51913){
while(true){
var ret_value__50383__auto__ = (function (){try{while(true){
var result__50384__auto__ = switch__50381__auto__(state_51913);
if(cljs.core.keyword_identical_QMARK_(result__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50384__auto__;
}
break;
}
}catch (e51937){var ex__50385__auto__ = e51937;
var statearr_51938_52706 = state_51913;
(statearr_51938_52706[(2)] = ex__50385__auto__);


if(cljs.core.seq((state_51913[(4)]))){
var statearr_51939_52707 = state_51913;
(statearr_51939_52707[(1)] = cljs.core.first((state_51913[(4)])));

} else {
throw ex__50385__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52708 = state_51913;
state_51913 = G__52708;
continue;
} else {
return ret_value__50383__auto__;
}
break;
}
});
cljs$core$async$state_machine__50382__auto__ = function(state_51913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50382__auto____1.call(this,state_51913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50382__auto____0;
cljs$core$async$state_machine__50382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50382__auto____1;
return cljs$core$async$state_machine__50382__auto__;
})()
})();
var state__50419__auto__ = (function (){var statearr_51940 = f__50418__auto__();
(statearr_51940[(6)] = c__50417__auto___52684);

return statearr_51940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50419__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

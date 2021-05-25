goog.provide('sci.impl.max_or_throw');

/**
 * @interface
 */
sci.impl.max_or_throw.MaxOrThrow = function(){};

var sci$impl$max_or_throw$MaxOrThrow$max_or_throw$dyn_62626 = (function (this$,ctx,n){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.max_or_throw.max_or_throw[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,ctx,n) : m__4429__auto__.call(null,this$,ctx,n));
} else {
var m__4426__auto__ = (sci.impl.max_or_throw.max_or_throw["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,ctx,n) : m__4426__auto__.call(null,this$,ctx,n));
} else {
throw cljs.core.missing_protocol("MaxOrThrow.max-or-throw",this$);
}
}
});
sci.impl.max_or_throw.max_or_throw = (function sci$impl$max_or_throw$max_or_throw(this$,ctx,n){
if((((!((this$ == null)))) && ((!((this$.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 == null)))))){
return this$.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3(this$,ctx,n);
} else {
return sci$impl$max_or_throw$MaxOrThrow$max_or_throw$dyn_62626(this$,ctx,n);
}
});

sci.impl.max_or_throw.bottom = (function sci$impl$max_or_throw$bottom(n,data){
return (new cljs.core.LazySeq(null,(function (){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Maximum number of elements realized: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),data);
}),null,null));
});
sci.impl.max_or_throw.take_STAR_ = (function sci$impl$max_or_throw$take_STAR_(n,coll,err_val){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.cons(cljs.core.first(s),(function (){var G__62623 = (n - (1));
var G__62624 = cljs.core.rest(s);
var G__62625 = err_val;
return (sci.impl.max_or_throw.take_STAR_.cljs$core$IFn$_invoke$arity$3 ? sci.impl.max_or_throw.take_STAR_.cljs$core$IFn$_invoke$arity$3(G__62623,G__62624,G__62625) : sci.impl.max_or_throw.take_STAR_.call(null,G__62623,G__62624,G__62625));
})());
} else {
return null;
}
} else {
return err_val;
}
}),null,null));
});
sci.impl.max_or_throw.take_or_throw = (function sci$impl$max_or_throw$take_or_throw(coll,ctx,n){
return sci.impl.max_or_throw.take_STAR_(n,coll,sci.impl.max_or_throw.bottom(n,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"column","column",2078222095),(new cljs.core.Delay((function (){
return coll;
}),null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),n,new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(ctx)], null)], 0))));
});
goog.object.set(sci.impl.max_or_throw.MaxOrThrow,"null",true);

goog.object.set(sci.impl.max_or_throw.max_or_throw,"null",(function (this$,ctx,n){
return this$;
}));

goog.object.set(sci.impl.max_or_throw.MaxOrThrow,"_",true);

goog.object.set(sci.impl.max_or_throw.max_or_throw,"_",(function (this$,ctx,n){
return this$;
}));

(cljs.core.LazySeq.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Cons.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Range.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Iterate.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Iterate.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Repeat.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Repeat.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

//# sourceMappingURL=sci.impl.max_or_throw.js.map

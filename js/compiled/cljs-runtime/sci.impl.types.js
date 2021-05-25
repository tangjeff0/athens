goog.provide('sci.impl.types');

/**
 * @interface
 */
sci.impl.types.IBox = function(){};

var sci$impl$types$IBox$setVal$dyn_62152 = (function (_this,_v){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.setVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4429__auto__.call(null,_this,_v));
} else {
var m__4426__auto__ = (sci.impl.types.setVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4426__auto__.call(null,_this,_v));
} else {
throw cljs.core.missing_protocol("IBox.setVal",_this);
}
}
});
sci.impl.types.setVal = (function sci$impl$types$setVal(_this,_v){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$setVal$arity$2 == null)))))){
return _this.sci$impl$types$IBox$setVal$arity$2(_this,_v);
} else {
return sci$impl$types$IBox$setVal$dyn_62152(_this,_v);
}
});

var sci$impl$types$IBox$getVal$dyn_62153 = (function (_this){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.getVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4429__auto__.call(null,_this));
} else {
var m__4426__auto__ = (sci.impl.types.getVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4426__auto__.call(null,_this));
} else {
throw cljs.core.missing_protocol("IBox.getVal",_this);
}
}
});
sci.impl.types.getVal = (function sci$impl$types$getVal(_this){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$getVal$arity$1 == null)))))){
return _this.sci$impl$types$IBox$getVal$arity$1(_this);
} else {
return sci$impl$types$IBox$getVal$dyn_62153(_this);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalVar = (function (v){
this.v = v;
});
(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.v;
}));

(sci.impl.types.EvalVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(sci.impl.types.EvalVar.cljs$lang$type = true);

(sci.impl.types.EvalVar.cljs$lang$ctorStr = "sci.impl.types/EvalVar");

(sci.impl.types.EvalVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalVar");
}));

/**
 * Positional factory function for sci.impl.types/EvalVar.
 */
sci.impl.types.__GT_EvalVar = (function sci$impl$types$__GT_EvalVar(v){
return (new sci.impl.types.EvalVar(v));
});


//# sourceMappingURL=sci.impl.types.js.map

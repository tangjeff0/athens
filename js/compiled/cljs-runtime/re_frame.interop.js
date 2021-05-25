goog.provide('re_frame.interop');
re_frame.interop.on_load = (function re_frame$interop$on_load(listener){
try{return goog.events.listen(self,"load",listener);
}catch (e31897){var _ = e31897;
return null;
}});
re_frame.interop.next_tick = goog.async.nextTick;
re_frame.interop.empty_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
re_frame.interop.after_render = reagent.core.after_render;
/**
 * @define {boolean}
 */
re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
re_frame.interop.ratom = (function re_frame$interop$ratom(x){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
re_frame.interop.ratom_QMARK_ = (function re_frame$interop$ratom_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
}
});
re_frame.interop.deref_QMARK_ = (function re_frame$interop$deref_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
re_frame.interop.make_reaction = (function re_frame$interop$make_reaction(f){
return reagent.ratom.make_reaction(f);
});
re_frame.interop.add_on_dispose_BANG_ = (function re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return reagent.ratom.add_on_dispose_BANG_(a_ratom,f);
});
re_frame.interop.dispose_BANG_ = (function re_frame$interop$dispose_BANG_(a_ratom){
return reagent.ratom.dispose_BANG_(a_ratom);
});
re_frame.interop.set_timeout_BANG_ = (function re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
re_frame.interop.now = (function re_frame$interop$now(){
if((((typeof performance !== 'undefined')) && ((typeof performance !== 'undefined') && (typeof performance.now !== 'undefined')))){
return performance.now();
} else {
return Date.now();
}
});
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
re_frame.interop.reagent_id = (function re_frame$interop$reagent_id(reactive_val){
if((((!((reactive_val == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.reagent$ratom$IReactiveAtom$))))?true:false):false)){
return [(function (){var pred__31909 = cljs.core.instance_QMARK_;
var expr__31910 = reactive_val;
if(cljs.core.truth_((pred__31909.cljs$core$IFn$_invoke$arity$2 ? pred__31909.cljs$core$IFn$_invoke$arity$2(reagent.ratom.RAtom,expr__31910) : pred__31909.call(null,reagent.ratom.RAtom,expr__31910)))){
return "ra";
} else {
if(cljs.core.truth_((pred__31909.cljs$core$IFn$_invoke$arity$2 ? pred__31909.cljs$core$IFn$_invoke$arity$2(reagent.ratom.RCursor,expr__31910) : pred__31909.call(null,reagent.ratom.RCursor,expr__31910)))){
return "rc";
} else {
if(cljs.core.truth_((pred__31909.cljs$core$IFn$_invoke$arity$2 ? pred__31909.cljs$core$IFn$_invoke$arity$2(reagent.ratom.Reaction,expr__31910) : pred__31909.call(null,reagent.ratom.Reaction,expr__31910)))){
return "rx";
} else {
if(cljs.core.truth_((pred__31909.cljs$core$IFn$_invoke$arity$2 ? pred__31909.cljs$core$IFn$_invoke$arity$2(reagent.ratom.Track,expr__31910) : pred__31909.call(null,reagent.ratom.Track,expr__31910)))){
return "tr";
} else {
return "other";
}
}
}
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(reactive_val))].join('');
} else {
return null;
}
});

//# sourceMappingURL=re_frame.interop.js.map

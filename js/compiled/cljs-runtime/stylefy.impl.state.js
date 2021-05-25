goog.provide('stylefy.impl.state');
stylefy.impl.state.stylefy_initialised_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.state.check_stylefy_initialisation = (function stylefy$impl$state$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
return null;
} else {
return stylefy.impl.log.warn("use-style called before stylefy was initialised!");
}
});

//# sourceMappingURL=stylefy.impl.state.js.map

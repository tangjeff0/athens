goog.provide('komponentit.mixins');
komponentit.mixins.__GT_event_type = (function komponentit$mixins$__GT_event_type(k){
return clojure.string.replace(clojure.string.replace(cljs.core.name(k),/^on-/,""),/-/,"");
});
komponentit.mixins.update_listeners = (function komponentit$mixins$update_listeners(el,listeners,props,this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(listeners,(function (listeners__$1){
var current_event_types = cljs.core.set(cljs.core.keys(listeners__$1));
var new_event_types = cljs.core.set(cljs.core.keys(props));
var $ = listeners__$1;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$2,k){
var f = (function (e){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent.core.props(this$),k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
el.addEventListener(komponentit.mixins.__GT_event_type(k),f);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(listeners__$2,k,f);
}),$,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_event_types,current_event_types));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$2,k){
el.removeEventListener(komponentit.mixins.__GT_event_type(k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(listeners__$2,k));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(listeners__$2,k);
}),$__$1,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_event_types,new_event_types));
}));
});
komponentit.mixins.window_event_listener = (function komponentit$mixins$window_event_listener(_){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"komponentit.mixins.window_event_listener_class",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return komponentit.mixins.update_listeners(window,listeners,reagent.core.props(this$),this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return komponentit.mixins.update_listeners(window,listeners,reagent.core.props(this$),this$);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return komponentit.mixins.update_listeners(window,listeners,cljs.core.PersistentArrayMap.EMPTY,this$);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props,child){
return child;
})], null));
});

//# sourceMappingURL=komponentit.mixins.js.map

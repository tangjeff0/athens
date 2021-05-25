goog.provide('komponentit.modal');
/**
 * - :title      The el for modal header
 * - :content    The el for modal body
 * - :footer     The elements for modal footer
 * - :on-close   (Optional) callback to be called when modal is closed by clicking outside of the modal
 * - :class      (Optional) additional classes for .modal-dialog; Examples: modal-sm, modal-lg
 */
komponentit.modal.modal = (function komponentit$modal$modal(p__64104){
var map__64105 = p__64104;
var map__64105__$1 = (((((!((map__64105 == null))))?(((((map__64105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64105):map__64105);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"content","content",15833224));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__64107 = e.keyCode;
switch (G__64107) {
case (27):
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

break;
default:
return null;

}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__container","div.modal__container",-2058913087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__backdrop","div.modal__backdrop",1543306224),(cljs.core.truth_(on_close)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
(on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

return null;
})], null):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__header","div.modal__header",1379162843),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.modal__close","button.modal__close",-1946658042),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
(on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

return null;
})], null),"\u00D7"], null):null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__content","div.modal__content",-287540060),content], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__footer","div.modal__footer",-705939360)], null),footer)], null)], null)], null);
});
/**
 * - :title        The el for modal header
 * - :content      The el for modal content
 * - :success      Function to call if confirmed
 * - :failure      Function to call if cancelled
 * - :ok-label     Label for OK button
 * - :cancel-label Label for Cancel button
 * - :class        (Optional) additional classes for .modal-dialog
 */
komponentit.modal.confirm_modal = (function komponentit$modal$confirm_modal(p__64108){
var map__64109 = p__64108;
var map__64109__$1 = (((((!((map__64109 == null))))?(((((map__64109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64109):map__64109);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64109__$1,new cljs.core.Keyword(null,"title","title",636505583),"Yes or no?");
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64109__$1,new cljs.core.Keyword(null,"content","content",15833224),"Are you sure?");
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var cancel_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64109__$1,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),"Cancel");
var ok_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64109__$1,new cljs.core.Keyword(null,"ok-label","ok-label",808114315),"OK");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.modal.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal__buttons","div.modal__buttons",1365799187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.modal__cancel","button.modal__cancel",-1276340681),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(failure)){
(failure.cljs$core$IFn$_invoke$arity$0 ? failure.cljs$core$IFn$_invoke$arity$0() : failure.call(null));
} else {
}

return null;
})], null),cancel_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.modal__ok","button.modal__ok",918540602),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(success)){
(success.cljs$core$IFn$_invoke$arity$0 ? success.cljs$core$IFn$_invoke$arity$0() : success.call(null));
} else {
}

return null;
})], null),ok_label], null)], null)], null),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
if(cljs.core.truth_(failure)){
return (failure.cljs$core$IFn$_invoke$arity$0 ? failure.cljs$core$IFn$_invoke$arity$0() : failure.call(null));
} else {
return null;
}
})], null)], null);
});

//# sourceMappingURL=komponentit.modal.js.map

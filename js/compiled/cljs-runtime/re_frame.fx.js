goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32443 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32444 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32444);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32518 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32518)){
var new_db_32519 = temp__5735__auto___32518;
var fexpr__32445_32520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32445_32520.cljs$core$IFn$_invoke$arity$1 ? fexpr__32445_32520.cljs$core$IFn$_invoke$arity$1(new_db_32519) : fexpr__32445_32520.call(null,new_db_32519));
} else {
}

var seq__32446 = cljs.core.seq(effects_without_db);
var chunk__32447 = null;
var count__32448 = (0);
var i__32449 = (0);
while(true){
if((i__32449 < count__32448)){
var vec__32456 = chunk__32447.cljs$core$IIndexed$_nth$arity$2(null,i__32449);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(1),null);
var temp__5733__auto___32521 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32521)){
var effect_fn_32522 = temp__5733__auto___32521;
(effect_fn_32522.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32522.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32522.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32527 = seq__32446;
var G__32528 = chunk__32447;
var G__32529 = count__32448;
var G__32530 = (i__32449 + (1));
seq__32446 = G__32527;
chunk__32447 = G__32528;
count__32448 = G__32529;
i__32449 = G__32530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32446);
if(temp__5735__auto__){
var seq__32446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32446__$1);
var G__32531 = cljs.core.chunk_rest(seq__32446__$1);
var G__32532 = c__4556__auto__;
var G__32533 = cljs.core.count(c__4556__auto__);
var G__32534 = (0);
seq__32446 = G__32531;
chunk__32447 = G__32532;
count__32448 = G__32533;
i__32449 = G__32534;
continue;
} else {
var vec__32461 = cljs.core.first(seq__32446__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(1),null);
var temp__5733__auto___32535 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32535)){
var effect_fn_32536 = temp__5733__auto___32535;
(effect_fn_32536.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32536.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32536.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32537 = cljs.core.next(seq__32446__$1);
var G__32538 = null;
var G__32539 = (0);
var G__32540 = (0);
seq__32446 = G__32537;
chunk__32447 = G__32538;
count__32448 = G__32539;
i__32449 = G__32540;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32149__auto___32544 = re_frame.interop.now();
var duration__32150__auto___32545 = (end__32149__auto___32544 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32150__auto___32545,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32149__auto___32544);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32443);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32546 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32546)){
var new_db_32550 = temp__5735__auto___32546;
var fexpr__32464_32551 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32464_32551.cljs$core$IFn$_invoke$arity$1 ? fexpr__32464_32551.cljs$core$IFn$_invoke$arity$1(new_db_32550) : fexpr__32464_32551.call(null,new_db_32550));
} else {
}

var seq__32465 = cljs.core.seq(effects_without_db);
var chunk__32466 = null;
var count__32467 = (0);
var i__32468 = (0);
while(true){
if((i__32468 < count__32467)){
var vec__32476 = chunk__32466.cljs$core$IIndexed$_nth$arity$2(null,i__32468);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(1),null);
var temp__5733__auto___32552 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32552)){
var effect_fn_32553 = temp__5733__auto___32552;
(effect_fn_32553.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32553.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32553.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32554 = seq__32465;
var G__32555 = chunk__32466;
var G__32556 = count__32467;
var G__32557 = (i__32468 + (1));
seq__32465 = G__32554;
chunk__32466 = G__32555;
count__32467 = G__32556;
i__32468 = G__32557;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32465);
if(temp__5735__auto__){
var seq__32465__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32465__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32465__$1);
var G__32562 = cljs.core.chunk_rest(seq__32465__$1);
var G__32563 = c__4556__auto__;
var G__32564 = cljs.core.count(c__4556__auto__);
var G__32565 = (0);
seq__32465 = G__32562;
chunk__32466 = G__32563;
count__32467 = G__32564;
i__32468 = G__32565;
continue;
} else {
var vec__32479 = cljs.core.first(seq__32465__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(1),null);
var temp__5733__auto___32566 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32566)){
var effect_fn_32567 = temp__5733__auto___32566;
(effect_fn_32567.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32567.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32567.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32568 = cljs.core.next(seq__32465__$1);
var G__32569 = null;
var G__32570 = (0);
var G__32571 = (0);
seq__32465 = G__32568;
chunk__32466 = G__32569;
count__32467 = G__32570;
i__32468 = G__32571;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__32482 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32483 = null;
var count__32484 = (0);
var i__32485 = (0);
while(true){
if((i__32485 < count__32484)){
var map__32490 = chunk__32483.cljs$core$IIndexed$_nth$arity$2(null,i__32485);
var map__32490__$1 = (((((!((map__32490 == null))))?(((((map__32490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32490):map__32490);
var effect = map__32490__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32490__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32490__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32482,chunk__32483,count__32484,i__32485,map__32490,map__32490__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32482,chunk__32483,count__32484,i__32485,map__32490,map__32490__$1,effect,ms,dispatch))
,ms);
}


var G__32578 = seq__32482;
var G__32579 = chunk__32483;
var G__32580 = count__32484;
var G__32581 = (i__32485 + (1));
seq__32482 = G__32578;
chunk__32483 = G__32579;
count__32484 = G__32580;
i__32485 = G__32581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32482);
if(temp__5735__auto__){
var seq__32482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32482__$1);
var G__32582 = cljs.core.chunk_rest(seq__32482__$1);
var G__32583 = c__4556__auto__;
var G__32584 = cljs.core.count(c__4556__auto__);
var G__32585 = (0);
seq__32482 = G__32582;
chunk__32483 = G__32583;
count__32484 = G__32584;
i__32485 = G__32585;
continue;
} else {
var map__32492 = cljs.core.first(seq__32482__$1);
var map__32492__$1 = (((((!((map__32492 == null))))?(((((map__32492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32492):map__32492);
var effect = map__32492__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32482,chunk__32483,count__32484,i__32485,map__32492,map__32492__$1,effect,ms,dispatch,seq__32482__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32482,chunk__32483,count__32484,i__32485,map__32492,map__32492__$1,effect,ms,dispatch,seq__32482__$1,temp__5735__auto__))
,ms);
}


var G__32586 = cljs.core.next(seq__32482__$1);
var G__32587 = null;
var G__32588 = (0);
var G__32589 = (0);
seq__32482 = G__32586;
chunk__32483 = G__32587;
count__32484 = G__32588;
i__32485 = G__32589;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32494 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32495 = null;
var count__32496 = (0);
var i__32497 = (0);
while(true){
if((i__32497 < count__32496)){
var vec__32504 = chunk__32495.cljs$core$IIndexed$_nth$arity$2(null,i__32497);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32591 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32591)){
var effect_fn_32592 = temp__5733__auto___32591;
(effect_fn_32592.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32592.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32592.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32593 = seq__32494;
var G__32594 = chunk__32495;
var G__32595 = count__32496;
var G__32596 = (i__32497 + (1));
seq__32494 = G__32593;
chunk__32495 = G__32594;
count__32496 = G__32595;
i__32497 = G__32596;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32494);
if(temp__5735__auto__){
var seq__32494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32494__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32494__$1);
var G__32597 = cljs.core.chunk_rest(seq__32494__$1);
var G__32598 = c__4556__auto__;
var G__32599 = cljs.core.count(c__4556__auto__);
var G__32600 = (0);
seq__32494 = G__32597;
chunk__32495 = G__32598;
count__32496 = G__32599;
i__32497 = G__32600;
continue;
} else {
var vec__32507 = cljs.core.first(seq__32494__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32601 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32601)){
var effect_fn_32602 = temp__5733__auto___32601;
(effect_fn_32602.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32602.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32602.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32603 = cljs.core.next(seq__32494__$1);
var G__32604 = null;
var G__32605 = (0);
var G__32606 = (0);
seq__32494 = G__32603;
chunk__32495 = G__32604;
count__32496 = G__32605;
i__32497 = G__32606;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32510 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32511 = null;
var count__32512 = (0);
var i__32513 = (0);
while(true){
if((i__32513 < count__32512)){
var event = chunk__32511.cljs$core$IIndexed$_nth$arity$2(null,i__32513);
re_frame.router.dispatch(event);


var G__32608 = seq__32510;
var G__32609 = chunk__32511;
var G__32610 = count__32512;
var G__32611 = (i__32513 + (1));
seq__32510 = G__32608;
chunk__32511 = G__32609;
count__32512 = G__32610;
i__32513 = G__32611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32510);
if(temp__5735__auto__){
var seq__32510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32510__$1);
var G__32612 = cljs.core.chunk_rest(seq__32510__$1);
var G__32613 = c__4556__auto__;
var G__32614 = cljs.core.count(c__4556__auto__);
var G__32615 = (0);
seq__32510 = G__32612;
chunk__32511 = G__32613;
count__32512 = G__32614;
i__32513 = G__32615;
continue;
} else {
var event = cljs.core.first(seq__32510__$1);
re_frame.router.dispatch(event);


var G__32616 = cljs.core.next(seq__32510__$1);
var G__32617 = null;
var G__32618 = (0);
var G__32619 = (0);
seq__32510 = G__32616;
chunk__32511 = G__32617;
count__32512 = G__32618;
i__32513 = G__32619;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32514 = cljs.core.seq(value);
var chunk__32515 = null;
var count__32516 = (0);
var i__32517 = (0);
while(true){
if((i__32517 < count__32516)){
var event = chunk__32515.cljs$core$IIndexed$_nth$arity$2(null,i__32517);
clear_event(event);


var G__32620 = seq__32514;
var G__32621 = chunk__32515;
var G__32622 = count__32516;
var G__32623 = (i__32517 + (1));
seq__32514 = G__32620;
chunk__32515 = G__32621;
count__32516 = G__32622;
i__32517 = G__32623;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32514);
if(temp__5735__auto__){
var seq__32514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32514__$1);
var G__32624 = cljs.core.chunk_rest(seq__32514__$1);
var G__32625 = c__4556__auto__;
var G__32626 = cljs.core.count(c__4556__auto__);
var G__32627 = (0);
seq__32514 = G__32624;
chunk__32515 = G__32625;
count__32516 = G__32626;
i__32517 = G__32627;
continue;
} else {
var event = cljs.core.first(seq__32514__$1);
clear_event(event);


var G__32628 = cljs.core.next(seq__32514__$1);
var G__32629 = null;
var G__32630 = (0);
var G__32631 = (0);
seq__32514 = G__32628;
chunk__32515 = G__32629;
count__32516 = G__32630;
i__32517 = G__32631;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

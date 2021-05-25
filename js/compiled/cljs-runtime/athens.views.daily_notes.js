goog.provide('athens.views.daily_notes');
athens.views.daily_notes.daily_notes_scroll_area_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh + 1px)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.25rem 0",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.views.daily_notes.daily_notes_page_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"16","16",1354114028).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"stretch",new cljs.core.Keyword(null,"margin","margin",-995903681),"1.25rem 2.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"0s",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5rem",new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh - 10rem)"], null);
athens.views.daily_notes.daily_notes_notional_page_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.daily_notes.daily_notes_page_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"4","4",-1197948085).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null)], 0));
athens.views.daily_notes.scroll_daily_notes = (function athens$views$daily_notes$scroll_daily_notes(_){
var daily_notes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null)));
var el = goog.dom.getElement("daily-notes");
var offset_top = el.offsetTop;
var rect = el.getBoundingClientRect();
var from_bottom = rect.bottom;
var from_top = rect.top;
var doc_height = document.documentElement.scrollHeight;
var top_delta = (offset_top - from_top);
var bottom_delta = (from_bottom - doc_height);
if((top_delta < (1))){
return null;
} else {
if((bottom_delta < (1))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.util.get_day.cljs$core$IFn$_invoke$arity$2(athens.util.uid_to_date(cljs.core.last(daily_notes)),(1))], null));
} else {
return null;
}
}
});
athens.views.daily_notes.db_scroll_daily_notes = goog.functions.debounce(athens.views.daily_notes.scroll_daily_notes,(500));
athens.views.daily_notes.daily_notes_panel = (function athens$views$daily_notes$daily_notes_panel(){
var note_refs = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null));
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.util.get_day.cljs$core$IFn$_invoke$arity$0()], null));
} else {
var notes = (function (){var G__62136 = cljs.core.deref(posh.reagent.q(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null),athens.db.dsdb,cljs.core.deref(note_refs)));
var G__62136__$1 = (((G__62136 == null))?null:cljs.core.not_empty(G__62136));
var G__62136__$2 = (((G__62136__$1 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__62136__$1));
var G__62136__$3 = (((G__62136__$2 == null))?null:cljs.core.reverse(G__62136__$2));
var G__62136__$4 = (((G__62136__$3 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null);
}),G__62136__$3));
var G__62136__$5 = (((G__62136__$4 == null))?null:posh.reagent.pull_many(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),G__62136__$4));
if((G__62136__$5 == null)){
return null;
} else {
return cljs.core.deref(G__62136__$5);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#daily-notes","div#daily-notes",-1983155722),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_scroll_area_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$daily_notes$daily_notes_panel_$_iter__62137(s__62138){
return (new cljs.core.LazySeq(null,(function (){
var s__62138__$1 = s__62138;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62138__$1);
if(temp__5735__auto__){
var s__62138__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62138__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62138__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62140 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62139 = (0);
while(true){
if((i__62139 < size__4528__auto__)){
var map__62141 = cljs.core._nth(c__4527__auto__,i__62139);
var map__62141__$1 = (((((!((map__62141 == null))))?(((((map__62141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62141):map__62141);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62141__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__62140,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__62145 = (i__62139 + (1));
i__62139 = G__62145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62140),athens$views$daily_notes$daily_notes_panel_$_iter__62137(cljs.core.chunk_rest(s__62138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62140),null);
}
} else {
var map__62143 = cljs.core.first(s__62138__$2);
var map__62143__$1 = (((((!((map__62143 == null))))?(((((map__62143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62143):map__62143);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$views$daily_notes$daily_notes_panel_$_iter__62137(cljs.core.rest(s__62138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(notes);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_notional_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Earlier"], null)], null)], null);
}
});
});

//# sourceMappingURL=athens.views.daily_notes.js.map

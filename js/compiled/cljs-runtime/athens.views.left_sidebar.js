goog.provide('athens.views.left_sidebar');
athens.views.left_sidebar.left_sidebar_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],["width 0.5s ease",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-line","top-line",-1024691303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto 2rem 0",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr auto auto",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem"], null),new cljs.core.Keyword(null,"small-icon","small-icon",-1258883016),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null),new cljs.core.Keyword(null,"large-icon","large-icon",-1011018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px"], null)], null),(0),"left-sidebar","hidden",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-open","&.is-open",-1689035399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"18rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-closed","&.is-closed",-1612800145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"0"], null)], null)], null),"flex","auto","column","100%"]);
athens.views.left_sidebar.left_sidebar_content_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"7.5rem 0 1rem",new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s ease",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-open","&.is-open",-1689035399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-closed","&.is-closed",-1612800145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.left_sidebar.shortcuts_list_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 2rem",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0.25rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit"], null)], null)], null);
athens.views.left_sidebar.shortcut_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.views.left_sidebar.notional_logotype_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680)),"18px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null),"all 0.05s ease","bold","flex-start",new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),"none","-0.05em","IBM Plex Serif"]);
athens.views.left_sidebar.version_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.views.left_sidebar.shortcut_component = (function athens$views$left_sidebar$shortcut_component(p__64133){
var vec__64134 = p__64133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64134,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64134,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64134,(2),null);
var drag = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__64137){
var vec__64138 = p__64137;
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64138,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64138,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64138,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.left_sidebar.shortcut_style,(function (){var G__64141 = cljs.core.deref(drag);
var G__64141__$1 = (((G__64141 instanceof cljs.core.Keyword))?G__64141.fqn:null);
switch (G__64141__$1) {
case "above":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null)], null);

break;
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
})()], 0)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (e){
e.preventDefault();

var offset = athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$1(e);
var middle_y = athens.util.vertical_center(e.target);
var closest_li = e.target.closest("li");
var next_sibling = closest_li.nextElementSibling;
var last_child_QMARK_ = (next_sibling == null);
if((middle_y > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset))){
return cljs.core.reset_BANG_(drag,new cljs.core.Keyword(null,"above","above",-1286866470));
} else {
if((((middle_y < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset))) && (last_child_QMARK_))){
return cljs.core.reset_BANG_(drag,new cljs.core.Keyword(null,"below","below",-926774883));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (e){
(e.dataTransfer.dropEffect = "move");

return e.dataTransfer.setData("text/plain",order);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (___$3){
return null;
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (___$3){
return cljs.core.reset_BANG_(drag,null);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (e){
var source_order_64147 = parseInt(e.dataTransfer.getData("text/plain"));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_order_64147,order], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_order_64147,order)){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_order_64147,(order - (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(drag),new cljs.core.Keyword(null,"above","above",-1286866470))))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(drag),new cljs.core.Keyword(null,"below","below",-926774883))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","drop-below","left-sidebar/drop-below",1291292866),source_order_64147,order], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","drop-above","left-sidebar/drop-above",75584917),source_order_64147,order], null));

}
}
}

return cljs.core.reset_BANG_(drag,null);
})], null)),title], null)], null);
});
});
athens.views.left_sidebar.left_sidebar = (function athens$views$left_sidebar$left_sidebar(){
var open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270)], null));
var shortcuts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(cljs.core.deref(posh.reagent.q(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null),athens.db.dsdb))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.left_sidebar_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?"is-open":"is-closed")], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.left_sidebar_content_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?"is-open":"is-closed")], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.left_sidebar.shortcuts_list_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.shortcuts_list_style,new cljs.core.Keyword(null,"heading","heading",-1312171873)),"Shortcuts"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$left_sidebar$left_sidebar_$_iter__64142(s__64143){
return (new cljs.core.LazySeq(null,(function (){
var s__64143__$1 = s__64143;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64143__$1);
if(temp__5735__auto__){
var s__64143__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64143__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64143__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64145 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64144 = (0);
while(true){
if((i__64144 < size__4528__auto__)){
var sh = cljs.core._nth(c__4527__auto__,i__64144);
cljs.core.chunk_append(b__64145,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar.shortcut_component,sh], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["left-sidebar-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(sh))].join('')], null)));

var G__64148 = (i__64144 + (1));
i__64144 = G__64148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64145),athens$views$left_sidebar$left_sidebar_$_iter__64142(cljs.core.chunk_rest(s__64143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64145),null);
}
} else {
var sh = cljs.core.first(s__64143__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar.shortcut_component,sh], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["left-sidebar-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(sh))].join('')], null)),athens$views$left_sidebar$left_sidebar_$_iter__64142(cljs.core.rest(s__64143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(shortcuts);
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.left_sidebar_style,new cljs.core.Keyword(null,"footer","footer",1606445390)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.notional_logotype_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/athensresearch/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),"Athens"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.left_sidebar.version_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.notion.so/athensresearch/Weekly-Updates-e18afa006cfd4fec9c462940ac3b84da",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),athens.util.athens_version()], null)], null)], null)], null)], null);
});

//# sourceMappingURL=athens.views.left_sidebar.js.map

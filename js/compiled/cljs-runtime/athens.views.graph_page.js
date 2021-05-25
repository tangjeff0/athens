goog.provide('athens.views.graph_page');
var module$node_modules$react_force_graph$dist$react_force_graph_common=shadow.js.require("module$node_modules$react_force_graph$dist$react_force_graph_common", {});
athens.views.graph_page.build_nodes = (function athens$views$graph_page$build_nodes(){
var all_nodes = (function (){var G__64113 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__64114 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__64113,G__64114) : datascript.core.q.call(null,G__64113,G__64114));
})();
var nodes_with_refs = (function (){var G__64115 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__64116 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__64115,G__64116) : datascript.core.q.call(null,G__64115,G__64116));
})();
var nodes_without_refs = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_nodes),cljs.core.set(nodes_with_refs));
var nodes_with_refs__$1 = (function (){var G__64117 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__64118 = cljs.core.deref(athens.db.dsdb);
var G__64119 = nodes_with_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__64117,G__64118,G__64119) : datascript.core.q.call(null,G__64117,G__64118,G__64119));
})();
var nodes_without_refs__$1 = (function (){var G__64120 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"always-nil-value","always-nil-value",1360251043),(1)),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null);
var G__64121 = cljs.core.deref(athens.db.dsdb);
var G__64122 = nodes_without_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__64120,G__64121,G__64122) : datascript.core.q.call(null,G__64120,G__64121,G__64122));
})();
var all_nodes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64123){
var vec__64124 = p__64123;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, ["id",e,"name",t,"val",val], null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes_with_refs__$1,nodes_without_refs__$1));
return all_nodes__$1;
});
athens.views.graph_page.build_links = (function athens$views$graph_page$build_links(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64127){
var vec__64128 = p__64127;
var node_eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64128,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64128,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["source",new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(athens.db.get_parents_recursively(ref))),"target",node_eid], null);
}),(function (){var G__64131 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__64132 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__64131,G__64132) : datascript.core.q.call(null,G__64131,G__64132));
})());
});
athens.views.graph_page.graph_page = (function athens$views$graph_page$graph_page(){
return (function (){
var dark_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","dark","theme/dark",1860051576)], null)));
var nodes = athens.views.graph_page.build_nodes();
var links = athens.views.graph_page.build_links();
var theme = (cljs.core.truth_(dark_QMARK_)?athens.style.THEME_DARK:athens.style.THEME_LIGHT);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_force_graph$dist$react_force_graph_common.ForceGraph2D,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"graphData","graphData",-1789512421),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"links","links",-654507394),links], null),new cljs.core.Keyword(null,"width","width",-384071477),(0.95 * window.innerWidth),new cljs.core.Keyword(null,"height","height",1025178622),(0.95 * window.innerHeight),new cljs.core.Keyword(null,"linkColor","linkColor",-779092884),(function (){
return new cljs.core.Keyword(null,"border-color","border-color",-2059162761).cljs$core$IFn$_invoke$arity$1(theme);
}),new cljs.core.Keyword(null,"nodeCanvasObject","nodeCanvasObject",157753005),(function (node,ctx,global_scale){
var label = node.name;
var val = node.val;
var x = node.x;
var y = node.y;
var scale_factor = (4);
var font_size = (function (){var x__4214__auto__ = (10);
var y__4215__auto__ = ((Math.sqrt(val) / global_scale) * scale_factor);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var text_width = ctx.measureText(label).width;
var radius = ((Math.sqrt(val) / global_scale) * scale_factor);
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px IBM Plex Sans, Sans-Serif"].join(''));

(ctx.fillStyle = new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(theme));

ctx.fillText(label,(x - (text_width / (2))),(y - radius));

ctx.beginPath();

ctx.arc(x,y,radius,(0),(Math.PI * (2)));

(ctx.fillStyle = new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(theme));

return ctx.fill();
})], null)], null);
});
});

//# sourceMappingURL=athens.views.graph_page.js.map

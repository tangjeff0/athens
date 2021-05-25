goog.provide('athens.components');
athens.components.todo_on_click = (function athens$components$todo_on_click(uid,from_str,to_str){
var current_block_content = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),clojure.string.replace(current_block_content,from_str,to_str),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null));
});
athens.components.components = new cljs.core.PersistentArrayMap(null, 6, [/\[\[TODO\]\]/,(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[TODO\]\]\}\}/,"{{[[DONE]]}}");
})], null)], null);
}),/\[\[DONE\]\]/,(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[DONE\]\]\}\}/,"{{[[TODO]]}}");
})], null)], null);
}),/\[\[youtube\]\]\:.*/,(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/.*v=([a-zA-Z0-9_\-]+)/,content),(1)))].join(''),new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], null)], null)], null);
}),/iframe\:.*/,(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.re_find(/http.*/,content)], null)], null)], null);
}),/SELF/,(function (content,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null),content], null);
}),/embed: \(\((.*)\)\)/,(function (content,_){
var uid = cljs.core.second(cljs.core.re_find(/embed: \(\((.*)\)\)/,content));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),uid], null);
})], null);
athens.components.empty_component = (function athens$components$empty_component(content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),content], null);
});
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components.render_component = (function athens$components$render_component(content,uid){
var render = cljs.core.some((function (p__61801){
var vec__61802 = p__61801;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61802,(0),null);
var render = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61802,(1),null);
if(cljs.core.truth_(cljs.core.re_matches(pattern,content))){
return render;
} else {
return null;
}
}),athens.components.components);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),(cljs.core.truth_(render)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,content,uid], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.empty_component,content,uid], null))], null);
});

//# sourceMappingURL=athens.components.js.map

goog.provide('athens.views');
athens.views.app_wrapper_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),"'app-header app-header app-header'\n    'left-sidebar main-content secondary-content'\n   'devtool devtool devtool'",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"auto 1fr auto",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 1fr auto",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null);
athens.views.main_content_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"main-content",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2.5rem",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
athens.views.alert = (function athens$views$alert(){
var alert_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580)], null));
if((cljs.core.deref(alert_) == null)){
return null;
} else {
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(alert_)));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","unset","alert/unset",-421582694)], null));
}
});
athens.views.pages_panel = (function athens$views$pages_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.all_pages.table,athens.db.dsdb], null);
});
});
athens.views.page_panel = (function athens$views$page_panel(){
var uid = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-route","uid","current-route/uid",-327873095)], null));
var map__64171 = cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.deref(uid)], null)));
var map__64171__$1 = (((((!((map__64171 == null))))?(((((map__64171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64171):map__64171);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64171__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64171__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64171__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,id], null);
} else {
if(cljs.core.truth_(string)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.block_page.block_page_component,id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"404: This page doesn't exist"], null);

}
}
});
/**
 * When app initializes, `route-name` is `nil`. Side effect of this is that a daily page for today is automatically
 *   created when app inits. This is expected, but perhaps shouldn't be a side effect here.
 */
athens.views.match_panel = (function athens$views$match_panel(route_name){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64173 = route_name;
var G__64173__$1 = (((G__64173 instanceof cljs.core.Keyword))?G__64173.fqn:null);
switch (G__64173__$1) {
case "settings":
return athens.views.settings_page.settings_page;

break;
case "home":
return athens.views.daily_notes.daily_notes_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.views.page_panel;

break;
case "graph":
return athens.views.graph_page.graph_page;

break;
default:
return athens.views.daily_notes.daily_notes_panel;

}
})()], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var route_name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-route","name","current-route/name",-1583049420)], null));
var loading = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
var modal = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(loading);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(modal);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filesystem.window], null):(cljs.core.truth_(cljs.core.deref(loading))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.initial_spinner_component], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(cljs.core.deref(modal))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filesystem.window], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.app_wrapper_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.app_toolbar.app_toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar.left_sidebar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.main_content_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(route_name),new cljs.core.Keyword(null,"home","home",-74557309)))?(function (p1__64174_SHARP_){
return (athens.views.daily_notes.db_scroll_daily_notes.cljs$core$IFn$_invoke$arity$1 ? athens.views.daily_notes.db_scroll_daily_notes.cljs$core$IFn$_invoke$arity$1(p1__64174_SHARP_) : athens.views.daily_notes.db_scroll_daily_notes.call(null,p1__64174_SHARP_));
}):null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,cljs.core.deref(route_name)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.right_sidebar.right_sidebar_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null)], null)
))], null);
});
});

//# sourceMappingURL=athens.views.js.map

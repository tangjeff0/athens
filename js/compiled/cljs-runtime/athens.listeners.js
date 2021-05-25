goog.provide('athens.listeners');
/**
 * When blocks are selected, handle various keypresses:
 *   - shift+up/down: increase/decrease selection.
 *   - enter: deselect and begin editing textarea
 *   - backspace: delete all blocks
 *   - up/down: change editing textarea
 *   - tab: indent/unindent blocks
 *   Can't use textarea-key-down from keybindings.cljs because textarea is no longer focused.
 */
athens.listeners.multi_block_selection = (function athens$listeners$multi_block_selection(e){
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(selected_items))){
var shift = e.shiftKey;
var key_code = e.keyCode;
var enter_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER);
var bksp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP);
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN);
var tab_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DELETE);
if(enter_QMARK_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),cljs.core.first(selected_items)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));
} else {
if(((bksp_QMARK_) || (delete_QMARK_))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","delete","selected/delete",-812991161),selected_items], null));
} else {
if(tab_QMARK_){
e.preventDefault();

if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unindent","multi","unindent/multi",-555006624),selected_items], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("indent","multi","indent/multi",-1413321465),selected_items], null));
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return up_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754),selected_items], null));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return down_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329),selected_items], null));
} else {
if(((up_QMARK_) || (down_QMARK_))){
e.preventDefault();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));

if(up_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.first(selected_items)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.last(selected_items)], null));
}
} else {
return null;
}
}
}
}
}
}
} else {
return null;
}
});
/**
 * Clears editing/uid when user clicks anywhere besides bullets, header, or on a block.
 *   Clears selected/items when user clicks somewhere besides a bullet point.
 */
athens.listeners.unfocus = (function athens$listeners$unfocus(e){
var selected_items_QMARK_ = cljs.core.not_empty(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null))));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var closest_block = e.target.closest(".block-content");
var closest_block_header = e.target.closest(".block-header");
var closest_page_header = e.target.closest(".page-header");
var closest_bullet = e.target.closest(".bullet");
var closest_dropdown = e.target.closest("#dropdown-menu");
var closest = (function (){var or__4126__auto__ = closest_block;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = closest_block_header;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = closest_page_header;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return closest_dropdown;
}
}
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_items_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (closest_bullet == null);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));
} else {
}

if(cljs.core.truth_((((closest == null))?editing_uid:false))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));
} else {
return null;
}
});
athens.listeners.key_down = (function athens$listeners$key_down(e){
var map__61696 = athens.util.destruct_key_down(e);
var map__61696__$1 = (((((!((map__61696 == null))))?(((((map__61696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61696):map__61696);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
if(cljs.core.truth_(athens.util.shortcut_key_QMARK_(meta,ctrl))){
var pred__61698 = cljs.core._EQ_;
var expr__61699 = key_code;
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.S,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.S,expr__61699)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null));
} else {
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.K,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.K,expr__61699)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null));
} else {
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.G,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.G,expr__61699)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685)], null));
} else {
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.Z,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.Z,expr__61699)))){
var editing_uid__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_((function (){var or__4126__auto__ = (editing_uid__$1 == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.not_empty(selected_items);
}
})())){
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.BACKSLASH,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.BACKSLASH,expr__61699)))){
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860)], null));
}
} else {
if(cljs.core.truth_((pred__61698.cljs$core$IFn$_invoke$arity$2 ? pred__61698.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.H,expr__61699) : pred__61698.call(null,goog.events.KeyCodes.H,expr__61699)))){
return athens.util.toggle_10x();
} else {
return null;
}
}
}
}
}
}
} else {
if(cljs.core.truth_(alt)){
var pred__61701 = cljs.core._EQ_;
var expr__61702 = key_code;
if(cljs.core.truth_((pred__61701.cljs$core$IFn$_invoke$arity$2 ? pred__61701.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.LEFT,expr__61702) : pred__61701.call(null,goog.events.KeyCodes.LEFT,expr__61702)))){
if((editing_uid == null)){
return window.history.back();
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__61701.cljs$core$IFn$_invoke$arity$2 ? pred__61701.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.RIGHT,expr__61702) : pred__61701.call(null,goog.events.KeyCodes.RIGHT,expr__61702)))){
if((editing_uid == null)){
return window.history.forward();
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__61701.cljs$core$IFn$_invoke$arity$2 ? pred__61701.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.D,expr__61702) : pred__61701.call(null,goog.events.KeyCodes.D,expr__61702)))){
return athens.router.nav_daily_notes();
} else {
return null;
}
}
}
} else {
return null;
}
}
});
/**
 * Four spaces per depth level.
 */
athens.listeners.walk_str = (function athens$listeners$walk_str(depth,node){
var map__61705 = node;
var map__61705__$1 = (((((!((map__61705 == null))))?(((((map__61705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61705):map__61705);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61705__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61705__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var left_offset = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(depth,"    "));
var walk_children = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61704_SHARP_){
var G__61707 = (depth + (1));
var G__61708 = p1__61704_SHARP_;
return (athens.listeners.walk_str.cljs$core$IFn$_invoke$arity$2 ? athens.listeners.walk_str.cljs$core$IFn$_invoke$arity$2(G__61707,G__61708) : athens.listeners.walk_str.call(null,G__61707,G__61708));
}),children));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_offset),"- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(walk_children)].join('');
});
/**
 * If blocks are selected, copy blocks as markdown list.
 *   Use -event_ because goog events quirk 
 */
athens.listeners.copy = (function athens$listeners$copy(e){
var uids = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(uids))){
var copy_data = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61710_SHARP_){
return athens.listeners.walk_str((0),p1__61710_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61709_SHARP_){
return athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61709_SHARP_], null));
}),uids)));
e.preventDefault();

return e.event_.clipboardData.setData("text/plain",copy_data);
} else {
return null;
}
});
/**
 * Cut is essentially copy AND delete selected blocks
 */
athens.listeners.cut = (function athens$listeners$cut(e){
var uids = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(uids))){
var copy_data = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61712_SHARP_){
return athens.listeners.walk_str((0),p1__61712_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61711_SHARP_){
return athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__61711_SHARP_], null));
}),uids)));
e.preventDefault();

e.event_.clipboardData.setData("text/plain",copy_data);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","delete","selected/delete",-812991161),uids], null));
} else {
return null;
}
});
/**
 * Google Closure's events/listen isn't working for some reason anymore.
 * 
 *   beforeunload is called before unload, where the window would be redirected/refreshed/quit.
 *   https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event 
 */
athens.listeners.prevent_save = (function athens$listeners$prevent_save(){
return window.addEventListener(goog.events.EventType.BEFOREUNLOAD,(function (e){
var synced_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","synced","db/synced",-1518558434)], null)));
if(cljs.core.truth_(synced_QMARK_)){
return null;
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","js","alert/js",1692948327),"Athens hasn't finished saving yet. Athens is finished saving when the sync dot is green. Try refreshing or quitting again once the sync is complete."], null));

e.preventDefault();

(e.returnValue = "Setting e.returnValue to string prevents exit for some browsers.");

return "Returning a string also prevents exit on other browsers.";
}
}));
});
athens.listeners.init = (function athens$listeners$init(){
goog.events.listen(document,goog.events.EventType.MOUSEDOWN,athens.listeners.unfocus);

goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.multi_block_selection);

goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.key_down);

goog.events.listen(window,goog.events.EventType.COPY,athens.listeners.copy);

goog.events.listen(window,goog.events.EventType.CUT,athens.listeners.cut);

return athens.listeners.prevent_save();
});

//# sourceMappingURL=athens.listeners.js.map

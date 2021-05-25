goog.provide('athens.util');
var module$textarea=shadow.js.require("module$textarea", {});
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
athens.util.scroll_top_BANG_ = (function athens$util$scroll_top_BANG_(element,pos){
if(cljs.core.truth_(pos)){
return (element.scrollTop = pos);
} else {
return null;
}
});
athens.util.scroll_if_needed = (function athens$util$scroll_if_needed(element,container){
var e_top = element.offsetTop;
var e_height = element.offsetHeight;
var e_bottom = (e_top + e_height);
var cs_top = container.scrollTop;
var c_height = container.offsetHeight;
var cs_bottom = (cs_top + c_height);
return athens.util.scroll_top_BANG_(container,(((e_top < cs_top))?e_top:(((cs_bottom < e_bottom))?(e_bottom - c_height):null)));
});
/**
 * Finds offset between mouse event and container. If container is not passed, use target as container.
 */
athens.util.mouse_offset = (function athens$util$mouse_offset(var_args){
var G__46384 = arguments.length;
switch (G__46384) {
case 1:
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$1 = (function (e){
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2(e,e.target);
}));

(athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2 = (function (e,container){
var rect = container.getBoundingClientRect();
var offset_x = (e.pageX - rect.left);
var offset_y = (e.pageY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),offset_x,new cljs.core.Keyword(null,"y","y",-1757859776),offset_y], null);
}));

(athens.util.mouse_offset.cljs$lang$maxFixedArity = 2);

athens.util.vertical_center = (function athens$util$vertical_center(el){
var rect = el.getBoundingClientRect();
return ((rect.bottom - rect.top) / (2));
});
/**
 * Checks if any part of the element is above or below the container's bounding rect
 */
athens.util.is_beyond_rect_QMARK_ = (function athens$util$is_beyond_rect_QMARK_(element,container){
var el_box = element.getBoundingClientRect();
var cont_box = container.getBoundingClientRect();
return (((el_box.bottom > cont_box.bottom)) || ((el_box.top < cont_box.top)));
});
athens.util.scroll_into_view = (function athens$util$scroll_into_view(element,container,align_top_QMARK_){
if(athens.util.is_beyond_rect_QMARK_(element,container)){
return element.scrollIntoView(align_top_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"auto"], null));
} else {
return null;
}
});
athens.util.get_dataset_uid = (function athens$util$get_dataset_uid(el){
var block = (cljs.core.truth_(el)?el.closest(".block-container"):null);
var uid = (cljs.core.truth_(block)?block.dataset.uid:null);
return uid;
});
athens.util.get_caret_position = (function athens$util$get_caret_position(target){
var selectionEnd = target.selectionEnd;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$textarea(target,selectionEnd),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * This and common-ancestor taken from https://stackoverflow.com/a/5350888.
 */
athens.util.dom_parents = (function athens$util$dom_parents(node){
var nodes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var node__$1 = node;
while(true){
if((node__$1 == null)){
return cljs.core.reverse(nodes);
} else {
var G__46450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,node__$1);
var G__46451 = node__$1.parentNode;
nodes = G__46450;
node__$1 = G__46451;
continue;
}
break;
}
});
athens.util.common_ancestor = (function athens$util$common_ancestor(node1,node2){
var p1 = athens.util.dom_parents(node1);
var p2 = athens.util.dom_parents(node2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1),cljs.core.first(p2))){
throw (new Error("No common ancestor!"));
} else {
var n = (cljs.core.count(p1) - (1));
var i = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1,i,null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p2,i,null))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1,(i - (1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return (new Error("No common ancestor after n loops!"));
} else {
var G__46452 = (i + (1));
i = G__46452;
continue;

}
}
break;
}
}
});
athens.util.destruct_key_down = (function athens$util$destruct_key_down(e){
var key = e.keyCode;
var ctrl = e.ctrlKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.util.date_col_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy h':'mma");
athens.util.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.util.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.util.get_day = (function athens$util$get_day(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
case 0:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$2 = (function (date,offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.at(date,"0"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$lang$maxFixedArity = 2);

athens.util.date_string = (function athens$util$date_string(ts){
if(cljs.core.not(ts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
var x = tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1(ts);
var x__$1 = tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.date_col_format,x__$1);
var x__$3 = clojure.string.replace(x__$2,/AM/,"am");
return clojure.string.replace(x__$3,/PM/,"pm");
}
});
athens.util.uid_to_date = (function athens$util$uid_to_date(uid){
try{var vec__46410 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(2),null);
var rejoin = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null));
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(rejoin);
}catch (e46406){if((e46406 instanceof Object)){
var _ = e46406;
return null;
} else {
throw e46406;

}
}});
athens.util.is_timeline_page = (function athens$util$is_timeline_page(uid){
return cljs.core.boolean$(athens.util.uid_to_date(uid));
});
athens.util.regex_esc_char_map = (function (){var esc_chars = "()*&^%$#![]";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46416_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46416_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Take a string and escape all regex special characters in it
 */
athens.util.escape_str = (function athens$util$escape_str(str){
return clojure.string.escape(str,athens.util.regex_esc_char_map);
});
athens.util.get_os = (function athens$util$get_os(){
var os = window.navigator.appVersion;
if(cljs.core.truth_(cljs.core.re_find(/Windows/,os))){
return new cljs.core.Keyword(null,"windows","windows",2068861701);
} else {
if(cljs.core.truth_(cljs.core.re_find(/Linux/,os))){
return new cljs.core.Keyword(null,"linux","linux",-238042662);
} else {
if(cljs.core.truth_(cljs.core.re_find(/Mac/,os))){
return new cljs.core.Keyword(null,"mac","mac",-1879391650);
} else {
return null;
}
}
}
});
/**
 * Use meta for mac, ctrl for others.
 */
athens.util.shortcut_key_QMARK_ = (function athens$util$shortcut_key_QMARK_(meta,ctrl){
var os = athens.util.get_os();
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"mac","mac",-1879391650)))?meta:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"windows","windows",2068861701)))?ctrl:false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"linux","linux",-238042662))){
return ctrl;
} else {
return false;
}
}
}
});
athens.util.re_frame_10x_open_QMARK_ = (function athens$util$re_frame_10x_open_QMARK_(){
var el_10x = goog.dom.getElement("--re-frame-10x--");
var display_10x = el_10x.style.display;
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",display_10x)));
});
athens.util.open_10x = (function athens$util$open_10x(){
var el = document.querySelector("#--re-frame-10x--");
return goog.dom.setProperties(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["style","display: block"], null)));
});
athens.util.hide_10x = (function athens$util$hide_10x(){
var el = document.querySelector("#--re-frame-10x--");
return goog.dom.setProperties(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["style","display: none"], null)));
});
athens.util.toggle_10x = (function athens$util$toggle_10x(){
var open_QMARK_ = athens.util.re_frame_10x_open_QMARK_();
if(open_QMARK_){
return athens.util.hide_10x();
} else {
return athens.util.open_10x();
}
});
athens.util.electron_QMARK_ = (function athens$util$electron_QMARK_(){
var user_agent = navigator.userAgent.toLowerCase();
return cljs.core.boolean$(cljs.core.re_find(/electron/,user_agent));
});
athens.util.athens_version = (function athens$util$athens_version(){
if(athens.util.electron_QMARK_()){
return require("electron").remote.app.getVersion();
} else {
return null;
}
});

//# sourceMappingURL=athens.util.js.map

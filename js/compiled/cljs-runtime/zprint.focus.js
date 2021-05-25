goog.provide('zprint.focus');
/**
 * What is this element in a str-style-vec?
 */
zprint.focus.type_ssv = (function zprint$focus$type_ssv(ssv_element){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(ssv_element,(2),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
});
/**
 * Skip any whitespace in this ssv starting at n. Whitespace is :whitespace
 *   and :indent
 */
zprint.focus.skip_whitespace_ssv = (function zprint$focus$skip_whitespace_ssv(ssv,n){
var index = n;
while(true){
if((index >= cljs.core.count(ssv))){
return (index - (1));
} else {
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index)),new cljs.core.Keyword(null,"indent","indent",-148200125))))))){
return index;
} else {
var G__28148 = (index + (1));
index = G__28148;
continue;
}
}
break;
}
});
/**
 * Given a str-style-vec, move into a collection at element n.
 */
zprint.focus.down_ssv = (function zprint$focus$down_ssv(ssv,n){
var non_ws_n = zprint.focus.skip_whitespace_ssv(ssv,n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,non_ws_n)),new cljs.core.Keyword(null,"left","left",-399115937))){
return (non_ws_n + (1));
} else {
return null;
}
});
/**
 * Given a str-style-vec, move to the next element beyond this
 *   one.  This will skip over entire collections, if there are any.
 *   It will also ignore :whitespace elements.
 */
zprint.focus.next_ssv = (function zprint$focus$next_ssv(ssv,n){
var index = n;
var skip_to_right_QMARK_ = null;
var next_nonws_QMARK_ = null;
while(true){
if((index >= cljs.core.count(ssv))){
return null;
} else {
var index_type = zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index));
var new_next_nonws_QMARK_ = ((((cljs.core.not(skip_to_right_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"right","right",-452581833))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"left","left",-399115937))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"indent","indent",-148200125))));
if(cljs.core.truth_(next_nonws_QMARK_)){
return index;
} else {
var G__28150 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"left","left",-399115937)))?skip_to_right_QMARK_:false))?(zprint.focus.next_ssv.cljs$core$IFn$_invoke$arity$2 ? zprint.focus.next_ssv.cljs$core$IFn$_invoke$arity$2(ssv,index) : zprint.focus.next_ssv.call(null,ssv,index)):(index + (1)));
var G__28151 = (function (){var and__4115__auto__ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"left","left",-399115937));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return skip_to_right_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return and__4115__auto__;
}
})();
var G__28152 = new_next_nonws_QMARK_;
index = G__28150;
skip_to_right_QMARK_ = G__28151;
next_nonws_QMARK_ = G__28152;
continue;
}
}
break;
}
});
/**
 * Given a str-style-vec, move right nr elements.
 */
zprint.focus.right_ssv = (function zprint$focus$right_ssv(nr,ssv,n){
var index = n;
var moves = nr;
while(true){
if(cljs.core.truth_(index)){
if((moves === (0))){
if(cljs.core.truth_(index)){
return zprint.focus.skip_whitespace_ssv(ssv,index);
} else {
return null;
}
} else {
var G__28157 = zprint.focus.next_ssv(ssv,index);
var G__28158 = (moves - (1));
index = G__28157;
moves = G__28158;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Given a non-whitespace path from a zipper, find that same
 *   collection or element in a str-style-vec.
 */
zprint.focus.path_ssv = (function zprint$focus$path_ssv(nwpath,ssv){
var idx = (0);
var nwp = nwpath;
while(true){
if(cljs.core.truth_(idx)){
if(cljs.core.empty_QMARK_(nwp)){
return idx;
} else {
var G__28159 = zprint.focus.right_ssv(cljs.core.first(nwp),ssv,zprint.focus.down_ssv(ssv,idx));
var G__28160 = cljs.core.next(nwp);
idx = G__28159;
nwp = G__28160;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Use a non-whitespace path from a zipper, and find that
 *   same collection or element in a str-style-vec, and return
 *   a vector of the start and end of that collection or element.
 *   Depends on next-ssv returning one past the end of its input.
 */
zprint.focus.range_ssv = (function zprint$focus$range_ssv(ssv,nwpath){
var start = zprint.focus.path_ssv(nwpath,ssv);
var start__$1 = zprint.focus.skip_whitespace_ssv(ssv,start);
var ssv_next = zprint.focus.next_ssv(ssv,start__$1);
var end = (cljs.core.truth_((function (){var and__4115__auto__ = ssv_next;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start__$1,(0));
} else {
return and__4115__auto__;
}
})())?cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1))(ssv_next):(cljs.core.count(ssv) - (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null);
});

//# sourceMappingURL=zprint.focus.js.map

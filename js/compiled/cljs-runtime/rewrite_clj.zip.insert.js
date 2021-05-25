goog.provide('rewrite_clj.zip.insert');
rewrite_clj.zip.insert.space = (rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1((1)) : rewrite_clj.node.spaces.call(null,(1)));
/**
 * Generic insertion helper. If the node reached by `move-fn`
 * is a whitespace, insert an additional space.
 */
rewrite_clj.zip.insert.insert = (function rewrite_clj$zip$insert$insert(move_fn,insert_fn,prefix,zloc,item){
var item_node = (rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.coerce.cljs$core$IFn$_invoke$arity$1(item) : rewrite_clj.node.coerce.call(null,item));
var next_node = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(zloc) : move_fn.call(null,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(insert_fn,zloc,(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(next_node);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return rewrite_clj.zip.whitespace.whitespace_QMARK_(next_node);
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_node], null),prefix):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space,item_node], null),prefix)));
});
/**
 * Insert item to the right of the current location. Will insert a space if necessary.
 */
rewrite_clj.zip.insert.insert_right = (function rewrite_clj$zip$insert$insert_right(zloc,item){
return rewrite_clj.zip.insert.insert(clojure.zip.right,clojure.zip.insert_right,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
 * Insert item to the right of the left location. Will insert a space if necessary.
 */
rewrite_clj.zip.insert.insert_left = (function rewrite_clj$zip$insert$insert_left(zloc,item){
return rewrite_clj.zip.insert.insert(clojure.zip.left,clojure.zip.insert_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
 * Insert item as first child of the current node. Will insert a space if necessary.
 */
rewrite_clj.zip.insert.insert_child = (function rewrite_clj$zip$insert$insert_child(zloc,item){
return rewrite_clj.zip.insert.insert(clojure.zip.down,clojure.zip.insert_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});
/**
 * Insert item as last child of the current node. Will insert a space if necessary.
 */
rewrite_clj.zip.insert.append_child = (function rewrite_clj$zip$insert$append_child(zloc,item){
return rewrite_clj.zip.insert.insert((function (p1__29887_SHARP_){
var G__29888 = p1__29887_SHARP_;
var G__29888__$1 = (((G__29888 == null))?null:clojure.zip.down(G__29888));
if((G__29888__$1 == null)){
return null;
} else {
return clojure.zip.rightmost(G__29888__$1);
}
}),clojure.zip.append_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});

//# sourceMappingURL=rewrite_clj.zip.insert.js.map

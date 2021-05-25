goog.provide('rewrite_clj.zip.removez');
/**
 * Remove all whitespace following a given node.
 */
rewrite_clj.zip.removez.remove_trailing_space = (function rewrite_clj$zip$removez$remove_trailing_space(zloc,p_QMARK_){
return rewrite_clj.zip.utils.remove_right_while(zloc,p_QMARK_);
});
/**
 * Remove all whitespace preceding a given node.
 */
rewrite_clj.zip.removez.remove_preceding_space = (function rewrite_clj$zip$removez$remove_preceding_space(zloc,p_QMARK_){
return rewrite_clj.zip.utils.remove_left_while(zloc,p_QMARK_);
});
/**
 * Remove value at the given zipper location. Returns the first non-whitespace
 * node that would have preceded it in a depth-first walk. Will remove whitespace
 * appropriately.
 * 
 *   - `[1  2  3]   => [1  3]`
 *   - `[1 2]       => [1]`
 *   - `[1 2]       => [2]`
 *   - `[1]         => []`
 *   - `[  1  ]     => []`
 *   - `[1 [2 3] 4] => [1 [2 3]]`
 *   - `[1 [2 3] 4] => [[2 3] 4]`
 * 
 * If a node is located rightmost, both preceding and trailing spaces are removed,
 * otherwise only trailing spaces are touched. This means that a following element
 * (no matter whether on the same line or not) will end up in the same position
 * (line/column) as the removed one, _unless_ a comment lies between the original
 * node and the neighbour.
 */
rewrite_clj.zip.removez.remove = (function rewrite_clj$zip$removez$remove(zloc){
if(cljs.core.truth_(zloc)){
} else {
throw (new Error("Assert failed: zloc"));
}

var _PERCENT_ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,clojure.zip.remove(rewrite_clj.zip.removez.remove_trailing_space(((((rewrite_clj.zip.move.rightmost_QMARK_(zloc)) || (rewrite_clj.zip.move.leftmost_QMARK_(zloc))))?rewrite_clj.zip.removez.remove_preceding_space(zloc,rewrite_clj.zip.whitespace.whitespace_QMARK_):zloc),rewrite_clj.zip.whitespace.whitespace_QMARK_)));
if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
/**
 * Same as remove but preserves newlines
 */
rewrite_clj.zip.removez.remove_preserve_newline = (function rewrite_clj$zip$removez$remove_preserve_newline(zloc){
if(cljs.core.truth_(zloc)){
} else {
throw (new Error("Assert failed: zloc"));
}

var _PERCENT_ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,clojure.zip.remove(rewrite_clj.zip.removez.remove_trailing_space(((((rewrite_clj.zip.move.rightmost_QMARK_(zloc)) || (rewrite_clj.zip.move.leftmost_QMARK_(zloc))))?rewrite_clj.zip.removez.remove_preceding_space(zloc,(function (p1__29879_SHARP_){
var and__4115__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_(p1__29879_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace.linebreak_QMARK_(p1__29879_SHARP_));
} else {
return and__4115__auto__;
}
})):zloc),(function (p1__29880_SHARP_){
var and__4115__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_(p1__29880_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace.linebreak_QMARK_(p1__29880_SHARP_));
} else {
return and__4115__auto__;
}
}))));
if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});

//# sourceMappingURL=rewrite_clj.zip.removez.js.map

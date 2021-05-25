goog.provide('athens.patterns');
athens.patterns.linked = (function athens$patterns$linked(string){
return cljs.core.re_pattern(["(\\[{2})",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"(\\]{2})","|","(#)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"|","(#\\[{2})",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"(\\]{2})"].join(''));
});
/**
 * Exclude #title or [[title]].
 * JavaScript negative lookarounds https://javascript.info/regexp-lookahead-lookbehind
 * Lookarounds don't consume characters https://stackoverflow.com/questions/27179991/regex-matching-multiple-negative-lookahead 
 */
athens.patterns.unlinked = (function athens$patterns$unlinked(string){
return cljs.core.re_pattern(["(?i)(?<!#)(?<!\\[\\[)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"(?!\\]\\])"].join(''));
});
athens.patterns.update_links_in_block = (function athens$patterns$update_links_in_block(s,old_title,new_title){
return clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
});

//# sourceMappingURL=athens.patterns.js.map

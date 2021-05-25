goog.provide('rewrite_clj.node');
/**
 * See [[protocols/tag]]
 */
rewrite_clj.node.tag = rewrite_clj.node.protocols.tag;
/**
 * See [[protocols/sexpr]]
 */
rewrite_clj.node.sexpr = rewrite_clj.node.protocols.sexpr;
/**
 * See [[protocols/string]]
 */
rewrite_clj.node.string = rewrite_clj.node.protocols.string;
/**
 * See [[protocols/children]]
 */
rewrite_clj.node.children = rewrite_clj.node.protocols.children;
/**
 * See [[protocols/sexprs]]
 */
rewrite_clj.node.child_sexprs = rewrite_clj.node.protocols.child_sexprs;
/**
 * See [[protocols/replace-children]]
 */
rewrite_clj.node.replace_children = rewrite_clj.node.protocols.replace_children;
/**
 * See [[protocols/inner?]]
 */
rewrite_clj.node.inner_QMARK_ = rewrite_clj.node.protocols.inner_QMARK_;
/**
 * See [[protocols/printable-only?]]
 */
rewrite_clj.node.printable_only_QMARK_ = rewrite_clj.node.protocols.printable_only_QMARK_;
/**
 * See [[protocols/coerce]]
 */
rewrite_clj.node.coerce = rewrite_clj.node.protocols.coerce;
/**
 * See [[protocols/length]]
 */
rewrite_clj.node.length = rewrite_clj.node.protocols.length;
/**
 * see [[forms/forms-node]]
 */
rewrite_clj.node.forms_node = rewrite_clj.node.forms.forms_node;
/**
 * see [[keyword/keyword-node]]
 */
rewrite_clj.node.keyword_node = rewrite_clj.node.keyword.keyword_node;
/**
 * See [[seq/list-node]]
 */
rewrite_clj.node.list_node = rewrite_clj.node.seq.list_node;
/**
 * See [[seq/vector-node]]
 */
rewrite_clj.node.vector_node = rewrite_clj.node.seq.vector_node;
/**
 * See [[seq/set-node]]
 */
rewrite_clj.node.set_node = rewrite_clj.node.seq.set_node;
/**
 * See [[seq/map-node]]
 */
rewrite_clj.node.map_node = rewrite_clj.node.seq.map_node;
/**
 * See [[stringz/string-node]]
 */
rewrite_clj.node.string_node = rewrite_clj.node.stringz.string_node;
/**
 * See [[comment/comment-node]]
 */
rewrite_clj.node.comment_node = rewrite_clj.node.comment.comment_node;
/**
 * See [[comment/comment?]]
 */
rewrite_clj.node.comment_QMARK_ = rewrite_clj.node.comment.comment_QMARK_;
/**
 * See [[whitespace/whitespace-node]]
 */
rewrite_clj.node.whitespace_node = rewrite_clj.node.whitespace.whitespace_node;
/**
 * See [[whitespace/newline-node]]
 */
rewrite_clj.node.newline_node = rewrite_clj.node.whitespace.newline_node;
/**
 * See [[whitespace/spaces]]
 */
rewrite_clj.node.spaces = rewrite_clj.node.whitespace.spaces;
/**
 * See [[whitespace/newlines]]
 */
rewrite_clj.node.newlines = rewrite_clj.node.whitespace.newlines;
/**
 * See [[whitespace/whitespace?]]
 */
rewrite_clj.node.whitespace_QMARK_ = rewrite_clj.node.whitespace.whitespace_QMARK_;
/**
 * See [[whitespace/linebreak?]]
 */
rewrite_clj.node.linebreak_QMARK_ = rewrite_clj.node.whitespace.linebreak_QMARK_;
/**
 * Check whether the given node represents whitespace or comment.
 */
rewrite_clj.node.whitespace_or_comment_QMARK_ = (function rewrite_clj$node$whitespace_or_comment_QMARK_(node){
var or__4126__auto__ = (rewrite_clj.node.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.whitespace_QMARK_.call(null,node));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (rewrite_clj.node.comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.comment_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.comment_QMARK_.call(null,node));
}
});
/**
 * See [[token/token-node]]
 */
rewrite_clj.node.token_node = rewrite_clj.node.token.token_node;
/**
 * See [[reader-macro/var-node]]
 */
rewrite_clj.node.var_node = rewrite_clj.node.reader_macro.var_node;
/**
 * See [[reader-macro/eval-node]]
 */
rewrite_clj.node.eval_node = rewrite_clj.node.reader_macro.eval_node;
/**
 * See [[reader-macro/reader-macro-node]]
 */
rewrite_clj.node.reader_macro_node = rewrite_clj.node.reader_macro.reader_macro_node;
/**
 * See [[reader-macro/deref-node]]
 */
rewrite_clj.node.deref_node = rewrite_clj.node.reader_macro.deref_node;
/**
 * See [[quote/quote-node]]
 */
rewrite_clj.node.quote_node = rewrite_clj.node.quote.quote_node;
/**
 * See [[quote/syntax-quote-node]]
 */
rewrite_clj.node.syntax_quote_node = rewrite_clj.node.quote.syntax_quote_node;
/**
 * See [[quote/unquote-node]]
 */
rewrite_clj.node.unquote_node = rewrite_clj.node.quote.unquote_node;
/**
 * See [[quote/unquote-splicing-node]]
 */
rewrite_clj.node.unquote_splicing_node = rewrite_clj.node.quote.unquote_splicing_node;
/**
 * See [[uneval/uneval-node]]
 */
rewrite_clj.node.uneval_node = rewrite_clj.node.uneval.uneval_node;
/**
 * See [[meta/meta-node]]
 */
rewrite_clj.node.meta_node = rewrite_clj.node.meta.meta_node;
/**
 * See [[fn/fn-node]]
 */
rewrite_clj.node.fn_node = rewrite_clj.node.fn.fn_node;

//# sourceMappingURL=rewrite_clj.node.js.map

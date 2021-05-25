goog.provide('rewrite_clj.parser.token');
rewrite_clj.parser.token.join_2 = (function rewrite_clj$parser$token$join_2(a,b){
return (new goog.string.StringBuffer(a)).append(b).toString();
});
rewrite_clj.parser.token.allowed_default_QMARK_ = (function rewrite_clj$parser$token$allowed_default_QMARK_(c){
return false;
});
rewrite_clj.parser.token.allowed_suffix_QMARK_ = (function rewrite_clj$parser$token$allowed_suffix_QMARK_(c){
return (((c === "'")) || ((c === ":")));
});
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(reader,allowed_QMARK_){
return rewrite_clj.reader.read_until(reader,(function (p1__29656_SHARP_){
return ((cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__29656_SHARP_) : allowed_QMARK_.call(null,p1__29656_SHARP_)))) && (rewrite_clj.reader.whitespace_or_boundary_QMARK_(p1__29656_SHARP_)));
}));
});
rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
return rewrite_clj.parser.token.join_2(c,(((!((c === "\\"))))?rewrite_clj.parser.token.read_to_boundary(reader,rewrite_clj.parser.token.allowed_default_QMARK_):""));
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary(reader,rewrite_clj.parser.token.allowed_suffix_QMARK_);
if(cljs.core.empty_QMARK_(suffix)){
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2(value,value_string) : rewrite_clj.node.token_node.call(null,value,value_string));
} else {
var s = rewrite_clj.parser.token.join_2(value_string,suffix);
var G__29657 = (rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1(s) : rewrite_clj.reader.read_string.call(null,s));
var G__29658 = s;
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2(G__29657,G__29658) : rewrite_clj.node.token_node.call(null,G__29657,G__29658));
}
});
/**
 * Parse a single token.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
var s = rewrite_clj.parser.token.join_2(first_char,(((first_char === "\\"))?rewrite_clj.parser.token.read_to_char_boundary(reader):rewrite_clj.parser.token.read_to_boundary(reader,rewrite_clj.parser.token.allowed_default_QMARK_)));
var v = (rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1(s) : rewrite_clj.reader.read_string.call(null,s));
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node(reader,v,s);
} else {
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2(v,s) : rewrite_clj.node.token_node.call(null,v,s));
}
});

//# sourceMappingURL=rewrite_clj.parser.token.js.map

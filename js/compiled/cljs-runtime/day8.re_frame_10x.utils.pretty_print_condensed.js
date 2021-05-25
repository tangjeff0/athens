goog.provide('day8.re_frame_10x.utils.pretty_print_condensed');

/**
 * @interface
 */
day8.re_frame_10x.utils.pretty_print_condensed.ILimited = function(){};

var day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$dyn_31391 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ILimited.-limited?",x);
}
}
});
day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_ = (function day8$re_frame_10x$utils$pretty_print_condensed$_limited_QMARK_(x){
if((((!((x == null)))) && ((!((x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 == null)))))){
return x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1(x);
} else {
return day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$dyn_31391(x);
}
});

/**
 * Truncate a string to length `n`.
 * 
 *   Removal occurs at `cut-from`, which may be :start, :end, or :middle.
 * 
 *   Truncation is indicated by `…` at start/end, or `...` at middle, for readability. 
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_string = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_string(var_args){
var G__31343 = arguments.length;
switch (G__31343) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2 = (function (n,string){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"end","end",-268185958),string);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3 = (function (n,cut_from,string){
var c = cljs.core.count(string);
if((c > n)){
var G__31344 = cut_from;
var G__31344__$1 = (((G__31344 instanceof cljs.core.Keyword))?G__31344.fqn:null);
switch (G__31344__$1) {
case "start":
return ["\u2026",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - (n - (1))),c)].join('');

break;
case "end":
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(n - (1))),"\u2026"].join('');

break;
case "middle":
var G__31345 = n;
switch (G__31345) {
case (1):
return "\u2026";

break;
case (2):
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"start","start",-355208981),string);

break;
case (3):
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(1)),"\u2026",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - (1)),c)].join('');

break;
default:
var content_budget = (n - (2));
var per_side_budget = Math.floor((content_budget / (2)));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(function (){var G__31347 = per_side_budget;
if(cljs.core.even_QMARK_(content_budget)){
return (G__31347 - (1));
} else {
return G__31347;
}
})()),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(c - per_side_budget),c)].join('');

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31344__$1)].join('')));

}
} else {
return string;
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_segments(var_args){
var G__31349 = arguments.length;
switch (G__31349) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2 = (function (s,limit){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4(s,limit,/^[^.]+\./,"\u2026");
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4 = (function (s,limit,match,trunc_prefix){
while(true){
if((cljs.core.count(s) <= limit)){
return s;
} else {
var rep = clojure.string.replace(s,match,trunc_prefix);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rep,s)){
return trunc_prefix;
} else {
var G__31396 = clojure.string.replace(s,match,trunc_prefix);
var G__31397 = limit;
var G__31398 = match;
var G__31399 = trunc_prefix;
s = G__31396;
limit = G__31397;
match = G__31398;
trunc_prefix = G__31399;
continue;
}
}
break;
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$lang$maxFixedArity = 4);

/**
 * Truncates `named`, which must satisfy INamed protocol, to within `n`
 * characters, cutting from beginning. Adds a `…` prefix to indicate where
 * cutting has occurred.
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_named = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_named(n,named){
var the_ns = cljs.core.namespace(named);
var the_name = cljs.core.name(named);
var kw_QMARK_ = (named instanceof cljs.core.Keyword);
var ns_prefix_size = ((kw_QMARK_)?(3):(2));
if((((((the_name).length) > (cljs.core.truth_(the_ns)?(n - ns_prefix_size):n))) || ((the_ns == null)))){
var prefix = (function (){var G__31350 = ((kw_QMARK_)?":":"");
if(cljs.core.truth_(the_ns)){
return [G__31350,"\u2026/"].join('');
} else {
return G__31350;
}
})();
return [prefix,day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((n - ((prefix).length)),new cljs.core.Keyword(null,"start","start",-355208981),the_name)].join('');
} else {
var end = ["/",the_name].join('');
var prefix = ((kw_QMARK_)?":":"");
var ns_budget = ((n - ((end).length)) - ((prefix).length));
var ns_string = day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2(the_ns,ns_budget);
return [prefix,ns_string,end].join('');
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.utils.pretty_print_condensed.truncate_named((12),new cljs.core.Keyword("city","saskatoon","city/saskatoon",2120611420)),":\u2026/saskatoon")){
} else {
throw (new Error("Assert failed: (= (truncate-named 12 :city/saskatoon) \":\u2026/saskatoon\")"));
}
day8.re_frame_10x.utils.pretty_print_condensed.truncate = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate(n,location,param){
if((((!((param == null))))?(((((param.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === param.cljs$core$INamed$))))?true:(((!param.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,param):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,param))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named(n,param);
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3(n,location,cljs.core.str.cljs$core$IFn$_invoke$arity$1(param));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.str__GT_namespaced_sym = (function day8$re_frame_10x$utils$pretty_print_condensed$str__GT_namespaced_sym(s){
if(typeof s === 'string'){
var name = cljs.core.second(cljs.core.re_find(/\.([^.]+)$/,s));
if(cljs.core.truth_(name)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),((((s).length) - cljs.core.count(name)) - (1))),name);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
}
} else {
return s;
}
});
/**
 * Return left and right edges of a collection (eg. brackets plus prefixes), defaults to [< >].
 */
day8.re_frame_10x.utils.pretty_print_condensed.edges = (function day8$re_frame_10x$utils$pretty_print_condensed$edges(coll){
if(cljs.core.map_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);
} else {
if(cljs.core.vector_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
if(cljs.core.set_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);
} else {
if(((cljs.core.list_QMARK_(coll)) || (cljs.core.seq_QMARK_(coll)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null);

}
}
}
}
});
/**
 * Wrap `value` with edges of `coll`
 */
day8.re_frame_10x.utils.pretty_print_condensed.with_edges = (function day8$re_frame_10x$utils$pretty_print_condensed$with_edges(coll,value){
var vec__31355 = day8.re_frame_10x.utils.pretty_print_condensed.edges(coll);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31355,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31355,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
});
/**
 * Render form in abbreviated form, showing content only for keywords/strings/symbols and entering collections to a depth of 1.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed = (function day8$re_frame_10x$utils$pretty_print_condensed$pretty_condensed(var_args){
var G__31359 = arguments.length;
switch (G__31359) {
case 1:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((0),cljs.core.coll_QMARK_,(1),form);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4 = (function (depth,enter_pred,max_depth,form){
if((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$INamed$))))?true:(((!form.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,form))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named((16),form);
} else {
if(typeof form === 'string'){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((16),new cljs.core.Keyword(null,"middle","middle",-701029031),form);
} else {
if(cljs.core.fn_QMARK_(form)){
var or__4126__auto__ = (function (){var G__31365 = form.name;
if((G__31365 == null)){
return null;
} else {
return clojure.string.replace(G__31365,/(^.*\$)(.*)/,"$2");
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "\u0192";
}
} else {
if(typeof form === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (enter_pred.cljs$core$IFn$_invoke$arity$1 ? enter_pred.cljs$core$IFn$_invoke$arity$1(form) : enter_pred.call(null,form));
if(cljs.core.truth_(and__4115__auto__)){
return (depth < max_depth);
} else {
return and__4115__auto__;
}
})())){
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges(form,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed,(depth + (1)),enter_pred,max_depth),form)));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges(form,"\u2026");

}
}
}
}
}
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$lang$maxFixedArity = 4);

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer_impl(obj,writer,opts){
if(cljs.core.truth_(day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_(writer))){
return writer;
} else {
var fexpr__31368 = new cljs.core.Var(function(){return cljs.core.pr_writer_impl;},new cljs.core.Symbol("cljs.core","pr-writer-impl","cljs.core/pr-writer-impl",-1320775133,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"pr-writer-impl","pr-writer-impl",1493645016,null),"cljs/core.cljs",22,1,10107,10107,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.core.pr_writer_impl)?cljs.core.pr_writer_impl.cljs$lang$test:null)]));
return (fexpr__31368.cljs$core$IFn$_invoke$arity$3 ? fexpr__31368.cljs$core$IFn$_invoke$arity$3(obj,writer,opts) : fexpr__31368.call(null,obj,writer,opts));
}
});
/**
 * Prefer this to pr-seq, because it makes the printing function
 * configurable, allowing efficient implementations such as appending
 * to a StringBuffer.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer(obj,writer,opts){
var temp__5733__auto__ = new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var alt_impl = temp__5733__auto__;
var G__31372 = obj;
var G__31373 = writer;
var G__31374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl);
return (alt_impl.cljs$core$IFn$_invoke$arity$3 ? alt_impl.cljs$core$IFn$_invoke$arity$3(G__31372,G__31373,G__31374) : alt_impl.call(null,G__31372,G__31373,G__31374));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl(obj,writer,opts);
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_seq_writer(objs,writer,opts){
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(cljs.core.first(objs),writer,opts);

var seq__31375 = cljs.core.seq(cljs.core.next(objs));
var chunk__31376 = null;
var count__31377 = (0);
var i__31378 = (0);
while(true){
if((i__31378 < count__31377)){
var obj = chunk__31376.cljs$core$IIndexed$_nth$arity$2(null,i__31378);
cljs.core._write(writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(obj,writer,opts);


var G__31404 = seq__31375;
var G__31405 = chunk__31376;
var G__31406 = count__31377;
var G__31407 = (i__31378 + (1));
seq__31375 = G__31404;
chunk__31376 = G__31405;
count__31377 = G__31406;
i__31378 = G__31407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31375);
if(temp__5735__auto__){
var seq__31375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31375__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31375__$1);
var G__31408 = cljs.core.chunk_rest(seq__31375__$1);
var G__31409 = c__4556__auto__;
var G__31410 = cljs.core.count(c__4556__auto__);
var G__31411 = (0);
seq__31375 = G__31408;
chunk__31376 = G__31409;
count__31377 = G__31410;
i__31378 = G__31411;
continue;
} else {
var obj = cljs.core.first(seq__31375__$1);
cljs.core._write(writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer(obj,writer,opts);


var G__31412 = cljs.core.next(seq__31375__$1);
var G__31413 = null;
var G__31414 = (0);
var G__31415 = (0);
seq__31375 = G__31412;
chunk__31376 = G__31413;
count__31377 = G__31414;
i__31378 = G__31415;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.utils.pretty_print_condensed.string_print = (function day8$re_frame_10x$utils$pretty_print_condensed$string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);

return null;
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.ICounted}
 * @implements {day8.re_frame_10x.utils.pretty_print_condensed.ILimited}
*/
day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter = (function (sb,max_string_length,over_limit_QMARK_){
this.sb = sb;
this.max_string_length = max_string_length;
this.over_limit_QMARK_ = over_limit_QMARK_;
this.cljs$lang$protocol_mask$partition0$ = 1073741826;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.over_limit_QMARK_)){
} else {
if((self__.max_string_length <= self__.sb.getLength())){
(self__.over_limit_QMARK_ = true);
} else {
self__.sb.append(s);
}
}

return self__.sb;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sb.getLength();
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.over_limit_QMARK_;
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"max-string-length","max-string-length",1209706837,null),cljs.core.with_meta(new cljs.core.Symbol(null,"over-limit?","over-limit?",-259661935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$type = true);

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorStr = "day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter");

(day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter");
}));

/**
 * Positional factory function for day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter.
 */
day8.re_frame_10x.utils.pretty_print_condensed.__GT_LimitedStringBufferWriter = (function day8$re_frame_10x$utils$pretty_print_condensed$__GT_LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_){
return (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_));
});

day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534).cljs$core$IFn$_invoke$arity$2(opts,(72)),false));
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
 * Prints a sequence of objects to a string, observing all the
 *   options given in opts
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts(objs,opts));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
 * Like pr, but truncates output at n characters. Use for efficient printing where
 *   you don't want to pay the cost of printing the (possibly large) data structure.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_truncated(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31416 = arguments.length;
var i__4737__auto___31417 = (0);
while(true){
if((i__4737__auto___31417 < len__4736__auto___31416)){
args__4742__auto__.push((arguments[i__4737__auto___31417]));

var G__31418 = (i__4737__auto___31417 + (1));
i__4737__auto___31417 = G__31418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic = (function (n,objs){
var opts = day8.re_frame_10x.utils.pretty_print_condensed.pr_opts();
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2(n,day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(n / (2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),"\u2026",new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534),(n + (1)),new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl], 0))));
}));

(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$applyTo = (function (seq31389){
var G__31390 = cljs.core.first(seq31389);
var seq31389__$1 = cljs.core.next(seq31389);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31390,seq31389__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.utils.pretty_print_condensed.js.map

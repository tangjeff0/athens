goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__63914 = xs;
args__$2 = G__63914;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__63915 = xs;
args__$2 = G__63915;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63916 = arguments.length;
var i__4737__auto___63917 = (0);
while(true){
if((i__4737__auto___63917 < len__4736__auto___63916)){
args__4742__auto__.push((arguments[i__4737__auto___63917]));

var G__63918 = (i__4737__auto___63917 + (1));
i__4737__auto___63917 = G__63918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__63919 = ctx__$2;
var G__63920 = rest_let_bindings;
ctx__$1 = G__63919;
let_bindings__$1 = G__63920;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__63921 = nexprs;
exprs__$1 = G__63921;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq63148){
var G__63149 = cljs.core.first(seq63148);
var seq63148__$1 = cljs.core.next(seq63148);
var G__63150 = cljs.core.first(seq63148__$1);
var seq63148__$2 = cljs.core.next(seq63148__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63149,G__63150,seq63148__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__63157){
var vec__63160 = p__63157;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63160,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63160,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63160,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63160,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__63164 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63164,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__63164;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__63168 = libspec;
var seq__63169 = cljs.core.seq(vec__63168);
var first__63170 = cljs.core.first(seq__63169);
var seq__63169__$1 = cljs.core.next(seq__63169);
var lib_name = first__63170;
var opts = seq__63169__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__63174 = opts;
var vec__63175 = G__63174;
var seq__63176 = cljs.core.seq(vec__63175);
var first__63177 = cljs.core.first(seq__63176);
var seq__63176__$1 = cljs.core.next(seq__63176);
var opt_name = first__63177;
var first__63177__$1 = cljs.core.first(seq__63176__$1);
var seq__63176__$2 = cljs.core.next(seq__63176__$1);
var fst_opt = first__63177__$1;
var rst_opts = seq__63176__$2;
var ret__$1 = ret;
var G__63174__$1 = G__63174;
while(true){
var ret__$2 = ret__$1;
var vec__63182 = G__63174__$1;
var seq__63183 = cljs.core.seq(vec__63182);
var first__63184 = cljs.core.first(seq__63183);
var seq__63183__$1 = cljs.core.next(seq__63183);
var opt_name__$1 = first__63184;
var first__63184__$1 = cljs.core.first(seq__63183__$1);
var seq__63183__$2 = cljs.core.next(seq__63183__$1);
var fst_opt__$1 = first__63184__$1;
var rst_opts__$1 = seq__63183__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__63185 = opt_name__$1;
var G__63185__$1 = (((G__63185 instanceof cljs.core.Keyword))?G__63185.fqn:null);
switch (G__63185__$1) {
case "as":
var G__63923 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__63924 = rst_opts__$1;
ret__$1 = G__63923;
G__63174__$1 = G__63924;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__63925 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__63926 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__63925;
G__63174__$1 = G__63926;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__63927 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__63928 = rst_opts__$1;
ret__$1 = G__63927;
G__63174__$1 = G__63928;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63185__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__63186){
var vec__63187 = p__63186;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63187,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__63193){
var map__63194 = p__63193;
var map__63194__$1 = (((((!((map__63194 == null))))?(((((map__63194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63194):map__63194);
var _parsed_libspec = map__63194__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63194__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63194__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63194__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63194__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63194__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63200 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63200,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__63203 = sci.impl.interpreter.parse_libspec(libspec);
var map__63203__$1 = (((((!((map__63203 == null))))?(((((map__63203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63203):map__63203);
var parsed_libspec = map__63203__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__63205 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__63205) : load_fn.call(null,G__63205));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__63206 = temp__5733__auto____$2;
var map__63206__$1 = (((((!((map__63206 == null))))?(((((map__63206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63206):map__63206);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__63209_63929 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__63210_63930 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__63209_63929,G__63210_63930) : sci.impl.interpreter.eval_string_STAR_.call(null,G__63209_63929,G__63210_63930));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e63208){if((e63208 instanceof Error)){
var e_63931 = e63208;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_63931;
} else {
throw e63208;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63932 = arguments.length;
var i__4737__auto___63933 = (0);
while(true){
if((i__4737__auto___63933 < len__4736__auto___63932)){
args__4742__auto__.push((arguments[i__4737__auto___63933]));

var G__63934 = (i__4737__auto___63933 + (1));
i__4737__auto___63933 = G__63934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__63220 = ctx;
var G__63221 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63220,G__63221) : sci.impl.interpreter.interpret.call(null,G__63220,G__63221));
})();
if((ret instanceof cljs.core.Symbol)){
var G__63935 = (function (){var G__63222 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63222,current_libspec);
} else {
return G__63222;
}
})();
var G__63936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__63937 = cljs.core.next(args__$1);
libspecs = G__63935;
current_libspec = G__63936;
args__$1 = G__63937;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__63938 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__63939 = null;
var G__63940 = cljs.core.next(args__$1);
libspecs = G__63938;
current_libspec = G__63939;
args__$1 = G__63940;
continue;
} else {
var G__63941 = (function (){var G__63223 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63223,current_libspec);
} else {
return G__63223;
}
})();
var G__63942 = ret;
var G__63943 = cljs.core.next(args__$1);
libspecs = G__63941;
current_libspec = G__63942;
args__$1 = G__63943;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__63225 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63225,current_libspec);
} else {
return G__63225;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__63211_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__63211_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq63212){
var G__63213 = cljs.core.first(seq63212);
var seq63212__$1 = cljs.core.next(seq63212);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63213,seq63212__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63944 = arguments.length;
var i__4737__auto___63945 = (0);
while(true){
if((i__4737__auto___63945 < len__4736__auto___63944)){
args__4742__auto__.push((arguments[i__4737__auto___63945]));

var G__63946 = (i__4737__auto___63945 + (1));
i__4737__auto___63945 = G__63946;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq63229){
var G__63230 = cljs.core.first(seq63229);
var seq63229__$1 = cljs.core.next(seq63229);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63230,seq63229__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__63235){
var vec__63236 = p__63235;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63236,(0),null);
var map__63239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63236,(1),null);
var map__63239__$1 = (((((!((map__63239 == null))))?(((((map__63239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63239):map__63239);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63239__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63239__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63239__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63244 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63244,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63244,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__63247 = ctx;
var G__63248 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63247,G__63248) : sci.impl.interpreter.interpret.call(null,G__63247,G__63248));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__63249 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__63249__$1 = (((((!((map__63249 == null))))?(((((map__63249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63249):map__63249);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63249__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63249__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63249__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__63269 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__63270 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__63270);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__63269);
}}catch (e63251){if((e63251 instanceof Error)){
var e = e63251;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__63256 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__63257 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63256,G__63257) : sci.impl.interpreter.interpret.call(null,G__63256,G__63257));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63262 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63262,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63262,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e63251;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__63274){
var vec__63275 = p__63274;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63275,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63275,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63278_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63278_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63278_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__63280){
var vec__63281 = p__63280;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63281,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63281,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63281,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63279_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63279_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63279_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__63286,p__63287){
var map__63288 = p__63286;
var map__63288__$1 = (((((!((map__63288 == null))))?(((((map__63288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63288):map__63288);
var ctx = map__63288__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63288__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__63289 = p__63287;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63289,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63289,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63289,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63289,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63285_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63285_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63285_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__63293){
var vec__63294 = p__63293;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63294,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__63297){
var vec__63298 = p__63297;
var seq__63299 = cljs.core.seq(vec__63298);
var first__63300 = cljs.core.first(seq__63299);
var seq__63299__$1 = cljs.core.next(seq__63299);
var _ = first__63300;
var first__63300__$1 = cljs.core.first(seq__63299__$1);
var seq__63299__$2 = cljs.core.next(seq__63299__$1);
var ns_sym = first__63300__$1;
var exprs = seq__63299__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__63301 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301,(1),null);
var G__63304_63947 = k;
var G__63304_63948__$1 = (((G__63304_63947 instanceof cljs.core.Keyword))?G__63304_63947.fqn:null);
switch (G__63304_63948__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__63304_63947,G__63304_63948__$1,vec__63301,k,v,ns_sym__$1,vec__63298,seq__63299,first__63300,seq__63299__$1,_,first__63300__$1,seq__63299__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__63304_63947,G__63304_63948__$1,vec__63301,k,v,ns_sym__$1,vec__63298,seq__63299,first__63300,seq__63299__$1,_,first__63300__$1,seq__63299__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63304_63948__$1)].join('')));

}

var G__63950 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__63950;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__63305){
var vec__63306 = p__63305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63306,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63306,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63306,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__63312 = exprs;
var vec__63313 = G__63312;
var seq__63314 = cljs.core.seq(vec__63313);
var first__63315 = cljs.core.first(seq__63314);
var seq__63314__$1 = cljs.core.next(seq__63314);
var expr = first__63315;
var exprs__$1 = seq__63314__$1;
var G__63312__$1 = G__63312;
while(true){
var vec__63316 = G__63312__$1;
var seq__63317 = cljs.core.seq(vec__63316);
var first__63318 = cljs.core.first(seq__63317);
var seq__63317__$1 = cljs.core.next(seq__63317);
var expr__$1 = first__63318;
var exprs__$2 = seq__63317__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e63319){if((e63319 instanceof Error)){
var e = e63319;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e63319;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__63951 = exprs__$3;
G__63312__$1 = G__63951;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__63512 = cljs.core.count(args);
switch (G__63512) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg63322 = (function (){var G__63513 = ctx;
var G__63514 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63513,G__63514) : sci.impl.interpreter.interpret.call(null,G__63513,G__63514));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg63322) : f.call(null,arg63322));

break;
case (2):
var arg63323 = (function (){var G__63515 = ctx;
var G__63516 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63515,G__63516) : sci.impl.interpreter.interpret.call(null,G__63515,G__63516));
})();
var args__$1 = cljs.core.rest(args);
var arg63324 = (function (){var G__63517 = ctx;
var G__63518 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63517,G__63518) : sci.impl.interpreter.interpret.call(null,G__63517,G__63518));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg63323,arg63324) : f.call(null,arg63323,arg63324));

break;
case (3):
var arg63325 = (function (){var G__63519 = ctx;
var G__63520 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63519,G__63520) : sci.impl.interpreter.interpret.call(null,G__63519,G__63520));
})();
var args__$1 = cljs.core.rest(args);
var arg63326 = (function (){var G__63521 = ctx;
var G__63522 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63521,G__63522) : sci.impl.interpreter.interpret.call(null,G__63521,G__63522));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63327 = (function (){var G__63523 = ctx;
var G__63524 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63523,G__63524) : sci.impl.interpreter.interpret.call(null,G__63523,G__63524));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg63325,arg63326,arg63327) : f.call(null,arg63325,arg63326,arg63327));

break;
case (4):
var arg63328 = (function (){var G__63525 = ctx;
var G__63526 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63525,G__63526) : sci.impl.interpreter.interpret.call(null,G__63525,G__63526));
})();
var args__$1 = cljs.core.rest(args);
var arg63329 = (function (){var G__63527 = ctx;
var G__63528 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63527,G__63528) : sci.impl.interpreter.interpret.call(null,G__63527,G__63528));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63330 = (function (){var G__63529 = ctx;
var G__63530 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63529,G__63530) : sci.impl.interpreter.interpret.call(null,G__63529,G__63530));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63331 = (function (){var G__63531 = ctx;
var G__63532 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63531,G__63532) : sci.impl.interpreter.interpret.call(null,G__63531,G__63532));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg63328,arg63329,arg63330,arg63331) : f.call(null,arg63328,arg63329,arg63330,arg63331));

break;
case (5):
var arg63332 = (function (){var G__63533 = ctx;
var G__63534 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63533,G__63534) : sci.impl.interpreter.interpret.call(null,G__63533,G__63534));
})();
var args__$1 = cljs.core.rest(args);
var arg63333 = (function (){var G__63535 = ctx;
var G__63536 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63535,G__63536) : sci.impl.interpreter.interpret.call(null,G__63535,G__63536));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63334 = (function (){var G__63537 = ctx;
var G__63538 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63537,G__63538) : sci.impl.interpreter.interpret.call(null,G__63537,G__63538));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63335 = (function (){var G__63539 = ctx;
var G__63540 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63539,G__63540) : sci.impl.interpreter.interpret.call(null,G__63539,G__63540));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63336 = (function (){var G__63541 = ctx;
var G__63542 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63541,G__63542) : sci.impl.interpreter.interpret.call(null,G__63541,G__63542));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg63332,arg63333,arg63334,arg63335,arg63336) : f.call(null,arg63332,arg63333,arg63334,arg63335,arg63336));

break;
case (6):
var arg63337 = (function (){var G__63543 = ctx;
var G__63544 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63543,G__63544) : sci.impl.interpreter.interpret.call(null,G__63543,G__63544));
})();
var args__$1 = cljs.core.rest(args);
var arg63338 = (function (){var G__63545 = ctx;
var G__63546 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63545,G__63546) : sci.impl.interpreter.interpret.call(null,G__63545,G__63546));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63339 = (function (){var G__63547 = ctx;
var G__63548 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63547,G__63548) : sci.impl.interpreter.interpret.call(null,G__63547,G__63548));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63340 = (function (){var G__63549 = ctx;
var G__63550 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63549,G__63550) : sci.impl.interpreter.interpret.call(null,G__63549,G__63550));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63341 = (function (){var G__63551 = ctx;
var G__63552 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63551,G__63552) : sci.impl.interpreter.interpret.call(null,G__63551,G__63552));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63342 = (function (){var G__63553 = ctx;
var G__63554 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63553,G__63554) : sci.impl.interpreter.interpret.call(null,G__63553,G__63554));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg63337,arg63338,arg63339,arg63340,arg63341,arg63342) : f.call(null,arg63337,arg63338,arg63339,arg63340,arg63341,arg63342));

break;
case (7):
var arg63343 = (function (){var G__63555 = ctx;
var G__63556 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63555,G__63556) : sci.impl.interpreter.interpret.call(null,G__63555,G__63556));
})();
var args__$1 = cljs.core.rest(args);
var arg63344 = (function (){var G__63557 = ctx;
var G__63558 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63557,G__63558) : sci.impl.interpreter.interpret.call(null,G__63557,G__63558));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63345 = (function (){var G__63559 = ctx;
var G__63560 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63559,G__63560) : sci.impl.interpreter.interpret.call(null,G__63559,G__63560));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63346 = (function (){var G__63561 = ctx;
var G__63562 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63561,G__63562) : sci.impl.interpreter.interpret.call(null,G__63561,G__63562));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63347 = (function (){var G__63563 = ctx;
var G__63564 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63563,G__63564) : sci.impl.interpreter.interpret.call(null,G__63563,G__63564));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63348 = (function (){var G__63565 = ctx;
var G__63566 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63565,G__63566) : sci.impl.interpreter.interpret.call(null,G__63565,G__63566));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63349 = (function (){var G__63567 = ctx;
var G__63568 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63567,G__63568) : sci.impl.interpreter.interpret.call(null,G__63567,G__63568));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg63343,arg63344,arg63345,arg63346,arg63347,arg63348,arg63349) : f.call(null,arg63343,arg63344,arg63345,arg63346,arg63347,arg63348,arg63349));

break;
case (8):
var arg63350 = (function (){var G__63569 = ctx;
var G__63570 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63569,G__63570) : sci.impl.interpreter.interpret.call(null,G__63569,G__63570));
})();
var args__$1 = cljs.core.rest(args);
var arg63351 = (function (){var G__63571 = ctx;
var G__63572 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63571,G__63572) : sci.impl.interpreter.interpret.call(null,G__63571,G__63572));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63352 = (function (){var G__63573 = ctx;
var G__63574 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63573,G__63574) : sci.impl.interpreter.interpret.call(null,G__63573,G__63574));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63353 = (function (){var G__63575 = ctx;
var G__63576 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63575,G__63576) : sci.impl.interpreter.interpret.call(null,G__63575,G__63576));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63354 = (function (){var G__63577 = ctx;
var G__63578 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63577,G__63578) : sci.impl.interpreter.interpret.call(null,G__63577,G__63578));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63355 = (function (){var G__63579 = ctx;
var G__63580 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63579,G__63580) : sci.impl.interpreter.interpret.call(null,G__63579,G__63580));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63356 = (function (){var G__63581 = ctx;
var G__63582 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63581,G__63582) : sci.impl.interpreter.interpret.call(null,G__63581,G__63582));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63357 = (function (){var G__63583 = ctx;
var G__63584 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63583,G__63584) : sci.impl.interpreter.interpret.call(null,G__63583,G__63584));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg63350,arg63351,arg63352,arg63353,arg63354,arg63355,arg63356,arg63357) : f.call(null,arg63350,arg63351,arg63352,arg63353,arg63354,arg63355,arg63356,arg63357));

break;
case (9):
var arg63358 = (function (){var G__63585 = ctx;
var G__63586 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63585,G__63586) : sci.impl.interpreter.interpret.call(null,G__63585,G__63586));
})();
var args__$1 = cljs.core.rest(args);
var arg63359 = (function (){var G__63587 = ctx;
var G__63588 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63587,G__63588) : sci.impl.interpreter.interpret.call(null,G__63587,G__63588));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63360 = (function (){var G__63589 = ctx;
var G__63590 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63589,G__63590) : sci.impl.interpreter.interpret.call(null,G__63589,G__63590));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63361 = (function (){var G__63591 = ctx;
var G__63592 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63591,G__63592) : sci.impl.interpreter.interpret.call(null,G__63591,G__63592));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63362 = (function (){var G__63593 = ctx;
var G__63594 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63593,G__63594) : sci.impl.interpreter.interpret.call(null,G__63593,G__63594));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63363 = (function (){var G__63595 = ctx;
var G__63596 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63595,G__63596) : sci.impl.interpreter.interpret.call(null,G__63595,G__63596));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63364 = (function (){var G__63597 = ctx;
var G__63598 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63597,G__63598) : sci.impl.interpreter.interpret.call(null,G__63597,G__63598));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63365 = (function (){var G__63599 = ctx;
var G__63600 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63599,G__63600) : sci.impl.interpreter.interpret.call(null,G__63599,G__63600));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63366 = (function (){var G__63601 = ctx;
var G__63602 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63601,G__63602) : sci.impl.interpreter.interpret.call(null,G__63601,G__63602));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg63358,arg63359,arg63360,arg63361,arg63362,arg63363,arg63364,arg63365,arg63366) : f.call(null,arg63358,arg63359,arg63360,arg63361,arg63362,arg63363,arg63364,arg63365,arg63366));

break;
case (10):
var arg63367 = (function (){var G__63603 = ctx;
var G__63604 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63603,G__63604) : sci.impl.interpreter.interpret.call(null,G__63603,G__63604));
})();
var args__$1 = cljs.core.rest(args);
var arg63368 = (function (){var G__63605 = ctx;
var G__63606 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63605,G__63606) : sci.impl.interpreter.interpret.call(null,G__63605,G__63606));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63369 = (function (){var G__63607 = ctx;
var G__63608 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63607,G__63608) : sci.impl.interpreter.interpret.call(null,G__63607,G__63608));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63370 = (function (){var G__63609 = ctx;
var G__63610 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63609,G__63610) : sci.impl.interpreter.interpret.call(null,G__63609,G__63610));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63371 = (function (){var G__63611 = ctx;
var G__63612 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63611,G__63612) : sci.impl.interpreter.interpret.call(null,G__63611,G__63612));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63372 = (function (){var G__63613 = ctx;
var G__63614 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63613,G__63614) : sci.impl.interpreter.interpret.call(null,G__63613,G__63614));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63373 = (function (){var G__63615 = ctx;
var G__63616 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63615,G__63616) : sci.impl.interpreter.interpret.call(null,G__63615,G__63616));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63374 = (function (){var G__63617 = ctx;
var G__63618 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63617,G__63618) : sci.impl.interpreter.interpret.call(null,G__63617,G__63618));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63375 = (function (){var G__63619 = ctx;
var G__63620 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63619,G__63620) : sci.impl.interpreter.interpret.call(null,G__63619,G__63620));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63376 = (function (){var G__63621 = ctx;
var G__63622 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63621,G__63622) : sci.impl.interpreter.interpret.call(null,G__63621,G__63622));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg63367,arg63368,arg63369,arg63370,arg63371,arg63372,arg63373,arg63374,arg63375,arg63376) : f.call(null,arg63367,arg63368,arg63369,arg63370,arg63371,arg63372,arg63373,arg63374,arg63375,arg63376));

break;
case (11):
var arg63377 = (function (){var G__63623 = ctx;
var G__63624 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63623,G__63624) : sci.impl.interpreter.interpret.call(null,G__63623,G__63624));
})();
var args__$1 = cljs.core.rest(args);
var arg63378 = (function (){var G__63625 = ctx;
var G__63626 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63625,G__63626) : sci.impl.interpreter.interpret.call(null,G__63625,G__63626));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63379 = (function (){var G__63627 = ctx;
var G__63628 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63627,G__63628) : sci.impl.interpreter.interpret.call(null,G__63627,G__63628));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63380 = (function (){var G__63629 = ctx;
var G__63630 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63629,G__63630) : sci.impl.interpreter.interpret.call(null,G__63629,G__63630));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63381 = (function (){var G__63631 = ctx;
var G__63632 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63631,G__63632) : sci.impl.interpreter.interpret.call(null,G__63631,G__63632));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63382 = (function (){var G__63633 = ctx;
var G__63634 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63633,G__63634) : sci.impl.interpreter.interpret.call(null,G__63633,G__63634));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63383 = (function (){var G__63635 = ctx;
var G__63636 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63635,G__63636) : sci.impl.interpreter.interpret.call(null,G__63635,G__63636));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63384 = (function (){var G__63637 = ctx;
var G__63638 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63637,G__63638) : sci.impl.interpreter.interpret.call(null,G__63637,G__63638));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63385 = (function (){var G__63639 = ctx;
var G__63640 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63639,G__63640) : sci.impl.interpreter.interpret.call(null,G__63639,G__63640));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63386 = (function (){var G__63641 = ctx;
var G__63642 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63641,G__63642) : sci.impl.interpreter.interpret.call(null,G__63641,G__63642));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63387 = (function (){var G__63643 = ctx;
var G__63644 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63643,G__63644) : sci.impl.interpreter.interpret.call(null,G__63643,G__63644));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg63377,arg63378,arg63379,arg63380,arg63381,arg63382,arg63383,arg63384,arg63385,arg63386,arg63387) : f.call(null,arg63377,arg63378,arg63379,arg63380,arg63381,arg63382,arg63383,arg63384,arg63385,arg63386,arg63387));

break;
case (12):
var arg63388 = (function (){var G__63645 = ctx;
var G__63646 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63645,G__63646) : sci.impl.interpreter.interpret.call(null,G__63645,G__63646));
})();
var args__$1 = cljs.core.rest(args);
var arg63389 = (function (){var G__63647 = ctx;
var G__63648 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63647,G__63648) : sci.impl.interpreter.interpret.call(null,G__63647,G__63648));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63390 = (function (){var G__63649 = ctx;
var G__63650 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63649,G__63650) : sci.impl.interpreter.interpret.call(null,G__63649,G__63650));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63391 = (function (){var G__63651 = ctx;
var G__63652 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63651,G__63652) : sci.impl.interpreter.interpret.call(null,G__63651,G__63652));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63392 = (function (){var G__63653 = ctx;
var G__63654 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63653,G__63654) : sci.impl.interpreter.interpret.call(null,G__63653,G__63654));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63393 = (function (){var G__63655 = ctx;
var G__63656 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63655,G__63656) : sci.impl.interpreter.interpret.call(null,G__63655,G__63656));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63394 = (function (){var G__63657 = ctx;
var G__63658 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63657,G__63658) : sci.impl.interpreter.interpret.call(null,G__63657,G__63658));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63395 = (function (){var G__63659 = ctx;
var G__63660 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63659,G__63660) : sci.impl.interpreter.interpret.call(null,G__63659,G__63660));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63396 = (function (){var G__63661 = ctx;
var G__63662 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63661,G__63662) : sci.impl.interpreter.interpret.call(null,G__63661,G__63662));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63397 = (function (){var G__63663 = ctx;
var G__63664 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63663,G__63664) : sci.impl.interpreter.interpret.call(null,G__63663,G__63664));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63398 = (function (){var G__63665 = ctx;
var G__63666 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63665,G__63666) : sci.impl.interpreter.interpret.call(null,G__63665,G__63666));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63399 = (function (){var G__63667 = ctx;
var G__63668 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63667,G__63668) : sci.impl.interpreter.interpret.call(null,G__63667,G__63668));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg63388,arg63389,arg63390,arg63391,arg63392,arg63393,arg63394,arg63395,arg63396,arg63397,arg63398,arg63399) : f.call(null,arg63388,arg63389,arg63390,arg63391,arg63392,arg63393,arg63394,arg63395,arg63396,arg63397,arg63398,arg63399));

break;
case (13):
var arg63400 = (function (){var G__63669 = ctx;
var G__63670 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63669,G__63670) : sci.impl.interpreter.interpret.call(null,G__63669,G__63670));
})();
var args__$1 = cljs.core.rest(args);
var arg63401 = (function (){var G__63671 = ctx;
var G__63672 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63671,G__63672) : sci.impl.interpreter.interpret.call(null,G__63671,G__63672));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63402 = (function (){var G__63673 = ctx;
var G__63674 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63673,G__63674) : sci.impl.interpreter.interpret.call(null,G__63673,G__63674));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63403 = (function (){var G__63675 = ctx;
var G__63676 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63675,G__63676) : sci.impl.interpreter.interpret.call(null,G__63675,G__63676));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63404 = (function (){var G__63677 = ctx;
var G__63678 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63677,G__63678) : sci.impl.interpreter.interpret.call(null,G__63677,G__63678));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63405 = (function (){var G__63679 = ctx;
var G__63680 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63679,G__63680) : sci.impl.interpreter.interpret.call(null,G__63679,G__63680));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63406 = (function (){var G__63681 = ctx;
var G__63682 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63681,G__63682) : sci.impl.interpreter.interpret.call(null,G__63681,G__63682));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63407 = (function (){var G__63683 = ctx;
var G__63684 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63683,G__63684) : sci.impl.interpreter.interpret.call(null,G__63683,G__63684));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63408 = (function (){var G__63685 = ctx;
var G__63686 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63685,G__63686) : sci.impl.interpreter.interpret.call(null,G__63685,G__63686));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63409 = (function (){var G__63687 = ctx;
var G__63688 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63687,G__63688) : sci.impl.interpreter.interpret.call(null,G__63687,G__63688));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63410 = (function (){var G__63689 = ctx;
var G__63690 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63689,G__63690) : sci.impl.interpreter.interpret.call(null,G__63689,G__63690));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63411 = (function (){var G__63691 = ctx;
var G__63692 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63691,G__63692) : sci.impl.interpreter.interpret.call(null,G__63691,G__63692));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63412 = (function (){var G__63693 = ctx;
var G__63694 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63693,G__63694) : sci.impl.interpreter.interpret.call(null,G__63693,G__63694));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg63400,arg63401,arg63402,arg63403,arg63404,arg63405,arg63406,arg63407,arg63408,arg63409,arg63410,arg63411,arg63412) : f.call(null,arg63400,arg63401,arg63402,arg63403,arg63404,arg63405,arg63406,arg63407,arg63408,arg63409,arg63410,arg63411,arg63412));

break;
case (14):
var arg63413 = (function (){var G__63695 = ctx;
var G__63696 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63695,G__63696) : sci.impl.interpreter.interpret.call(null,G__63695,G__63696));
})();
var args__$1 = cljs.core.rest(args);
var arg63414 = (function (){var G__63697 = ctx;
var G__63698 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63697,G__63698) : sci.impl.interpreter.interpret.call(null,G__63697,G__63698));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63415 = (function (){var G__63699 = ctx;
var G__63700 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63699,G__63700) : sci.impl.interpreter.interpret.call(null,G__63699,G__63700));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63416 = (function (){var G__63701 = ctx;
var G__63702 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63701,G__63702) : sci.impl.interpreter.interpret.call(null,G__63701,G__63702));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63417 = (function (){var G__63703 = ctx;
var G__63704 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63703,G__63704) : sci.impl.interpreter.interpret.call(null,G__63703,G__63704));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63418 = (function (){var G__63705 = ctx;
var G__63706 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63705,G__63706) : sci.impl.interpreter.interpret.call(null,G__63705,G__63706));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63419 = (function (){var G__63707 = ctx;
var G__63708 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63707,G__63708) : sci.impl.interpreter.interpret.call(null,G__63707,G__63708));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63420 = (function (){var G__63709 = ctx;
var G__63710 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63709,G__63710) : sci.impl.interpreter.interpret.call(null,G__63709,G__63710));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63421 = (function (){var G__63711 = ctx;
var G__63712 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63711,G__63712) : sci.impl.interpreter.interpret.call(null,G__63711,G__63712));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63422 = (function (){var G__63713 = ctx;
var G__63714 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63713,G__63714) : sci.impl.interpreter.interpret.call(null,G__63713,G__63714));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63423 = (function (){var G__63715 = ctx;
var G__63716 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63715,G__63716) : sci.impl.interpreter.interpret.call(null,G__63715,G__63716));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63424 = (function (){var G__63717 = ctx;
var G__63718 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63717,G__63718) : sci.impl.interpreter.interpret.call(null,G__63717,G__63718));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63425 = (function (){var G__63719 = ctx;
var G__63720 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63719,G__63720) : sci.impl.interpreter.interpret.call(null,G__63719,G__63720));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63426 = (function (){var G__63721 = ctx;
var G__63722 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63721,G__63722) : sci.impl.interpreter.interpret.call(null,G__63721,G__63722));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg63413,arg63414,arg63415,arg63416,arg63417,arg63418,arg63419,arg63420,arg63421,arg63422,arg63423,arg63424,arg63425,arg63426) : f.call(null,arg63413,arg63414,arg63415,arg63416,arg63417,arg63418,arg63419,arg63420,arg63421,arg63422,arg63423,arg63424,arg63425,arg63426));

break;
case (15):
var arg63427 = (function (){var G__63723 = ctx;
var G__63724 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63723,G__63724) : sci.impl.interpreter.interpret.call(null,G__63723,G__63724));
})();
var args__$1 = cljs.core.rest(args);
var arg63428 = (function (){var G__63725 = ctx;
var G__63726 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63725,G__63726) : sci.impl.interpreter.interpret.call(null,G__63725,G__63726));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63429 = (function (){var G__63727 = ctx;
var G__63728 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63727,G__63728) : sci.impl.interpreter.interpret.call(null,G__63727,G__63728));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63430 = (function (){var G__63729 = ctx;
var G__63730 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63729,G__63730) : sci.impl.interpreter.interpret.call(null,G__63729,G__63730));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63431 = (function (){var G__63731 = ctx;
var G__63732 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63731,G__63732) : sci.impl.interpreter.interpret.call(null,G__63731,G__63732));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63432 = (function (){var G__63733 = ctx;
var G__63734 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63733,G__63734) : sci.impl.interpreter.interpret.call(null,G__63733,G__63734));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63433 = (function (){var G__63735 = ctx;
var G__63736 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63735,G__63736) : sci.impl.interpreter.interpret.call(null,G__63735,G__63736));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63434 = (function (){var G__63737 = ctx;
var G__63738 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63737,G__63738) : sci.impl.interpreter.interpret.call(null,G__63737,G__63738));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63435 = (function (){var G__63739 = ctx;
var G__63740 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63739,G__63740) : sci.impl.interpreter.interpret.call(null,G__63739,G__63740));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63436 = (function (){var G__63741 = ctx;
var G__63742 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63741,G__63742) : sci.impl.interpreter.interpret.call(null,G__63741,G__63742));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63437 = (function (){var G__63743 = ctx;
var G__63744 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63743,G__63744) : sci.impl.interpreter.interpret.call(null,G__63743,G__63744));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63438 = (function (){var G__63745 = ctx;
var G__63746 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63745,G__63746) : sci.impl.interpreter.interpret.call(null,G__63745,G__63746));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63439 = (function (){var G__63747 = ctx;
var G__63748 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63747,G__63748) : sci.impl.interpreter.interpret.call(null,G__63747,G__63748));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63440 = (function (){var G__63749 = ctx;
var G__63750 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63749,G__63750) : sci.impl.interpreter.interpret.call(null,G__63749,G__63750));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63441 = (function (){var G__63751 = ctx;
var G__63752 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63751,G__63752) : sci.impl.interpreter.interpret.call(null,G__63751,G__63752));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg63427,arg63428,arg63429,arg63430,arg63431,arg63432,arg63433,arg63434,arg63435,arg63436,arg63437,arg63438,arg63439,arg63440,arg63441) : f.call(null,arg63427,arg63428,arg63429,arg63430,arg63431,arg63432,arg63433,arg63434,arg63435,arg63436,arg63437,arg63438,arg63439,arg63440,arg63441));

break;
case (16):
var arg63442 = (function (){var G__63753 = ctx;
var G__63754 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63753,G__63754) : sci.impl.interpreter.interpret.call(null,G__63753,G__63754));
})();
var args__$1 = cljs.core.rest(args);
var arg63443 = (function (){var G__63755 = ctx;
var G__63756 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63755,G__63756) : sci.impl.interpreter.interpret.call(null,G__63755,G__63756));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63444 = (function (){var G__63757 = ctx;
var G__63758 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63757,G__63758) : sci.impl.interpreter.interpret.call(null,G__63757,G__63758));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63445 = (function (){var G__63759 = ctx;
var G__63760 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63759,G__63760) : sci.impl.interpreter.interpret.call(null,G__63759,G__63760));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63446 = (function (){var G__63761 = ctx;
var G__63762 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63761,G__63762) : sci.impl.interpreter.interpret.call(null,G__63761,G__63762));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63447 = (function (){var G__63763 = ctx;
var G__63764 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63763,G__63764) : sci.impl.interpreter.interpret.call(null,G__63763,G__63764));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63448 = (function (){var G__63765 = ctx;
var G__63766 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63765,G__63766) : sci.impl.interpreter.interpret.call(null,G__63765,G__63766));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63449 = (function (){var G__63767 = ctx;
var G__63768 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63767,G__63768) : sci.impl.interpreter.interpret.call(null,G__63767,G__63768));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63450 = (function (){var G__63769 = ctx;
var G__63770 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63769,G__63770) : sci.impl.interpreter.interpret.call(null,G__63769,G__63770));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63451 = (function (){var G__63771 = ctx;
var G__63772 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63771,G__63772) : sci.impl.interpreter.interpret.call(null,G__63771,G__63772));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63452 = (function (){var G__63773 = ctx;
var G__63774 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63773,G__63774) : sci.impl.interpreter.interpret.call(null,G__63773,G__63774));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63453 = (function (){var G__63775 = ctx;
var G__63776 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63775,G__63776) : sci.impl.interpreter.interpret.call(null,G__63775,G__63776));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63454 = (function (){var G__63777 = ctx;
var G__63778 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63777,G__63778) : sci.impl.interpreter.interpret.call(null,G__63777,G__63778));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63455 = (function (){var G__63779 = ctx;
var G__63780 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63779,G__63780) : sci.impl.interpreter.interpret.call(null,G__63779,G__63780));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63456 = (function (){var G__63781 = ctx;
var G__63782 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63781,G__63782) : sci.impl.interpreter.interpret.call(null,G__63781,G__63782));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63457 = (function (){var G__63783 = ctx;
var G__63784 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63783,G__63784) : sci.impl.interpreter.interpret.call(null,G__63783,G__63784));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg63442,arg63443,arg63444,arg63445,arg63446,arg63447,arg63448,arg63449,arg63450,arg63451,arg63452,arg63453,arg63454,arg63455,arg63456,arg63457) : f.call(null,arg63442,arg63443,arg63444,arg63445,arg63446,arg63447,arg63448,arg63449,arg63450,arg63451,arg63452,arg63453,arg63454,arg63455,arg63456,arg63457));

break;
case (17):
var arg63458 = (function (){var G__63785 = ctx;
var G__63786 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63785,G__63786) : sci.impl.interpreter.interpret.call(null,G__63785,G__63786));
})();
var args__$1 = cljs.core.rest(args);
var arg63459 = (function (){var G__63787 = ctx;
var G__63788 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63787,G__63788) : sci.impl.interpreter.interpret.call(null,G__63787,G__63788));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63460 = (function (){var G__63789 = ctx;
var G__63790 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63789,G__63790) : sci.impl.interpreter.interpret.call(null,G__63789,G__63790));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63461 = (function (){var G__63791 = ctx;
var G__63792 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63791,G__63792) : sci.impl.interpreter.interpret.call(null,G__63791,G__63792));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63462 = (function (){var G__63793 = ctx;
var G__63794 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63793,G__63794) : sci.impl.interpreter.interpret.call(null,G__63793,G__63794));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63463 = (function (){var G__63795 = ctx;
var G__63796 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63795,G__63796) : sci.impl.interpreter.interpret.call(null,G__63795,G__63796));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63464 = (function (){var G__63797 = ctx;
var G__63798 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63797,G__63798) : sci.impl.interpreter.interpret.call(null,G__63797,G__63798));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63465 = (function (){var G__63799 = ctx;
var G__63800 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63799,G__63800) : sci.impl.interpreter.interpret.call(null,G__63799,G__63800));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63466 = (function (){var G__63801 = ctx;
var G__63802 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63801,G__63802) : sci.impl.interpreter.interpret.call(null,G__63801,G__63802));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63467 = (function (){var G__63803 = ctx;
var G__63804 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63803,G__63804) : sci.impl.interpreter.interpret.call(null,G__63803,G__63804));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63468 = (function (){var G__63805 = ctx;
var G__63806 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63805,G__63806) : sci.impl.interpreter.interpret.call(null,G__63805,G__63806));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63469 = (function (){var G__63807 = ctx;
var G__63808 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63807,G__63808) : sci.impl.interpreter.interpret.call(null,G__63807,G__63808));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63470 = (function (){var G__63809 = ctx;
var G__63810 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63809,G__63810) : sci.impl.interpreter.interpret.call(null,G__63809,G__63810));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63471 = (function (){var G__63811 = ctx;
var G__63812 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63811,G__63812) : sci.impl.interpreter.interpret.call(null,G__63811,G__63812));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63472 = (function (){var G__63813 = ctx;
var G__63814 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63813,G__63814) : sci.impl.interpreter.interpret.call(null,G__63813,G__63814));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63473 = (function (){var G__63815 = ctx;
var G__63816 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63815,G__63816) : sci.impl.interpreter.interpret.call(null,G__63815,G__63816));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63474 = (function (){var G__63817 = ctx;
var G__63818 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63817,G__63818) : sci.impl.interpreter.interpret.call(null,G__63817,G__63818));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg63458,arg63459,arg63460,arg63461,arg63462,arg63463,arg63464,arg63465,arg63466,arg63467,arg63468,arg63469,arg63470,arg63471,arg63472,arg63473,arg63474) : f.call(null,arg63458,arg63459,arg63460,arg63461,arg63462,arg63463,arg63464,arg63465,arg63466,arg63467,arg63468,arg63469,arg63470,arg63471,arg63472,arg63473,arg63474));

break;
case (18):
var arg63475 = (function (){var G__63819 = ctx;
var G__63820 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63819,G__63820) : sci.impl.interpreter.interpret.call(null,G__63819,G__63820));
})();
var args__$1 = cljs.core.rest(args);
var arg63476 = (function (){var G__63821 = ctx;
var G__63822 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63821,G__63822) : sci.impl.interpreter.interpret.call(null,G__63821,G__63822));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63477 = (function (){var G__63823 = ctx;
var G__63824 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63823,G__63824) : sci.impl.interpreter.interpret.call(null,G__63823,G__63824));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63478 = (function (){var G__63825 = ctx;
var G__63826 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63825,G__63826) : sci.impl.interpreter.interpret.call(null,G__63825,G__63826));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63479 = (function (){var G__63827 = ctx;
var G__63828 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63827,G__63828) : sci.impl.interpreter.interpret.call(null,G__63827,G__63828));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63480 = (function (){var G__63829 = ctx;
var G__63830 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63829,G__63830) : sci.impl.interpreter.interpret.call(null,G__63829,G__63830));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63481 = (function (){var G__63831 = ctx;
var G__63832 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63831,G__63832) : sci.impl.interpreter.interpret.call(null,G__63831,G__63832));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63482 = (function (){var G__63833 = ctx;
var G__63834 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63833,G__63834) : sci.impl.interpreter.interpret.call(null,G__63833,G__63834));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63483 = (function (){var G__63835 = ctx;
var G__63836 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63835,G__63836) : sci.impl.interpreter.interpret.call(null,G__63835,G__63836));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63484 = (function (){var G__63837 = ctx;
var G__63838 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63837,G__63838) : sci.impl.interpreter.interpret.call(null,G__63837,G__63838));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63485 = (function (){var G__63839 = ctx;
var G__63840 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63839,G__63840) : sci.impl.interpreter.interpret.call(null,G__63839,G__63840));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63486 = (function (){var G__63841 = ctx;
var G__63842 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63841,G__63842) : sci.impl.interpreter.interpret.call(null,G__63841,G__63842));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63487 = (function (){var G__63843 = ctx;
var G__63844 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63843,G__63844) : sci.impl.interpreter.interpret.call(null,G__63843,G__63844));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63488 = (function (){var G__63845 = ctx;
var G__63846 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63845,G__63846) : sci.impl.interpreter.interpret.call(null,G__63845,G__63846));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63489 = (function (){var G__63847 = ctx;
var G__63848 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63847,G__63848) : sci.impl.interpreter.interpret.call(null,G__63847,G__63848));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63490 = (function (){var G__63849 = ctx;
var G__63850 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63849,G__63850) : sci.impl.interpreter.interpret.call(null,G__63849,G__63850));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63491 = (function (){var G__63851 = ctx;
var G__63852 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63851,G__63852) : sci.impl.interpreter.interpret.call(null,G__63851,G__63852));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63492 = (function (){var G__63853 = ctx;
var G__63854 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63853,G__63854) : sci.impl.interpreter.interpret.call(null,G__63853,G__63854));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg63475,arg63476,arg63477,arg63478,arg63479,arg63480,arg63481,arg63482,arg63483,arg63484,arg63485,arg63486,arg63487,arg63488,arg63489,arg63490,arg63491,arg63492) : f.call(null,arg63475,arg63476,arg63477,arg63478,arg63479,arg63480,arg63481,arg63482,arg63483,arg63484,arg63485,arg63486,arg63487,arg63488,arg63489,arg63490,arg63491,arg63492));

break;
case (19):
var arg63493 = (function (){var G__63855 = ctx;
var G__63856 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63855,G__63856) : sci.impl.interpreter.interpret.call(null,G__63855,G__63856));
})();
var args__$1 = cljs.core.rest(args);
var arg63494 = (function (){var G__63857 = ctx;
var G__63858 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63857,G__63858) : sci.impl.interpreter.interpret.call(null,G__63857,G__63858));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63495 = (function (){var G__63859 = ctx;
var G__63860 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63859,G__63860) : sci.impl.interpreter.interpret.call(null,G__63859,G__63860));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63496 = (function (){var G__63861 = ctx;
var G__63862 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63861,G__63862) : sci.impl.interpreter.interpret.call(null,G__63861,G__63862));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63497 = (function (){var G__63863 = ctx;
var G__63864 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63863,G__63864) : sci.impl.interpreter.interpret.call(null,G__63863,G__63864));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63498 = (function (){var G__63865 = ctx;
var G__63866 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63865,G__63866) : sci.impl.interpreter.interpret.call(null,G__63865,G__63866));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63499 = (function (){var G__63867 = ctx;
var G__63868 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63867,G__63868) : sci.impl.interpreter.interpret.call(null,G__63867,G__63868));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63500 = (function (){var G__63869 = ctx;
var G__63870 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63869,G__63870) : sci.impl.interpreter.interpret.call(null,G__63869,G__63870));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63501 = (function (){var G__63871 = ctx;
var G__63872 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63871,G__63872) : sci.impl.interpreter.interpret.call(null,G__63871,G__63872));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63502 = (function (){var G__63873 = ctx;
var G__63874 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63873,G__63874) : sci.impl.interpreter.interpret.call(null,G__63873,G__63874));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63503 = (function (){var G__63875 = ctx;
var G__63876 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63875,G__63876) : sci.impl.interpreter.interpret.call(null,G__63875,G__63876));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63504 = (function (){var G__63877 = ctx;
var G__63878 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63877,G__63878) : sci.impl.interpreter.interpret.call(null,G__63877,G__63878));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63505 = (function (){var G__63879 = ctx;
var G__63880 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63879,G__63880) : sci.impl.interpreter.interpret.call(null,G__63879,G__63880));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63506 = (function (){var G__63881 = ctx;
var G__63882 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63881,G__63882) : sci.impl.interpreter.interpret.call(null,G__63881,G__63882));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63507 = (function (){var G__63883 = ctx;
var G__63884 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63883,G__63884) : sci.impl.interpreter.interpret.call(null,G__63883,G__63884));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63508 = (function (){var G__63885 = ctx;
var G__63886 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63885,G__63886) : sci.impl.interpreter.interpret.call(null,G__63885,G__63886));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63509 = (function (){var G__63887 = ctx;
var G__63888 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63887,G__63888) : sci.impl.interpreter.interpret.call(null,G__63887,G__63888));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63510 = (function (){var G__63889 = ctx;
var G__63890 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63889,G__63890) : sci.impl.interpreter.interpret.call(null,G__63889,G__63890));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg63511 = (function (){var G__63891 = ctx;
var G__63892 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63891,G__63892) : sci.impl.interpreter.interpret.call(null,G__63891,G__63892));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg63493,arg63494,arg63495,arg63496,arg63497,arg63498,arg63499,arg63500,arg63501,arg63502,arg63503,arg63504,arg63505,arg63506,arg63507,arg63508,arg63509,arg63510,arg63511) : f.call(null,arg63493,arg63494,arg63495,arg63496,arg63497,arg63498,arg63499,arg63500,arg63501,arg63502,arg63503,arg63504,arg63505,arg63506,arg63507,arg63508,arg63509,arg63510,arg63511));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__63893 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__63893)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__63893)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__63893)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__63893)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__63893)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__63893)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__63894 = ctx;
var G__63895 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63894,G__63895) : sci.impl.interpreter.interpret.call(null,G__63894,G__63895));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__63893)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__63893)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__63893)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__63893)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__63893)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__63893)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__63893)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__63893)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__63893)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__63896 = ctx;
var G__63897 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63896,G__63897) : sci.impl.interpreter.interpret.call(null,G__63896,G__63897));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__63893)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__63893)){
return (new cljs.core.LazySeq(null,(function (){var G__63898 = ctx;
var G__63899 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63898,G__63899) : sci.impl.interpreter.interpret.call(null,G__63898,G__63899));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__63893)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__63893)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__63893)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__63893)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63893)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e63900){if((e63900 instanceof Error)){
var e = e63900;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e63900;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__63907 = op;
var G__63907__$1 = (((G__63907 instanceof cljs.core.Keyword))?G__63907.fqn:null);
switch (G__63907__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63904_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63904_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63904_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63905_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63905_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63905_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63906_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63906_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63906_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__63954 = cljs.core.rest(exprs);
var G__63955 = (function (){var G__63910 = ctx;
var G__63911 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__63910,G__63911) : sci.impl.interpreter.eval_form.call(null,G__63910,G__63911));
})();
exprs = G__63954;
ret = G__63955;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__63956 = ret__$1;
ret = G__63956;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__63913 = arguments.length;
switch (G__63913) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map

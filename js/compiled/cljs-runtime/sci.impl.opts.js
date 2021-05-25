goog.provide('sci.impl.opts');
sci.impl.opts.init_env_BANG_ = (function sci$impl$opts$init_env_BANG_(env,bindings,aliases,namespaces,imports){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var namespaces__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.namespaces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"obj","obj",981763962),sci.impl.vars.user_ns)], null),namespaces,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1)], 0));
var aliases__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.aliases,aliases,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"aliases","aliases",1346874714)], null))], 0));
var namespaces__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(namespaces__$1,new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.assoc,new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases__$1),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.assoc,new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null),sci.impl.vars.__GT_SciVar(cljs.core.make_hierarchy(),new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null),null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"imports","imports",-1249933394),imports], 0));
}));
});
sci.impl.opts.presets = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deny","deny",1589338523),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"trampoline","trampoline",-71368916,null),new cljs.core.Symbol(null,"resolve","resolve",56086045,null)], null),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),(100)], null)], null);
sci.impl.opts.process_permissions = (function sci$impl$opts$process_permissions(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63093 = arguments.length;
var i__4737__auto___63094 = (0);
while(true){
if((i__4737__auto___63094 < len__4736__auto___63093)){
args__4742__auto__.push((arguments[i__4737__auto___63094]));

var G__63095 = (i__4737__auto___63094 + (1));
i__4737__auto___63094 = G__63095;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic = (function (permissions){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.strip_core_ns)),permissions));
}));

(sci.impl.opts.process_permissions.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.opts.process_permissions.cljs$lang$applyTo = (function (seq63076){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63076));
}));

sci.impl.opts.default_classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"Error","Error",-1692662047,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),Error,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function() {
var G__63097 = null;
var G__63097__1 = (function (msg){
return (new Error(msg));
});
var G__63097__2 = (function (msg,filename){
return (new Error(msg,filename));
});
var G__63097__3 = (function (msg,filename,line){
return (new Error(msg,filename,line));
});
G__63097 = function(msg,filename,line){
switch(arguments.length){
case 1:
return G__63097__1.call(this,msg);
case 2:
return G__63097__2.call(this,msg,filename);
case 3:
return G__63097__3.call(this,msg,filename,line);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63097.cljs$core$IFn$_invoke$arity$1 = G__63097__1;
G__63097.cljs$core$IFn$_invoke$arity$2 = G__63097__2;
G__63097.cljs$core$IFn$_invoke$arity$3 = G__63097__3;
return G__63097;
})()
], null),new cljs.core.Symbol(null,"cljs.core.Delay","cljs.core.Delay",-1917476777,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.Delay,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (p1__63077_SHARP_){
return (new cljs.core.Delay(p1__63077_SHARP_,null));
})], null),new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),goog.string.StringBuffer,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (p1__63078_SHARP_){
return (new goog.string.StringBuffer(p1__63078_SHARP_));
})], null)], null);
sci.impl.opts.default_imports = cljs.core.PersistentArrayMap.EMPTY;
sci.impl.opts.normalize_classes = (function sci$impl$opts$normalize_classes(classes){
var class__GT_opts = cljs.core.transient$(cljs.core.select_keys(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow","allow",-1857325745)], null)));
var kvs = classes;
while(true){
var temp__5733__auto__ = cljs.core.first(kvs);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__63082 = temp__5733__auto__;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63082,(0),null);
var class_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63082,(1),null);
var G__63101 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(class__GT_opts,sym,((cljs.core.map_QMARK_(class_opts))?class_opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_opts], null)));
var G__63102 = cljs.core.rest(kvs);
class__GT_opts = G__63101;
kvs = G__63102;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"public-class","public-class",1127293019),new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),cljs.core.persistent_BANG_(class__GT_opts)], null);
}
break;
}
});
/**
 * Initializes options
 */
sci.impl.opts.init = (function sci$impl$opts$init(p__63087){
var map__63088 = p__63087;
var map__63088__$1 = (((((!((map__63088 == null))))?(((((map__63088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63088):map__63088);
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"readers","readers",-2118263030));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var preset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"preset","preset",777387345));
var realize_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
var load_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334));
var dry_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var preset__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.opts.presets,preset);
var env__$1 = (function (){var or__4126__auto__ = env;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var imports__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.opts.default_imports,imports], 0));
var bindings__$1 = bindings;
var _ = sci.impl.opts.init_env_BANG_(env__$1,bindings__$1,aliases,namespaces,imports__$1);
var ctx = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword("sci.impl.opts","ctx","sci.impl.opts/ctx",-367410399),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334),new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647),new cljs.core.Keyword(null,"deny","deny",1589338523)],[features,true,cljs.core.PersistentArrayMap.EMPTY,readers,env__$1,sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(preset__$1),allow], 0)),(function (){var or__4126__auto__ = realize_max;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543).cljs$core$IFn$_invoke$arity$1(preset__$1);
}
})(),load_fn,dry_run,sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deny","deny",1589338523).cljs$core$IFn$_invoke$arity$1(preset__$1),deny], 0))]),sci.impl.opts.normalize_classes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.opts.default_classes,classes], 0)))], 0));
return ctx;
});

//# sourceMappingURL=sci.impl.opts.js.map

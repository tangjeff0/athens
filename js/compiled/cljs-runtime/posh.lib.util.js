goog.provide('posh.lib.util');
posh.lib.util.exception = (function posh$lib$util$exception(msg){
throw (new Error(msg));
});
posh.lib.util.t_for_datoms = (function posh$lib$util$t_for_datoms(q_fn,db,datoms){
var G__34088 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
var G__34089 = db;
var G__34090 = datoms;
return (q_fn.cljs$core$IFn$_invoke$arity$3 ? q_fn.cljs$core$IFn$_invoke$arity$3(G__34088,G__34089,G__34090) : q_fn.call(null,G__34088,G__34089,G__34090));
});

//# sourceMappingURL=posh.lib.util.js.map

goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__35588 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35588) : stop_at_QMARK_.call(null,G__35588));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__35589 = stop_at_QMARK_;
var G__35590 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__35589,G__35590) : posh.lib.q_analyze.take_until.call(null,G__35589,G__35590));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__35592 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35592) : rest_at_QMARK_.call(null,G__35592));
}
})())){
return ls;
} else {
var G__35975 = rest_at_QMARK_;
var G__35976 = cljs.core.rest(ls);
rest_at_QMARK_ = G__35975;
ls = G__35976;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__35593 = split_at_QMARK_;
var G__35594 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__35593,G__35594) : posh.lib.q_analyze.split_list_at.call(null,G__35593,G__35594));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__35595 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__35595) : posh.lib.q_analyze.get_all_vars.call(null,G__35595));
})(),(function (){var G__35596 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__35596) : posh.lib.q_analyze.get_all_vars.call(null,G__35596));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__35597 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__35597) : posh.lib.q_analyze.get_all_vars.call(null,G__35597));
})(),cljs.core.first(query));
} else {
var G__35598 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__35598) : posh.lib.q_analyze.get_all_vars.call(null,G__35598));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__35600 = cljs.core.rest(eav);
var G__35601 = (n - (1));
var G__35602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__35603 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__35600,G__35601,G__35602,G__35603) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__35600,G__35601,G__35602,G__35603));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__35604 = cljs.core.rest(eav);
var G__35605 = (n - (1));
var G__35606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__35607 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__35604,G__35605,G__35606,G__35607) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__35604,G__35605,G__35606,G__35607));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__35608 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__35608) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__35608));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__35610 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__35610) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__35610));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__35614 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35614) : posh.lib.q_analyze.get_eavs.call(null,G__35614));
})(),(function (){var G__35615 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35615) : posh.lib.q_analyze.get_eavs.call(null,G__35615));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__35617 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35617) : posh.lib.q_analyze.get_eavs.call(null,G__35617));
})(),(function (){var G__35619 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35619) : posh.lib.q_analyze.get_eavs.call(null,G__35619));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__35622 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35622) : posh.lib.q_analyze.get_eavs.call(null,G__35622));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_35628 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_35628)) && ((cljs.core.count(ocr_35628) === 2)))){
try{var ocr_35628_0__35638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628,(0));
if(((cljs.core.vector_QMARK_(ocr_35628_0__35638)) && ((cljs.core.count(ocr_35628_0__35638) === 5)))){
try{var ocr_35628_0__35638_0__35640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628_0__35638,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35628_0__35638_0__35640,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628_0__35638,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628_0__35638,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628_0__35638,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35628,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__35653 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35653) : posh.lib.q_analyze.get_eavs.call(null,G__35653));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e35652){if((e35652 instanceof Error)){
var e__34685__auto__ = e35652;
if((e__34685__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto__;
}
} else {
throw e35652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35650){if((e35650 instanceof Error)){
var e__34685__auto__ = e35650;
if((e__34685__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto__;
}
} else {
throw e35650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35647){if((e35647 instanceof Error)){
var e__34685__auto__ = e35647;
if((e__34685__auto__ === cljs.core.match.backtrack)){
var G__35648 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35648) : posh.lib.q_analyze.get_eavs.call(null,G__35648));
} else {
throw e__34685__auto__;
}
} else {
throw e35647;

}
}} else {
var G__35654 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__35654) : posh.lib.q_analyze.get_eavs.call(null,G__35654));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__35655){
var vec__35656 = p__35655;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35659_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__35659_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__35659_SHARP_);
} else {
return p1__35659_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__35660 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__35660) : posh.lib.q_analyze.count_qvars.call(null,G__35660));
})(),(function (){var G__35661 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__35661) : posh.lib.q_analyze.count_qvars.call(null,G__35661));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__35662 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__35662) : posh.lib.q_analyze.count_qvars.call(null,G__35662));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__35663(s__35664){
return (new cljs.core.LazySeq(null,(function (){
var s__35664__$1 = s__35664;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35664__$1);
if(temp__5735__auto__){
var s__35664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35664__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35664__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35666 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35665 = (0);
while(true){
if((i__35665 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__35665);
cljs.core.chunk_append(b__35666,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__36004 = (i__35665 + (1));
i__35665 = G__36004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35666),posh$lib$q_analyze$fill_qvar_set_$_iter__35663(cljs.core.chunk_rest(s__35664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35666),null);
}
} else {
var r = cljs.core.first(s__35664__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__35663(cljs.core.rest(s__35664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__35667 = cljs.core.first(seq1);
var G__35668 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35667,G__35668) : f.call(null,G__35667,G__35668));
})(),(function (){var G__35669 = f;
var G__35670 = cljs.core.rest(seq1);
var G__35671 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__35669,G__35670,G__35671) : posh.lib.q_analyze.seq_merge_with.call(null,G__35669,G__35670,G__35671));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__35674){
var vec__35675 = p__35674;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(2),null);
var eav = vec__35675;
var vec__35678 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681(s__35682){
return (new cljs.core.LazySeq(null,(function (){
var s__35682__$1 = s__35682;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35682__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__35682__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681_$_iter__35683(s__35684){
return (new cljs.core.LazySeq(null,((function (s__35682__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (){
var s__35684__$1 = s__35684;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35684__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__35684__$1,s__35682__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681_$_iter__35683_$_iter__35685(s__35686){
return (new cljs.core.LazySeq(null,((function (s__35684__$1,s__35682__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (){
var s__35686__$1 = s__35686;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__35686__$1);
if(temp__5735__auto____$2){
var s__35686__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__35686__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35686__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35688 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35687 = (0);
while(true){
if((i__35687 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__35687);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__35687,s__35686__$1,s__35684__$1,s__35682__$1,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p1__35672_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__35672_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__35687,s__35686__$1,s__35684__$1,s__35682__$1,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__35687,s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p__35689){
var vec__35690 = p__35689;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35690,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35690,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__35687,s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__35687,s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p1__35673_SHARP_){
if(cljs.core.truth_(p1__35673_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__35687,s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__35688,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__35688,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__36005 = (i__35687 + (1));
i__35687 = G__36005;
continue;
} else {
var G__36006 = (i__35687 + (1));
i__35687 = G__36006;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35688),posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681_$_iter__35683_$_iter__35685(cljs.core.chunk_rest(s__35686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35688),null);
}
} else {
var vv = cljs.core.first(s__35686__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__35686__$1,s__35684__$1,s__35682__$1,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p1__35672_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__35672_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__35686__$1,s__35684__$1,s__35682__$1,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p__35693){
var vec__35694 = p__35693;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,exposed_qvars,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav){
return (function (p1__35673_SHARP_){
if(cljs.core.truth_(p1__35673_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__35686__$1,s__35684__$1,s__35682__$1,wildcard_count,exposed_qvars,vv,s__35686__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681_$_iter__35683_$_iter__35685(cljs.core.rest(s__35686__$2)));
} else {
var G__36007 = cljs.core.rest(s__35686__$2);
s__35686__$1 = G__36007;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35684__$1,s__35682__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,null,null));
});})(s__35684__$1,s__35682__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681_$_iter__35683(cljs.core.rest(s__35684__$1)));
} else {
var G__36009 = cljs.core.rest(s__35684__$1);
s__35684__$1 = G__36009;
continue;
}
} else {
return null;
}
break;
}
});})(s__35682__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
,null,null));
});})(s__35682__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__35678,qe,qa,qv,vec__35675,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__35681(cljs.core.rest(s__35682__$1)));
} else {
var G__36010 = cljs.core.rest(s__35682__$1);
s__35682__$1 = G__36010;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_35697 = cljs.core.vec(eav);
var ocr_35698 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_35697)) && ((cljs.core.count(ocr_35697) === 3)))){
try{var ocr_35697_0__35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_0__35726,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35802){if((e35802 instanceof Error)){
var e__34685__auto__ = e35802;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_35698)) && ((cljs.core.count(ocr_35698) === 3)))){
try{var ocr_35698_2__35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35731 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35804){if((e35804 instanceof Error)){
var e__34685__auto____$1 = e35804;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35731 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35805){if((e35805 instanceof Error)){
var e__34685__auto____$2 = e35805;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35805;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35803){if((e35803 instanceof Error)){
var e__34685__auto____$1 = e35803;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35803;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35797){if((e35797 instanceof Error)){
var e__34685__auto__ = e35797;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_35698)) && ((cljs.core.count(ocr_35698) === 3)))){
try{var ocr_35698_1__35733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35733 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35800){if((e35800 instanceof Error)){
var e__34685__auto____$1 = e35800;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35698_1__35733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35733 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35801){if((e35801 instanceof Error)){
var e__34685__auto____$2 = e35801;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35801;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35799){if((e35799 instanceof Error)){
var e__34685__auto____$1 = e35799;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35798){if((e35798 instanceof Error)){
var e__34685__auto____$1 = e35798;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35798;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35739){if((e35739 instanceof Error)){
var e__34685__auto__ = e35739;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_35698)) && ((cljs.core.count(ocr_35698) === 3)))){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35796){if((e35796 instanceof Error)){
var e__34685__auto____$1 = e35796;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35795){if((e35795 instanceof Error)){
var e__34685__auto____$1 = e35795;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35741){if((e35741 instanceof Error)){
var e__34685__auto____$1 = e35741;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35792){if((e35792 instanceof Error)){
var e__34685__auto____$2 = e35792;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35793){if((e35793 instanceof Error)){
var e__34685__auto____$3 = e35793;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35794){if((e35794 instanceof Error)){
var e__34685__auto____$4 = e35794;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35794;

}
}} else {
throw e__34685__auto____$3;
}
} else {
throw e35793;

}
}} else {
throw e__34685__auto____$2;
}
} else {
throw e35792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35791){if((e35791 instanceof Error)){
var e__34685__auto____$2 = e35791;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35742){if((e35742 instanceof Error)){
var e__34685__auto____$2 = e35742;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35790){if((e35790 instanceof Error)){
var e__34685__auto____$3 = e35790;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$3;
}
} else {
throw e35790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35787){if((e35787 instanceof Error)){
var e__34685__auto____$3 = e35787;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
try{var ocr_35697_2__35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_2__35728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35789){if((e35789 instanceof Error)){
var e__34685__auto____$4 = e35789;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35788){if((e35788 instanceof Error)){
var e__34685__auto____$4 = e35788;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35788;

}
}} else {
throw e__34685__auto____$3;
}
} else {
throw e35787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35743){if((e35743 instanceof Error)){
var e__34685__auto____$3 = e35743;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35786){if((e35786 instanceof Error)){
var e__34685__auto____$4 = e35786;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35785){if((e35785 instanceof Error)){
var e__34685__auto____$4 = e35785;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35744){if((e35744 instanceof Error)){
var e__34685__auto____$4 = e35744;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35784){if((e35784 instanceof Error)){
var e__34685__auto____$5 = e35784;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$5;
}
} else {
throw e35784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35783){if((e35783 instanceof Error)){
var e__34685__auto____$5 = e35783;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$5;
}
} else {
throw e35783;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35745){if((e35745 instanceof Error)){
var e__34685__auto____$5 = e35745;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35782){if((e35782 instanceof Error)){
var e__34685__auto____$6 = e35782;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$6;
}
} else {
throw e35782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35781){if((e35781 instanceof Error)){
var e__34685__auto____$6 = e35781;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$6;
}
} else {
throw e35781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35746){if((e35746 instanceof Error)){
var e__34685__auto____$6 = e35746;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35697_1__35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_1__35727,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35780){if((e35780 instanceof Error)){
var e__34685__auto____$7 = e35780;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35779){if((e35779 instanceof Error)){
var e__34685__auto____$7 = e35779;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35779;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35747){if((e35747 instanceof Error)){
var e__34685__auto____$7 = e35747;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
try{var ocr_35697_0__35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_0__35726,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35778){if((e35778 instanceof Error)){
var e__34685__auto____$8 = e35778;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$8;
}
} else {
throw e35778;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35777){if((e35777 instanceof Error)){
var e__34685__auto____$8 = e35777;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$8;
}
} else {
throw e35777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35748){if((e35748 instanceof Error)){
var e__34685__auto____$8 = e35748;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
try{var ocr_35697_0__35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_0__35726,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35776){if((e35776 instanceof Error)){
var e__34685__auto____$9 = e35776;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$9;
}
} else {
throw e35776;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35775){if((e35775 instanceof Error)){
var e__34685__auto____$9 = e35775;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$9;
}
} else {
throw e35775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35749){if((e35749 instanceof Error)){
var e__34685__auto____$9 = e35749;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
try{var ocr_35697_0__35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_0__35726,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35774){if((e35774 instanceof Error)){
var e__34685__auto____$10 = e35774;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35773){if((e35773 instanceof Error)){
var e__34685__auto____$10 = e35773;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35750){if((e35750 instanceof Error)){
var e__34685__auto____$10 = e35750;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
try{var ocr_35697_0__35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35697_0__35726,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35772){if((e35772 instanceof Error)){
var e__34685__auto____$11 = e35772;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$11;
}
} else {
throw e35772;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35771){if((e35771 instanceof Error)){
var e__34685__auto____$11 = e35771;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$11;
}
} else {
throw e35771;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35751){if((e35751 instanceof Error)){
var e__34685__auto____$11 = e35751;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35770){if((e35770 instanceof Error)){
var e__34685__auto____$12 = e35770;
if((e__34685__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$12;
}
} else {
throw e35770;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35765){if((e35765 instanceof Error)){
var e__34685__auto____$12 = e35765;
if((e__34685__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35769){if((e35769 instanceof Error)){
var e__34685__auto____$13 = e35769;
if((e__34685__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$13;
}
} else {
throw e35769;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35766){if((e35766 instanceof Error)){
var e__34685__auto____$13 = e35766;
if((e__34685__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35768){if((e35768 instanceof Error)){
var e__34685__auto____$14 = e35768;
if((e__34685__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$14;
}
} else {
throw e35768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35767){if((e35767 instanceof Error)){
var e__34685__auto____$14 = e35767;
if((e__34685__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$14;
}
} else {
throw e35767;

}
}} else {
throw e__34685__auto____$13;
}
} else {
throw e35766;

}
}} else {
throw e__34685__auto____$12;
}
} else {
throw e35765;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35752){if((e35752 instanceof Error)){
var e__34685__auto____$12 = e35752;
if((e__34685__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35764){if((e35764 instanceof Error)){
var e__34685__auto____$13 = e35764;
if((e__34685__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$13;
}
} else {
throw e35764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35763){if((e35763 instanceof Error)){
var e__34685__auto____$13 = e35763;
if((e__34685__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$13;
}
} else {
throw e35763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35753){if((e35753 instanceof Error)){
var e__34685__auto____$13 = e35753;
if((e__34685__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === true)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35762){if((e35762 instanceof Error)){
var e__34685__auto____$14 = e35762;
if((e__34685__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$14;
}
} else {
throw e35762;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35761){if((e35761 instanceof Error)){
var e__34685__auto____$14 = e35761;
if((e__34685__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$14;
}
} else {
throw e35761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35754){if((e35754 instanceof Error)){
var e__34685__auto____$14 = e35754;
if((e__34685__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_35698_2__35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(2));
if((ocr_35698_2__35737 === false)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === true)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35760){if((e35760 instanceof Error)){
var e__34685__auto____$15 = e35760;
if((e__34685__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$15;
}
} else {
throw e35760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35756){if((e35756 instanceof Error)){
var e__34685__auto____$15 = e35756;
if((e__34685__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_35698_0__35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(0));
if((ocr_35698_0__35735 === false)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35758){if((e35758 instanceof Error)){
var e__34685__auto____$16 = e35758;
if((e__34685__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_35698_1__35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35698,(1));
if((ocr_35698_1__35736 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35697,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35759){if((e35759 instanceof Error)){
var e__34685__auto____$17 = e35759;
if((e__34685__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$17;
}
} else {
throw e35759;

}
}} else {
throw e__34685__auto____$16;
}
} else {
throw e35758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35757){if((e35757 instanceof Error)){
var e__34685__auto____$16 = e35757;
if((e__34685__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$16;
}
} else {
throw e35757;

}
}} else {
throw e__34685__auto____$15;
}
} else {
throw e35756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35755){if((e35755 instanceof Error)){
var e__34685__auto____$15 = e35755;
if((e__34685__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$15;
}
} else {
throw e35755;

}
}} else {
throw e__34685__auto____$14;
}
} else {
throw e35754;

}
}} else {
throw e__34685__auto____$13;
}
} else {
throw e35753;

}
}} else {
throw e__34685__auto____$12;
}
} else {
throw e35752;

}
}} else {
throw e__34685__auto____$11;
}
} else {
throw e35751;

}
}} else {
throw e__34685__auto____$10;
}
} else {
throw e35750;

}
}} else {
throw e__34685__auto____$9;
}
} else {
throw e35749;

}
}} else {
throw e__34685__auto____$8;
}
} else {
throw e35748;

}
}} else {
throw e__34685__auto____$7;
}
} else {
throw e35747;

}
}} else {
throw e__34685__auto____$6;
}
} else {
throw e35746;

}
}} else {
throw e__34685__auto____$5;
}
} else {
throw e35745;

}
}} else {
throw e__34685__auto____$4;
}
} else {
throw e35744;

}
}} else {
throw e__34685__auto____$3;
}
} else {
throw e35743;

}
}} else {
throw e__34685__auto____$2;
}
} else {
throw e35742;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35740){if((e35740 instanceof Error)){
var e__34685__auto____$1 = e35740;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35740;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35738){if((e35738 instanceof Error)){
var e__34685__auto__ = e35738;
if((e__34685__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__34685__auto__;
}
} else {
throw e35738;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_35806 = cljs.core.vec(eav);
var ocr_35807 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_35806)) && ((cljs.core.count(ocr_35806) === 3)))){
try{var ocr_35806_0__35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_0__35832,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35806_2__35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_2__35834,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e35896){if((e35896 instanceof Error)){
var e__34685__auto__ = e35896;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_35807)) && ((cljs.core.count(ocr_35807) === 3)))){
try{var ocr_35807_2__35837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35837 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35898){if((e35898 instanceof Error)){
var e__34685__auto____$1 = e35898;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35837 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35899){if((e35899 instanceof Error)){
var e__34685__auto____$2 = e35899;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35899;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35898;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35897){if((e35897 instanceof Error)){
var e__34685__auto____$1 = e35897;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35897;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35896;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35891){if((e35891 instanceof Error)){
var e__34685__auto__ = e35891;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{var ocr_35806_2__35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_2__35834,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_35807)) && ((cljs.core.count(ocr_35807) === 3)))){
try{var ocr_35807_1__35839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35839 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35894){if((e35894 instanceof Error)){
var e__34685__auto____$1 = e35894;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35839 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35895){if((e35895 instanceof Error)){
var e__34685__auto____$2 = e35895;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35895;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35893){if((e35893 instanceof Error)){
var e__34685__auto____$1 = e35893;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35893;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35892){if((e35892 instanceof Error)){
var e__34685__auto____$1 = e35892;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35892;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35891;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35845){if((e35845 instanceof Error)){
var e__34685__auto__ = e35845;
if((e__34685__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_35807)) && ((cljs.core.count(ocr_35807) === 3)))){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35806_2__35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_2__35834,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35890){if((e35890 instanceof Error)){
var e__34685__auto____$1 = e35890;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35890;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35889){if((e35889 instanceof Error)){
var e__34685__auto____$1 = e35889;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35889;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35847){if((e35847 instanceof Error)){
var e__34685__auto____$1 = e35847;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
try{var ocr_35806_2__35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_2__35834,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35886){if((e35886 instanceof Error)){
var e__34685__auto____$2 = e35886;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35887){if((e35887 instanceof Error)){
var e__34685__auto____$3 = e35887;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35888){if((e35888 instanceof Error)){
var e__34685__auto____$4 = e35888;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35888;

}
}} else {
throw e__34685__auto____$3;
}
} else {
throw e35887;

}
}} else {
throw e__34685__auto____$2;
}
} else {
throw e35886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35885){if((e35885 instanceof Error)){
var e__34685__auto____$2 = e35885;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$2;
}
} else {
throw e35885;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35848){if((e35848 instanceof Error)){
var e__34685__auto____$2 = e35848;
if((e__34685__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
try{var ocr_35806_2__35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_2__35834,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35884){if((e35884 instanceof Error)){
var e__34685__auto____$3 = e35884;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$3;
}
} else {
throw e35884;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35883){if((e35883 instanceof Error)){
var e__34685__auto____$3 = e35883;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$3;
}
} else {
throw e35883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35849){if((e35849 instanceof Error)){
var e__34685__auto____$3 = e35849;
if((e__34685__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === true)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35882){if((e35882 instanceof Error)){
var e__34685__auto____$4 = e35882;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35881){if((e35881 instanceof Error)){
var e__34685__auto____$4 = e35881;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$4;
}
} else {
throw e35881;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35850){if((e35850 instanceof Error)){
var e__34685__auto____$4 = e35850;
if((e__34685__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === false)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35880){if((e35880 instanceof Error)){
var e__34685__auto____$5 = e35880;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$5;
}
} else {
throw e35880;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35879){if((e35879 instanceof Error)){
var e__34685__auto____$5 = e35879;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$5;
}
} else {
throw e35879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35851){if((e35851 instanceof Error)){
var e__34685__auto____$5 = e35851;
if((e__34685__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === true)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
try{var ocr_35806_1__35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_1__35833,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35878){if((e35878 instanceof Error)){
var e__34685__auto____$6 = e35878;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$6;
}
} else {
throw e35878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35875){if((e35875 instanceof Error)){
var e__34685__auto____$6 = e35875;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
try{var ocr_35806_0__35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_0__35832,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35877){if((e35877 instanceof Error)){
var e__34685__auto____$7 = e35877;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35877;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35876){if((e35876 instanceof Error)){
var e__34685__auto____$7 = e35876;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35876;

}
}} else {
throw e__34685__auto____$6;
}
} else {
throw e35875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35852){if((e35852 instanceof Error)){
var e__34685__auto____$6 = e35852;
if((e__34685__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === false)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
try{var ocr_35806_0__35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_0__35832,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35874){if((e35874 instanceof Error)){
var e__34685__auto____$7 = e35874;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35874;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35873){if((e35873 instanceof Error)){
var e__34685__auto____$7 = e35873;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$7;
}
} else {
throw e35873;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35853){if((e35853 instanceof Error)){
var e__34685__auto____$7 = e35853;
if((e__34685__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === true)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === false)){
try{var ocr_35806_0__35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35806_0__35832,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35872){if((e35872 instanceof Error)){
var e__34685__auto____$8 = e35872;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$8;
}
} else {
throw e35872;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35866){if((e35866 instanceof Error)){
var e__34685__auto____$8 = e35866;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35870){if((e35870 instanceof Error)){
var e__34685__auto____$9 = e35870;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35871){if((e35871 instanceof Error)){
var e__34685__auto____$10 = e35871;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35871;

}
}} else {
throw e__34685__auto____$9;
}
} else {
throw e35870;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35867){if((e35867 instanceof Error)){
var e__34685__auto____$9 = e35867;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === false)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35869){if((e35869 instanceof Error)){
var e__34685__auto____$10 = e35869;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35869;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35868){if((e35868 instanceof Error)){
var e__34685__auto____$10 = e35868;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35868;

}
}} else {
throw e__34685__auto____$9;
}
} else {
throw e35867;

}
}} else {
throw e__34685__auto____$8;
}
} else {
throw e35866;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35854){if((e35854 instanceof Error)){
var e__34685__auto____$8 = e35854;
if((e__34685__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === false)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35865){if((e35865 instanceof Error)){
var e__34685__auto____$9 = e35865;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$9;
}
} else {
throw e35865;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35864){if((e35864 instanceof Error)){
var e__34685__auto____$9 = e35864;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$9;
}
} else {
throw e35864;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35855){if((e35855 instanceof Error)){
var e__34685__auto____$9 = e35855;
if((e__34685__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === true)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35863){if((e35863 instanceof Error)){
var e__34685__auto____$10 = e35863;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35863;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35862){if((e35862 instanceof Error)){
var e__34685__auto____$10 = e35862;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$10;
}
} else {
throw e35862;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35856){if((e35856 instanceof Error)){
var e__34685__auto____$10 = e35856;
if((e__34685__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_35807_2__35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(2));
if((ocr_35807_2__35843 === false)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === true)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35861){if((e35861 instanceof Error)){
var e__34685__auto____$11 = e35861;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$11;
}
} else {
throw e35861;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35858){if((e35858 instanceof Error)){
var e__34685__auto____$11 = e35858;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_35807_0__35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(0));
if((ocr_35807_0__35841 === false)){
try{var ocr_35807_1__35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35807,(1));
if((ocr_35807_1__35842 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35806,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35860){if((e35860 instanceof Error)){
var e__34685__auto____$12 = e35860;
if((e__34685__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$12;
}
} else {
throw e35860;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35859){if((e35859 instanceof Error)){
var e__34685__auto____$12 = e35859;
if((e__34685__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$12;
}
} else {
throw e35859;

}
}} else {
throw e__34685__auto____$11;
}
} else {
throw e35858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35857){if((e35857 instanceof Error)){
var e__34685__auto____$11 = e35857;
if((e__34685__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$11;
}
} else {
throw e35857;

}
}} else {
throw e__34685__auto____$10;
}
} else {
throw e35856;

}
}} else {
throw e__34685__auto____$9;
}
} else {
throw e35855;

}
}} else {
throw e__34685__auto____$8;
}
} else {
throw e35854;

}
}} else {
throw e__34685__auto____$7;
}
} else {
throw e35853;

}
}} else {
throw e__34685__auto____$6;
}
} else {
throw e35852;

}
}} else {
throw e__34685__auto____$5;
}
} else {
throw e35851;

}
}} else {
throw e__34685__auto____$4;
}
} else {
throw e35850;

}
}} else {
throw e__34685__auto____$3;
}
} else {
throw e35849;

}
}} else {
throw e__34685__auto____$2;
}
} else {
throw e35848;

}
}} else {
throw e__34685__auto____$1;
}
} else {
throw e35847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35846){if((e35846 instanceof Error)){
var e__34685__auto____$1 = e35846;
if((e__34685__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34685__auto____$1;
}
} else {
throw e35846;

}
}} else {
throw e__34685__auto__;
}
} else {
throw e35845;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35844){if((e35844 instanceof Error)){
var e__34685__auto__ = e35844;
if((e__34685__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__34685__auto__;
}
} else {
throw e35844;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35901){
var vec__35902 = p__35901;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35900_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__35900_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35906){
var vec__35907 = p__35906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35905_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__35905_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__35910 = cljs.core.rest(ins);
var G__35911 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__35910,G__35911) : posh.lib.q_analyze.just_qvars.call(null,G__35910,G__35911));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35912_SHARP_){
return cljs.core.zipmap(qvars,p1__35912_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__35913 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__36067 = var$;
var G__36068 = dbvarmap;
var G__36069 = cljs.core.rest(dbeavs);
var$ = G__36067;
dbvarmap = G__36068;
dbeavs = G__36069;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__35916 = cljs.core.rest(vars);
var G__35917 = dbvarmap;
var G__35918 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__35916,G__35917,G__35918) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__35916,G__35917,G__35918));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__36070 = (n + (1));
var G__36071 = cljs.core.rest(xs__$1);
n = G__36070;
xs__$1 = G__36071;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35919_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__35919_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__35919_SHARP_) : type.call(null,p1__35919_SHARP_));
} else {
return p1__35919_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__35920 = cljs.core.rest(ins);
var G__35921 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__35920,G__35921) : posh.lib.q_analyze.make_dbarg_map.call(null,G__35920,G__35921));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35922){
var vec__35923 = p__35922;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__35927_SHARP_,p2__35926_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__35926_SHARP_)){
return p1__35927_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__35931 = cljs.core._EQ_;
var expr__35932 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__35931.cljs$core$IFn$_invoke$arity$2 ? pred__35931.cljs$core$IFn$_invoke$arity$2((1),expr__35932) : pred__35931.call(null,(1),expr__35932)))){
return true;
} else {
if(cljs.core.truth_((pred__35931.cljs$core$IFn$_invoke$arity$2 ? pred__35931.cljs$core$IFn$_invoke$arity$2((3),expr__35932) : pred__35931.call(null,(3),expr__35932)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__36085 = cljs.core.first(remaining);
var G__36086 = cljs.core.rest(remaining);
clause = G__36085;
remaining = G__36086;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__36087 = cljs.core.first(remaining);
var G__36088 = cljs.core.rest(remaining);
clause = G__36087;
remaining = G__36088;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__35934(s__35935){
return (new cljs.core.LazySeq(null,(function (){
var s__35935__$1 = s__35935;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35935__$1);
if(temp__5735__auto__){
var s__35935__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35935__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35935__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35937 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35936 = (0);
while(true){
if((i__35936 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__35936);
cljs.core.chunk_append(b__35937,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__36093 = (i__35936 + (1));
i__35936 = G__36093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35937),posh$lib$q_analyze$resolve_any_idents_$_iter__35934(cljs.core.chunk_rest(s__35935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35937),null);
}
} else {
var var_value = cljs.core.first(s__35935__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__35934(cljs.core.rest(s__35935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35942){
var vec__35943 = p__35942;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35946){
var vec__35947 = p__35946;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35950){
var vec__35951 = p__35950;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35954){
var vec__35955 = p__35954;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__35959 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__35960 = cljs.core.vec(r);
var fexpr__35958 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__35958.cljs$core$IFn$_invoke$arity$2 ? fexpr__35958.cljs$core$IFn$_invoke$arity$2(G__35959,G__35960) : fexpr__35958.call(null,G__35959,G__35960));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35961){
var vec__35962 = p__35961;
var seq__35963 = cljs.core.seq(vec__35962);
var first__35964 = cljs.core.first(seq__35963);
var seq__35963__$1 = cljs.core.next(seq__35963);
var db = first__35964;
var eav = seq__35963__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35965){
var vec__35966 = p__35965;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__35940_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__35940_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__35940_SHARP_) : linked_qvars.call(null,p1__35940_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__35940_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__35941_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__35941_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__35941_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map

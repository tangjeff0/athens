goog.provide('spec_tools.form');
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.form !== 'undefined') && (typeof spec_tools.form.resolve_form !== 'undefined')){
} else {
spec_tools.form.resolve_form = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57833 = cljs.core.get_global_hierarchy;
return (fexpr__57833.cljs$core$IFn$_invoke$arity$0 ? fexpr__57833.cljs$core$IFn$_invoke$arity$0() : fexpr__57833.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.form","resolve-form"),(function (x){
if(((cljs.core.qualified_keyword_QMARK_(x)) || (cljs.core.seq_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return new cljs.core.Keyword("spec-tools.form","identity","spec-tools.form/identity",-179136630);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_(x);
}
})())){
return new cljs.core.Keyword("spec-tools.form","spec","spec-tools.form/spec",-2137946288);
} else {
return x;

}
}
}),new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.form","spec","spec-tools.form/spec",-2137946288),(function (x){
return cljs.spec.alpha.form(x);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.form","identity","spec-tools.form/identity",-179136630),(function (x){
return x;
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025),(function (_){
return new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.any_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.some_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.number_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.integer_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.pos_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.neg_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","neg-int?","cljs.core/neg-int?",-933447883,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.nat_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.float_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","float?","cljs.core/float?",-941017745,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.double_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.boolean_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.string_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","ident?","cljs.core/ident?",1567441535,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-ident?","cljs.core/simple-ident?",1674885558,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-ident?","cljs.core/qualified-ident?",-1863492566,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-keyword?","cljs.core/simple-keyword?",39474330,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.simple_symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.qualified_symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.uuid_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","uuid?","cljs.core/uuid?",-15131116,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.inst_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.seqable_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.indexed_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","indexed?","cljs.core/indexed?",-1311257161,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.map_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.vector_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.list_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.seq_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.char_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","char?","cljs.core/char?",416405281,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.set_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.nil_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.false_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.true_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.zero_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.coll_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.empty_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.associative_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","associative?","cljs.core/associative?",-540020088,null);
}));
spec_tools.form.resolve_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.sequential_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null);
}));

//# sourceMappingURL=spec_tools.form.js.map

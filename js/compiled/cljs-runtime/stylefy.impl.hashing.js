goog.provide('stylefy.impl.hashing');
stylefy.impl.hashing.default_class_prefix = "_stylefy";
stylefy.impl.hashing.use_custom_class_prefix_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * Checks that the value is valid and returns as properly formatted prefix.
 */
stylefy.impl.hashing.check_custom_class_prefix = (function stylefy$impl$hashing$check_custom_class_prefix(custom_class_prefix){
if((((custom_class_prefix == null)) || (typeof custom_class_prefix === 'string') || ((custom_class_prefix instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ",["Custom class prefix should be either string, keyword or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_class_prefix], 0))].join(''),"\n","(or (nil? custom-class-prefix) (string? custom-class-prefix) (keyword? custom-class-prefix))"].join('')));
}

if((custom_class_prefix == null)){
return stylefy.impl.hashing.default_class_prefix;
} else {
if(typeof custom_class_prefix === 'string'){
return custom_class_prefix;
} else {
if((custom_class_prefix instanceof cljs.core.Keyword)){
return cljs.core.name(custom_class_prefix);
} else {
return null;
}
}
}
});
stylefy.impl.hashing.hash_style = (function stylefy$impl$hashing$hash_style(style){
if((!(cljs.core.empty_QMARK_(style)))){
var hashable_garden_units = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop_key){
var prop_value = (prop_key.cljs$core$IFn$_invoke$arity$1 ? prop_key.cljs$core$IFn$_invoke$arity$1(style) : prop_key.call(null,style));
if(stylefy.impl.utils.is_garden_value_QMARK_(prop_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,prop_key,garden.compiler.render_css(prop_value));
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(stylefy.impl.utils.remove_special_keywords(style)));
var hashable_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,hashable_garden_units], 0));
var hashable_style__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(hashable_style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586)], 0));
var class_prefix = (cljs.core.truth_(cljs.core.deref(stylefy.impl.hashing.use_custom_class_prefix_QMARK_))?stylefy.impl.hashing.check_custom_class_prefix(new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586).cljs$core$IFn$_invoke$arity$1(style)):stylefy.impl.hashing.default_class_prefix);
return [class_prefix,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.hashing.init_custom_class_prefix = (function stylefy$impl$hashing$init_custom_class_prefix(options){
return cljs.core.reset_BANG_(stylefy.impl.hashing.use_custom_class_prefix_QMARK_,cljs.core.boolean$(new cljs.core.Keyword(null,"use-custom-class-prefix?","use-custom-class-prefix?",-1156349118).cljs$core$IFn$_invoke$arity$1(options)));
});

//# sourceMappingURL=stylefy.impl.hashing.js.map

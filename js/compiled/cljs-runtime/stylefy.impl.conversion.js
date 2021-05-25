goog.provide('stylefy.impl.conversion');
/**
 * Checks all values in the map and converts all Garden units to CSS.
 */
stylefy.impl.conversion.garden_units__GT_css = (function stylefy$impl$conversion$garden_units__GT_css(props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,next_key){
var value = (next_key.cljs$core$IFn$_invoke$arity$1 ? next_key.cljs$core$IFn$_invoke$arity$1(props) : next_key.call(null,props));
if(stylefy.impl.utils.is_garden_value_QMARK_(value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,next_key,garden.compiler.render_css(value));
} else {
return result;
}
}),props,cljs.core.keys(props));
});
stylefy.impl.conversion.convert_stylefy_vendors_to_garden = (function stylefy$impl$conversion$convert_stylefy_vendors_to_garden(props){
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var vendors = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.conversion.convert_stylefy_modes_to_garden = (function stylefy$impl$conversion$convert_stylefy_modes_to_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
var handle_mode = (function (mode_name,mode_props){
if((((mode_name instanceof cljs.core.Keyword)) || (((typeof mode_name === 'string') && (clojure.string.starts_with_QMARK_(mode_name,":")))))){
} else {
throw (new Error(["Assert failed: ",["Mode must be specified as a keyword or string beginning with colon, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mode_name], 0))].join(''),"\n","(or (keyword? mode-name) (and (string? mode-name) (str/starts-with? mode-name \":\")))"].join('')));
}

if(((typeof mode_name === 'string') && ((cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mode_name," ")) > (1))))){
stylefy.impl.log.warn(["Incorrect mode detected, should not contain spaces. Mode was: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mode_name], 0))].join(''));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode_name)].join('')),mode_props], null);
});
if(cljs.core.map_QMARK_(modes)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54394_SHARP_){
return handle_mode(p1__54394_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(modes,p1__54394_SHARP_));
}),cljs.core.keys(modes));
} else {
if(cljs.core.vector_QMARK_(modes)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54395_SHARP_){
return handle_mode(cljs.core.first(p1__54395_SHARP_),cljs.core.second(p1__54395_SHARP_));
}),modes);
} else {
return null;
}
}
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style_into_class = (function stylefy$impl$conversion$convert_base_style_into_class(p__54404,options){
var map__54405 = p__54404;
var map__54405__$1 = (((((!((map__54405 == null))))?(((((map__54405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54405):map__54405);
var style = map__54405__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var css_props = stylefy.impl.utils.remove_special_keywords(props);
var css_selector = (function (){var or__4126__auto__ = custom_selector;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(props);
var garden_options = (function (){var or__4126__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0));
return css_class;
});
/**
 * Converts stylefy/media definition into CSS media query.
 */
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__54409,options){
var map__54410 = p__54409;
var map__54410__$1 = (((((!((map__54410 == null))))?(((((map__54410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54410):map__54410);
var style = map__54410__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54410__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54410__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54410__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_media_queries = temp__5735__auto__;
var css_selector = (function (){var or__4126__auto__ = custom_selector;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_media_queries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (media_query){
var media_query_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_media_queries,media_query);
var media_query_css_props = stylefy.impl.utils.remove_special_keywords(media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,media_query_css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(media_query_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(media_query_props);
var garden_options = (function (){var or__4126__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0))], 0));
}),cljs.core.keys(stylefy_media_queries));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_supports_rules = (function stylefy$impl$conversion$convert_supports_rules(p__54412,options){
var map__54413 = p__54412;
var map__54413__$1 = (((((!((map__54413 == null))))?(((((map__54413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54413):map__54413);
var style = map__54413__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_supports = temp__5735__auto__;
var css_selector = (function (){var or__4126__auto__ = custom_selector;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_supports = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (supports_selector){
var supports_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_supports,supports_selector);
var supports_css_props = stylefy.impl.utils.remove_special_keywords(supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,supports_css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_to_garden(supports_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(supports_props);
var garden_options = (function (){var or__4126__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.conversion.convert_media_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),custom_selector], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
}),cljs.core.keys(stylefy_supports));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_supports);
} else {
return null;
}
});
/**
 * Converts stylefy/manual definition into CSS.
 */
stylefy.impl.conversion.convert_manual_styles = (function stylefy$impl$conversion$convert_manual_styles(p__54417,options){
var map__54418 = p__54417;
var map__54418__$1 = (((((!((map__54418 == null))))?(((((map__54418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54418):map__54418);
var style = map__54418__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54418__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54418__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54418__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_manual_styles = temp__5735__auto__;
var css_parent_selector = (function (){var or__4126__auto__ = custom_selector;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_manual_styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (manual_style){
var manual_selector_and_css_props = clojure.walk.walk((function (p1__54415_SHARP_){
if(cljs.core.map_QMARK_(p1__54415_SHARP_)){
return stylefy.impl.utils.remove_special_keywords(p1__54415_SHARP_);
} else {
return p1__54415_SHARP_;
}
}),cljs.core.identity,manual_style);
var garden_style_definition = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_parent_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manual_selector_and_css_props], null));
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_style_definition], 0));
return css_class;
}),stylefy_manual_styles);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_manual_styles);
} else {
return null;
}
});
/**
 * Converts the given style to CSS. Options are sent directly to Garden
 */
stylefy.impl.conversion.style__GT_css = (function stylefy$impl$conversion$style__GT_css(var_args){
var G__54422 = arguments.length;
switch (G__54422) {
case 1:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2(style,cljs.core.PersistentArrayMap.EMPTY);
}));

(stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__54423,options){
var map__54424 = p__54423;
var map__54424__$1 = (((((!((map__54424 == null))))?(((((map__54424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54424):map__54424);
var style = map__54424__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.conversion.convert_base_style_into_class(style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries(style,options);
var css_supports = stylefy.impl.conversion.convert_supports_rules(style,options);
var css_manual_styles = stylefy.impl.conversion.convert_manual_styles(style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_manual_styles)].join('');
}));

(stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=stylefy.impl.conversion.js.map

goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/NativeWrapper");

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/NativeWrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.__GT_NativeWrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper(tag,id,className));
});

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.valid_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$valid_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cache_get = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$cached_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.dash_to_prop_name(k);
goog.object.set(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.js_val_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$kv_conv(o,k,v){
var G__26629 = o;
goog.object.set(G__26629,day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_prop_name(k),(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value.call(null,v)));

return G__26629;
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$convert_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__26657__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__26657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26658__i = 0, G__26658__a = new Array(arguments.length -  0);
while (G__26658__i < G__26658__a.length) {G__26658__a[G__26658__i] = arguments[G__26658__i + 0]; ++G__26658__i;}
  args = new cljs.core.IndexedSeq(G__26658__a,0,null);
} 
return G__26657__delegate.call(this,args);};
G__26657.cljs$lang$maxFixedArity = 0;
G__26657.cljs$lang$applyTo = (function (arglist__26659){
var args = cljs.core.seq(arglist__26659);
return G__26657__delegate(args);
});
G__26657.cljs$core$IFn$_invoke$arity$variadic = G__26657__delegate;
return G__26657;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.custom_prop_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_custom_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$cached_custom_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5737__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.dash_to_prop_name(k);
goog.object.set(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.custom_kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$custom_kv_conv(o,k,v){
var G__26630 = o;
goog.object.set(G__26630,day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_custom_prop_name(k),day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value(v));

return G__26630;
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_custom_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$convert_custom_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__26662__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__26662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26663__i = 0, G__26663__a = new Array(arguments.length -  0);
while (G__26663__i < G__26663__a.length) {G__26663__a[G__26663__i] = arguments[G__26663__i + 0]; ++G__26663__i;}
  args = new cljs.core.IndexedSeq(G__26663__a,0,null);
} 
return G__26662__delegate.call(this,args);};
G__26662.cljs$lang$maxFixedArity = 0;
G__26662.cljs$lang$applyTo = (function (arglist__26664){
var args = cljs.core.seq(arglist__26664);
return G__26662__delegate(args);
});
G__26662.cljs$core$IFn$_invoke$arity$variadic = G__26662__delegate;
return G__26662;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.set_id_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__26631 = props;
var G__26631__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26631,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__26631);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26631__$1,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props)));
} else {
return G__26631__$1;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.set_id_class((function (){var G__26632 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26632,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__26632;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value(props__$1);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.has_selection_api_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_node_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__26633){
var map__26634 = p__26633;
var map__26634__$1 = (((((!((map__26634 == null))))?(((((map__26634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26634):map__26634);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === document.activeElement)) && (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.has_selection_api_QMARK_(node.type)) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.do_after_render((function (){
return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value.call(null,component));
}));
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_handle_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.do_after_render((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_render_setup = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4115__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4115__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4115__auto__;
}
})():false))){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

return (jsprops.onChange = (function (p1__26636_SHARP_){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_handle_change(this$,on_change,p1__26636_SHARP_);
}));
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_unmount = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_unmount(this$){
return (this$.cljsInputLive = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$input_component_QMARK_(x){
var G__26637 = x;
switch (G__26637) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input_class = null;
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,component,jsprops,first_child){
var this$ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component._STAR_current_component_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_render_setup(this$,jsprops);

return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,component,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child));
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$reagent_input(){
if((day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input_class == null)){
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input_class = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.create_class(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_spec));
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input_class;
});

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/HiccupTag");

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v9v1.reagent.impl.template/HiccupTag.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.__GT_HiccupTag = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.HiccupTag(tag,id,className,custom));
});

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.parse_tag = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$parse_tag(hiccup_tag){
var vec__26638 = cljs.core.next(cljs.core.re_matches(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.try_get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e26641){var e = e26641;
return null;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.key_from_vec = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$key_from_vec(v){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5737__auto__;
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reag_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$reag_element(tag,v){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.as_class(tag);
var jsprops = ({});
(jsprops.argv = v);

var temp__5739__auto___26692 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.key_from_vec(v);
if((temp__5739__auto___26692 == null)){
} else {
var key_26693 = temp__5739__auto___26692;
(jsprops.key = key_26693);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.fragment_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4126__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___26694 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.key_from_vec(argv);
if((temp__5739__auto___26694 == null)){
} else {
var key_26695 = temp__5739__auto___26694;
(jsprops.key = key_26695);
}

return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,module$node_modules$react$index.Fragment,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.call(null,argv,module$node_modules$react$index.Fragment,jsprops,first_child));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$adapt_react_class(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.tag_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_parse = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$cached_parse(x){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.parse_tag(x);
goog.object.set(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5737__auto__;
return s;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.native_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$native_element(parsed,argv,first){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4126__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.input_component_QMARK_(component)){
var G__26642 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reagent_input(),argv,component,jsprops,first_child], null),cljs.core.meta(argv));
return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__26642) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element.call(null,G__26642));
} else {
var temp__5739__auto___26696 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.get_key(cljs.core.meta(argv));
if((temp__5739__auto___26696 == null)){
} else {
var key_26697 = temp__5739__auto___26696;
(jsprops.key = key_26697);
}

return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,component,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.str_coll = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.fun_name(x);
var G__26644 = n;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__26644)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26644)){
return x;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
}
} else {
return x;
}
}),coll));

});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$hiccup_err(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26698 = arguments.length;
var i__4737__auto___26699 = (0);
while(true){
if((i__4737__auto___26699 < len__4736__auto___26698)){
args__4742__auto__.push((arguments[i__4737__auto___26699]));

var G__26700 = (i__4737__auto___26699 + (1));
i__4737__auto___26699 = G__26700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.str_coll(v),"\n",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.comp_name()].join('');
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq26645){
var G__26646 = cljs.core.first(seq26645);
var seq26645__$1 = cljs.core.next(seq26645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26646,seq26645__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.vec_to_elem = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.fragment_element(v);
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__26647 = pos;
switch (G__26647) {
case (-1):
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.__GT_HiccupTag(component,null,null,null),v,(2));

break;
default:
var G__26702 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
v = G__26702;
continue;

}
} else {
if((tag instanceof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.NativeWrapper)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.native_element(tag,v,(1));
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.reag_element(tag,v);

}
}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$as_element(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.as_element = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element);
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$expand_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element,s));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_dev = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$expand_seq_dev(s,o){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element(val);
}),s));
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_check = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__26649 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.check_derefs((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.expand_seq_dev(x,ctx);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26649,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26649,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.make_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$impl$template$make_element(argv,component,jsprops,first_child){
var G__26652 = (cljs.core.count(argv) - first_child);
switch (G__26652) {
case (0):
return module$node_modules$react$index.createElement(component,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(component,jsprops,day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element(v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.js.map

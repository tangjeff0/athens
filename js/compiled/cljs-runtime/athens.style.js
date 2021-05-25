goog.provide('athens.style');
athens.style.THEME_DARK = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-plus-2","background-plus-2",-2111504159),new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304),new cljs.core.Keyword(null,"warning-color","warning-color",924289810),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"confirmation-color","confirmation-color",346216600),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680),new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)],["#333","#AAA","#2399E7","#111","#1A1A1A","#222","#DE3C21","hsla(32, 81%, 90%, 0.08)","#189E36","#BABABA","#FBBE63","#151515"]);
athens.style.THEME_LIGHT = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-plus-2","background-plus-2",-2111504159),new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304),new cljs.core.Keyword(null,"warning-color","warning-color",924289810),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"confirmation-color","confirmation-color",346216600),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680),new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)],["#FFFFFF","#433F38","#0075E1","#EFEDEB","#FFFFFF","#FFFFFF","#D20000","hsla(32, 81%, 10%, 0.08)","#009E23","#322F38","#F9A132","#FAF8F6"]);
athens.style.DEPTH_SHADOWS = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"4","4",-1197948085),"0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"8","8",1405994928),"0px 3.2px 7.2px rgba(0, 0, 0, 0.13), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"16","16",1354114028),"0px 6.4px 14.4px rgba(0, 0, 0, 0.13), 0px 1.2px 3.6px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"64","64",977820579),"0px 24px 60px rgba(0, 0, 0, 0.15), 0px 5px 12px rgba(0, 0, 0, 0.1)"], null);
athens.style.OPACITIES = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975),0.1,new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971),0.25,new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190),0.5,new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703),0.75,new cljs.core.Keyword(null,"opacity-higher","opacity-higher",413124730),0.85], null);
athens.style.ZINDICES = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"zindex-dropdown","zindex-dropdown",116119971),(1000),new cljs.core.Keyword(null,"zindex-sticky","zindex-sticky",-909898418),(1020),new cljs.core.Keyword(null,"zindex-fixed","zindex-fixed",20766244),(1030),new cljs.core.Keyword(null,"zindex-modal-backdrop","zindex-modal-backdrop",-1478827407),(1040),new cljs.core.Keyword(null,"zindex-modal","zindex-modal",1311705508),(1050),new cljs.core.Keyword(null,"zindex-popover","zindex-popover",638767426),(1060),new cljs.core.Keyword(null,"zindex-tooltip","zindex-tooltip",-1720095537),(1070)], null);
/**
 * Turns a color and optional opacity into a CSS variable.
 *   Only accepts keywords.
 */
athens.style.color = (function athens$style$color(var_args){
var G__61212 = arguments.length;
switch (G__61212) {
case 1:
return athens.style.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.style.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.style.color.cljs$core$IFn$_invoke$arity$1 = (function (variable){
if((variable instanceof cljs.core.Keyword)){
return ["var(--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(variable)),")"].join('');
} else {
return null;
}
}));

(athens.style.color.cljs$core$IFn$_invoke$arity$2 = (function (variable,alpha){
if((((variable instanceof cljs.core.Keyword)) && ((alpha instanceof cljs.core.Keyword)))){
return ["var(--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(variable)),"---",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(alpha)),")"].join('');
} else {
return null;
}
}));

(athens.style.color.cljs$lang$maxFixedArity = 2);

athens.style.base_styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-color","background-color",570434026)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans, Sans-Serif",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.3",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3.125em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.375em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.75em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.02em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3125em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.08em",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiSvgIcon-root",".MuiSvgIcon-root",2093876191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["uppercase","0.85em",(600),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),"0.25em 0.5em","inline-flex","0.05em","0.25rem","inherit"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":focus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":focus-visible",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),"1px"], null)], null)], null)], null);
athens.style.app_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw"], null);
/**
 * Permutes all colors and opacities.
 *   There are 5 opacities and 12 colors. There are 72 keys (includes default opacity, 1.0)
 */
athens.style.permute_color_opacities = (function athens$style$permute_color_opacities(theme){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__61219){
var vec__61220 = p__61219;
var color_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61220,(0),null);
var color_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61220,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(color_k))].join('')),color_v], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__61223){
var vec__61224 = p__61223;
var opacity_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61224,(0),null);
var opacity_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61224,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(color_k)),"---",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(opacity_k))].join('')),garden.color.opacify(garden.color.hex__GT_hsl(color_v),opacity_v)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style.OPACITIES], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theme], 0)));
});
athens.style.init = (function athens$style$init(){
stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

stylefy.core.tag("html",athens.style.base_styles);

stylefy.core.tag("*",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null));

var permute_light_61236 = athens.style.permute_color_opacities(athens.style.THEME_LIGHT);
var permute_dark_61237 = athens.style.permute_color_opacities(athens.style.THEME_DARK);
stylefy.core.tag(":root",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([permute_light_61236,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefers-color-scheme","prefers-color-scheme",-1885369990),"dark"], null),permute_dark_61237])], null)], 0)));

return athens.util.hide_10x();
});

//# sourceMappingURL=athens.style.js.map

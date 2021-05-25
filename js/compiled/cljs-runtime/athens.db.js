goog.provide('athens.db');
athens.db.athens_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/athens.datoms";
athens.db.help_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/help.datoms";
athens.db.ego_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/ego.datoms";
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.rfdb !== 'undefined')){
} else {
athens.db.rfdb = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("selected","items","selected/items",1686402211),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Keyword("db","filepath","db/filepath",1097485287),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Keyword("right-sidebar","width","right-sidebar/width",1529781304),new cljs.core.Keyword("theme","dark","theme/dark",1860051576),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword("db","mtime","db/mtime",963172381),new cljs.core.Keyword("athena","open","athena/open",1253777725),new cljs.core.Keyword("db","synced","db/synced",-1518558434)],[cljs.core.PersistentVector.EMPTY,cljs.core.List.EMPTY,null,null,true,false,null,cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentArrayMap.EMPTY,false,false,(32),false,"Socrates",null,false,true]);
}
/**
 * Maps attributes from "Export All as JSON" to original datascript attributes.
 */
athens.db.str_kw_mappings = cljs.core.PersistentHashMap.fromArrays(["heading","string","edit-email","emoji","children","create-email","text-align","email","emojis","uid","create-time","users","time","props","title","edit-time"],[new cljs.core.Keyword("block","heading","block/heading",-1941840630),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("edit","email","edit/email",1419195448),new cljs.core.Keyword("ent","emoji","ent/emoji",1031088075),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("create","email","create/email",-1530017530),new cljs.core.Keyword("block","text-align","block/text-align",1776373178),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("ent","emojis","ent/emojis",-2098423410),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("create","time","create/time",-1563077754),null,null,new cljs.core.Keyword("block","props","block/props",-542295228),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("edit","time","edit/time",1384867476)]);
athens.db.convert_key = (function athens$db$convert_key(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(athens.db.str_kw_mappings,k,k);
});
/**
 * Parses JSON retrieved from Roam's "Export all as JSON". Not fully functional.
 */
athens.db.parse_hms = (function athens$db$parse_hms(hms){
if((!(cljs.core.coll_QMARK_(hms)))){
return hms;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46462_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46463){
var vec__46464 = p__46463;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,athens.db.convert_key(k),(athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1 ? athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1(v) : athens.db.parse_hms.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,p1__46462_SHARP_);
}),hms);
}
});
/**
 * Parse tuples exported via method specified in https://roamresearch.com/#/app/ego/page/eJ14YtH2G.
 */
athens.db.parse_tuples = (function athens$db$parse_tuples(tuples){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46468_SHARP_){
return cljs.core.cons(new cljs.core.Keyword("db","add","db/add",235286841),p1__46468_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46467_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,p1__46467_SHARP_);
}),cljs.core.rest(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),tuples))));
});
/**
 * Convert a JSON str to EDN. May receive JSON through an HTTP request or file upload.
 */
athens.db.json_str_to_edn = (function athens$db$json_str_to_edn(json_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json_str));
});
/**
 * Deserializes a JSON string into EDN and then Datoms.
 */
athens.db.str_to_db_tx = (function athens$db$str_to_db_tx(json_str){
var edn_data = athens.db.json_str_to_edn(json_str);
if(cljs.core.coll_QMARK_(cljs.core.first(edn_data))){
return athens.db.parse_hms(edn_data);
} else {
return athens.db.parse_tuples(edn_data);
}
});
athens.db.schema = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("schema","version","schema/version",1396190655),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("attrs","lookup","attrs/lookup",849089348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.dsdb !== 'undefined')){
} else {
athens.db.dsdb = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
}
posh.reagent.posh_BANG_(athens.db.dsdb);
athens.db.e_by_av = (function athens$db$e_by_av(a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
athens.db.v_by_ea = (function athens$db$v_by_ea(e,a){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a)));
});
athens.db.rules = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"plus-after","plus-after",1506327611,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"minus-after","minus-after",-1894916029,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?sib-e","?sib-e",347761702,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?sib-e","?sib-e",347761702,null)], null)], null)], null);
athens.db.inc_after = (function athens$db$inc_after(eid,order){
var G__46469 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__46470 = cljs.core.deref(athens.db.dsdb);
var G__46471 = athens.db.rules;
var G__46472 = eid;
var G__46473 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__46469,G__46470,G__46471,G__46472,G__46473) : datascript.core.q.call(null,G__46469,G__46470,G__46471,G__46472,G__46473));
});
athens.db.dec_after = (function athens$db$dec_after(eid,order){
var G__46474 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__46475 = cljs.core.deref(athens.db.dsdb);
var G__46476 = athens.db.rules;
var G__46477 = eid;
var G__46478 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__46474,G__46475,G__46476,G__46477,G__46478) : datascript.core.q.call(null,G__46474,G__46475,G__46476,G__46477,G__46478));
});
athens.db.plus_after = (function athens$db$plus_after(eid,order,x){
var G__46479 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"plus-after","plus-after",1506327611,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null))], null);
var G__46480 = cljs.core.deref(athens.db.dsdb);
var G__46481 = athens.db.rules;
var G__46482 = eid;
var G__46483 = order;
var G__46484 = x;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__46479,G__46480,G__46481,G__46482,G__46483,G__46484) : datascript.core.q.call(null,G__46479,G__46480,G__46481,G__46482,G__46483,G__46484));
});
athens.db.minus_after = (function athens$db$minus_after(eid,order,x){
var G__46485 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"minus-after","minus-after",-1894916029,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null))], null);
var G__46486 = cljs.core.deref(athens.db.dsdb);
var G__46487 = athens.db.rules;
var G__46488 = eid;
var G__46489 = order;
var G__46490 = x;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__46485,G__46486,G__46487,G__46488,G__46489,G__46490) : datascript.core.q.call(null,G__46485,G__46486,G__46487,G__46488,G__46489,G__46490));
});
athens.db.not_contains_QMARK_ = (function athens$db$not_contains_QMARK_(coll,v){
return (!(cljs.core.contains_QMARK_(coll,v)));
});
athens.db.last_child_QMARK_ = (function athens$db$last_child_QMARK_(uid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,cljs.core.first(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__46491 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?sib-o","?sib-o",543429366,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?sib-o","?sib-o",543429366,null)], null)], null);
var G__46492 = cljs.core.deref(athens.db.dsdb);
var G__46493 = athens.db.rules;
var G__46494 = uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__46491,G__46492,G__46493,G__46494) : datascript.core.q.call(null,G__46491,G__46492,G__46493,G__46494));
})()))));
});
athens.db.sort_block_children = (function athens$db$sort_block_children(block){
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5733__auto__){
var children = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.sort_block_children,children))));
} else {
return block;
}
});
athens.db.block_document_pull_vector = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null);
athens.db.node_document_pull_vector = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(athens.db.block_document_pull_vector,new cljs.core.Keyword("node","title","node/title",628940777),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], 0));
athens.db.get_block_document = (function athens$db$get_block_document(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,athens.db.block_document_pull_vector,id)));
});
athens.db.get_node_document = (function athens$db$get_node_document(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,athens.db.node_document_pull_vector,id)));
});
/**
 * Copy REPL output to athens-datoms.cljs
 */
athens.db.get_athens_datoms = (function athens$db$get_athens_datoms(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46495_SHARP_){
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__46495_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__46495_SHARP_,new cljs.core.Keyword("block","_refs","block/_refs",830218531))))));
}),athens.db.node_document_pull_vector),id)));
});
/**
 * Normalize path from deeply nested block to root node.
 */
athens.db.shape_parent_query = (function athens$db$shape_parent_query(pull_results){
return cljs.core.vec(cljs.core.reverse(cljs.core.rest((function (){var b = pull_results;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__46580 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__46581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__46580;
res = G__46581;
continue;
}
break;
}
})())));
});
athens.db.get_parents_recursively = (function athens$db$get_parents_recursively(id){
return athens.db.shape_parent_query(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),id)));
});
athens.db.get_block = (function athens$db$get_block(id){
return cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null),new cljs.core.Keyword("block","open","block/open",-1875254829)], null),id));
});
athens.db.get_parent = (function athens$db$get_parent(id){
return athens.db.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__46498 = cljs.core.deref(athens.db.dsdb);
var G__46499 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__46498,G__46499) : datascript.core.entity.call(null,G__46498,G__46499));
})()))));
});
athens.db.get_older_sib = (function athens$db$get_older_sib(uid){
var sib_uid = (function (){var G__46501 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?target-e","?target-e",1520876161,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?target-e","?target-e",1520876161,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?target-o","?target-o",1441812721,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?target-o","?target-o",1441812721,null)),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__46502 = cljs.core.deref(athens.db.dsdb);
var G__46503 = athens.db.rules;
var G__46504 = uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__46501,G__46502,G__46503,G__46504) : datascript.core.q.call(null,G__46501,G__46502,G__46503,G__46504));
})();
var older_sib = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),sib_uid], null));
return older_sib;
});
/**
 * Given a coll of uids, determine if uids are all direct children of the same parent.
 */
athens.db.same_parent_QMARK_ = (function athens$db$same_parent_QMARK_(uids){
var parents = (function (){var G__46505 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?parents","?parents",-1900044894,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uids","?uids",-1185399981,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uids","?uids",-1185399981,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parents","?parents",-1900044894,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__46506 = cljs.core.deref(athens.db.dsdb);
var G__46507 = uids;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__46505,G__46506,G__46507) : datascript.core.q.call(null,G__46505,G__46506,G__46507));
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parents),(1));
});
athens.db.deepest_child_block = (function athens$db$deepest_child_block(id){
var document = athens.db.sort_block_children((function (){var G__46508 = cljs.core.deref(athens.db.dsdb);
var G__46509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__46510 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__46508,G__46509,G__46510) : datascript.core.pull.call(null,G__46508,G__46509,G__46510));
})());
var block = document;
while(true){
var map__46513 = block;
var map__46513__$1 = (((((!((map__46513 == null))))?(((((map__46513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46513):map__46513);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46513__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var n = cljs.core.count(children);
if((n === (0))){
return block;
} else {
var G__46589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,(n - (1)));
block = G__46589;
continue;
}
break;
}
});
/**
 * Get list of children UIDs for given block ID (including the root block's UID)
 */
athens.db.get_children_recursively = (function athens$db$get_children_recursively(uid){
var temp__5735__auto__ = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid);
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.tree_seq(new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","children","block/children",-1040716209),(function (){var G__46515 = cljs.core.deref(athens.db.dsdb);
var G__46516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__46517 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__46515,G__46516,G__46517) : datascript.core.pull.call(null,G__46515,G__46516,G__46517));
})()));
} else {
return null;
}
});
/**
 * Retract all blocks of a page, excluding the page. Used to reset athens/Welcome page.
 *   Page is excluded because block/uid will be generated by walk-string if [[athens/Welcome]] doesn't already exist.
 */
athens.db.retract_page_recursively = (function athens$db$retract_page_recursively(title){
var eid = athens.db.e_by_av(new cljs.core.Keyword("node","title","node/title",628940777),title);
var uid = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.next(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)], null);
}),athens.db.get_children_recursively(uid)));
});
/**
 * Retract all blocks of a page, including the page.
 */
athens.db.retract_uid_recursively = (function athens$db$retract_uid_recursively(uid){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)], null);
}),athens.db.get_children_recursively(uid));
});
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.db.re_case_insensitive = (function athens$db$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",athens.util.escape_str(query)].join(''));
});
athens.db.search_exact_node_title = (function athens$db$search_exact_node_title(query){
var G__46518 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null)], null);
var G__46519 = cljs.core.deref(athens.db.dsdb);
var G__46520 = query;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__46518,G__46519,G__46520) : datascript.core.q.call(null,G__46518,G__46519,G__46520));
});
athens.db.search_in_node_title = (function athens$db$search_in_node_title(var_args){
var G__46522 = arguments.length;
switch (G__46522) {
case 1:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$1 = (function (query){
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3(query,(20),false);
}));

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$2 = (function (query,n){
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3(query,n,false);
}));

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3 = (function (query,n,ignore_dup){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.PersistentVector.EMPTY;
} else {
var results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,(function (){var G__46523 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?query","?query",891204063,null))], null)], null);
var G__46524 = cljs.core.deref(athens.db.dsdb);
var G__46525 = athens.db.re_case_insensitive(query);
var G__46526 = (cljs.core.truth_(ignore_dup)?query:null);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__46523,G__46524,G__46525,G__46526) : datascript.core.q.call(null,G__46523,G__46524,G__46525,G__46526));
})());
return results;
}
}));

(athens.db.search_in_node_title.cljs$lang$maxFixedArity = 3);

athens.db.get_root_parent_node = (function athens$db$get_root_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
var G__46592 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__46592;
continue;
}
break;
}
});
athens.db.search_in_block_content = (function athens$db$search_in_block_content(var_args){
var G__46529 = arguments.length;
switch (G__46529) {
case 1:
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$1 = (function (query){
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2(query,(20));
}));

(athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2 = (function (query,n){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46527_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46527_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.get_root_parent_node,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,(function (){var G__46530 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__46531 = cljs.core.deref(athens.db.dsdb);
var G__46532 = athens.db.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__46530,G__46531,G__46532) : datascript.core.q.call(null,G__46530,G__46531,G__46532));
})())));
}
}));

(athens.db.search_in_block_content.cljs$lang$maxFixedArity = 2);

/**
 * Find sibling that has order+n of current block.
 *   Negative n means previous sibling.
 *   Positive n means next sibling.
 */
athens.db.nth_sibling = (function athens$db$nth_sibling(uid,n){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__46535 = block;
var map__46535__$1 = (((((!((map__46535 == null))))?(((((map__46535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46535):map__46535);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46535__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var find_order = (n + order);
var G__46537 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?curr-uid","?curr-uid",99740245,null),new cljs.core.Symbol(null,"?find-order","?find-order",-1910843640,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?curr-uid","?curr-uid",99740245,null),new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?find-order","?find-order",-1910843640,null)], null)], null);
var G__46538 = cljs.core.deref(athens.db.dsdb);
var G__46539 = athens.db.rules;
var G__46540 = uid;
var G__46541 = find_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__46537,G__46538,G__46539,G__46540,G__46541) : datascript.core.q.call(null,G__46537,G__46538,G__46539,G__46540,G__46541));
});
/**
 * If order 0, go to parent.
 * If order n but block is closed, go to prev sibling.
 * If order n and block is OPEN, go to prev sibling's deepest child.
 */
athens.db.prev_block_uid = (function athens$db$prev_block_uid(uid){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var prev_sibling = athens.db.nth_sibling(uid,(-1));
var map__46542 = prev_sibling;
var map__46542__$1 = (((((!((map__46542 == null))))?(((((map__46542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46542):map__46542);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46542__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46542__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var prev_block = (((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) === (0)))?parent:((open === false)?prev_sibling:((open === true)?athens.db.deepest_child_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)):null)));
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(prev_block);
});
/**
 * Search for next sibling. If not there (i.e. is last child), find sibling of parent.
 *   If parent is root, go to next sibling.
 */
athens.db.next_sibling_recursively = (function athens$db$next_sibling_recursively(uid){
var uid__$1 = uid;
while(true){
var sib = athens.db.nth_sibling(uid__$1,(1));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var map__46544 = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var map__46544__$1 = (((((!((map__46544 == null))))?(((((map__46544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46544):map__46544);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46544__$1,new cljs.core.Keyword("node","title","node/title",628940777));
if(cljs.core.truth_((function (){var or__4126__auto__ = sib;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return node;
}
}
})())){
return sib;
} else {
var G__46594 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
uid__$1 = G__46594;
continue;
}
break;
}
});
/**
 * 1-arity:
 *  if open and children, go to child 0
 *  else recursively find next sibling of parent
 *   2-arity:
 *  used for multi-block-selection; ignores child blocks
 */
athens.db.next_block_uid = (function athens$db$next_block_uid(var_args){
var G__46547 = arguments.length;
switch (G__46547) {
case 1:
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
var block = athens.db.sort_block_children(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)));
var map__46548 = block;
var map__46548__$1 = (((((!((map__46548 == null))))?(((((map__46548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46548):map__46548);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46548__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46548__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46548__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var next_block_recursive = athens.db.next_sibling_recursively(uid);
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = open;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return node;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return children;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children));
} else {
if(cljs.core.truth_(next_block_recursive)){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block_recursive);
} else {
return null;
}
}
}));

(athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2 = (function (uid,selection_QMARK_){
if(cljs.core.truth_(selection_QMARK_)){
var next_block_recursive = athens.db.next_sibling_recursively(uid);
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block_recursive);
} else {
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1(uid);
}
}));

(athens.db.next_block_uid.cljs$lang$maxFixedArity = 2);

if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.history !== 'undefined')){
} else {
athens.db.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
athens.db.history_limit = (10);
athens.db.drop_tail = (function athens$db$drop_tail(xs,pred){
var acc = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first(xs__$1);
if((x == null)){
return acc;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
} else {
var G__46596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
var G__46597 = cljs.core.next(xs__$1);
acc = G__46596;
xs__$1 = G__46597;
continue;

}
}
break;
}
});
athens.db.trim_head = (function athens$db$trim_head(xs,n){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - n),xs));
});
athens.db.find_prev = (function athens$db$find_prev(xs,pred){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__46551_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__46551_SHARP_) : pred.call(null,p1__46551_SHARP_)));
}),xs));
});
athens.db.find_next = (function athens$db$find_next(xs,pred){
return cljs.core.fnext(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__46552_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__46552_SHARP_) : pred.call(null,p1__46552_SHARP_)));
}),xs));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
var map__46554 = tx_report;
var map__46554__$1 = (((((!((map__46554 == null))))?(((((map__46554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46554):map__46554);
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46554__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46554__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
if(cljs.core.truth_((function (){var and__4115__auto__ = db_before;
if(cljs.core.truth_(and__4115__auto__)){
return db_after;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.history,(function (h){
return athens.db.trim_head(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(athens.db.drop_tail(h,(function (p1__46553_SHARP_){
return (p1__46553_SHARP_ === db_before);
})),db_after),(10));
}));
} else {
return null;
}
}));
athens.db.get_ref_ids = (function athens$db$get_ref_ids(pattern){
return cljs.core.deref(posh.reagent.q(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null),athens.db.dsdb,pattern));
});
athens.db.merge_parents_and_block = (function athens$db$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.db.group_by_parent = (function athens$db$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.db.get_data = (function athens$db$get_data(pattern){
return cljs.core.seq(athens.db.group_by_parent(athens.db.merge_parents_and_block(athens.db.get_ref_ids(pattern))));
});
/**
 * For node-page references UI.
 */
athens.db.get_linked_references = (function athens$db$get_linked_references(title){
return cljs.core.vec(athens.db.group_by_parent(athens.db.merge_parents_and_block(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null))))))));
});
/**
 * For block-page references UI.
 */
athens.db.get_linked_block_references = (function athens$db$get_linked_block_references(block){
return cljs.core.vec(athens.db.group_by_parent(athens.db.merge_parents_and_block(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block)))));
});
/**
 * For node-page references UI.
 */
athens.db.get_unlinked_references = (function athens$db$get_unlinked_references(title){
return athens.db.get_data(athens.patterns.unlinked(title));
});
athens.db.linked_refs_count = (function athens$db$linked_refs_count(title){
var G__46557 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null)], null);
var G__46558 = cljs.core.deref(athens.db.dsdb);
var G__46559 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__46557,G__46558,G__46559) : datascript.core.q.call(null,G__46557,G__46558,G__46559));
});
/**
 * For a given title, unlinks [[brackets]], #[[brackets]], and #brackets.
 */
athens.db.replace_linked_refs = (function athens$db$replace_linked_refs(title){
var pattern = athens.patterns.linked(title);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
var new_str = clojure.string.replace(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x),pattern,title);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("block","string","block/string",-2066596447),new_str);
}),(function (){var G__46560 = cljs.core.deref(athens.db.dsdb);
var G__46561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__46562 = athens.db.get_ref_ids(pattern);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__46560,G__46561,G__46562) : datascript.core.pull_many.call(null,G__46560,G__46561,G__46562));
})());
});
athens.db.pull_nil = (function athens$db$pull_nil(db,selector,id){
try{return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,selector,id) : datascript.core.pull.call(null,db,selector,id));
}catch (e46563){if((e46563 instanceof Error)){
var _e = e46563;
return null;
} else {
throw e46563;

}
}});
/**
 * uid -> Current block
 * state -> Look at state atom in block-el
 */
athens.db.transact_state_for_uid = (function athens$db$transact_state_for_uid(uid,state){
var map__46564 = cljs.core.deref(state);
var map__46564__$1 = (((((!((map__46564 == null))))?(((((map__46564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46564):map__46564);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,new cljs.core.Keyword("string","local","string/local",-578009907));
var previous = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,new cljs.core.Keyword("string","previous","string/previous",1734905219));
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid);
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(local,previous))?eid:false))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","previous","string/previous",1734905219),local);

var new_block_string = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),local], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block_string], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null));
} else {
return null;
}
});

//# sourceMappingURL=athens.db.js.map

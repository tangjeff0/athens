goog.provide('zprint.config');
/**
 * Return version of this program.
 */
zprint.config.about = (function zprint$config$about(){
return "zprint-0.5.1";
});
zprint.config.zprintrc = ".zprintrc";
zprint.config.zprintedn = ".zprint.edn";
zprint.config.zprint_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477)], null);
zprint.config.explain_hide_keys = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"comma?","comma?",1532168963)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514)], null);
zprint.config.zfnstyle = cljs.core.PersistentHashMap.fromArrays(["map","binding","cond->","as->","with-local-vars","loop","defn","=","some->","if-not","when-first","when-some","defcc","fdef","if-let","doseq","try","s/fdef","with-redefs","matchm","defc","defcs","fn","for","defrecord","with-meta","catch","defexpect","with-redefs-fn","defui","s/or","swap!","apply",":require","s/def","cond","if","let","defproject","reify","defmulti","when-let",":import","not=","with-bindings","doto","cond-let","if-some","extend-protocol","or","case","alt","remove","mapcat","with-open","with-bindings*","filter","condp","when","s/and","->","and","defmethod","do","some->>","fn*","interpose","deftest","match","extend","->>","defprotocol","extend-type","defn-","filterv","def","reduce","dotimes","proxy","assoc-in","assoc","mapv","when-not","cat","letfn","ns","deftype","defmacro"],[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(2)], null)], null)], null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(2)], null)], null)], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null)], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564)]);
zprint.config.default_zprint_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"old?","old?",-1129887872),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435),new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"promise","promise",1767129287),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color?","color?",-1891974356),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"search-config?","search-config?",-932850546),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936),new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541),new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514),new cljs.core.Keyword(null,"style-map","style-map",1488693527),new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"atom","atom",-397043653),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812),new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842)],[true,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),null,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),null,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),null,new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),null], null)], null),(0),(1000),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),1.1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590),1.5,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(10),new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987),(-1),new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992),true], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),null,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null], null), null),(300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),"##",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),(1),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),2.0,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),(10),new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flow?","flow?",96929057),true,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),true,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),(1),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),1000.0,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["static",null], null), null),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),2.0,null,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),false,null,(80),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449)])], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647)]),false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zloc?","zloc?",-1457193855),false,new cljs.core.Keyword(null,"surround","surround",2016177296),null], null),new cljs.core.Keyword(null,"lines","lines",-700165781),null,new cljs.core.Keyword(null,"elide","elide",-1239101386),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),true,false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"binding?","binding?",-1071925644),new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842)],[true,(1),false,null,true,true,false,null,null,false]),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hex?","hex?",890937870),false,new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"object?","object?",-1313059217),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),false,null,null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring?","docstring?",-1820749410),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),2.0,false,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"pair-hang?","pair-hang?",-492564664),new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086)],[(100),null,true,(2),2.0,true,(4),false,0.5,(1),true,false,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364)]),null,(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660),true,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count?","count?",-122202128),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true,new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true,new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575),new cljs.core.Keyword(null,"align","align",1964212802)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interpose","interpose",576140629),null,new cljs.core.Keyword(null,"left-space","left-space",457574289),new cljs.core.Keyword(null,"drop","drop",364481611)], null),false,false,null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pair-nl","pair-nl",-252106299),new cljs.core.Keyword(null,"community","community",1600340198),new cljs.core.Keyword(null,"extend-nl","extend-nl",-757494042),new cljs.core.Keyword(null,"no-hang","no-hang",-667516119),new cljs.core.Keyword(null,"keyword-respect-nl","keyword-respect-nl",1810746249),new cljs.core.Keyword(null,"binding-nl","binding-nl",-1642873971),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"map-nl","map-nl",727129906),new cljs.core.Keyword(null,"indent-only","indent-only",-1042719117),new cljs.core.Keyword(null,"sort-dependencies","sort-dependencies",-1642412524),new cljs.core.Keyword(null,"all-hang","all-hang",-1243746923),new cljs.core.Keyword(null,"justified","justified",-547284074),new cljs.core.Keyword(null,"how-to-ns","how-to-ns",366186553),new cljs.core.Keyword(null,"respect-nl","respect-nl",-931658593)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.PersistentHashMap.fromArrays(["map","with-meta","apply","remove","filter","filterv","reduce","assoc","mapv"],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flow?","flow?",96929057),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),(function (p1__30168_SHARP_,p2__30167_SHARP_){
var k_QMARK_ = (p2__30167_SHARP_ instanceof cljs.core.Keyword);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_QMARK_,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(p1__30168_SHARP_)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),k_QMARK_], null)], null);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function (opts,n,exprs){
var hiccup_QMARK_ = (((n >= (2))) && ((((cljs.core.first(exprs) instanceof cljs.core.Keyword)) || ((cljs.core.first(exprs) instanceof cljs.core.Symbol)))) && (cljs.core.map_QMARK_(cljs.core.second(exprs))));
if(((hiccup_QMARK_) && (cljs.core.not(new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(opts)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718)], null)], null);
} else {
if(cljs.core.truth_((((!(hiccup_QMARK_)))?new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(opts)):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784),null], null)], null);
} else {
return null;

}
}
}),new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null),new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Symbol(null,"defproject","defproject",-1469617526,null),zprint.rewrite.sort_dependencies], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, ["ns",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 2, [":import",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null)], null),":require",new cljs.core.Keyword(null,"flow","flow",590489032)], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),true], null)], null)]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gt3-force-nl","gt3-force-nl",-1297517534),null,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null], null), null),null,(1000),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"pair-hang?","pair-hang?",-492564664),new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086)],[(100),null,true,(2),2.0,true,(4),false,0.5,(1),true,false,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364)]),null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),false,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false,new cljs.core.Keyword(null,"sort?","sort?",-567661924),true,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),false,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),zprint.config.zfnstyle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expand?","expand?",-1744295862),true,new cljs.core.Keyword(null,"size","size",1098693007),(8)], null),(4),false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[false,null,false,null,(2),true,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),1000.0,null,null,false,null,null,null,(1),false,(-1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),null,true,true,false,false,true]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[null,(2),null,1000.0,true,null,(1),true,null]),false,false]);
zprint.config.no_color_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]);
zprint.config.configured_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_sequence = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
/**
 * Take two arguments of things to merge and figure it out.
 *   Works for sets too.
 */
zprint.config.merge_with_fn = (function zprint$config$merge_with_fn(val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(zprint.config.merge_with_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
if(((cljs.core.set_QMARK_(val_in_result)) && (cljs.core.set_QMARK_(val_in_latter)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,val_in_result,cljs.core.seq(val_in_latter));
} else {
return val_in_latter;

}
}
});
/**
 * Do a merge of maps all the way down.
 */
zprint.config.merge_deep = (function zprint$config$merge_deep(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30331 = arguments.length;
var i__4737__auto___30332 = (0);
while(true){
if((i__4737__auto___30332 < len__4736__auto___30331)){
args__4742__auto__.push((arguments[i__4737__auto___30332]));

var G__30333 = (i__4737__auto___30332 + (1));
i__4737__auto___30332 = G__30333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,zprint.config.merge_with_fn,maps);
}));

(zprint.config.merge_deep.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.config.merge_deep.cljs$lang$applyTo = (function (seq30169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30169));
}));

/**
 * Take two arguments of things to merge and figure it out.
 */
zprint.config.merge_with_fn_doc = (function zprint$config$merge_with_fn_doc(doc_string,val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),doc_string,new cljs.core.Keyword(null,"value","value",305978217),val_in_latter], null);
}
});
/**
 * Do a merge of maps all the way down, keeping track of where every
 *   value came from.
 */
zprint.config.merge_deep_doc = (function zprint$config$merge_deep_doc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30334 = arguments.length;
var i__4737__auto___30335 = (0);
while(true){
if((i__4737__auto___30335 < len__4736__auto___30334)){
args__4742__auto__.push((arguments[i__4737__auto___30335]));

var G__30337 = (i__4737__auto___30335 + (1));
i__4737__auto___30335 = G__30337;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic = (function (doc_string,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),maps);
}));

(zprint.config.merge_deep_doc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.config.merge_deep_doc.cljs$lang$applyTo = (function (seq30170){
var G__30171 = cljs.core.first(seq30170);
var seq30170__$1 = cljs.core.next(seq30170);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30171,seq30170__$1);
}));

/**
 * Remove a single key from a map or remove a series of
 *   keys from an internal map.
 */
zprint.config.remove_key = (function zprint$config$remove_key(m,k){
if(cljs.core.coll_QMARK_(k)){
var map_key = cljs.core.first(k);
var keys_to_remove = cljs.core.next(k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,map_key,(function (){var G__30172 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(map_key) : m.call(null,map_key));
var G__30173 = keys_to_remove;
return (zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2 ? zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2(G__30172,G__30173) : zprint.config.remove_keys.call(null,G__30172,G__30173));
})());
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Remove keys from a map at multiple levels.
 */
zprint.config.remove_keys = (function zprint$config$remove_keys(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30174_SHARP_,p2__30175_SHARP_){
return zprint.config.remove_key(p1__30174_SHARP_,p2__30175_SHARP_);
}),m,ks);
});
/**
 * Get the key seq for every terminal element in a map.
 */
zprint.config.key_seq = (function zprint$config$key_seq(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__30177){
var vec__30178 = p__30177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(1),null);
var ks = (zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1(v) : zprint.config.key_seq.call(null,v));
if(cljs.core.truth_(ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30176_SHARP_){
return cljs.core.cons(k,((cljs.core.coll_QMARK_(p1__30176_SHARP_))?p1__30176_SHARP_:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30176_SHARP_], null)));
}),ks);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
} else {
return null;
}
});
/**
 * Given a key sequence and two maps, remove the elements of the set at
 *   the key sequence in the second map from set in the first map.
 */
zprint.config.remove_elements = (function zprint$config$remove_elements(map_remove,map_orig,ks){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(map_orig,ks,clojure.set.difference,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(map_remove,ks));
});
/**
 * Take two maps, and remove all of the elemnts in the second maps sets
 *   from equivalent places in the first map.
 */
zprint.config.remove_set_elements = (function zprint$config$remove_set_elements(map_orig,map_remove){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.remove_elements,map_remove),map_orig,zprint.config.key_seq(map_remove));
});
/**
 * Take an options map, and remove the set elements that are at the :remove
 *   key, and also remove the :remove key.
 */
zprint.config.perform_remove = (function zprint$config$perform_remove(doc_string,doc_map,options,new_options){
var map_remove = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(new_options);
var options_out = zprint.config.remove_set_elements(options,map_remove);
var remove_ks_seq = zprint.config.key_seq(map_remove);
var new_options_out = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_options,new cljs.core.Keyword(null,"remove","remove",-131428414));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [options_out,new_options_out,(zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4 ? zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,remove_ks_seq,options_out) : zprint.config.diff_deep_ks.call(null,doc_string,doc_map,remove_ks_seq,options_out))], null);
});
/**
 * Given a function and map and a key, replace the value with 
 *   (f leaf) or (map-leaves f m).
 */
zprint.config.map_leaf = (function zprint$config$map_leaf(f,m,k){
var v = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2 ? zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2(f,v) : zprint.config.map_leaves.call(null,f,v)));
}
});
/**
 * Return a map of the same shape but where every leaf value
 *   (i.e., not map value) has been replaced by the (f leaf-value).
 */
zprint.config.map_leaves = (function zprint$config$map_leaves(f,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.map_leaf,f),m,cljs.core.keys(m));
});
/**
 * Create a map with a :value and :set-by elements.
 */
zprint.config.value_set_by = (function zprint$config$value_set_by(set_by,_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-by","set-by",-1411360264),set_by,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
/**
 * Update an existing doc-map with labels of everything that shows up
 *   in the ks-seq.
 */
zprint.config.diff_deep_ks = (function zprint$config$diff_deep_ks(doc_string,doc_map,changed_key_seq,existing){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30181_SHARP_,p2__30182_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__30181_SHARP_,p2__30182_SHARP_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.value_set_by,doc_string),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing,p2__30182_SHARP_));
}),doc_map,changed_key_seq);
});
/**
 * Diff two maps.
 */
zprint.config.diff_map = (function zprint$config$diff_map(before,after){
return cljs.core.second(clojure.data.diff(before,after));
});
/**
 * Return current explained-seqence and add one to it.
 */
zprint.config.inc_explained_sequence = (function zprint$config$inc_explained_sequence(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zprint.config.explained_sequence,cljs.core.inc);
});
/**
 * Do a simple dissoc-in for two levels.  Does not remove the
 *   second map if it is empty.
 */
zprint.config.dissoc_two = (function zprint$config$dissoc_two(m,p__30183){
var vec__30184 = p__30183;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30184,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30184,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k1),k2));
});
/**
 * Take an updated-map and generate calculated options
 *   from it.  Takes the updated-map and further updates
 *   it, being smart about things that were set to nil.
 */
zprint.config.add_calculated_options = (function zprint$config$add_calculated_options(updated_map){
var G__30187 = updated_map;
var G__30187__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__30187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__30187);
var G__30187__$2 = (((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null))))))?zprint.config.dissoc_two(G__30187__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null)):G__30187__$1);
var G__30187__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__30187__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__30187__$2);
if((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)))))){
return zprint.config.dissoc_two(G__30187__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null));
} else {
return G__30187__$3;
}
});
/**
 * Replace options to be used on every call.  You must have validated
 *   these options already!
 */
zprint.config.reset_options_BANG_ = (function zprint$config$reset_options_BANG_(var_args){
var G__30189 = arguments.length;
switch (G__30189) {
case 2:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (updated_map,doc_map){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.add_calculated_options(updated_map));

if(cljs.core.truth_(doc_map)){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
} else {
return null;
}
}));

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (updated_map){
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,null);
}));

(zprint.config.reset_options_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Remove any previously set options.
 */
zprint.config.reset_default_options_BANG_ = (function zprint$config$reset_default_options_BANG_(){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.default_zprint_options);

return cljs.core.reset_BANG_(zprint.config.explained_options,zprint.config.default_zprint_options);
});
/**
 * Return any previously set options.
 */
zprint.config.get_options = (function zprint$config$get_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.configured_options),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Return the base default options.
 */
zprint.config.get_default_options = (function zprint$config$get_default_options(){
return zprint.config.default_zprint_options;
});
/**
 * Set options to be used on every call.
 */
zprint.config.set_explained_options_BANG_ = (function zprint$config$set_explained_options_BANG_(doc_map){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_options = (function zprint$config$get_explained_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zprint.config.remove_keys(cljs.core.deref(zprint.config.explained_options),zprint.config.explain_hide_keys),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Return any previously set doc-map complete.
 */
zprint.config.get_explained_all_options = (function zprint$config$get_explained_all_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.explained_options),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about());
});
/**
 * Return the base explained options, matches get-default-options
 */
zprint.config.get_default_explained_all_options = (function zprint$config$get_default_explained_all_options(){
return zprint.config.default_zprint_options;
});
/**
 * Validate the new options, and update both the saved options
 *   and the doc-map as well.  Will throw an exceptino for errors.
 */
zprint.config.internal_set_options_BANG_ = (function zprint$config$internal_set_options_BANG_(doc_string,doc_map,existing_options,new_options){
var vec__30190 = (zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4 ? zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,existing_options,new_options) : zprint.config.config_and_validate.call(null,doc_string,doc_map,existing_options,new_options));
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
var error_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(2),null);
if(cljs.core.truth_(error_vec)){
throw (new Error(["set-options! for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," found these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,new_doc_map);

return null;
}
});
zprint.config.is_in_repl_QMARK_ = (function zprint$config$is_in_repl_QMARK_(){
return null;
});
/**
 * Do external configuration regardless of whether or not it has
 *   already been done, replacing any internal configuration.  Returns
 *   nil if successful, a vector of errors if not. 
 */
zprint.config.config_configure_all_BANG_ = (function zprint$config$config_configure_all_BANG_(){
var vec__30193 = (zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$2 ? zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$2(null,null) : zprint.config.config_and_validate_all.call(null,null,null));
var zprint_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30193,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30193,(1),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30193,(2),null);
if(cljs.core.truth_(errors)){
return errors;
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(zprint_options,doc_map);

var G__30196_30356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configured?","configured?",642178633),true], null);
var G__30197_30357 = "internal";
(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 ? zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2(G__30196_30356,G__30197_30357) : zprint.config.config_set_options_BANG_.call(null,G__30196_30356,G__30197_30357));

if(cljs.core.truth_(zprint.config.is_in_repl_QMARK_())){
zprint.config.internal_set_options_BANG_("REPL execution default",zprint.config.get_explained_all_options(),zprint.config.get_options(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),true], null));
} else {
}

return null;
}
});
/**
 * Add some options to the current options, checking to make
 *   sure that they are correct.
 */
zprint.config.config_set_options_BANG_ = (function zprint$config$config_set_options_BANG_(var_args){
var G__30199 = arguments.length;
switch (G__30199) {
case 2:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
if(((cljs.core.not(new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))) && (cljs.core.not(new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(new_options))))){
zprint.config.config_configure_all_BANG_();
} else {
}

return zprint.config.internal_set_options_BANG_(doc_str,zprint.config.get_explained_all_options(),zprint.config.get_options(),new_options);
}));

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2(new_options,["repl or api call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.config.inc_explained_sequence())].join(''));
}));

(zprint.config.config_set_options_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Given a map, build a set of key-seqs that are in the map.  This
 *   will leave out the :fn-map elements, and possibly do other special
 *   processing.
 */
zprint.config.build_key_seq_set = (function zprint$config$build_key_seq_set(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30200_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__30200_SHARP_),new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,zprint.config.key_seq(options))));
});
zprint.config.allowed_key_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Generate the allowed key-set and save it.
 */
zprint.config.set_allowed_key_set_BANG_ = (function zprint$config$set_allowed_key_set_BANG_(){
return cljs.core.reset_BANG_(zprint.config.allowed_key_set,zprint.config.build_key_seq_set(zprint.config.get_options()));
});
/**
 * Take an options map, and validate that all of the keys in the
 *   map are acceptable.  This is largely a comparison with the keys
 *   in the default options map, but includes special processing for
 *   the :fn-map, where new keys are allowed and so they are not checked.
 *   Returns nil for success and a sequence of invalid keys if failure.
 */
zprint.config.validate_incoming_keys = (function zprint$config$validate_incoming_keys(options){
var incoming_key_seq_set = zprint.config.build_key_seq_set(options);
var wrong_key_seqs = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(incoming_key_seq_set,cljs.core.deref(zprint.config.allowed_key_set));
return cljs.core.seq(wrong_key_seqs);
});
/**
 * If the sequence is empty, then return nil, else return the sequence.
 */
zprint.config.empty_to_nil = (function zprint$config$empty_to_nil(empty_seq){
if(cljs.core.empty_QMARK_(empty_seq)){
return null;
} else {
return empty_seq;
}
});
/**
 * Take an options map, and return a vector containing an options map 
 *   with all of the option-maps removed from the fn-map, and a seq of 
 *   pairs of function names and the option-maps associated with them.
 */
zprint.config.separate_fn_map_options = (function zprint$config$separate_fn_map_options(options){
var fn_map = new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options);
var fns_w_options = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30201_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.second(p1__30201_SHARP_));
}),fn_map);
if(cljs.core.empty_QMARK_(fns_w_options)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,null], null);
} else {
var new_fn_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,fn_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30202_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__30202_SHARP_),cljs.core.first(cljs.core.second(p1__30202_SHARP_))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fns_w_options], 0)));
var fn_option_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30203_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__30203_SHARP_),cljs.core.second(cljs.core.second(p1__30203_SHARP_))],null));
}),fns_w_options);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new_fn_map),fn_option_pairs], null);
}
});
/**
 * Given a seq of fn-option pairs, validate the options maps in the
 *   pairs.  Returns nil for success and an error string with any errors.
 */
zprint.config.validate_fn_option_pairs = (function zprint$config$validate_fn_option_pairs(fn_option_pairs){
if((!(cljs.core.empty_QMARK_(fn_option_pairs)))){
var error_seq = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30204_SHARP_){
var G__30205 = cljs.core.second(p1__30204_SHARP_);
var G__30206 = [":fn-map, in the options map assocated with the function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__30204_SHARP_))].join('');
return (zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2 ? zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(G__30205,G__30206) : zprint.config.validate_options.call(null,G__30205,G__30206));
}),fn_option_pairs);
var error_seq__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,error_seq);
var error_string = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",error_seq__$1));
if(cljs.core.empty_QMARK_(error_string)){
return null;
} else {
return error_string;
}
} else {
return null;
}
});
/**
 * Validate an options map, source-str is a descriptive phrase 
 *   which will be included in the errors (if any). Returns nil 
 *   for success, a string with error(s) if not.
 */
zprint.config.validate_options = (function zprint$config$validate_options(var_args){
var G__30209 = arguments.length;
switch (G__30209) {
case 2:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2 = (function (options,source_str){
var vec__30210 = zprint.config.separate_fn_map_options(options);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(0),null);
var fn_option_pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(1),null);
if(cljs.core.truth_(options__$1)){
return zprint.config.empty_to_nil(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30207_SHARP_){
return (((p1__30207_SHARP_ == null)) || (cljs.core.empty_QMARK_(p1__30207_SHARP_)));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,zprint.spec.validate_basic.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"style-map","style-map",1488693527)),source_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fn_option_pairs)?zprint.config.validate_fn_option_pairs(fn_option_pairs):null),(cljs.core.truth_(new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(options__$1))?(zprint.config.validate_style_map.cljs$core$IFn$_invoke$arity$1 ? zprint.config.validate_style_map.cljs$core$IFn$_invoke$arity$1(options__$1) : zprint.config.validate_style_map.call(null,options__$1)):null)], 0))))));
} else {
return null;
}
}));

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1 = (function (options){
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(options,null);
}));

(zprint.config.validate_options.cljs$lang$maxFixedArity = 2);

/**
 * Given a new style definition, validate that the new style contains
 *   an acceptable options map.  Returns nil for success, a string with
 *   error information if not.
 */
zprint.config.validate_style = (function zprint$config$validate_style(style_name,style_options){
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(style_options,["style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''));
});
/**
 * Given an options map, validate all of the styles in the style-map.
 *   Return an error string with any errors.
 */
zprint.config.validate_style_map = (function zprint$config$validate_style_map(options){
var error_seq = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30213_SHARP_){
return zprint.config.validate_style(cljs.core.first(p1__30213_SHARP_),cljs.core.second(p1__30213_SHARP_));
}),new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(options));
var error_seq__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,error_seq);
var error_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",error_seq__$1));
if(cljs.core.empty_QMARK_(error_str)){
return null;
} else {
return error_str;
}
});
/**
 * Take a [doc-string [existing-map doc-map error-str] style-name]
 *   and produce a new [existing-map doc-map error-str] from the style defined
 *   in the existing map.
 */
zprint.config.apply_one_style = (function zprint$config$apply_one_style(doc_string,p__30214,style_name){
var vec__30215 = p__30214;
var existing_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30215,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30215,(1),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30215,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"default","default",-1987822328)))?zprint.config.get_default_options():cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),style_name], null)));
if(cljs.core.truth_(style_map)){
var updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_map,style_map], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,(cljs.core.truth_(doc_map)?zprint.config.diff_deep_ks([cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''),doc_map,zprint.config.key_seq(style_map),updated_map):null),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')], null);
}
}
});
/**
 * Given an existing-map and a new-map, if the new-map specifies a
 *   style, apply it if it exists.  Otherwise do nothing. Return
 *   [updated-map new-doc-map error-string]
 */
zprint.config.apply_style = (function zprint$config$apply_style(doc_string,doc_map,existing_map,new_map){
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new_map,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"not-specified","not-specified",1542080231));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
if((!(cljs.core.coll_QMARK_(style_name)))){
return zprint.config.apply_one_style(doc_string,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.apply_one_style,doc_string),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
}
}
});
/**
 * Read in an options map from one file or another file. Possibly neither of
 *   them exist, which is fine if optional? is truthy.
 */
zprint.config.get_config_from_file = (function zprint$config$get_config_from_file(var_args){
var G__30219 = arguments.length;
switch (G__30219) {
case 2:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2 = (function (filename,optional_QMARK_){
return null;
}));

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(filename,null);
}));

(zprint.config.get_config_from_file.cljs$lang$maxFixedArity = 2);

/**
 * Take a vector of filenames, and look in exactly one directory for
 *   all of the filenames.  Return the [option-map error-str full-file-path]
 *   from get-config-from-file for the first one found, or nil if none found.
 */
zprint.config.get_config_from_path = (function zprint$config$get_config_from_path(filename_vec,file_sep,dir_vec){
var dirspec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(file_sep,dir_vec));
var config_vec = cljs.core.some((function (p1__30220_SHARP_){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(p1__30220_SHARP_,new cljs.core.Keyword(null,"optional","optional",2053951509));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.str,dirspec,file_sep),filename_vec));
return config_vec;
});
/**
 * Take a vector of directories dir-vec and check for all of the
 *   filenames in filename-vec in the directory specified by dir-vec.
 *   When one is found, return (using reduced) the [option-map error-str
 *   full-file-path] from get-config-from-file, or nil if none are
 *   found.
 */
zprint.config.get_config_from_dirs = (function zprint$config$get_config_from_dirs(filename_vec,file_sep,dir_vec,_){
var config_vec = zprint.config.get_config_from_path(filename_vec,file_sep,dir_vec);
if(cljs.core.truth_(config_vec)){
return cljs.core.reduced(config_vec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null),dir_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null),dir_vec);
}
}
});
/**
 * Take a vector of filenames and scan up the directory tree from
 *   the current directory to the root, looking for any of the files
 *   in each directory.  Look for them in the order given in the vector.
 *   Return nil or a vector from get-config-from-file: [option-map
 *   error-str full-file-path].
 */
zprint.config.scan_up_dir_tree = (function zprint$config$scan_up_dir_tree(filename_vec,file_sep){
return null;
});
/**
 * Read in an options map from a string.
 */
zprint.config.get_config_from_map = (function zprint$config$get_config_from_map(map_string){
if(cljs.core.truth_(map_string)){
try{var opts_map = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(map_string);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts_map,null], null);
}catch (e30221){var e = e30221;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to read configuration from map",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_string)," because ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * If it is a string, and it is true or false (any case), turn it
 *   into true or false, else leave it the way it is.
 */
zprint.config.strtf__GT_boolean = (function zprint$config$strtf__GT_boolean(sexpr){
if((!(typeof sexpr === 'string'))){
return sexpr;
} else {
var lc_sexpr = clojure.string.lower_case(clojure.string.trim(sexpr));
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"false")))))){
return sexpr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")){
return true;
} else {
return false;
}
}
}
});
/**
 * Return true if a sequence starts with another sequence.
 */
zprint.config.starts_with_QMARK_ = (function zprint$config$starts_with_QMARK_(coll,seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__30222_SHARP_,p2__30223_SHARP_){
var and__4115__auto__ = p1__30222_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__30223_SHARP_;
} else {
return and__4115__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,coll,seq));
});
/**
 * Given a map of environment variable entries from cprop, which contain
 *   a sequence key and a keyword value, build a map to merge with the
 *   fn-map.
 */
zprint.config.build_fn_map_update = (function zprint$config$build_fn_map_update(m){
var mapseq = cljs.core.seq(m);
var fn_map_entries = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30224_SHARP_){
return zprint.config.starts_with_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),new cljs.core.Keyword(null,"fn-map","fn-map",565481146)], null),cljs.core.first(p1__30224_SHARP_));
}),mapseq);
var fn_map_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30225_SHARP_){
return cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__30225_SHARP_),(2)));
}),fn_map_entries);
var fn_map_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30226_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30226_SHARP_));
}),fn_map_entries);
return cljs.core.zipmap(fn_map_keys,fn_map_vals);
});
/**
 * Given the current options map and a map of environment variables
 *   from cprop, update the fn-map as described by the environment variable
 *   map.
 */
zprint.config.update_fn_map = (function zprint$config$update_fn_map(options,env_map){
var fn_map_update = zprint.config.build_fn_map_update(env_map);
if(cljs.core.empty_QMARK_(fn_map_update)){
return options;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options),fn_map_update], 0)));
}
});
/**
 * If a particular key-path exists in an existing map, replace it
 *   with a new key-path.  The existing key-path can have a nil value.
 */
zprint.config.replace_existing = (function zprint$config$replace_existing(existing,p__30227){
var vec__30228 = p__30227;
var k_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30228,(1),null);
if(((cljs.core.seq(k_path)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(existing,k_path,new cljs.core.Keyword(null,"not-present","not-present",125254321)),new cljs.core.Keyword(null,"not-present","not-present",125254321))))){
return cljs.core.assoc_in(existing,k_path,v);
} else {
return existing;
}
});
/**
 * Takes a map with multiple levels, and merge only the value from
 *   the second map where the path of the keys already exists in the first
 *   map.  Will not add any new keys to the first map.
 */
zprint.config.merge_existing = (function zprint$config$merge_existing(existing,new$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.config.replace_existing,existing,new$);
});
/**
 * Do a single new map. Returns [updated-map new-doc-map error-vec]
 *   Depends on existing-map to be the full, current options map!
 */
zprint.config.config_and_validate = (function zprint$config$config_and_validate(doc_string,doc_map,existing_map,new_map){
if(cljs.core.truth_(new_map)){
var errors = zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(new_map,doc_string);
var vec__30231 = zprint.config.perform_remove(doc_string,doc_map,existing_map,new_map);
var existing_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30231,(0),null);
var new_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30231,(1),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30231,(2),null);
var vec__30234 = zprint.config.apply_style(doc_string,new_doc_map,existing_map__$1,new_map__$1);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30234,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30234,(1),null);
var style_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30234,(2),null);
var errors__$1 = (cljs.core.truth_(style_errors)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_errors)].join(''):errors);
var new_updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([updated_map,new_map__$1], 0));
var new_doc_map__$2 = zprint.config.diff_deep_ks(doc_string,new_doc_map__$1,zprint.config.key_seq(new_map__$1),new_updated_map);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_updated_map,new_doc_map__$2,errors__$1], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
}
});
/**
 * Take the opts and errors from the command line arguments, if any,
 *   and do the rest of the configuration and validation along the way.  
 *   If there are no command line arguments, that's ok too. Since we
 *   took the main.clj out, there aren't going to be any soon.  Left
 *   the config map, config file, and cli processing in place in case
 *   we go replace the uberjar capability soon.  
 *   Returns [new-map doc-map errors]
 */
zprint.config.config_and_validate_all = (function zprint$config$config_and_validate_all(cli_opts,cli_errors){
var default_map = zprint.config.get_default_options();
var default_doc_map = zprint.config.get_default_explained_all_options();
var home = null;
var file_separator = null;
var zprintrc_file = [home,file_separator,zprint.config.zprintrc].join('');
var vec__30237 = (cljs.core.truth_((function (){var and__4115__auto__ = home;
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})())?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home], null)):null);
var opts_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30237,(0),null);
var errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30237,(1),null);
var rc_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30237,(2),null);
var home_config = vec__30237;
var vec__30240 = zprint.config.config_and_validate(["Home directory file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rc_filename)].join(''),default_doc_map,default_map,opts_rcfile);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30240,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30240,(1),null);
var rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30240,(2),null);
var vec__30243 = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"search-config?","search-config?",-932850546).cljs$core$IFn$_invoke$arity$1(updated_map);
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})())?zprint.config.scan_up_dir_tree(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator):null);
var search_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243,(0),null);
var search_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243,(1),null);
var search_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243,(2),null);
var search_config = vec__30243;
var vec__30246 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(home_config,search_config))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_rcfile,search_errors_rcfile,search_filename], null):null);
var search_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30246,(0),null);
var search_errors_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30246,(1),null);
var search_filename__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30246,(2),null);
var vec__30249 = zprint.config.config_and_validate([":search-config? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_filename__$1)].join(''),new_doc_map,updated_map,search_rcfile__$1);
var search_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(0),null);
var search_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(1),null);
var search_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(2),null);
var vec__30252 = (cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"search-config?","search-config?",-932850546).cljs$core$IFn$_invoke$arity$1(updated_map)))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"cwd-zprintrc?","cwd-zprintrc?",167207541).cljs$core$IFn$_invoke$arity$1(search_map);
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})():false))?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null)):null);
var cwd_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30252,(0),null);
var cwd_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30252,(1),null);
var cwd_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30252,(2),null);
var vec__30255 = zprint.config.config_and_validate([":cwd-zprintrc? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cwd_filename)].join(''),search_doc_map,search_map,cwd_rcfile);
var cwd_updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30255,(0),null);
var cwd_new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30255,(1),null);
var cwd_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30255,(2),null);
var read_system_env_fn = null;
var env_map = (cljs.core.truth_(read_system_env_fn)?(read_system_env_fn.cljs$core$IFn$_invoke$arity$0 ? read_system_env_fn.cljs$core$IFn$_invoke$arity$0() : read_system_env_fn.call(null)):null);
var env_and_default_map = zprint.config.merge_existing(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),default_map], null),env_map);
var new_env_map = zprint.config.diff_map(default_map,new cljs.core.Keyword(null,"zprint","zprint",1501225152).cljs$core$IFn$_invoke$arity$1(env_and_default_map));
var new_env_map__$1 = zprint.config.update_fn_map(new_env_map,env_map);
var new_env_map__$2 = zprint.config.map_leaves(zprint.config.strtf__GT_boolean,new_env_map__$1);
var vec__30258 = zprint.config.config_and_validate("Environment variable",cwd_new_doc_map,cwd_updated_map,new_env_map__$2);
var updated_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30258,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30258,(1),null);
var env_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30258,(2),null);
var read_system_props_fn = null;
var prop_map = (cljs.core.truth_(read_system_props_fn)?(read_system_props_fn.cljs$core$IFn$_invoke$arity$0 ? read_system_props_fn.cljs$core$IFn$_invoke$arity$0() : read_system_props_fn.call(null)):null);
var prop_and_default_map = zprint.config.merge_existing(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),default_map], null),prop_map);
var new_prop_map = zprint.config.diff_map(default_map,new cljs.core.Keyword(null,"zprint","zprint",1501225152).cljs$core$IFn$_invoke$arity$1(prop_and_default_map));
var new_prop_map__$1 = zprint.config.update_fn_map(new_prop_map,prop_map);
var new_prop_map__$2 = zprint.config.map_leaves(zprint.config.strtf__GT_boolean,new_prop_map__$1);
var vec__30261 = zprint.config.config_and_validate("System property",new_doc_map__$1,updated_map__$1,new_prop_map__$2);
var updated_map__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(0),null);
var new_doc_map__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(1),null);
var prop_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(2),null);
var config_filename = null;
var vec__30264 = (cljs.core.truth_(config_filename)?zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1(config_filename):null);
var opts_configfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(0),null);
var errors_configfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(1),null);
var config_filename__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(2),null);
var vec__30267 = zprint.config.config_and_validate(["Config file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(config_filename__$1)].join(''),new_doc_map__$2,updated_map__$2,opts_configfile);
var updated_map__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30267,(0),null);
var new_doc_map__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30267,(1),null);
var config_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30267,(2),null);
var vec__30270 = zprint.config.get_config_from_map(new cljs.core.Keyword(null,"config-map","config-map",807193777).cljs$core$IFn$_invoke$arity$1(cli_opts));
var opts_configmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30270,(0),null);
var errors_configmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30270,(1),null);
var vec__30273 = zprint.config.config_and_validate(["Config map:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config-map","config-map",807193777).cljs$core$IFn$_invoke$arity$1(cli_opts))].join(''),new_doc_map__$3,updated_map__$3,opts_configmap);
var updated_map__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30273,(0),null);
var new_doc_map__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30273,(1),null);
var config_errors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30273,(2),null);
var opts_cli = cljs.core.select_keys(cli_opts,zprint.config.zprint_keys);
var vec__30276 = zprint.config.config_and_validate("CLI options",new_doc_map__$4,updated_map__$4,opts_cli);
var updated_map__$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30276,(0),null);
var new_doc_map__$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30276,(1),null);
var cli_errors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30276,(2),null);
var all_errors = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,errors_rcfile,(new cljs.core.List(null,rc_errors,(new cljs.core.List(null,cwd_errors_rcfile,(new cljs.core.List(null,cwd_rc_errors,(new cljs.core.List(null,env_errors,(new cljs.core.List(null,prop_errors,(new cljs.core.List(null,errors_configfile,(new cljs.core.List(null,config_errors__$1,(new cljs.core.List(null,cli_errors__$1,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)))));
var all_errors__$1 = ((cljs.core.empty_QMARK_(all_errors))?null:all_errors);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map__$5,new_doc_map__$5,all_errors__$1], null);
});
/**
 * Take a vector of strings and concatenate them into one string with
 *   newlines between them.
 */
zprint.config.vec_str_to_str = (function zprint$config$vec_str_to_str(vec_str){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",vec_str));
});
zprint.config.help_str = zprint.config.vec_str_to_str(cljs.core.PersistentVector.fromArray([zprint.config.about(),""," The basic call uses defaults, prints to stdout","","   (zprint x)",""," All zprint functions also allow the following arguments:","","   (zprint x <width>)","   (zprint x <width> <options>)","   (zprint x <options>)",""," Format a function to stdout (accepts arguments as above)","","   (zprint-fn <fn-name>)",""," Output to a string instead of stdout:","","   (zprint-str x)","   (zprint-fn-str <fn-name>)",""," Syntax color output for an ANSI terminal:","","   (czprint x)","   (czprint-fn <fn-name>)","   (czprint-str x)","   (czprint-fn-str <fn-name>)",""," The first time you call a zprint printing function, it configures"," itself from $HOME/.zprintrc.",""," Explain current configuration, shows all possible configurable"," values as well as source of non-default values:","","   (zprint nil :explain)",""," Change current configuration from running code:","","   (set-options! <options>)",""," Format a complete file (recognizing ;!zprint directives):","","   (zprint-file infile file-name outfile <options>)",""," Format a string containing multiple \"top level\" forms, essentially"," a file contained in a string, (recognizing ;!zprint directives):","","   (zprint-file-str file-str zprint-specifier <options> <doc-str>)",""," Output information to include when submitting an issue:","","   (zprint nil :support)",""], true));

//# sourceMappingURL=zprint.config.js.map

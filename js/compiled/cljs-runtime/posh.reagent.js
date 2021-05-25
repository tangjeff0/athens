goog.provide('posh.reagent');
posh.reagent.dcfg = (function (){var dcfg = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"conn?","conn?",167224275),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"entid","entid",1720688982),new cljs.core.Keyword(null,"pull*","pull*",413297819),new cljs.core.Keyword(null,"listen!","listen!",-1756109477)],[datascript.core.q,datascript.core.pull_many,datascript.core.db,reagent.ratom.make_reaction,reagent.core.atom,datascript.core.transact_BANG_,datascript.core.filter,datascript.core.conn_QMARK_,datascript.core.with$,datascript.core.entid,datascript.core.pull,datascript.core.listen_BANG_]);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dcfg,new cljs.core.Keyword(null,"pull","pull",-860544805),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.safe_pull,dcfg));
})();
posh.reagent.missing_pull_result = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.missing_pull_result,posh.reagent.dcfg);

posh.reagent.safe_pull = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.safe_pull,posh.reagent.dcfg);

posh.reagent.set_conn_listener_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.set_conn_listener_BANG_,posh.reagent.dcfg);

posh.reagent.posh_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.posh_BANG_,posh.reagent.dcfg);

posh.reagent.get_conn_var = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.get_conn_var,posh.reagent.dcfg);

posh.reagent.get_posh_atom = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.get_posh_atom,posh.reagent.dcfg);

posh.reagent.get_db = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.get_db,posh.reagent.dcfg);

posh.reagent.rm_posh_item = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.rm_posh_item,posh.reagent.dcfg);

posh.reagent.make_query_reaction = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.make_query_reaction,posh.reagent.dcfg);

posh.reagent.pull = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.pull,posh.reagent.dcfg);

posh.reagent.pull_info = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.pull_info,posh.reagent.dcfg);

posh.reagent.pull_tx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.pull_tx,posh.reagent.dcfg);

posh.reagent.pull_many = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.pull_many,posh.reagent.dcfg);

posh.reagent.parse_q_query = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.parse_q_query,posh.reagent.dcfg);

posh.reagent.q_args_count = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.q_args_count,posh.reagent.dcfg);

posh.reagent.q = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.q,posh.reagent.dcfg);

posh.reagent.q_info = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.q_info,posh.reagent.dcfg);

posh.reagent.q_tx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.q_tx,posh.reagent.dcfg);

posh.reagent.filter_tx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.filter_tx,posh.reagent.dcfg);

posh.reagent.filter_pull = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.filter_pull,posh.reagent.dcfg);

posh.reagent.filter_q = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.filter_q,posh.reagent.dcfg);

posh.reagent.transact_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(posh.plugin_base.transact_BANG_,posh.reagent.dcfg);

//# sourceMappingURL=posh.reagent.js.map

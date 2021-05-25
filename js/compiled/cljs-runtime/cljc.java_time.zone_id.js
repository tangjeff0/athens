goog.provide('cljc.java_time.zone_id');
cljc.java_time.zone_id.short_ids = java.time.ZoneId.SHORT_IDS;
cljc.java_time.zone_id.get_available_zone_ids = (function cljc$java_time$zone_id$get_available_zone_ids(){
return java.time.ZoneId.getAvailableZoneIds();
});
cljc.java_time.zone_id.of = (function cljc$java_time$zone_id$of(var_args){
var G__41790 = arguments.length;
switch (G__41790) {
case 1:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4190){
return java.time.ZoneId.of(java_lang_String4190);
}));

(cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String4191,java_util_Map4192){
return java.time.ZoneId.of(java_lang_String4191,java_util_Map4192);
}));

(cljc.java_time.zone_id.of.cljs$lang$maxFixedArity = 2);

cljc.java_time.zone_id.of_offset = (function cljc$java_time$zone_id$of_offset(java_lang_String4193,java_time_ZoneOffset4194){
return java.time.ZoneId.ofOffset(java_lang_String4193,java_time_ZoneOffset4194);
});
cljc.java_time.zone_id.to_string = (function cljc$java_time$zone_id$to_string(this4195){
return this4195.toString();
});
cljc.java_time.zone_id.get_display_name = (function cljc$java_time$zone_id$get_display_name(this4196,java_time_format_TextStyle4197,java_util_Locale4198){
return this4196.displayName(java_time_format_TextStyle4197,java_util_Locale4198);
});
cljc.java_time.zone_id.get_rules = (function cljc$java_time$zone_id$get_rules(this4199){
return this4199.rules();
});
cljc.java_time.zone_id.get_id = (function cljc$java_time$zone_id$get_id(this4200){
return this4200.id();
});
cljc.java_time.zone_id.normalized = (function cljc$java_time$zone_id$normalized(this4201){
return this4201.normalized();
});
cljc.java_time.zone_id.system_default = (function cljc$java_time$zone_id$system_default(){
return java.time.ZoneId.systemDefault();
});
cljc.java_time.zone_id.from = (function cljc$java_time$zone_id$from(java_time_temporal_TemporalAccessor4202){
return java.time.ZoneId.from(java_time_temporal_TemporalAccessor4202);
});
cljc.java_time.zone_id.hash_code = (function cljc$java_time$zone_id$hash_code(this4203){
return this4203.hashCode();
});
cljc.java_time.zone_id.equals = (function cljc$java_time$zone_id$equals(this4204,java_lang_Object4205){
return this4204.equals(java_lang_Object4205);
});

//# sourceMappingURL=cljc.java_time.zone_id.js.map

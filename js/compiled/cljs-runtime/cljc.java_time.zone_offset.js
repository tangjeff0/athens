goog.provide('cljc.java_time.zone_offset');
cljc.java_time.zone_offset.max = java.time.ZoneOffset.MAX;
cljc.java_time.zone_offset.min = java.time.ZoneOffset.MIN;
cljc.java_time.zone_offset.utc = java.time.ZoneOffset.UTC;
cljc.java_time.zone_offset.get_available_zone_ids = (function cljc$java_time$zone_offset$get_available_zone_ids(){
return java.time.ZoneOffset.getAvailableZoneIds();
});
cljc.java_time.zone_offset.range = (function cljc$java_time$zone_offset$range(this4656,java_time_temporal_TemporalField4657){
return this4656.range(java_time_temporal_TemporalField4657);
});
cljc.java_time.zone_offset.of_total_seconds = (function cljc$java_time$zone_offset$of_total_seconds(int4658){
return java.time.ZoneOffset.ofTotalSeconds(int4658);
});
cljc.java_time.zone_offset.of = (function cljc$java_time$zone_offset$of(var_args){
var G__41793 = arguments.length;
switch (G__41793) {
case 1:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1 = (function (G__4660){
return java.time.ZoneOffset.of(G__4660);
}));

(cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String4661,java_util_Map4662){
return java.time.ZoneOffset.of(java_lang_String4661,java_util_Map4662);
}));

(cljc.java_time.zone_offset.of.cljs$lang$maxFixedArity = 2);

cljc.java_time.zone_offset.of_offset = (function cljc$java_time$zone_offset$of_offset(java_lang_String4663,java_time_ZoneOffset4664){
return java.time.ZoneOffset.ofOffset(java_lang_String4663,java_time_ZoneOffset4664);
});
cljc.java_time.zone_offset.query = (function cljc$java_time$zone_offset$query(this4665,java_time_temporal_TemporalQuery4666){
return this4665.query(java_time_temporal_TemporalQuery4666);
});
cljc.java_time.zone_offset.to_string = (function cljc$java_time$zone_offset$to_string(this4667){
return this4667.toString();
});
cljc.java_time.zone_offset.get_display_name = (function cljc$java_time$zone_offset$get_display_name(this4668,java_time_format_TextStyle4669,java_util_Locale4670){
return this4668.displayName(java_time_format_TextStyle4669,java_util_Locale4670);
});
cljc.java_time.zone_offset.get_long = (function cljc$java_time$zone_offset$get_long(this4671,java_time_temporal_TemporalField4672){
return this4671.getLong(java_time_temporal_TemporalField4672);
});
cljc.java_time.zone_offset.get_rules = (function cljc$java_time$zone_offset$get_rules(this4673){
return this4673.rules();
});
cljc.java_time.zone_offset.of_hours = (function cljc$java_time$zone_offset$of_hours(int4674){
return java.time.ZoneOffset.ofHours(int4674);
});
cljc.java_time.zone_offset.get_id = (function cljc$java_time$zone_offset$get_id(this4675){
return this4675.id();
});
cljc.java_time.zone_offset.normalized = (function cljc$java_time$zone_offset$normalized(this4676){
return this4676.normalized();
});
cljc.java_time.zone_offset.system_default = (function cljc$java_time$zone_offset$system_default(){
return java.time.ZoneOffset.systemDefault();
});
cljc.java_time.zone_offset.from = (function cljc$java_time$zone_offset$from(G__4678){
return java.time.ZoneOffset.from(G__4678);
});
cljc.java_time.zone_offset.of_hours_minutes_seconds = (function cljc$java_time$zone_offset$of_hours_minutes_seconds(int4679,int4680,int4681){
return java.time.ZoneOffset.ofHoursMinutesSeconds(int4679,int4680,int4681);
});
cljc.java_time.zone_offset.is_supported = (function cljc$java_time$zone_offset$is_supported(this4682,java_time_temporal_TemporalField4683){
return this4682.isSupported(java_time_temporal_TemporalField4683);
});
cljc.java_time.zone_offset.hash_code = (function cljc$java_time$zone_offset$hash_code(this4684){
return this4684.hashCode();
});
cljc.java_time.zone_offset.get_total_seconds = (function cljc$java_time$zone_offset$get_total_seconds(this4685){
return this4685.totalSeconds();
});
cljc.java_time.zone_offset.adjust_into = (function cljc$java_time$zone_offset$adjust_into(this4686,java_time_temporal_Temporal4687){
return this4686.adjustInto(java_time_temporal_Temporal4687);
});
cljc.java_time.zone_offset.of_hours_minutes = (function cljc$java_time$zone_offset$of_hours_minutes(int4688,int4689){
return java.time.ZoneOffset.ofHoursMinutes(int4688,int4689);
});
cljc.java_time.zone_offset.compare_to = (function cljc$java_time$zone_offset$compare_to(this4690,G__4691){
return this4690.compareTo(G__4691);
});
cljc.java_time.zone_offset.get = (function cljc$java_time$zone_offset$get(this4692,java_time_temporal_TemporalField4693){
return this4692.get(java_time_temporal_TemporalField4693);
});
cljc.java_time.zone_offset.equals = (function cljc$java_time$zone_offset$equals(this4694,java_lang_Object4695){
return this4694.equals(java_lang_Object4695);
});

//# sourceMappingURL=cljc.java_time.zone_offset.js.map

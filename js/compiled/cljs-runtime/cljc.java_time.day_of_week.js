goog.provide('cljc.java_time.day_of_week');
cljc.java_time.day_of_week.saturday = java.time.DayOfWeek.SATURDAY;
cljc.java_time.day_of_week.thursday = java.time.DayOfWeek.THURSDAY;
cljc.java_time.day_of_week.friday = java.time.DayOfWeek.FRIDAY;
cljc.java_time.day_of_week.wednesday = java.time.DayOfWeek.WEDNESDAY;
cljc.java_time.day_of_week.sunday = java.time.DayOfWeek.SUNDAY;
cljc.java_time.day_of_week.monday = java.time.DayOfWeek.MONDAY;
cljc.java_time.day_of_week.tuesday = java.time.DayOfWeek.TUESDAY;
cljc.java_time.day_of_week.range = (function cljc$java_time$day_of_week$range(this4206,java_time_temporal_TemporalField4207){
return this4206.range(java_time_temporal_TemporalField4207);
});
cljc.java_time.day_of_week.values = (function cljc$java_time$day_of_week$values(){
return java.time.DayOfWeek.values();
});
cljc.java_time.day_of_week.value_of = (function cljc$java_time$day_of_week$value_of(var_args){
var G__41866 = arguments.length;
switch (G__41866) {
case 1:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4208){
return java.time.DayOfWeek.valueOf(java_lang_String4208);
}));

(cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class4209,java_lang_String4210){
return java.time.DayOfWeek.valueOf(java_lang_Class4209,java_lang_String4210);
}));

(cljc.java_time.day_of_week.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.day_of_week.of = (function cljc$java_time$day_of_week$of(int4211){
return java.time.DayOfWeek.of(int4211);
});
cljc.java_time.day_of_week.ordinal = (function cljc$java_time$day_of_week$ordinal(this4212){
return this4212.ordinal();
});
cljc.java_time.day_of_week.plus = (function cljc$java_time$day_of_week$plus(this4213,long4214){
return this4213.plus(long4214);
});
cljc.java_time.day_of_week.query = (function cljc$java_time$day_of_week$query(this4215,java_time_temporal_TemporalQuery4216){
return this4215.query(java_time_temporal_TemporalQuery4216);
});
cljc.java_time.day_of_week.to_string = (function cljc$java_time$day_of_week$to_string(this4217){
return this4217.toString();
});
cljc.java_time.day_of_week.minus = (function cljc$java_time$day_of_week$minus(this4218,long4219){
return this4218.minus(long4219);
});
cljc.java_time.day_of_week.get_display_name = (function cljc$java_time$day_of_week$get_display_name(this4220,java_time_format_TextStyle4221,java_util_Locale4222){
return this4220.displayName(java_time_format_TextStyle4221,java_util_Locale4222);
});
cljc.java_time.day_of_week.get_value = (function cljc$java_time$day_of_week$get_value(this4223){
return this4223.value();
});
cljc.java_time.day_of_week.name = (function cljc$java_time$day_of_week$name(this4224){
return this4224.name();
});
cljc.java_time.day_of_week.get_long = (function cljc$java_time$day_of_week$get_long(this4225,java_time_temporal_TemporalField4226){
return this4225.getLong(java_time_temporal_TemporalField4226);
});
cljc.java_time.day_of_week.get_declaring_class = (function cljc$java_time$day_of_week$get_declaring_class(this4227){
return this4227.declaringClass();
});
cljc.java_time.day_of_week.from = (function cljc$java_time$day_of_week$from(java_time_temporal_TemporalAccessor4228){
return java.time.DayOfWeek.from(java_time_temporal_TemporalAccessor4228);
});
cljc.java_time.day_of_week.is_supported = (function cljc$java_time$day_of_week$is_supported(this4229,java_time_temporal_TemporalField4230){
return this4229.isSupported(java_time_temporal_TemporalField4230);
});
cljc.java_time.day_of_week.hash_code = (function cljc$java_time$day_of_week$hash_code(this4231){
return this4231.hashCode();
});
cljc.java_time.day_of_week.adjust_into = (function cljc$java_time$day_of_week$adjust_into(this4232,java_time_temporal_Temporal4233){
return this4232.adjustInto(java_time_temporal_Temporal4233);
});
cljc.java_time.day_of_week.compare_to = (function cljc$java_time$day_of_week$compare_to(this4234,G__4235){
return this4234.compareTo(G__4235);
});
cljc.java_time.day_of_week.get = (function cljc$java_time$day_of_week$get(this4236,java_time_temporal_TemporalField4237){
return this4236.get(java_time_temporal_TemporalField4237);
});
cljc.java_time.day_of_week.equals = (function cljc$java_time$day_of_week$equals(this4238,java_lang_Object4239){
return this4238.equals(java_lang_Object4239);
});

//# sourceMappingURL=cljc.java_time.day_of_week.js.map

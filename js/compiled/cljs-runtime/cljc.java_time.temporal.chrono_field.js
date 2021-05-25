goog.provide('cljc.java_time.temporal.chrono_field');
cljc.java_time.temporal.chrono_field.milli_of_second = java.time.temporal.ChronoField.MILLI_OF_SECOND;
cljc.java_time.temporal.chrono_field.year_of_era = java.time.temporal.ChronoField.YEAR_OF_ERA;
cljc.java_time.temporal.chrono_field.clock_hour_of_day = java.time.temporal.ChronoField.CLOCK_HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.era = java.time.temporal.ChronoField.ERA;
cljc.java_time.temporal.chrono_field.instant_seconds = java.time.temporal.ChronoField.INSTANT_SECONDS;
cljc.java_time.temporal.chrono_field.ampm_of_day = java.time.temporal.ChronoField.AMPM_OF_DAY;
cljc.java_time.temporal.chrono_field.offset_seconds = java.time.temporal.ChronoField.OFFSET_SECONDS;
cljc.java_time.temporal.chrono_field.nano_of_second = java.time.temporal.ChronoField.NANO_OF_SECOND;
cljc.java_time.temporal.chrono_field.nano_of_day = java.time.temporal.ChronoField.NANO_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH;
cljc.java_time.temporal.chrono_field.month_of_year = java.time.temporal.ChronoField.MONTH_OF_YEAR;
cljc.java_time.temporal.chrono_field.hour_of_ampm = java.time.temporal.ChronoField.HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.year = java.time.temporal.ChronoField.YEAR;
cljc.java_time.temporal.chrono_field.micro_of_second = java.time.temporal.ChronoField.MICRO_OF_SECOND;
cljc.java_time.temporal.chrono_field.aligned_week_of_year = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_YEAR;
cljc.java_time.temporal.chrono_field.proleptic_month = java.time.temporal.ChronoField.PROLEPTIC_MONTH;
cljc.java_time.temporal.chrono_field.day_of_month = java.time.temporal.ChronoField.DAY_OF_MONTH;
cljc.java_time.temporal.chrono_field.second_of_minute = java.time.temporal.ChronoField.SECOND_OF_MINUTE;
cljc.java_time.temporal.chrono_field.second_of_day = java.time.temporal.ChronoField.SECOND_OF_DAY;
cljc.java_time.temporal.chrono_field.epoch_day = java.time.temporal.ChronoField.EPOCH_DAY;
cljc.java_time.temporal.chrono_field.day_of_year = java.time.temporal.ChronoField.DAY_OF_YEAR;
cljc.java_time.temporal.chrono_field.aligned_week_of_month = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_MONTH;
cljc.java_time.temporal.chrono_field.day_of_week = java.time.temporal.ChronoField.DAY_OF_WEEK;
cljc.java_time.temporal.chrono_field.clock_hour_of_ampm = java.time.temporal.ChronoField.CLOCK_HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.minute_of_day = java.time.temporal.ChronoField.MINUTE_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR;
cljc.java_time.temporal.chrono_field.minute_of_hour = java.time.temporal.ChronoField.MINUTE_OF_HOUR;
cljc.java_time.temporal.chrono_field.hour_of_day = java.time.temporal.ChronoField.HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.milli_of_day = java.time.temporal.ChronoField.MILLI_OF_DAY;
cljc.java_time.temporal.chrono_field.micro_of_day = java.time.temporal.ChronoField.MICRO_OF_DAY;
cljc.java_time.temporal.chrono_field.get_range_unit = (function cljc$java_time$temporal$chrono_field$get_range_unit(this4764){
return this4764.rangeUnit();
});
cljc.java_time.temporal.chrono_field.range = (function cljc$java_time$temporal$chrono_field$range(this4765){
return this4765.range();
});
cljc.java_time.temporal.chrono_field.values = (function cljc$java_time$temporal$chrono_field$values(){
return java.time.temporal.ChronoField.values();
});
cljc.java_time.temporal.chrono_field.value_of = (function cljc$java_time$temporal$chrono_field$value_of(var_args){
var G__41880 = arguments.length;
switch (G__41880) {
case 1:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4766){
return java.time.temporal.ChronoField.valueOf(java_lang_String4766);
}));

(cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class4767,java_lang_String4768){
return java.time.temporal.ChronoField.valueOf(java_lang_Class4767,java_lang_String4768);
}));

(cljc.java_time.temporal.chrono_field.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.temporal.chrono_field.resolve = (function cljc$java_time$temporal$chrono_field$resolve(this4769,java_util_Map4770,java_time_temporal_TemporalAccessor4771,java_time_format_ResolverStyle4772){
return this4769.resolve(java_util_Map4770,java_time_temporal_TemporalAccessor4771,java_time_format_ResolverStyle4772);
});
cljc.java_time.temporal.chrono_field.ordinal = (function cljc$java_time$temporal$chrono_field$ordinal(this4773){
return this4773.ordinal();
});
cljc.java_time.temporal.chrono_field.check_valid_int_value = (function cljc$java_time$temporal$chrono_field$check_valid_int_value(this4774,long4775){
return this4774.checkValidIntValue(long4775);
});
cljc.java_time.temporal.chrono_field.get_base_unit = (function cljc$java_time$temporal$chrono_field$get_base_unit(this4776){
return this4776.baseUnit();
});
cljc.java_time.temporal.chrono_field.to_string = (function cljc$java_time$temporal$chrono_field$to_string(this4777){
return this4777.toString();
});
cljc.java_time.temporal.chrono_field.is_date_based = (function cljc$java_time$temporal$chrono_field$is_date_based(this4778){
return this4778.isDateBased();
});
cljc.java_time.temporal.chrono_field.get_display_name = (function cljc$java_time$temporal$chrono_field$get_display_name(this4779,java_util_Locale4780){
return this4779.displayName(java_util_Locale4780);
});
cljc.java_time.temporal.chrono_field.name = (function cljc$java_time$temporal$chrono_field$name(this4781){
return this4781.name();
});
cljc.java_time.temporal.chrono_field.is_supported_by = (function cljc$java_time$temporal$chrono_field$is_supported_by(this4782,java_time_temporal_TemporalAccessor4783){
return this4782.isSupportedBy(java_time_temporal_TemporalAccessor4783);
});
cljc.java_time.temporal.chrono_field.range_refined_by = (function cljc$java_time$temporal$chrono_field$range_refined_by(this4784,java_time_temporal_TemporalAccessor4785){
return this4784.rangeRefinedBy(java_time_temporal_TemporalAccessor4785);
});
cljc.java_time.temporal.chrono_field.get_declaring_class = (function cljc$java_time$temporal$chrono_field$get_declaring_class(this4786){
return this4786.declaringClass();
});
cljc.java_time.temporal.chrono_field.hash_code = (function cljc$java_time$temporal$chrono_field$hash_code(this4787){
return this4787.hashCode();
});
cljc.java_time.temporal.chrono_field.adjust_into = (function cljc$java_time$temporal$chrono_field$adjust_into(this4788,java_time_temporal_Temporal4789,long4790){
return this4788.adjustInto(java_time_temporal_Temporal4789,long4790);
});
cljc.java_time.temporal.chrono_field.get_from = (function cljc$java_time$temporal$chrono_field$get_from(this4791,java_time_temporal_TemporalAccessor4792){
return this4791.from(java_time_temporal_TemporalAccessor4792);
});
cljc.java_time.temporal.chrono_field.compare_to = (function cljc$java_time$temporal$chrono_field$compare_to(this4793,G__4794){
return this4793.compareTo(G__4794);
});
cljc.java_time.temporal.chrono_field.equals = (function cljc$java_time$temporal$chrono_field$equals(this4795,java_lang_Object4796){
return this4795.equals(java_lang_Object4796);
});
cljc.java_time.temporal.chrono_field.is_time_based = (function cljc$java_time$temporal$chrono_field$is_time_based(this4797){
return this4797.isTimeBased();
});
cljc.java_time.temporal.chrono_field.check_valid_value = (function cljc$java_time$temporal$chrono_field$check_valid_value(this4798,long4799){
return this4798.checkValidValue(long4799);
});

//# sourceMappingURL=cljc.java_time.temporal.chrono_field.js.map

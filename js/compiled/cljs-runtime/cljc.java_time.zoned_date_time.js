goog.provide('cljc.java_time.zoned_date_time');
cljc.java_time.zoned_date_time.minus_minutes = (function cljc$java_time$zoned_date_time$minus_minutes(this3736,long3737){
return this3736.minusMinutes(long3737);
});
cljc.java_time.zoned_date_time.truncated_to = (function cljc$java_time$zoned_date_time$truncated_to(this3738,java_time_temporal_TemporalUnit3739){
return this3738.truncatedTo(java_time_temporal_TemporalUnit3739);
});
cljc.java_time.zoned_date_time.minus_weeks = (function cljc$java_time$zoned_date_time$minus_weeks(this3740,long3741){
return this3740.minusWeeks(long3741);
});
cljc.java_time.zoned_date_time.to_instant = (function cljc$java_time$zoned_date_time$to_instant(this3742){
return this3742.toInstant();
});
cljc.java_time.zoned_date_time.plus_weeks = (function cljc$java_time$zoned_date_time$plus_weeks(this3743,long3744){
return this3743.plusWeeks(long3744);
});
cljc.java_time.zoned_date_time.range = (function cljc$java_time$zoned_date_time$range(this3745,java_time_temporal_TemporalField3746){
return this3745.range(java_time_temporal_TemporalField3746);
});
cljc.java_time.zoned_date_time.with_earlier_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_earlier_offset_at_overlap(this3747){
return this3747.withEarlierOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.get_hour = (function cljc$java_time$zoned_date_time$get_hour(this3748){
return this3748.hour();
});
cljc.java_time.zoned_date_time.minus_hours = (function cljc$java_time$zoned_date_time$minus_hours(this3749,long3750){
return this3749.minusHours(long3750);
});
cljc.java_time.zoned_date_time.of = (function cljc$java_time$zoned_date_time$of(var_args){
var G__41795 = arguments.length;
switch (G__41795) {
case 3:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 8:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate3751,java_time_LocalTime3752,java_time_ZoneId3753){
return java.time.ZonedDateTime.of(java_time_LocalDate3751,java_time_LocalTime3752,java_time_ZoneId3753);
}));

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime3754,java_time_ZoneId3755){
return java.time.ZonedDateTime.of(java_time_LocalDateTime3754,java_time_ZoneId3755);
}));

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int3756,int3757,int3758,int3759,int3760,int3761,int3762,java_time_ZoneId3763){
return java.time.ZonedDateTime.of(int3756,int3757,int3758,int3759,int3760,int3761,int3762,java_time_ZoneId3763);
}));

(cljc.java_time.zoned_date_time.of.cljs$lang$maxFixedArity = 8);

cljc.java_time.zoned_date_time.with_month = (function cljc$java_time$zoned_date_time$with_month(this3764,int3765){
return this3764.withMonth(int3765);
});
cljc.java_time.zoned_date_time.is_equal = (function cljc$java_time$zoned_date_time$is_equal(this3766,java_time_chrono_ChronoZonedDateTime3767){
return this3766.isEqual(java_time_chrono_ChronoZonedDateTime3767);
});
cljc.java_time.zoned_date_time.get_nano = (function cljc$java_time$zoned_date_time$get_nano(this3768){
return this3768.nano();
});
cljc.java_time.zoned_date_time.of_local = (function cljc$java_time$zoned_date_time$of_local(java_time_LocalDateTime3769,java_time_ZoneId3770,java_time_ZoneOffset3771){
return java.time.ZonedDateTime.ofLocal(java_time_LocalDateTime3769,java_time_ZoneId3770,java_time_ZoneOffset3771);
});
cljc.java_time.zoned_date_time.get_year = (function cljc$java_time$zoned_date_time$get_year(this3772){
return this3772.year();
});
cljc.java_time.zoned_date_time.minus_seconds = (function cljc$java_time$zoned_date_time$minus_seconds(this3773,long3774){
return this3773.minusSeconds(long3774);
});
cljc.java_time.zoned_date_time.get_second = (function cljc$java_time$zoned_date_time$get_second(this3775){
return this3775.second();
});
cljc.java_time.zoned_date_time.plus_nanos = (function cljc$java_time$zoned_date_time$plus_nanos(this3776,long3777){
return this3776.plusNanos(long3777);
});
cljc.java_time.zoned_date_time.get_day_of_year = (function cljc$java_time$zoned_date_time$get_day_of_year(this3778){
return this3778.dayOfYear();
});
cljc.java_time.zoned_date_time.plus = (function cljc$java_time$zoned_date_time$plus(var_args){
var G__41798 = arguments.length;
switch (G__41798) {
case 3:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3779,G__3780,G__3781){
return this3779.plus(G__3780,G__3781);
}));

(cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3782,G__3783){
return this3782.plus(G__3783);
}));

(cljc.java_time.zoned_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.with_hour = (function cljc$java_time$zoned_date_time$with_hour(this3784,int3785){
return this3784.withHour(int3785);
});
cljc.java_time.zoned_date_time.with_minute = (function cljc$java_time$zoned_date_time$with_minute(this3786,int3787){
return this3786.withMinute(int3787);
});
cljc.java_time.zoned_date_time.plus_minutes = (function cljc$java_time$zoned_date_time$plus_minutes(this3788,long3789){
return this3788.plusMinutes(long3789);
});
cljc.java_time.zoned_date_time.query = (function cljc$java_time$zoned_date_time$query(this3790,java_time_temporal_TemporalQuery3791){
return this3790.query(java_time_temporal_TemporalQuery3791);
});
cljc.java_time.zoned_date_time.get_day_of_week = (function cljc$java_time$zoned_date_time$get_day_of_week(this3792){
return this3792.dayOfWeek();
});
cljc.java_time.zoned_date_time.to_string = (function cljc$java_time$zoned_date_time$to_string(this3793){
return this3793.toString();
});
cljc.java_time.zoned_date_time.plus_months = (function cljc$java_time$zoned_date_time$plus_months(this3794,long3795){
return this3794.plusMonths(long3795);
});
cljc.java_time.zoned_date_time.is_before = (function cljc$java_time$zoned_date_time$is_before(this3796,java_time_chrono_ChronoZonedDateTime3797){
return this3796.isBefore(java_time_chrono_ChronoZonedDateTime3797);
});
cljc.java_time.zoned_date_time.minus_months = (function cljc$java_time$zoned_date_time$minus_months(this3798,long3799){
return this3798.minusMonths(long3799);
});
cljc.java_time.zoned_date_time.minus = (function cljc$java_time$zoned_date_time$minus(var_args){
var G__41800 = arguments.length;
switch (G__41800) {
case 2:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3800,G__3801){
return this3800.minus(G__3801);
}));

(cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3802,G__3803,G__3804){
return this3802.minus(G__3803,G__3804);
}));

(cljc.java_time.zoned_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.with_fixed_offset_zone = (function cljc$java_time$zoned_date_time$with_fixed_offset_zone(this3805){
return this3805.withFixedOffsetZone();
});
cljc.java_time.zoned_date_time.plus_hours = (function cljc$java_time$zoned_date_time$plus_hours(this3806,long3807){
return this3806.plusHours(long3807);
});
cljc.java_time.zoned_date_time.with_zone_same_local = (function cljc$java_time$zoned_date_time$with_zone_same_local(this3808,G__3809){
return this3808.withZoneSameLocal(G__3809);
});
cljc.java_time.zoned_date_time.with_zone_same_instant = (function cljc$java_time$zoned_date_time$with_zone_same_instant(this3810,G__3811){
return this3810.withZoneSameInstant(G__3811);
});
cljc.java_time.zoned_date_time.plus_days = (function cljc$java_time$zoned_date_time$plus_days(this3812,long3813){
return this3812.plusDays(long3813);
});
cljc.java_time.zoned_date_time.to_local_time = (function cljc$java_time$zoned_date_time$to_local_time(this3814){
return this3814.toLocalTime();
});
cljc.java_time.zoned_date_time.get_long = (function cljc$java_time$zoned_date_time$get_long(this3815,java_time_temporal_TemporalField3816){
return this3815.getLong(java_time_temporal_TemporalField3816);
});
cljc.java_time.zoned_date_time.get_offset = (function cljc$java_time$zoned_date_time$get_offset(this3817){
return this3817.offset();
});
cljc.java_time.zoned_date_time.with_year = (function cljc$java_time$zoned_date_time$with_year(this3818,int3819){
return this3818.withYear(int3819);
});
cljc.java_time.zoned_date_time.with_nano = (function cljc$java_time$zoned_date_time$with_nano(this3820,int3821){
return this3820.withNano(int3821);
});
cljc.java_time.zoned_date_time.to_epoch_second = (function cljc$java_time$zoned_date_time$to_epoch_second(this3822){
return this3822.toEpochSecond();
});
cljc.java_time.zoned_date_time.to_offset_date_time = (function cljc$java_time$zoned_date_time$to_offset_date_time(this3823){
return this3823.toOffsetDateTime();
});
cljc.java_time.zoned_date_time.with_later_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_later_offset_at_overlap(this3824){
return this3824.withLaterOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.until = (function cljc$java_time$zoned_date_time$until(this3825,java_time_temporal_Temporal3826,java_time_temporal_TemporalUnit3827){
return this3825.until(java_time_temporal_Temporal3826,java_time_temporal_TemporalUnit3827);
});
cljc.java_time.zoned_date_time.get_zone = (function cljc$java_time$zoned_date_time$get_zone(this3828){
return this3828.zone();
});
cljc.java_time.zoned_date_time.with_day_of_month = (function cljc$java_time$zoned_date_time$with_day_of_month(this3829,int3830){
return this3829.withDayOfMonth(int3830);
});
cljc.java_time.zoned_date_time.get_day_of_month = (function cljc$java_time$zoned_date_time$get_day_of_month(this3831){
return this3831.dayOfMonth();
});
cljc.java_time.zoned_date_time.from = (function cljc$java_time$zoned_date_time$from(java_time_temporal_TemporalAccessor3832){
return java.time.ZonedDateTime.from(java_time_temporal_TemporalAccessor3832);
});
cljc.java_time.zoned_date_time.is_after = (function cljc$java_time$zoned_date_time$is_after(this3833,java_time_chrono_ChronoZonedDateTime3834){
return this3833.isAfter(java_time_chrono_ChronoZonedDateTime3834);
});
cljc.java_time.zoned_date_time.minus_nanos = (function cljc$java_time$zoned_date_time$minus_nanos(this3835,long3836){
return this3835.minusNanos(long3836);
});
cljc.java_time.zoned_date_time.is_supported = (function cljc$java_time$zoned_date_time$is_supported(this3837,G__3838){
return this3837.isSupported(G__3838);
});
cljc.java_time.zoned_date_time.minus_years = (function cljc$java_time$zoned_date_time$minus_years(this3839,long3840){
return this3839.minusYears(long3840);
});
cljc.java_time.zoned_date_time.get_chronology = (function cljc$java_time$zoned_date_time$get_chronology(this3841){
return this3841.chronology();
});
cljc.java_time.zoned_date_time.parse = (function cljc$java_time$zoned_date_time$parse(var_args){
var G__41802 = arguments.length;
switch (G__41802) {
case 1:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3842){
return java.time.ZonedDateTime.parse(java_lang_CharSequence3842);
}));

(cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3843,java_time_format_DateTimeFormatter3844){
return java.time.ZonedDateTime.parse(java_lang_CharSequence3843,java_time_format_DateTimeFormatter3844);
}));

(cljc.java_time.zoned_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.zoned_date_time.with_second = (function cljc$java_time$zoned_date_time$with_second(this3845,int3846){
return this3845.withSecond(int3846);
});
cljc.java_time.zoned_date_time.to_local_date = (function cljc$java_time$zoned_date_time$to_local_date(this3847){
return this3847.toLocalDate();
});
cljc.java_time.zoned_date_time.get_minute = (function cljc$java_time$zoned_date_time$get_minute(this3848){
return this3848.minute();
});
cljc.java_time.zoned_date_time.hash_code = (function cljc$java_time$zoned_date_time$hash_code(this3849){
return this3849.hashCode();
});
cljc.java_time.zoned_date_time.with$ = (function cljc$java_time$zoned_date_time$with(var_args){
var G__41806 = arguments.length;
switch (G__41806) {
case 2:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3850,G__3851){
return this3850.with(G__3851);
}));

(cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3852,G__3853,G__3854){
return this3852.with(G__3853,G__3854);
}));

(cljc.java_time.zoned_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.now = (function cljc$java_time$zoned_date_time$now(var_args){
var G__41808 = arguments.length;
switch (G__41808) {
case 1:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3856){
return java.time.ZonedDateTime.now(G__3856);
}));

(cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.ZonedDateTime.now();
}));

(cljc.java_time.zoned_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.zoned_date_time.to_local_date_time = (function cljc$java_time$zoned_date_time$to_local_date_time(this3857){
return this3857.toLocalDateTime();
});
cljc.java_time.zoned_date_time.get_month_value = (function cljc$java_time$zoned_date_time$get_month_value(this3858){
return this3858.monthValue();
});
cljc.java_time.zoned_date_time.with_day_of_year = (function cljc$java_time$zoned_date_time$with_day_of_year(this3859,int3860){
return this3859.withDayOfYear(int3860);
});
cljc.java_time.zoned_date_time.compare_to = (function cljc$java_time$zoned_date_time$compare_to(this3861,G__3862){
return this3861.compareTo(G__3862);
});
cljc.java_time.zoned_date_time.of_strict = (function cljc$java_time$zoned_date_time$of_strict(java_time_LocalDateTime3863,java_time_ZoneOffset3864,java_time_ZoneId3865){
return java.time.ZonedDateTime.ofStrict(java_time_LocalDateTime3863,java_time_ZoneOffset3864,java_time_ZoneId3865);
});
cljc.java_time.zoned_date_time.get_month = (function cljc$java_time$zoned_date_time$get_month(this3866){
return this3866.month();
});
cljc.java_time.zoned_date_time.of_instant = (function cljc$java_time$zoned_date_time$of_instant(var_args){
var G__41812 = arguments.length;
switch (G__41812) {
case 3:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDateTime3867,java_time_ZoneOffset3868,java_time_ZoneId3869){
return java.time.ZonedDateTime.ofInstant(java_time_LocalDateTime3867,java_time_ZoneOffset3868,java_time_ZoneId3869);
}));

(cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2 = (function (java_time_Instant3870,java_time_ZoneId3871){
return java.time.ZonedDateTime.ofInstant(java_time_Instant3870,java_time_ZoneId3871);
}));

(cljc.java_time.zoned_date_time.of_instant.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.plus_seconds = (function cljc$java_time$zoned_date_time$plus_seconds(this3872,long3873){
return this3872.plusSeconds(long3873);
});
cljc.java_time.zoned_date_time.get = (function cljc$java_time$zoned_date_time$get(this3874,java_time_temporal_TemporalField3875){
return this3874.get(java_time_temporal_TemporalField3875);
});
cljc.java_time.zoned_date_time.equals = (function cljc$java_time$zoned_date_time$equals(this3876,java_lang_Object3877){
return this3876.equals(java_lang_Object3877);
});
cljc.java_time.zoned_date_time.format = (function cljc$java_time$zoned_date_time$format(this3878,java_time_format_DateTimeFormatter3879){
return this3878.format(java_time_format_DateTimeFormatter3879);
});
cljc.java_time.zoned_date_time.plus_years = (function cljc$java_time$zoned_date_time$plus_years(this3880,long3881){
return this3880.plusYears(long3881);
});
cljc.java_time.zoned_date_time.minus_days = (function cljc$java_time$zoned_date_time$minus_days(this3882,long3883){
return this3882.minusDays(long3883);
});

//# sourceMappingURL=cljc.java_time.zoned_date_time.js.map

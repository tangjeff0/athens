goog.provide('cljc.java_time.local_date_time');
cljc.java_time.local_date_time.max = java.time.LocalDateTime.MAX;
cljc.java_time.local_date_time.min = java.time.LocalDateTime.MIN;
cljc.java_time.local_date_time.minus_minutes = (function cljc$java_time$local_date_time$minus_minutes(this3587,long3588){
return this3587.minusMinutes(long3588);
});
cljc.java_time.local_date_time.truncated_to = (function cljc$java_time$local_date_time$truncated_to(this3589,java_time_temporal_TemporalUnit3590){
return this3589.truncatedTo(java_time_temporal_TemporalUnit3590);
});
cljc.java_time.local_date_time.minus_weeks = (function cljc$java_time$local_date_time$minus_weeks(this3591,long3592){
return this3591.minusWeeks(long3592);
});
cljc.java_time.local_date_time.to_instant = (function cljc$java_time$local_date_time$to_instant(this3593,java_time_ZoneOffset3594){
return this3593.toInstant(java_time_ZoneOffset3594);
});
cljc.java_time.local_date_time.plus_weeks = (function cljc$java_time$local_date_time$plus_weeks(this3595,long3596){
return this3595.plusWeeks(long3596);
});
cljc.java_time.local_date_time.range = (function cljc$java_time$local_date_time$range(this3597,java_time_temporal_TemporalField3598){
return this3597.range(java_time_temporal_TemporalField3598);
});
cljc.java_time.local_date_time.of_epoch_second = (function cljc$java_time$local_date_time$of_epoch_second(long3599,int3600,java_time_ZoneOffset3601){
return java.time.LocalDateTime.ofEpochSecond(long3599,int3600,java_time_ZoneOffset3601);
});
cljc.java_time.local_date_time.get_hour = (function cljc$java_time$local_date_time$get_hour(this3602){
return this3602.hour();
});
cljc.java_time.local_date_time.at_offset = (function cljc$java_time$local_date_time$at_offset(this3603,java_time_ZoneOffset3604){
return this3603.atOffset(java_time_ZoneOffset3604);
});
cljc.java_time.local_date_time.minus_hours = (function cljc$java_time$local_date_time$minus_hours(this3605,long3606){
return this3605.minusHours(long3606);
});
cljc.java_time.local_date_time.of = (function cljc$java_time$local_date_time$of(var_args){
var G__41717 = arguments.length;
switch (G__41717) {
case 2:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDate3607,java_time_LocalTime3608){
return java.time.LocalDateTime.of(java_time_LocalDate3607,java_time_LocalTime3608);
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5 = (function (G__3610,G__3611,G__3612,G__3613,G__3614){
return java.time.LocalDateTime.of(G__3610,G__3611,G__3612,G__3613,G__3614);
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6 = (function (G__3616,G__3617,G__3618,G__3619,G__3620,G__3621){
return java.time.LocalDateTime.of(G__3616,G__3617,G__3618,G__3619,G__3620,G__3621);
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7 = (function (G__3623,G__3624,G__3625,G__3626,G__3627,G__3628,G__3629){
return java.time.LocalDateTime.of(G__3623,G__3624,G__3625,G__3626,G__3627,G__3628,G__3629);
}));

(cljc.java_time.local_date_time.of.cljs$lang$maxFixedArity = 7);

cljc.java_time.local_date_time.with_month = (function cljc$java_time$local_date_time$with_month(this3630,int3631){
return this3630.withMonth(int3631);
});
cljc.java_time.local_date_time.is_equal = (function cljc$java_time$local_date_time$is_equal(this3632,java_time_chrono_ChronoLocalDateTime3633){
return this3632.isEqual(java_time_chrono_ChronoLocalDateTime3633);
});
cljc.java_time.local_date_time.get_nano = (function cljc$java_time$local_date_time$get_nano(this3634){
return this3634.nano();
});
cljc.java_time.local_date_time.get_year = (function cljc$java_time$local_date_time$get_year(this3635){
return this3635.year();
});
cljc.java_time.local_date_time.minus_seconds = (function cljc$java_time$local_date_time$minus_seconds(this3636,long3637){
return this3636.minusSeconds(long3637);
});
cljc.java_time.local_date_time.get_second = (function cljc$java_time$local_date_time$get_second(this3638){
return this3638.second();
});
cljc.java_time.local_date_time.plus_nanos = (function cljc$java_time$local_date_time$plus_nanos(this3639,long3640){
return this3639.plusNanos(long3640);
});
cljc.java_time.local_date_time.get_day_of_year = (function cljc$java_time$local_date_time$get_day_of_year(this3641){
return this3641.dayOfYear();
});
cljc.java_time.local_date_time.plus = (function cljc$java_time$local_date_time$plus(var_args){
var G__41723 = arguments.length;
switch (G__41723) {
case 3:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3642,G__3643,G__3644){
return this3642.plus(G__3643,G__3644);
}));

(cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3645,G__3646){
return this3645.plus(G__3646);
}));

(cljc.java_time.local_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.with_hour = (function cljc$java_time$local_date_time$with_hour(this3647,int3648){
return this3647.withHour(int3648);
});
cljc.java_time.local_date_time.with_minute = (function cljc$java_time$local_date_time$with_minute(this3649,int3650){
return this3649.withMinute(int3650);
});
cljc.java_time.local_date_time.plus_minutes = (function cljc$java_time$local_date_time$plus_minutes(this3651,long3652){
return this3651.plusMinutes(long3652);
});
cljc.java_time.local_date_time.query = (function cljc$java_time$local_date_time$query(this3653,java_time_temporal_TemporalQuery3654){
return this3653.query(java_time_temporal_TemporalQuery3654);
});
cljc.java_time.local_date_time.get_day_of_week = (function cljc$java_time$local_date_time$get_day_of_week(this3655){
return this3655.dayOfWeek();
});
cljc.java_time.local_date_time.to_string = (function cljc$java_time$local_date_time$to_string(this3656){
return this3656.toString();
});
cljc.java_time.local_date_time.plus_months = (function cljc$java_time$local_date_time$plus_months(this3657,long3658){
return this3657.plusMonths(long3658);
});
cljc.java_time.local_date_time.is_before = (function cljc$java_time$local_date_time$is_before(this3659,java_time_chrono_ChronoLocalDateTime3660){
return this3659.isBefore(java_time_chrono_ChronoLocalDateTime3660);
});
cljc.java_time.local_date_time.minus_months = (function cljc$java_time$local_date_time$minus_months(this3661,long3662){
return this3661.minusMonths(long3662);
});
cljc.java_time.local_date_time.minus = (function cljc$java_time$local_date_time$minus(var_args){
var G__41727 = arguments.length;
switch (G__41727) {
case 2:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3663,G__3664){
return this3663.minus(G__3664);
}));

(cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3665,G__3666,G__3667){
return this3665.minus(G__3666,G__3667);
}));

(cljc.java_time.local_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.at_zone = (function cljc$java_time$local_date_time$at_zone(this3668,G__3669){
return this3668.atZone(G__3669);
});
cljc.java_time.local_date_time.plus_hours = (function cljc$java_time$local_date_time$plus_hours(this3670,long3671){
return this3670.plusHours(long3671);
});
cljc.java_time.local_date_time.plus_days = (function cljc$java_time$local_date_time$plus_days(this3672,long3673){
return this3672.plusDays(long3673);
});
cljc.java_time.local_date_time.to_local_time = (function cljc$java_time$local_date_time$to_local_time(this3674){
return this3674.toLocalTime();
});
cljc.java_time.local_date_time.get_long = (function cljc$java_time$local_date_time$get_long(this3675,java_time_temporal_TemporalField3676){
return this3675.getLong(java_time_temporal_TemporalField3676);
});
cljc.java_time.local_date_time.with_year = (function cljc$java_time$local_date_time$with_year(this3677,int3678){
return this3677.withYear(int3678);
});
cljc.java_time.local_date_time.with_nano = (function cljc$java_time$local_date_time$with_nano(this3679,int3680){
return this3679.withNano(int3680);
});
cljc.java_time.local_date_time.to_epoch_second = (function cljc$java_time$local_date_time$to_epoch_second(this3681,java_time_ZoneOffset3682){
return this3681.toEpochSecond(java_time_ZoneOffset3682);
});
cljc.java_time.local_date_time.until = (function cljc$java_time$local_date_time$until(this3683,java_time_temporal_Temporal3684,java_time_temporal_TemporalUnit3685){
return this3683.until(java_time_temporal_Temporal3684,java_time_temporal_TemporalUnit3685);
});
cljc.java_time.local_date_time.with_day_of_month = (function cljc$java_time$local_date_time$with_day_of_month(this3686,int3687){
return this3686.withDayOfMonth(int3687);
});
cljc.java_time.local_date_time.get_day_of_month = (function cljc$java_time$local_date_time$get_day_of_month(this3688){
return this3688.dayOfMonth();
});
cljc.java_time.local_date_time.from = (function cljc$java_time$local_date_time$from(java_time_temporal_TemporalAccessor3689){
return java.time.LocalDateTime.from(java_time_temporal_TemporalAccessor3689);
});
cljc.java_time.local_date_time.is_after = (function cljc$java_time$local_date_time$is_after(this3690,java_time_chrono_ChronoLocalDateTime3691){
return this3690.isAfter(java_time_chrono_ChronoLocalDateTime3691);
});
cljc.java_time.local_date_time.minus_nanos = (function cljc$java_time$local_date_time$minus_nanos(this3692,long3693){
return this3692.minusNanos(long3693);
});
cljc.java_time.local_date_time.is_supported = (function cljc$java_time$local_date_time$is_supported(this3694,G__3695){
return this3694.isSupported(G__3695);
});
cljc.java_time.local_date_time.minus_years = (function cljc$java_time$local_date_time$minus_years(this3696,long3697){
return this3696.minusYears(long3697);
});
cljc.java_time.local_date_time.get_chronology = (function cljc$java_time$local_date_time$get_chronology(this3698){
return this3698.chronology();
});
cljc.java_time.local_date_time.parse = (function cljc$java_time$local_date_time$parse(var_args){
var G__41735 = arguments.length;
switch (G__41735) {
case 2:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3699,java_time_format_DateTimeFormatter3700){
return java.time.LocalDateTime.parse(java_lang_CharSequence3699,java_time_format_DateTimeFormatter3700);
}));

(cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3701){
return java.time.LocalDateTime.parse(java_lang_CharSequence3701);
}));

(cljc.java_time.local_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date_time.with_second = (function cljc$java_time$local_date_time$with_second(this3702,int3703){
return this3702.withSecond(int3703);
});
cljc.java_time.local_date_time.to_local_date = (function cljc$java_time$local_date_time$to_local_date(this3704){
return this3704.toLocalDate();
});
cljc.java_time.local_date_time.get_minute = (function cljc$java_time$local_date_time$get_minute(this3705){
return this3705.minute();
});
cljc.java_time.local_date_time.hash_code = (function cljc$java_time$local_date_time$hash_code(this3706){
return this3706.hashCode();
});
cljc.java_time.local_date_time.adjust_into = (function cljc$java_time$local_date_time$adjust_into(this3707,java_time_temporal_Temporal3708){
return this3707.adjustInto(java_time_temporal_Temporal3708);
});
cljc.java_time.local_date_time.with$ = (function cljc$java_time$local_date_time$with(var_args){
var G__41739 = arguments.length;
switch (G__41739) {
case 2:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3709,G__3710){
return this3709.with(G__3710);
}));

(cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3711,G__3712,G__3713){
return this3711.with(G__3712,G__3713);
}));

(cljc.java_time.local_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.now = (function cljc$java_time$local_date_time$now(var_args){
var G__41741 = arguments.length;
switch (G__41741) {
case 1:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3715){
return java.time.LocalDateTime.now(G__3715);
}));

(cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDateTime.now();
}));

(cljc.java_time.local_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_date_time.get_month_value = (function cljc$java_time$local_date_time$get_month_value(this3716){
return this3716.monthValue();
});
cljc.java_time.local_date_time.with_day_of_year = (function cljc$java_time$local_date_time$with_day_of_year(this3717,int3718){
return this3717.withDayOfYear(int3718);
});
cljc.java_time.local_date_time.compare_to = (function cljc$java_time$local_date_time$compare_to(this3719,G__3720){
return this3719.compareTo(G__3720);
});
cljc.java_time.local_date_time.get_month = (function cljc$java_time$local_date_time$get_month(this3721){
return this3721.month();
});
cljc.java_time.local_date_time.of_instant = (function cljc$java_time$local_date_time$of_instant(java_time_Instant3722,java_time_ZoneId3723){
return java.time.LocalDateTime.ofInstant(java_time_Instant3722,java_time_ZoneId3723);
});
cljc.java_time.local_date_time.plus_seconds = (function cljc$java_time$local_date_time$plus_seconds(this3724,long3725){
return this3724.plusSeconds(long3725);
});
cljc.java_time.local_date_time.get = (function cljc$java_time$local_date_time$get(this3726,java_time_temporal_TemporalField3727){
return this3726.get(java_time_temporal_TemporalField3727);
});
cljc.java_time.local_date_time.equals = (function cljc$java_time$local_date_time$equals(this3728,java_lang_Object3729){
return this3728.equals(java_lang_Object3729);
});
cljc.java_time.local_date_time.format = (function cljc$java_time$local_date_time$format(this3730,java_time_format_DateTimeFormatter3731){
return this3730.format(java_time_format_DateTimeFormatter3731);
});
cljc.java_time.local_date_time.plus_years = (function cljc$java_time$local_date_time$plus_years(this3732,long3733){
return this3732.plusYears(long3733);
});
cljc.java_time.local_date_time.minus_days = (function cljc$java_time$local_date_time$minus_days(this3734,long3735){
return this3734.minusDays(long3735);
});

//# sourceMappingURL=cljc.java_time.local_date_time.js.map

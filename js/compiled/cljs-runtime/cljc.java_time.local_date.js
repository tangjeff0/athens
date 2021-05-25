goog.provide('cljc.java_time.local_date');
cljc.java_time.local_date.max = java.time.LocalDate.MAX;
cljc.java_time.local_date.min = java.time.LocalDate.MIN;
cljc.java_time.local_date.minus_weeks = (function cljc$java_time$local_date$minus_weeks(this3475,long3476){
return this3475.minusWeeks(long3476);
});
cljc.java_time.local_date.plus_weeks = (function cljc$java_time$local_date$plus_weeks(this3477,long3478){
return this3477.plusWeeks(long3478);
});
cljc.java_time.local_date.length_of_year = (function cljc$java_time$local_date$length_of_year(this3479){
return this3479.lengthOfYear();
});
cljc.java_time.local_date.range = (function cljc$java_time$local_date$range(this3480,java_time_temporal_TemporalField3481){
return this3480.range(java_time_temporal_TemporalField3481);
});
cljc.java_time.local_date.get_era = (function cljc$java_time$local_date$get_era(this3482){
return this3482.era();
});
cljc.java_time.local_date.of = (function cljc$java_time$local_date$of(G__3484,G__3485,G__3486){
return java.time.LocalDate.of(G__3484,G__3485,G__3486);
});
cljc.java_time.local_date.with_month = (function cljc$java_time$local_date$with_month(this3487,int3488){
return this3487.withMonth(int3488);
});
cljc.java_time.local_date.is_equal = (function cljc$java_time$local_date$is_equal(this3489,java_time_chrono_ChronoLocalDate3490){
return this3489.isEqual(java_time_chrono_ChronoLocalDate3490);
});
cljc.java_time.local_date.get_year = (function cljc$java_time$local_date$get_year(this3491){
return this3491.year();
});
cljc.java_time.local_date.to_epoch_day = (function cljc$java_time$local_date$to_epoch_day(this3492){
return this3492.toEpochDay();
});
cljc.java_time.local_date.get_day_of_year = (function cljc$java_time$local_date$get_day_of_year(this3493){
return this3493.dayOfYear();
});
cljc.java_time.local_date.plus = (function cljc$java_time$local_date$plus(var_args){
var G__41715 = arguments.length;
switch (G__41715) {
case 2:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3494,G__3495){
return this3494.plus(G__3495);
}));

(cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3496,G__3497,G__3498){
return this3496.plus(G__3497,G__3498);
}));

(cljc.java_time.local_date.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.is_leap_year = (function cljc$java_time$local_date$is_leap_year(this3499){
return this3499.isLeapYear();
});
cljc.java_time.local_date.query = (function cljc$java_time$local_date$query(this3500,java_time_temporal_TemporalQuery3501){
return this3500.query(java_time_temporal_TemporalQuery3501);
});
cljc.java_time.local_date.get_day_of_week = (function cljc$java_time$local_date$get_day_of_week(this3502){
return this3502.dayOfWeek();
});
cljc.java_time.local_date.to_string = (function cljc$java_time$local_date$to_string(this3503){
return this3503.toString();
});
cljc.java_time.local_date.plus_months = (function cljc$java_time$local_date$plus_months(this3504,long3505){
return this3504.plusMonths(long3505);
});
cljc.java_time.local_date.is_before = (function cljc$java_time$local_date$is_before(this3506,java_time_chrono_ChronoLocalDate3507){
return this3506.isBefore(java_time_chrono_ChronoLocalDate3507);
});
cljc.java_time.local_date.minus_months = (function cljc$java_time$local_date$minus_months(this3508,long3509){
return this3508.minusMonths(long3509);
});
cljc.java_time.local_date.minus = (function cljc$java_time$local_date$minus(var_args){
var G__41719 = arguments.length;
switch (G__41719) {
case 2:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3510,G__3511){
return this3510.minus(G__3511);
}));

(cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3512,G__3513,G__3514){
return this3512.minus(G__3513,G__3514);
}));

(cljc.java_time.local_date.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.plus_days = (function cljc$java_time$local_date$plus_days(this3515,long3516){
return this3515.plusDays(long3516);
});
cljc.java_time.local_date.get_long = (function cljc$java_time$local_date$get_long(this3517,java_time_temporal_TemporalField3518){
return this3517.getLong(java_time_temporal_TemporalField3518);
});
cljc.java_time.local_date.with_year = (function cljc$java_time$local_date$with_year(this3519,int3520){
return this3519.withYear(int3520);
});
cljc.java_time.local_date.length_of_month = (function cljc$java_time$local_date$length_of_month(this3521){
return this3521.lengthOfMonth();
});
cljc.java_time.local_date.until = (function cljc$java_time$local_date$until(var_args){
var G__41721 = arguments.length;
switch (G__41721) {
case 2:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2 = (function (this3522,G__3523){
return this3522.until(G__3523);
}));

(cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3 = (function (this3524,java_time_temporal_Temporal3525,java_time_temporal_TemporalUnit3526){
return this3524.until(java_time_temporal_Temporal3525,java_time_temporal_TemporalUnit3526);
}));

(cljc.java_time.local_date.until.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.of_epoch_day = (function cljc$java_time$local_date$of_epoch_day(long3527){
return java.time.LocalDate.ofEpochDay(long3527);
});
cljc.java_time.local_date.with_day_of_month = (function cljc$java_time$local_date$with_day_of_month(this3528,int3529){
return this3528.withDayOfMonth(int3529);
});
cljc.java_time.local_date.get_day_of_month = (function cljc$java_time$local_date$get_day_of_month(this3530){
return this3530.dayOfMonth();
});
cljc.java_time.local_date.from = (function cljc$java_time$local_date$from(java_time_temporal_TemporalAccessor3531){
return java.time.LocalDate.from(java_time_temporal_TemporalAccessor3531);
});
cljc.java_time.local_date.is_after = (function cljc$java_time$local_date$is_after(this3532,java_time_chrono_ChronoLocalDate3533){
return this3532.isAfter(java_time_chrono_ChronoLocalDate3533);
});
cljc.java_time.local_date.is_supported = (function cljc$java_time$local_date$is_supported(this3534,G__3535){
return this3534.isSupported(G__3535);
});
cljc.java_time.local_date.minus_years = (function cljc$java_time$local_date$minus_years(this3536,long3537){
return this3536.minusYears(long3537);
});
cljc.java_time.local_date.get_chronology = (function cljc$java_time$local_date$get_chronology(this3538){
return this3538.chronology();
});
cljc.java_time.local_date.parse = (function cljc$java_time$local_date$parse(var_args){
var G__41725 = arguments.length;
switch (G__41725) {
case 1:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3539){
return java.time.LocalDate.parse(java_lang_CharSequence3539);
}));

(cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3540,java_time_format_DateTimeFormatter3541){
return java.time.LocalDate.parse(java_lang_CharSequence3540,java_time_format_DateTimeFormatter3541);
}));

(cljc.java_time.local_date.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date.hash_code = (function cljc$java_time$local_date$hash_code(this3542){
return this3542.hashCode();
});
cljc.java_time.local_date.adjust_into = (function cljc$java_time$local_date$adjust_into(this3543,java_time_temporal_Temporal3544){
return this3543.adjustInto(java_time_temporal_Temporal3544);
});
cljc.java_time.local_date.with$ = (function cljc$java_time$local_date$with(var_args){
var G__41729 = arguments.length;
switch (G__41729) {
case 3:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3545,G__3546,G__3547){
return this3545.with(G__3546,G__3547);
}));

(cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3548,G__3549){
return this3548.with(G__3549);
}));

(cljc.java_time.local_date.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.now = (function cljc$java_time$local_date$now(var_args){
var G__41731 = arguments.length;
switch (G__41731) {
case 1:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3551){
return java.time.LocalDate.now(G__3551);
}));

(cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDate.now();
}));

(cljc.java_time.local_date.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_date.at_start_of_day = (function cljc$java_time$local_date$at_start_of_day(var_args){
var G__41733 = arguments.length;
switch (G__41733) {
case 1:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1 = (function (this3552){
return this3552.atStartOfDay();
}));

(cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2 = (function (this3553,java_time_ZoneId3554){
return this3553.atStartOfDay(java_time_ZoneId3554);
}));

(cljc.java_time.local_date.at_start_of_day.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date.get_month_value = (function cljc$java_time$local_date$get_month_value(this3555){
return this3555.monthValue();
});
cljc.java_time.local_date.with_day_of_year = (function cljc$java_time$local_date$with_day_of_year(this3556,int3557){
return this3556.withDayOfYear(int3557);
});
cljc.java_time.local_date.compare_to = (function cljc$java_time$local_date$compare_to(this3558,G__3559){
return this3558.compareTo(G__3559);
});
cljc.java_time.local_date.get_month = (function cljc$java_time$local_date$get_month(this3560){
return this3560.month();
});
cljc.java_time.local_date.of_year_day = (function cljc$java_time$local_date$of_year_day(int3561,int3562){
return java.time.LocalDate.ofYearDay(int3561,int3562);
});
cljc.java_time.local_date.get = (function cljc$java_time$local_date$get(this3563,java_time_temporal_TemporalField3564){
return this3563.get(java_time_temporal_TemporalField3564);
});
cljc.java_time.local_date.equals = (function cljc$java_time$local_date$equals(this3565,java_lang_Object3566){
return this3565.equals(java_lang_Object3566);
});
cljc.java_time.local_date.at_time = (function cljc$java_time$local_date$at_time(var_args){
var G__41737 = arguments.length;
switch (G__41737) {
case 2:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2 = (function (this3567,G__3568){
return this3567.atTime(G__3568);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4 = (function (this3569,int3570,int3571,int3572){
return this3569.atTime(int3570,int3571,int3572);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3 = (function (this3573,int3574,int3575){
return this3573.atTime(int3574,int3575);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5 = (function (this3576,int3577,int3578,int3579,int3580){
return this3576.atTime(int3577,int3578,int3579,int3580);
}));

(cljc.java_time.local_date.at_time.cljs$lang$maxFixedArity = 5);

cljc.java_time.local_date.format = (function cljc$java_time$local_date$format(this3581,java_time_format_DateTimeFormatter3582){
return this3581.format(java_time_format_DateTimeFormatter3582);
});
cljc.java_time.local_date.plus_years = (function cljc$java_time$local_date$plus_years(this3583,long3584){
return this3583.plusYears(long3584);
});
cljc.java_time.local_date.minus_days = (function cljc$java_time$local_date$minus_days(this3585,long3586){
return this3585.minusDays(long3586);
});

//# sourceMappingURL=cljc.java_time.local_date.js.map

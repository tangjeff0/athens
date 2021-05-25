goog.provide('cljc.java_time.year');
cljc.java_time.year.min_value = java.time.Year.MIN_VALUE;
cljc.java_time.year.max_value = java.time.Year.MAX_VALUE;
cljc.java_time.year.range = (function cljc$java_time$year$range(this4502,java_time_temporal_TemporalField4503){
return this4502.range(java_time_temporal_TemporalField4503);
});
cljc.java_time.year.of = (function cljc$java_time$year$of(int4504){
return java.time.Year.of(int4504);
});
cljc.java_time.year.at_day = (function cljc$java_time$year$at_day(this4505,int4506){
return this4505.atDay(int4506);
});
cljc.java_time.year.plus = (function cljc$java_time$year$plus(var_args){
var G__41862 = arguments.length;
switch (G__41862) {
case 3:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4507,G__4508,G__4509){
return this4507.plus(G__4508,G__4509);
}));

(cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4510,G__4511){
return this4510.plus(G__4511);
}));

(cljc.java_time.year.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.is_valid_month_day = (function cljc$java_time$year$is_valid_month_day(this4512,java_time_MonthDay4513){
return this4512.isValidMonthDay(java_time_MonthDay4513);
});
cljc.java_time.year.query = (function cljc$java_time$year$query(this4514,java_time_temporal_TemporalQuery4515){
return this4514.query(java_time_temporal_TemporalQuery4515);
});
cljc.java_time.year.is_leap = (function cljc$java_time$year$is_leap(long57050){
return java.time.Year.isLeap(long57050);
});
cljc.java_time.year.to_string = (function cljc$java_time$year$to_string(this4516){
return this4516.toString();
});
cljc.java_time.year.is_before = (function cljc$java_time$year$is_before(this4517,java_time_Year4518){
return this4517.isBefore(java_time_Year4518);
});
cljc.java_time.year.minus = (function cljc$java_time$year$minus(var_args){
var G__41864 = arguments.length;
switch (G__41864) {
case 2:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4519,G__4520){
return this4519.minus(G__4520);
}));

(cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4521,G__4522,G__4523){
return this4521.minus(G__4522,G__4523);
}));

(cljc.java_time.year.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.at_month_day = (function cljc$java_time$year$at_month_day(this4524,java_time_MonthDay4525){
return this4524.atMonthDay(java_time_MonthDay4525);
});
cljc.java_time.year.get_value = (function cljc$java_time$year$get_value(this4526){
return this4526.value();
});
cljc.java_time.year.get_long = (function cljc$java_time$year$get_long(this4527,java_time_temporal_TemporalField4528){
return this4527.getLong(java_time_temporal_TemporalField4528);
});
cljc.java_time.year.at_month = (function cljc$java_time$year$at_month(this4529,G__4530){
return this4529.atMonth(G__4530);
});
cljc.java_time.year.until = (function cljc$java_time$year$until(this4531,java_time_temporal_Temporal4532,java_time_temporal_TemporalUnit4533){
return this4531.until(java_time_temporal_Temporal4532,java_time_temporal_TemporalUnit4533);
});
cljc.java_time.year.length = (function cljc$java_time$year$length(this4534){
return this4534.length();
});
cljc.java_time.year.from = (function cljc$java_time$year$from(java_time_temporal_TemporalAccessor4535){
return java.time.Year.from(java_time_temporal_TemporalAccessor4535);
});
cljc.java_time.year.is_after = (function cljc$java_time$year$is_after(this4536,java_time_Year4537){
return this4536.isAfter(java_time_Year4537);
});
cljc.java_time.year.is_supported = (function cljc$java_time$year$is_supported(this4538,G__4539){
return this4538.isSupported(G__4539);
});
cljc.java_time.year.minus_years = (function cljc$java_time$year$minus_years(this4540,long4541){
return this4540.minusYears(long4541);
});
cljc.java_time.year.parse = (function cljc$java_time$year$parse(var_args){
var G__41868 = arguments.length;
switch (G__41868) {
case 1:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4542){
return java.time.Year.parse(java_lang_CharSequence4542);
}));

(cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4543,java_time_format_DateTimeFormatter4544){
return java.time.Year.parse(java_lang_CharSequence4543,java_time_format_DateTimeFormatter4544);
}));

(cljc.java_time.year.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.year.hash_code = (function cljc$java_time$year$hash_code(this4545){
return this4545.hashCode();
});
cljc.java_time.year.adjust_into = (function cljc$java_time$year$adjust_into(this4546,java_time_temporal_Temporal4547){
return this4546.adjustInto(java_time_temporal_Temporal4547);
});
cljc.java_time.year.with$ = (function cljc$java_time$year$with(var_args){
var G__41870 = arguments.length;
switch (G__41870) {
case 2:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4548,G__4549){
return this4548.with(G__4549);
}));

(cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4550,G__4551,G__4552){
return this4550.with(G__4551,G__4552);
}));

(cljc.java_time.year.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.now = (function cljc$java_time$year$now(var_args){
var G__41872 = arguments.length;
switch (G__41872) {
case 0:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Year.now();
}));

(cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4554){
return java.time.Year.now(G__4554);
}));

(cljc.java_time.year.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.year.compare_to = (function cljc$java_time$year$compare_to(this4555,G__4556){
return this4555.compareTo(G__4556);
});
cljc.java_time.year.get = (function cljc$java_time$year$get(this4557,java_time_temporal_TemporalField4558){
return this4557.get(java_time_temporal_TemporalField4558);
});
cljc.java_time.year.equals = (function cljc$java_time$year$equals(this4559,java_lang_Object4560){
return this4559.equals(java_lang_Object4560);
});
cljc.java_time.year.format = (function cljc$java_time$year$format(this4561,java_time_format_DateTimeFormatter4562){
return this4561.format(java_time_format_DateTimeFormatter4562);
});
cljc.java_time.year.plus_years = (function cljc$java_time$year$plus_years(this4563,long4564){
return this4563.plusYears(long4564);
});

//# sourceMappingURL=cljc.java_time.year.js.map

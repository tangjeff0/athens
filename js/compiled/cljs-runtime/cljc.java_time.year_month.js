goog.provide('cljc.java_time.year_month');
cljc.java_time.year_month.length_of_year = (function cljc$java_time$year_month$length_of_year(this4565){
return this4565.lengthOfYear();
});
cljc.java_time.year_month.range = (function cljc$java_time$year_month$range(this4566,java_time_temporal_TemporalField4567){
return this4566.range(java_time_temporal_TemporalField4567);
});
cljc.java_time.year_month.is_valid_day = (function cljc$java_time$year_month$is_valid_day(this4568,int4569){
return this4568.isValidDay(int4569);
});
cljc.java_time.year_month.of = (function cljc$java_time$year_month$of(G__4571,G__4572){
return java.time.YearMonth.of(G__4571,G__4572);
});
cljc.java_time.year_month.with_month = (function cljc$java_time$year_month$with_month(this4573,int4574){
return this4573.withMonth(int4574);
});
cljc.java_time.year_month.at_day = (function cljc$java_time$year_month$at_day(this4575,int4576){
return this4575.atDay(int4576);
});
cljc.java_time.year_month.get_year = (function cljc$java_time$year_month$get_year(this4577){
return this4577.year();
});
cljc.java_time.year_month.plus = (function cljc$java_time$year_month$plus(var_args){
var G__41843 = arguments.length;
switch (G__41843) {
case 3:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4578,G__4579,G__4580){
return this4578.plus(G__4579,G__4580);
}));

(cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4581,G__4582){
return this4581.plus(G__4582);
}));

(cljc.java_time.year_month.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.is_leap_year = (function cljc$java_time$year_month$is_leap_year(this4583){
return this4583.isLeapYear();
});
cljc.java_time.year_month.query = (function cljc$java_time$year_month$query(this4584,java_time_temporal_TemporalQuery4585){
return this4584.query(java_time_temporal_TemporalQuery4585);
});
cljc.java_time.year_month.to_string = (function cljc$java_time$year_month$to_string(this4586){
return this4586.toString();
});
cljc.java_time.year_month.plus_months = (function cljc$java_time$year_month$plus_months(this4587,long4588){
return this4587.plusMonths(long4588);
});
cljc.java_time.year_month.is_before = (function cljc$java_time$year_month$is_before(this4589,java_time_YearMonth4590){
return this4589.isBefore(java_time_YearMonth4590);
});
cljc.java_time.year_month.minus_months = (function cljc$java_time$year_month$minus_months(this4591,long4592){
return this4591.minusMonths(long4592);
});
cljc.java_time.year_month.minus = (function cljc$java_time$year_month$minus(var_args){
var G__41846 = arguments.length;
switch (G__41846) {
case 3:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4593,G__4594,G__4595){
return this4593.minus(G__4594,G__4595);
}));

(cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4596,G__4597){
return this4596.minus(G__4597);
}));

(cljc.java_time.year_month.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.get_long = (function cljc$java_time$year_month$get_long(this4598,java_time_temporal_TemporalField4599){
return this4598.getLong(java_time_temporal_TemporalField4599);
});
cljc.java_time.year_month.with_year = (function cljc$java_time$year_month$with_year(this4600,int4601){
return this4600.withYear(int4601);
});
cljc.java_time.year_month.at_end_of_month = (function cljc$java_time$year_month$at_end_of_month(this4602){
return this4602.atEndOfMonth();
});
cljc.java_time.year_month.length_of_month = (function cljc$java_time$year_month$length_of_month(this4603){
return this4603.lengthOfMonth();
});
cljc.java_time.year_month.until = (function cljc$java_time$year_month$until(this4604,java_time_temporal_Temporal4605,java_time_temporal_TemporalUnit4606){
return this4604.until(java_time_temporal_Temporal4605,java_time_temporal_TemporalUnit4606);
});
cljc.java_time.year_month.from = (function cljc$java_time$year_month$from(java_time_temporal_TemporalAccessor4607){
return java.time.YearMonth.from(java_time_temporal_TemporalAccessor4607);
});
cljc.java_time.year_month.is_after = (function cljc$java_time$year_month$is_after(this4608,java_time_YearMonth4609){
return this4608.isAfter(java_time_YearMonth4609);
});
cljc.java_time.year_month.is_supported = (function cljc$java_time$year_month$is_supported(this4610,G__4611){
return this4610.isSupported(G__4611);
});
cljc.java_time.year_month.minus_years = (function cljc$java_time$year_month$minus_years(this4612,long4613){
return this4612.minusYears(long4613);
});
cljc.java_time.year_month.parse = (function cljc$java_time$year_month$parse(var_args){
var G__41848 = arguments.length;
switch (G__41848) {
case 2:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4614,java_time_format_DateTimeFormatter4615){
return java.time.YearMonth.parse(java_lang_CharSequence4614,java_time_format_DateTimeFormatter4615);
}));

(cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4616){
return java.time.YearMonth.parse(java_lang_CharSequence4616);
}));

(cljc.java_time.year_month.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.year_month.hash_code = (function cljc$java_time$year_month$hash_code(this4617){
return this4617.hashCode();
});
cljc.java_time.year_month.adjust_into = (function cljc$java_time$year_month$adjust_into(this4618,java_time_temporal_Temporal4619){
return this4618.adjustInto(java_time_temporal_Temporal4619);
});
cljc.java_time.year_month.with$ = (function cljc$java_time$year_month$with(var_args){
var G__41850 = arguments.length;
switch (G__41850) {
case 3:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4620,G__4621,G__4622){
return this4620.with(G__4621,G__4622);
}));

(cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4623,G__4624){
return this4623.with(G__4624);
}));

(cljc.java_time.year_month.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.now = (function cljc$java_time$year_month$now(var_args){
var G__41852 = arguments.length;
switch (G__41852) {
case 1:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4626){
return java.time.YearMonth.now(G__4626);
}));

(cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.YearMonth.now();
}));

(cljc.java_time.year_month.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.year_month.get_month_value = (function cljc$java_time$year_month$get_month_value(this4627){
return this4627.monthValue();
});
cljc.java_time.year_month.compare_to = (function cljc$java_time$year_month$compare_to(this4628,G__4629){
return this4628.compareTo(G__4629);
});
cljc.java_time.year_month.get_month = (function cljc$java_time$year_month$get_month(this4630){
return this4630.month();
});
cljc.java_time.year_month.get = (function cljc$java_time$year_month$get(this4631,java_time_temporal_TemporalField4632){
return this4631.get(java_time_temporal_TemporalField4632);
});
cljc.java_time.year_month.equals = (function cljc$java_time$year_month$equals(this4633,java_lang_Object4634){
return this4633.equals(java_lang_Object4634);
});
cljc.java_time.year_month.format = (function cljc$java_time$year_month$format(this4635,java_time_format_DateTimeFormatter4636){
return this4635.format(java_time_format_DateTimeFormatter4636);
});
cljc.java_time.year_month.plus_years = (function cljc$java_time$year_month$plus_years(this4637,long4638){
return this4637.plusYears(long4638);
});

//# sourceMappingURL=cljc.java_time.year_month.js.map

goog.provide('cljc.java_time.offset_date_time');
cljc.java_time.offset_date_time.min = java.time.OffsetDateTime.MIN;
cljc.java_time.offset_date_time.max = java.time.OffsetDateTime.MAX;
cljc.java_time.offset_date_time.minus_minutes = (function cljc$java_time$offset_date_time$minus_minutes(this4049,long4050){
return this4049.minusMinutes(long4050);
});
cljc.java_time.offset_date_time.truncated_to = (function cljc$java_time$offset_date_time$truncated_to(this4051,java_time_temporal_TemporalUnit4052){
return this4051.truncatedTo(java_time_temporal_TemporalUnit4052);
});
cljc.java_time.offset_date_time.minus_weeks = (function cljc$java_time$offset_date_time$minus_weeks(this4053,long4054){
return this4053.minusWeeks(long4054);
});
cljc.java_time.offset_date_time.to_instant = (function cljc$java_time$offset_date_time$to_instant(this4055){
return this4055.toInstant();
});
cljc.java_time.offset_date_time.plus_weeks = (function cljc$java_time$offset_date_time$plus_weeks(this4056,long4057){
return this4056.plusWeeks(long4057);
});
cljc.java_time.offset_date_time.range = (function cljc$java_time$offset_date_time$range(this4058,java_time_temporal_TemporalField4059){
return this4058.range(java_time_temporal_TemporalField4059);
});
cljc.java_time.offset_date_time.get_hour = (function cljc$java_time$offset_date_time$get_hour(this4060){
return this4060.hour();
});
cljc.java_time.offset_date_time.at_zone_same_instant = (function cljc$java_time$offset_date_time$at_zone_same_instant(this4061,java_time_ZoneId4062){
return this4061.atZoneSameInstant(java_time_ZoneId4062);
});
cljc.java_time.offset_date_time.minus_hours = (function cljc$java_time$offset_date_time$minus_hours(this4063,long4064){
return this4063.minusHours(long4064);
});
cljc.java_time.offset_date_time.of = (function cljc$java_time$offset_date_time$of(var_args){
var G__41804 = arguments.length;
switch (G__41804) {
case 2:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 8:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 3:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime4065,java_time_ZoneOffset4066){
return java.time.OffsetDateTime.of(java_time_LocalDateTime4065,java_time_ZoneOffset4066);
}));

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int4067,int4068,int4069,int4070,int4071,int4072,int4073,java_time_ZoneOffset4074){
return java.time.OffsetDateTime.of(int4067,int4068,int4069,int4070,int4071,int4072,int4073,java_time_ZoneOffset4074);
}));

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate4075,java_time_LocalTime4076,java_time_ZoneOffset4077){
return java.time.OffsetDateTime.of(java_time_LocalDate4075,java_time_LocalTime4076,java_time_ZoneOffset4077);
}));

(cljc.java_time.offset_date_time.of.cljs$lang$maxFixedArity = 8);

cljc.java_time.offset_date_time.with_month = (function cljc$java_time$offset_date_time$with_month(this4078,int4079){
return this4078.withMonth(int4079);
});
cljc.java_time.offset_date_time.is_equal = (function cljc$java_time$offset_date_time$is_equal(this4080,java_time_OffsetDateTime4081){
return this4080.isEqual(java_time_OffsetDateTime4081);
});
cljc.java_time.offset_date_time.get_nano = (function cljc$java_time$offset_date_time$get_nano(this4082){
return this4082.nano();
});
cljc.java_time.offset_date_time.to_offset_time = (function cljc$java_time$offset_date_time$to_offset_time(this4083){
return this4083.toOffsetTime();
});
cljc.java_time.offset_date_time.at_zone_similar_local = (function cljc$java_time$offset_date_time$at_zone_similar_local(this4084,java_time_ZoneId4085){
return this4084.atZoneSimilarLocal(java_time_ZoneId4085);
});
cljc.java_time.offset_date_time.get_year = (function cljc$java_time$offset_date_time$get_year(this4086){
return this4086.year();
});
cljc.java_time.offset_date_time.minus_seconds = (function cljc$java_time$offset_date_time$minus_seconds(this4087,long4088){
return this4087.minusSeconds(long4088);
});
cljc.java_time.offset_date_time.get_second = (function cljc$java_time$offset_date_time$get_second(this4089){
return this4089.second();
});
cljc.java_time.offset_date_time.plus_nanos = (function cljc$java_time$offset_date_time$plus_nanos(this4090,long4091){
return this4090.plusNanos(long4091);
});
cljc.java_time.offset_date_time.get_day_of_year = (function cljc$java_time$offset_date_time$get_day_of_year(this4092){
return this4092.dayOfYear();
});
cljc.java_time.offset_date_time.plus = (function cljc$java_time$offset_date_time$plus(var_args){
var G__41810 = arguments.length;
switch (G__41810) {
case 2:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4093,G__4094){
return this4093.plus(G__4094);
}));

(cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4095,G__4096,G__4097){
return this4095.plus(G__4096,G__4097);
}));

(cljc.java_time.offset_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.time_line_order = (function cljc$java_time$offset_date_time$time_line_order(){
return java.time.OffsetDateTime.timeLineOrder();
});
cljc.java_time.offset_date_time.with_hour = (function cljc$java_time$offset_date_time$with_hour(this4098,int4099){
return this4098.withHour(int4099);
});
cljc.java_time.offset_date_time.with_minute = (function cljc$java_time$offset_date_time$with_minute(this4100,int4101){
return this4100.withMinute(int4101);
});
cljc.java_time.offset_date_time.plus_minutes = (function cljc$java_time$offset_date_time$plus_minutes(this4102,long4103){
return this4102.plusMinutes(long4103);
});
cljc.java_time.offset_date_time.query = (function cljc$java_time$offset_date_time$query(this4104,java_time_temporal_TemporalQuery4105){
return this4104.query(java_time_temporal_TemporalQuery4105);
});
cljc.java_time.offset_date_time.with_offset_same_instant = (function cljc$java_time$offset_date_time$with_offset_same_instant(this4106,java_time_ZoneOffset4107){
return this4106.withOffsetSameInstant(java_time_ZoneOffset4107);
});
cljc.java_time.offset_date_time.get_day_of_week = (function cljc$java_time$offset_date_time$get_day_of_week(this4108){
return this4108.dayOfWeek();
});
cljc.java_time.offset_date_time.to_string = (function cljc$java_time$offset_date_time$to_string(this4109){
return this4109.toString();
});
cljc.java_time.offset_date_time.plus_months = (function cljc$java_time$offset_date_time$plus_months(this4110,long4111){
return this4110.plusMonths(long4111);
});
cljc.java_time.offset_date_time.is_before = (function cljc$java_time$offset_date_time$is_before(this4112,java_time_OffsetDateTime4113){
return this4112.isBefore(java_time_OffsetDateTime4113);
});
cljc.java_time.offset_date_time.minus_months = (function cljc$java_time$offset_date_time$minus_months(this4114,long4115){
return this4114.minusMonths(long4115);
});
cljc.java_time.offset_date_time.minus = (function cljc$java_time$offset_date_time$minus(var_args){
var G__41814 = arguments.length;
switch (G__41814) {
case 2:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4116,G__4117){
return this4116.minus(G__4117);
}));

(cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4118,G__4119,G__4120){
return this4118.minus(G__4119,G__4120);
}));

(cljc.java_time.offset_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.plus_hours = (function cljc$java_time$offset_date_time$plus_hours(this4121,long4122){
return this4121.plusHours(long4122);
});
cljc.java_time.offset_date_time.plus_days = (function cljc$java_time$offset_date_time$plus_days(this4123,long4124){
return this4123.plusDays(long4124);
});
cljc.java_time.offset_date_time.to_local_time = (function cljc$java_time$offset_date_time$to_local_time(this4125){
return this4125.toLocalTime();
});
cljc.java_time.offset_date_time.get_long = (function cljc$java_time$offset_date_time$get_long(this4126,java_time_temporal_TemporalField4127){
return this4126.getLong(java_time_temporal_TemporalField4127);
});
cljc.java_time.offset_date_time.get_offset = (function cljc$java_time$offset_date_time$get_offset(this4128){
return this4128.offset();
});
cljc.java_time.offset_date_time.to_zoned_date_time = (function cljc$java_time$offset_date_time$to_zoned_date_time(this4129){
return this4129.toZonedDateTime();
});
cljc.java_time.offset_date_time.with_year = (function cljc$java_time$offset_date_time$with_year(this4130,int4131){
return this4130.withYear(int4131);
});
cljc.java_time.offset_date_time.with_nano = (function cljc$java_time$offset_date_time$with_nano(this4132,int4133){
return this4132.withNano(int4133);
});
cljc.java_time.offset_date_time.to_epoch_second = (function cljc$java_time$offset_date_time$to_epoch_second(this4134){
return this4134.toEpochSecond();
});
cljc.java_time.offset_date_time.until = (function cljc$java_time$offset_date_time$until(this4135,java_time_temporal_Temporal4136,java_time_temporal_TemporalUnit4137){
return this4135.until(java_time_temporal_Temporal4136,java_time_temporal_TemporalUnit4137);
});
cljc.java_time.offset_date_time.with_offset_same_local = (function cljc$java_time$offset_date_time$with_offset_same_local(this4138,java_time_ZoneOffset4139){
return this4138.withOffsetSameLocal(java_time_ZoneOffset4139);
});
cljc.java_time.offset_date_time.with_day_of_month = (function cljc$java_time$offset_date_time$with_day_of_month(this4140,int4141){
return this4140.withDayOfMonth(int4141);
});
cljc.java_time.offset_date_time.get_day_of_month = (function cljc$java_time$offset_date_time$get_day_of_month(this4142){
return this4142.dayOfMonth();
});
cljc.java_time.offset_date_time.from = (function cljc$java_time$offset_date_time$from(java_time_temporal_TemporalAccessor4143){
return java.time.OffsetDateTime.from(java_time_temporal_TemporalAccessor4143);
});
cljc.java_time.offset_date_time.is_after = (function cljc$java_time$offset_date_time$is_after(this4144,java_time_OffsetDateTime4145){
return this4144.isAfter(java_time_OffsetDateTime4145);
});
cljc.java_time.offset_date_time.minus_nanos = (function cljc$java_time$offset_date_time$minus_nanos(this4146,long4147){
return this4146.minusNanos(long4147);
});
cljc.java_time.offset_date_time.is_supported = (function cljc$java_time$offset_date_time$is_supported(this4148,G__4149){
return this4148.isSupported(G__4149);
});
cljc.java_time.offset_date_time.minus_years = (function cljc$java_time$offset_date_time$minus_years(this4150,long4151){
return this4150.minusYears(long4151);
});
cljc.java_time.offset_date_time.parse = (function cljc$java_time$offset_date_time$parse(var_args){
var G__41822 = arguments.length;
switch (G__41822) {
case 1:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4152){
return java.time.OffsetDateTime.parse(java_lang_CharSequence4152);
}));

(cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4153,java_time_format_DateTimeFormatter4154){
return java.time.OffsetDateTime.parse(java_lang_CharSequence4153,java_time_format_DateTimeFormatter4154);
}));

(cljc.java_time.offset_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.offset_date_time.with_second = (function cljc$java_time$offset_date_time$with_second(this4155,int4156){
return this4155.withSecond(int4156);
});
cljc.java_time.offset_date_time.to_local_date = (function cljc$java_time$offset_date_time$to_local_date(this4157){
return this4157.toLocalDate();
});
cljc.java_time.offset_date_time.get_minute = (function cljc$java_time$offset_date_time$get_minute(this4158){
return this4158.minute();
});
cljc.java_time.offset_date_time.hash_code = (function cljc$java_time$offset_date_time$hash_code(this4159){
return this4159.hashCode();
});
cljc.java_time.offset_date_time.adjust_into = (function cljc$java_time$offset_date_time$adjust_into(this4160,java_time_temporal_Temporal4161){
return this4160.adjustInto(java_time_temporal_Temporal4161);
});
cljc.java_time.offset_date_time.with$ = (function cljc$java_time$offset_date_time$with(var_args){
var G__41825 = arguments.length;
switch (G__41825) {
case 2:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4162,G__4163){
return this4162.with(G__4163);
}));

(cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4164,G__4165,G__4166){
return this4164.with(G__4165,G__4166);
}));

(cljc.java_time.offset_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.now = (function cljc$java_time$offset_date_time$now(var_args){
var G__41827 = arguments.length;
switch (G__41827) {
case 0:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.OffsetDateTime.now();
}));

(cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4168){
return java.time.OffsetDateTime.now(G__4168);
}));

(cljc.java_time.offset_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.offset_date_time.to_local_date_time = (function cljc$java_time$offset_date_time$to_local_date_time(this4169){
return this4169.toLocalDateTime();
});
cljc.java_time.offset_date_time.get_month_value = (function cljc$java_time$offset_date_time$get_month_value(this4170){
return this4170.monthValue();
});
cljc.java_time.offset_date_time.with_day_of_year = (function cljc$java_time$offset_date_time$with_day_of_year(this4171,int4172){
return this4171.withDayOfYear(int4172);
});
cljc.java_time.offset_date_time.compare_to = (function cljc$java_time$offset_date_time$compare_to(this4173,G__4174){
return this4173.compareTo(G__4174);
});
cljc.java_time.offset_date_time.get_month = (function cljc$java_time$offset_date_time$get_month(this4175){
return this4175.month();
});
cljc.java_time.offset_date_time.of_instant = (function cljc$java_time$offset_date_time$of_instant(java_time_Instant4176,java_time_ZoneId4177){
return java.time.OffsetDateTime.ofInstant(java_time_Instant4176,java_time_ZoneId4177);
});
cljc.java_time.offset_date_time.plus_seconds = (function cljc$java_time$offset_date_time$plus_seconds(this4178,long4179){
return this4178.plusSeconds(long4179);
});
cljc.java_time.offset_date_time.get = (function cljc$java_time$offset_date_time$get(this4180,java_time_temporal_TemporalField4181){
return this4180.get(java_time_temporal_TemporalField4181);
});
cljc.java_time.offset_date_time.equals = (function cljc$java_time$offset_date_time$equals(this4182,java_lang_Object4183){
return this4182.equals(java_lang_Object4183);
});
cljc.java_time.offset_date_time.format = (function cljc$java_time$offset_date_time$format(this4184,java_time_format_DateTimeFormatter4185){
return this4184.format(java_time_format_DateTimeFormatter4185);
});
cljc.java_time.offset_date_time.plus_years = (function cljc$java_time$offset_date_time$plus_years(this4186,long4187){
return this4186.plusYears(long4187);
});
cljc.java_time.offset_date_time.minus_days = (function cljc$java_time$offset_date_time$minus_days(this4188,long4189){
return this4188.minusDays(long4189);
});

//# sourceMappingURL=cljc.java_time.offset_date_time.js.map

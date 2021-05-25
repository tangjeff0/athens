goog.provide('cljc.java_time.local_time');
cljc.java_time.local_time.max = java.time.LocalTime.MAX;
cljc.java_time.local_time.noon = java.time.LocalTime.NOON;
cljc.java_time.local_time.midnight = java.time.LocalTime.MIDNIGHT;
cljc.java_time.local_time.min = java.time.LocalTime.MIN;
cljc.java_time.local_time.minus_minutes = (function cljc$java_time$local_time$minus_minutes(this4240,long4241){
return this4240.minusMinutes(long4241);
});
cljc.java_time.local_time.truncated_to = (function cljc$java_time$local_time$truncated_to(this4242,java_time_temporal_TemporalUnit4243){
return this4242.truncatedTo(java_time_temporal_TemporalUnit4243);
});
cljc.java_time.local_time.range = (function cljc$java_time$local_time$range(this4244,java_time_temporal_TemporalField4245){
return this4244.range(java_time_temporal_TemporalField4245);
});
cljc.java_time.local_time.get_hour = (function cljc$java_time$local_time$get_hour(this4246){
return this4246.hour();
});
cljc.java_time.local_time.at_offset = (function cljc$java_time$local_time$at_offset(this4247,java_time_ZoneOffset4248){
return this4247.atOffset(java_time_ZoneOffset4248);
});
cljc.java_time.local_time.minus_hours = (function cljc$java_time$local_time$minus_hours(this4249,long4250){
return this4249.minusHours(long4250);
});
cljc.java_time.local_time.of = (function cljc$java_time$local_time$of(var_args){
var G__41757 = arguments.length;
switch (G__41757) {
case 3:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3 = (function (int4251,int4252,int4253){
return java.time.LocalTime.of(int4251,int4252,int4253);
}));

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4 = (function (int4254,int4255,int4256,int4257){
return java.time.LocalTime.of(int4254,int4255,int4256,int4257);
}));

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2 = (function (int4258,int4259){
return java.time.LocalTime.of(int4258,int4259);
}));

(cljc.java_time.local_time.of.cljs$lang$maxFixedArity = 4);

cljc.java_time.local_time.get_nano = (function cljc$java_time$local_time$get_nano(this4260){
return this4260.nano();
});
cljc.java_time.local_time.minus_seconds = (function cljc$java_time$local_time$minus_seconds(this4261,long4262){
return this4261.minusSeconds(long4262);
});
cljc.java_time.local_time.get_second = (function cljc$java_time$local_time$get_second(this4263){
return this4263.second();
});
cljc.java_time.local_time.plus_nanos = (function cljc$java_time$local_time$plus_nanos(this4264,long4265){
return this4264.plusNanos(long4265);
});
cljc.java_time.local_time.plus = (function cljc$java_time$local_time$plus(var_args){
var G__41759 = arguments.length;
switch (G__41759) {
case 2:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4266,G__4267){
return this4266.plus(G__4267);
}));

(cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4268,G__4269,G__4270){
return this4268.plus(G__4269,G__4270);
}));

(cljc.java_time.local_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.with_hour = (function cljc$java_time$local_time$with_hour(this4271,int4272){
return this4271.withHour(int4272);
});
cljc.java_time.local_time.with_minute = (function cljc$java_time$local_time$with_minute(this4273,int4274){
return this4273.withMinute(int4274);
});
cljc.java_time.local_time.plus_minutes = (function cljc$java_time$local_time$plus_minutes(this4275,long4276){
return this4275.plusMinutes(long4276);
});
cljc.java_time.local_time.query = (function cljc$java_time$local_time$query(this4277,java_time_temporal_TemporalQuery4278){
return this4277.query(java_time_temporal_TemporalQuery4278);
});
cljc.java_time.local_time.at_date = (function cljc$java_time$local_time$at_date(this4279,java_time_LocalDate4280){
return this4279.atDate(java_time_LocalDate4280);
});
cljc.java_time.local_time.to_string = (function cljc$java_time$local_time$to_string(this4281){
return this4281.toString();
});
cljc.java_time.local_time.is_before = (function cljc$java_time$local_time$is_before(this4282,java_time_LocalTime4283){
return this4282.isBefore(java_time_LocalTime4283);
});
cljc.java_time.local_time.minus = (function cljc$java_time$local_time$minus(var_args){
var G__41761 = arguments.length;
switch (G__41761) {
case 2:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4284,G__4285){
return this4284.minus(G__4285);
}));

(cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4286,G__4287,G__4288){
return this4286.minus(G__4287,G__4288);
}));

(cljc.java_time.local_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.plus_hours = (function cljc$java_time$local_time$plus_hours(this4289,long4290){
return this4289.plusHours(long4290);
});
cljc.java_time.local_time.to_second_of_day = (function cljc$java_time$local_time$to_second_of_day(this4291){
return this4291.toSecondOfDay();
});
cljc.java_time.local_time.get_long = (function cljc$java_time$local_time$get_long(this4292,java_time_temporal_TemporalField4293){
return this4292.getLong(java_time_temporal_TemporalField4293);
});
cljc.java_time.local_time.with_nano = (function cljc$java_time$local_time$with_nano(this4294,int4295){
return this4294.withNano(int4295);
});
cljc.java_time.local_time.until = (function cljc$java_time$local_time$until(this4296,java_time_temporal_Temporal4297,java_time_temporal_TemporalUnit4298){
return this4296.until(java_time_temporal_Temporal4297,java_time_temporal_TemporalUnit4298);
});
cljc.java_time.local_time.of_nano_of_day = (function cljc$java_time$local_time$of_nano_of_day(long4299){
return java.time.LocalTime.ofNanoOfDay(long4299);
});
cljc.java_time.local_time.from = (function cljc$java_time$local_time$from(java_time_temporal_TemporalAccessor4300){
return java.time.LocalTime.from(java_time_temporal_TemporalAccessor4300);
});
cljc.java_time.local_time.is_after = (function cljc$java_time$local_time$is_after(this4301,java_time_LocalTime4302){
return this4301.isAfter(java_time_LocalTime4302);
});
cljc.java_time.local_time.minus_nanos = (function cljc$java_time$local_time$minus_nanos(this4303,long4304){
return this4303.minusNanos(long4304);
});
cljc.java_time.local_time.is_supported = (function cljc$java_time$local_time$is_supported(this4305,G__4306){
return this4305.isSupported(G__4306);
});
cljc.java_time.local_time.parse = (function cljc$java_time$local_time$parse(var_args){
var G__41763 = arguments.length;
switch (G__41763) {
case 2:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4307,java_time_format_DateTimeFormatter4308){
return java.time.LocalTime.parse(java_lang_CharSequence4307,java_time_format_DateTimeFormatter4308);
}));

(cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4309){
return java.time.LocalTime.parse(java_lang_CharSequence4309);
}));

(cljc.java_time.local_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_time.with_second = (function cljc$java_time$local_time$with_second(this4310,int4311){
return this4310.withSecond(int4311);
});
cljc.java_time.local_time.get_minute = (function cljc$java_time$local_time$get_minute(this4312){
return this4312.minute();
});
cljc.java_time.local_time.hash_code = (function cljc$java_time$local_time$hash_code(this4313){
return this4313.hashCode();
});
cljc.java_time.local_time.adjust_into = (function cljc$java_time$local_time$adjust_into(this4314,java_time_temporal_Temporal4315){
return this4314.adjustInto(java_time_temporal_Temporal4315);
});
cljc.java_time.local_time.with$ = (function cljc$java_time$local_time$with(var_args){
var G__41765 = arguments.length;
switch (G__41765) {
case 2:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4316,G__4317){
return this4316.with(G__4317);
}));

(cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4318,G__4319,G__4320){
return this4318.with(G__4319,G__4320);
}));

(cljc.java_time.local_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.now = (function cljc$java_time$local_time$now(var_args){
var G__41767 = arguments.length;
switch (G__41767) {
case 1:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4322){
return java.time.LocalTime.now(G__4322);
}));

(cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalTime.now();
}));

(cljc.java_time.local_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_time.compare_to = (function cljc$java_time$local_time$compare_to(this4323,G__4324){
return this4323.compareTo(G__4324);
});
cljc.java_time.local_time.to_nano_of_day = (function cljc$java_time$local_time$to_nano_of_day(this4325){
return this4325.toNanoOfDay();
});
cljc.java_time.local_time.plus_seconds = (function cljc$java_time$local_time$plus_seconds(this4326,long4327){
return this4326.plusSeconds(long4327);
});
cljc.java_time.local_time.get = (function cljc$java_time$local_time$get(this4328,java_time_temporal_TemporalField4329){
return this4328.get(java_time_temporal_TemporalField4329);
});
cljc.java_time.local_time.of_second_of_day = (function cljc$java_time$local_time$of_second_of_day(long4330){
return java.time.LocalTime.ofSecondOfDay(long4330);
});
cljc.java_time.local_time.equals = (function cljc$java_time$local_time$equals(this4331,java_lang_Object4332){
return this4331.equals(java_lang_Object4332);
});
cljc.java_time.local_time.format = (function cljc$java_time$local_time$format(this4333,java_time_format_DateTimeFormatter4334){
return this4333.format(java_time_format_DateTimeFormatter4334);
});

//# sourceMappingURL=cljc.java_time.local_time.js.map

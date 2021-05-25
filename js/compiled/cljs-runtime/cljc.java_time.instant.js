goog.provide('cljc.java_time.instant');
cljc.java_time.instant.min = java.time.Instant.MIN;
cljc.java_time.instant.epoch = java.time.Instant.EPOCH;
cljc.java_time.instant.max = java.time.Instant.MAX;
cljc.java_time.instant.truncated_to = (function cljc$java_time$instant$truncated_to(this3981,java_time_temporal_TemporalUnit3982){
return this3981.truncatedTo(java_time_temporal_TemporalUnit3982);
});
cljc.java_time.instant.range = (function cljc$java_time$instant$range(this3983,java_time_temporal_TemporalField3984){
return this3983.range(java_time_temporal_TemporalField3984);
});
cljc.java_time.instant.of_epoch_second = (function cljc$java_time$instant$of_epoch_second(var_args){
var G__41769 = arguments.length;
switch (G__41769) {
case 1:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1 = (function (long3985){
return java.time.Instant.ofEpochSecond(long3985);
}));

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2 = (function (long3986,long3987){
return java.time.Instant.ofEpochSecond(long3986,long3987);
}));

(cljc.java_time.instant.of_epoch_second.cljs$lang$maxFixedArity = 2);

cljc.java_time.instant.at_offset = (function cljc$java_time$instant$at_offset(this3988,java_time_ZoneOffset3989){
return this3988.atOffset(java_time_ZoneOffset3989);
});
cljc.java_time.instant.minus_millis = (function cljc$java_time$instant$minus_millis(this3990,long3991){
return this3990.minusMillis(long3991);
});
cljc.java_time.instant.get_nano = (function cljc$java_time$instant$get_nano(this3992){
return this3992.nano();
});
cljc.java_time.instant.plus_millis = (function cljc$java_time$instant$plus_millis(this3993,long3994){
return this3993.plusMillis(long3994);
});
cljc.java_time.instant.minus_seconds = (function cljc$java_time$instant$minus_seconds(this3995,long3996){
return this3995.minusSeconds(long3996);
});
cljc.java_time.instant.plus_nanos = (function cljc$java_time$instant$plus_nanos(this3997,long3998){
return this3997.plusNanos(long3998);
});
cljc.java_time.instant.plus = (function cljc$java_time$instant$plus(var_args){
var G__41772 = arguments.length;
switch (G__41772) {
case 2:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3999,G__4000){
return this3999.plus(G__4000);
}));

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4001,G__4002,G__4003){
return this4001.plus(G__4002,G__4003);
}));

(cljc.java_time.instant.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.query = (function cljc$java_time$instant$query(this4004,java_time_temporal_TemporalQuery4005){
return this4004.query(java_time_temporal_TemporalQuery4005);
});
cljc.java_time.instant.to_string = (function cljc$java_time$instant$to_string(this4006){
return this4006.toString();
});
cljc.java_time.instant.is_before = (function cljc$java_time$instant$is_before(this4007,java_time_Instant4008){
return this4007.isBefore(java_time_Instant4008);
});
cljc.java_time.instant.minus = (function cljc$java_time$instant$minus(var_args){
var G__41775 = arguments.length;
switch (G__41775) {
case 3:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4009,G__4010,G__4011){
return this4009.minus(G__4010,G__4011);
}));

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4012,G__4013){
return this4012.minus(G__4013);
}));

(cljc.java_time.instant.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.at_zone = (function cljc$java_time$instant$at_zone(this4014,java_time_ZoneId4015){
return this4014.atZone(java_time_ZoneId4015);
});
cljc.java_time.instant.of_epoch_milli = (function cljc$java_time$instant$of_epoch_milli(long4016){
return java.time.Instant.ofEpochMilli(long4016);
});
cljc.java_time.instant.get_long = (function cljc$java_time$instant$get_long(this4017,java_time_temporal_TemporalField4018){
return this4017.getLong(java_time_temporal_TemporalField4018);
});
cljc.java_time.instant.until = (function cljc$java_time$instant$until(this4019,java_time_temporal_Temporal4020,java_time_temporal_TemporalUnit4021){
return this4019.until(java_time_temporal_Temporal4020,java_time_temporal_TemporalUnit4021);
});
cljc.java_time.instant.from = (function cljc$java_time$instant$from(java_time_temporal_TemporalAccessor4022){
return java.time.Instant.from(java_time_temporal_TemporalAccessor4022);
});
cljc.java_time.instant.is_after = (function cljc$java_time$instant$is_after(this4023,java_time_Instant4024){
return this4023.isAfter(java_time_Instant4024);
});
cljc.java_time.instant.minus_nanos = (function cljc$java_time$instant$minus_nanos(this4025,long4026){
return this4025.minusNanos(long4026);
});
cljc.java_time.instant.is_supported = (function cljc$java_time$instant$is_supported(this4027,G__4028){
return this4027.isSupported(G__4028);
});
cljc.java_time.instant.parse = (function cljc$java_time$instant$parse(java_lang_CharSequence4029){
return java.time.Instant.parse(java_lang_CharSequence4029);
});
cljc.java_time.instant.hash_code = (function cljc$java_time$instant$hash_code(this4030){
return this4030.hashCode();
});
cljc.java_time.instant.adjust_into = (function cljc$java_time$instant$adjust_into(this4031,java_time_temporal_Temporal4032){
return this4031.adjustInto(java_time_temporal_Temporal4032);
});
cljc.java_time.instant.with$ = (function cljc$java_time$instant$with(var_args){
var G__41781 = arguments.length;
switch (G__41781) {
case 2:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4033,G__4034){
return this4033.with(G__4034);
}));

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4035,G__4036,G__4037){
return this4035.with(G__4036,G__4037);
}));

(cljc.java_time.instant.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.now = (function cljc$java_time$instant$now(var_args){
var G__41783 = arguments.length;
switch (G__41783) {
case 0:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Instant.now();
}));

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1 = (function (java_time_Clock4038){
return java.time.Instant.now(java_time_Clock4038);
}));

(cljc.java_time.instant.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.instant.to_epoch_milli = (function cljc$java_time$instant$to_epoch_milli(this4039){
return this4039.toEpochMilli();
});
cljc.java_time.instant.get_epoch_second = (function cljc$java_time$instant$get_epoch_second(this4040){
return this4040.epochSecond();
});
cljc.java_time.instant.compare_to = (function cljc$java_time$instant$compare_to(this4041,G__4042){
return this4041.compareTo(G__4042);
});
cljc.java_time.instant.plus_seconds = (function cljc$java_time$instant$plus_seconds(this4043,long4044){
return this4043.plusSeconds(long4044);
});
cljc.java_time.instant.get = (function cljc$java_time$instant$get(this4045,java_time_temporal_TemporalField4046){
return this4045.get(java_time_temporal_TemporalField4046);
});
cljc.java_time.instant.equals = (function cljc$java_time$instant$equals(this4047,java_lang_Object4048){
return this4047.equals(java_lang_Object4048);
});

//# sourceMappingURL=cljc.java_time.instant.js.map

goog.provide('cljc.java_time.duration');
cljc.java_time.duration.zero = java.time.Duration.ZERO;
cljc.java_time.duration.minus_minutes = (function cljc$java_time$duration$minus_minutes(this4422,long4423){
return this4422.minusMinutes(long4423);
});
cljc.java_time.duration.to_nanos = (function cljc$java_time$duration$to_nanos(this4424){
return this4424.toNanos();
});
cljc.java_time.duration.minus_millis = (function cljc$java_time$duration$minus_millis(this4425,long4426){
return this4425.minusMillis(long4426);
});
cljc.java_time.duration.minus_hours = (function cljc$java_time$duration$minus_hours(this4427,long4428){
return this4427.minusHours(long4428);
});
cljc.java_time.duration.of_days = (function cljc$java_time$duration$of_days(long4429){
return java.time.Duration.ofDays(long4429);
});
cljc.java_time.duration.is_negative = (function cljc$java_time$duration$is_negative(this4430){
return this4430.isNegative();
});
cljc.java_time.duration.of = (function cljc$java_time$duration$of(long4431,java_time_temporal_TemporalUnit4432){
return java.time.Duration.of(long4431,java_time_temporal_TemporalUnit4432);
});
cljc.java_time.duration.is_zero = (function cljc$java_time$duration$is_zero(this4433){
return this4433.isZero();
});
cljc.java_time.duration.multiplied_by = (function cljc$java_time$duration$multiplied_by(this4434,long4435){
return this4434.multipliedBy(long4435);
});
cljc.java_time.duration.with_nanos = (function cljc$java_time$duration$with_nanos(this4436,int4437){
return this4436.withNanos(int4437);
});
cljc.java_time.duration.get_units = (function cljc$java_time$duration$get_units(this4438){
return this4438.units();
});
cljc.java_time.duration.get_nano = (function cljc$java_time$duration$get_nano(this4439){
return this4439.nano();
});
cljc.java_time.duration.plus_millis = (function cljc$java_time$duration$plus_millis(this4440,long4441){
return this4440.plusMillis(long4441);
});
cljc.java_time.duration.to_minutes = (function cljc$java_time$duration$to_minutes(this4442){
return this4442.toMinutes();
});
cljc.java_time.duration.minus_seconds = (function cljc$java_time$duration$minus_seconds(this4443,long4444){
return this4443.minusSeconds(long4444);
});
cljc.java_time.duration.plus_nanos = (function cljc$java_time$duration$plus_nanos(this4445,long4446){
return this4445.plusNanos(long4446);
});
cljc.java_time.duration.plus = (function cljc$java_time$duration$plus(var_args){
var G__41835 = arguments.length;
switch (G__41835) {
case 3:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4447,long4448,java_time_temporal_TemporalUnit4449){
return this4447.plus(long4448,java_time_temporal_TemporalUnit4449);
}));

(cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4450,java_time_Duration4451){
return this4450.plus(java_time_Duration4451);
}));

(cljc.java_time.duration.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.duration.divided_by = (function cljc$java_time$duration$divided_by(this4452,long4453){
return this4452.dividedBy(long4453);
});
cljc.java_time.duration.plus_minutes = (function cljc$java_time$duration$plus_minutes(this4454,long4455){
return this4454.plusMinutes(long4455);
});
cljc.java_time.duration.to_string = (function cljc$java_time$duration$to_string(this4456){
return this4456.toString();
});
cljc.java_time.duration.minus = (function cljc$java_time$duration$minus(var_args){
var G__41837 = arguments.length;
switch (G__41837) {
case 2:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4457,java_time_Duration4458){
return this4457.minus(java_time_Duration4458);
}));

(cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4459,long4460,java_time_temporal_TemporalUnit4461){
return this4459.minus(long4460,java_time_temporal_TemporalUnit4461);
}));

(cljc.java_time.duration.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.duration.add_to = (function cljc$java_time$duration$add_to(this4462,java_time_temporal_Temporal4463){
return this4462.addTo(java_time_temporal_Temporal4463);
});
cljc.java_time.duration.plus_hours = (function cljc$java_time$duration$plus_hours(this4464,long4465){
return this4464.plusHours(long4465);
});
cljc.java_time.duration.plus_days = (function cljc$java_time$duration$plus_days(this4466,long4467){
return this4466.plusDays(long4467);
});
cljc.java_time.duration.of_hours = (function cljc$java_time$duration$of_hours(long4468){
return java.time.Duration.ofHours(long4468);
});
cljc.java_time.duration.to_millis = (function cljc$java_time$duration$to_millis(this4469){
return this4469.toMillis();
});
cljc.java_time.duration.to_hours = (function cljc$java_time$duration$to_hours(this4470){
return this4470.toHours();
});
cljc.java_time.duration.of_nanos = (function cljc$java_time$duration$of_nanos(long4471){
return java.time.Duration.ofNanos(long4471);
});
cljc.java_time.duration.of_millis = (function cljc$java_time$duration$of_millis(long4472){
return java.time.Duration.ofMillis(long4472);
});
cljc.java_time.duration.negated = (function cljc$java_time$duration$negated(this4473){
return this4473.negated();
});
cljc.java_time.duration.abs = (function cljc$java_time$duration$abs(this4474){
return this4474.abs();
});
cljc.java_time.duration.between = (function cljc$java_time$duration$between(java_time_temporal_Temporal4475,java_time_temporal_Temporal4476){
return java.time.Duration.between(java_time_temporal_Temporal4475,java_time_temporal_Temporal4476);
});
cljc.java_time.duration.get_seconds = (function cljc$java_time$duration$get_seconds(this4477){
return this4477.seconds();
});
cljc.java_time.duration.from = (function cljc$java_time$duration$from(java_time_temporal_TemporalAmount4478){
return java.time.Duration.from(java_time_temporal_TemporalAmount4478);
});
cljc.java_time.duration.minus_nanos = (function cljc$java_time$duration$minus_nanos(this4479,long4480){
return this4479.minusNanos(long4480);
});
cljc.java_time.duration.parse = (function cljc$java_time$duration$parse(java_lang_CharSequence4481){
return java.time.Duration.parse(java_lang_CharSequence4481);
});
cljc.java_time.duration.hash_code = (function cljc$java_time$duration$hash_code(this4482){
return this4482.hashCode();
});
cljc.java_time.duration.with_seconds = (function cljc$java_time$duration$with_seconds(this4483,long4484){
return this4483.withSeconds(long4484);
});
cljc.java_time.duration.of_minutes = (function cljc$java_time$duration$of_minutes(long4485){
return java.time.Duration.ofMinutes(long4485);
});
cljc.java_time.duration.subtract_from = (function cljc$java_time$duration$subtract_from(this4486,java_time_temporal_Temporal4487){
return this4486.subtractFrom(java_time_temporal_Temporal4487);
});
cljc.java_time.duration.compare_to = (function cljc$java_time$duration$compare_to(this4488,G__4489){
return this4488.compareTo(G__4489);
});
cljc.java_time.duration.plus_seconds = (function cljc$java_time$duration$plus_seconds(this4490,long4491){
return this4490.plusSeconds(long4491);
});
cljc.java_time.duration.get = (function cljc$java_time$duration$get(this4492,java_time_temporal_TemporalUnit4493){
return this4492.get(java_time_temporal_TemporalUnit4493);
});
cljc.java_time.duration.equals = (function cljc$java_time$duration$equals(this4494,java_lang_Object4495){
return this4494.equals(java_lang_Object4495);
});
cljc.java_time.duration.of_seconds = (function cljc$java_time$duration$of_seconds(var_args){
var G__41839 = arguments.length;
switch (G__41839) {
case 2:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2 = (function (long4496,long4497){
return java.time.Duration.ofSeconds(long4496,long4497);
}));

(cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1 = (function (long4498){
return java.time.Duration.ofSeconds(long4498);
}));

(cljc.java_time.duration.of_seconds.cljs$lang$maxFixedArity = 2);

cljc.java_time.duration.minus_days = (function cljc$java_time$duration$minus_days(this4499,long4500){
return this4499.minusDays(long4500);
});
cljc.java_time.duration.to_days = (function cljc$java_time$duration$to_days(this4501){
return this4501.toDays();
});

//# sourceMappingURL=cljc.java_time.duration.js.map

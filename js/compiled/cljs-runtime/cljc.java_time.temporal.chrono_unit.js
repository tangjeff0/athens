goog.provide('cljc.java_time.temporal.chrono_unit');
cljc.java_time.temporal.chrono_unit.millis = java.time.temporal.ChronoUnit.MILLIS;
cljc.java_time.temporal.chrono_unit.minutes = java.time.temporal.ChronoUnit.MINUTES;
cljc.java_time.temporal.chrono_unit.micros = java.time.temporal.ChronoUnit.MICROS;
cljc.java_time.temporal.chrono_unit.half_days = java.time.temporal.ChronoUnit.HALF_DAYS;
cljc.java_time.temporal.chrono_unit.millennia = java.time.temporal.ChronoUnit.MILLENNIA;
cljc.java_time.temporal.chrono_unit.years = java.time.temporal.ChronoUnit.YEARS;
cljc.java_time.temporal.chrono_unit.decades = java.time.temporal.ChronoUnit.DECADES;
cljc.java_time.temporal.chrono_unit.days = java.time.temporal.ChronoUnit.DAYS;
cljc.java_time.temporal.chrono_unit.centuries = java.time.temporal.ChronoUnit.CENTURIES;
cljc.java_time.temporal.chrono_unit.weeks = java.time.temporal.ChronoUnit.WEEKS;
cljc.java_time.temporal.chrono_unit.hours = java.time.temporal.ChronoUnit.HOURS;
cljc.java_time.temporal.chrono_unit.eras = java.time.temporal.ChronoUnit.ERAS;
cljc.java_time.temporal.chrono_unit.seconds = java.time.temporal.ChronoUnit.SECONDS;
cljc.java_time.temporal.chrono_unit.months = java.time.temporal.ChronoUnit.MONTHS;
cljc.java_time.temporal.chrono_unit.nanos = java.time.temporal.ChronoUnit.NANOS;
cljc.java_time.temporal.chrono_unit.forever = java.time.temporal.ChronoUnit.FOREVER;
cljc.java_time.temporal.chrono_unit.values = (function cljc$java_time$temporal$chrono_unit$values(){
return java.time.temporal.ChronoUnit.values();
});
cljc.java_time.temporal.chrono_unit.value_of = (function cljc$java_time$temporal$chrono_unit$value_of(var_args){
var G__41882 = arguments.length;
switch (G__41882) {
case 1:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4740){
return java.time.temporal.ChronoUnit.valueOf(java_lang_String4740);
}));

(cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class4741,java_lang_String4742){
return java.time.temporal.ChronoUnit.valueOf(java_lang_Class4741,java_lang_String4742);
}));

(cljc.java_time.temporal.chrono_unit.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.temporal.chrono_unit.ordinal = (function cljc$java_time$temporal$chrono_unit$ordinal(this4743){
return this4743.ordinal();
});
cljc.java_time.temporal.chrono_unit.is_duration_estimated = (function cljc$java_time$temporal$chrono_unit$is_duration_estimated(this4744){
return this4744.isDurationEstimated();
});
cljc.java_time.temporal.chrono_unit.to_string = (function cljc$java_time$temporal$chrono_unit$to_string(this4745){
return this4745.toString();
});
cljc.java_time.temporal.chrono_unit.is_date_based = (function cljc$java_time$temporal$chrono_unit$is_date_based(this4746){
return this4746.isDateBased();
});
cljc.java_time.temporal.chrono_unit.add_to = (function cljc$java_time$temporal$chrono_unit$add_to(this4747,java_time_temporal_Temporal4748,long4749){
return this4747.addTo(java_time_temporal_Temporal4748,long4749);
});
cljc.java_time.temporal.chrono_unit.name = (function cljc$java_time$temporal$chrono_unit$name(this4750){
return this4750.name();
});
cljc.java_time.temporal.chrono_unit.is_supported_by = (function cljc$java_time$temporal$chrono_unit$is_supported_by(this4751,java_time_temporal_Temporal4752){
return this4751.isSupportedBy(java_time_temporal_Temporal4752);
});
cljc.java_time.temporal.chrono_unit.get_declaring_class = (function cljc$java_time$temporal$chrono_unit$get_declaring_class(this4753){
return this4753.declaringClass();
});
cljc.java_time.temporal.chrono_unit.between = (function cljc$java_time$temporal$chrono_unit$between(this4754,java_time_temporal_Temporal4755,java_time_temporal_Temporal4756){
return this4754.between(java_time_temporal_Temporal4755,java_time_temporal_Temporal4756);
});
cljc.java_time.temporal.chrono_unit.hash_code = (function cljc$java_time$temporal$chrono_unit$hash_code(this4757){
return this4757.hashCode();
});
cljc.java_time.temporal.chrono_unit.compare_to = (function cljc$java_time$temporal$chrono_unit$compare_to(this4758,G__4759){
return this4758.compareTo(G__4759);
});
cljc.java_time.temporal.chrono_unit.get_duration = (function cljc$java_time$temporal$chrono_unit$get_duration(this4760){
return this4760.duration();
});
cljc.java_time.temporal.chrono_unit.equals = (function cljc$java_time$temporal$chrono_unit$equals(this4761,java_lang_Object4762){
return this4761.equals(java_lang_Object4762);
});
cljc.java_time.temporal.chrono_unit.is_time_based = (function cljc$java_time$temporal$chrono_unit$is_time_based(this4763){
return this4763.isTimeBased();
});

//# sourceMappingURL=cljc.java_time.temporal.chrono_unit.js.map

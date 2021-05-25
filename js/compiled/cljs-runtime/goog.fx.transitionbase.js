goog.provide("goog.fx.TransitionBase");
goog.provide("goog.fx.TransitionBase.State");
goog.require("goog.events.EventTarget");
goog.require("goog.fx.Transition");
goog.fx.TransitionBase = function() {
  goog.fx.TransitionBase.base(this, "constructor");
  this.state_ = goog.fx.TransitionBase.State.STOPPED;
  this.startTime = null;
  this.endTime = null;
};
goog.inherits(goog.fx.TransitionBase, goog.events.EventTarget);
goog.fx.TransitionBase.State = {STOPPED:0, PAUSED:-1, PLAYING:1};
goog.fx.TransitionBase.prototype.play = goog.abstractMethod;
goog.fx.TransitionBase.prototype.stop = goog.abstractMethod;
goog.fx.TransitionBase.prototype.pause = goog.abstractMethod;
goog.fx.TransitionBase.prototype.getStateInternal = function() {
  return this.state_;
};
goog.fx.TransitionBase.prototype.setStatePlaying = function() {
  this.state_ = goog.fx.TransitionBase.State.PLAYING;
};
goog.fx.TransitionBase.prototype.setStatePaused = function() {
  this.state_ = goog.fx.TransitionBase.State.PAUSED;
};
goog.fx.TransitionBase.prototype.setStateStopped = function() {
  this.state_ = goog.fx.TransitionBase.State.STOPPED;
};
goog.fx.TransitionBase.prototype.isPlaying = function() {
  return this.state_ == goog.fx.TransitionBase.State.PLAYING;
};
goog.fx.TransitionBase.prototype.isPaused = function() {
  return this.state_ == goog.fx.TransitionBase.State.PAUSED;
};
goog.fx.TransitionBase.prototype.isStopped = function() {
  return this.state_ == goog.fx.TransitionBase.State.STOPPED;
};
goog.fx.TransitionBase.prototype.onBegin = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.BEGIN);
};
goog.fx.TransitionBase.prototype.onEnd = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.END);
};
goog.fx.TransitionBase.prototype.onFinish = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.FINISH);
};
goog.fx.TransitionBase.prototype.onPause = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PAUSE);
};
goog.fx.TransitionBase.prototype.onPlay = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PLAY);
};
goog.fx.TransitionBase.prototype.onResume = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.RESUME);
};
goog.fx.TransitionBase.prototype.onStop = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.STOP);
};
goog.fx.TransitionBase.prototype.dispatchAnimationEvent = function(type) {
  this.dispatchEvent(type);
};

//# sourceMappingURL=goog.fx.transitionbase.js.map

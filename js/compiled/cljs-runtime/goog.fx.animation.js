goog.provide("goog.fx.Animation");
goog.provide("goog.fx.Animation.EventType");
goog.provide("goog.fx.Animation.State");
goog.provide("goog.fx.AnimationEvent");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.events.Event");
goog.require("goog.fx.Transition");
goog.require("goog.fx.TransitionBase");
goog.require("goog.fx.anim");
goog.require("goog.fx.anim.Animated");
goog.fx.Animation = function(start, end, duration, opt_acc) {
  goog.fx.Animation.base(this, "constructor");
  if (!goog.isArray(start) || !goog.isArray(end)) {
    throw new Error("Start and end parameters must be arrays");
  }
  if (start.length != end.length) {
    throw new Error("Start and end points must be the same length");
  }
  this.startPoint = start;
  this.endPoint = end;
  this.duration = duration;
  this.accel_ = opt_acc;
  this.coords = [];
  this.useRightPositioningForRtl_ = false;
  this.fps_ = 0;
  this.progress = 0;
  this.lastFrame = null;
};
goog.inherits(goog.fx.Animation, goog.fx.TransitionBase);
goog.fx.Animation.prototype.getDuration = function() {
  return this.duration;
};
goog.fx.Animation.prototype.enableRightPositioningForRtl = function(useRightPositioningForRtl) {
  this.useRightPositioningForRtl_ = useRightPositioningForRtl;
};
goog.fx.Animation.prototype.isRightPositioningForRtlEnabled = function() {
  return this.useRightPositioningForRtl_;
};
goog.fx.Animation.EventType = {PLAY:goog.fx.Transition.EventType.PLAY, BEGIN:goog.fx.Transition.EventType.BEGIN, RESUME:goog.fx.Transition.EventType.RESUME, END:goog.fx.Transition.EventType.END, STOP:goog.fx.Transition.EventType.STOP, FINISH:goog.fx.Transition.EventType.FINISH, PAUSE:goog.fx.Transition.EventType.PAUSE, ANIMATE:"animate", DESTROY:"destroy"};
goog.fx.Animation.TIMEOUT = goog.fx.anim.TIMEOUT;
goog.fx.Animation.State = goog.fx.TransitionBase.State;
goog.fx.Animation.setAnimationWindow = function(animationWindow) {
  goog.fx.anim.setAnimationWindow(animationWindow);
};
goog.fx.Animation.prototype.play = function(opt_restart) {
  if (opt_restart || this.isStopped()) {
    this.progress = 0;
    this.coords = this.startPoint;
  } else {
    if (this.isPlaying()) {
      return false;
    }
  }
  goog.fx.anim.unregisterAnimation(this);
  var now = goog.now();
  this.startTime = now;
  if (this.isPaused()) {
    this.startTime -= this.duration * this.progress;
  }
  this.endTime = this.startTime + this.duration;
  this.lastFrame = this.startTime;
  if (!this.progress) {
    this.onBegin();
  }
  this.onPlay();
  if (this.isPaused()) {
    this.onResume();
  }
  this.setStatePlaying();
  goog.fx.anim.registerAnimation(this);
  this.cycle(now);
  return true;
};
goog.fx.Animation.prototype.stop = function(opt_gotoEnd) {
  goog.fx.anim.unregisterAnimation(this);
  this.setStateStopped();
  if (opt_gotoEnd) {
    this.progress = 1;
  }
  this.updateCoords_(this.progress);
  this.onStop();
  this.onEnd();
};
goog.fx.Animation.prototype.pause = function() {
  if (this.isPlaying()) {
    goog.fx.anim.unregisterAnimation(this);
    this.setStatePaused();
    this.onPause();
  }
};
goog.fx.Animation.prototype.getProgress = function() {
  return this.progress;
};
goog.fx.Animation.prototype.setProgress = function(progress) {
  this.progress = progress;
  if (this.isPlaying()) {
    var now = goog.now();
    this.startTime = now - this.duration * this.progress;
    this.endTime = this.startTime + this.duration;
  }
};
goog.fx.Animation.prototype.disposeInternal = function() {
  if (!this.isStopped()) {
    this.stop(false);
  }
  this.onDestroy();
  goog.fx.Animation.base(this, "disposeInternal");
};
goog.fx.Animation.prototype.destroy = function() {
  this.dispose();
};
goog.fx.Animation.prototype.onAnimationFrame = function(now) {
  this.cycle(now);
};
goog.fx.Animation.prototype.cycle = function(now) {
  goog.asserts.assertNumber(this.startTime);
  goog.asserts.assertNumber(this.endTime);
  goog.asserts.assertNumber(this.lastFrame);
  if (now < this.startTime) {
    this.endTime = now + this.endTime - this.startTime;
    this.startTime = now;
  }
  this.progress = (now - this.startTime) / (this.endTime - this.startTime);
  if (this.progress > 1) {
    this.progress = 1;
  }
  this.fps_ = 1000 / (now - this.lastFrame);
  this.lastFrame = now;
  this.updateCoords_(this.progress);
  if (this.progress == 1) {
    this.setStateStopped();
    goog.fx.anim.unregisterAnimation(this);
    this.onFinish();
    this.onEnd();
  } else {
    if (this.isPlaying()) {
      this.onAnimate();
    }
  }
};
goog.fx.Animation.prototype.updateCoords_ = function(t) {
  if (goog.isFunction(this.accel_)) {
    t = this.accel_(t);
  }
  this.coords = new Array(this.startPoint.length);
  for (var i = 0; i < this.startPoint.length; i++) {
    this.coords[i] = (this.endPoint[i] - this.startPoint[i]) * t + this.startPoint[i];
  }
};
goog.fx.Animation.prototype.onAnimate = function() {
  this.dispatchAnimationEvent(goog.fx.Animation.EventType.ANIMATE);
};
goog.fx.Animation.prototype.onDestroy = function() {
  this.dispatchAnimationEvent(goog.fx.Animation.EventType.DESTROY);
};
goog.fx.Animation.prototype.dispatchAnimationEvent = function(type) {
  this.dispatchEvent(new goog.fx.AnimationEvent(type, this));
};
goog.fx.AnimationEvent = function(type, anim) {
  goog.fx.AnimationEvent.base(this, "constructor", type);
  this.coords = anim.coords;
  this.x = anim.coords[0];
  this.y = anim.coords[1];
  this.z = anim.coords[2];
  this.duration = anim.duration;
  this.progress = anim.getProgress();
  this.fps = anim.fps_;
  this.state = anim.getStateInternal();
  this.anim = anim;
};
goog.inherits(goog.fx.AnimationEvent, goog.events.Event);
goog.fx.AnimationEvent.prototype.coordsAsInts = function() {
  return goog.array.map(this.coords, Math.round);
};

//# sourceMappingURL=goog.fx.animation.js.map

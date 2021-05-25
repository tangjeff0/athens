goog.provide("goog.async.AnimationDelay");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.require("goog.functions");
goog.async.AnimationDelay = function(listener, opt_window, opt_handler) {
  goog.async.AnimationDelay.base(this, "constructor");
  this.id_ = null;
  this.usingListeners_ = false;
  this.listener_ = listener;
  this.handler_ = opt_handler;
  this.win_ = opt_window || window;
  this.callback_ = goog.bind(this.doAction_, this);
};
goog.inherits(goog.async.AnimationDelay, goog.Disposable);
goog.async.AnimationDelay.TIMEOUT = 20;
goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = "MozBeforePaint";
goog.async.AnimationDelay.prototype.start = function() {
  this.stop();
  this.usingListeners_ = false;
  var raf = this.getRaf_();
  var cancelRaf = this.getCancelRaf_();
  if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {
    this.id_ = goog.events.listen(this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_, this.callback_);
    this.win_.mozRequestAnimationFrame(null);
    this.usingListeners_ = true;
  } else {
    if (raf && cancelRaf) {
      this.id_ = raf.call(this.win_, this.callback_);
    } else {
      this.id_ = this.win_.setTimeout(goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT);
    }
  }
};
goog.async.AnimationDelay.prototype.startIfNotActive = function() {
  if (!this.isActive()) {
    this.start();
  }
};
goog.async.AnimationDelay.prototype.stop = function() {
  if (this.isActive()) {
    var raf = this.getRaf_();
    var cancelRaf = this.getCancelRaf_();
    if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {
      goog.events.unlistenByKey(this.id_);
    } else {
      if (raf && cancelRaf) {
        cancelRaf.call(this.win_, this.id_);
      } else {
        this.win_.clearTimeout(this.id_);
      }
    }
  }
  this.id_ = null;
};
goog.async.AnimationDelay.prototype.fire = function() {
  this.stop();
  this.doAction_();
};
goog.async.AnimationDelay.prototype.fireIfActive = function() {
  if (this.isActive()) {
    this.fire();
  }
};
goog.async.AnimationDelay.prototype.isActive = function() {
  return this.id_ != null;
};
goog.async.AnimationDelay.prototype.doAction_ = function() {
  if (this.usingListeners_ && this.id_) {
    goog.events.unlistenByKey(this.id_);
  }
  this.id_ = null;
  this.listener_.call(this.handler_, goog.now());
};
goog.async.AnimationDelay.prototype.disposeInternal = function() {
  this.stop();
  goog.async.AnimationDelay.base(this, "disposeInternal");
};
goog.async.AnimationDelay.prototype.getRaf_ = function() {
  var win = this.win_;
  return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || null;
};
goog.async.AnimationDelay.prototype.getCancelRaf_ = function() {
  var win = this.win_;
  return win.cancelAnimationFrame || win.cancelRequestAnimationFrame || win.webkitCancelRequestAnimationFrame || win.mozCancelRequestAnimationFrame || win.oCancelRequestAnimationFrame || win.msCancelRequestAnimationFrame || null;
};

//# sourceMappingURL=goog.async.animationdelay.js.map

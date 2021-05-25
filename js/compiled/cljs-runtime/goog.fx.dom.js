goog.provide("goog.fx.dom");
goog.provide("goog.fx.dom.BgColorTransform");
goog.provide("goog.fx.dom.ColorTransform");
goog.provide("goog.fx.dom.Fade");
goog.provide("goog.fx.dom.FadeIn");
goog.provide("goog.fx.dom.FadeInAndShow");
goog.provide("goog.fx.dom.FadeOut");
goog.provide("goog.fx.dom.FadeOutAndHide");
goog.provide("goog.fx.dom.PredefinedEffect");
goog.provide("goog.fx.dom.Resize");
goog.provide("goog.fx.dom.ResizeHeight");
goog.provide("goog.fx.dom.ResizeWidth");
goog.provide("goog.fx.dom.Scroll");
goog.provide("goog.fx.dom.Slide");
goog.provide("goog.fx.dom.SlideFrom");
goog.provide("goog.fx.dom.Swipe");
goog.forwardDeclare("goog.events.EventHandler");
goog.require("goog.color");
goog.require("goog.events");
goog.require("goog.fx.Animation");
goog.require("goog.fx.Transition");
goog.require("goog.style");
goog.require("goog.style.bidi");
goog.fx.dom.PredefinedEffect = function(element, start, end, time, opt_acc) {
  goog.fx.dom.PredefinedEffect.base(this, "constructor", start, end, time, opt_acc);
  this.element = element;
  this.rightToLeft_;
};
goog.inherits(goog.fx.dom.PredefinedEffect, goog.fx.Animation);
goog.fx.dom.PredefinedEffect.prototype.updateStyle = goog.nullFunction;
goog.fx.dom.PredefinedEffect.prototype.isRightToLeft = function() {
  if (this.rightToLeft_ === undefined) {
    this.rightToLeft_ = goog.style.isRightToLeft(this.element);
  }
  return this.rightToLeft_;
};
goog.fx.dom.PredefinedEffect.prototype.onAnimate = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onAnimate.call(this);
};
goog.fx.dom.PredefinedEffect.prototype.onEnd = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onEnd.call(this);
};
goog.fx.dom.PredefinedEffect.prototype.onBegin = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onBegin.call(this);
};
goog.fx.dom.Slide = function(element, start, end, time, opt_acc) {
  if (start.length != 2 || end.length != 2) {
    throw new Error("Start and end points must be 2D");
  }
  goog.fx.dom.Slide.base(this, "constructor", element, start, end, time, opt_acc);
};
goog.inherits(goog.fx.dom.Slide, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Slide.prototype.updateStyle = function() {
  var pos = this.isRightPositioningForRtlEnabled() && this.isRightToLeft() ? "right" : "left";
  this.element.style[pos] = Math.round(this.coords[0]) + "px";
  this.element.style.top = Math.round(this.coords[1]) + "px";
};
goog.fx.dom.SlideFrom = function(element, end, time, opt_acc) {
  var offsetLeft = element.offsetLeft;
  var start = [offsetLeft, element.offsetTop];
  goog.fx.dom.SlideFrom.base(this, "constructor", element, start, end, time, opt_acc);
  this.startPoint;
};
goog.inherits(goog.fx.dom.SlideFrom, goog.fx.dom.Slide);
goog.fx.dom.SlideFrom.prototype.onBegin = function() {
  var offsetLeft = this.isRightPositioningForRtlEnabled() ? goog.style.bidi.getOffsetStart(this.element) : this.element.offsetLeft;
  this.startPoint = [offsetLeft, this.element.offsetTop];
  goog.fx.dom.SlideFrom.superClass_.onBegin.call(this);
};
goog.fx.dom.Swipe = function(element, start, end, time, opt_acc) {
  if (start.length != 2 || end.length != 2) {
    throw new Error("Start and end points must be 2D");
  }
  goog.fx.dom.Swipe.base(this, "constructor", element, start, end, time, opt_acc);
  this.maxWidth_ = Math.max(this.endPoint[0], this.startPoint[0]);
  this.maxHeight_ = Math.max(this.endPoint[1], this.startPoint[1]);
};
goog.inherits(goog.fx.dom.Swipe, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Swipe.prototype.updateStyle = function() {
  var x = this.coords[0];
  var y = this.coords[1];
  this.clip_(Math.round(x), Math.round(y), this.maxWidth_, this.maxHeight_);
  this.element.style.width = Math.round(x) + "px";
  var marginX = this.isRightPositioningForRtlEnabled() && this.isRightToLeft() ? "marginRight" : "marginLeft";
  this.element.style[marginX] = Math.round(x) - this.maxWidth_ + "px";
  this.element.style.marginTop = Math.round(y) - this.maxHeight_ + "px";
};
goog.fx.dom.Swipe.prototype.clip_ = function(x, y, w, h) {
  this.element.style.clip = "rect(" + (h - y) + "px " + w + "px " + h + "px " + (w - x) + "px)";
};
goog.fx.dom.Scroll = function(element, start, end, time, opt_acc) {
  if (start.length != 2 || end.length != 2) {
    throw new Error("Start and end points must be 2D");
  }
  goog.fx.dom.Scroll.base(this, "constructor", element, start, end, time, opt_acc);
};
goog.inherits(goog.fx.dom.Scroll, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Scroll.prototype.updateStyle = function() {
  if (this.isRightPositioningForRtlEnabled()) {
    goog.style.bidi.setScrollOffset(this.element, Math.round(this.coords[0]));
  } else {
    this.element.scrollLeft = Math.round(this.coords[0]);
  }
  this.element.scrollTop = Math.round(this.coords[1]);
};
goog.fx.dom.Resize = function(element, start, end, time, opt_acc) {
  if (start.length != 2 || end.length != 2) {
    throw new Error("Start and end points must be 2D");
  }
  goog.fx.dom.Resize.base(this, "constructor", element, start, end, time, opt_acc);
};
goog.inherits(goog.fx.dom.Resize, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Resize.prototype.updateStyle = function() {
  this.element.style.width = Math.round(this.coords[0]) + "px";
  this.element.style.height = Math.round(this.coords[1]) + "px";
};
goog.fx.dom.ResizeWidth = function(element, start, end, time, opt_acc) {
  goog.fx.dom.ResizeWidth.base(this, "constructor", element, [start], [end], time, opt_acc);
};
goog.inherits(goog.fx.dom.ResizeWidth, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ResizeWidth.prototype.updateStyle = function() {
  this.element.style.width = Math.round(this.coords[0]) + "px";
};
goog.fx.dom.ResizeHeight = function(element, start, end, time, opt_acc) {
  goog.fx.dom.ResizeHeight.base(this, "constructor", element, [start], [end], time, opt_acc);
};
goog.inherits(goog.fx.dom.ResizeHeight, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ResizeHeight.prototype.updateStyle = function() {
  this.element.style.height = Math.round(this.coords[0]) + "px";
};
goog.fx.dom.Fade = function(element, start, end, time, opt_acc) {
  if (typeof start === "number") {
    start = [start];
  }
  if (typeof end === "number") {
    end = [end];
  }
  goog.fx.dom.Fade.base(this, "constructor", element, start, end, time, opt_acc);
  if (start.length != 1 || end.length != 1) {
    throw new Error("Start and end points must be 1D");
  }
  this.lastOpacityUpdate_ = goog.fx.dom.Fade.OPACITY_UNSET_;
};
goog.inherits(goog.fx.dom.Fade, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Fade.TOLERANCE_ = 1.0 / 1024;
goog.fx.dom.Fade.OPACITY_UNSET_ = -1;
goog.fx.dom.Fade.prototype.updateStyle = function() {
  var opacity = this.coords[0];
  var delta = Math.abs(opacity - this.lastOpacityUpdate_);
  if (delta >= goog.fx.dom.Fade.TOLERANCE_) {
    goog.style.setOpacity(this.element, opacity);
    this.lastOpacityUpdate_ = opacity;
  }
};
goog.fx.dom.Fade.prototype.onBegin = function() {
  this.lastOpacityUpdate_ = goog.fx.dom.Fade.OPACITY_UNSET_;
  goog.fx.dom.Fade.base(this, "onBegin");
};
goog.fx.dom.Fade.prototype.onEnd = function() {
  this.lastOpacityUpdate_ = goog.fx.dom.Fade.OPACITY_UNSET_;
  goog.fx.dom.Fade.base(this, "onEnd");
};
goog.fx.dom.Fade.prototype.show = function() {
  this.element.style.display = "";
};
goog.fx.dom.Fade.prototype.hide = function() {
  this.element.style.display = "none";
};
goog.fx.dom.FadeOut = function(element, time, opt_acc) {
  goog.fx.dom.FadeOut.base(this, "constructor", element, 1, 0, time, opt_acc);
};
goog.inherits(goog.fx.dom.FadeOut, goog.fx.dom.Fade);
goog.fx.dom.FadeIn = function(element, time, opt_acc) {
  goog.fx.dom.FadeIn.base(this, "constructor", element, 0, 1, time, opt_acc);
};
goog.inherits(goog.fx.dom.FadeIn, goog.fx.dom.Fade);
goog.fx.dom.FadeOutAndHide = function(element, time, opt_acc) {
  goog.fx.dom.FadeOutAndHide.base(this, "constructor", element, 1, 0, time, opt_acc);
};
goog.inherits(goog.fx.dom.FadeOutAndHide, goog.fx.dom.Fade);
goog.fx.dom.FadeOutAndHide.prototype.onBegin = function() {
  this.show();
  goog.fx.dom.FadeOutAndHide.superClass_.onBegin.call(this);
};
goog.fx.dom.FadeOutAndHide.prototype.onEnd = function() {
  this.hide();
  goog.fx.dom.FadeOutAndHide.superClass_.onEnd.call(this);
};
goog.fx.dom.FadeInAndShow = function(element, time, opt_acc) {
  goog.fx.dom.FadeInAndShow.base(this, "constructor", element, 0, 1, time, opt_acc);
};
goog.inherits(goog.fx.dom.FadeInAndShow, goog.fx.dom.Fade);
goog.fx.dom.FadeInAndShow.prototype.onBegin = function() {
  this.show();
  goog.fx.dom.FadeInAndShow.superClass_.onBegin.call(this);
};
goog.fx.dom.BgColorTransform = function(element, start, end, time, opt_acc) {
  if (start.length != 3 || end.length != 3) {
    throw new Error("Start and end points must be 3D");
  }
  goog.fx.dom.BgColorTransform.base(this, "constructor", element, start, end, time, opt_acc);
};
goog.inherits(goog.fx.dom.BgColorTransform, goog.fx.dom.PredefinedEffect);
goog.fx.dom.BgColorTransform.prototype.setColor = function() {
  var coordsAsInts = [];
  for (var i = 0; i < this.coords.length; i++) {
    coordsAsInts[i] = Math.round(this.coords[i]);
  }
  var color = "rgb(" + coordsAsInts.join(",") + ")";
  this.element.style.backgroundColor = color;
};
goog.fx.dom.BgColorTransform.prototype.updateStyle = function() {
  this.setColor();
};
goog.fx.dom.bgColorFadeIn = function(element, start, time, opt_eventHandler) {
  var initialBgColor = element.style.backgroundColor || "";
  var computedBgColor = goog.style.getBackgroundColor(element);
  var end;
  if (computedBgColor && computedBgColor != "transparent" && computedBgColor != "rgba(0, 0, 0, 0)") {
    end = goog.color.hexToRgb(goog.color.parse(computedBgColor).hex);
  } else {
    end = [255, 255, 255];
  }
  var anim = new goog.fx.dom.BgColorTransform(element, start, end, time);
  function setBgColor() {
    element.style.backgroundColor = initialBgColor;
  }
  if (opt_eventHandler) {
    opt_eventHandler.listen(anim, goog.fx.Transition.EventType.END, setBgColor);
  } else {
    goog.events.listen(anim, goog.fx.Transition.EventType.END, setBgColor);
  }
  anim.play();
};
goog.fx.dom.ColorTransform = function(element, start, end, time, opt_acc) {
  if (start.length != 3 || end.length != 3) {
    throw new Error("Start and end points must be 3D");
  }
  goog.fx.dom.ColorTransform.base(this, "constructor", element, start, end, time, opt_acc);
};
goog.inherits(goog.fx.dom.ColorTransform, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ColorTransform.prototype.updateStyle = function() {
  var coordsAsInts = [];
  for (var i = 0; i < this.coords.length; i++) {
    coordsAsInts[i] = Math.round(this.coords[i]);
  }
  var color = "rgb(" + coordsAsInts.join(",") + ")";
  this.element.style.color = color;
};

//# sourceMappingURL=goog.fx.dom.js.map

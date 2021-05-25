goog.provide("goog.style.bidi");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.userAgent");
goog.require("goog.userAgent.platform");
goog.require("goog.userAgent.product");
goog.require("goog.userAgent.product.isVersion");
goog.style.bidi.getScrollLeft = function(element) {
  var isRtl = goog.style.isRightToLeft(element);
  if (isRtl && goog.style.bidi.usesNegativeScrollLeftInRtl_()) {
    return -element.scrollLeft;
  } else {
    if (isRtl && !(goog.userAgent.EDGE_OR_IE && goog.userAgent.isVersionOrHigher("8"))) {
      var overflowX = goog.style.getComputedOverflowX(element);
      if (overflowX == "visible") {
        return element.scrollLeft;
      } else {
        return element.scrollWidth - element.clientWidth - element.scrollLeft;
      }
    }
  }
  return element.scrollLeft;
};
goog.style.bidi.getOffsetStart = function(element) {
  element = element;
  var offsetLeftForReal = element.offsetLeft;
  var bestParent = element.offsetParent;
  if (!bestParent && goog.style.getComputedPosition(element) == "fixed") {
    bestParent = goog.dom.getOwnerDocument(element).documentElement;
  }
  if (!bestParent) {
    return offsetLeftForReal;
  }
  if (goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher(58)) {
    var borderWidths = goog.style.getBorderBox(bestParent);
    offsetLeftForReal += borderWidths.left;
  } else {
    if (goog.userAgent.isDocumentModeOrHigher(8) && !goog.userAgent.isDocumentModeOrHigher(9)) {
      var borderWidths = goog.style.getBorderBox(bestParent);
      offsetLeftForReal -= borderWidths.left;
    }
  }
  if (goog.style.isRightToLeft(bestParent)) {
    var elementRightOffset = offsetLeftForReal + element.offsetWidth;
    return bestParent.clientWidth - elementRightOffset;
  }
  return offsetLeftForReal;
};
goog.style.bidi.setScrollOffset = function(element, offsetStart) {
  offsetStart = Math.max(offsetStart, 0);
  if (!goog.style.isRightToLeft(element)) {
    element.scrollLeft = offsetStart;
  } else {
    if (goog.style.bidi.usesNegativeScrollLeftInRtl_()) {
      element.scrollLeft = -offsetStart;
    } else {
      if (!(goog.userAgent.EDGE_OR_IE && goog.userAgent.isVersionOrHigher("8"))) {
        element.scrollLeft = element.scrollWidth - offsetStart - element.clientWidth;
      } else {
        element.scrollLeft = offsetStart;
      }
    }
  }
};
goog.style.bidi.usesNegativeScrollLeftInRtl_ = function() {
  var isSafari10Plus = goog.userAgent.product.SAFARI && goog.userAgent.product.isVersion(10);
  var isIOS10Plus = goog.userAgent.IOS && goog.userAgent.platform.isVersion(10);
  return goog.userAgent.GECKO || isSafari10Plus || isIOS10Plus;
};
goog.style.bidi.setPosition = function(elem, left, top, isRtl) {
  if (top !== null) {
    elem.style.top = top + "px";
  }
  if (isRtl) {
    elem.style.right = left + "px";
    elem.style.left = "";
  } else {
    elem.style.left = left + "px";
    elem.style.right = "";
  }
};

//# sourceMappingURL=goog.style.bidi.js.map

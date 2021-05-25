goog.provide("goog.userAgent.product.isVersion");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
goog.userAgent.product.determineVersion_ = function() {
  if (goog.userAgent.product.FIREFOX) {
    return goog.userAgent.product.getFirstRegExpGroup_(/Firefox\/([0-9.]+)/);
  }
  if (goog.userAgent.product.IE || goog.userAgent.product.EDGE || goog.userAgent.product.OPERA) {
    return goog.userAgent.VERSION;
  }
  if (goog.userAgent.product.CHROME) {
    if (goog.labs.userAgent.platform.isIos()) {
      return goog.userAgent.product.getFirstRegExpGroup_(/CriOS\/([0-9.]+)/);
    }
    return goog.userAgent.product.getFirstRegExpGroup_(/Chrome\/([0-9.]+)/);
  }
  if (goog.userAgent.product.SAFARI && !goog.labs.userAgent.platform.isIos()) {
    return goog.userAgent.product.getFirstRegExpGroup_(/Version\/([0-9.]+)/);
  }
  if (goog.userAgent.product.IPHONE || goog.userAgent.product.IPAD) {
    var arr = goog.userAgent.product.execRegExp_(/Version\/(\S+).*Mobile\/(\S+)/);
    if (arr) {
      return arr[1] + "." + arr[2];
    }
  } else {
    if (goog.userAgent.product.ANDROID) {
      var version = goog.userAgent.product.getFirstRegExpGroup_(/Android\s+([0-9.]+)/);
      if (version) {
        return version;
      }
      return goog.userAgent.product.getFirstRegExpGroup_(/Version\/([0-9.]+)/);
    }
  }
  return "";
};
goog.userAgent.product.getFirstRegExpGroup_ = function(re) {
  var arr = goog.userAgent.product.execRegExp_(re);
  return arr ? arr[1] : "";
};
goog.userAgent.product.execRegExp_ = function(re) {
  return re.exec(goog.userAgent.getUserAgentString());
};
goog.userAgent.product.VERSION = goog.userAgent.product.determineVersion_();
goog.userAgent.product.isVersion = function(version) {
  return goog.string.compareVersions(goog.userAgent.product.VERSION, version) >= 0;
};

//# sourceMappingURL=goog.useragent.product_isversion.js.map

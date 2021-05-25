goog.provide("goog.net.jsloader");
goog.provide("goog.net.jsloader.Error");
goog.provide("goog.net.jsloader.ErrorCode");
goog.provide("goog.net.jsloader.Options");
goog.require("goog.array");
goog.require("goog.async.Deferred");
goog.require("goog.debug.Error");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.object");
goog.net.jsloader.GLOBAL_VERIFY_OBJS_ = "closure_verification";
goog.net.jsloader.DEFAULT_TIMEOUT = 5000;
goog.net.jsloader.Options;
goog.net.jsloader.scriptsToLoad_ = [];
goog.net.jsloader.scriptLoadingDeferred_;
goog.net.jsloader.safeLoadMany = function(trustedUris, opt_options) {
  if (!trustedUris.length) {
    return goog.async.Deferred.succeed(null);
  }
  var isAnotherModuleLoading = goog.net.jsloader.scriptsToLoad_.length;
  goog.array.extend(goog.net.jsloader.scriptsToLoad_, trustedUris);
  if (isAnotherModuleLoading) {
    return goog.net.jsloader.scriptLoadingDeferred_;
  }
  trustedUris = goog.net.jsloader.scriptsToLoad_;
  var popAndLoadNextScript = function() {
    var trustedUri = trustedUris.shift();
    var deferred = goog.net.jsloader.safeLoad(trustedUri, opt_options);
    if (trustedUris.length) {
      deferred.addBoth(popAndLoadNextScript);
    }
    return deferred;
  };
  goog.net.jsloader.scriptLoadingDeferred_ = popAndLoadNextScript();
  return goog.net.jsloader.scriptLoadingDeferred_;
};
goog.net.jsloader.safeLoad = function(trustedUri, opt_options) {
  var options = opt_options || {};
  var doc = options.document || document;
  var uri = goog.html.TrustedResourceUrl.unwrap(trustedUri);
  var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);
  var request = {script_:script, timeout_:undefined};
  var deferred = new goog.async.Deferred(goog.net.jsloader.cancel_, request);
  var timeout = null;
  var timeoutDuration = options.timeout != null ? options.timeout : goog.net.jsloader.DEFAULT_TIMEOUT;
  if (timeoutDuration > 0) {
    timeout = window.setTimeout(function() {
      goog.net.jsloader.cleanup_(script, true);
      deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.TIMEOUT, "Timeout reached for loading script " + uri));
    }, timeoutDuration);
    request.timeout_ = timeout;
  }
  script.onload = script.onreadystatechange = function() {
    if (!script.readyState || script.readyState == "loaded" || script.readyState == "complete") {
      var removeScriptNode = options.cleanupWhenDone || false;
      goog.net.jsloader.cleanup_(script, removeScriptNode, timeout);
      deferred.callback(null);
    }
  };
  script.onerror = function() {
    goog.net.jsloader.cleanup_(script, true, timeout);
    deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.LOAD_ERROR, "Error while loading script " + uri));
  };
  var properties = options.attributes || {};
  goog.object.extend(properties, {"type":"text/javascript", "charset":"UTF-8"});
  goog.dom.setProperties(script, properties);
  goog.dom.safe.setScriptSrc(script, trustedUri);
  var scriptParent = goog.net.jsloader.getScriptParentElement_(doc);
  scriptParent.appendChild(script);
  return deferred;
};
goog.net.jsloader.safeLoadAndVerify = function(trustedUri, verificationObjName, options) {
  if (!goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_]) {
    goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_] = {};
  }
  var verifyObjs = goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_];
  var uri = goog.html.TrustedResourceUrl.unwrap(trustedUri);
  if (verifyObjs[verificationObjName] !== undefined) {
    return goog.async.Deferred.fail(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.VERIFY_OBJECT_ALREADY_EXISTS, "Verification object " + verificationObjName + " already defined."));
  }
  var sendDeferred = goog.net.jsloader.safeLoad(trustedUri, options);
  var deferred = new goog.async.Deferred(goog.bind(sendDeferred.cancel, sendDeferred));
  sendDeferred.addCallback(function() {
    var result = verifyObjs[verificationObjName];
    if (result !== undefined) {
      deferred.callback(result);
      delete verifyObjs[verificationObjName];
    } else {
      deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.VERIFY_ERROR, "Script " + uri + " loaded, but verification object " + verificationObjName + " was not defined."));
    }
  });
  sendDeferred.addErrback(function(error) {
    if (verifyObjs[verificationObjName] !== undefined) {
      delete verifyObjs[verificationObjName];
    }
    deferred.errback(error);
  });
  return deferred;
};
goog.net.jsloader.getScriptParentElement_ = function(doc) {
  var headElements = goog.dom.getElementsByTagName(goog.dom.TagName.HEAD, doc);
  if (!headElements || goog.array.isEmpty(headElements)) {
    return doc.documentElement;
  } else {
    return headElements[0];
  }
};
goog.net.jsloader.cancel_ = function() {
  var request = this;
  if (request && request.script_) {
    var scriptNode = request.script_;
    if (scriptNode && scriptNode.tagName == goog.dom.TagName.SCRIPT) {
      goog.net.jsloader.cleanup_(scriptNode, true, request.timeout_);
    }
  }
};
goog.net.jsloader.cleanup_ = function(scriptNode, removeScriptNode, opt_timeout) {
  if (opt_timeout != null) {
    goog.global.clearTimeout(opt_timeout);
  }
  scriptNode.onload = goog.nullFunction;
  scriptNode.onerror = goog.nullFunction;
  scriptNode.onreadystatechange = goog.nullFunction;
  if (removeScriptNode) {
    window.setTimeout(function() {
      goog.dom.removeNode(scriptNode);
    }, 0);
  }
};
goog.net.jsloader.ErrorCode = {LOAD_ERROR:0, TIMEOUT:1, VERIFY_ERROR:2, VERIFY_OBJECT_ALREADY_EXISTS:3};
goog.net.jsloader.Error = function(code, opt_message) {
  var msg = "Jsloader error (code #" + code + ")";
  if (opt_message) {
    msg += ": " + opt_message;
  }
  goog.net.jsloader.Error.base(this, "constructor", msg);
  this.code = code;
};
goog.inherits(goog.net.jsloader.Error, goog.debug.Error);

//# sourceMappingURL=goog.net.jsloader.js.map

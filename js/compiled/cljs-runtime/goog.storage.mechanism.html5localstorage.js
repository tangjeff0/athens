goog.provide("goog.storage.mechanism.HTML5LocalStorage");
goog.require("goog.storage.mechanism.HTML5WebStorage");
goog.storage.mechanism.HTML5LocalStorage = function() {
  var storage = null;
  try {
    storage = window.localStorage || null;
  } catch (e) {
  }
  goog.storage.mechanism.HTML5LocalStorage.base(this, "constructor", storage);
};
goog.inherits(goog.storage.mechanism.HTML5LocalStorage, goog.storage.mechanism.HTML5WebStorage);

//# sourceMappingURL=goog.storage.mechanism.html5localstorage.js.map

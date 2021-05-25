goog.provide("goog.storage.mechanism.HTML5WebStorage");
goog.require("goog.asserts");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
goog.require("goog.storage.mechanism.ErrorCode");
goog.require("goog.storage.mechanism.IterableMechanism");
goog.storage.mechanism.HTML5WebStorage = function(storage) {
  goog.storage.mechanism.HTML5WebStorage.base(this, "constructor");
  this.storage_ = storage;
};
goog.inherits(goog.storage.mechanism.HTML5WebStorage, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.HTML5WebStorage.STORAGE_AVAILABLE_KEY_ = "__sak";
goog.storage.mechanism.HTML5WebStorage.prototype.isAvailable = function() {
  if (!this.storage_) {
    return false;
  }
  try {
    this.storage_.setItem(goog.storage.mechanism.HTML5WebStorage.STORAGE_AVAILABLE_KEY_, "1");
    this.storage_.removeItem(goog.storage.mechanism.HTML5WebStorage.STORAGE_AVAILABLE_KEY_);
    return true;
  } catch (e) {
    return false;
  }
};
goog.storage.mechanism.HTML5WebStorage.prototype.set = function(key, value) {
  try {
    this.storage_.setItem(key, value);
  } catch (e) {
    if (this.storage_.length == 0) {
      throw goog.storage.mechanism.ErrorCode.STORAGE_DISABLED;
    } else {
      throw goog.storage.mechanism.ErrorCode.QUOTA_EXCEEDED;
    }
  }
};
goog.storage.mechanism.HTML5WebStorage.prototype.get = function(key) {
  var value = this.storage_.getItem(key);
  if (typeof value !== "string" && value !== null) {
    throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
  }
  return value;
};
goog.storage.mechanism.HTML5WebStorage.prototype.remove = function(key) {
  this.storage_.removeItem(key);
};
goog.storage.mechanism.HTML5WebStorage.prototype.getCount = function() {
  return this.storage_.length;
};
goog.storage.mechanism.HTML5WebStorage.prototype.__iterator__ = function(opt_keys) {
  var i = 0;
  var storage = this.storage_;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    if (i >= storage.length) {
      throw goog.iter.StopIteration;
    }
    var key = goog.asserts.assertString(storage.key(i++));
    if (opt_keys) {
      return key;
    }
    var value = storage.getItem(key);
    if (typeof value !== "string") {
      throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
    }
    return value;
  };
  return newIter;
};
goog.storage.mechanism.HTML5WebStorage.prototype.clear = function() {
  this.storage_.clear();
};
goog.storage.mechanism.HTML5WebStorage.prototype.key = function(index) {
  return this.storage_.key(index);
};

//# sourceMappingURL=goog.storage.mechanism.html5webstorage.js.map

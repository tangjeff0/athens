goog.provide("goog.storage.Storage");
goog.forwardDeclare("goog.storage.mechanism.Mechanism");
goog.require("goog.json");
goog.require("goog.storage.ErrorCode");
goog.storage.Storage = function(mechanism) {
  this.mechanism = mechanism;
};
goog.storage.Storage.prototype.set = function(key, value) {
  if (value === undefined) {
    this.mechanism.remove(key);
    return;
  }
  this.mechanism.set(key, goog.json.serialize(value));
};
goog.storage.Storage.prototype.get = function(key) {
  var json;
  try {
    json = this.mechanism.get(key);
  } catch (e) {
    return undefined;
  }
  if (json === null) {
    return undefined;
  }
  try {
    return JSON.parse(json);
  } catch (e$5) {
    throw goog.storage.ErrorCode.INVALID_VALUE;
  }
};
goog.storage.Storage.prototype.remove = function(key) {
  this.mechanism.remove(key);
};

//# sourceMappingURL=goog.storage.storage.js.map

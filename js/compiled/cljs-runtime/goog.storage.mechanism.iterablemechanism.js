goog.provide("goog.storage.mechanism.IterableMechanism");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.iter");
goog.require("goog.storage.mechanism.Mechanism");
goog.storage.mechanism.IterableMechanism = function() {
  goog.storage.mechanism.IterableMechanism.base(this, "constructor");
};
goog.inherits(goog.storage.mechanism.IterableMechanism, goog.storage.mechanism.Mechanism);
goog.storage.mechanism.IterableMechanism.prototype.getCount = function() {
  var count = 0;
  goog.iter.forEach(this.__iterator__(true), function(key) {
    goog.asserts.assertString(key);
    count++;
  });
  return count;
};
goog.storage.mechanism.IterableMechanism.prototype.__iterator__ = goog.abstractMethod;
goog.storage.mechanism.IterableMechanism.prototype.clear = function() {
  var keys = goog.iter.toArray(this.__iterator__(true));
  var selfObj = this;
  goog.array.forEach(keys, function(key) {
    selfObj.remove(key);
  });
};

//# sourceMappingURL=goog.storage.mechanism.iterablemechanism.js.map

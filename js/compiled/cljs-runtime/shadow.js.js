goog.provide("shadow.js");
shadow.js.files = {};
shadow.js.nativeRequires = {};
shadow.js.NODE_ENV = goog.define("shadow.js.NODE_ENV", "development");
shadow.js.requireStack = [];
shadow.js.add_native_require = function(name, obj) {
  shadow.js.nativeRequires[name] = obj;
};
shadow.js.jsRequire = function(name, opts) {
  var nativeObj = shadow.js.nativeRequires[name];
  if (nativeObj !== undefined) {
    return nativeObj;
  }
  try {
    if (goog.DEBUG) {
      if (name instanceof String && name.indexOf("/") != -1) {
        console.warn("Tried to dynamically require '" + name + "' from '" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + "'. This is not supported and may cause issues.");
      }
    }
    shadow.js.requireStack.push(name);
    var module = shadow.js.files[name];
    var moduleFn = shadow$provide[name];
    if (module === undefined) {
      if (moduleFn === undefined) {
        throw "Module not provided: " + name;
      }
      module = {};
      module["exports"] = {};
      shadow.js.files[name] = module;
    }
    if (moduleFn) {
      delete shadow$provide[name];
      try {
        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module["exports"]);
      } catch (e) {
        console.warn("shadow-cljs - failed to load", name);
        throw e;
      }
      if (opts) {
        var globals = opts["globals"];
        if (globals) {
          for (var i = 0; i < globals.length; i++) {
            window[globals[i]] = module["exports"];
          }
        }
      }
    }
  } finally {
    shadow.js.requireStack.pop();
  }
  return module["exports"];
};
shadow.js.jsRequire.cache = {};
shadow.js.jsRequire.resolve = function(name) {
  return name;
};
shadow.js.modules = {};
shadow.js.require = function(name, opts) {
  return shadow.js.jsRequire(name, opts);
};

//# sourceMappingURL=shadow.js.js.map

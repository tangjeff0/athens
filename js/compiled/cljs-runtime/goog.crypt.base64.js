goog.provide("goog.crypt.base64");
goog.require("goog.asserts");
goog.require("goog.crypt");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/\x3d";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
goog.crypt.base64.Alphabet = {DEFAULT:0, NO_PADDING:1, WEBSAFE:2, WEBSAFE_DOT_PADDING:3, WEBSAFE_NO_PADDING:4, };
goog.crypt.base64.paddingChars_ = "\x3d.";
goog.crypt.base64.isPadding_ = function(char) {
  return goog.string.contains(goog.crypt.base64.paddingChars_, char);
};
goog.crypt.base64.byteToCharMaps_ = {};
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
goog.crypt.base64.encodeByteArray = function(input, alphabet) {
  goog.asserts.assert(goog.isArrayLike(input), "encodeByteArray takes an array as a parameter");
  if (alphabet === undefined) {
    alphabet = goog.crypt.base64.Alphabet.DEFAULT;
  }
  goog.crypt.base64.init_();
  var byteToCharMap = goog.crypt.base64.byteToCharMaps_[alphabet];
  var output = [];
  for (var i = 0; i < input.length; i += 3) {
    var byte1 = input[i];
    var haveByte2 = i + 1 < input.length;
    var byte2 = haveByte2 ? input[i + 1] : 0;
    var haveByte3 = i + 2 < input.length;
    var byte3 = haveByte3 ? input[i + 2] : 0;
    var outByte1 = byte1 >> 2;
    var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
    var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
    var outByte4 = byte3 & 63;
    if (!haveByte3) {
      outByte4 = 64;
      if (!haveByte2) {
        outByte3 = 64;
      }
    }
    output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3] || "", byteToCharMap[outByte4] || "");
  }
  return output.join("");
};
goog.crypt.base64.encodeString = function(input, alphabet) {
  if (goog.crypt.base64.HAS_NATIVE_ENCODE_ && !alphabet) {
    return goog.global.btoa(input);
  }
  return goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(input), alphabet);
};
goog.crypt.base64.decodeString = function(input, useCustomDecoder) {
  if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !useCustomDecoder) {
    return goog.global.atob(input);
  }
  var output = "";
  function pushByte(b) {
    output += String.fromCharCode(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
goog.crypt.base64.decodeStringToByteArray = function(input, opt_ignored) {
  var output = [];
  function pushByte(b) {
    output.push(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
goog.crypt.base64.decodeStringToUint8Array = function(input) {
  goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
  var len = input.length;
  var approxByteLength = len * 3 / 4;
  if (approxByteLength % 3) {
    approxByteLength = Math.floor(approxByteLength);
  } else {
    if (goog.crypt.base64.isPadding_(input[len - 1])) {
      if (goog.crypt.base64.isPadding_(input[len - 2])) {
        approxByteLength -= 2;
      } else {
        approxByteLength -= 1;
      }
    }
  }
  var output = new Uint8Array(approxByteLength);
  var outLen = 0;
  function pushByte(b) {
    output[outLen++] = b;
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output.subarray(0, outLen);
};
goog.crypt.base64.decodeStringInternal_ = function(input, pushByte) {
  goog.crypt.base64.init_();
  var nextCharIndex = 0;
  function getByte(default_val) {
    while (nextCharIndex < input.length) {
      var ch = input.charAt(nextCharIndex++);
      var b = goog.crypt.base64.charToByteMap_[ch];
      if (b != null) {
        return b;
      }
      if (!goog.string.isEmptyOrWhitespace(ch)) {
        throw new Error("Unknown base64 encoding at char: " + ch);
      }
    }
    return default_val;
  }
  while (true) {
    var byte1 = getByte(-1);
    var byte2 = getByte(0);
    var byte3 = getByte(64);
    var byte4 = getByte(64);
    if (byte4 === 64) {
      if (byte1 === -1) {
        return;
      }
    }
    var outByte1 = byte1 << 2 | byte2 >> 4;
    pushByte(outByte1);
    if (byte3 != 64) {
      var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
      pushByte(outByte2);
      if (byte4 != 64) {
        var outByte3 = byte3 << 6 & 192 | byte4;
        pushByte(outByte3);
      }
    }
  }
};
goog.crypt.base64.init_ = function() {
  if (goog.crypt.base64.charToByteMap_) {
    return;
  }
  goog.crypt.base64.charToByteMap_ = {};
  var commonChars = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split("");
  var specialChars = ["+/\x3d", "+/", "-_\x3d", "-_.", "-_", ];
  for (var i = 0; i < 5; i++) {
    var chars = commonChars.concat(specialChars[i].split(""));
    goog.crypt.base64.byteToCharMaps_[i] = chars;
    for (var j = 0; j < chars.length; j++) {
      var char = chars[j];
      var existingByte = goog.crypt.base64.charToByteMap_[char];
      if (existingByte === undefined) {
        goog.crypt.base64.charToByteMap_[char] = j;
      } else {
        goog.asserts.assert(existingByte === j);
      }
    }
  }
};

//# sourceMappingURL=goog.crypt.base64.js.map

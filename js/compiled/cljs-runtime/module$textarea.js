shadow$provide.module$textarea=function(global,require,module,exports){(function(){function getCaretCoordinates(element,position,options){if(!isBrowser)throw Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");if(options=options&&options.debug||!1){var el=document.querySelector("#input-textarea-caret-position-mirror-div");el&&el.parentNode.removeChild(el)}el=document.createElement("div");el.id="input-textarea-caret-position-mirror-div";document.body.appendChild(el);
var style=el.style,computed=window.getComputedStyle?window.getComputedStyle(element):element.currentStyle,isInput="INPUT"===element.nodeName;style.whiteSpace="pre-wrap";isInput||(style.wordWrap="break-word");style.position="absolute";options||(style.visibility="hidden");properties.forEach(function(prop){if(isInput&&"lineHeight"===prop)if("border-box"===computed.boxSizing){prop=parseInt(computed.height);var outerHeight=parseInt(computed.paddingTop)+parseInt(computed.paddingBottom)+parseInt(computed.borderTopWidth)+
parseInt(computed.borderBottomWidth),targetHeight=outerHeight+parseInt(computed.lineHeight);style.lineHeight=prop>targetHeight?prop-outerHeight+"px":prop===targetHeight?computed.lineHeight:0}else style.lineHeight=computed.height;else style[prop]=computed[prop]});isFirefox?element.scrollHeight>parseInt(computed.height)&&(style.overflowY="scroll"):style.overflow="hidden";el.textContent=element.value.substring(0,position);isInput&&(el.textContent=el.textContent.replace(/\s/g," "));var span=document.createElement("span");
span.textContent=element.value.substring(position)||".";el.appendChild(span);element={top:span.offsetTop+parseInt(computed.borderTopWidth),left:span.offsetLeft+parseInt(computed.borderLeftWidth),height:parseInt(computed.lineHeight)};options?span.style.backgroundColor="#aaa":document.body.removeChild(el);return element}var properties="direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" "),
isBrowser="undefined"!==typeof window,isFirefox=isBrowser&&null!=window.mozInnerScreenX;"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=getCaretCoordinates:isBrowser&&(window.getCaretCoordinates=getCaretCoordinates)})()}
//# sourceMappingURL=module$textarea.js.map

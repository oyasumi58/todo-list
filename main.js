/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! asset/Roboto-Regular.woff2 */ "./src/asset/Roboto-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! asset/Roboto-Regular.woff */ "./src/asset/Roboto-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


body {
    
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', Helvetica, Arial,  sans-serif;

    /* custom prop */
    --btn-bg-color: rgb(228, 118, 137);
    --btn-border-color: rgb(175, 102, 102);
    --btn-hover-color: rgb(211, 106, 124);
    /* layout */
    height: 100vh;
    overflow-y: hidden;
    gap: 15px;
}



#newTodoBtn {
    background-color: var(--btn-bg-color);
    font-size: 4.5rem;
    color: white;
    padding: 0px 20px 0px;
    border: 5px solid var(--btn-border-color);
    border-radius: 90px;
    position: absolute;
    box-shadow: 5px 6px 13px 3px rgba(0,0,0,0.34);
    bottom: 70px;
    right: 20px;
}

#newTodoBtn:hover {
    background-color: var(--btn-hover-color);
    /* border: 5px solid rgb(194, 137, 163); */
}


#newTodoBtn:active {
    bottom: 68px;
    right: 18px;
}

.wrapper {
    display: flex;
    
}

.wrapper > div { /*side and main divs*/
    --block-padding: 20px;
    padding: var(--block-padding);
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
}

#sidebar {
    height: calc(100vh - 15px - 15px - 1.5rem - 2 * var(--block-padding)); 
    width: 30%;
    background: rgb(245, 238, 238);
    overflow-y: auto;
}

#main {
    width: 70%;
    height: 100vh - 15px - 15px - 1.5rem;
    overflow-y: auto;
    gap: 15px;

    & .todo {
        display: flex;
        flex-direction: column;
        border-left: 5px solid rgb(190, 156, 92);
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(236, 217, 217);

        & .row1,.row2 {
            display: flex;
            gap: 10px;
        }

        & .row2 {
            padding-left: 4px;
        }
    }

    & .todo:hover {
        background-color: rgb(226, 206, 206);
    }
}

#sidebar > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#sidebar button {
    background-color: rgb(245, 238, 238);
    border: 1px solid  rgb(245, 238, 238);
    font-size: 1.5rem;
    color: rgb(160, 94, 94);
    font-weight: bold;
    border-radius: 15px;
}

#sidebar button:hover {
    transition: 0.4s;
    background-color: rgb(218, 207, 207);
}

input[type=checkbox] {
    opacity: 0;
    height: 0;
    width: 0;
}


footer {
    font-size: 1.2rem;
    line-height: 1.5rem;
    background-color: rgb(187, 98, 113);
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 15px;
}



/* New todo modal */
::backdrop {
    background: rgb(206, 200, 200);
    opacity: 0.50;
}

dialog {
    padding: 0px;
    border: 3px solid grey;
    border-radius: 15px;
    font-size: 1.5rem;
}

dialog > div {
    padding: 24px;
}

dialog input {
    margin-top: 10px;
    border: 0px;
    border-bottom: 2px solid lightgrey;
    padding: 10px 20px 10px;
    font-size: 1.5rem;
}

input:hover {
    background-color: rgb(235, 235, 235);
}

dialog input:focus {
    outline: none;
    border: 0px;
    border-bottom: 2px solid lightgrey;
}

#priorityCon {
    display: flex;
    gap: 15px;
    align-items: center;
}

#priorityCon > button {
    font-size: 1.2rem;
    border-radius: 15px;
    padding: 3px 5px 3px;
}

#priorityCon > button.selected {
    background-color: rgb(223, 223, 223);
    border: 5px solid rgb(0, 0, 0);
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: -3px -3px 13px 3px rgba(0,0,0,0.34);
}

dialog button:active {
    position: relative;
    top: 1px;
    left: 1px;
}

#trivialBtn {
    background-color: rgb(199, 245, 199);
    border: 5px solid rgb(40, 126, 40);
}

#trivialBtn:hover {
    background-color: rgb(168, 214, 168);
}



#standardBtn {
    background-color: rgb(245, 237, 199);
    border: 5px solid rgb(126, 113, 40);
}

#standardBtn:hover {
    background-color: rgb(214, 206, 168);
}



#imptBtn {
    background-color: rgb(245, 199, 199);
    border: 5px solid rgb(126, 40, 40);
}

#imptBtn:hover {
    background-color: rgb(214, 171, 168);
}



.buttongrp {
    display: flex;
    justify-content: right;
}

button.submit {
    padding: 7px;
    font-size: 1.2rem;
    background-color: var(--btn-bg-color);
    font-weight: bold;
    color: white;
    border-radius: 10px;
    border: 3px solid  var(--btn-border-color);
}

button.submit:hover {
    background-color: var(--btn-hover-color);
}

#Pcontainer {
    display: flex;
    gap: 20px;
    align-items: center;
}

select {
    border-radius: 15px;
    font-size: 1.2rem;
    padding: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["\n@font-face {\n    font-family: 'Roboto';\n    src: url('asset/Roboto-Regular.woff2') format('woff2'),\n        url('asset/Roboto-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n\nbody {\n    \n    margin: 0px;\n    padding: 0px;\n    font-family: 'Roboto', Helvetica, Arial,  sans-serif;\n\n    /* custom prop */\n    --btn-bg-color: rgb(228, 118, 137);\n    --btn-border-color: rgb(175, 102, 102);\n    --btn-hover-color: rgb(211, 106, 124);\n    /* layout */\n    height: 100vh;\n    overflow-y: hidden;\n    gap: 15px;\n}\n\n\n\n#newTodoBtn {\n    background-color: var(--btn-bg-color);\n    font-size: 4.5rem;\n    color: white;\n    padding: 0px 20px 0px;\n    border: 5px solid var(--btn-border-color);\n    border-radius: 90px;\n    position: absolute;\n    box-shadow: 5px 6px 13px 3px rgba(0,0,0,0.34);\n    bottom: 70px;\n    right: 20px;\n}\n\n#newTodoBtn:hover {\n    background-color: var(--btn-hover-color);\n    /* border: 5px solid rgb(194, 137, 163); */\n}\n\n\n#newTodoBtn:active {\n    bottom: 68px;\n    right: 18px;\n}\n\n.wrapper {\n    display: flex;\n    \n}\n\n.wrapper > div { /*side and main divs*/\n    --block-padding: 20px;\n    padding: var(--block-padding);\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar {\n    height: calc(100vh - 15px - 15px - 1.5rem - 2 * var(--block-padding)); \n    width: 30%;\n    background: rgb(245, 238, 238);\n    overflow-y: auto;\n}\n\n#main {\n    width: 70%;\n    height: 100vh - 15px - 15px - 1.5rem;\n    overflow-y: auto;\n    gap: 15px;\n\n    & .todo {\n        display: flex;\n        flex-direction: column;\n        border-left: 5px solid rgb(190, 156, 92);\n        border-radius: 10px;\n        padding: 10px;\n        background-color: rgb(236, 217, 217);\n\n        & .row1,.row2 {\n            display: flex;\n            gap: 10px;\n        }\n\n        & .row2 {\n            padding-left: 4px;\n        }\n    }\n\n    & .todo:hover {\n        background-color: rgb(226, 206, 206);\n    }\n}\n\n#sidebar > div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#sidebar button {\n    background-color: rgb(245, 238, 238);\n    border: 1px solid  rgb(245, 238, 238);\n    font-size: 1.5rem;\n    color: rgb(160, 94, 94);\n    font-weight: bold;\n    border-radius: 15px;\n}\n\n#sidebar button:hover {\n    transition: 0.4s;\n    background-color: rgb(218, 207, 207);\n}\n\ninput[type=checkbox] {\n    opacity: 0;\n    height: 0;\n    width: 0;\n}\n\n\nfooter {\n    font-size: 1.2rem;\n    line-height: 1.5rem;\n    background-color: rgb(187, 98, 113);\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    padding: 15px;\n}\n\n\n\n/* New todo modal */\n::backdrop {\n    background: rgb(206, 200, 200);\n    opacity: 0.50;\n}\n\ndialog {\n    padding: 0px;\n    border: 3px solid grey;\n    border-radius: 15px;\n    font-size: 1.5rem;\n}\n\ndialog > div {\n    padding: 24px;\n}\n\ndialog input {\n    margin-top: 10px;\n    border: 0px;\n    border-bottom: 2px solid lightgrey;\n    padding: 10px 20px 10px;\n    font-size: 1.5rem;\n}\n\ninput:hover {\n    background-color: rgb(235, 235, 235);\n}\n\ndialog input:focus {\n    outline: none;\n    border: 0px;\n    border-bottom: 2px solid lightgrey;\n}\n\n#priorityCon {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n#priorityCon > button {\n    font-size: 1.2rem;\n    border-radius: 15px;\n    padding: 3px 5px 3px;\n}\n\n#priorityCon > button.selected {\n    background-color: rgb(223, 223, 223);\n    border: 5px solid rgb(0, 0, 0);\n    position: relative;\n    top: 2px;\n    left: 2px;\n    box-shadow: -3px -3px 13px 3px rgba(0,0,0,0.34);\n}\n\ndialog button:active {\n    position: relative;\n    top: 1px;\n    left: 1px;\n}\n\n#trivialBtn {\n    background-color: rgb(199, 245, 199);\n    border: 5px solid rgb(40, 126, 40);\n}\n\n#trivialBtn:hover {\n    background-color: rgb(168, 214, 168);\n}\n\n\n\n#standardBtn {\n    background-color: rgb(245, 237, 199);\n    border: 5px solid rgb(126, 113, 40);\n}\n\n#standardBtn:hover {\n    background-color: rgb(214, 206, 168);\n}\n\n\n\n#imptBtn {\n    background-color: rgb(245, 199, 199);\n    border: 5px solid rgb(126, 40, 40);\n}\n\n#imptBtn:hover {\n    background-color: rgb(214, 171, 168);\n}\n\n\n\n.buttongrp {\n    display: flex;\n    justify-content: right;\n}\n\nbutton.submit {\n    padding: 7px;\n    font-size: 1.2rem;\n    background-color: var(--btn-bg-color);\n    font-weight: bold;\n    color: white;\n    border-radius: 10px;\n    border: 3px solid  var(--btn-border-color);\n}\n\nbutton.submit:hover {\n    background-color: var(--btn-hover-color);\n}\n\n#Pcontainer {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\nselect {\n    border-radius: 15px;\n    font-size: 1.2rem;\n    padding: 5px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



console.log("appl check");

function giveBtnsEvent() {
    let clickState = true;
    const todoBtn = document.querySelector('#newTodoBtn');
    const dialog = document.querySelector('dialog');

    todoBtn.addEventListener("click",() => { 
        if (clickState) {
            dialog.showModal();
        }
    })

    //close dialog with background
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) { //dialog element is the bg, rest is children
            dialog.close();
            e.stopPropagation(); //to prevent it from bubbling to dialog if clicked on child
        }
    })


    //priority buttons
    const priorityBtns = document.querySelectorAll(".priorityBtn");
    let priorityInfo = "";
    // console.log(priorityBtns);
    priorityBtns.forEach(btn => {
        btn.addEventListener("click",(e) => {
            if (!btn.classList.contains("selected")) {
                btn.classList.add("selected");
                priorityInfo = btn.getAttribute("data-name");
                priorityBtns.forEach(otherBtn => {
                if (otherBtn !== e.target) {
                    otherBtn.classList.remove("selected");
                }
            })
            }     
        })
    })

    //information stuff:
    const titleInput = document.querySelector("#title");
    const descInput = document.querySelector("#desc");
    const dateInput = document.querySelector("#dueDate");
    const timeInput = document.querySelector("#dueTime");
    const projInput = document.querySelector("#projSelect");

    //to actually create todo:
    const createBtn = document.querySelector(".submit");
    createBtn.addEventListener("click",() => {
        let titleInfo = titleInput.value;
      
        let descInfo = descInput.value;
        let dateInfo = dateInput.value;
        let timeInfo = timeInput.value;
        let projectInfo = projInput.value;
        console.log(projectInfo);
        //title,desc = '',dueDate = 'none',dueTime = 'none',priority = 'Trivial',project = "General"
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(titleInfo,descInfo,dateInfo,timeInfo,priorityInfo,projectInfo);
        console.log(_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo.array);
        refreshModule();
        dialog.close();
        let todoEl = new _dom_js__WEBPACK_IMPORTED_MODULE_1__.TodoElement(todo);
    })

    //to refresh module
    function refreshModule() {
        titleInput.value = "";
        descInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
        projInput.value = "General";
        priorityInfo = "Trivial";
        priorityBtns.forEach(btn => {
            if (btn.getAttribute("data-name") !== "Trivial") {
                btn.classList.remove("selected");
            } else if (!btn.classList.contains("selected")) {
                btn.classList.add("selected");
            }
        })
        // console.log(priorityBtns);
    }

    return refreshModule;
}


const manager = giveBtnsEvent();





/***/ }),

/***/ "./src/asset/Roboto-Regular.woff":
/*!***************************************!*\
  !*** ./src/asset/Roboto-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c72154162784b525f53.woff";

/***/ }),

/***/ "./src/asset/Roboto-Regular.woff2":
/*!****************************************!*\
  !*** ./src/asset/Roboto-Regular.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcc837bcbed57ee5cc6e.woff2";

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoElement: () => (/* binding */ TodoElement),
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
console.log("dom check");
const main = document.querySelector("#main");


class TodoElement {
    constructor(todo) {
        const todoElem = document.createElement("div");
        todoElem.setAttribute("class","todo");
        todoElem.setAttribute("name","done");
        
        
        const row1 = document.createElement("div");
        row1.setAttribute("class","row1");
        const row2 = document.createElement("div");
        row2.setAttribute("class","row2");
        todoElem.appendChild(row1);
        todoElem.appendChild(row2);


        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        row1.appendChild(checkbox);
        const titleDiv = document.createElement("div");
        titleDiv.textContent = todo.title;
        row1.appendChild(titleDiv);
        const projDiv = document.createElement("div");
        projDiv.textContent = todo.project;
        row2.appendChild(projDiv);
        const dateDiv = document.createElement("div");
        dateDiv.textContent = todo.dueDate;
        row2.appendChild(dateDiv);
        const timeDiv = document.createElement("div");
        timeDiv.textContent = todo.dueTime;
        row2.appendChild(timeDiv);
        main.appendChild(todoElem);
    }
}

const domManager = (function() {
    const appendTodo = function(todo) {
        let todo1 = new TodoElement(todo);
    }
    
    
    return { appendTodo };
})();




/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
console.log("todo check");

class Todo {
    static array = [];

    constructor(title,desc,dueDate,dueTime,priority = 'Trivial',project = "General") {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.project = project;
        Todo.array.push(this);
    }   
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.js */ "./src/application.js");
console.log("inddwx check");
//todo has a property for which project it is, and then we arrange it that way.

// import  './application.js';


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1JQUE2QztBQUN6Riw0Q0FBNEMsaUlBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sNkVBQTZFLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxtQkFBbUIsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFV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Q0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDc0I7QUFDdEI7QUFDMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RldmVsb3BtZW50Ly4vc3JjL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL2RldmVsb3BtZW50Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RldmVsb3BtZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RldmVsb3BtZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldC9Sb2JvdG8tUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0L1JvYm90by1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuYm9keSB7XG4gICAgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgIHNhbnMtc2VyaWY7XG5cbiAgICAvKiBjdXN0b20gcHJvcCAqL1xuICAgIC0tYnRuLWJnLWNvbG9yOiByZ2IoMjI4LCAxMTgsIDEzNyk7XG4gICAgLS1idG4tYm9yZGVyLWNvbG9yOiByZ2IoMTc1LCAxMDIsIDEwMik7XG4gICAgLS1idG4taG92ZXItY29sb3I6IHJnYigyMTEsIDEwNiwgMTI0KTtcbiAgICAvKiBsYXlvdXQgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cblxuXG4jbmV3VG9kb0J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ0bi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6IDVweCA2cHggMTNweCAzcHggcmdiYSgwLDAsMCwwLjM0KTtcbiAgICBib3R0b206IDcwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbiNuZXdUb2RvQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4taG92ZXItY29sb3IpO1xuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxOTQsIDEzNywgMTYzKTsgKi9cbn1cblxuXG4jbmV3VG9kb0J0bjphY3RpdmUge1xuICAgIGJvdHRvbTogNjhweDtcbiAgICByaWdodDogMThweDtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cbi53cmFwcGVyID4gZGl2IHsgLypzaWRlIGFuZCBtYWluIGRpdnMqL1xuICAgIC0tYmxvY2stcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1ibG9jay1wYWRkaW5nKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzaWRlYmFyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXB4IC0gMTVweCAtIDEuNXJlbSAtIDIgKiB2YXIoLS1ibG9jay1wYWRkaW5nKSk7IFxuICAgIHdpZHRoOiAzMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjM4LCAyMzgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNtYWluIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwdmggLSAxNXB4IC0gMTVweCAtIDEuNXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGdhcDogMTVweDtcblxuICAgICYgLnRvZG8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigxOTAsIDE1NiwgOTIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMTcsIDIxNyk7XG5cbiAgICAgICAgJiAucm93MSwucm93MiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiAucm93MiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgLnRvZG86aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMDYsIDIwNik7XG4gICAgfVxufVxuXG4jc2lkZWJhciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3NpZGViYXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIHJnYigyNDUsIDIzOCwgMjM4KTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogcmdiKDE2MCwgOTQsIDk0KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jc2lkZWJhciBidXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjA3LCAyMDcpO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG59XG5cblxuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDk4LCAxMTMpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuXG5cbi8qIE5ldyB0b2RvIG1vZGFsICovXG46OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA2LCAyMDAsIDIwMCk7XG4gICAgb3BhY2l0eTogMC41MDtcbn1cblxuZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5kaWFsb2cgPiBkaXYge1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG5cbmRpYWxvZyBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5pbnB1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xufVxuXG5kaWFsb2cgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuI3ByaW9yaXR5Q29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJpb3JpdHlDb24gPiBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogM3B4IDVweCAzcHg7XG59XG5cbiNwcmlvcml0eUNvbiA+IGJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCAxM3B4IDNweCByZ2JhKDAsMCwwLDAuMzQpO1xufVxuXG5kaWFsb2cgYnV0dG9uOmFjdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICAgIGxlZnQ6IDFweDtcbn1cblxuI3RyaXZpYWxCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDI0NSwgMTk5KTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNDAsIDEyNiwgNDApO1xufVxuXG4jdHJpdmlhbEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMjE0LCAxNjgpO1xufVxuXG5cblxuI3N0YW5kYXJkQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzcsIDE5OSk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEyNiwgMTEzLCA0MCk7XG59XG5cbiNzdGFuZGFyZEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjA2LCAxNjgpO1xufVxuXG5cblxuI2ltcHRCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE5OSwgMTk5KTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTI2LCA0MCwgNDApO1xufVxuXG4jaW1wdEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTcxLCAxNjgpO1xufVxuXG5cblxuLmJ1dHRvbmdycCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG5idXR0b24uc3VibWl0IHtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAgdmFyKC0tYnRuLWJvcmRlci1jb2xvcik7XG59XG5cbmJ1dHRvbi5zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1ob3Zlci1jb2xvcik7XG59XG5cbiNQY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQjs4REFDbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0RBQW9EOztJQUVwRCxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztBQUNi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QjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnYXNzZXQvUm9ib3RvLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ2Fzc2V0L1JvYm90by1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCAgc2Fucy1zZXJpZjtcXG5cXG4gICAgLyogY3VzdG9tIHByb3AgKi9cXG4gICAgLS1idG4tYmctY29sb3I6IHJnYigyMjgsIDExOCwgMTM3KTtcXG4gICAgLS1idG4tYm9yZGVyLWNvbG9yOiByZ2IoMTc1LCAxMDIsIDEwMik7XFxuICAgIC0tYnRuLWhvdmVyLWNvbG9yOiByZ2IoMjExLCAxMDYsIDEyNCk7XFxuICAgIC8qIGxheW91dCAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuI25ld1RvZG9CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3IpO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ0bi1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggMTNweCAzcHggcmdiYSgwLDAsMCwwLjM0KTtcXG4gICAgYm90dG9tOiA3MHB4O1xcbiAgICByaWdodDogMjBweDtcXG59XFxuXFxuI25ld1RvZG9CdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4taG92ZXItY29sb3IpO1xcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTk0LCAxMzcsIDE2Myk7ICovXFxufVxcblxcblxcbiNuZXdUb2RvQnRuOmFjdGl2ZSB7XFxuICAgIGJvdHRvbTogNjhweDtcXG4gICAgcmlnaHQ6IDE4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcblxcbi53cmFwcGVyID4gZGl2IHsgLypzaWRlIGFuZCBtYWluIGRpdnMqL1xcbiAgICAtLWJsb2NrLXBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmc6IHZhcigtLWJsb2NrLXBhZGRpbmcpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXB4IC0gMTVweCAtIDEuNXJlbSAtIDIgKiB2YXIoLS1ibG9jay1wYWRkaW5nKSk7IFxcbiAgICB3aWR0aDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyMzgsIDIzOCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNtYWluIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aCAtIDE1cHggLSAxNXB4IC0gMS41cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgICYgLnRvZG8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigxOTAsIDE1NiwgOTIpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMTcsIDIxNyk7XFxuXFxuICAgICAgICAmIC5yb3cxLC5yb3cyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLnJvdzIge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgLnRvZG86aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjA2LCAyMDYpO1xcbiAgICB9XFxufVxcblxcbiNzaWRlYmFyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzgsIDIzOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICByZ2IoMjQ1LCAyMzgsIDIzOCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogcmdiKDE2MCwgOTQsIDk0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIwNywgMjA3KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgOTgsIDExMyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuXFxuXFxuLyogTmV3IHRvZG8gbW9kYWwgKi9cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNiwgMjAwLCAyMDApO1xcbiAgICBvcGFjaXR5OiAwLjUwO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5kaWFsb2cgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG5kaWFsb2cgaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuZGlhbG9nIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbiNwcmlvcml0eUNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3ByaW9yaXR5Q29uID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDNweCA1cHggM3B4O1xcbn1cXG5cXG4jcHJpb3JpdHlDb24gPiBidXR0b24uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgbGVmdDogMnB4O1xcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggMTNweCAzcHggcmdiYSgwLDAsMCwwLjM0KTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMXB4O1xcbiAgICBsZWZ0OiAxcHg7XFxufVxcblxcbiN0cml2aWFsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMjQ1LCAxOTkpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNDAsIDEyNiwgNDApO1xcbn1cXG5cXG4jdHJpdmlhbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDIxNCwgMTY4KTtcXG59XFxuXFxuXFxuXFxuI3N0YW5kYXJkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM3LCAxOTkpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTI2LCAxMTMsIDQwKTtcXG59XFxuXFxuI3N0YW5kYXJkQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjA2LCAxNjgpO1xcbn1cXG5cXG5cXG5cXG4jaW1wdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE5OSwgMTk5KTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEyNiwgNDAsIDQwKTtcXG59XFxuXFxuI2ltcHRCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxNzEsIDE2OCk7XFxufVxcblxcblxcblxcbi5idXR0b25ncnAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG5idXR0b24uc3VibWl0IHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIHZhcigtLWJ0bi1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24uc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuI1Bjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCwgZG9tTWFuYWdlciB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zb2xlLmxvZyhcImFwcGwgY2hlY2tcIik7XG5cbmZ1bmN0aW9uIGdpdmVCdG5zRXZlbnQoKSB7XG4gICAgbGV0IGNsaWNrU3RhdGUgPSB0cnVlO1xuICAgIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VG9kb0J0bicpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuXG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7IFxuICAgICAgICBpZiAoY2xpY2tTdGF0ZSkge1xuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vY2xvc2UgZGlhbG9nIHdpdGggYmFja2dyb3VuZFxuICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIHsgLy9kaWFsb2cgZWxlbWVudCBpcyB0aGUgYmcsIHJlc3QgaXMgY2hpbGRyZW5cbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy90byBwcmV2ZW50IGl0IGZyb20gYnViYmxpbmcgdG8gZGlhbG9nIGlmIGNsaWNrZWQgb24gY2hpbGRcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIC8vcHJpb3JpdHkgYnV0dG9uc1xuICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlCdG5cIik7XG4gICAgbGV0IHByaW9yaXR5SW5mbyA9IFwiXCI7XG4gICAgLy8gY29uc29sZS5sb2cocHJpb3JpdHlCdG5zKTtcbiAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUluZm8gPSBidG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKG90aGVyQnRuID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJCdG4gIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vaW5mb3JtYXRpb24gc3R1ZmY6XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjXCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVRpbWVcIik7XG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qU2VsZWN0XCIpO1xuXG4gICAgLy90byBhY3R1YWxseSBjcmVhdGUgdG9kbzpcbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGVJbmZvID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIFxuICAgICAgICBsZXQgZGVzY0luZm8gPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBkYXRlSW5mbyA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVJbmZvID0gdGltZUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdEluZm8gPSBwcm9qSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmZvKTtcbiAgICAgICAgLy90aXRsZSxkZXNjID0gJycsZHVlRGF0ZSA9ICdub25lJyxkdWVUaW1lID0gJ25vbmUnLHByaW9yaXR5ID0gJ1RyaXZpYWwnLHByb2plY3QgPSBcIkdlbmVyYWxcIlxuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlSW5mbyxkZXNjSW5mbyxkYXRlSW5mbyx0aW1lSW5mbyxwcmlvcml0eUluZm8scHJvamVjdEluZm8pO1xuICAgICAgICBjb25zb2xlLmxvZyhUb2RvLmFycmF5KTtcbiAgICAgICAgcmVmcmVzaE1vZHVsZSgpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgbGV0IHRvZG9FbCA9IG5ldyBUb2RvRWxlbWVudCh0b2RvKTtcbiAgICB9KVxuXG4gICAgLy90byByZWZyZXNoIG1vZHVsZVxuICAgIGZ1bmN0aW9uIHJlZnJlc2hNb2R1bGUoKSB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBwcm9qSW5wdXQudmFsdWUgPSBcIkdlbmVyYWxcIjtcbiAgICAgICAgcHJpb3JpdHlJbmZvID0gXCJUcml2aWFsXCI7XG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZiAoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKSAhPT0gXCJUcml2aWFsXCIpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJpb3JpdHlCdG5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcmVzaE1vZHVsZTtcbn1cblxuXG5jb25zdCBtYW5hZ2VyID0gZ2l2ZUJ0bnNFdmVudCgpO1xuXG5cblxuIiwiY29uc29sZS5sb2coXCJkb20gY2hlY2tcIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG5cbmNsYXNzIFRvZG9FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvKSB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRvZG9cIik7XG4gICAgICAgIHRvZG9FbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImRvbmVcIik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJvdzEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInJvdzFcIik7XG4gICAgICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJyb3cyXCIpO1xuICAgICAgICB0b2RvRWxlbS5hcHBlbmRDaGlsZChyb3cxKTtcbiAgICAgICAgdG9kb0VsZW0uYXBwZW5kQ2hpbGQocm93Mik7XG5cblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIik7XG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qRGl2LnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0O1xuICAgICAgICByb3cyLmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZVRpbWU7XG4gICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQodGltZURpdik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb0VsZW0pO1xuICAgIH1cbn1cblxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcHBlbmRUb2RvID0gZnVuY3Rpb24odG9kbykge1xuICAgICAgICBsZXQgdG9kbzEgPSBuZXcgVG9kb0VsZW1lbnQodG9kbyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldHVybiB7IGFwcGVuZFRvZG8gfTtcbn0pKCk7XG5cblxuZXhwb3J0IHsgZG9tTWFuYWdlciwgVG9kb0VsZW1lbnQgfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zb2xlLmxvZyhcInRvZG8gY2hlY2tcIik7XG5cbmNsYXNzIFRvZG8ge1xuICAgIHN0YXRpYyBhcnJheSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzYyxkdWVEYXRlLGR1ZVRpbWUscHJpb3JpdHkgPSAnVHJpdmlhbCcscHJvamVjdCA9IFwiR2VuZXJhbFwiKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBUb2RvLmFycmF5LnB1c2godGhpcyk7XG4gICAgfSAgIFxufVxuXG5cbmV4cG9ydCB7IFRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKFwiaW5kZHd4IGNoZWNrXCIpO1xuLy90b2RvIGhhcyBhIHByb3BlcnR5IGZvciB3aGljaCBwcm9qZWN0IGl0IGlzLCBhbmQgdGhlbiB3ZSBhcnJhbmdlIGl0IHRoYXQgd2F5LlxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuLy8gaW1wb3J0ICAnLi9hcHBsaWNhdGlvbi5qcyc7XG5pbXBvcnQgJy4vYXBwbGljYXRpb24uanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
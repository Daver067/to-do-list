/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/mukta-regular-webfont.woff2 */ "./src/fonts/mukta-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/mukta-regular-webfont.woff */ "./src/fonts/mukta-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/macondo-regular-webfont.woff2 */ "./src/fonts/macondo-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/macondo-regular-webfont.woff */ "./src/fonts/macondo-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"muktaregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --priority0to3: green;\n  --priority4to6: orange;\n  --priority7to9: red;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: var(--priority4to6);\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: var(--priority4to6) solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-display > h1 {\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-display > ol {\n  line-height: 1.25;\n  color: #757474;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  font-size: 2em;\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module-name input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  display: flex;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  display: flex;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"muktaregular\";\n  src: url(\"../src/fonts/mukta-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/mukta-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(\"../src/fonts/macondo-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/macondo-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --priority0to3: green;\n  --priority4to6: orange;\n  --priority7to9: red;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: var(--priority4to6);\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: var(--priority4to6) solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-display > h1 {\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-display > ol {\n  line-height: 1.25;\n  color: #757474;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  font-size: 2em;\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module-name input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  display: flex;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  display: flex;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/eventListeners,js":
/*!*******************************!*\
  !*** ./src/eventListeners,js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allListeners": () => (/* binding */ allListeners),
/* harmony export */   "cancelBtn": () => (/* binding */ cancelBtn)
/* harmony export */ });
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");


//adds event listener to New Project button in Nav Bar
function newProjectButton() {
  const btn = document.getElementById("newProject");
  btn.addEventListener("click", () => {
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.newProjectModule)();
  });
}

//clicking on New To-Do Button
function newToDoButton() {
  const btn = document.getElementById("newToDo");
  btn.addEventListener("click", () => {
    alert("clicked todo");
  });
}

//listener for clicking on OK when New Project Module is up

//Cancel for any module
function cancelBtn() {
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    const module = document.querySelector(".module");
    const moduleBackground = document.querySelector(".module-background");
    body.removeChild(module);
    body.removeChild(moduleBackground);
  });
}

//adding listeners to page load
function allListeners() {
  newProjectButton();
  newToDoButton();
}


/* 
Alllisteners goed to render page
cancelBtn goes to render page 

*/


/***/ }),

/***/ "./src/projectsTodos.js":
/*!******************************!*\
  !*** ./src/projectsTodos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "general": () => (/* binding */ general),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
class toDo {
  constructor(name, steps, priority) {
    (this.name = name), (this.steps = steps), (this.priority = priority);
  }
}

class Project {
  constructor(name, toDo1, toDo2, toDo3) {
    this.name = name;
    this.toDos = [toDo1, toDo2, toDo3];
  }

  addToDo = (newTodo) => {
    this.toDos.push(newTodo);
  };
}

let mowLawn = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6
);

//function to add a new to-do to a project
function addToDo(projectToAddTo, toDoName, toDoSteps, toDoPriority) {
  projectToAddTo.push(new toDo(toDoName, toDoSteps, toDoPriority));
}

//function to create a new project
function createNewProject(name) {
  const NewProject = new Project(name);
  projects.push(NewProject);
}
let general = new Project("general", mowLawn, mowLawn, mowLawn);
let projects = [];




/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectModule": () => (/* binding */ newProjectModule),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners,js */ "./src/eventListeners,js");
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");



function createNewElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

//creates header and caption
function createHeader() {
  const header = createNewElement("div", "header", "");
  const caption = createNewElement(
    "div",
    "caption",
    '<h1 id="pageTitle">To-Do-Me</h1>'
  );
  header.appendChild(caption);
  return header;
}

//creates nav bar and buttons
function createNav() {
  const nav = createNewElement(
    "div",
    "nav",
    `<div class="project-buttons"><button id="newProject">New Project</button><button id="newToDo">New To-Do</button></div>`
  );
  return nav;
}

//creates footer and adds text
function createFooter() {
  const footer = createNewElement(
    "div",
    "footer",
    "&copy The Daver gets to move to CostaRica project 2022"
  );
  return footer;
}

//makes New Project module
function newProjectModule() {
  const body = document.querySelector("body");
  body.appendChild(createNewElement("div", "module-background", ""));

  const module = createNewElement("div", "module", "");
  body.appendChild(module);
  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" />'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.cancelBtn)();
}

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createFooter());
  container.appendChild(createNav());
  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.allListeners)();
  loopProjects();
}

function loopProjects() {
  const allProjects = _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects;
  allProjects.push(_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.general);
  console.log(allProjects);
}


//render page used in index.html
//newProjectModule used in eventListeners

/* FOR MODULE

<div class="module-name">
  <label for="name">Project Name:</label>
  <input type="text" name="name" id="name" />
</div>
<div class="module-steps">
  <label for="steps">To-Do Steps: (separate steps by line break)</label>
  <textarea name="steps" id="steps" cols="30" rows="10"></textarea>
</div>
<div class="module-priority">
  <label for="priority">Priority: (0-9)</label>
  <input type="number" name="priority" id="priority" min="0" max="9" />
</div>
<div class="module-buttons">
  <button id="ok">OK</button>
  <button id="cancel">cancel</button>
</div>

*/


/***/ }),

/***/ "./src/fonts/macondo-regular-webfont.woff":
/*!************************************************!*\
  !*** ./src/fonts/macondo-regular-webfont.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23cc1a3154aa1877e202.woff";

/***/ }),

/***/ "./src/fonts/macondo-regular-webfont.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/macondo-regular-webfont.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0348a50c60738f76bbf0.woff2";

/***/ }),

/***/ "./src/fonts/mukta-regular-webfont.woff":
/*!**********************************************!*\
  !*** ./src/fonts/mukta-regular-webfont.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d8e2cba0489b87553c0.woff";

/***/ }),

/***/ "./src/fonts/mukta-regular-webfont.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/mukta-regular-webfont.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "116c4045b4d30fcf17dc.woff2";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");




//renders general page layout
(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd0pBQTJEO0FBQ3ZHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLDRKQUE2RDtBQUN6Ryw0Q0FBNEMsMEpBQTREO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCxrQ0FBa0Msa0pBQWtKLHdCQUF3Qix1QkFBdUIsR0FBRyxnQkFBZ0Isb0NBQW9DLGtKQUFrSix3QkFBd0IsdUJBQXVCLEdBQUcsV0FBVywwQkFBMEIsMkJBQTJCLHdCQUF3QixHQUFHLE9BQU8sY0FBYyxlQUFlLEdBQUcsZ0JBQWdCLGtCQUFrQixnQkFBZ0IscUJBQXFCLGlCQUFpQixzQkFBc0IscUNBQXFDLHdDQUF3QyxHQUFHLGFBQWEsdUJBQXVCLDhCQUE4Qix5Q0FBeUMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0NBQW9DLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxRQUFRLHVCQUF1Qiw4QkFBOEIsK0NBQStDLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLFlBQVksaUJBQWlCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLDZCQUE2QixrQkFBa0IsbUNBQW1DLEdBQUcsY0FBYyx1QkFBdUIsa0JBQWtCLCtCQUErQixrQ0FBa0MsOEJBQThCLEdBQUcsYUFBYSx1QkFBdUIsNEJBQTRCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsR0FBRyx1QkFBdUIsc0JBQXNCLHdCQUF3QixtQkFBbUIsa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsNkJBQTZCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLHlCQUF5QiwrQkFBK0IsOEJBQThCLCtDQUErQyx1QkFBdUIscUJBQXFCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDJCQUEyQiw4QkFBOEIsb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQixnQkFBZ0IsNEJBQTRCLDJCQUEyQixpQ0FBaUMsaURBQWlELCtDQUErQyx1QkFBdUIsa0JBQWtCLCtCQUErQix1Q0FBdUMsR0FBRyxzQkFBc0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsNkJBQTZCLGtCQUFrQix3QkFBd0IsaUJBQWlCLG1CQUFtQiwrQkFBK0Isb0NBQW9DLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLGdCQUFnQix5QkFBeUIsaUJBQWlCLGdCQUFnQix5Q0FBeUMsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRywrQkFBK0IsZ0JBQWdCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLEdBQUcsbUNBQW1DLG9CQUFvQiw4QkFBOEIsR0FBRyw0QkFBNEIsa0JBQWtCLHVDQUF1Qyx5Q0FBeUMsY0FBYyxrQ0FBa0Msa0JBQWtCLEdBQUcseUJBQXlCLHVCQUF1Qix5QkFBeUIscUJBQXFCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0IsbUJBQW1CLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLGFBQWEsR0FBRyxhQUFhLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsbUNBQW1DLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLEdBQUcsZUFBZSxvQkFBb0IsOEJBQThCLEdBQUcsYUFBYSxpQkFBaUIsa0JBQWtCLCtCQUErQiw0Q0FBNEMsdUJBQXVCLGdCQUFnQixpQkFBaUIsNEJBQTRCLGlCQUFpQixlQUFlLGNBQWMsR0FBRyx3QkFBd0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLGlCQUFpQixXQUFXLFlBQVksR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixrQkFBa0IsMkJBQTJCLGtDQUFrQyxHQUFHLHdCQUF3QixnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHVCQUF1QixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLDBDQUEwQyw0QkFBNEIsR0FBRyw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUscUNBQXFDLGtDQUFrQyxxSkFBcUosd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQixvQ0FBb0MseUpBQXlKLHdCQUF3Qix1QkFBdUIsR0FBRyxXQUFXLDBCQUEwQiwyQkFBMkIsd0JBQXdCLEdBQUcsT0FBTyxjQUFjLGVBQWUsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixxQkFBcUIsaUJBQWlCLHNCQUFzQixxQ0FBcUMsd0NBQXdDLEdBQUcsYUFBYSx1QkFBdUIsOEJBQThCLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDRCQUE0QixvQ0FBb0MsR0FBRyxZQUFZLG1CQUFtQixHQUFHLFFBQVEsdUJBQXVCLDhCQUE4QiwrQ0FBK0Msa0JBQWtCLDJCQUEyQixnQ0FBZ0MsWUFBWSxpQkFBaUIsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsNkJBQTZCLGtCQUFrQixtQ0FBbUMsR0FBRyxjQUFjLHVCQUF1QixrQkFBa0IsK0JBQStCLGtDQUFrQyw4QkFBOEIsR0FBRyxhQUFhLHVCQUF1Qiw0QkFBNEIsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0Isd0JBQXdCLG1CQUFtQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyw2QkFBNkIsbUJBQW1CLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IseUJBQXlCLCtCQUErQiw4QkFBOEIsK0NBQStDLHVCQUF1QixxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsMkJBQTJCLDhCQUE4QixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLGdCQUFnQiw0QkFBNEIsMkJBQTJCLGlDQUFpQyxpREFBaUQsK0NBQStDLHVCQUF1QixrQkFBa0IsK0JBQStCLHVDQUF1QyxHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixpQkFBaUIsbUJBQW1CLCtCQUErQixvQ0FBb0MsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsZ0JBQWdCLHlCQUF5QixpQkFBaUIsZ0JBQWdCLHlDQUF5Qyx1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLCtCQUErQixnQkFBZ0Isc0JBQXNCLDhCQUE4Qix1QkFBdUIsR0FBRyxtQ0FBbUMsb0JBQW9CLDhCQUE4QixHQUFHLDRCQUE0QixrQkFBa0IsdUNBQXVDLHlDQUF5QyxjQUFjLGtDQUFrQyxrQkFBa0IsR0FBRyx5QkFBeUIsdUJBQXVCLHlCQUF5QixxQkFBcUIsdUJBQXVCLEdBQUcsdUJBQXVCLHNCQUFzQixtQkFBbUIsR0FBRyxhQUFhLGtCQUFrQixtQ0FBbUMsYUFBYSxHQUFHLGFBQWEsd0JBQXdCLEdBQUcscUJBQXFCLHlCQUF5QixtQ0FBbUMsR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQiw4QkFBOEIsR0FBRyxhQUFhLGlCQUFpQixrQkFBa0IsK0JBQStCLDRDQUE0Qyx1QkFBdUIsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLGVBQWUsY0FBYyxHQUFHLHdCQUF3Qix1QkFBdUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsaUJBQWlCLFdBQVcsWUFBWSxHQUFHLGtCQUFrQixtQkFBbUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLEdBQUcsd0JBQXdCLGdCQUFnQix1QkFBdUIsR0FBRyxtQkFBbUIsdUJBQXVCLGtCQUFrQixHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLEdBQUcscUJBQXFCLHVCQUF1QixrQkFBa0IsMENBQTBDLDRCQUE0QixHQUFHLDRCQUE0QixnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCO0FBQ3JqWjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENNO0FBQ1Y7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFZO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBUTtBQUM5QixtQkFBbUIsbURBQU87QUFDMUI7QUFDQTs7QUFFd0M7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNTOztBQUVuRDtBQUNBLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLGpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHNUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvbXVrdGEtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL211a3RhLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpb3JpdHkwdG8zOiBncmVlbjtcXG4gIC0tcHJpb3JpdHk0dG82OiBvcmFuZ2U7XFxuICAtLXByaW9yaXR5N3RvOTogcmVkO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDVmciAwLjNmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiNWQzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG4uY2FwdGlvbiB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDUlO1xcbiAgcGFkZGluZzogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiA+IGltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOGZyIDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2MyNDEwYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0OmhvdmVyIHtcXG4gIGNvbG9yOiAjOTczMTA4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eTR0bzYpO1xcbiAgYm9yZGVyOiAwLjVweCBibGFjayBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8tc2hvcnRjdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDNkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvLWRpc3BsYXkge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4IDFweCByZ2IoMCAwIDAgLyA1MCUpO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXByaW9yaXR5NHRvNikgc29saWQgOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNzVmcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNybVByb2plY3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTE1cHg7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDEzNSwgMTM1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljZGRhYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZkYTk2O1xcbn1cXG5cXG4uZGlzcGxheS10by1kby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzAwcHgpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvLWRvLWRpc3BsYXkgPiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi50by1kby1kaXNwbGF5ID4gb2wge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG59XFxuXFxuLmltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5wcmlvcml0eSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktaWNvbnMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxufVxcblxcbi5tb2R1bGUge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNWZyIDAuNWZyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxlZnQ6IDI1dnc7XFxuICB0b3A6IDI1dmg7XFxufVxcblxcbi5tb2R1bGUtYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kdWxlLW5hbWUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kdWxlLW5hbWUgaW5wdXQge1xcbiAgaGVpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5tb2R1bGUtc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZHVsZS1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNzVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLm1vZHVsZS1idXR0b25zIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQjswREFDK0Q7RUFDL0QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QjswREFDaUU7RUFDakUsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0Q0FBNEM7RUFDNUMsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vc3JjL2ZvbnRzL211a3RhLXJlZ3VsYXItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9tYWNvbmRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmlvcml0eTB0bzM6IGdyZWVuO1xcbiAgLS1wcmlvcml0eTR0bzY6IG9yYW5nZTtcXG4gIC0tcHJpb3JpdHk3dG85OiByZWQ7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0LjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNWZyIDAuM2ZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmI1ZDM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxufVxcbi5jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4ubmF2IHtcXG4gIGdyaWQtYXJlYTogMS8xLzMvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNSU7XFxuICBwYWRkaW5nOiAxMCU7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0ID4gZGl2ID4gaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC44ZnIgNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWRlZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjYzI0MTBjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQ6aG92ZXIge1xcbiAgY29sb3I6ICM5NzMxMDg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5NHRvNik7XFxuICBib3JkZXI6IDAuNXB4IGJsYWNrIHNvbGlkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkM2RkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG8tZG8tZGlzcGxheSB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggMXB4IHJnYigwIDAgMCAvIDUwJSk7XFxuICBib3JkZXItbGVmdDogdmFyKC0tcHJpb3JpdHk0dG82KSBzb2xpZCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC43NWZyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3JtUHJvamVjdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMTVweDtcXG4gIGhlaWdodDogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTM1LCAxMzUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zID4gYnV0dG9uIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNkZGFjO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucHJvamVjdC1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmRhOTY7XFxufVxcblxcbi5kaXNwbGF5LXRvLWRvLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAzMDBweCk7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIm11a3RhcmVndWxhclxcXCI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG8tZG8tZGlzcGxheSA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnRvLWRvLWRpc3BsYXkgPiBvbCB7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGNvbG9yOiAjNzU3NDc0O1xcbn1cXG5cXG4uaW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDhweDtcXG59XFxuLnByaW9yaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wcmlvcml0eS1pY29ucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWRlZDtcXG59XFxuXFxuLm1vZHVsZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGVmdDogMjV2dztcXG4gIHRvcDogMjV2aDtcXG59XFxuXFxuLm1vZHVsZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2R1bGUtbmFtZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tb2R1bGUtbmFtZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1vZHVsZS1zdGVwcyB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kdWxlLXByaW9yaXR5IHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC43NWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbmV3UHJvamVjdE1vZHVsZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcblxuLy9hZGRzIGV2ZW50IGxpc3RlbmVyIHRvIE5ldyBQcm9qZWN0IGJ1dHRvbiBpbiBOYXYgQmFyXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2R1bGUoKTtcbiAgfSk7XG59XG5cbi8vY2xpY2tpbmcgb24gTmV3IFRvLURvIEJ1dHRvblxuZnVuY3Rpb24gbmV3VG9Eb0J1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUb0RvXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhbGVydChcImNsaWNrZWQgdG9kb1wiKTtcbiAgfSk7XG59XG5cbi8vbGlzdGVuZXIgZm9yIGNsaWNraW5nIG9uIE9LIHdoZW4gTmV3IFByb2plY3QgTW9kdWxlIGlzIHVwXG5cbi8vQ2FuY2VsIGZvciBhbnkgbW9kdWxlXG5mdW5jdGlvbiBjYW5jZWxCdG4oKSB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGVcIik7XG4gICAgY29uc3QgbW9kdWxlQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlLWJhY2tncm91bmRcIik7XG4gICAgYm9keS5yZW1vdmVDaGlsZChtb2R1bGUpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kdWxlQmFja2dyb3VuZCk7XG4gIH0pO1xufVxuXG4vL2FkZGluZyBsaXN0ZW5lcnMgdG8gcGFnZSBsb2FkXG5mdW5jdGlvbiBhbGxMaXN0ZW5lcnMoKSB7XG4gIG5ld1Byb2plY3RCdXR0b24oKTtcbiAgbmV3VG9Eb0J1dHRvbigpO1xufVxuXG5leHBvcnQgeyBhbGxMaXN0ZW5lcnMsIGNhbmNlbEJ0biB9O1xuLyogXG5BbGxsaXN0ZW5lcnMgZ29lZCB0byByZW5kZXIgcGFnZVxuY2FuY2VsQnRuIGdvZXMgdG8gcmVuZGVyIHBhZ2UgXG5cbiovXG4iLCJjbGFzcyB0b0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3RlcHMsIHByaW9yaXR5KSB7XG4gICAgKHRoaXMubmFtZSA9IG5hbWUpLCAodGhpcy5zdGVwcyA9IHN0ZXBzKSwgKHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSk7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRvRG8xLCB0b0RvMiwgdG9EbzMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9Eb3MgPSBbdG9EbzEsIHRvRG8yLCB0b0RvM107XG4gIH1cblxuICBhZGRUb0RvID0gKG5ld1RvZG8pID0+IHtcbiAgICB0aGlzLnRvRG9zLnB1c2gobmV3VG9kbyk7XG4gIH07XG59XG5cbmxldCBtb3dMYXduID0gbmV3IHRvRG8oXG4gIFwiTW93IExhd25cIixcbiAgW1wiUHJlcCBMYXduIE1vd2VyXCIsIFwiTW93IExhd25cIiwgXCJEaXNwb3NlIG9mIEdyYXNzXCIsIFwiQ2xlYW4gVXBcIl0sXG4gIDZcbik7XG5cbi8vZnVuY3Rpb24gdG8gYWRkIGEgbmV3IHRvLWRvIHRvIGEgcHJvamVjdFxuZnVuY3Rpb24gYWRkVG9Ebyhwcm9qZWN0VG9BZGRUbywgdG9Eb05hbWUsIHRvRG9TdGVwcywgdG9Eb1ByaW9yaXR5KSB7XG4gIHByb2plY3RUb0FkZFRvLnB1c2gobmV3IHRvRG8odG9Eb05hbWUsIHRvRG9TdGVwcywgdG9Eb1ByaW9yaXR5KSk7XG59XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBjb25zdCBOZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIHByb2plY3RzLnB1c2goTmV3UHJvamVjdCk7XG59XG5sZXQgZ2VuZXJhbCA9IG5ldyBQcm9qZWN0KFwiZ2VuZXJhbFwiLCBtb3dMYXduLCBtb3dMYXduLCBtb3dMYXduKTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgeyBhZGRUb0RvLCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0cywgZ2VuZXJhbCB9O1xuIiwiaW1wb3J0IHsgYWxsTGlzdGVuZXJzLCBjYW5jZWxCdG4gfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycyxqc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMsIGdlbmVyYWwgfSBmcm9tIFwiLi9wcm9qZWN0c1RvZG9zXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0VsZW1lbnQodHlwZSwgYWRkQ2xhc3MsIGlubmVySFRNTCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGFkZENsYXNzKTtcbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG4vL2NyZWF0ZXMgaGVhZGVyIGFuZCBjYXB0aW9uXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJcIik7XG4gIGNvbnN0IGNhcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJjYXB0aW9uXCIsXG4gICAgJzxoMSBpZD1cInBhZ2VUaXRsZVwiPlRvLURvLU1lPC9oMT4nXG4gICk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjYXB0aW9uKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy9jcmVhdGVzIG5hdiBiYXIgYW5kIGJ1dHRvbnNcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwibmF2XCIsXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJ1dHRvbnNcIj48YnV0dG9uIGlkPVwibmV3UHJvamVjdFwiPk5ldyBQcm9qZWN0PC9idXR0b24+PGJ1dHRvbiBpZD1cIm5ld1RvRG9cIj5OZXcgVG8tRG88L2J1dHRvbj48L2Rpdj5gXG4gICk7XG4gIHJldHVybiBuYXY7XG59XG5cbi8vY3JlYXRlcyBmb290ZXIgYW5kIGFkZHMgdGV4dFxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJmb290ZXJcIixcbiAgICBcIiZjb3B5IFRoZSBEYXZlciBnZXRzIHRvIG1vdmUgdG8gQ29zdGFSaWNhIHByb2plY3QgMjAyMlwiXG4gICk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8vbWFrZXMgTmV3IFByb2plY3QgbW9kdWxlXG5mdW5jdGlvbiBuZXdQcm9qZWN0TW9kdWxlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcIm1vZHVsZS1iYWNrZ3JvdW5kXCIsIFwiXCIpKTtcblxuICBjb25zdCBtb2R1bGUgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kdWxlXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZHVsZSk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLW5hbWVcIixcbiAgICAgICc8bGFiZWwgZm9yPVwibmFtZVwiPlByb2plY3QgTmFtZTo8L2xhYmVsPiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiAvPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLWJ1dHRvbnNcIixcbiAgICAgICc8YnV0dG9uIGlkPVwib2tcIj5PSzwvYnV0dG9uPjxkaXY+PC9kaXY+PGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNBTkNFTDwvYnV0dG9uPidcbiAgICApXG4gICk7XG4gIGNhbmNlbEJ0bigpO1xufVxuXG4vL3JlbmRlcnMgdGhlIHBhZ2UsIGV4cG9ydCB0aGlzIGZ1bmN0aW9uIHRvIGluZGV4IHRvIHJlbmRlciBwYWdlXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIsIFwiXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBhbGxMaXN0ZW5lcnMoKTtcbiAgbG9vcFByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGxvb3BQcm9qZWN0cygpIHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0cztcbiAgYWxsUHJvamVjdHMucHVzaChnZW5lcmFsKTtcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQYWdlLCBuZXdQcm9qZWN0TW9kdWxlIH07XG4vL3JlbmRlciBwYWdlIHVzZWQgaW4gaW5kZXguaHRtbFxuLy9uZXdQcm9qZWN0TW9kdWxlIHVzZWQgaW4gZXZlbnRMaXN0ZW5lcnNcblxuLyogRk9SIE1PRFVMRVxuXG48ZGl2IGNsYXNzPVwibW9kdWxlLW5hbWVcIj5cbiAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Qcm9qZWN0IE5hbWU6PC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kdWxlLXN0ZXBzXCI+XG4gIDxsYWJlbCBmb3I9XCJzdGVwc1wiPlRvLURvIFN0ZXBzOiAoc2VwYXJhdGUgc3RlcHMgYnkgbGluZSBicmVhayk8L2xhYmVsPlxuICA8dGV4dGFyZWEgbmFtZT1cInN0ZXBzXCIgaWQ9XCJzdGVwc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2R1bGUtcHJpb3JpdHlcIj5cbiAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6ICgwLTkpPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgbWluPVwiMFwiIG1heD1cIjlcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kdWxlLWJ1dHRvbnNcIj5cbiAgPGJ1dHRvbiBpZD1cIm9rXCI+T0s8L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuPC9kaXY+XG5cbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5pbXBvcnQgeyBnZW5lcmFsLCBhZGRUb0RvIH0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuXG4vL3JlbmRlcnMgZ2VuZXJhbCBwYWdlIGxheW91dFxucmVuZGVyUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
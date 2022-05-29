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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"muktaregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: var(--priority4to6);\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"muktaregular\";\n  src: url(\"../src/fonts/mukta-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/mukta-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(\"../src/fonts/macondo-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/macondo-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: var(--priority4to6);\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "checkMarkListener": () => (/* binding */ checkMarkListener),
/* harmony export */   "deleteListener": () => (/* binding */ deleteListener),
/* harmony export */   "editListener": () => (/* binding */ editListener)
/* harmony export */ });
/* harmony import */ var _popupModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupModules */ "./src/popupModules.js");
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");



/****************************************************
 * * Project Listeners
 *****************************************************/

//adds event listener to New Project button in Nav Bar
function newProjectButton() {
  const btn = document.getElementById("newProject");
  btn.addEventListener("click", () => {
    (0,_popupModules__WEBPACK_IMPORTED_MODULE_0__.newProjectModule)();
    cancelBtn();
    createNewProjectOKListener();
  });
}

//listener for clicking on OK when New Project Module is up
function createNewProjectOKListener() {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    const ProjectName = document.querySelector("#name").value;
    const projectMade = new _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.Project(ProjectName);
    console.log(projectMade);
    closeModule();
  });
}

/*********************************************************
 * To Do Listeners
 *********************************************************/
//clicking on New To-Do Button
function newToDoButton() {
  const btn = document.getElementById("newToDo");
  btn.addEventListener("click", () => {
    (0,_popupModules__WEBPACK_IMPORTED_MODULE_0__.newToDoModule)();
    ToDoModuleOKListener();
    cancelBtn();
  });
}

//listener for clicking on OK when New ToDo Module is up
function ToDoModuleOKListener() {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    const toDoCreated = createToDoObjectFromModuleInput();
    let ProjectThisTodoBelongsTo = toDoCreated.parentProject;
    ProjectThisTodoBelongsTo = checkProjectsArrayForToDoCreation(
      ProjectThisTodoBelongsTo
    );
    ProjectThisTodoBelongsTo.addToDo(toDoCreated);
    ProjectThisTodoBelongsTo.renderDoms();
    closeModule();
  });
}
//takes input values from the module form for todo creation and returns an object
function createToDoObjectFromModuleInput() {
  const toDoName = document.querySelector("#name").value;
  const toDoSteps = textAreaToArray();
  const todoPriority = document.querySelector("#priority").value;
  const parentProject = document.getElementById("projectToDoModule").value;
  const toDoCreated = new _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.toDo(
    toDoName,
    toDoSteps,
    todoPriority,
    parentProject
  );
  return toDoCreated;
}

//assigns todo to the proper project
function checkProjectsArrayForToDoCreation(parentProject) {
  let match;
  _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
    if (project.name == parentProject) {
      match = _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects[_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.indexOf(project)];
    }
  });
  return match;
}

//function to take textarea info and put it into an Array
function textAreaToArray() {
  let toDoSteps = document.querySelector("#steps").value;
  let toDoStepsArray = toDoSteps.split("\n");
  removeBlanks(toDoStepsArray);
  return toDoStepsArray;
}
//removes any accidental blank steps from array /[^\s\\]/
function removeBlanks(array) {
  for (let i = 0; i < array.length; i++) {
    let regEx = /[^\s\\]/;
    if (array[i].match(regEx)) {
    } else {
      array.splice(i, 1), i--;
    }
  }
}

//clicking on the check marks ToDo as complete
function checkMarkListener(ThisToDoObject) {
  ThisToDoObject.clickedCheckmark();
  (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.checkForActiveProject)();
}

//clicking on the edit button allows editting of current todo
function editListener(ThisToDoObject) {
  ThisToDoObject.clickedEdit();
  (0,_popupModules__WEBPACK_IMPORTED_MODULE_0__.editToDoModule)(ThisToDoObject);
  cancelBtn();
  EditOKListener();
}

//listener for clicking on OK when New ToDo Module is up
function EditOKListener() {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    const toDoCreated = createToDoObjectFromModuleInput();
    let ProjectThisTodoBelongsTo = toDoCreated.parentProject;
    ProjectThisTodoBelongsTo = checkProjectsArrayForToDoCreation(
      ProjectThisTodoBelongsTo
    );
    ProjectThisTodoBelongsTo.editToDo(toDoCreated);
    ProjectThisTodoBelongsTo.renderDoms();
    closeModule();
  });
}

//clicking on delete button deletes current toDo
function deleteListener(ThisToDoObject) {
  ThisToDoObject.clickedDelete();
  (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.checkForActiveProject)();
}

/***************************************************************
 * Both To-Do and Project Listeners
 **************************************************************/
//Cancel for any module
function cancelBtn() {
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", closeModule);
}

//function to close module
function closeModule() {
  const body = document.querySelector("body");
  const module = document.querySelector(".module");
  const moduleBackground = document.querySelector(".module-background");
  body.removeChild(module);
  body.removeChild(moduleBackground);
}

/*****************************************************************
 * Page Load Listeners
 ****************************************************************/
//adding listeners to page load
function allListeners() {
  newProjectButton();
  newToDoButton();
}


/* 
Alllisteners goed to render page
*/


/***/ }),

/***/ "./src/imageLoaderAndListener.js":
/*!***************************************!*\
  !*** ./src/imageLoaderAndListener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allImages": () => (/* binding */ allImages)
/* harmony export */ });
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/check.svg */ "./src/images/check.svg");




const allImages = {
  check: _images_check_svg__WEBPACK_IMPORTED_MODULE_2__,
  delete: _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__,
  edit: _images_edit_svg__WEBPACK_IMPORTED_MODULE_0__,
};




/***/ }),

/***/ "./src/popupModules.js":
/*!*****************************!*\
  !*** ./src/popupModules.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDoModule": () => (/* binding */ editToDoModule),
/* harmony export */   "newProjectModule": () => (/* binding */ newProjectModule),
/* harmony export */   "newToDoModule": () => (/* binding */ newToDoModule)
/* harmony export */ });
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");


/*******************************************************************
 * This part for making modules
 ******************************************************************/

//creates popup module
function moduleMaker() {
  const body = document.querySelector("body");
  body.appendChild((0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("div", "module-background", ""));
  const module = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("div", "module", "");
  body.appendChild(module);
  return module;
}

//makes New ToDo popup module
function newToDoModule() {
  const module = moduleMaker();
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-name",
      '<div class="toDoName"><label for="name">To-Do Name:</label><input type="text" name="name" id="name" placeholder="Mow Lawn"/></div><div class="toDoProject"><label for="projectToDoModule">Project:</label><select name="projectToDoModule" id="projectToDoModule"><option value="General">General</option></select></div>'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-steps",
      '<label for="steps">To-Do Steps: <span class="small">(separate steps by line break)</span></label><textarea name="steps" id="steps" cols="30" rows="10" placeholder="step one &#10step two &#10step three &#10etc.."></textarea>'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-priority",
      '  <label for="priority">Priority: <span class="small">(0-9)</span></label><input type="number" name="priority" id="priority" min="0" max="9" />'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}

//edit a toDo
function editToDoModule(toDoToEdit) {
  const module = moduleMaker();
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-name",
      `<div class="toDoName"><label for="name">To-Do Name:</label><input type="text" name="name" id="name" value='${toDoToEdit.name}'/></div><div class="toDoProject"><label for="projectToDoModule">Project:</label><select name="projectToDoModule" id="projectToDoModule"><option value="General">General</option></select></div>`
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-steps",
      `<label for="steps">To-Do Steps: <span class="small">(separate steps by line break)</span></label><textarea name="steps" id="steps" cols="30" rows="10">${toDoToEdit.steps.join(
        "\n"
      )}</textarea>`
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-priority",
      `<label for="priority">Priority: <span class="small">(0-9)</span></label><input type="number" name="priority" id="priority" min="0" max="9" value='${toDoToEdit.priority}'/>`
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}

//makes New Project popup module
function newProjectModule() {
  const module = moduleMaker();

  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" placeholder="General">'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}


/**
 * newProjectsModule exports to eventListeners
 * newToDoModule exports to eventListeners
 */


/***/ }),

/***/ "./src/projectsTodos.js":
/*!******************************!*\
  !*** ./src/projectsTodos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "General": () => (/* binding */ General),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "checkForActiveProject": () => (/* binding */ checkForActiveProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoaderAndListener */ "./src/imageLoaderAndListener.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners,js */ "./src/eventListeners,js");




/***************************************************************
 * TODO CLASS
 **************************************************************/
class toDo {
  constructor(name, steps, priority, project) {
    (this.name = name),
      (this.steps = steps),
      (this.priority = priority),
      (this.completed = false),
      (this.delete = false),
      (this.parentProject = project),
      (this.edit = false);
  }

  //for clicking individual checkmark in toDo. makes completed status true
  clickedCheckmark = () => {
    this.completed ? (this.completed = false) : (this.completed = true);
  };

  clickedDelete = () => {
    this.delete = true;
  };

  clickedEdit = () => {
    this.edit = true;
  };

  //creates Dom element "to-do-display" with all children according to this classes keys
  CreateDomElement = () => {
    let toDoCard = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("div", "to-do-display", "");
    if (this.completed) {
      toDoCard.appendChild((0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("div", "completed", "COMPLETED"));
    }
    const steps = this.#stepArrayToLi();
    toDoCard.appendChild(steps);
    const toDoName = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("h1", "to-do-name", `${this.name}`);
    toDoCard.appendChild(toDoName);

    const priorityIcons = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)(
      "div",
      "priority-icons",
      `<div class="priority">Priority - ${this.priority}</div>`
    );
    toDoCard = this.#priorityColorChange(toDoCard);
    const images = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("div", "images", "");

    const checkMark = this.#addImages(_imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__.allImages.check);
    checkMark.addEventListener("click", () => {
      (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.checkMarkListener)(this);
    });
    images.appendChild(checkMark);

    const editButton = this.#addImages(_imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__.allImages.edit);
    editButton.addEventListener("click", () => {
      (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.editListener)(this);
    });
    images.appendChild(editButton);

    const deleteBuitton = this.#addImages(_imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__.allImages["delete"]);
    deleteBuitton.addEventListener("click", () => {
      (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.deleteListener)(this);
    });
    images.appendChild(deleteBuitton);

    priorityIcons.appendChild(images);
    toDoCard.appendChild(priorityIcons);

    return toDoCard;
    //remove below this line once I figure a proper way to display all Todos in a Project
    //const toDoDisplay = document.querySelector(".display-to-do-display");
    //toDoDisplay.appendChild(toDoCard);
  };

  //Private Functions Below!
  #addImages = (IMAGE) => {
    const newImage = new Image();
    newImage.src = IMAGE;
    return newImage;
  };

  #stepArrayToLi = () => {
    const allSteps = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("ol", "to-do-steps", "");
    this.steps.forEach((step) => {
      const thisStep = (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.createNewElement)("li", "listItem", step);
      allSteps.appendChild(thisStep);
    });
    return allSteps;
  };
  #priorityColorChange = (toDoCard) => {
    if (this.priority >= 0 && this.priority <= 3) {
      toDoCard.style.borderColor = "green";
    }
    if (this.priority >= 4 && this.priority <= 6) {
      toDoCard.style.borderColor = "orange";
    }
    if (this.priority >= 7 && this.priority <= 9) {
      toDoCard.style.borderColor = "red";
    }
    return toDoCard;
  };
}

/******************************************************************
 * CLASS PROJECT
 *****************************************************************/
class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
    this.toDoDoms = [];
    this.active = false;
  }

  toggleActive = () => {
    this.active == true ? (this.active = false) : (this.active = true);
  };

  addToDo = (newTodo) => {
    this.toDos.push(newTodo);
  };

  cleartoDoDoms = () => {
    this.toDoDoms = [];
  };

  turnToDosIntoDoms = () => {
    this.cleartoDoDoms();
    this.toDos.forEach((todo) => {
      this.toDoDoms.push(todo.CreateDomElement());
    });
  };

  clearDisplay = () => {
    const display = document.querySelector(".display-to-do-display");
    while (display.firstElementChild) {
      display.removeChild(display.firstElementChild);
    }
  };
  renderDoms = () => {
    this.clearDisplay();
    this.turnToDosIntoDoms();
    this.toDoDoms.forEach((dom) => {
      const toDoDisplay = document.querySelector(".display-to-do-display");
      toDoDisplay.appendChild(dom);
    });
  };

  deleteToDo = () => {
    let index = 0;
    this.toDos.forEach((todo) => {
      if (todo.delete) {
        this.toDos.splice(index, 1);
        index--;
      }
      index++;
    });
  };

  editToDo = (newToDo) => {
    let index = 0;
    this.toDos.forEach((todo) => {
      if (todo.edit) {
        let checkedOrNot = todo.completed;
        newToDo.completed = checkedOrNot;
        this.toDos[index] = newToDo;
      }
      index++;
    });
  };
}

/***************************************************************
 * functions for projects and todos
 **************************************************************/
function checkForActiveProject() {
  projects.forEach((project) => {
    if (project.active == true) {
      project.deleteToDo();
      project.turnToDosIntoDoms();
      project.renderDoms();
    }
  });
}

/***************************************************************
 * currently this is just for building site
 ***********************************************************/
let mowLawn = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6,
  "General"
);
let mowLawn2 = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  8,
  "General"
);
let mowLawn3 = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  1,
  "General"
);

let General = new Project("General");
General.addToDo(mowLawn);
General.addToDo(mowLawn2);
General.addToDo(mowLawn3);

let projects = ["junk", "more junk", General, "test"];


/*
toDo goes to eventListeners
Project goes to eventListeners
general to renderPage
projects to...? i forget
*/


/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewElement": () => (/* binding */ createNewElement),
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

//creates Display
function createDisplay() {
  const display = createNewElement(
    "div",
    "display",
    '<div class="project-display"><h1 class="project-display-header">General</h1><button id="rmProject">Delete Project</button></div><div class="display-to-do-display"></div>'
  );
  return display;
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

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createDisplay());
  container.appendChild(createFooter());
  container.appendChild(createNav());
  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.allListeners)();

  //using this for pageload for now.
  _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.General.toggleActive();
  (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.checkForActiveProject)();
}


//render page used in index.html


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

/***/ }),

/***/ "./src/images/check.svg":
/*!******************************!*\
  !*** ./src/images/check.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "983207f640fb42a9d859.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a540027c0d5b544cbe1.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d5342f1a1af17d25ef4.svg";

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


//renders general page layout
(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT21EO0FBQ2M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFZOztBQUVkO0FBQ0EsRUFBRSxnRUFBb0I7QUFDdEIsRUFBRSxxRUFBcUI7QUFDdkI7O0FBRXdDO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDMUM7QUFDQSx1REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ldmVudExpc3RlbmVycyxqcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlTG9hZGVyQW5kTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1cE1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0c1RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvbXVrdGEtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDVmciAwLjNmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiNWQzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG4uY2FwdGlvbiB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDUlO1xcbiAgcGFkZGluZzogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiA+IGltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOGZyIDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjYzI0MTBjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQ6aG92ZXIge1xcbiAgY29sb3I6ICM5NzMxMDg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5NHRvNik7XFxuICBib3JkZXI6IDAuNXB4IGJsYWNrIHNvbGlkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkM2RkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG8tZG8tZGlzcGxheSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggMXB4IHJnYigwIDAgMCAvIDUwJSk7XFxuICBib3JkZXItbGVmdDogc29saWQgOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNzVmcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNybVByb2plY3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTE1cHg7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDEzNSwgMTM1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljZGRhYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZkYTk2O1xcbn1cXG5cXG4uZGlzcGxheS10by1kby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzAwcHgpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvLWRvLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4udG8tZG8tc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0yZW07XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuXFxuLmltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5wcmlvcml0eSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktaWNvbnMge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCAyNDEsIDgyLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDM3LjUlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMxZGVnKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIGNvbG9yOiAjNzU3NDc0O1xcbn1cXG5cXG4ubW9kdWxlIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAwLjVmciAwLjVmcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZWZ0OiAyNXZ3O1xcbiAgdG9wOiAyNXZoO1xcbn1cXG5cXG4ubW9kdWxlLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1vZHVsZS1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4udG9Eb05hbWUge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9Qcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1vZHVsZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1vZHVsZS1zdGVwcyB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tb2R1bGUgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubW9kdWxlLXByaW9yaXR5IHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm1vZHVsZS1idXR0b25zIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjc1ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0I7MERBQytEO0VBQy9ELG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0I7MERBQ2lFO0VBQ2pFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VB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QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvZm9udHMvbXVrdGEtcmVndWxhci13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA1ZnIgMC4zZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjVkMztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG59XFxuLmNhcHRpb24ge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA1JTtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYgPiBpbWcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjhmciA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2MyNDEwYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0OmhvdmVyIHtcXG4gIGNvbG9yOiAjOTczMTA4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eTR0bzYpO1xcbiAgYm9yZGVyOiAwLjVweCBibGFjayBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8tc2hvcnRjdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDNkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4IDFweCByZ2IoMCAwIDAgLyA1MCUpO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAwLjc1ZnI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jcm1Qcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMzUsIDEzNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2RkYWM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZGE5NjtcXG59XFxuXFxuLmRpc3BsYXktdG8tZG8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwMHB4KTtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50by1kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnRvLWRvLXN0ZXBzIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM3NTc0NzQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG4ucHJpb3JpdHkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWljb25zIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgMjQxLCA4MiwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAzNy41JTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMWRlZyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG59XFxuXFxuLm1vZHVsZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGVmdDogMjV2dztcXG4gIHRvcDogMjV2aDtcXG59XFxuXFxuLm1vZHVsZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2R1bGUtbmFtZSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnRvRG9OYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0RvUHJvamVjdCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zbWFsbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tb2R1bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5tb2R1bGUtc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kdWxlIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vZHVsZS1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC43NWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgbmV3UHJvamVjdE1vZHVsZSxcbiAgbmV3VG9Eb01vZHVsZSxcbiAgZWRpdFRvRG9Nb2R1bGUsXG59IGZyb20gXCIuL3BvcHVwTW9kdWxlc1wiO1xuaW1wb3J0IHtcbiAgdG9EbyxcbiAgUHJvamVjdCxcbiAgcHJvamVjdHMsXG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogKiBQcm9qZWN0IExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL2FkZHMgZXZlbnQgbGlzdGVuZXIgdG8gTmV3IFByb2plY3QgYnV0dG9uIGluIE5hdiBCYXJcbmZ1bmN0aW9uIG5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZHVsZSgpO1xuICAgIGNhbmNlbEJ0bigpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RPS0xpc3RlbmVyKCk7XG4gIH0pO1xufVxuXG4vL2xpc3RlbmVyIGZvciBjbGlja2luZyBvbiBPSyB3aGVuIE5ldyBQcm9qZWN0IE1vZHVsZSBpcyB1cFxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdE9LTGlzdGVuZXIoKSB7XG4gIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJva1wiKTtcbiAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0TWFkZSA9IG5ldyBQcm9qZWN0KFByb2plY3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFkZSk7XG4gICAgY2xvc2VNb2R1bGUoKTtcbiAgfSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFRvIERvIExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vY2xpY2tpbmcgb24gTmV3IFRvLURvIEJ1dHRvblxuZnVuY3Rpb24gbmV3VG9Eb0J1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUb0RvXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdUb0RvTW9kdWxlKCk7XG4gICAgVG9Eb01vZHVsZU9LTGlzdGVuZXIoKTtcbiAgICBjYW5jZWxCdG4oKTtcbiAgfSk7XG59XG5cbi8vbGlzdGVuZXIgZm9yIGNsaWNraW5nIG9uIE9LIHdoZW4gTmV3IFRvRG8gTW9kdWxlIGlzIHVwXG5mdW5jdGlvbiBUb0RvTW9kdWxlT0tMaXN0ZW5lcigpIHtcbiAgY29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9rXCIpO1xuICBva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvRG9DcmVhdGVkID0gY3JlYXRlVG9Eb09iamVjdEZyb21Nb2R1bGVJbnB1dCgpO1xuICAgIGxldCBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8gPSB0b0RvQ3JlYXRlZC5wYXJlbnRQcm9qZWN0O1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUbyA9IGNoZWNrUHJvamVjdHNBcnJheUZvclRvRG9DcmVhdGlvbihcbiAgICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUb1xuICAgICk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLmFkZFRvRG8odG9Eb0NyZWF0ZWQpO1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUby5yZW5kZXJEb21zKCk7XG4gICAgY2xvc2VNb2R1bGUoKTtcbiAgfSk7XG59XG4vL3Rha2VzIGlucHV0IHZhbHVlcyBmcm9tIHRoZSBtb2R1bGUgZm9ybSBmb3IgdG9kbyBjcmVhdGlvbiBhbmQgcmV0dXJucyBhbiBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9PYmplY3RGcm9tTW9kdWxlSW5wdXQoKSB7XG4gIGNvbnN0IHRvRG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICBjb25zdCB0b0RvU3RlcHMgPSB0ZXh0QXJlYVRvQXJyYXkoKTtcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgY29uc3QgcGFyZW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRvRG9Nb2R1bGVcIikudmFsdWU7XG4gIGNvbnN0IHRvRG9DcmVhdGVkID0gbmV3IHRvRG8oXG4gICAgdG9Eb05hbWUsXG4gICAgdG9Eb1N0ZXBzLFxuICAgIHRvZG9Qcmlvcml0eSxcbiAgICBwYXJlbnRQcm9qZWN0XG4gICk7XG4gIHJldHVybiB0b0RvQ3JlYXRlZDtcbn1cblxuLy9hc3NpZ25zIHRvZG8gdG8gdGhlIHByb3BlciBwcm9qZWN0XG5mdW5jdGlvbiBjaGVja1Byb2plY3RzQXJyYXlGb3JUb0RvQ3JlYXRpb24ocGFyZW50UHJvamVjdCkge1xuICBsZXQgbWF0Y2g7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5uYW1lID09IHBhcmVudFByb2plY3QpIHtcbiAgICAgIG1hdGNoID0gcHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHRha2UgdGV4dGFyZWEgaW5mbyBhbmQgcHV0IGl0IGludG8gYW4gQXJyYXlcbmZ1bmN0aW9uIHRleHRBcmVhVG9BcnJheSgpIHtcbiAgbGV0IHRvRG9TdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcHNcIikudmFsdWU7XG4gIGxldCB0b0RvU3RlcHNBcnJheSA9IHRvRG9TdGVwcy5zcGxpdChcIlxcblwiKTtcbiAgcmVtb3ZlQmxhbmtzKHRvRG9TdGVwc0FycmF5KTtcbiAgcmV0dXJuIHRvRG9TdGVwc0FycmF5O1xufVxuLy9yZW1vdmVzIGFueSBhY2NpZGVudGFsIGJsYW5rIHN0ZXBzIGZyb20gYXJyYXkgL1teXFxzXFxcXF0vXG5mdW5jdGlvbiByZW1vdmVCbGFua3MoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCByZWdFeCA9IC9bXlxcc1xcXFxdLztcbiAgICBpZiAoYXJyYXlbaV0ubWF0Y2gocmVnRXgpKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKSwgaS0tO1xuICAgIH1cbiAgfVxufVxuXG4vL2NsaWNraW5nIG9uIHRoZSBjaGVjayBtYXJrcyBUb0RvIGFzIGNvbXBsZXRlXG5mdW5jdGlvbiBjaGVja01hcmtMaXN0ZW5lcihUaGlzVG9Eb09iamVjdCkge1xuICBUaGlzVG9Eb09iamVjdC5jbGlja2VkQ2hlY2ttYXJrKCk7XG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xufVxuXG4vL2NsaWNraW5nIG9uIHRoZSBlZGl0IGJ1dHRvbiBhbGxvd3MgZWRpdHRpbmcgb2YgY3VycmVudCB0b2RvXG5mdW5jdGlvbiBlZGl0TGlzdGVuZXIoVGhpc1RvRG9PYmplY3QpIHtcbiAgVGhpc1RvRG9PYmplY3QuY2xpY2tlZEVkaXQoKTtcbiAgZWRpdFRvRG9Nb2R1bGUoVGhpc1RvRG9PYmplY3QpO1xuICBjYW5jZWxCdG4oKTtcbiAgRWRpdE9LTGlzdGVuZXIoKTtcbn1cblxuLy9saXN0ZW5lciBmb3IgY2xpY2tpbmcgb24gT0sgd2hlbiBOZXcgVG9EbyBNb2R1bGUgaXMgdXBcbmZ1bmN0aW9uIEVkaXRPS0xpc3RlbmVyKCkge1xuICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2tcIik7XG4gIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0NyZWF0ZWQgPSBjcmVhdGVUb0RvT2JqZWN0RnJvbU1vZHVsZUlucHV0KCk7XG4gICAgbGV0IFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUbyA9IHRvRG9DcmVhdGVkLnBhcmVudFByb2plY3Q7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvID0gY2hlY2tQcm9qZWN0c0FycmF5Rm9yVG9Eb0NyZWF0aW9uKFxuICAgICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvXG4gICAgKTtcbiAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8uZWRpdFRvRG8odG9Eb0NyZWF0ZWQpO1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUby5yZW5kZXJEb21zKCk7XG4gICAgY2xvc2VNb2R1bGUoKTtcbiAgfSk7XG59XG5cbi8vY2xpY2tpbmcgb24gZGVsZXRlIGJ1dHRvbiBkZWxldGVzIGN1cnJlbnQgdG9Eb1xuZnVuY3Rpb24gZGVsZXRlTGlzdGVuZXIoVGhpc1RvRG9PYmplY3QpIHtcbiAgVGhpc1RvRG9PYmplY3QuY2xpY2tlZERlbGV0ZSgpO1xuICBjaGVja0ZvckFjdGl2ZVByb2plY3QoKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQm90aCBUby1EbyBhbmQgUHJvamVjdCBMaXN0ZW5lcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vQ2FuY2VsIGZvciBhbnkgbW9kdWxlXG5mdW5jdGlvbiBjYW5jZWxCdG4oKSB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kdWxlKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjbG9zZSBtb2R1bGVcbmZ1bmN0aW9uIGNsb3NlTW9kdWxlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlXCIpO1xuICBjb25zdCBtb2R1bGVCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGUtYmFja2dyb3VuZFwiKTtcbiAgYm9keS5yZW1vdmVDaGlsZChtb2R1bGUpO1xuICBib2R5LnJlbW92ZUNoaWxkKG1vZHVsZUJhY2tncm91bmQpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFBhZ2UgTG9hZCBMaXN0ZW5lcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy9hZGRpbmcgbGlzdGVuZXJzIHRvIHBhZ2UgbG9hZFxuZnVuY3Rpb24gYWxsTGlzdGVuZXJzKCkge1xuICBuZXdQcm9qZWN0QnV0dG9uKCk7XG4gIG5ld1RvRG9CdXR0b24oKTtcbn1cblxuZXhwb3J0IHsgYWxsTGlzdGVuZXJzLCBjaGVja01hcmtMaXN0ZW5lciwgZGVsZXRlTGlzdGVuZXIsIGVkaXRMaXN0ZW5lciB9O1xuLyogXG5BbGxsaXN0ZW5lcnMgZ29lZCB0byByZW5kZXIgcGFnZVxuKi9cbiIsImltcG9ydCBlZGl0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjaGVja0ltYWdlIGZyb20gXCIuL2ltYWdlcy9jaGVjay5zdmdcIjtcblxuY29uc3QgYWxsSW1hZ2VzID0ge1xuICBjaGVjazogY2hlY2tJbWFnZSxcbiAgZGVsZXRlOiBkZWxldGVJbWFnZSxcbiAgZWRpdDogZWRpdEltYWdlLFxufTtcblxuZXhwb3J0IHsgYWxsSW1hZ2VzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdFbGVtZW50IH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVGhpcyBwYXJ0IGZvciBtYWtpbmcgbW9kdWxlc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9jcmVhdGVzIHBvcHVwIG1vZHVsZVxuZnVuY3Rpb24gbW9kdWxlTWFrZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kdWxlLWJhY2tncm91bmRcIiwgXCJcIikpO1xuICBjb25zdCBtb2R1bGUgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kdWxlXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZHVsZSk7XG4gIHJldHVybiBtb2R1bGU7XG59XG5cbi8vbWFrZXMgTmV3IFRvRG8gcG9wdXAgbW9kdWxlXG5mdW5jdGlvbiBuZXdUb0RvTW9kdWxlKCkge1xuICBjb25zdCBtb2R1bGUgPSBtb2R1bGVNYWtlcigpO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1uYW1lXCIsXG4gICAgICAnPGRpdiBjbGFzcz1cInRvRG9OYW1lXCI+PGxhYmVsIGZvcj1cIm5hbWVcIj5Uby1EbyBOYW1lOjwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk1vdyBMYXduXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b0RvUHJvamVjdFwiPjxsYWJlbCBmb3I9XCJwcm9qZWN0VG9Eb01vZHVsZVwiPlByb2plY3Q6PC9sYWJlbD48c2VsZWN0IG5hbWU9XCJwcm9qZWN0VG9Eb01vZHVsZVwiIGlkPVwicHJvamVjdFRvRG9Nb2R1bGVcIj48b3B0aW9uIHZhbHVlPVwiR2VuZXJhbFwiPkdlbmVyYWw8L29wdGlvbj48L3NlbGVjdD48L2Rpdj4nXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1zdGVwc1wiLFxuICAgICAgJzxsYWJlbCBmb3I9XCJzdGVwc1wiPlRvLURvIFN0ZXBzOiA8c3BhbiBjbGFzcz1cInNtYWxsXCI+KHNlcGFyYXRlIHN0ZXBzIGJ5IGxpbmUgYnJlYWspPC9zcGFuPjwvbGFiZWw+PHRleHRhcmVhIG5hbWU9XCJzdGVwc1wiIGlkPVwic3RlcHNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cInN0ZXAgb25lICYjMTBzdGVwIHR3byAmIzEwc3RlcCB0aHJlZSAmIzEwZXRjLi5cIj48L3RleHRhcmVhPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLXByaW9yaXR5XCIsXG4gICAgICAnICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTogPHNwYW4gY2xhc3M9XCJzbWFsbFwiPigwLTkpPC9zcGFuPjwvbGFiZWw+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgbWluPVwiMFwiIG1heD1cIjlcIiAvPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLWJ1dHRvbnNcIixcbiAgICAgICc8YnV0dG9uIGlkPVwib2tcIj5PSzwvYnV0dG9uPjxkaXY+PC9kaXY+PGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNBTkNFTDwvYnV0dG9uPidcbiAgICApXG4gICk7XG59XG5cbi8vZWRpdCBhIHRvRG9cbmZ1bmN0aW9uIGVkaXRUb0RvTW9kdWxlKHRvRG9Ub0VkaXQpIHtcbiAgY29uc3QgbW9kdWxlID0gbW9kdWxlTWFrZXIoKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtbmFtZVwiLFxuICAgICAgYDxkaXYgY2xhc3M9XCJ0b0RvTmFtZVwiPjxsYWJlbCBmb3I9XCJuYW1lXCI+VG8tRG8gTmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgdmFsdWU9JyR7dG9Eb1RvRWRpdC5uYW1lfScvPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b0RvUHJvamVjdFwiPjxsYWJlbCBmb3I9XCJwcm9qZWN0VG9Eb01vZHVsZVwiPlByb2plY3Q6PC9sYWJlbD48c2VsZWN0IG5hbWU9XCJwcm9qZWN0VG9Eb01vZHVsZVwiIGlkPVwicHJvamVjdFRvRG9Nb2R1bGVcIj48b3B0aW9uIHZhbHVlPVwiR2VuZXJhbFwiPkdlbmVyYWw8L29wdGlvbj48L3NlbGVjdD48L2Rpdj5gXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1zdGVwc1wiLFxuICAgICAgYDxsYWJlbCBmb3I9XCJzdGVwc1wiPlRvLURvIFN0ZXBzOiA8c3BhbiBjbGFzcz1cInNtYWxsXCI+KHNlcGFyYXRlIHN0ZXBzIGJ5IGxpbmUgYnJlYWspPC9zcGFuPjwvbGFiZWw+PHRleHRhcmVhIG5hbWU9XCJzdGVwc1wiIGlkPVwic3RlcHNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj4ke3RvRG9Ub0VkaXQuc3RlcHMuam9pbihcbiAgICAgICAgXCJcXG5cIlxuICAgICAgKX08L3RleHRhcmVhPmBcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLXByaW9yaXR5XCIsXG4gICAgICBgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6IDxzcGFuIGNsYXNzPVwic21hbGxcIj4oMC05KTwvc3Bhbj48L2xhYmVsPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIG1pbj1cIjBcIiBtYXg9XCI5XCIgdmFsdWU9JyR7dG9Eb1RvRWRpdC5wcmlvcml0eX0nLz5gXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1idXR0b25zXCIsXG4gICAgICAnPGJ1dHRvbiBpZD1cIm9rXCI+T0s8L2J1dHRvbj48ZGl2PjwvZGl2PjxidXR0b24gaWQ9XCJjYW5jZWxcIj5DQU5DRUw8L2J1dHRvbj4nXG4gICAgKVxuICApO1xufVxuXG4vL21ha2VzIE5ldyBQcm9qZWN0IHBvcHVwIG1vZHVsZVxuZnVuY3Rpb24gbmV3UHJvamVjdE1vZHVsZSgpIHtcbiAgY29uc3QgbW9kdWxlID0gbW9kdWxlTWFrZXIoKTtcblxuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1uYW1lXCIsXG4gICAgICAnPGxhYmVsIGZvcj1cIm5hbWVcIj5Qcm9qZWN0IE5hbWU6PC9sYWJlbD4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJHZW5lcmFsXCI+J1xuICAgIClcbiAgKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtYnV0dG9uc1wiLFxuICAgICAgJzxidXR0b24gaWQ9XCJva1wiPk9LPC9idXR0b24+PGRpdj48L2Rpdj48YnV0dG9uIGlkPVwiY2FuY2VsXCI+Q0FOQ0VMPC9idXR0b24+J1xuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IHsgbmV3UHJvamVjdE1vZHVsZSwgbmV3VG9Eb01vZHVsZSwgZWRpdFRvRG9Nb2R1bGUgfTtcbi8qKlxuICogbmV3UHJvamVjdHNNb2R1bGUgZXhwb3J0cyB0byBldmVudExpc3RlbmVyc1xuICogbmV3VG9Eb01vZHVsZSBleHBvcnRzIHRvIGV2ZW50TGlzdGVuZXJzXG4gKi9cbiIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5pbXBvcnQgeyBhbGxJbWFnZXMgfSBmcm9tIFwiLi9pbWFnZUxvYWRlckFuZExpc3RlbmVyXCI7XG5pbXBvcnQge1xuICBjaGVja01hcmtMaXN0ZW5lcixcbiAgZGVsZXRlTGlzdGVuZXIsXG4gIGVkaXRMaXN0ZW5lcixcbn0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMsanNcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVE9ETyBDTEFTU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0ZXBzLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICh0aGlzLm5hbWUgPSBuYW1lKSxcbiAgICAgICh0aGlzLnN0ZXBzID0gc3RlcHMpLFxuICAgICAgKHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSksXG4gICAgICAodGhpcy5jb21wbGV0ZWQgPSBmYWxzZSksXG4gICAgICAodGhpcy5kZWxldGUgPSBmYWxzZSksXG4gICAgICAodGhpcy5wYXJlbnRQcm9qZWN0ID0gcHJvamVjdCksXG4gICAgICAodGhpcy5lZGl0ID0gZmFsc2UpO1xuICB9XG5cbiAgLy9mb3IgY2xpY2tpbmcgaW5kaXZpZHVhbCBjaGVja21hcmsgaW4gdG9Eby4gbWFrZXMgY29tcGxldGVkIHN0YXR1cyB0cnVlXG4gIGNsaWNrZWRDaGVja21hcmsgPSAoKSA9PiB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPyAodGhpcy5jb21wbGV0ZWQgPSBmYWxzZSkgOiAodGhpcy5jb21wbGV0ZWQgPSB0cnVlKTtcbiAgfTtcblxuICBjbGlja2VkRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMuZGVsZXRlID0gdHJ1ZTtcbiAgfTtcblxuICBjbGlja2VkRWRpdCA9ICgpID0+IHtcbiAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICB9O1xuXG4gIC8vY3JlYXRlcyBEb20gZWxlbWVudCBcInRvLWRvLWRpc3BsYXlcIiB3aXRoIGFsbCBjaGlsZHJlbiBhY2NvcmRpbmcgdG8gdGhpcyBjbGFzc2VzIGtleXNcbiAgQ3JlYXRlRG9tRWxlbWVudCA9ICgpID0+IHtcbiAgICBsZXQgdG9Eb0NhcmQgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwidG8tZG8tZGlzcGxheVwiLCBcIlwiKTtcbiAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb21wbGV0ZWRcIiwgXCJDT01QTEVURURcIikpO1xuICAgIH1cbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuI3N0ZXBBcnJheVRvTGkoKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChzdGVwcyk7XG4gICAgY29uc3QgdG9Eb05hbWUgPSBjcmVhdGVOZXdFbGVtZW50KFwiaDFcIiwgXCJ0by1kby1uYW1lXCIsIGAke3RoaXMubmFtZX1gKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUljb25zID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInByaW9yaXR5LWljb25zXCIsXG4gICAgICBgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+UHJpb3JpdHkgLSAke3RoaXMucHJpb3JpdHl9PC9kaXY+YFxuICAgICk7XG4gICAgdG9Eb0NhcmQgPSB0aGlzLiNwcmlvcml0eUNvbG9yQ2hhbmdlKHRvRG9DYXJkKTtcbiAgICBjb25zdCBpbWFnZXMgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwiaW1hZ2VzXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgY2hlY2tNYXJrID0gdGhpcy4jYWRkSW1hZ2VzKGFsbEltYWdlcy5jaGVjayk7XG4gICAgY2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGVja01hcmtMaXN0ZW5lcih0aGlzKTtcbiAgICB9KTtcbiAgICBpbWFnZXMuYXBwZW5kQ2hpbGQoY2hlY2tNYXJrKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLiNhZGRJbWFnZXMoYWxsSW1hZ2VzLmVkaXQpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRMaXN0ZW5lcih0aGlzKTtcbiAgICB9KTtcbiAgICBpbWFnZXMuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVCdWl0dG9uID0gdGhpcy4jYWRkSW1hZ2VzKGFsbEltYWdlcy5kZWxldGUpO1xuICAgIGRlbGV0ZUJ1aXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZUxpc3RlbmVyKHRoaXMpO1xuICAgIH0pO1xuICAgIGltYWdlcy5hcHBlbmRDaGlsZChkZWxldGVCdWl0dG9uKTtcblxuICAgIHByaW9yaXR5SWNvbnMuYXBwZW5kQ2hpbGQoaW1hZ2VzKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eUljb25zKTtcblxuICAgIHJldHVybiB0b0RvQ2FyZDtcbiAgICAvL3JlbW92ZSBiZWxvdyB0aGlzIGxpbmUgb25jZSBJIGZpZ3VyZSBhIHByb3BlciB3YXkgdG8gZGlzcGxheSBhbGwgVG9kb3MgaW4gYSBQcm9qZWN0XG4gICAgLy9jb25zdCB0b0RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS10by1kby1kaXNwbGF5XCIpO1xuICAgIC8vdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuICB9O1xuXG4gIC8vUHJpdmF0ZSBGdW5jdGlvbnMgQmVsb3chXG4gICNhZGRJbWFnZXMgPSAoSU1BR0UpID0+IHtcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltYWdlLnNyYyA9IElNQUdFO1xuICAgIHJldHVybiBuZXdJbWFnZTtcbiAgfTtcblxuICAjc3RlcEFycmF5VG9MaSA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxTdGVwcyA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJvbFwiLCBcInRvLWRvLXN0ZXBzXCIsIFwiXCIpO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgY29uc3QgdGhpc1N0ZXAgPSBjcmVhdGVOZXdFbGVtZW50KFwibGlcIiwgXCJsaXN0SXRlbVwiLCBzdGVwKTtcbiAgICAgIGFsbFN0ZXBzLmFwcGVuZENoaWxkKHRoaXNTdGVwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU3RlcHM7XG4gIH07XG4gICNwcmlvcml0eUNvbG9yQ2hhbmdlID0gKHRvRG9DYXJkKSA9PiB7XG4gICAgaWYgKHRoaXMucHJpb3JpdHkgPj0gMCAmJiB0aGlzLnByaW9yaXR5IDw9IDMpIHtcbiAgICAgIHRvRG9DYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmlvcml0eSA+PSA0ICYmIHRoaXMucHJpb3JpdHkgPD0gNikge1xuICAgICAgdG9Eb0NhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmlvcml0eSA+PSA3ICYmIHRoaXMucHJpb3JpdHkgPD0gOSkge1xuICAgICAgdG9Eb0NhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICByZXR1cm4gdG9Eb0NhcmQ7XG4gIH07XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENMQVNTIFBST0pFQ1RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvRG9zID0gW107XG4gICAgdGhpcy50b0RvRG9tcyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVBY3RpdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5hY3RpdmUgPT0gdHJ1ZSA/ICh0aGlzLmFjdGl2ZSA9IGZhbHNlKSA6ICh0aGlzLmFjdGl2ZSA9IHRydWUpO1xuICB9O1xuXG4gIGFkZFRvRG8gPSAobmV3VG9kbykgPT4ge1xuICAgIHRoaXMudG9Eb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICBjbGVhcnRvRG9Eb21zID0gKCkgPT4ge1xuICAgIHRoaXMudG9Eb0RvbXMgPSBbXTtcbiAgfTtcblxuICB0dXJuVG9Eb3NJbnRvRG9tcyA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFydG9Eb0RvbXMoKTtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRoaXMudG9Eb0RvbXMucHVzaCh0b2RvLkNyZWF0ZURvbUVsZW1lbnQoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG8tZG8tZGlzcGxheVwiKTtcbiAgICB3aGlsZSAoZGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlckRvbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICB0aGlzLnR1cm5Ub0Rvc0ludG9Eb21zKCk7XG4gICAgdGhpcy50b0RvRG9tcy5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvLWRvLWRpc3BsYXlcIik7XG4gICAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZChkb20pO1xuICAgIH0pO1xuICB9O1xuXG4gIGRlbGV0ZVRvRG8gPSAoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmRlbGV0ZSkge1xuICAgICAgICB0aGlzLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXRUb0RvID0gKG5ld1RvRG8pID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHRoaXMudG9Eb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uZWRpdCkge1xuICAgICAgICBsZXQgY2hlY2tlZE9yTm90ID0gdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgIG5ld1RvRG8uY29tcGxldGVkID0gY2hlY2tlZE9yTm90O1xuICAgICAgICB0aGlzLnRvRG9zW2luZGV4XSA9IG5ld1RvRG87XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBmdW5jdGlvbnMgZm9yIHByb2plY3RzIGFuZCB0b2Rvc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCkge1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHByb2plY3QuZGVsZXRlVG9EbygpO1xuICAgICAgcHJvamVjdC50dXJuVG9Eb3NJbnRvRG9tcygpO1xuICAgICAgcHJvamVjdC5yZW5kZXJEb21zKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogY3VycmVudGx5IHRoaXMgaXMganVzdCBmb3IgYnVpbGRpbmcgc2l0ZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubGV0IG1vd0xhd24gPSBuZXcgdG9EbyhcbiAgXCJNb3cgTGF3blwiLFxuICBbXCJQcmVwIExhd24gTW93ZXJcIiwgXCJNb3cgTGF3blwiLCBcIkRpc3Bvc2Ugb2YgR3Jhc3NcIiwgXCJDbGVhbiBVcFwiXSxcbiAgNixcbiAgXCJHZW5lcmFsXCJcbik7XG5sZXQgbW93TGF3bjIgPSBuZXcgdG9EbyhcbiAgXCJNb3cgTGF3blwiLFxuICBbXCJQcmVwIExhd24gTW93ZXJcIiwgXCJNb3cgTGF3blwiLCBcIkRpc3Bvc2Ugb2YgR3Jhc3NcIiwgXCJDbGVhbiBVcFwiXSxcbiAgOCxcbiAgXCJHZW5lcmFsXCJcbik7XG5sZXQgbW93TGF3bjMgPSBuZXcgdG9EbyhcbiAgXCJNb3cgTGF3blwiLFxuICBbXCJQcmVwIExhd24gTW93ZXJcIiwgXCJNb3cgTGF3blwiLCBcIkRpc3Bvc2Ugb2YgR3Jhc3NcIiwgXCJDbGVhbiBVcFwiXSxcbiAgMSxcbiAgXCJHZW5lcmFsXCJcbik7XG5cbmxldCBHZW5lcmFsID0gbmV3IFByb2plY3QoXCJHZW5lcmFsXCIpO1xuR2VuZXJhbC5hZGRUb0RvKG1vd0xhd24pO1xuR2VuZXJhbC5hZGRUb0RvKG1vd0xhd24yKTtcbkdlbmVyYWwuYWRkVG9Ebyhtb3dMYXduMyk7XG5cbmxldCBwcm9qZWN0cyA9IFtcImp1bmtcIiwgXCJtb3JlIGp1bmtcIiwgR2VuZXJhbCwgXCJ0ZXN0XCJdO1xuXG5leHBvcnQgeyBHZW5lcmFsLCBwcm9qZWN0cywgdG9EbywgUHJvamVjdCwgY2hlY2tGb3JBY3RpdmVQcm9qZWN0IH07XG4vKlxudG9EbyBnb2VzIHRvIGV2ZW50TGlzdGVuZXJzXG5Qcm9qZWN0IGdvZXMgdG8gZXZlbnRMaXN0ZW5lcnNcbmdlbmVyYWwgdG8gcmVuZGVyUGFnZVxucHJvamVjdHMgdG8uLi4/IGkgZm9yZ2V0XG4qL1xuIiwiaW1wb3J0IHsgYWxsTGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMsanNcIjtcbmltcG9ydCB7IGNoZWNrRm9yQWN0aXZlUHJvamVjdCwgR2VuZXJhbCB9IGZyb20gXCIuL3Byb2plY3RzVG9kb3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3RWxlbWVudCh0eXBlLCBhZGRDbGFzcywgaW5uZXJIVE1MKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpO1xuICBkb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbi8vY3JlYXRlcyBoZWFkZXIgYW5kIGNhcHRpb25cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiKTtcbiAgY29uc3QgY2FwdGlvbiA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcImNhcHRpb25cIixcbiAgICAnPGgxIGlkPVwicGFnZVRpdGxlXCI+VG8tRG8tTWU8L2gxPidcbiAgKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNhcHRpb24pO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG4vL2NyZWF0ZXMgbmF2IGJhciBhbmQgYnV0dG9uc1xuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJuYXZcIixcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYnV0dG9uc1wiPjxidXR0b24gaWQ9XCJuZXdQcm9qZWN0XCI+TmV3IFByb2plY3Q8L2J1dHRvbj48YnV0dG9uIGlkPVwibmV3VG9Eb1wiPk5ldyBUby1EbzwvYnV0dG9uPjwvZGl2PmBcbiAgKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuLy9jcmVhdGVzIERpc3BsYXlcbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkoKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJkaXNwbGF5XCIsXG4gICAgJzxkaXYgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXlcIj48aDEgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXktaGVhZGVyXCI+R2VuZXJhbDwvaDE+PGJ1dHRvbiBpZD1cInJtUHJvamVjdFwiPkRlbGV0ZSBQcm9qZWN0PC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cImRpc3BsYXktdG8tZG8tZGlzcGxheVwiPjwvZGl2PidcbiAgKTtcbiAgcmV0dXJuIGRpc3BsYXk7XG59XG5cbi8vY3JlYXRlcyBmb290ZXIgYW5kIGFkZHMgdGV4dFxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJmb290ZXJcIixcbiAgICBcIiZjb3B5IFRoZSBEYXZlciBnZXRzIHRvIG1vdmUgdG8gQ29zdGFSaWNhIHByb2plY3QgMjAyMlwiXG4gICk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8vcmVuZGVycyB0aGUgcGFnZSwgZXhwb3J0IHRoaXMgZnVuY3Rpb24gdG8gaW5kZXggdG8gcmVuZGVyIHBhZ2VcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIiwgXCJcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEaXNwbGF5KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBhbGxMaXN0ZW5lcnMoKTtcblxuICAvL3VzaW5nIHRoaXMgZm9yIHBhZ2Vsb2FkIGZvciBub3cuXG4gIEdlbmVyYWwudG9nZ2xlQWN0aXZlKCk7XG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQYWdlLCBjcmVhdGVOZXdFbGVtZW50IH07XG4vL3JlbmRlciBwYWdlIHVzZWQgaW4gaW5kZXguaHRtbFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuLy9yZW5kZXJzIGdlbmVyYWwgcGFnZSBsYXlvdXRcbnJlbmRlclBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
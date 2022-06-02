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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"muktaregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 7fr;\n  gap: 2%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: black;\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.project-nav-bar {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n\n.strikeThrough {\n  text-decoration: line-through;\n}\n\n.to-do-shortcut > img {\n  align-self: center;\n  justify-self: end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B;0DAC+D;EAC/D,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B;0DACiE;EACjE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;EAChC,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;AAC/B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,0CAA0C;EAC1C,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,OAAO;EACP,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,4BAA4B;EAC5B,4CAA4C;EAC5C,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,oCAAoC;EACpC,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yCAAyC;EACzC,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["@font-face {\n  font-family: \"muktaregular\";\n  src: url(\"../src/fonts/mukta-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/mukta-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(\"../src/fonts/macondo-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/macondo-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 7fr;\n  gap: 2%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: black;\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.project-nav-bar {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n\n.strikeThrough {\n  text-decoration: line-through;\n}\n\n.to-do-shortcut > img {\n  align-self: center;\n  justify-self: end;\n}\n"],"sourceRoot":""}]);
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
    pushNewActiveProject();
    (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.checkForActiveProject)();
    closeModule();
  });
}

//pushes new project to array and sets it active
function pushNewActiveProject() {
  const ProjectName = document.querySelector("#name").value;
  const projectMade = new _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.Project(ProjectName);
  projectMade.toggleActive();
  _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.push(projectMade);
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
  (0,_popupModules__WEBPACK_IMPORTED_MODULE_0__.editToDoModule)(ThisToDoObject);
  cancelBtn();
  EditOKListener(ThisToDoObject);
}

//listener for clicking on OK when New ToDo Module is up
function EditOKListener(toDoBeingEdited) {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    toDoBeingEdited.clickedEdit();
    const toDoCreated = createToDoObjectFromModuleInput();

    if (toDoBeingEdited.parentProject !== toDoCreated.parentProject) {
      toDoBeingEdited.clickedDelete();
      _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
        project.deleteToDo();
      });
    }

    let ProjectThisTodoBelongsTo = toDoCreated.parentProject;
    ProjectThisTodoBelongsTo = checkProjectsArrayForToDoCreation(
      ProjectThisTodoBelongsTo
    );
    ProjectThisTodoBelongsTo.editToDo(toDoCreated);
    ProjectThisTodoBelongsTo.toggleActive();
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
/* harmony import */ var _images_uncheck_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/uncheck.svg */ "./src/images/uncheck.svg");
/* harmony import */ var _images_expand_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/expand.svg */ "./src/images/expand.svg");
/* harmony import */ var _images_minimize_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/minimize.svg */ "./src/images/minimize.svg");
/* harmony import */ var _images_checkGreen_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/checkGreen.svg */ "./src/images/checkGreen.svg");








const allImages = {
  check: _images_check_svg__WEBPACK_IMPORTED_MODULE_2__,
  delete: _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__,
  edit: _images_edit_svg__WEBPACK_IMPORTED_MODULE_0__,
  uncheck: _images_uncheck_svg__WEBPACK_IMPORTED_MODULE_3__,
  maximize: _images_expand_svg__WEBPACK_IMPORTED_MODULE_4__,
  minimize: _images_minimize_svg__WEBPACK_IMPORTED_MODULE_5__,
  checkGreen: _images_checkGreen_svg__WEBPACK_IMPORTED_MODULE_6__,
};




/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageLoaderAndListener */ "./src/imageLoaderAndListener.js");




//creates a new DOM element for a Project and gives it n image... and adds event listeners... yeah it does a lot
function createNewProjectNav(project) {
  const thisImage = new Image();
  thisImage.onclick = "event.stopPropagation()";
  thisImage.src = minMaxImageLoader(project);

  thisImage.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleExpandedProject(project);
    const changeImage = new Image();
    changeImage.src = minMaxImageLoader(project);
  });

  const newProject = (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
    "ul",
    "project-shortcut",
    `<div id=nameAndImage>${project.name}</div>`
  );
  newProject.firstElementChild.appendChild(thisImage);
  newProject.addEventListener("click", () => {
    project.toggleActive();
    if (!project.expanded) {
      project.toggleExpanded(project);
    }
    (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_0__.checkForActiveProject)();
  });
  return newProject;
}

//creates Dom elements for each toDo in the project and appends them to the project dom
function appendToDoElementsToProject(project, parentNode) {
  project.toDos.forEach((todo) => {
    if (project.expanded) {
      let newTodoNavDom = (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
        "li",
        `to-do-shortcut`,
        `${todo.name.toUpperCase()}`
      );
      newTodoNavDom = backgroundColorPriority(todo, newTodoNavDom);
      if (todo.completed) {
        newTodoNavDom.classList.add("strikeThrough");
        const check = new Image();
        check.src = _imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_2__.allImages.checkGreen;
        newTodoNavDom.appendChild(check);
      }
      parentNode.appendChild(newTodoNavDom);
    } else parentNode.append(".");
  });
}

function backgroundColorPriority(todo, todoDom) {
  if (todo.priority >= 0 && todo.priority <= 3) {
    todoDom.style.backgroundColor = "rgba(0,255,0,0.3";
  }
  if (todo.priority >= 4 && todo.priority <= 6) {
    todoDom.style.backgroundColor = "rgba(255,165,0,0.3";
  }
  if (todo.priority >= 7 && todo.priority <= 9) {
    todoDom.style.backgroundColor = "rgba(255,0,0,0.3";
  }
  return todoDom;
}

//if the project is active makes a minimize and vice versa
function minMaxImageLoader(project) {
  return project.expanded ? _imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_2__.allImages.minimize : _imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_2__.allImages.maximize;
}

//clears the Nav so the newly appended items dont overlap
function clearNav() {
  const nav = document.querySelector(".project-nav-bar");
  while (nav.firstElementChild) {
    nav.removeChild(nav.firstElementChild);
  }
}

//renders the nav bar with all current project with all toDos
function renderNav() {
  clearNav();
  const NavBar = document.querySelector(".project-nav-bar");
  _projectsTodos__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    const DomElement = createNewProjectNav(project);
    appendToDoElementsToProject(project, DomElement);
    NavBar.appendChild(DomElement);
  });
}

//event listener for expanding and minimizing the navbar projects
function toggleExpandedProject(project) {
  project.toggleExpanded();
  (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_0__.checkForActiveProject)();
}




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
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");



/*******************************************************************
 * This part for making modules
 ******************************************************************/

//creates popup module
function moduleMaker() {
  const body = document.querySelector("body");
  body.appendChild((0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)("div", "module-background", ""));
  const module = (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)("div", "module", "");
  body.appendChild(module);
  return module;
}

//makes New ToDo popup module
function newToDoModule() {
  const module = moduleMaker();
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-name",
      '<div class="toDoName"><label for="name">To-Do Name:</label><input type="text" name="name" id="name" placeholder="Mow Lawn"/></div><div class="toDoProject"><label for="projectToDoModule">Project:</label></div>'
    )
  );
  document
    .querySelector(".toDoProject")
    .appendChild(createProjectSelectOptions());
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-steps",
      '<label for="steps">To-Do Steps: <span class="small">(separate steps by line break)</span></label><textarea name="steps" id="steps" cols="30" rows="10" placeholder="step one &#10step two &#10step three &#10etc.."></textarea>'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-priority",
      '  <label for="priority">Priority: <span class="small">(0-9)</span></label><input type="number" name="priority" id="priority" min="0" max="9" />'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
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
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-name",
      `<div class="toDoName"><label for="name">To-Do Name:</label><input type="text" name="name" id="name" value='${toDoToEdit.name}'/></div><div class="toDoProject"><label for="projectToDoModule">Project:</label></div>`
    )
  );
  document
    .querySelector(".toDoProject")
    .appendChild(createProjectSelectOptions());
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-steps",
      `<label for="steps">To-Do Steps: <span class="small">(separate steps by line break)</span></label><textarea name="steps" id="steps" cols="30" rows="10">${toDoToEdit.steps.join(
        "\n"
      )}</textarea>`
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-priority",
      `<label for="priority">Priority: <span class="small">(0-9)</span></label><input type="number" name="priority" id="priority" min="0" max="9" value='${toDoToEdit.priority}'/>`
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
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
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" placeholder="General">'
    )
  );
  module.appendChild(
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}

//creates all select options for all available projects
function createProjectSelectOptions() {
  let select = document.createElement("select");
  select.name = "projectToDoModule";
  select.id = "projectToDoModule";
  _projectsTodos__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    let newOption = (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.createNewElement)("option");
    newOption.value = project.name;
    newOption.text = project.name;
    if (project.active) {
      newOption.selected = "selected";
    }

    select.appendChild(newOption);
  });
  return select;
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
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");





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

    //changes checkmark to uncheck
    if (this.completed) {
      const unCheckMark = this.#addImages(_imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__.allImages.uncheck);
      unCheckMark.addEventListener("click", () => {
        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.checkMarkListener)(this);
      });
      images.appendChild(unCheckMark);
    } else {
      const checkMark = this.#addImages(_imageLoaderAndListener__WEBPACK_IMPORTED_MODULE_1__.allImages.check);
      checkMark.addEventListener("click", () => {
        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.checkMarkListener)(this);
      });
      images.appendChild(checkMark);
    }
    // end of this big function

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
    this.expanded = true;
  }

  toggleExpanded = () => {
    this.expanded == true ? (this.expanded = false) : (this.expanded = true);
  };
  toggleInactive = () => {
    this.active = false;
  };
  toggleActive = () => {
    projects.forEach((project) => {
      project.toggleInactive();
    });
    this.active = true;
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
    (0,_navBar__WEBPACK_IMPORTED_MODULE_3__.renderNav)();
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
    let moved = true;
    this.toDos.forEach((todo) => {
      if (todo.edit) {
        let checkedOrNot = todo.completed;
        newToDo.completed = checkedOrNot;
        this.toDos[index] = newToDo;
        moved = false;
      }
      index++;
    });
    if (moved) {
      this.toDos.push(newToDo);
    }
  };
}

/***************************************************************
 * functions for projects and todos
 **************************************************************/
function checkForActiveProject() {
  const projectHeader = document.querySelector(".project-display-header");
  projects.forEach((project) => {
    if (project.active == true) {
      project.deleteToDo();
      project.turnToDosIntoDoms();
      project.renderDoms();
      projectHeader.textContent = project.name;
    }
    (0,_navBar__WEBPACK_IMPORTED_MODULE_3__.renderNav)();
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
let anotherToDo = new toDo(
  "stuff",
  ["thing", "another thing", "ok this is it"],
  5,
  "Random"
);

let Random = new Project("Random");
Random.addToDo(anotherToDo);
Random.addToDo(mowLawn);

let General = new Project("General");
General.addToDo(mowLawn);
General.addToDo(mowLawn2);
General.addToDo(mowLawn3);

let projects = [General];
projects.push(Random);


/*
toDo goes to eventListeners
Project goes to eventListeners
general to renderPage
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
    `<div class="project-buttons"><button id="newProject">New Project</button><button id="newToDo">New To-Do</button></div><div class="project-nav-bar"</div>`
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
  container.appendChild(createNav());
  container.appendChild(createDisplay());
  container.appendChild(createFooter());
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

/***/ "./src/images/checkGreen.svg":
/*!***********************************!*\
  !*** ./src/images/checkGreen.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fbf3b9acbf1d0d3b23c.svg";

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

/***/ }),

/***/ "./src/images/expand.svg":
/*!*******************************!*\
  !*** ./src/images/expand.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dd0cb697b666a745cd5.svg";

/***/ }),

/***/ "./src/images/minimize.svg":
/*!*********************************!*\
  !*** ./src/images/minimize.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2c3cc6c7d3dd5d2cd51.svg";

/***/ }),

/***/ "./src/images/uncheck.svg":
/*!********************************!*\
  !*** ./src/images/uncheck.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0923085b41a8428265a.svg";

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
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners,js */ "./src/eventListeners,js");
/* harmony import */ var _projectsTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsTodos */ "./src/projectsTodos.js");





//renders general page layout
(0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.allListeners)();

//using this for pageload for now.
_projectsTodos__WEBPACK_IMPORTED_MODULE_3__.General.toggleActive();
(0,_projectsTodos__WEBPACK_IMPORTED_MODULE_3__.checkForActiveProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNTO0FBQ2M7O0FBRWpFO0FBQ0EsdURBQVU7QUFDVixnRUFBWTs7QUFFWjtBQUNBLGdFQUFvQjtBQUNwQixxRUFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lcnMsanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWFnZUxvYWRlckFuZExpc3RlbmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmF2QmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdXBNb2R1bGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHNUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvbXVrdGEtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL211a3RhLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA1ZnIgMC4zZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjVkMztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG59XFxuLmNhcHRpb24ge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgN2ZyO1xcbiAgZ2FwOiAyJTtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYgPiBpbWcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjhmciA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2MyNDEwYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0OmhvdmVyIHtcXG4gIGNvbG9yOiAjOTczMTA4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMC41cHggYmxhY2sgc29saWQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2QzZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50by1kby1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDRweCAxcHggcmdiKDAgMCAwIC8gNTAlKTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC43NWZyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtbmF2LWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4jcm1Qcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMzUsIDEzNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2RkYWM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZGE5NjtcXG59XFxuXFxuLmRpc3BsYXktdG8tZG8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwMHB4KTtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50by1kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnRvLWRvLXN0ZXBzIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM3NTc0NzQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG4ucHJpb3JpdHkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWljb25zIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgMjQxLCA4MiwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAzNy41JTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMWRlZyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG59XFxuXFxuLm1vZHVsZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGVmdDogMjV2dztcXG4gIHRvcDogMjV2aDtcXG59XFxuXFxuLm1vZHVsZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2R1bGUtbmFtZSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnRvRG9OYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0RvUHJvamVjdCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zbWFsbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tb2R1bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5tb2R1bGUtc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kdWxlIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vZHVsZS1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC43NWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RyaWtlVGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0ID4gaW1nIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCOzBEQUMrRDtFQUMvRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCOzBEQUNpRTtFQUNqRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztB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QVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvZm9udHMvbXVrdGEtcmVndWxhci13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vc3JjL2ZvbnRzL21hY29uZG8tcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA1ZnIgMC4zZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjVkMztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG59XFxuLmNhcHRpb24ge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5uYXYge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgN2ZyO1xcbiAgZ2FwOiAyJTtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYgPiBpbWcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjhmciA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI2MyNDEwYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0OmhvdmVyIHtcXG4gIGNvbG9yOiAjOTczMTA4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMC41cHggYmxhY2sgc29saWQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2QzZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50by1kby1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDRweCAxcHggcmdiKDAgMCAwIC8gNTAlKTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC43NWZyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtbmF2LWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4jcm1Qcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMzUsIDEzNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2RkYWM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZGE5NjtcXG59XFxuXFxuLmRpc3BsYXktdG8tZG8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwMHB4KTtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50by1kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnRvLWRvLXN0ZXBzIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM3NTc0NzQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG4ucHJpb3JpdHkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWljb25zIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgMjQxLCA4MiwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAzNy41JTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMWRlZyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG59XFxuXFxuLm1vZHVsZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGVmdDogMjV2dztcXG4gIHRvcDogMjV2aDtcXG59XFxuXFxuLm1vZHVsZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2R1bGUtbmFtZSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnRvRG9OYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0RvUHJvamVjdCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zbWFsbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tb2R1bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5tb2R1bGUtc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kdWxlIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vZHVsZS1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC43NWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RyaWtlVGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0ID4gaW1nIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgbmV3UHJvamVjdE1vZHVsZSxcbiAgbmV3VG9Eb01vZHVsZSxcbiAgZWRpdFRvRG9Nb2R1bGUsXG59IGZyb20gXCIuL3BvcHVwTW9kdWxlc1wiO1xuaW1wb3J0IHtcbiAgdG9EbyxcbiAgUHJvamVjdCxcbiAgcHJvamVjdHMsXG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogKiBQcm9qZWN0IExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL2FkZHMgZXZlbnQgbGlzdGVuZXIgdG8gTmV3IFByb2plY3QgYnV0dG9uIGluIE5hdiBCYXJcbmZ1bmN0aW9uIG5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZHVsZSgpO1xuICAgIGNhbmNlbEJ0bigpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RPS0xpc3RlbmVyKCk7XG4gIH0pO1xufVxuXG4vL2xpc3RlbmVyIGZvciBjbGlja2luZyBvbiBPSyB3aGVuIE5ldyBQcm9qZWN0IE1vZHVsZSBpcyB1cFxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdE9LTGlzdGVuZXIoKSB7XG4gIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJva1wiKTtcbiAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwdXNoTmV3QWN0aXZlUHJvamVjdCgpO1xuICAgIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xuICAgIGNsb3NlTW9kdWxlKCk7XG4gIH0pO1xufVxuXG4vL3B1c2hlcyBuZXcgcHJvamVjdCB0byBhcnJheSBhbmQgc2V0cyBpdCBhY3RpdmVcbmZ1bmN0aW9uIHB1c2hOZXdBY3RpdmVQcm9qZWN0KCkge1xuICBjb25zdCBQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdE1hZGUgPSBuZXcgUHJvamVjdChQcm9qZWN0TmFtZSk7XG4gIHByb2plY3RNYWRlLnRvZ2dsZUFjdGl2ZSgpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3RNYWRlKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVG8gRG8gTGlzdGVuZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy9jbGlja2luZyBvbiBOZXcgVG8tRG8gQnV0dG9uXG5mdW5jdGlvbiBuZXdUb0RvQnV0dG9uKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvRG9cIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld1RvRG9Nb2R1bGUoKTtcbiAgICBUb0RvTW9kdWxlT0tMaXN0ZW5lcigpO1xuICAgIGNhbmNlbEJ0bigpO1xuICB9KTtcbn1cblxuLy9saXN0ZW5lciBmb3IgY2xpY2tpbmcgb24gT0sgd2hlbiBOZXcgVG9EbyBNb2R1bGUgaXMgdXBcbmZ1bmN0aW9uIFRvRG9Nb2R1bGVPS0xpc3RlbmVyKCkge1xuICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2tcIik7XG4gIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0NyZWF0ZWQgPSBjcmVhdGVUb0RvT2JqZWN0RnJvbU1vZHVsZUlucHV0KCk7XG4gICAgbGV0IFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUbyA9IHRvRG9DcmVhdGVkLnBhcmVudFByb2plY3Q7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvID0gY2hlY2tQcm9qZWN0c0FycmF5Rm9yVG9Eb0NyZWF0aW9uKFxuICAgICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvXG4gICAgKTtcbiAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8uYWRkVG9Ebyh0b0RvQ3JlYXRlZCk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLnJlbmRlckRvbXMoKTtcbiAgICBjbG9zZU1vZHVsZSgpO1xuICB9KTtcbn1cbi8vdGFrZXMgaW5wdXQgdmFsdWVzIGZyb20gdGhlIG1vZHVsZSBmb3JtIGZvciB0b2RvIGNyZWF0aW9uIGFuZCByZXR1cm5zIGFuIG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlVG9Eb09iamVjdEZyb21Nb2R1bGVJbnB1dCgpIHtcbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gIGNvbnN0IHRvRG9TdGVwcyA9IHRleHRBcmVhVG9BcnJheSgpO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VG9Eb01vZHVsZVwiKS52YWx1ZTtcbiAgY29uc3QgdG9Eb0NyZWF0ZWQgPSBuZXcgdG9EbyhcbiAgICB0b0RvTmFtZSxcbiAgICB0b0RvU3RlcHMsXG4gICAgdG9kb1ByaW9yaXR5LFxuICAgIHBhcmVudFByb2plY3RcbiAgKTtcbiAgcmV0dXJuIHRvRG9DcmVhdGVkO1xufVxuXG4vL2Fzc2lnbnMgdG9kbyB0byB0aGUgcHJvcGVyIHByb2plY3RcbmZ1bmN0aW9uIGNoZWNrUHJvamVjdHNBcnJheUZvclRvRG9DcmVhdGlvbihwYXJlbnRQcm9qZWN0KSB7XG4gIGxldCBtYXRjaDtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gcGFyZW50UHJvamVjdCkge1xuICAgICAgbWF0Y2ggPSBwcm9qZWN0c1twcm9qZWN0cy5pbmRleE9mKHByb2plY3QpXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF0Y2g7XG59XG5cbi8vZnVuY3Rpb24gdG8gdGFrZSB0ZXh0YXJlYSBpbmZvIGFuZCBwdXQgaXQgaW50byBhbiBBcnJheVxuZnVuY3Rpb24gdGV4dEFyZWFUb0FycmF5KCkge1xuICBsZXQgdG9Eb1N0ZXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwc1wiKS52YWx1ZTtcbiAgbGV0IHRvRG9TdGVwc0FycmF5ID0gdG9Eb1N0ZXBzLnNwbGl0KFwiXFxuXCIpO1xuICByZW1vdmVCbGFua3ModG9Eb1N0ZXBzQXJyYXkpO1xuICByZXR1cm4gdG9Eb1N0ZXBzQXJyYXk7XG59XG4vL3JlbW92ZXMgYW55IGFjY2lkZW50YWwgYmxhbmsgc3RlcHMgZnJvbSBhcnJheSAvW15cXHNcXFxcXS9cbmZ1bmN0aW9uIHJlbW92ZUJsYW5rcyhhcnJheSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHJlZ0V4ID0gL1teXFxzXFxcXF0vO1xuICAgIGlmIChhcnJheVtpXS5tYXRjaChyZWdFeCkpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpLCBpLS07XG4gICAgfVxuICB9XG59XG5cbi8vY2xpY2tpbmcgb24gdGhlIGNoZWNrIG1hcmtzIFRvRG8gYXMgY29tcGxldGVcbmZ1bmN0aW9uIGNoZWNrTWFya0xpc3RlbmVyKFRoaXNUb0RvT2JqZWN0KSB7XG4gIFRoaXNUb0RvT2JqZWN0LmNsaWNrZWRDaGVja21hcmsoKTtcbiAgY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCk7XG59XG5cbi8vY2xpY2tpbmcgb24gdGhlIGVkaXQgYnV0dG9uIGFsbG93cyBlZGl0dGluZyBvZiBjdXJyZW50IHRvZG9cbmZ1bmN0aW9uIGVkaXRMaXN0ZW5lcihUaGlzVG9Eb09iamVjdCkge1xuICBlZGl0VG9Eb01vZHVsZShUaGlzVG9Eb09iamVjdCk7XG4gIGNhbmNlbEJ0bigpO1xuICBFZGl0T0tMaXN0ZW5lcihUaGlzVG9Eb09iamVjdCk7XG59XG5cbi8vbGlzdGVuZXIgZm9yIGNsaWNraW5nIG9uIE9LIHdoZW4gTmV3IFRvRG8gTW9kdWxlIGlzIHVwXG5mdW5jdGlvbiBFZGl0T0tMaXN0ZW5lcih0b0RvQmVpbmdFZGl0ZWQpIHtcbiAgY29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9rXCIpO1xuICBva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvRG9CZWluZ0VkaXRlZC5jbGlja2VkRWRpdCgpO1xuICAgIGNvbnN0IHRvRG9DcmVhdGVkID0gY3JlYXRlVG9Eb09iamVjdEZyb21Nb2R1bGVJbnB1dCgpO1xuXG4gICAgaWYgKHRvRG9CZWluZ0VkaXRlZC5wYXJlbnRQcm9qZWN0ICE9PSB0b0RvQ3JlYXRlZC5wYXJlbnRQcm9qZWN0KSB7XG4gICAgICB0b0RvQmVpbmdFZGl0ZWQuY2xpY2tlZERlbGV0ZSgpO1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmRlbGV0ZVRvRG8oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8gPSB0b0RvQ3JlYXRlZC5wYXJlbnRQcm9qZWN0O1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUbyA9IGNoZWNrUHJvamVjdHNBcnJheUZvclRvRG9DcmVhdGlvbihcbiAgICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUb1xuICAgICk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLmVkaXRUb0RvKHRvRG9DcmVhdGVkKTtcbiAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8udG9nZ2xlQWN0aXZlKCk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLnJlbmRlckRvbXMoKTtcbiAgICBjbG9zZU1vZHVsZSgpO1xuICB9KTtcbn1cblxuLy9jbGlja2luZyBvbiBkZWxldGUgYnV0dG9uIGRlbGV0ZXMgY3VycmVudCB0b0RvXG5mdW5jdGlvbiBkZWxldGVMaXN0ZW5lcihUaGlzVG9Eb09iamVjdCkge1xuICBUaGlzVG9Eb09iamVjdC5jbGlja2VkRGVsZXRlKCk7XG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCb3RoIFRvLURvIGFuZCBQcm9qZWN0IExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy9DYW5jZWwgZm9yIGFueSBtb2R1bGVcbmZ1bmN0aW9uIGNhbmNlbEJ0bigpIHtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIik7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2R1bGUpO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNsb3NlIG1vZHVsZVxuZnVuY3Rpb24gY2xvc2VNb2R1bGUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGVcIik7XG4gIGNvbnN0IG1vZHVsZUJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHVsZS1iYWNrZ3JvdW5kXCIpO1xuICBib2R5LnJlbW92ZUNoaWxkKG1vZHVsZSk7XG4gIGJvZHkucmVtb3ZlQ2hpbGQobW9kdWxlQmFja2dyb3VuZCk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUGFnZSBMb2FkIExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vL2FkZGluZyBsaXN0ZW5lcnMgdG8gcGFnZSBsb2FkXG5mdW5jdGlvbiBhbGxMaXN0ZW5lcnMoKSB7XG4gIG5ld1Byb2plY3RCdXR0b24oKTtcbiAgbmV3VG9Eb0J1dHRvbigpO1xufVxuXG5leHBvcnQgeyBhbGxMaXN0ZW5lcnMsIGNoZWNrTWFya0xpc3RlbmVyLCBkZWxldGVMaXN0ZW5lciwgZWRpdExpc3RlbmVyIH07XG4vKiBcbkFsbGxpc3RlbmVycyBnb2VkIHRvIHJlbmRlciBwYWdlXG4qL1xuIiwiaW1wb3J0IGVkaXRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGNoZWNrSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2NoZWNrLnN2Z1wiO1xuaW1wb3J0IHVuY2hlY2tJbWFnZSBmcm9tIFwiLi9pbWFnZXMvdW5jaGVjay5zdmdcIjtcbmltcG9ydCBtYXhpbWl6ZUltYWdlIGZyb20gXCIuL2ltYWdlcy9leHBhbmQuc3ZnXCI7XG5pbXBvcnQgbWluaW1pemVJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbWluaW1pemUuc3ZnXCI7XG5pbXBvcnQgY2hlY2tHcmVlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9jaGVja0dyZWVuLnN2Z1wiO1xuXG5jb25zdCBhbGxJbWFnZXMgPSB7XG4gIGNoZWNrOiBjaGVja0ltYWdlLFxuICBkZWxldGU6IGRlbGV0ZUltYWdlLFxuICBlZGl0OiBlZGl0SW1hZ2UsXG4gIHVuY2hlY2s6IHVuY2hlY2tJbWFnZSxcbiAgbWF4aW1pemU6IG1heGltaXplSW1hZ2UsXG4gIG1pbmltaXplOiBtaW5pbWl6ZUltYWdlLFxuICBjaGVja0dyZWVuOiBjaGVja0dyZWVuSW1hZ2UsXG59O1xuXG5leHBvcnQgeyBhbGxJbWFnZXMgfTtcbiIsImltcG9ydCB7IGNoZWNrRm9yQWN0aXZlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1RvZG9zXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdFbGVtZW50IH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuaW1wb3J0IHsgYWxsSW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2VMb2FkZXJBbmRMaXN0ZW5lclwiO1xuXG4vL2NyZWF0ZXMgYSBuZXcgRE9NIGVsZW1lbnQgZm9yIGEgUHJvamVjdCBhbmQgZ2l2ZXMgaXQgbiBpbWFnZS4uLiBhbmQgYWRkcyBldmVudCBsaXN0ZW5lcnMuLi4geWVhaCBpdCBkb2VzIGEgbG90XG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0TmF2KHByb2plY3QpIHtcbiAgY29uc3QgdGhpc0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIHRoaXNJbWFnZS5vbmNsaWNrID0gXCJldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiO1xuICB0aGlzSW1hZ2Uuc3JjID0gbWluTWF4SW1hZ2VMb2FkZXIocHJvamVjdCk7XG5cbiAgdGhpc0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdG9nZ2xlRXhwYW5kZWRQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IGNoYW5nZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY2hhbmdlSW1hZ2Uuc3JjID0gbWluTWF4SW1hZ2VMb2FkZXIocHJvamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwidWxcIixcbiAgICBcInByb2plY3Qtc2hvcnRjdXRcIixcbiAgICBgPGRpdiBpZD1uYW1lQW5kSW1hZ2U+JHtwcm9qZWN0Lm5hbWV9PC9kaXY+YFxuICApO1xuICBuZXdQcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHRoaXNJbWFnZSk7XG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0LnRvZ2dsZUFjdGl2ZSgpO1xuICAgIGlmICghcHJvamVjdC5leHBhbmRlZCkge1xuICAgICAgcHJvamVjdC50b2dnbGVFeHBhbmRlZChwcm9qZWN0KTtcbiAgICB9XG4gICAgY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCk7XG4gIH0pO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuLy9jcmVhdGVzIERvbSBlbGVtZW50cyBmb3IgZWFjaCB0b0RvIGluIHRoZSBwcm9qZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIHByb2plY3QgZG9tXG5mdW5jdGlvbiBhcHBlbmRUb0RvRWxlbWVudHNUb1Byb2plY3QocHJvamVjdCwgcGFyZW50Tm9kZSkge1xuICBwcm9qZWN0LnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBpZiAocHJvamVjdC5leHBhbmRlZCkge1xuICAgICAgbGV0IG5ld1RvZG9OYXZEb20gPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgICBcImxpXCIsXG4gICAgICAgIGB0by1kby1zaG9ydGN1dGAsXG4gICAgICAgIGAke3RvZG8ubmFtZS50b1VwcGVyQ2FzZSgpfWBcbiAgICAgICk7XG4gICAgICBuZXdUb2RvTmF2RG9tID0gYmFja2dyb3VuZENvbG9yUHJpb3JpdHkodG9kbywgbmV3VG9kb05hdkRvbSk7XG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgbmV3VG9kb05hdkRvbS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlVGhyb3VnaFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY2hlY2suc3JjID0gYWxsSW1hZ2VzLmNoZWNrR3JlZW47XG4gICAgICAgIG5ld1RvZG9OYXZEb20uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgfVxuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdUb2RvTmF2RG9tKTtcbiAgICB9IGVsc2UgcGFyZW50Tm9kZS5hcHBlbmQoXCIuXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYmFja2dyb3VuZENvbG9yUHJpb3JpdHkodG9kbywgdG9kb0RvbSkge1xuICBpZiAodG9kby5wcmlvcml0eSA+PSAwICYmIHRvZG8ucHJpb3JpdHkgPD0gMykge1xuICAgIHRvZG9Eb20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMjU1LDAsMC4zXCI7XG4gIH1cbiAgaWYgKHRvZG8ucHJpb3JpdHkgPj0gNCAmJiB0b2RvLnByaW9yaXR5IDw9IDYpIHtcbiAgICB0b2RvRG9tLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMTY1LDAsMC4zXCI7XG4gIH1cbiAgaWYgKHRvZG8ucHJpb3JpdHkgPj0gNyAmJiB0b2RvLnByaW9yaXR5IDw9IDkpIHtcbiAgICB0b2RvRG9tLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMCwwLDAuM1wiO1xuICB9XG4gIHJldHVybiB0b2RvRG9tO1xufVxuXG4vL2lmIHRoZSBwcm9qZWN0IGlzIGFjdGl2ZSBtYWtlcyBhIG1pbmltaXplIGFuZCB2aWNlIHZlcnNhXG5mdW5jdGlvbiBtaW5NYXhJbWFnZUxvYWRlcihwcm9qZWN0KSB7XG4gIHJldHVybiBwcm9qZWN0LmV4cGFuZGVkID8gYWxsSW1hZ2VzLm1pbmltaXplIDogYWxsSW1hZ2VzLm1heGltaXplO1xufVxuXG4vL2NsZWFycyB0aGUgTmF2IHNvIHRoZSBuZXdseSBhcHBlbmRlZCBpdGVtcyBkb250IG92ZXJsYXBcbmZ1bmN0aW9uIGNsZWFyTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmF2LWJhclwiKTtcbiAgd2hpbGUgKG5hdi5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIG5hdi5yZW1vdmVDaGlsZChuYXYuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbi8vcmVuZGVycyB0aGUgbmF2IGJhciB3aXRoIGFsbCBjdXJyZW50IHByb2plY3Qgd2l0aCBhbGwgdG9Eb3NcbmZ1bmN0aW9uIHJlbmRlck5hdigpIHtcbiAgY2xlYXJOYXYoKTtcbiAgY29uc3QgTmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hdi1iYXJcIik7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBEb21FbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdE5hdihwcm9qZWN0KTtcbiAgICBhcHBlbmRUb0RvRWxlbWVudHNUb1Byb2plY3QocHJvamVjdCwgRG9tRWxlbWVudCk7XG4gICAgTmF2QmFyLmFwcGVuZENoaWxkKERvbUVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy9ldmVudCBsaXN0ZW5lciBmb3IgZXhwYW5kaW5nIGFuZCBtaW5pbWl6aW5nIHRoZSBuYXZiYXIgcHJvamVjdHNcbmZ1bmN0aW9uIHRvZ2dsZUV4cGFuZGVkUHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3QudG9nZ2xlRXhwYW5kZWQoKTtcbiAgY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlck5hdiB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1RvZG9zXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdFbGVtZW50IH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVGhpcyBwYXJ0IGZvciBtYWtpbmcgbW9kdWxlc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9jcmVhdGVzIHBvcHVwIG1vZHVsZVxuZnVuY3Rpb24gbW9kdWxlTWFrZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kdWxlLWJhY2tncm91bmRcIiwgXCJcIikpO1xuICBjb25zdCBtb2R1bGUgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kdWxlXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZHVsZSk7XG4gIHJldHVybiBtb2R1bGU7XG59XG5cbi8vbWFrZXMgTmV3IFRvRG8gcG9wdXAgbW9kdWxlXG5mdW5jdGlvbiBuZXdUb0RvTW9kdWxlKCkge1xuICBjb25zdCBtb2R1bGUgPSBtb2R1bGVNYWtlcigpO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1uYW1lXCIsXG4gICAgICAnPGRpdiBjbGFzcz1cInRvRG9OYW1lXCI+PGxhYmVsIGZvcj1cIm5hbWVcIj5Uby1EbyBOYW1lOjwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk1vdyBMYXduXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b0RvUHJvamVjdFwiPjxsYWJlbCBmb3I9XCJwcm9qZWN0VG9Eb01vZHVsZVwiPlByb2plY3Q6PC9sYWJlbD48L2Rpdj4nXG4gICAgKVxuICApO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Qcm9qZWN0XCIpXG4gICAgLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RTZWxlY3RPcHRpb25zKCkpO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1zdGVwc1wiLFxuICAgICAgJzxsYWJlbCBmb3I9XCJzdGVwc1wiPlRvLURvIFN0ZXBzOiA8c3BhbiBjbGFzcz1cInNtYWxsXCI+KHNlcGFyYXRlIHN0ZXBzIGJ5IGxpbmUgYnJlYWspPC9zcGFuPjwvbGFiZWw+PHRleHRhcmVhIG5hbWU9XCJzdGVwc1wiIGlkPVwic3RlcHNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cInN0ZXAgb25lICYjMTBzdGVwIHR3byAmIzEwc3RlcCB0aHJlZSAmIzEwZXRjLi5cIj48L3RleHRhcmVhPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLXByaW9yaXR5XCIsXG4gICAgICAnICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTogPHNwYW4gY2xhc3M9XCJzbWFsbFwiPigwLTkpPC9zcGFuPjwvbGFiZWw+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgbWluPVwiMFwiIG1heD1cIjlcIiAvPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLWJ1dHRvbnNcIixcbiAgICAgICc8YnV0dG9uIGlkPVwib2tcIj5PSzwvYnV0dG9uPjxkaXY+PC9kaXY+PGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNBTkNFTDwvYnV0dG9uPidcbiAgICApXG4gICk7XG59XG5cbi8vZWRpdCBhIHRvRG9cbmZ1bmN0aW9uIGVkaXRUb0RvTW9kdWxlKHRvRG9Ub0VkaXQpIHtcbiAgY29uc3QgbW9kdWxlID0gbW9kdWxlTWFrZXIoKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtbmFtZVwiLFxuICAgICAgYDxkaXYgY2xhc3M9XCJ0b0RvTmFtZVwiPjxsYWJlbCBmb3I9XCJuYW1lXCI+VG8tRG8gTmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgdmFsdWU9JyR7dG9Eb1RvRWRpdC5uYW1lfScvPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b0RvUHJvamVjdFwiPjxsYWJlbCBmb3I9XCJwcm9qZWN0VG9Eb01vZHVsZVwiPlByb2plY3Q6PC9sYWJlbD48L2Rpdj5gXG4gICAgKVxuICApO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Qcm9qZWN0XCIpXG4gICAgLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RTZWxlY3RPcHRpb25zKCkpO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1zdGVwc1wiLFxuICAgICAgYDxsYWJlbCBmb3I9XCJzdGVwc1wiPlRvLURvIFN0ZXBzOiA8c3BhbiBjbGFzcz1cInNtYWxsXCI+KHNlcGFyYXRlIHN0ZXBzIGJ5IGxpbmUgYnJlYWspPC9zcGFuPjwvbGFiZWw+PHRleHRhcmVhIG5hbWU9XCJzdGVwc1wiIGlkPVwic3RlcHNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj4ke3RvRG9Ub0VkaXQuc3RlcHMuam9pbihcbiAgICAgICAgXCJcXG5cIlxuICAgICAgKX08L3RleHRhcmVhPmBcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLXByaW9yaXR5XCIsXG4gICAgICBgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6IDxzcGFuIGNsYXNzPVwic21hbGxcIj4oMC05KTwvc3Bhbj48L2xhYmVsPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIG1pbj1cIjBcIiBtYXg9XCI5XCIgdmFsdWU9JyR7dG9Eb1RvRWRpdC5wcmlvcml0eX0nLz5gXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1idXR0b25zXCIsXG4gICAgICAnPGJ1dHRvbiBpZD1cIm9rXCI+T0s8L2J1dHRvbj48ZGl2PjwvZGl2PjxidXR0b24gaWQ9XCJjYW5jZWxcIj5DQU5DRUw8L2J1dHRvbj4nXG4gICAgKVxuICApO1xufVxuXG4vL21ha2VzIE5ldyBQcm9qZWN0IHBvcHVwIG1vZHVsZVxuZnVuY3Rpb24gbmV3UHJvamVjdE1vZHVsZSgpIHtcbiAgY29uc3QgbW9kdWxlID0gbW9kdWxlTWFrZXIoKTtcblxuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1uYW1lXCIsXG4gICAgICAnPGxhYmVsIGZvcj1cIm5hbWVcIj5Qcm9qZWN0IE5hbWU6PC9sYWJlbD4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJHZW5lcmFsXCI+J1xuICAgIClcbiAgKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtYnV0dG9uc1wiLFxuICAgICAgJzxidXR0b24gaWQ9XCJva1wiPk9LPC9idXR0b24+PGRpdj48L2Rpdj48YnV0dG9uIGlkPVwiY2FuY2VsXCI+Q0FOQ0VMPC9idXR0b24+J1xuICAgIClcbiAgKTtcbn1cblxuLy9jcmVhdGVzIGFsbCBzZWxlY3Qgb3B0aW9ucyBmb3IgYWxsIGF2YWlsYWJsZSBwcm9qZWN0c1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdE9wdGlvbnMoKSB7XG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3QubmFtZSA9IFwicHJvamVjdFRvRG9Nb2R1bGVcIjtcbiAgc2VsZWN0LmlkID0gXCJwcm9qZWN0VG9Eb01vZHVsZVwiO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IG5ld09wdGlvbiA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbmV3T3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIG5ld09wdGlvbi50ZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIGlmIChwcm9qZWN0LmFjdGl2ZSkge1xuICAgICAgbmV3T3B0aW9uLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xuICAgIH1cblxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdDtcbn1cblxuZXhwb3J0IHsgbmV3UHJvamVjdE1vZHVsZSwgbmV3VG9Eb01vZHVsZSwgZWRpdFRvRG9Nb2R1bGUgfTtcbi8qKlxuICogbmV3UHJvamVjdHNNb2R1bGUgZXhwb3J0cyB0byBldmVudExpc3RlbmVyc1xuICogbmV3VG9Eb01vZHVsZSBleHBvcnRzIHRvIGV2ZW50TGlzdGVuZXJzXG4gKi9cbiIsImltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5pbXBvcnQgeyBhbGxJbWFnZXMgfSBmcm9tIFwiLi9pbWFnZUxvYWRlckFuZExpc3RlbmVyXCI7XG5pbXBvcnQge1xuICBjaGVja01hcmtMaXN0ZW5lcixcbiAgZGVsZXRlTGlzdGVuZXIsXG4gIGVkaXRMaXN0ZW5lcixcbn0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMsanNcIjtcbmltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL25hdkJhclwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBUT0RPIENMQVNTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jbGFzcyB0b0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3RlcHMsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgKHRoaXMubmFtZSA9IG5hbWUpLFxuICAgICAgKHRoaXMuc3RlcHMgPSBzdGVwcyksXG4gICAgICAodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KSxcbiAgICAgICh0aGlzLmNvbXBsZXRlZCA9IGZhbHNlKSxcbiAgICAgICh0aGlzLmRlbGV0ZSA9IGZhbHNlKSxcbiAgICAgICh0aGlzLnBhcmVudFByb2plY3QgPSBwcm9qZWN0KSxcbiAgICAgICh0aGlzLmVkaXQgPSBmYWxzZSk7XG4gIH1cblxuICAvL2ZvciBjbGlja2luZyBpbmRpdmlkdWFsIGNoZWNrbWFyayBpbiB0b0RvLiBtYWtlcyBjb21wbGV0ZWQgc3RhdHVzIHRydWVcbiAgY2xpY2tlZENoZWNrbWFyayA9ICgpID0+IHtcbiAgICB0aGlzLmNvbXBsZXRlZCA/ICh0aGlzLmNvbXBsZXRlZCA9IGZhbHNlKSA6ICh0aGlzLmNvbXBsZXRlZCA9IHRydWUpO1xuICB9O1xuXG4gIGNsaWNrZWREZWxldGUgPSAoKSA9PiB7XG4gICAgdGhpcy5kZWxldGUgPSB0cnVlO1xuICB9O1xuXG4gIGNsaWNrZWRFZGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gIH07XG5cbiAgLy9jcmVhdGVzIERvbSBlbGVtZW50IFwidG8tZG8tZGlzcGxheVwiIHdpdGggYWxsIGNoaWxkcmVuIGFjY29yZGluZyB0byB0aGlzIGNsYXNzZXMga2V5c1xuICBDcmVhdGVEb21FbGVtZW50ID0gKCkgPT4ge1xuICAgIGxldCB0b0RvQ2FyZCA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0by1kby1kaXNwbGF5XCIsIFwiXCIpO1xuICAgIGlmICh0aGlzLmNvbXBsZXRlZCkge1xuICAgICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbXBsZXRlZFwiLCBcIkNPTVBMRVRFRFwiKSk7XG4gICAgfVxuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy4jc3RlcEFycmF5VG9MaSgpO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHN0ZXBzKTtcbiAgICBjb25zdCB0b0RvTmFtZSA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJoMVwiLCBcInRvLWRvLW5hbWVcIiwgYCR7dGhpcy5uYW1lfWApO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbnMgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwicHJpb3JpdHktaWNvbnNcIixcbiAgICAgIGA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5Qcmlvcml0eSAtICR7dGhpcy5wcmlvcml0eX08L2Rpdj5gXG4gICAgKTtcbiAgICB0b0RvQ2FyZCA9IHRoaXMuI3ByaW9yaXR5Q29sb3JDaGFuZ2UodG9Eb0NhcmQpO1xuICAgIGNvbnN0IGltYWdlcyA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJpbWFnZXNcIiwgXCJcIik7XG5cbiAgICAvL2NoYW5nZXMgY2hlY2ttYXJrIHRvIHVuY2hlY2tcbiAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHVuQ2hlY2tNYXJrID0gdGhpcy4jYWRkSW1hZ2VzKGFsbEltYWdlcy51bmNoZWNrKTtcbiAgICAgIHVuQ2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoZWNrTWFya0xpc3RlbmVyKHRoaXMpO1xuICAgICAgfSk7XG4gICAgICBpbWFnZXMuYXBwZW5kQ2hpbGQodW5DaGVja01hcmspO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGVja01hcmsgPSB0aGlzLiNhZGRJbWFnZXMoYWxsSW1hZ2VzLmNoZWNrKTtcbiAgICAgIGNoZWNrTWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGVja01hcmtMaXN0ZW5lcih0aGlzKTtcbiAgICAgIH0pO1xuICAgICAgaW1hZ2VzLmFwcGVuZENoaWxkKGNoZWNrTWFyayk7XG4gICAgfVxuICAgIC8vIGVuZCBvZiB0aGlzIGJpZyBmdW5jdGlvblxuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuI2FkZEltYWdlcyhhbGxJbWFnZXMuZWRpdCk7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdExpc3RlbmVyKHRoaXMpO1xuICAgIH0pO1xuICAgIGltYWdlcy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1aXR0b24gPSB0aGlzLiNhZGRJbWFnZXMoYWxsSW1hZ2VzLmRlbGV0ZSk7XG4gICAgZGVsZXRlQnVpdHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlTGlzdGVuZXIodGhpcyk7XG4gICAgfSk7XG4gICAgaW1hZ2VzLmFwcGVuZENoaWxkKGRlbGV0ZUJ1aXR0b24pO1xuXG4gICAgcHJpb3JpdHlJY29ucy5hcHBlbmRDaGlsZChpbWFnZXMpO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbnMpO1xuXG4gICAgcmV0dXJuIHRvRG9DYXJkO1xuICB9O1xuXG4gIC8vUHJpdmF0ZSBGdW5jdGlvbnMgQmVsb3chXG4gICNhZGRJbWFnZXMgPSAoSU1BR0UpID0+IHtcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltYWdlLnNyYyA9IElNQUdFO1xuICAgIHJldHVybiBuZXdJbWFnZTtcbiAgfTtcblxuICAjc3RlcEFycmF5VG9MaSA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxTdGVwcyA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJvbFwiLCBcInRvLWRvLXN0ZXBzXCIsIFwiXCIpO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgY29uc3QgdGhpc1N0ZXAgPSBjcmVhdGVOZXdFbGVtZW50KFwibGlcIiwgXCJsaXN0SXRlbVwiLCBzdGVwKTtcbiAgICAgIGFsbFN0ZXBzLmFwcGVuZENoaWxkKHRoaXNTdGVwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU3RlcHM7XG4gIH07XG4gICNwcmlvcml0eUNvbG9yQ2hhbmdlID0gKHRvRG9DYXJkKSA9PiB7XG4gICAgaWYgKHRoaXMucHJpb3JpdHkgPj0gMCAmJiB0aGlzLnByaW9yaXR5IDw9IDMpIHtcbiAgICAgIHRvRG9DYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmlvcml0eSA+PSA0ICYmIHRoaXMucHJpb3JpdHkgPD0gNikge1xuICAgICAgdG9Eb0NhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmlvcml0eSA+PSA3ICYmIHRoaXMucHJpb3JpdHkgPD0gOSkge1xuICAgICAgdG9Eb0NhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICByZXR1cm4gdG9Eb0NhcmQ7XG4gIH07XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENMQVNTIFBST0pFQ1RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvRG9zID0gW107XG4gICAgdGhpcy50b0RvRG9tcyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCA9ICgpID0+IHtcbiAgICB0aGlzLmV4cGFuZGVkID09IHRydWUgPyAodGhpcy5leHBhbmRlZCA9IGZhbHNlKSA6ICh0aGlzLmV4cGFuZGVkID0gdHJ1ZSk7XG4gIH07XG4gIHRvZ2dsZUluYWN0aXZlID0gKCkgPT4ge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH07XG4gIHRvZ2dsZUFjdGl2ZSA9ICgpID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRvZ2dsZUluYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9O1xuXG4gIGFkZFRvRG8gPSAobmV3VG9kbykgPT4ge1xuICAgIHRoaXMudG9Eb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICBjbGVhcnRvRG9Eb21zID0gKCkgPT4ge1xuICAgIHRoaXMudG9Eb0RvbXMgPSBbXTtcbiAgfTtcblxuICB0dXJuVG9Eb3NJbnRvRG9tcyA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFydG9Eb0RvbXMoKTtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRoaXMudG9Eb0RvbXMucHVzaCh0b2RvLkNyZWF0ZURvbUVsZW1lbnQoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG8tZG8tZGlzcGxheVwiKTtcbiAgICB3aGlsZSAoZGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlckRvbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICB0aGlzLnR1cm5Ub0Rvc0ludG9Eb21zKCk7XG4gICAgdGhpcy50b0RvRG9tcy5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvLWRvLWRpc3BsYXlcIik7XG4gICAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZChkb20pO1xuICAgIH0pO1xuICAgIHJlbmRlck5hdigpO1xuICB9O1xuXG4gIGRlbGV0ZVRvRG8gPSAoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmRlbGV0ZSkge1xuICAgICAgICB0aGlzLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXRUb0RvID0gKG5ld1RvRG8pID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBtb3ZlZCA9IHRydWU7XG4gICAgdGhpcy50b0Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5lZGl0KSB7XG4gICAgICAgIGxldCBjaGVja2VkT3JOb3QgPSB0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgbmV3VG9Eby5jb21wbGV0ZWQgPSBjaGVja2VkT3JOb3Q7XG4gICAgICAgIHRoaXMudG9Eb3NbaW5kZXhdID0gbmV3VG9EbztcbiAgICAgICAgbW92ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gICAgaWYgKG1vdmVkKSB7XG4gICAgICB0aGlzLnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgfVxuICB9O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBmdW5jdGlvbnMgZm9yIHByb2plY3RzIGFuZCB0b2Rvc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRpc3BsYXktaGVhZGVyXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHByb2plY3QuZGVsZXRlVG9EbygpO1xuICAgICAgcHJvamVjdC50dXJuVG9Eb3NJbnRvRG9tcygpO1xuICAgICAgcHJvamVjdC5yZW5kZXJEb21zKCk7XG4gICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIH1cbiAgICByZW5kZXJOYXYoKTtcbiAgfSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIGN1cnJlbnRseSB0aGlzIGlzIGp1c3QgZm9yIGJ1aWxkaW5nIHNpdGVcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmxldCBtb3dMYXduID0gbmV3IHRvRG8oXG4gIFwiTW93IExhd25cIixcbiAgW1wiUHJlcCBMYXduIE1vd2VyXCIsIFwiTW93IExhd25cIiwgXCJEaXNwb3NlIG9mIEdyYXNzXCIsIFwiQ2xlYW4gVXBcIl0sXG4gIDYsXG4gIFwiR2VuZXJhbFwiXG4pO1xubGV0IG1vd0xhd24yID0gbmV3IHRvRG8oXG4gIFwiTW93IExhd25cIixcbiAgW1wiUHJlcCBMYXduIE1vd2VyXCIsIFwiTW93IExhd25cIiwgXCJEaXNwb3NlIG9mIEdyYXNzXCIsIFwiQ2xlYW4gVXBcIl0sXG4gIDgsXG4gIFwiR2VuZXJhbFwiXG4pO1xubGV0IG1vd0xhd24zID0gbmV3IHRvRG8oXG4gIFwiTW93IExhd25cIixcbiAgW1wiUHJlcCBMYXduIE1vd2VyXCIsIFwiTW93IExhd25cIiwgXCJEaXNwb3NlIG9mIEdyYXNzXCIsIFwiQ2xlYW4gVXBcIl0sXG4gIDEsXG4gIFwiR2VuZXJhbFwiXG4pO1xubGV0IGFub3RoZXJUb0RvID0gbmV3IHRvRG8oXG4gIFwic3R1ZmZcIixcbiAgW1widGhpbmdcIiwgXCJhbm90aGVyIHRoaW5nXCIsIFwib2sgdGhpcyBpcyBpdFwiXSxcbiAgNSxcbiAgXCJSYW5kb21cIlxuKTtcblxubGV0IFJhbmRvbSA9IG5ldyBQcm9qZWN0KFwiUmFuZG9tXCIpO1xuUmFuZG9tLmFkZFRvRG8oYW5vdGhlclRvRG8pO1xuUmFuZG9tLmFkZFRvRG8obW93TGF3bik7XG5cbmxldCBHZW5lcmFsID0gbmV3IFByb2plY3QoXCJHZW5lcmFsXCIpO1xuR2VuZXJhbC5hZGRUb0RvKG1vd0xhd24pO1xuR2VuZXJhbC5hZGRUb0RvKG1vd0xhd24yKTtcbkdlbmVyYWwuYWRkVG9Ebyhtb3dMYXduMyk7XG5cbmxldCBwcm9qZWN0cyA9IFtHZW5lcmFsXTtcbnByb2plY3RzLnB1c2goUmFuZG9tKTtcblxuZXhwb3J0IHsgR2VuZXJhbCwgcHJvamVjdHMsIHRvRG8sIFByb2plY3QsIGNoZWNrRm9yQWN0aXZlUHJvamVjdCB9O1xuLypcbnRvRG8gZ29lcyB0byBldmVudExpc3RlbmVyc1xuUHJvamVjdCBnb2VzIHRvIGV2ZW50TGlzdGVuZXJzXG5nZW5lcmFsIHRvIHJlbmRlclBhZ2VcbiovXG4iLCJmdW5jdGlvbiBjcmVhdGVOZXdFbGVtZW50KHR5cGUsIGFkZENsYXNzLCBpbm5lckhUTUwpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuLy9jcmVhdGVzIGhlYWRlciBhbmQgY2FwdGlvblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiXCIpO1xuICBjb25zdCBjYXB0aW9uID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiY2FwdGlvblwiLFxuICAgICc8aDEgaWQ9XCJwYWdlVGl0bGVcIj5Uby1Eby1NZTwvaDE+J1xuICApO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2FwdGlvbik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbi8vY3JlYXRlcyBuYXYgYmFyIGFuZCBidXR0b25zXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcIm5hdlwiLFxuICAgIGA8ZGl2IGNsYXNzPVwicHJvamVjdC1idXR0b25zXCI+PGJ1dHRvbiBpZD1cIm5ld1Byb2plY3RcIj5OZXcgUHJvamVjdDwvYnV0dG9uPjxidXR0b24gaWQ9XCJuZXdUb0RvXCI+TmV3IFRvLURvPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cInByb2plY3QtbmF2LWJhclwiPC9kaXY+YFxuICApO1xuICByZXR1cm4gbmF2O1xufVxuXG4vL2NyZWF0ZXMgRGlzcGxheVxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheSgpIHtcbiAgY29uc3QgZGlzcGxheSA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcImRpc3BsYXlcIixcbiAgICAnPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPjxoMSBjbGFzcz1cInByb2plY3QtZGlzcGxheS1oZWFkZXJcIj5HZW5lcmFsPC9oMT48YnV0dG9uIGlkPVwicm1Qcm9qZWN0XCI+RGVsZXRlIFByb2plY3Q8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwiZGlzcGxheS10by1kby1kaXNwbGF5XCI+PC9kaXY+J1xuICApO1xuICByZXR1cm4gZGlzcGxheTtcbn1cblxuLy9jcmVhdGVzIGZvb3RlciBhbmQgYWRkcyB0ZXh0XG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcImZvb3RlclwiLFxuICAgIFwiJmNvcHkgVGhlIERhdmVyIGdldHMgdG8gbW92ZSB0byBDb3N0YVJpY2EgcHJvamVjdCAyMDIyXCJcbiAgKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLy9yZW5kZXJzIHRoZSBwYWdlLCBleHBvcnQgdGhpcyBmdW5jdGlvbiB0byBpbmRleCB0byByZW5kZXIgcGFnZVxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiLCBcIlwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURpc3BsYXkoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclBhZ2UsIGNyZWF0ZU5ld0VsZW1lbnQgfTtcbi8vcmVuZGVyIHBhZ2UgdXNlZCBpbiBpbmRleC5odG1sXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5pbXBvcnQgeyBhbGxMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycyxqc1wiO1xuaW1wb3J0IHsgY2hlY2tGb3JBY3RpdmVQcm9qZWN0LCBHZW5lcmFsIH0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuXG4vL3JlbmRlcnMgZ2VuZXJhbCBwYWdlIGxheW91dFxucmVuZGVyUGFnZSgpO1xuYWxsTGlzdGVuZXJzKCk7XG5cbi8vdXNpbmcgdGhpcyBmb3IgcGFnZWxvYWQgZm9yIG5vdy5cbkdlbmVyYWwudG9nZ2xlQWN0aXZlKCk7XG5jaGVja0ZvckFjdGl2ZVByb2plY3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
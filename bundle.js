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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"muktaregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 7fr;\n  gap: 2%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: black;\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.project-nav-bar {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n#rmProject:hover {\n  cursor: pointer;\n  background-color: rgb(255, 165, 165);\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n\n.strikeThrough {\n  text-decoration: line-through;\n}\n\n.to-do-shortcut > img {\n  align-self: center;\n  justify-self: end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B;0DAC+D;EAC/D,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B;0DACiE;EACjE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;EAChC,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;AAC/B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,0CAA0C;EAC1C,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,OAAO;EACP,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,4BAA4B;EAC5B,4CAA4C;EAC5C,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,oCAAoC;EACpC,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yCAAyC;EACzC,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["@font-face {\n  font-family: \"muktaregular\";\n  src: url(\"../src/fonts/mukta-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/mukta-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"macondoregular\";\n  src: url(\"../src/fonts/macondo-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../src/fonts/macondo-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  width: 100%;\n  min-width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  grid-template-columns: 1fr 4.5fr;\n  grid-template-rows: 0.6fr 5fr 0.3fr;\n}\n\n.header {\n  grid-area: 1/2/2/3;\n  background-color: #82b5d3;\n  box-shadow: 0px 0px 10px 1px #888888;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"macondoregular\";\n}\n.caption {\n  font-size: 2em;\n}\n.nav {\n  grid-area: 1/1/3/2;\n  background-color: #e2e8f0;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 7fr;\n  gap: 2%;\n  padding: 10%;\n}\n\n.project-shortcut > div > img {\n  margin-bottom: -5px;\n}\n\n.project-shortcut > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.display {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr 5fr;\n  background-color: #f3eded;\n  overflow: overlay;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-small;\n}\n\n.project-shortcut {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: #c2410c;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.project-shortcut:hover {\n  color: #973108;\n  cursor: crosshair;\n}\n\n.to-do-shortcut {\n  font-size: 1rem;\n  font-weight: lighter;\n  color: black;\n  border: 0.5px black solid;\n  box-shadow: inset 0px 0px 10px 1px #888888;\n  border-radius: 8px;\n  list-style: none;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.to-do-shortcut:hover {\n  background-color: #ccd3dd;\n  cursor: pointer;\n}\n\n.to-do-display {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 15px 30px 15px 30px;\n  box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 50%);\n  border-left: solid 8px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 4fr 0.75fr;\n}\n\n.project-display {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-display-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 3em;\n  text-decoration: underline;\n  font-family: \"macondoregular\";\n}\n\n.project-buttons {\n  grid-area: 1/1/2/2;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.project-nav-bar {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#rmProject {\n  align-self: flex-end;\n  width: 115px;\n  height: 2em;\n  background-color: rgb(243, 135, 135);\n  border-radius: 8px;\n  border: red solid 1px;\n  margin-right: 20px;\n}\n#rmProject:hover {\n  cursor: pointer;\n  background-color: rgb(255, 165, 165);\n}\n\n.project-buttons > button {\n  height: 2em;\n  font-size: 1.25em;\n  background-color: #9cddac;\n  border-radius: 8px;\n}\n.project-buttons > button:hover {\n  cursor: pointer;\n  background-color: #7fda96;\n}\n\n.display-to-do-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 300px);\n  gap: 10px;\n  font-family: \"muktaregular\";\n  padding: 10px;\n}\n\n.to-do-name {\n  grid-area: 1/1/2/2;\n  align-self: center;\n  justify-self: center;\n  margin-top: -5px;\n  margin-bottom: 5px;\n}\n.to-do-steps {\n  grid-area: 2/1/3/2;\n  line-height: 1.25;\n  color: #757474;\n  padding-left: 2em;\n  margin-left: -2em;\n  overflow: overlay;\n}\n\n.images {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.priority {\n  font-weight: bolder;\n}\n\n.priority-icons {\n  grid-area: 3/1/4/2;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\nimg:hover {\n  cursor: pointer;\n  background-color: #f3eded;\n}\n\n.completed {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: rgba(178, 241, 82, 0.5);\n  width: 100%;\n  height: 25%;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: -10px;\n  top: 37.5%;\n  transform: rotate(-31deg);\n  border: solid 1px black;\n  font-size: x-large;\n  opacity: 0.75;\n  color: #757474;\n}\n\n.module {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.5fr 0.5fr;\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  background-color: black;\n  color: white;\n  left: 25vw;\n  top: 25vh;\n}\n\n.module-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.9;\n  top: 0;\n  left: 0;\n}\n\n.module-name {\n  grid-area: 1/1/2/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.toDoName {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n\n.toDoProject {\n  grid-area: 2/1/3/2;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\nselect {\n  height: 75%;\n}\n\n.small {\n  font-size: small;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n.module input {\n  height: 3em;\n  padding-left: 10px;\n}\n\n.module-steps {\n  grid-area: 2/1/3/2;\n  font-size: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.module textarea {\n  padding: 5px;\n}\n\n.module-priority {\n  grid-area: 3/1/4/2;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  margin-bottom: 15px;\n}\n\n.module-buttons {\n  grid-area: 4/1/5/2;\n  display: grid;\n  grid-template-columns: 1fr 0.75fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.module-buttons button {\n  width: 100%;\n  height: 100%;\n}\n\n.strikeThrough {\n  text-decoration: line-through;\n}\n\n.to-do-shortcut > img {\n  align-self: center;\n  justify-self: end;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "deleteProjectListener": () => (/* binding */ deleteProjectListener),
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

//delete project button listener
function deleteProjectListener() {
  _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
    if (project.active) {
      let index = _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.indexOf(project);
      _projectsTodos__WEBPACK_IMPORTED_MODULE_1__.projects.splice(index, 1);
    }
    (0,_projectsTodos__WEBPACK_IMPORTED_MODULE_1__.checkForActiveProject)();
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
    ProjectThisTodoBelongsTo.toggleActive();
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
  if (todo.priority >= 7) {
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
    if (this.priority >= 7) {
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
  let anyActive = false;
  projects.forEach((project) => {
    if (project.active == true) {
      project.deleteToDo();
      project.turnToDosIntoDoms();
      project.renderDoms();
      projectHeader.textContent = project.name;
      anyActive = true;
    }
  });
  //makes first project active after deleting if there is a first projecct
  if (!anyActive && projects[0]) {
    projects[0].toggleActive();
    checkForActiveProject();
  }
  if (!anyActive && !projects[0]) {
    let emptyProject = new Project("General");
    projects.push(emptyProject);
    emptyProject.toggleActive();
    checkForActiveProject();
  }

  (0,_navBar__WEBPACK_IMPORTED_MODULE_3__.renderNav)();
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
let mowLawn4 = new toDo(
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
Random.addToDo(mowLawn4);
let general = new Project("General");
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
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners,js */ "./src/eventListeners,js");


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
    '<div class="project-display"><h1 class="project-display-header">General</h1></div><div class="display-to-do-display"></div>'
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
// adds project delete button to display
function projectDeleteBtn() {
  const btnHouse = document.querySelector(".project-display");
  const btn = document.createElement("button");
  btn.id = "rmProject";
  btn.innerHTML = "Delete Project";
  btn.addEventListener("click", _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.deleteProjectListener);
  btnHouse.appendChild(btn);
}

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createNav());
  container.appendChild(createDisplay());
  container.appendChild(createFooter());
  projectDeleteBtn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGtEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UjREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxRUFBcUI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNTO0FBQ3dCOztBQUUzRTtBQUNBLHVEQUFVO0FBQ1YsZ0VBQVk7O0FBRVo7QUFDQSxnRUFBb0I7QUFDcEIscUVBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzLGpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VMb2FkZXJBbmRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25hdkJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVwTW9kdWxlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL211a3RhLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9tYWNvbmRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9tYWNvbmRvLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm11a3RhcmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0LjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNWZyIDAuM2ZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmI1ZDM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWNvbmRvcmVndWxhclxcXCI7XFxufVxcbi5jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4ubmF2IHtcXG4gIGdyaWQtYXJlYTogMS8xLzMvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMXB4ICM4ODg4ODg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDdmcjtcXG4gIGdhcDogMiU7XFxuICBwYWRkaW5nOiAxMCU7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0ID4gZGl2ID4gaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC44ZnIgNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWRlZDtcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICNjMjQxMGM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dDpob3ZlciB7XFxuICBjb2xvcjogIzk3MzEwODtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4udG8tZG8tc2hvcnRjdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDAuNXB4IGJsYWNrIHNvbGlkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50by1kby1zaG9ydGN1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkM2RkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG8tZG8tZGlzcGxheSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggMXB4IHJnYigwIDAgMCAvIDUwJSk7XFxuICBib3JkZXItbGVmdDogc29saWQgOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNzVmcjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LW5hdi1iYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3JtUHJvamVjdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMTVweDtcXG4gIGhlaWdodDogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTM1LCAxMzUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4jcm1Qcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2NSwgMTY1KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljZGRhYztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByb2plY3QtYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZkYTk2O1xcbn1cXG5cXG4uZGlzcGxheS10by1kby1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzAwcHgpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvLWRvLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4udG8tZG8tc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0yZW07XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuXFxuLmltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5wcmlvcml0eSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktaWNvbnMge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCAyNDEsIDgyLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogLTEwcHg7XFxuICB0b3A6IDM3LjUlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMxZGVnKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIGNvbG9yOiAjNzU3NDc0O1xcbn1cXG5cXG4ubW9kdWxlIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAwLjVmciAwLjVmcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZWZ0OiAyNXZ3O1xcbiAgdG9wOiAyNXZoO1xcbn1cXG5cXG4ubW9kdWxlLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1vZHVsZS1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4udG9Eb05hbWUge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9Qcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1vZHVsZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1vZHVsZS1zdGVwcyB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tb2R1bGUgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubW9kdWxlLXByaW9yaXR5IHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm1vZHVsZS1idXR0b25zIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjc1ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zdHJpa2VUaHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG8tZG8tc2hvcnRjdXQgPiBpbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0I7MERBQytEO0VBQy9ELG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7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cEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtdWt0YXJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9tdWt0YS1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vc3JjL2ZvbnRzL211a3RhLXJlZ3VsYXItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9tYWNvbmRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9zcmMvZm9udHMvbWFjb25kby1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDVmciAwLjNmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiNWQzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFjb25kb3JlZ3VsYXJcXFwiO1xcbn1cXG4uY2FwdGlvbiB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLm5hdiB7XFxuICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDFweCAjODg4ODg4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA3ZnI7XFxuICBnYXA6IDIlO1xcbiAgcGFkZGluZzogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiA+IGltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1zaG9ydGN1dCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOGZyIDVmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2VkZWQ7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5wcm9qZWN0LXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjYzI0MTBjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnByb2plY3Qtc2hvcnRjdXQ6aG92ZXIge1xcbiAgY29sb3I6ICM5NzMxMDg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAwLjVweCBibGFjayBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAxcHggIzg4ODg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8tc2hvcnRjdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDNkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4IDFweCByZ2IoMCAwIDAgLyA1MCUpO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAwLjc1ZnI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LWZhbWlseTogXFxcIm1hY29uZG9yZWd1bGFyXFxcIjtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYXYtYmFyIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNybVByb2plY3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTE1cHg7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDEzNSwgMTM1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuI3JtUHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjUsIDE2NSk7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2RkYWM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZGE5NjtcXG59XFxuXFxuLmRpc3BsYXktdG8tZG8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwMHB4KTtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXVrdGFyZWd1bGFyXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50by1kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnRvLWRvLXN0ZXBzIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICM3NTc0NzQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG4ucHJpb3JpdHkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWljb25zIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlZGVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgMjQxLCA4MiwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAzNy41JTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMWRlZyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBjb2xvcjogIzc1NzQ3NDtcXG59XFxuXFxuLm1vZHVsZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMC41ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGVmdDogMjV2dztcXG4gIHRvcDogMjV2aDtcXG59XFxuXFxuLm1vZHVsZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2R1bGUtbmFtZSB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnRvRG9OYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0RvUHJvamVjdCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zbWFsbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tb2R1bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5tb2R1bGUtc3RlcHMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kdWxlIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vZHVsZS1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5tb2R1bGUtYnV0dG9ucyB7XFxuICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC43NWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ubW9kdWxlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RyaWtlVGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvLWRvLXNob3J0Y3V0ID4gaW1nIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgbmV3UHJvamVjdE1vZHVsZSxcbiAgbmV3VG9Eb01vZHVsZSxcbiAgZWRpdFRvRG9Nb2R1bGUsXG59IGZyb20gXCIuL3BvcHVwTW9kdWxlc1wiO1xuaW1wb3J0IHtcbiAgdG9EbyxcbiAgUHJvamVjdCxcbiAgcHJvamVjdHMsXG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogKiBQcm9qZWN0IExpc3RlbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL2FkZHMgZXZlbnQgbGlzdGVuZXIgdG8gTmV3IFByb2plY3QgYnV0dG9uIGluIE5hdiBCYXJcbmZ1bmN0aW9uIG5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZHVsZSgpO1xuICAgIGNhbmNlbEJ0bigpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RPS0xpc3RlbmVyKCk7XG4gIH0pO1xufVxuXG4vL2xpc3RlbmVyIGZvciBjbGlja2luZyBvbiBPSyB3aGVuIE5ldyBQcm9qZWN0IE1vZHVsZSBpcyB1cFxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdE9LTGlzdGVuZXIoKSB7XG4gIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJva1wiKTtcbiAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwdXNoTmV3QWN0aXZlUHJvamVjdCgpO1xuICAgIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xuICAgIGNsb3NlTW9kdWxlKCk7XG4gIH0pO1xufVxuXG4vL3B1c2hlcyBuZXcgcHJvamVjdCB0byBhcnJheSBhbmQgc2V0cyBpdCBhY3RpdmVcbmZ1bmN0aW9uIHB1c2hOZXdBY3RpdmVQcm9qZWN0KCkge1xuICBjb25zdCBQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdE1hZGUgPSBuZXcgUHJvamVjdChQcm9qZWN0TmFtZSk7XG4gIHByb2plY3RNYWRlLnRvZ2dsZUFjdGl2ZSgpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3RNYWRlKTtcbn1cblxuLy9kZWxldGUgcHJvamVjdCBidXR0b24gbGlzdGVuZXJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpIHtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmFjdGl2ZSkge1xuICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xuICB9KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVG8gRG8gTGlzdGVuZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy9jbGlja2luZyBvbiBOZXcgVG8tRG8gQnV0dG9uXG5mdW5jdGlvbiBuZXdUb0RvQnV0dG9uKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvRG9cIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld1RvRG9Nb2R1bGUoKTtcbiAgICBUb0RvTW9kdWxlT0tMaXN0ZW5lcigpO1xuICAgIGNhbmNlbEJ0bigpO1xuICB9KTtcbn1cblxuLy9saXN0ZW5lciBmb3IgY2xpY2tpbmcgb24gT0sgd2hlbiBOZXcgVG9EbyBNb2R1bGUgaXMgdXBcbmZ1bmN0aW9uIFRvRG9Nb2R1bGVPS0xpc3RlbmVyKCkge1xuICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2tcIik7XG4gIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0NyZWF0ZWQgPSBjcmVhdGVUb0RvT2JqZWN0RnJvbU1vZHVsZUlucHV0KCk7XG4gICAgbGV0IFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUbyA9IHRvRG9DcmVhdGVkLnBhcmVudFByb2plY3Q7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvID0gY2hlY2tQcm9qZWN0c0FycmF5Rm9yVG9Eb0NyZWF0aW9uKFxuICAgICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvXG4gICAgKTtcbiAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8udG9nZ2xlQWN0aXZlKCk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLmFkZFRvRG8odG9Eb0NyZWF0ZWQpO1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUby5yZW5kZXJEb21zKCk7XG4gICAgY2xvc2VNb2R1bGUoKTtcbiAgfSk7XG59XG4vL3Rha2VzIGlucHV0IHZhbHVlcyBmcm9tIHRoZSBtb2R1bGUgZm9ybSBmb3IgdG9kbyBjcmVhdGlvbiBhbmQgcmV0dXJucyBhbiBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9PYmplY3RGcm9tTW9kdWxlSW5wdXQoKSB7XG4gIGNvbnN0IHRvRG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICBjb25zdCB0b0RvU3RlcHMgPSB0ZXh0QXJlYVRvQXJyYXkoKTtcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgY29uc3QgcGFyZW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRvRG9Nb2R1bGVcIikudmFsdWU7XG4gIGNvbnN0IHRvRG9DcmVhdGVkID0gbmV3IHRvRG8oXG4gICAgdG9Eb05hbWUsXG4gICAgdG9Eb1N0ZXBzLFxuICAgIHRvZG9Qcmlvcml0eSxcbiAgICBwYXJlbnRQcm9qZWN0XG4gICk7XG4gIHJldHVybiB0b0RvQ3JlYXRlZDtcbn1cblxuLy9hc3NpZ25zIHRvZG8gdG8gdGhlIHByb3BlciBwcm9qZWN0XG5mdW5jdGlvbiBjaGVja1Byb2plY3RzQXJyYXlGb3JUb0RvQ3JlYXRpb24ocGFyZW50UHJvamVjdCkge1xuICBsZXQgbWF0Y2g7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5uYW1lID09IHBhcmVudFByb2plY3QpIHtcbiAgICAgIG1hdGNoID0gcHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHRha2UgdGV4dGFyZWEgaW5mbyBhbmQgcHV0IGl0IGludG8gYW4gQXJyYXlcbmZ1bmN0aW9uIHRleHRBcmVhVG9BcnJheSgpIHtcbiAgbGV0IHRvRG9TdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcHNcIikudmFsdWU7XG4gIGxldCB0b0RvU3RlcHNBcnJheSA9IHRvRG9TdGVwcy5zcGxpdChcIlxcblwiKTtcbiAgcmVtb3ZlQmxhbmtzKHRvRG9TdGVwc0FycmF5KTtcbiAgcmV0dXJuIHRvRG9TdGVwc0FycmF5O1xufVxuLy9yZW1vdmVzIGFueSBhY2NpZGVudGFsIGJsYW5rIHN0ZXBzIGZyb20gYXJyYXkgL1teXFxzXFxcXF0vXG5mdW5jdGlvbiByZW1vdmVCbGFua3MoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCByZWdFeCA9IC9bXlxcc1xcXFxdLztcbiAgICBpZiAoYXJyYXlbaV0ubWF0Y2gocmVnRXgpKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKSwgaS0tO1xuICAgIH1cbiAgfVxufVxuXG4vL2NsaWNraW5nIG9uIHRoZSBjaGVjayBtYXJrcyBUb0RvIGFzIGNvbXBsZXRlXG5mdW5jdGlvbiBjaGVja01hcmtMaXN0ZW5lcihUaGlzVG9Eb09iamVjdCkge1xuICBUaGlzVG9Eb09iamVjdC5jbGlja2VkQ2hlY2ttYXJrKCk7XG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xufVxuXG4vL2NsaWNraW5nIG9uIHRoZSBlZGl0IGJ1dHRvbiBhbGxvd3MgZWRpdHRpbmcgb2YgY3VycmVudCB0b2RvXG5mdW5jdGlvbiBlZGl0TGlzdGVuZXIoVGhpc1RvRG9PYmplY3QpIHtcbiAgZWRpdFRvRG9Nb2R1bGUoVGhpc1RvRG9PYmplY3QpO1xuICBjYW5jZWxCdG4oKTtcbiAgRWRpdE9LTGlzdGVuZXIoVGhpc1RvRG9PYmplY3QpO1xufVxuXG4vL2xpc3RlbmVyIGZvciBjbGlja2luZyBvbiBPSyB3aGVuIE5ldyBUb0RvIE1vZHVsZSBpcyB1cFxuZnVuY3Rpb24gRWRpdE9LTGlzdGVuZXIodG9Eb0JlaW5nRWRpdGVkKSB7XG4gIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJva1wiKTtcbiAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b0RvQmVpbmdFZGl0ZWQuY2xpY2tlZEVkaXQoKTtcbiAgICBjb25zdCB0b0RvQ3JlYXRlZCA9IGNyZWF0ZVRvRG9PYmplY3RGcm9tTW9kdWxlSW5wdXQoKTtcblxuICAgIGlmICh0b0RvQmVpbmdFZGl0ZWQucGFyZW50UHJvamVjdCAhPT0gdG9Eb0NyZWF0ZWQucGFyZW50UHJvamVjdCkge1xuICAgICAgdG9Eb0JlaW5nRWRpdGVkLmNsaWNrZWREZWxldGUoKTtcbiAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb0RvKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvID0gdG9Eb0NyZWF0ZWQucGFyZW50UHJvamVjdDtcbiAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG8gPSBjaGVja1Byb2plY3RzQXJyYXlGb3JUb0RvQ3JlYXRpb24oXG4gICAgICBQcm9qZWN0VGhpc1RvZG9CZWxvbmdzVG9cbiAgICApO1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUby5lZGl0VG9Ebyh0b0RvQ3JlYXRlZCk7XG4gICAgUHJvamVjdFRoaXNUb2RvQmVsb25nc1RvLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIFByb2plY3RUaGlzVG9kb0JlbG9uZ3NUby5yZW5kZXJEb21zKCk7XG4gICAgY2xvc2VNb2R1bGUoKTtcbiAgfSk7XG59XG5cbi8vY2xpY2tpbmcgb24gZGVsZXRlIGJ1dHRvbiBkZWxldGVzIGN1cnJlbnQgdG9Eb1xuZnVuY3Rpb24gZGVsZXRlTGlzdGVuZXIoVGhpc1RvRG9PYmplY3QpIHtcbiAgVGhpc1RvRG9PYmplY3QuY2xpY2tlZERlbGV0ZSgpO1xuICBjaGVja0ZvckFjdGl2ZVByb2plY3QoKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQm90aCBUby1EbyBhbmQgUHJvamVjdCBMaXN0ZW5lcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vQ2FuY2VsIGZvciBhbnkgbW9kdWxlXG5mdW5jdGlvbiBjYW5jZWxCdG4oKSB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kdWxlKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjbG9zZSBtb2R1bGVcbmZ1bmN0aW9uIGNsb3NlTW9kdWxlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kdWxlXCIpO1xuICBjb25zdCBtb2R1bGVCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGUtYmFja2dyb3VuZFwiKTtcbiAgYm9keS5yZW1vdmVDaGlsZChtb2R1bGUpO1xuICBib2R5LnJlbW92ZUNoaWxkKG1vZHVsZUJhY2tncm91bmQpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFBhZ2UgTG9hZCBMaXN0ZW5lcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy9hZGRpbmcgbGlzdGVuZXJzIHRvIHBhZ2UgbG9hZFxuZnVuY3Rpb24gYWxsTGlzdGVuZXJzKCkge1xuICBuZXdQcm9qZWN0QnV0dG9uKCk7XG4gIG5ld1RvRG9CdXR0b24oKTtcbn1cblxuZXhwb3J0IHtcbiAgYWxsTGlzdGVuZXJzLFxuICBjaGVja01hcmtMaXN0ZW5lcixcbiAgZGVsZXRlTGlzdGVuZXIsXG4gIGVkaXRMaXN0ZW5lcixcbiAgZGVsZXRlUHJvamVjdExpc3RlbmVyLFxufTtcbi8qIFxuQWxsbGlzdGVuZXJzIGdvZWQgdG8gcmVuZGVyIHBhZ2VcbiovXG4iLCJpbXBvcnQgZWRpdEltYWdlIGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgY2hlY2tJbWFnZSBmcm9tIFwiLi9pbWFnZXMvY2hlY2suc3ZnXCI7XG5pbXBvcnQgdW5jaGVja0ltYWdlIGZyb20gXCIuL2ltYWdlcy91bmNoZWNrLnN2Z1wiO1xuaW1wb3J0IG1heGltaXplSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2V4cGFuZC5zdmdcIjtcbmltcG9ydCBtaW5pbWl6ZUltYWdlIGZyb20gXCIuL2ltYWdlcy9taW5pbWl6ZS5zdmdcIjtcbmltcG9ydCBjaGVja0dyZWVuSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2NoZWNrR3JlZW4uc3ZnXCI7XG5cbmNvbnN0IGFsbEltYWdlcyA9IHtcbiAgY2hlY2s6IGNoZWNrSW1hZ2UsXG4gIGRlbGV0ZTogZGVsZXRlSW1hZ2UsXG4gIGVkaXQ6IGVkaXRJbWFnZSxcbiAgdW5jaGVjazogdW5jaGVja0ltYWdlLFxuICBtYXhpbWl6ZTogbWF4aW1pemVJbWFnZSxcbiAgbWluaW1pemU6IG1pbmltaXplSW1hZ2UsXG4gIGNoZWNrR3JlZW46IGNoZWNrR3JlZW5JbWFnZSxcbn07XG5cbmV4cG9ydCB7IGFsbEltYWdlcyB9O1xuIiwiaW1wb3J0IHsgY2hlY2tGb3JBY3RpdmVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzVG9kb3NcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0VsZW1lbnQgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XG5pbXBvcnQgeyBhbGxJbWFnZXMgfSBmcm9tIFwiLi9pbWFnZUxvYWRlckFuZExpc3RlbmVyXCI7XG5cbi8vY3JlYXRlcyBhIG5ldyBET00gZWxlbWVudCBmb3IgYSBQcm9qZWN0IGFuZCBnaXZlcyBpdCBuIGltYWdlLi4uIGFuZCBhZGRzIGV2ZW50IGxpc3RlbmVycy4uLiB5ZWFoIGl0IGRvZXMgYSBsb3RcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3ROYXYocHJvamVjdCkge1xuICBjb25zdCB0aGlzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpc0ltYWdlLm9uY2xpY2sgPSBcImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI7XG4gIHRoaXNJbWFnZS5zcmMgPSBtaW5NYXhJbWFnZUxvYWRlcihwcm9qZWN0KTtcblxuICB0aGlzSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0b2dnbGVFeHBhbmRlZFByb2plY3QocHJvamVjdCk7XG4gICAgY29uc3QgY2hhbmdlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGFuZ2VJbWFnZS5zcmMgPSBtaW5NYXhJbWFnZUxvYWRlcihwcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgXCJ1bFwiLFxuICAgIFwicHJvamVjdC1zaG9ydGN1dFwiLFxuICAgIGA8ZGl2IGlkPW5hbWVBbmRJbWFnZT4ke3Byb2plY3QubmFtZX08L2Rpdj5gXG4gICk7XG4gIG5ld1Byb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQodGhpc0ltYWdlKTtcbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3QudG9nZ2xlQWN0aXZlKCk7XG4gICAgaWYgKCFwcm9qZWN0LmV4cGFuZGVkKSB7XG4gICAgICBwcm9qZWN0LnRvZ2dsZUV4cGFuZGVkKHByb2plY3QpO1xuICAgIH1cbiAgICBjaGVja0ZvckFjdGl2ZVByb2plY3QoKTtcbiAgfSk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG4vL2NyZWF0ZXMgRG9tIGVsZW1lbnRzIGZvciBlYWNoIHRvRG8gaW4gdGhlIHByb2plY3QgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgcHJvamVjdCBkb21cbmZ1bmN0aW9uIGFwcGVuZFRvRG9FbGVtZW50c1RvUHJvamVjdChwcm9qZWN0LCBwYXJlbnROb2RlKSB7XG4gIHByb2plY3QudG9Eb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGlmIChwcm9qZWN0LmV4cGFuZGVkKSB7XG4gICAgICBsZXQgbmV3VG9kb05hdkRvbSA9IGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICAgIFwibGlcIixcbiAgICAgICAgYHRvLWRvLXNob3J0Y3V0YCxcbiAgICAgICAgYCR7dG9kby5uYW1lLnRvVXBwZXJDYXNlKCl9YFxuICAgICAgKTtcbiAgICAgIG5ld1RvZG9OYXZEb20gPSBiYWNrZ3JvdW5kQ29sb3JQcmlvcml0eSh0b2RvLCBuZXdUb2RvTmF2RG9tKTtcbiAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgICAgICBuZXdUb2RvTmF2RG9tLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2VUaHJvdWdoXCIpO1xuICAgICAgICBjb25zdCBjaGVjayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjaGVjay5zcmMgPSBhbGxJbWFnZXMuY2hlY2tHcmVlbjtcbiAgICAgICAgbmV3VG9kb05hdkRvbS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICB9XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld1RvZG9OYXZEb20pO1xuICAgIH0gZWxzZSBwYXJlbnROb2RlLmFwcGVuZChcIi5cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiYWNrZ3JvdW5kQ29sb3JQcmlvcml0eSh0b2RvLCB0b2RvRG9tKSB7XG4gIGlmICh0b2RvLnByaW9yaXR5ID49IDAgJiYgdG9kby5wcmlvcml0eSA8PSAzKSB7XG4gICAgdG9kb0RvbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwyNTUsMCwwLjNcIjtcbiAgfVxuICBpZiAodG9kby5wcmlvcml0eSA+PSA0ICYmIHRvZG8ucHJpb3JpdHkgPD0gNikge1xuICAgIHRvZG9Eb20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwxNjUsMCwwLjNcIjtcbiAgfVxuICBpZiAodG9kby5wcmlvcml0eSA+PSA3KSB7XG4gICAgdG9kb0RvbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LDAsMCwwLjNcIjtcbiAgfVxuICByZXR1cm4gdG9kb0RvbTtcbn1cblxuLy9pZiB0aGUgcHJvamVjdCBpcyBhY3RpdmUgbWFrZXMgYSBtaW5pbWl6ZSBhbmQgdmljZSB2ZXJzYVxuZnVuY3Rpb24gbWluTWF4SW1hZ2VMb2FkZXIocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdC5leHBhbmRlZCA/IGFsbEltYWdlcy5taW5pbWl6ZSA6IGFsbEltYWdlcy5tYXhpbWl6ZTtcbn1cblxuLy9jbGVhcnMgdGhlIE5hdiBzbyB0aGUgbmV3bHkgYXBwZW5kZWQgaXRlbXMgZG9udCBvdmVybGFwXG5mdW5jdGlvbiBjbGVhck5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hdi1iYXJcIik7XG4gIHdoaWxlIChuYXYuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBuYXYucmVtb3ZlQ2hpbGQobmF2LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG4vL3JlbmRlcnMgdGhlIG5hdiBiYXIgd2l0aCBhbGwgY3VycmVudCBwcm9qZWN0IHdpdGggYWxsIHRvRG9zXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIGNsZWFyTmF2KCk7XG4gIGNvbnN0IE5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYXYtYmFyXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgRG9tRWxlbWVudCA9IGNyZWF0ZU5ld1Byb2plY3ROYXYocHJvamVjdCk7XG4gICAgYXBwZW5kVG9Eb0VsZW1lbnRzVG9Qcm9qZWN0KHByb2plY3QsIERvbUVsZW1lbnQpO1xuICAgIE5hdkJhci5hcHBlbmRDaGlsZChEb21FbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vZXZlbnQgbGlzdGVuZXIgZm9yIGV4cGFuZGluZyBhbmQgbWluaW1pemluZyB0aGUgbmF2YmFyIHByb2plY3RzXG5mdW5jdGlvbiB0b2dnbGVFeHBhbmRlZFByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0LnRvZ2dsZUV4cGFuZGVkKCk7XG4gIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xufVxuXG5leHBvcnQgeyByZW5kZXJOYXYgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNUb2Rvc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3RWxlbWVudCB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFRoaXMgcGFydCBmb3IgbWFraW5nIG1vZHVsZXNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vY3JlYXRlcyBwb3B1cCBtb2R1bGVcbmZ1bmN0aW9uIG1vZHVsZU1ha2VyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcIm1vZHVsZS1iYWNrZ3JvdW5kXCIsIFwiXCIpKTtcbiAgY29uc3QgbW9kdWxlID0gY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcIm1vZHVsZVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2R1bGUpO1xuICByZXR1cm4gbW9kdWxlO1xufVxuXG4vL21ha2VzIE5ldyBUb0RvIHBvcHVwIG1vZHVsZVxuZnVuY3Rpb24gbmV3VG9Eb01vZHVsZSgpIHtcbiAgY29uc3QgbW9kdWxlID0gbW9kdWxlTWFrZXIoKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtbmFtZVwiLFxuICAgICAgJzxkaXYgY2xhc3M9XCJ0b0RvTmFtZVwiPjxsYWJlbCBmb3I9XCJuYW1lXCI+VG8tRG8gTmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJNb3cgTGF3blwiLz48L2Rpdj48ZGl2IGNsYXNzPVwidG9Eb1Byb2plY3RcIj48bGFiZWwgZm9yPVwicHJvamVjdFRvRG9Nb2R1bGVcIj5Qcm9qZWN0OjwvbGFiZWw+PC9kaXY+J1xuICAgIClcbiAgKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi50b0RvUHJvamVjdFwiKVxuICAgIC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VsZWN0T3B0aW9ucygpKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtc3RlcHNcIixcbiAgICAgICc8bGFiZWwgZm9yPVwic3RlcHNcIj5Uby1EbyBTdGVwczogPHNwYW4gY2xhc3M9XCJzbWFsbFwiPihzZXBhcmF0ZSBzdGVwcyBieSBsaW5lIGJyZWFrKTwvc3Bhbj48L2xhYmVsPjx0ZXh0YXJlYSBuYW1lPVwic3RlcHNcIiBpZD1cInN0ZXBzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJzdGVwIG9uZSAmIzEwc3RlcCB0d28gJiMxMHN0ZXAgdGhyZWUgJiMxMGV0Yy4uXCI+PC90ZXh0YXJlYT4nXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1wcmlvcml0eVwiLFxuICAgICAgJyAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6IDxzcGFuIGNsYXNzPVwic21hbGxcIj4oMC05KTwvc3Bhbj48L2xhYmVsPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIG1pbj1cIjBcIiBtYXg9XCI5XCIgLz4nXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1idXR0b25zXCIsXG4gICAgICAnPGJ1dHRvbiBpZD1cIm9rXCI+T0s8L2J1dHRvbj48ZGl2PjwvZGl2PjxidXR0b24gaWQ9XCJjYW5jZWxcIj5DQU5DRUw8L2J1dHRvbj4nXG4gICAgKVxuICApO1xufVxuXG4vL2VkaXQgYSB0b0RvXG5mdW5jdGlvbiBlZGl0VG9Eb01vZHVsZSh0b0RvVG9FZGl0KSB7XG4gIGNvbnN0IG1vZHVsZSA9IG1vZHVsZU1ha2VyKCk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLW5hbWVcIixcbiAgICAgIGA8ZGl2IGNsYXNzPVwidG9Eb05hbWVcIj48bGFiZWwgZm9yPVwibmFtZVwiPlRvLURvIE5hbWU6PC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHZhbHVlPScke3RvRG9Ub0VkaXQubmFtZX0nLz48L2Rpdj48ZGl2IGNsYXNzPVwidG9Eb1Byb2plY3RcIj48bGFiZWwgZm9yPVwicHJvamVjdFRvRG9Nb2R1bGVcIj5Qcm9qZWN0OjwvbGFiZWw+PC9kaXY+YFxuICAgIClcbiAgKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi50b0RvUHJvamVjdFwiKVxuICAgIC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VsZWN0T3B0aW9ucygpKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtc3RlcHNcIixcbiAgICAgIGA8bGFiZWwgZm9yPVwic3RlcHNcIj5Uby1EbyBTdGVwczogPHNwYW4gY2xhc3M9XCJzbWFsbFwiPihzZXBhcmF0ZSBzdGVwcyBieSBsaW5lIGJyZWFrKTwvc3Bhbj48L2xhYmVsPjx0ZXh0YXJlYSBuYW1lPVwic3RlcHNcIiBpZD1cInN0ZXBzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHt0b0RvVG9FZGl0LnN0ZXBzLmpvaW4oXG4gICAgICAgIFwiXFxuXCJcbiAgICAgICl9PC90ZXh0YXJlYT5gXG4gICAgKVxuICApO1xuICBtb2R1bGUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1vZHVsZS1wcmlvcml0eVwiLFxuICAgICAgYDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OiA8c3BhbiBjbGFzcz1cInNtYWxsXCI+KDAtOSk8L3NwYW4+PC9sYWJlbD48aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIiBtaW49XCIwXCIgbWF4PVwiOVwiIHZhbHVlPScke3RvRG9Ub0VkaXQucHJpb3JpdHl9Jy8+YFxuICAgIClcbiAgKTtcbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtYnV0dG9uc1wiLFxuICAgICAgJzxidXR0b24gaWQ9XCJva1wiPk9LPC9idXR0b24+PGRpdj48L2Rpdj48YnV0dG9uIGlkPVwiY2FuY2VsXCI+Q0FOQ0VMPC9idXR0b24+J1xuICAgIClcbiAgKTtcbn1cblxuLy9tYWtlcyBOZXcgUHJvamVjdCBwb3B1cCBtb2R1bGVcbmZ1bmN0aW9uIG5ld1Byb2plY3RNb2R1bGUoKSB7XG4gIGNvbnN0IG1vZHVsZSA9IG1vZHVsZU1ha2VyKCk7XG5cbiAgbW9kdWxlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU5ld0VsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJtb2R1bGUtbmFtZVwiLFxuICAgICAgJzxsYWJlbCBmb3I9XCJuYW1lXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+ICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiR2VuZXJhbFwiPidcbiAgICApXG4gICk7XG4gIG1vZHVsZS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVOZXdFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibW9kdWxlLWJ1dHRvbnNcIixcbiAgICAgICc8YnV0dG9uIGlkPVwib2tcIj5PSzwvYnV0dG9uPjxkaXY+PC9kaXY+PGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNBTkNFTDwvYnV0dG9uPidcbiAgICApXG4gICk7XG59XG5cbi8vY3JlYXRlcyBhbGwgc2VsZWN0IG9wdGlvbnMgZm9yIGFsbCBhdmFpbGFibGUgcHJvamVjdHNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWxlY3RPcHRpb25zKCkge1xuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0Lm5hbWUgPSBcInByb2plY3RUb0RvTW9kdWxlXCI7XG4gIHNlbGVjdC5pZCA9IFwicHJvamVjdFRvRG9Nb2R1bGVcIjtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGxldCBuZXdPcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld09wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICBuZXdPcHRpb24udGV4dCA9IHByb2plY3QubmFtZTtcbiAgICBpZiAocHJvamVjdC5hY3RpdmUpIHtcbiAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IFwic2VsZWN0ZWRcIjtcbiAgICB9XG5cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3Q7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RNb2R1bGUsIG5ld1RvRG9Nb2R1bGUsIGVkaXRUb0RvTW9kdWxlIH07XG4vKipcbiAqIG5ld1Byb2plY3RzTW9kdWxlIGV4cG9ydHMgdG8gZXZlbnRMaXN0ZW5lcnNcbiAqIG5ld1RvRG9Nb2R1bGUgZXhwb3J0cyB0byBldmVudExpc3RlbmVyc1xuICovXG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdFbGVtZW50IH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuaW1wb3J0IHsgYWxsSW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2VMb2FkZXJBbmRMaXN0ZW5lclwiO1xuaW1wb3J0IHtcbiAgY2hlY2tNYXJrTGlzdGVuZXIsXG4gIGRlbGV0ZUxpc3RlbmVyLFxuICBlZGl0TGlzdGVuZXIsXG59IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLGpzXCI7XG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9uYXZCYXJcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVE9ETyBDTEFTU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0ZXBzLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICh0aGlzLm5hbWUgPSBuYW1lKSxcbiAgICAgICh0aGlzLnN0ZXBzID0gc3RlcHMpLFxuICAgICAgKHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSksXG4gICAgICAodGhpcy5jb21wbGV0ZWQgPSBmYWxzZSksXG4gICAgICAodGhpcy5kZWxldGUgPSBmYWxzZSksXG4gICAgICAodGhpcy5wYXJlbnRQcm9qZWN0ID0gcHJvamVjdCksXG4gICAgICAodGhpcy5lZGl0ID0gZmFsc2UpO1xuICB9XG5cbiAgLy9mb3IgY2xpY2tpbmcgaW5kaXZpZHVhbCBjaGVja21hcmsgaW4gdG9Eby4gbWFrZXMgY29tcGxldGVkIHN0YXR1cyB0cnVlXG4gIGNsaWNrZWRDaGVja21hcmsgPSAoKSA9PiB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPyAodGhpcy5jb21wbGV0ZWQgPSBmYWxzZSkgOiAodGhpcy5jb21wbGV0ZWQgPSB0cnVlKTtcbiAgfTtcblxuICBjbGlja2VkRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMuZGVsZXRlID0gdHJ1ZTtcbiAgfTtcblxuICBjbGlja2VkRWRpdCA9ICgpID0+IHtcbiAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICB9O1xuXG4gIC8vY3JlYXRlcyBEb20gZWxlbWVudCBcInRvLWRvLWRpc3BsYXlcIiB3aXRoIGFsbCBjaGlsZHJlbiBhY2NvcmRpbmcgdG8gdGhpcyBjbGFzc2VzIGtleXNcbiAgQ3JlYXRlRG9tRWxlbWVudCA9ICgpID0+IHtcbiAgICBsZXQgdG9Eb0NhcmQgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwidG8tZG8tZGlzcGxheVwiLCBcIlwiKTtcbiAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb21wbGV0ZWRcIiwgXCJDT01QTEVURURcIikpO1xuICAgIH1cbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuI3N0ZXBBcnJheVRvTGkoKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChzdGVwcyk7XG4gICAgY29uc3QgdG9Eb05hbWUgPSBjcmVhdGVOZXdFbGVtZW50KFwiaDFcIiwgXCJ0by1kby1uYW1lXCIsIGAke3RoaXMubmFtZX1gKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUljb25zID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInByaW9yaXR5LWljb25zXCIsXG4gICAgICBgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+UHJpb3JpdHkgLSAke3RoaXMucHJpb3JpdHl9PC9kaXY+YFxuICAgICk7XG4gICAgdG9Eb0NhcmQgPSB0aGlzLiNwcmlvcml0eUNvbG9yQ2hhbmdlKHRvRG9DYXJkKTtcbiAgICBjb25zdCBpbWFnZXMgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwiaW1hZ2VzXCIsIFwiXCIpO1xuXG4gICAgLy9jaGFuZ2VzIGNoZWNrbWFyayB0byB1bmNoZWNrXG4gICAgaWYgKHRoaXMuY29tcGxldGVkKSB7XG4gICAgICBjb25zdCB1bkNoZWNrTWFyayA9IHRoaXMuI2FkZEltYWdlcyhhbGxJbWFnZXMudW5jaGVjayk7XG4gICAgICB1bkNoZWNrTWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGVja01hcmtMaXN0ZW5lcih0aGlzKTtcbiAgICAgIH0pO1xuICAgICAgaW1hZ2VzLmFwcGVuZENoaWxkKHVuQ2hlY2tNYXJrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hlY2tNYXJrID0gdGhpcy4jYWRkSW1hZ2VzKGFsbEltYWdlcy5jaGVjayk7XG4gICAgICBjaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hlY2tNYXJrTGlzdGVuZXIodGhpcyk7XG4gICAgICB9KTtcbiAgICAgIGltYWdlcy5hcHBlbmRDaGlsZChjaGVja01hcmspO1xuICAgIH1cbiAgICAvLyBlbmQgb2YgdGhpcyBiaWcgZnVuY3Rpb25cblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLiNhZGRJbWFnZXMoYWxsSW1hZ2VzLmVkaXQpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRMaXN0ZW5lcih0aGlzKTtcbiAgICB9KTtcbiAgICBpbWFnZXMuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVCdWl0dG9uID0gdGhpcy4jYWRkSW1hZ2VzKGFsbEltYWdlcy5kZWxldGUpO1xuICAgIGRlbGV0ZUJ1aXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZUxpc3RlbmVyKHRoaXMpO1xuICAgIH0pO1xuICAgIGltYWdlcy5hcHBlbmRDaGlsZChkZWxldGVCdWl0dG9uKTtcblxuICAgIHByaW9yaXR5SWNvbnMuYXBwZW5kQ2hpbGQoaW1hZ2VzKTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eUljb25zKTtcblxuICAgIHJldHVybiB0b0RvQ2FyZDtcbiAgfTtcblxuICAvL1ByaXZhdGUgRnVuY3Rpb25zIEJlbG93IVxuICAjYWRkSW1hZ2VzID0gKElNQUdFKSA9PiB7XG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBJTUFHRTtcbiAgICByZXR1cm4gbmV3SW1hZ2U7XG4gIH07XG5cbiAgI3N0ZXBBcnJheVRvTGkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU3RlcHMgPSBjcmVhdGVOZXdFbGVtZW50KFwib2xcIiwgXCJ0by1kby1zdGVwc1wiLCBcIlwiKTtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIGNvbnN0IHRoaXNTdGVwID0gY3JlYXRlTmV3RWxlbWVudChcImxpXCIsIFwibGlzdEl0ZW1cIiwgc3RlcCk7XG4gICAgICBhbGxTdGVwcy5hcHBlbmRDaGlsZCh0aGlzU3RlcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFN0ZXBzO1xuICB9O1xuICAjcHJpb3JpdHlDb2xvckNoYW5nZSA9ICh0b0RvQ2FyZCkgPT4ge1xuICAgIGlmICh0aGlzLnByaW9yaXR5ID49IDAgJiYgdGhpcy5wcmlvcml0eSA8PSAzKSB7XG4gICAgICB0b0RvQ2FyZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpb3JpdHkgPj0gNCAmJiB0aGlzLnByaW9yaXR5IDw9IDYpIHtcbiAgICAgIHRvRG9DYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpb3JpdHkgPj0gNykge1xuICAgICAgdG9Eb0NhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICByZXR1cm4gdG9Eb0NhcmQ7XG4gIH07XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENMQVNTIFBST0pFQ1RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvRG9zID0gW107XG4gICAgdGhpcy50b0RvRG9tcyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCA9ICgpID0+IHtcbiAgICB0aGlzLmV4cGFuZGVkID09IHRydWUgPyAodGhpcy5leHBhbmRlZCA9IGZhbHNlKSA6ICh0aGlzLmV4cGFuZGVkID0gdHJ1ZSk7XG4gIH07XG4gIHRvZ2dsZUluYWN0aXZlID0gKCkgPT4ge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH07XG4gIHRvZ2dsZUFjdGl2ZSA9ICgpID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRvZ2dsZUluYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9O1xuXG4gIGFkZFRvRG8gPSAobmV3VG9kbykgPT4ge1xuICAgIHRoaXMudG9Eb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICBjbGVhcnRvRG9Eb21zID0gKCkgPT4ge1xuICAgIHRoaXMudG9Eb0RvbXMgPSBbXTtcbiAgfTtcblxuICB0dXJuVG9Eb3NJbnRvRG9tcyA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFydG9Eb0RvbXMoKTtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRoaXMudG9Eb0RvbXMucHVzaCh0b2RvLkNyZWF0ZURvbUVsZW1lbnQoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG8tZG8tZGlzcGxheVwiKTtcbiAgICB3aGlsZSAoZGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlckRvbXMgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICB0aGlzLnR1cm5Ub0Rvc0ludG9Eb21zKCk7XG4gICAgdGhpcy50b0RvRG9tcy5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvLWRvLWRpc3BsYXlcIik7XG4gICAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZChkb20pO1xuICAgIH0pO1xuICAgIHJlbmRlck5hdigpO1xuICB9O1xuXG4gIGRlbGV0ZVRvRG8gPSAoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB0aGlzLnRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmRlbGV0ZSkge1xuICAgICAgICB0aGlzLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXRUb0RvID0gKG5ld1RvRG8pID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBtb3ZlZCA9IHRydWU7XG4gICAgdGhpcy50b0Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5lZGl0KSB7XG4gICAgICAgIGxldCBjaGVja2VkT3JOb3QgPSB0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgbmV3VG9Eby5jb21wbGV0ZWQgPSBjaGVja2VkT3JOb3Q7XG4gICAgICAgIHRoaXMudG9Eb3NbaW5kZXhdID0gbmV3VG9EbztcbiAgICAgICAgbW92ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gICAgaWYgKG1vdmVkKSB7XG4gICAgICB0aGlzLnRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgfVxuICB9O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBmdW5jdGlvbnMgZm9yIHByb2plY3RzIGFuZCB0b2Rvc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRpc3BsYXktaGVhZGVyXCIpO1xuICBsZXQgYW55QWN0aXZlID0gZmFsc2U7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgcHJvamVjdC5kZWxldGVUb0RvKCk7XG4gICAgICBwcm9qZWN0LnR1cm5Ub0Rvc0ludG9Eb21zKCk7XG4gICAgICBwcm9qZWN0LnJlbmRlckRvbXMoKTtcbiAgICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBhbnlBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIC8vbWFrZXMgZmlyc3QgcHJvamVjdCBhY3RpdmUgYWZ0ZXIgZGVsZXRpbmcgaWYgdGhlcmUgaXMgYSBmaXJzdCBwcm9qZWNjdFxuICBpZiAoIWFueUFjdGl2ZSAmJiBwcm9qZWN0c1swXSkge1xuICAgIHByb2plY3RzWzBdLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIGNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xuICB9XG4gIGlmICghYW55QWN0aXZlICYmICFwcm9qZWN0c1swXSkge1xuICAgIGxldCBlbXB0eVByb2plY3QgPSBuZXcgUHJvamVjdChcIkdlbmVyYWxcIik7XG4gICAgcHJvamVjdHMucHVzaChlbXB0eVByb2plY3QpO1xuICAgIGVtcHR5UHJvamVjdC50b2dnbGVBY3RpdmUoKTtcbiAgICBjaGVja0ZvckFjdGl2ZVByb2plY3QoKTtcbiAgfVxuXG4gIHJlbmRlck5hdigpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBjdXJyZW50bHkgdGhpcyBpcyBqdXN0IGZvciBidWlsZGluZyBzaXRlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5sZXQgbW93TGF3biA9IG5ldyB0b0RvKFxuICBcIk1vdyBMYXduXCIsXG4gIFtcIlByZXAgTGF3biBNb3dlclwiLCBcIk1vdyBMYXduXCIsIFwiRGlzcG9zZSBvZiBHcmFzc1wiLCBcIkNsZWFuIFVwXCJdLFxuICA2LFxuICBcIkdlbmVyYWxcIlxuKTtcbmxldCBtb3dMYXduMiA9IG5ldyB0b0RvKFxuICBcIk1vdyBMYXduXCIsXG4gIFtcIlByZXAgTGF3biBNb3dlclwiLCBcIk1vdyBMYXduXCIsIFwiRGlzcG9zZSBvZiBHcmFzc1wiLCBcIkNsZWFuIFVwXCJdLFxuICA4LFxuICBcIkdlbmVyYWxcIlxuKTtcbmxldCBtb3dMYXduMyA9IG5ldyB0b0RvKFxuICBcIk1vdyBMYXduXCIsXG4gIFtcIlByZXAgTGF3biBNb3dlclwiLCBcIk1vdyBMYXduXCIsIFwiRGlzcG9zZSBvZiBHcmFzc1wiLCBcIkNsZWFuIFVwXCJdLFxuICAxLFxuICBcIkdlbmVyYWxcIlxuKTtcbmxldCBtb3dMYXduNCA9IG5ldyB0b0RvKFxuICBcIk1vdyBMYXduXCIsXG4gIFtcIlByZXAgTGF3biBNb3dlclwiLCBcIk1vdyBMYXduXCIsIFwiRGlzcG9zZSBvZiBHcmFzc1wiLCBcIkNsZWFuIFVwXCJdLFxuICAxLFxuICBcIkdlbmVyYWxcIlxuKTtcbmxldCBhbm90aGVyVG9EbyA9IG5ldyB0b0RvKFxuICBcInN0dWZmXCIsXG4gIFtcInRoaW5nXCIsIFwiYW5vdGhlciB0aGluZ1wiLCBcIm9rIHRoaXMgaXMgaXRcIl0sXG4gIDUsXG4gIFwiUmFuZG9tXCJcbik7XG5cbmxldCBSYW5kb20gPSBuZXcgUHJvamVjdChcIlJhbmRvbVwiKTtcblJhbmRvbS5hZGRUb0RvKGFub3RoZXJUb0RvKTtcblJhbmRvbS5hZGRUb0RvKG1vd0xhd240KTtcbmxldCBnZW5lcmFsID0gbmV3IFByb2plY3QoXCJHZW5lcmFsXCIpO1xubGV0IEdlbmVyYWwgPSBuZXcgUHJvamVjdChcIkdlbmVyYWxcIik7XG5HZW5lcmFsLmFkZFRvRG8obW93TGF3bik7XG5HZW5lcmFsLmFkZFRvRG8obW93TGF3bjIpO1xuR2VuZXJhbC5hZGRUb0RvKG1vd0xhd24zKTtcblxubGV0IHByb2plY3RzID0gW0dlbmVyYWxdO1xucHJvamVjdHMucHVzaChSYW5kb20pO1xuXG5leHBvcnQgeyBHZW5lcmFsLCBwcm9qZWN0cywgdG9EbywgUHJvamVjdCwgY2hlY2tGb3JBY3RpdmVQcm9qZWN0IH07XG4vKlxudG9EbyBnb2VzIHRvIGV2ZW50TGlzdGVuZXJzXG5Qcm9qZWN0IGdvZXMgdG8gZXZlbnRMaXN0ZW5lcnNcbmdlbmVyYWwgdG8gcmVuZGVyUGFnZVxuKi9cbiIsImltcG9ydCB7IGRlbGV0ZVByb2plY3RMaXN0ZW5lciB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLGpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0VsZW1lbnQodHlwZSwgYWRkQ2xhc3MsIGlubmVySFRNTCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGFkZENsYXNzKTtcbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG4vL2NyZWF0ZXMgaGVhZGVyIGFuZCBjYXB0aW9uXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJcIik7XG4gIGNvbnN0IGNhcHRpb24gPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJjYXB0aW9uXCIsXG4gICAgJzxoMSBpZD1cInBhZ2VUaXRsZVwiPlRvLURvLU1lPC9oMT4nXG4gICk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjYXB0aW9uKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy9jcmVhdGVzIG5hdiBiYXIgYW5kIGJ1dHRvbnNcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwibmF2XCIsXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJ1dHRvbnNcIj48YnV0dG9uIGlkPVwibmV3UHJvamVjdFwiPk5ldyBQcm9qZWN0PC9idXR0b24+PGJ1dHRvbiBpZD1cIm5ld1RvRG9cIj5OZXcgVG8tRG88L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwicHJvamVjdC1uYXYtYmFyXCI8L2Rpdj5gXG4gICk7XG4gIHJldHVybiBuYXY7XG59XG5cbi8vY3JlYXRlcyBEaXNwbGF5XG5mdW5jdGlvbiBjcmVhdGVEaXNwbGF5KCkge1xuICBjb25zdCBkaXNwbGF5ID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiZGlzcGxheVwiLFxuICAgICc8ZGl2IGNsYXNzPVwicHJvamVjdC1kaXNwbGF5XCI+PGgxIGNsYXNzPVwicHJvamVjdC1kaXNwbGF5LWhlYWRlclwiPkdlbmVyYWw8L2gxPjwvZGl2PjxkaXYgY2xhc3M9XCJkaXNwbGF5LXRvLWRvLWRpc3BsYXlcIj48L2Rpdj4nXG4gICk7XG4gIHJldHVybiBkaXNwbGF5O1xufVxuXG4vL2NyZWF0ZXMgZm9vdGVyIGFuZCBhZGRzIHRleHRcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiZm9vdGVyXCIsXG4gICAgXCImY29weSBUaGUgRGF2ZXIgZ2V0cyB0byBtb3ZlIHRvIENvc3RhUmljYSBwcm9qZWN0IDIwMjJcIlxuICApO1xuICByZXR1cm4gZm9vdGVyO1xufVxuLy8gYWRkcyBwcm9qZWN0IGRlbGV0ZSBidXR0b24gdG8gZGlzcGxheVxuZnVuY3Rpb24gcHJvamVjdERlbGV0ZUJ0bigpIHtcbiAgY29uc3QgYnRuSG91c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGlzcGxheVwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlkID0gXCJybVByb2plY3RcIjtcbiAgYnRuLmlubmVySFRNTCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0TGlzdGVuZXIpO1xuICBidG5Ib3VzZS5hcHBlbmRDaGlsZChidG4pO1xufVxuXG4vL3JlbmRlcnMgdGhlIHBhZ2UsIGV4cG9ydCB0aGlzIGZ1bmN0aW9uIHRvIGluZGV4IHRvIHJlbmRlciBwYWdlXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIsIFwiXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheSgpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgcHJvamVjdERlbGV0ZUJ0bigpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQYWdlLCBjcmVhdGVOZXdFbGVtZW50IH07XG4vL3JlbmRlciBwYWdlIHVzZWQgaW4gaW5kZXguaHRtbFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xuaW1wb3J0IHsgYWxsTGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMsanNcIjtcbmltcG9ydCB7IGNoZWNrRm9yQWN0aXZlUHJvamVjdCwgR2VuZXJhbCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1RvZG9zXCI7XG5cbi8vcmVuZGVycyBnZW5lcmFsIHBhZ2UgbGF5b3V0XG5yZW5kZXJQYWdlKCk7XG5hbGxMaXN0ZW5lcnMoKTtcblxuLy91c2luZyB0aGlzIGZvciBwYWdlbG9hZCBmb3Igbm93LlxuR2VuZXJhbC50b2dnbGVBY3RpdmUoKTtcbmNoZWNrRm9yQWN0aXZlUHJvamVjdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
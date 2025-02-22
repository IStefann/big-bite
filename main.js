/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Grechen+Fuemen&family=Potta+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 1550px) {\n    html{\n        font-size: 14px;\n        }\n  }\n\n  @media screen and (max-width: 1350px) {\n    html{\n        font-size: 12px;\n        }\n  }\n\n  @media screen and (max-width: 1150px) {\n    html{\n        font-size: 10px;\n        }\n  }\n  @media screen and (max-width: 950px) {\n    html{\n        font-size: 8px;\n        }\n  }\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.background {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    height: 100vh;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n    position: fixed;\n    top: 0;\n    z-index: -1;\n    border: none;\n}\n\n.header>nav {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    gap: 1.5rem;\n    padding-top: 1.5rem;\n}\n\nbutton {\n    background-color: transparent;\n    font-size: 2.3rem;\n    border: none;\n    color: white;\n    width: 12rem;\n    padding: 10px 0;\n    font-family: \"Potta One\", serif;\n}\n\n.active {\n    border-bottom: #BA7931 solid 2px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    transition: color 0.5s;\n    color: #BA7931;\n}\n\n.mainTxt {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    color: #BA7931;\n    margin-top: 1.5rem;\n    animation: animation 0.5s ease-in-out;\n}\n\n.mainTxt>h1 {\n    font-size: 7rem;\n    font-family: \"Potta One\", serif;\n    line-height: 7rem;\n}\n\n.mainTxt>p {\n    font-size: 3rem;\n    font-family: \"Grechen Fuemen\", serif;\n    line-height: 3rem;\n}\n\n.blur:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(10px);\n    z-index: -1;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    gap: 10rem;\n}\n\n.center {\n    align-items: center;\n}\n#content{\n    height: 100%;\n}\n.card, .cardContact {\n    background-color: #000000;\n    opacity: 0.8;\n    color: #BA7931;\n    padding: 3rem;\n    border-radius: 25px;\n    width: 30rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 2rem;\n    box-shadow: 0 0 25px #BA7931;\n}\n\n.card>div:first-child {\n    align-self: center;\n}\n\n.bolder {\n    font-family: \"Potta One\", serif;\n    font-size: 2.3rem;\n    align-self: flex-end;\n\n}\n\n.lighter {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1.2rem;\n}\n\nli>img {\n    width: 30rem;\n    filter: drop-shadow(0 0 15px orange);\n}\n\nul {\n    list-style-type: none;\n}\n\n.arrow {\n    color: #BA7931;\n    font-weight: bold;\n    background-color: #000000;\n    cursor: pointer;\n    font-size: 6rem;\n    padding: 0.2rem 1.7rem;\n    border-radius: 10px;\n    transition: color 0.5s ease-out;\n    transition: background-color 0.5s ease-out;\n    position: absolute;\n    top: 50%;\n\n}\n\n.left {\n    left: 2rem;\n}\n\n.right {\n    right: 2rem;\n}\n\n.arrow:hover {\n    opacity: 0.8;\n    color: #000000;\n    background-color: #BA7931;\n    transition: all 0.5s ease-in-out;\n}\n\n.slide {\n    display: none;\n}\n\n@keyframes animation {\n    from {\n        opacity: 0;\n        transform: translateY(-15px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n\n    }\n}\n\n.slide[data-active] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    gap: 10rem;\n    animation: animation 0.5s ease-in-out;\n}\n\n.cardContact{\n    animation: animation 0.5s ease-in-out;\n    width: 50rem;\n    height: 40rem;\n    padding:2rem;\n}\n\niframe{\n    border-radius: 20px;\n    width: 40rem;\n}\n\n.contactTitle{\n    font-size: 5rem;\n    align-self: center;\n    font-weight: bold;\n    font-family: \"Potta One\", serif;\n}\n.cardContact > .bolder{\n    font-size: 1.5rem;\n    align-self: center;\n}\n\n.cardContact > .lighter{\n    font-size: 1.3rem;\n    align-self: center;\n}\n\na{\n    text-decoration: none;\n    color:black;\n\n}\na:hover, footer>img:hover{\n    color: #BA7931;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    font-family: \"Potta one\", sans-serif;\n    cursor: pointer;\n}\nfooter>img{\n    width: 3.2rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acfbc7bba551ecc0f554.jpg\";\n\n//# sourceURL=webpack:///./src/background.jpg?");

/***/ }),

/***/ "./src/bacon.png":
/*!***********************!*\
  !*** ./src/bacon.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a72c366524f349e7849.png\";\n\n//# sourceURL=webpack:///./src/bacon.png?");

/***/ }),

/***/ "./src/chickenBite.png":
/*!*****************************!*\
  !*** ./src/chickenBite.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"438df8a478fb0f30accc.png\";\n\n//# sourceURL=webpack:///./src/chickenBite.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact(){\nconst content = document.querySelector(\"#content\");\nconst background = document.querySelector(\".background\");\n   \nif(background.className !== \"blur\")\nbackground.classList.add(\"blur\");\n\nconst container = document.createElement(\"div\");\nconst cardDiv = document.createElement(\"div\");\nconst title = document.createElement(\"div\");\nconst iframe = document.createElement(\"iframe\");\nconst location = document.createElement(\"div\");\nconst number = document.createElement(\"div\");\n\ncontainer.classList.add(\"container\");\ncardDiv.classList.add(\"cardContact\");\ntitle.classList.add(\"contactTitle\");\ntitle.textContent = \"Come visit us!\";\nlocation.classList.add(\"bolder\");\nlocation.textContent = \"📍 450 Fremont St #130, Las Vegas, NV 89101, United States\";\nnumber.classList.add(\"lighter\");\nnumber.textContent = \"☎️ +1 702-706-7568\";\niframe.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4172.8855523909515!2d-115.14332632349215!3d36.16946230299904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c3755b686f5d%3A0x3fefeeb2f20591b9!2sHeart%20Attack%20Grill!5e1!3m2!1sen!2srs!4v1740265745616!5m2!1sen!2srs\";\niframe.width = \"600\";\niframe.height = \"450\";\niframe.style.border = \"0\";\niframe.allowFullscreen = \"\";\niframe.loading = \"lazy\";\niframe.referrerPolicy = \"no-referrer-when-downgrade\";\n\ncontent.appendChild(container);\ncontainer.appendChild(cardDiv);\ncardDiv.appendChild(title);\ncardDiv.appendChild(iframe);\ncardDiv.appendChild(location);\ncardDiv.appendChild(number);\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/doubleDeck.png":
/*!****************************!*\
  !*** ./src/doubleDeck.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4ffa0848c8998287d1d.png\";\n\n//# sourceURL=webpack:///./src/doubleDeck.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n \n\n\n\n\nconst buttonHome = document.querySelector(\"#home\");\nconst buttonMenu = document.querySelector(\"#menu\");\nconst buttonContact = document.querySelector(\"#contact\");\nconst contentDiv = document.querySelector(\"#content\");\n\nconst buttons = document.querySelectorAll(\"nav>button\");\n\nbuttons.forEach(button => {\n    button.addEventListener(\"click\", () =>{\n        buttons.forEach(b => b.classList.remove(\"active\"));\n        removeChildren();\n        button.classList.add(\"active\");\n        if(button.id === \"home\") (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n        if(button.id === \"menu\") (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuLoad)();\n        if(button.id === \"contact\") (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\n    })\n});\n\nfunction removeChildren()\n{\n    while (contentDiv.firstChild) {\n        contentDiv.removeChild(contentDiv.firstChild);\n    }\n}\n\n(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoad: () => (/* binding */ homeLoad)\n/* harmony export */ });\nfunction homeLoad()\n{\n    const contentDiv = document.querySelector(\"#content\");\n    const background = document.querySelector(\".background\");\n   \n    background.classList.remove(\"blur\");\n\n    const mainDiv = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    const belowTitle = document.createElement(\"p\");\n    const belowTitle2 = document.createElement(\"p\");\n\n    mainDiv.classList.add(\"mainTxt\");\n\n    title.textContent = \"BIG BITE\";\n    belowTitle.textContent = \"Best burgers in town\";\n    belowTitle2.innerHTML = 'since <span style=\"font-size: 2rem;\">1997.</span></p>'\n    contentDiv.appendChild(mainDiv);\n    mainDiv.appendChild(title);\n    mainDiv.appendChild(belowTitle);\n    mainDiv.appendChild(belowTitle2);\n}\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _doubleDeck_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doubleDeck.png */ \"./src/doubleDeck.png\");\n/* harmony import */ var _chickenBite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chickenBite.png */ \"./src/chickenBite.png\");\n/* harmony import */ var _bacon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bacon.png */ \"./src/bacon.png\");\n/* harmony import */ var _wrap_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrap.png */ \"./src/wrap.png\");\n/* harmony import */ var _shwarma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shwarma.png */ \"./src/shwarma.png\");\n\n\n\n\n\n\nfunction menuLoad() {\n    const content = document.querySelector(\"#content\");\n    const background = document.querySelector(\".background\");\n   \n    if(background.className !== \"blur\")\n    background.classList.add(\"blur\");\n\n    const arrowLeft = document.createElement(\"div\");\n    const arrowRight = document.createElement(\"div\");\n    arrowLeft.innerHTML = \"&lt;\";\n    arrowRight.innerHTML = \"&gt;\";\n    arrowLeft.classList.add(\"arrow\", \"left\");\n    arrowRight.classList.add(\"arrow\", \"right\");\n    arrowLeft.dataset.carouselButton = \"prev\";\n    arrowRight.dataset.carouselButton = \"next\";\n\n    content.classList.add(\"center\");\n    content.appendChild(arrowLeft);\n    content.appendChild(arrowRight);\n\n    const list = document.createElement(\"ul\");\n    list.classList.add(\"container\");\n    list.setAttribute(\"data-slides\", \"\");\n\n    for (let i = 0; i < 5; i++) {\n        const li = document.createElement(\"li\");\n        li.classList.add(\"slide\");\n        list.appendChild(li);\n\n        const img = document.createElement(\"img\");\n        li.appendChild(img);\n\n        const card = document.createElement(\"div\");\n        card.classList.add(\"card\");\n        li.appendChild(card);\n\n        const header = document.createElement(\"div\");\n        header.classList.add(\"bolder\");\n        card.appendChild(header);\n\n        const underHeader = document.createElement(\"div\");\n        underHeader.classList.add(\"lighter\");\n        card.appendChild(underHeader);\n\n        const price = document.createElement(\"p\");\n        price.classList.add(\"bolder\");\n        card.appendChild(price);\n    }\n    content.appendChild(list);\n\n    const foodList = [...list.children];\n    foodList[0].setAttribute('data-active', 'true');\n    foodList[0].querySelector(\"img\").src = _doubleDeck_png__WEBPACK_IMPORTED_MODULE_0__;\n    foodList[0].querySelector(\"img\").alt = \"Double Decker Burger\";\n    foodList[0].querySelector(\".bolder\").textContent = \"The Double Decker\";\n    foodList[0].querySelector(\".lighter\").textContent = \"Burger featuring two juicy beef patties, melted cheese, fresh lettuce, pickles, and a tangy sauce, all sandwiched between a soft, toasted bun.\";\n    foodList[0].querySelector(\"p\").textContent = \"7.99$\";\n\n    foodList[1].querySelector(\"img\").src = _chickenBite_png__WEBPACK_IMPORTED_MODULE_1__;\n    foodList[1].querySelector(\"img\").alt = \"Chicken Bite Burger\";\n    foodList[1].querySelector(\".bolder\").textContent = \"Chicken Bite\";\n    foodList[1].querySelector(\".lighter\").textContent = \"A delicious fried chicken burger featuring a crispy, golden fried chicken patty, crunchy pickles, fresh lettuce, and tangy mayo, all in a soft bun.\";\n    foodList[1].querySelector(\"p\").textContent = \"5.99$\";\n\n    foodList[2].querySelector(\"img\").src = _bacon_png__WEBPACK_IMPORTED_MODULE_2__;\n    foodList[2].querySelector(\"img\").alt = \"Bacon DELUXE Burger\";\n    foodList[2].querySelector(\".bolder\").textContent = \"Bacon DELUXE Burger\";\n    foodList[2].querySelector(\".lighter\").textContent = \"A tasty burger featuring a juicy beef patty, crispy bacon, fresh lettuce, and creamy mayo, all in a soft bun.\";\n    foodList[2].querySelector(\"p\").textContent = \"8.99$\";\n\n    foodList[3].querySelector(\"img\").src = _wrap_png__WEBPACK_IMPORTED_MODULE_3__;\n    foodList[3].querySelector(\"img\").alt = \"Wrap it Up\";\n    foodList[3].querySelector(\".bolder\").textContent = \"Wrap it Up\";\n    foodList[3].querySelector(\".lighter\").textContent = \"This wrap includes grilled chicken, crisp lettuce, fresh tomatoes, and a light dressing, wrapped in a soft tortilla.\";\n    foodList[3].querySelector(\"p\").textContent = \"5.50$\";\n\n    foodList[4].querySelector(\"img\").src = _shwarma_png__WEBPACK_IMPORTED_MODULE_4__;\n    foodList[4].querySelector(\"img\").alt = \"Chicken Plate\";\n    foodList[4].querySelector(\".bolder\").textContent = \"Sizzling Chicken Plate\";\n    foodList[4].querySelector(\".lighter\").textContent = \"Pieces of chicken served with onions, crunchy pickles, and fresh tomatoes, all on a sizzling plate.\";\n    foodList[4].querySelector(\"p\").textContent = \"8.99$\";\n\n    const buttons = document.querySelectorAll(\".arrow\");\n    buttons.forEach(button => {\n        button.addEventListener(\"click\", () => {\n            const value = button.dataset.carouselButton === 'next' ? 1 : -1;\n            const slides = document.querySelector(\"[data-slides]\");\n\n            const activeSlide = slides.querySelector('[data-active]');\n            let newIndex = [...slides.children].indexOf(activeSlide) + value;\n            if (newIndex < 0) newIndex = slides.children.length - 1;\n            if (newIndex > slides.children.length - 1) newIndex = 0;\n\n            slides.children[newIndex].dataset.active = true;\n            delete activeSlide.dataset.active;\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/shwarma.png":
/*!*************************!*\
  !*** ./src/shwarma.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"faaa3924284a75e2c8c5.png\";\n\n//# sourceURL=webpack:///./src/shwarma.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/wrap.png":
/*!**********************!*\
  !*** ./src/wrap.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d25306ac152ecd991fb8.png\";\n\n//# sourceURL=webpack:///./src/wrap.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
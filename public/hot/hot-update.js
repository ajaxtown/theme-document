exports.id = "main";
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.dev.js */ \"./config/config.dev.js\");\n/* harmony import */ var _config_prod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.prod.js */ \"./config/config.prod.js\");\n// import path from \"path\";\n// require(\"dotenv\").config({ path: path.resolve(process.cwd(), \"/../.env\") });\n\n\n\nconst env =\n    \"undefined\" !== typeof window ? window.NODE_ENV : \"dev\";\n\nconst configFile = env === \"dev\" ? _config_dev_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _config_prod_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst config = new function(configFile) {\n    this.rootUrl = configFile.rootUrl;\n    this.apiUrl = configFile.apiUrl;\n    this.uploadUrl = configFile.uploadUrl;\n    this.appPort = configFile.appPort;\n    this.apiPort = configFile.apiPort;\n    this.defaultTitle = \"Untitled\";\n    this.defaultSlug = \"ajaxtown\";\n    this.adminPath = \"/admin\";\n    this.itemsPerPage = 6;\n    this.baseName = configFile.baseName;\n}(configFile);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n//# sourceURL=webpack://server/./config/index.js?");

/***/ }),

/***/ "path":
false

};
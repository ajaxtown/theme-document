webpackHotUpdate("client/themes/document/public/dist/client",{

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.dev.js */ \"./config/config.dev.js\");\n/* harmony import */ var _config_prod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.prod.js */ \"./config/config.prod.js\");\n// import path from \"path\";\n// require(\"dotenv\").config({ path: path.resolve(process.cwd(), \"/../.env\") });\n\n\n\nconst env =\n    \"undefined\" !== typeof window ? window.NODE_ENV : \"dev\";\n\nconst configFile = env === \"dev\" ? _config_dev_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _config_prod_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst config = new function(configFile) {\n    this.rootUrl = configFile.rootUrl;\n    this.apiUrl = configFile.apiUrl;\n    this.uploadUrl = configFile.uploadUrl;\n    this.appPort = configFile.appPort;\n    this.apiPort = configFile.apiPort;\n    this.defaultTitle = \"Untitled\";\n    this.defaultSlug = \"ajaxtown\";\n    this.adminPath = \"/admin\";\n    this.itemsPerPage = 6;\n    this.baseName = configFile.baseName;\n}(configFile);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQUE7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIuL2NvbmZpZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG4vLyByZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZyh7IHBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIi8uLi8uZW52XCIpIH0pO1xuaW1wb3J0IGRldiBmcm9tIFwiLi9jb25maWcuZGV2LmpzXCI7XG5pbXBvcnQgcHJvZHVjdGlvbiBmcm9tIFwiLi9jb25maWcucHJvZC5qc1wiO1xuXG5jb25zdCBlbnYgPVxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cuTk9ERV9FTlYgOiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxuY29uc3QgY29uZmlnRmlsZSA9IGVudiA9PT0gXCJkZXZcIiA/IGRldiA6IHByb2R1Y3Rpb247XG5cbmNvbnN0IGNvbmZpZyA9IG5ldyBmdW5jdGlvbihjb25maWdGaWxlKSB7XG4gICAgdGhpcy5yb290VXJsID0gY29uZmlnRmlsZS5yb290VXJsO1xuICAgIHRoaXMuYXBpVXJsID0gY29uZmlnRmlsZS5hcGlVcmw7XG4gICAgdGhpcy51cGxvYWRVcmwgPSBjb25maWdGaWxlLnVwbG9hZFVybDtcbiAgICB0aGlzLmFwcFBvcnQgPSBjb25maWdGaWxlLmFwcFBvcnQ7XG4gICAgdGhpcy5hcGlQb3J0ID0gY29uZmlnRmlsZS5hcGlQb3J0O1xuICAgIHRoaXMuZGVmYXVsdFRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgIHRoaXMuZGVmYXVsdFNsdWcgPSBcImFqYXh0b3duXCI7XG4gICAgdGhpcy5hZG1pblBhdGggPSBcIi9hZG1pblwiO1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gNjtcbiAgICB0aGlzLmJhc2VOYW1lID0gY29uZmlnRmlsZS5iYXNlTmFtZTtcbn0oY29uZmlnRmlsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
false

})
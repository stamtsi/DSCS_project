(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/views/__backoffice/Home.js":
/*!*************************************************!*\
  !*** ./resources/js/views/__backoffice/Home.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ \"./resources/js/views/__backoffice/layouts/index.js\");\n\n\n\n\n\nfunction Home(props) {\n  var primaryAction = {\n    text: 'Export Stats',\n    clicked: function clicked() {\n      return alert('Exporting your awesome stats...');\n    }\n  };\n  var tabs = [{\n    name: 'Overview',\n    active: true\n  }, {\n    name: 'Monthly',\n    active: false\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"Master\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    pageTitle: Lang.get('navigation.dashboard'),\n    primaryAction: primaryAction,\n    tabs: tabs\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], null, \"There is no place like home\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./resources/js/views/__backoffice/Home.js?");

/***/ }),

/***/ "./resources/js/views/__backoffice/layouts/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/views/__backoffice/layouts/index.js ***!
  \**********************************************************/
/*! exports provided: Clean, Master, Settings, Slave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clean\", function() { return Clean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Master\", function() { return Master; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slave\", function() { return Slave; });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\n\nvar Clean = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Clean */ \"./resources/js/views/__backoffice/layouts/Clean.js\"));\n});\nvar Master = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./Master */ \"./resources/js/views/__backoffice/layouts/Master.js\"));\n});\nvar Settings = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./Settings */ \"./resources/js/views/__backoffice/layouts/Settings.js\"));\n});\nvar Slave = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./Slave */ \"./resources/js/views/__backoffice/layouts/Slave.js\"));\n});\n\n//# sourceURL=webpack:///./resources/js/views/__backoffice/layouts/index.js?");

/***/ })

}]);
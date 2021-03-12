(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/ui/Modal.js":
/*!**********************************!*\
  !*** ./resources/js/ui/Modal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals */ \"./resources/js/ui/Modals/index.js\");\n\n\n\n\n\nvar Modal = function Modal(props) {\n  var type = props.type,\n      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(props, [\"type\"]);\n\n  switch (type) {\n    case 'confirmation':\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__[\"Confirmation\"], props);\n      break;\n  }\n};\n\nModal.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['confirmation']),\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element]).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./resources/js/ui/Modal.js?");

/***/ }),

/***/ "./resources/js/ui/Modals/Confirmation.js":
/*!************************************************!*\
  !*** ./resources/js/ui/Modals/Confirmation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\n\n\n\nvar Confirmation = function Confirmation(props) {\n  var title = props.title,\n      body = props.body,\n      confirmText = props.confirmText,\n      confirmed = props.confirmed,\n      cancelText = props.cancelText,\n      cancelled = props.cancelled;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Dialog\"], {\n    open: true,\n    onClose: cancelled,\n    \"aria-labelledby\": \"alert-dialog-title\",\n    \"aria-describedby\": \"alert-dialog-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"DialogTitle\"], {\n    id: \"alert-dialog-title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"DialogContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"DialogContentText\"], {\n    id: \"alert-dialog-description\"\n  }, body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"DialogActions\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: cancelled,\n    color: \"primary\"\n  }, cancelText ? cancelText : Lang.get('actions.cancel')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: confirmed,\n    color: \"secondary\",\n    autoFocus: true\n  }, confirmText ? confirmText : Lang.get('actions.confirm'))));\n};\n\nConfirmation.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  confirmText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  confirmed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  cancelled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirmation);\n\n//# sourceURL=webpack:///./resources/js/ui/Modals/Confirmation.js?");

/***/ }),

/***/ "./resources/js/ui/Modals/index.js":
/*!*****************************************!*\
  !*** ./resources/js/ui/Modals/index.js ***!
  \*****************************************/
/*! exports provided: Confirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confirmation */ \"./resources/js/ui/Modals/Confirmation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Confirmation\", function() { return _Confirmation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/ui/Modals/index.js?");

/***/ })

}]);
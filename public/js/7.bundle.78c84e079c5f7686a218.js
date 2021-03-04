(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/helpers/String.js":
/*!****************************************!*\
  !*** ./resources/js/helpers/String.js ***!
  \****************************************/
/*! exports provided: uppercaseFirst, limit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uppercaseFirst\", function() { return uppercaseFirst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"limit\", function() { return limit; });\n/**\n * Converts the first character of a string to uppercase.\n *\n * @param {string} string\n *\n * @return {string}\n */\nfunction uppercaseFirst(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n/**\n * Trim the string based on number of characters.\n *\n * @param {string} string\n * @param {number} count\n * @param {string} delimiter\n *\n * @return {string}\n */\n\nfunction limit(string, count) {\n  var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';\n  return string.slice(0, count) + (string.length > count ? delimiter : '');\n}\n\n//# sourceURL=webpack:///./resources/js/helpers/String.js?");

/***/ }),

/***/ "./resources/js/ui/Breadcrumbs.js":
/*!****************************************!*\
  !*** ./resources/js/ui/Breadcrumbs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ \"./node_modules/@material-ui/lab/index.es.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/index.es.js\");\n/* harmony import */ var _helpers_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/Navigation */ \"./resources/js/helpers/Navigation.js\");\n/* harmony import */ var _helpers_String__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/String */ \"./resources/js/helpers/String.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction Breadcrumbs(props) {\n  var classes = props.classes,\n      segments = props.segments,\n      blacklistedSegments = props.blacklistedSegments,\n      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"classes\", \"segments\", \"blacklistedSegments\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__[\"Breadcrumbs\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    \"arial-label\": \"Breadcrumb\"\n  }, other), segments.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    color: \"inherit\",\n    component: function component(linkProps) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, linkProps, {\n        to: _helpers_Navigation__WEBPACK_IMPORTED_MODULE_8__[\"route\"]('backoffice.home')\n      }));\n    },\n    className: classes.breadcrumb\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"Home\"], {\n    className: classes.icon\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"Home\"], {\n    className: classes.icon\n  }), segments.map(function (segment, key) {\n    var renderText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n      key: key,\n      className: classes.breadcrumb\n    }, _helpers_String__WEBPACK_IMPORTED_MODULE_9__[\"uppercaseFirst\"](segment)); // Make a blacklisted segment plain text\n\n    if (blacklistedSegments.indexOf(segment) > -1) {\n      return renderText;\n    } // The last segment should be plain text\n\n\n    if (key + 1 === segments.length) {\n      return renderText;\n    } // Make numeric segment hidden\n\n\n    if (!isNaN(parseInt(segment))) {\n      return null;\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n      key: key,\n      color: \"inherit\",\n      component: function component(linkProps) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, linkProps, {\n          to: '/' + segments.filter(function (s, i) {\n            return i <= segments.indexOf(segment);\n          }).join('/')\n        }));\n      },\n      className: classes.breadcrumb\n    }, _helpers_String__WEBPACK_IMPORTED_MODULE_9__[\"uppercaseFirst\"](segment));\n  }));\n}\n\nBreadcrumbs.propTypes = {\n  segments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,\n  blacklistedSegments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array\n};\nBreadcrumbs.defaultProps = {\n  blacklistedSegments: []\n};\n\nvar styles = function styles(theme) {\n  return {\n    breadcrumb: {\n      display: 'flex'\n    },\n    icon: {\n      marginRight: theme.spacing.unit / 2,\n      width: 20\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])(styles)(Breadcrumbs));\n\n//# sourceURL=webpack:///./resources/js/ui/Breadcrumbs.js?");

/***/ })

}]);
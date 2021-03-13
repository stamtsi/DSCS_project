(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/ui/Snackbar.js":
/*!*************************************!*\
  !*** ./resources/js/ui/Snackbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\n\n\n\n\n\nvar icons = {\n  success: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"CheckCircle\"],\n  warning: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"Warning\"],\n  error: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"Error\"],\n  info: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"Info\"]\n};\n\nvar Snackbar = function Snackbar(props) {\n  var classes = props.classes,\n      className = props.className,\n      type = props.type,\n      body = props.body,\n      closed = props.closed,\n      action = props.action,\n      actionText = props.actionText,\n      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"classes\", \"className\", \"type\", \"body\", \"closed\", \"action\", \"actionText\"]);\n\n  var Icon = icons[type];\n  var primaryAction = null;\n\n  if (action && actionText) {\n    primaryAction = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      key: \"undo\",\n      color: \"inherit\",\n      size: \"small\",\n      onClick: action\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n      className: classes.text\n    }, actionText));\n  }\n\n  var actions = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], {\n    key: \"close\",\n    \"aria-label\": \"Close\",\n    color: \"inherit\",\n    className: classes.close,\n    onClick: closed\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"Close\"], {\n    className: classes.icon\n  }))];\n\n  if (primaryAction) {\n    actions.push(primaryAction);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Snackbar\"], {\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'left'\n    },\n    open: true,\n    autoHideDuration: 5000,\n    onClose: closed\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"SnackbarContent\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes[type], className),\n    \"aria-describedby\": \"client-snackbar\",\n    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      id: \"client-snackbar\",\n      className: classes.message\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {\n      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, classes.iconVariant)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n      className: classes.text\n    }, body)),\n    action: actions.reverse()\n  }, other)));\n};\n\nSnackbar.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['success', 'warning', 'error', 'info']).isRequired,\n  body: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  closed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  actionText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func\n};\n\nvar styles = function styles(theme) {\n  return {\n    success: {\n      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].green[600]\n    },\n    error: {\n      backgroundColor: theme.palette.error.dark\n    },\n    info: {\n      backgroundColor: theme.palette.primary.dark\n    },\n    warning: {\n      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].amber[700]\n    },\n    icon: {\n      fontSize: 20,\n      color: theme.palette.common['white']\n    },\n    text: {\n      color: theme.palette.common['white']\n    },\n    iconVariant: {\n      opacity: 0.9,\n      marginRight: theme.spacing.unit\n    },\n    message: {\n      display: 'flex',\n      alignItems: 'center'\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])(styles)(Snackbar));\n\n//# sourceURL=webpack:///./resources/js/ui/Snackbar.js?");

/***/ })

}]);
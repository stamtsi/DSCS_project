(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/js/ui/TablePaginationActions.js":
/*!***************************************************!*\
  !*** ./resources/js/ui/TablePaginationActions.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\n\n\n\nvar TablePaginationActions = function TablePaginationActions(props) {\n  var classes = props.classes,\n      theme = props.theme,\n      onChangePage = props.onChangePage,\n      total = props.count,\n      page = props.page,\n      perPage = props.rowsPerPage;\n  var lastPage = Math.ceil(total / perPage);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    title: Lang.get('table.first_page')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    onClick: function onClick(event) {\n      return onChangePage(event, 0);\n    },\n    disabled: page === 0,\n    \"aria-label\": Lang.get('table.first_page')\n  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"LastPage\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"FirstPage\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    title: Lang.get('table.previous_page')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    onClick: function onClick(event) {\n      return onChangePage(event, page);\n    },\n    disabled: page === 0,\n    \"aria-label\": Lang.get('table.previous_page')\n  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowRight\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowLeft\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    title: Lang.get('table.next_page')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    onClick: function onClick(event) {\n      return onChangePage(event, page + 2);\n    },\n    disabled: page + 1 >= lastPage,\n    \"aria-label\": Lang.get('table.next_page')\n  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowLeft\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowRight\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n    title: Lang.get('table.last_page')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    onClick: function onClick(event) {\n      return onChangePage(event, lastPage);\n    },\n    disabled: page + 1 >= lastPage,\n    \"aria-label\": Lang.get('table.last_page')\n  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"FirstPage\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"LastPage\"], null)))));\n};\n\nTablePaginationActions = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(function (theme) {\n  return {\n    root: {\n      flexShrink: 0,\n      color: theme.palette.text.secondary,\n      marginLeft: theme.spacing.unit * 2.5\n    }\n  };\n}, {\n  withTheme: true\n})(TablePaginationActions);\nTablePaginationActions.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  rowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablePaginationActions);\n\n//# sourceURL=webpack:///./resources/js/ui/TablePaginationActions.js?");

/***/ })

}]);
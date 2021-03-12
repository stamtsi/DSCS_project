(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/views/__backoffice/products/Edit.js":
/*!**********************************************************!*\
  !*** ./resources/js/views/__backoffice/products/Edit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _helpers_URL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/URL */ \"./resources/js/helpers/URL.js\");\n/* harmony import */ var _helpers_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/Navigation */ \"./resources/js/helpers/Navigation.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models */ \"./resources/js/models/index.js\");\n/* harmony import */ var _ui_Loaders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/Loaders */ \"./resources/js/ui/Loaders/index.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts */ \"./resources/js/views/__backoffice/layouts/index.js\");\n/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Forms */ \"./resources/js/views/__backoffice/products/Forms/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Edit(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState3, 2),\n      activeStep = _useState4[0],\n      setActiveStep = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState5, 2),\n      formValues = _useState6[0],\n      setFormValues = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({}),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState7, 2),\n      product = _useState8[0],\n      setProduct = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({}),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState9, 2),\n      message = _useState10[0],\n      setMessage = _useState10[1];\n  /**\n   * Fetch the product.\n   *\n   * @param {number} id\n   *\n   * @return {undefined}\n   */\n\n\n  var fetchProduct = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(id) {\n      var _product;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.prev = 1;\n              _context.next = 4;\n              return _models__WEBPACK_IMPORTED_MODULE_9__[\"Product\"].show(id);\n\n            case 4:\n              _product = _context.sent;\n              setProduct(_product);\n              setLoading(false);\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              setLoading(false);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function fetchProduct(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\n   * This should return back to the previous step.\n   *\n   * @return {undefined}\n   */\n\n\n  var handleBack = function handleBack() {\n    setActiveStep(activeStep - 1);\n  };\n  /**\n   * Handle form submit, this should send an API response\n   * to create a product.\n   *\n   * @param {object} values\n   *\n   * @param {object} form\n   *\n   * @return {undefined}\n   */\n\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(values, _ref2) {\n      var setSubmitting, setErrors, params, _product2, errors;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setSubmitting = _ref2.setSubmitting, setErrors = _ref2.setErrors;\n              setSubmitting(false);\n              params = props.match.params;\n              setLoading(true);\n              _context2.prev = 4;\n              _context2.next = 7;\n              return _models__WEBPACK_IMPORTED_MODULE_9__[\"Product\"].update(params.id, values);\n\n            case 7:\n              _product2 = _context2.sent;\n              console.log(_product2);\n              setMessage({\n                type: 'success',\n                body: Lang.get('resources.updated', {\n                  name: 'Product'\n                }),\n                closed: function closed() {\n                  return setMessage({});\n                }\n              });\n              setLoading(false);\n              setFormValues(values);\n              setProduct(_product2);\n              _context2.next = 22;\n              break;\n\n            case 15:\n              _context2.prev = 15;\n              _context2.t0 = _context2[\"catch\"](4);\n\n              if (_context2.t0.response) {\n                _context2.next = 19;\n                break;\n              }\n\n              throw new Error('Unknown error');\n\n            case 19:\n              errors = _context2.t0.response.data.errors;\n              setErrors(errors);\n              setLoading(false);\n\n            case 22:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[4, 15]]);\n    }));\n\n    return function handleSubmit(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (Object.keys(product).length > 0) {\n      return;\n    }\n\n    var params = props.match.params;\n    var location = props.location;\n    var queryParams = _helpers_URL__WEBPACK_IMPORTED_MODULE_7__[\"queryParams\"](location.search);\n\n    if (queryParams.hasOwnProperty('step')) {\n      setActiveStep(parseInt(queryParams.step));\n    }\n\n    fetchProduct(params.id);\n  });\n\n  var classes = props.classes,\n      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"classes\"]);\n\n  var renderForm = function renderForm() {\n    var defaultProfileValues = {};\n    defaultProfileValues = {\n      label: product.data.label === null ? '' : product.data.label,\n      experiation_date: product.data.experiation_date === null ? '' : product.data.experiation_date,\n      metric: product.data.metric === null ? '' : product.data.metric,\n      quantity: product.data.quantity === null ? '' : product.data.quantity\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_12__[\"ProductEdit\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, other, {\n      values: defaultProfileValues,\n      handleSubmit: handleSubmit\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_11__[\"Master\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, other, {\n    pageTitle: \"Edit product\",\n    tabs: [],\n    message: message\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n    className: classes.pageContentWrapper\n  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ui_Loaders__WEBPACK_IMPORTED_MODULE_10__[\"LinearIndeterminate\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Paper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n    className: classes.pageContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n    component: \"h1\",\n    variant: \"h4\",\n    align: \"center\",\n    gutterBottom: true\n  }, \"Edit Product\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n    component: \"p\",\n    variant: \"p\",\n    align: \"center\",\n    gutterBottom: true\n  }, \"Here you can edit the product\"), Object.keys(product).length > 0 ? renderForm() : null))));\n}\n\nvar styles = function styles(theme) {\n  return {\n    pageContentWrapper: {\n      width: '100%',\n      marginTop: theme.spacing.unit * 3,\n      minHeight: '75vh',\n      overflowX: 'auto'\n    },\n    pageContent: {\n      padding: theme.spacing.unit * 3\n    },\n    loadingContainer: {\n      minHeight: 200\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(styles)(Edit));\n\n//# sourceURL=webpack:///./resources/js/views/__backoffice/products/Edit.js?");

/***/ }),

/***/ "./resources/js/views/__backoffice/products/Forms/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/__backoffice/products/Forms/index.js ***!
  \*****************************************************************/
/*! exports provided: Product, ProductEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductEdit\", function() { return ProductEdit; });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\n\nvar Product = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./Product */ \"./resources/js/views/__backoffice/products/Forms/Product.js\"));\n});\nvar ProductEdit = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! ./ProductEdit */ \"./resources/js/views/__backoffice/products/Forms/ProductEdit.js\"));\n});\n\n//# sourceURL=webpack:///./resources/js/views/__backoffice/products/Forms/index.js?");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/models/Product.js":
/*!****************************************!*\
  !*** ./resources/js/models/Product.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Product = /*#__PURE__*/function () {\n  function Product() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Product);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Product, null, [{\n    key: \"paginated\",\n    value:\n    /**\n     * Fetch a paginated product list.\n     *\n     * @param {object} params\n     *\n     * @return {object}\n     */\n    function () {\n      var _paginated = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var params,\n            response,\n            _args = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};\n                console.log(params);\n                _context.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/v1/products', {\n                  params: params\n                });\n\n              case 4:\n                response = _context.sent;\n                console.log(response);\n\n                if (!(response.status !== 200)) {\n                  _context.next = 8;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {});\n\n              case 8:\n                return _context.abrupt(\"return\", response.data);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function paginated() {\n        return _paginated.apply(this, arguments);\n      }\n\n      return paginated;\n    }()\n    /**\n     * Store a new product.\n     *\n     * @param {object} attributes\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(attributes) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/v1/products', attributes);\n\n              case 2:\n                response = _context2.sent;\n\n                if (!(response.status !== 201)) {\n                  _context2.next = 5;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", {});\n\n              case 5:\n                return _context2.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function store(_x) {\n        return _store.apply(this, arguments);\n      }\n\n      return store;\n    }()\n    /**\n     * Show a product.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/api/v1/products/\".concat(id));\n\n              case 2:\n                response = _context3.sent;\n\n                if (!(response.status !== 200)) {\n                  _context3.next = 5;\n                  break;\n                }\n\n                return _context3.abrupt(\"return\", {});\n\n              case 5:\n                return _context3.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function show(_x2) {\n        return _show.apply(this, arguments);\n      }\n\n      return show;\n    }()\n    /**\n     * Update a product.\n     *\n     * @param {number} id\n     * @param {object} attributes\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, attributes) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(\"/api/v1/products/\".concat(id), attributes);\n\n              case 2:\n                response = _context4.sent;\n\n                if (!(response.status !== 200)) {\n                  _context4.next = 5;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", {});\n\n              case 5:\n                return _context4.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function update(_x3, _x4) {\n        return _update.apply(this, arguments);\n      }\n\n      return update;\n    }()\n    /**\n     * Delete a product.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"delete\",\n    value: function () {\n      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a[\"delete\"](\"/api/v1/products/\".concat(id));\n\n              case 2:\n                response = _context5.sent;\n\n                if (!(response.status !== 200)) {\n                  _context5.next = 5;\n                  break;\n                }\n\n                return _context5.abrupt(\"return\", {});\n\n              case 5:\n                return _context5.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function _delete(_x5) {\n        return _delete2.apply(this, arguments);\n      }\n\n      return _delete;\n    }()\n    /**\n     * Restore a product.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"restore\",\n    value: function () {\n      var _restore = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(\"/api/v1/products/\".concat(id, \"/restore\"));\n\n              case 2:\n                response = _context6.sent;\n\n                if (!(response.status !== 200)) {\n                  _context6.next = 5;\n                  break;\n                }\n\n                return _context6.abrupt(\"return\", {});\n\n              case 5:\n                return _context6.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      function restore(_x6) {\n        return _restore.apply(this, arguments);\n      }\n\n      return restore;\n    }()\n  }]);\n\n  return Product;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/js/models/Product.js?");

/***/ }),

/***/ "./resources/js/models/Recipes.js":
/*!****************************************!*\
  !*** ./resources/js/models/Recipes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recipes; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Recipes = /*#__PURE__*/function () {\n  function Recipes() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Recipes);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Recipes, null, [{\n    key: \"paginated\",\n    value:\n    /**\n     * Fetch a paginated product list.\n     *\n     * @param {object} params\n     *\n     * @return {object}\n     */\n    function () {\n      var _paginated = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/v1/recipes');\n\n              case 2:\n                response = _context.sent;\n\n                if (!(response.status !== 200)) {\n                  _context.next = 5;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {});\n\n              case 5:\n                return _context.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function paginated() {\n        return _paginated.apply(this, arguments);\n      }\n\n      return paginated;\n    }()\n  }]);\n\n  return Recipes;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/js/models/Recipes.js?");

/***/ }),

/***/ "./resources/js/models/User.js":
/*!*************************************!*\
  !*** ./resources/js/models/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, User);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(User, null, [{\n    key: \"paginated\",\n    value:\n    /**\n     * Fetch a paginated user list.\n     *\n     * @param {object} params\n     *\n     * @return {object}\n     */\n    function () {\n      var _paginated = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var params,\n            response,\n            _args = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/v1/users', {\n                  params: params\n                });\n\n              case 3:\n                response = _context.sent;\n\n                if (!(response.status !== 200)) {\n                  _context.next = 6;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {});\n\n              case 6:\n                return _context.abrupt(\"return\", response.data);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function paginated() {\n        return _paginated.apply(this, arguments);\n      }\n\n      return paginated;\n    }()\n    /**\n     * Store a new user.\n     *\n     * @param {object} attributes\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"store\",\n    value: function () {\n      var _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(attributes) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/v1/users', attributes);\n\n              case 2:\n                response = _context2.sent;\n\n                if (!(response.status !== 201)) {\n                  _context2.next = 5;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", {});\n\n              case 5:\n                return _context2.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function store(_x) {\n        return _store.apply(this, arguments);\n      }\n\n      return store;\n    }()\n    /**\n     * Show a user.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"show\",\n    value: function () {\n      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/api/v1/users/\".concat(id));\n\n              case 2:\n                response = _context3.sent;\n\n                if (!(response.status !== 200)) {\n                  _context3.next = 5;\n                  break;\n                }\n\n                return _context3.abrupt(\"return\", {});\n\n              case 5:\n                return _context3.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function show(_x2) {\n        return _show.apply(this, arguments);\n      }\n\n      return show;\n    }()\n    /**\n     * Update a user.\n     *\n     * @param {number} id\n     * @param {object} attributes\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"update\",\n    value: function () {\n      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, attributes) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(\"/api/v1/users/\".concat(id), attributes);\n\n              case 2:\n                response = _context4.sent;\n\n                if (!(response.status !== 200)) {\n                  _context4.next = 5;\n                  break;\n                }\n\n                return _context4.abrupt(\"return\", {});\n\n              case 5:\n                return _context4.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function update(_x3, _x4) {\n        return _update.apply(this, arguments);\n      }\n\n      return update;\n    }()\n    /**\n     * Delete a user.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"delete\",\n    value: function () {\n      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a[\"delete\"](\"/api/v1/users/\".concat(id));\n\n              case 2:\n                response = _context5.sent;\n\n                if (!(response.status !== 200)) {\n                  _context5.next = 5;\n                  break;\n                }\n\n                return _context5.abrupt(\"return\", {});\n\n              case 5:\n                return _context5.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function _delete(_x5) {\n        return _delete2.apply(this, arguments);\n      }\n\n      return _delete;\n    }()\n    /**\n     * Restore a user.\n     *\n     * @param {number} id\n     *\n     * @return {object}\n     */\n\n  }, {\n    key: \"restore\",\n    value: function () {\n      var _restore = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(\"/api/v1/users/\".concat(id, \"/restore\"));\n\n              case 2:\n                response = _context6.sent;\n\n                if (!(response.status !== 200)) {\n                  _context6.next = 5;\n                  break;\n                }\n\n                return _context6.abrupt(\"return\", {});\n\n              case 5:\n                return _context6.abrupt(\"return\", response.data);\n\n              case 6:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      function restore(_x6) {\n        return _restore.apply(this, arguments);\n      }\n\n      return restore;\n    }()\n  }]);\n\n  return User;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/js/models/User.js?");

/***/ }),

/***/ "./resources/js/models/index.js":
/*!**************************************!*\
  !*** ./resources/js/models/index.js ***!
  \**************************************/
/*! exports provided: User, Product, Recipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./resources/js/models/User.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./resources/js/models/Product.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return _Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recipes */ \"./resources/js/models/Recipes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Recipes\", function() { return _Recipes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./resources/js/models/index.js?");

/***/ }),

/***/ "./resources/js/views/__backoffice/layouts/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/views/__backoffice/layouts/index.js ***!
  \**********************************************************/
/*! exports provided: Clean, Master, Settings, Slave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clean\", function() { return Clean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Master\", function() { return Master; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slave\", function() { return Slave; });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\n\nvar Clean = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./Clean */ \"./resources/js/views/__backoffice/layouts/Clean.js\"));\n});\nvar Master = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Master */ \"./resources/js/views/__backoffice/layouts/Master.js\"));\n});\nvar Settings = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./Settings */ \"./resources/js/views/__backoffice/layouts/Settings.js\"));\n});\nvar Slave = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./Slave */ \"./resources/js/views/__backoffice/layouts/Slave.js\"));\n});\n\n//# sourceURL=webpack:///./resources/js/views/__backoffice/layouts/index.js?");

/***/ })

}]);
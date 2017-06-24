exports.id = 0;
exports.modules = {

/***/ "./server/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var a = 69;

/* harmony default export */ __webpack_exports__["a"] = (a);

/***/ }),

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_index__ = __webpack_require__("./server/auth/index.js");



var app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

app.get('/api', function (req, res) {
  res.send({
    message: __WEBPACK_IMPORTED_MODULE_1__auth_index__["a" /* default */]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
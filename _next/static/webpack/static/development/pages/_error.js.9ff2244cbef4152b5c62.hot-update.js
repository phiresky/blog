webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/tehdog/data/dev/2019/blog/src/components/Hero.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Hero(props) {
  return __jsx("div", {
    className: "relative tc ".concat(props.backgroundClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "mw7 center white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "pv4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h4", {
    className: "normal o-70 ma0 pt2 pb3 ph1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.subtitle), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.topLinks && props.topLinks.length > 0 && props.topLinks.map(function (link, i) {
    var isExternal = link.href.match(/^https?:/);
    var cls = "dib f6 white no-underline pa1 ma1";
    if (isExternal) return __jsx("a", {
      href: link.href,
      key: i,
      className: cls,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, link.text);else return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.href,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      className: cls,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, link.text));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=_error.js.9ff2244cbef4152b5c62.hot-update.js.map
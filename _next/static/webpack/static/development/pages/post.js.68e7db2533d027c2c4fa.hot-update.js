webpackHotUpdate("static/development/pages/post.js",{

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.ts");



function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative tc ".concat(props.backgroundClass)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mw7 center white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pv4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "normal o-70 ma0 pt2 pb3 ph1"
  }, props.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.topLinks && props.topLinks.length > 0 && props.topLinks.map(function (link, i) {
    var isExternal = link.href.match(/^https?:/);
    var cls = "dib f6 white no-underline pa1 ma1";
    if (isExternal) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link.href,
      key: i,
      className: cls
    }, link.text);else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: link.href,
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: cls,
      key: i
    }, link.text));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=post.js.68e7db2533d027c2c4fa.hot-update.js.map
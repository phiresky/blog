webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Tracking.tsx":
/*!*********************************!*\
  !*** ./components/Tracking.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getGaScript(siteId) {
  return "/* yes, I know... fite me */\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(siteId, "','auto');ga('send','pageview');\n");
}

function Tracking(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: getGaScript(props.siteId)
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Tracking);

/***/ })

})
//# sourceMappingURL=_error.js.ee2c39a26e1a1f9ae07e.hot-update.js.map
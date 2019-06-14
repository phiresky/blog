webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/Page.tsx":
/*!*****************************!*\
  !*** ./components/Page.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ "./components/Hero.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
/* harmony import */ var _Tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tracking */ "./components/Tracking.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.ts");








function Page(_props) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config__WEBPACK_IMPORTED_MODULE_6__["config"], _props);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: (props.title ? props.title + " - " : "") + props.siteTitle,
    description: props.description || props.siteDescription,
    stylesheets: props.stylesheets
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "lh-copy"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heroTitle: props.siteTitle,
    subtitle: props.siteDescription,
    topLinks: props.topLinks,
    backgroundClass: props.backgroundClass
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copyright: props.copyright
  }), props.siteId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tracking__WEBPACK_IMPORTED_MODULE_5__["default"], {
    siteId: props.siteId
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=post.js.c3aae261e3b3dccf2cbe.hot-update.js.map
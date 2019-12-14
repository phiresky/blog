webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Code */ "./components/Code.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/date */ "./utils/date.ts");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../post.scss */ "./post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Pandoc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Pandoc */ "./components/Pandoc.tsx");
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-katex */ "../node_modules/react-katex/dist/react-katex.js");
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_katex__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! katex/dist/katex.min.css */ "../node_modules/katex/dist/katex.min.css");
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_content__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/content */ "./utils/content.ts");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;



 // import "prismjs/themes/prism-tomorrow.css"









function NiceLink(_ref) {
  var _ref$c = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref.c, 3),
      attr = _ref$c[0],
      inline = _ref$c[1],
      _ref$c$ = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref$c[2], 2),
      url = _ref$c$[0],
      title = _ref$c$[1];

  var attrs = Object(_utils_content__WEBPACK_IMPORTED_MODULE_20__["fromEntries"])(attr[2]);

  if (attrs["cite-meta"]) {
    var m = JSON.parse(attrs["cite-meta"]);
    return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      href: url,
      title: title || undefined
    }, Object(_components_Pandoc__WEBPACK_IMPORTED_MODULE_17__["attrProps"])([attr[0], [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(attr[1]), ["tooltip"]), attr[2]])), __jsx(_components_Pandoc__WEBPACK_IMPORTED_MODULE_17__["default"], {
      ele: inline
    }), __jsx("span", {
      className: "tooltip-content"
    }, __jsx("b", null, m.shorttitle || m.title), m["abstract"] && __jsx("p", null, m["abstract"]), __jsx("i", {
      className: "arr"
    })));
  }

  return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    href: url,
    title: title || undefined
  }, Object(_components_Pandoc__WEBPACK_IMPORTED_MODULE_17__["attrProps"])(attr)), __jsx(_components_Pandoc__WEBPACK_IMPORTED_MODULE_17__["default"], {
    ele: inline
  }));
}

var PostUI =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostUI, _React$Component);

  function PostUI() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostUI);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PostUI).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PostUI, [{
    key: "render",
    value: function render() {
      var post = this.props.post;
      var meta = post.frontmatter;
      var footer = undefined;

      if (_config__WEBPACK_IMPORTED_MODULE_14__["config"].postSourceUrlBase) {
        footer = __jsx("a", {
          href: _config__WEBPACK_IMPORTED_MODULE_14__["config"].postSourceUrlBase + post.filename
        }, "View post source on GitHub");
      }

      return __jsx("div", {
        className: "jsx-2809278127"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2809278127"
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code{border:1px solid #ddd;}pre code{border:none;}pre{white-space:pre-wrap;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFdUIsQUFHcUIsQUFRbUIsQUFJWCxBQU1BLEFBR1YsQUFHUyxZQUZ0QixFQXJCc0IsT0F3QkEsQ0FaUCxBQU1mLFdBVkEsR0FLbUIsTUFZbkIsWUFYYSxVQWJvQixFQWNqQyw4QkFiMkIsNERBQzNCIiwiZmlsZSI6Ii9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL3NlcnZlci9idWlsZC1wb3N0c1wiXG4vL2ltcG9ydCBodG1sUGFyc2VyIGZyb20gXCJyZWFjdC1tYXJrZG93bi9wbHVnaW5zL2h0bWwtcGFyc2VyXCJcbmltcG9ydCB7IENvZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2RlXCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzc1wiXG5pbXBvcnQgeyBXaXRoUm91dGVyUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVwiXG5pbXBvcnQgXCIuLi9wb3N0LnNjc3NcIlxuaW1wb3J0IFBhbmRvYywgeyBkZWZhdWx0UmVuZGVyZXJzLCBhdHRyUHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYW5kb2NcIlxuaW1wb3J0IHsgSW5saW5lTWF0aCwgQmxvY2tNYXRoIH0gZnJvbSBcInJlYWN0LWthdGV4XCJcbmltcG9ydCBcImthdGV4L2Rpc3Qva2F0ZXgubWluLmNzc1wiXG5pbXBvcnQgeyBFbHQsIEVsdE1hcCwgU3VwZXJzY3JpcHQgfSBmcm9tIFwicGFuZG9jLWZpbHRlclwiXG5pbXBvcnQgeyBmcm9tRW50cmllcyB9IGZyb20gXCIuLi91dGlscy9jb250ZW50XCJcblxudHlwZSBQcm9wcyA9IHsgcG9zdDogUG9zdCB9XG5cbmRlY2xhcmUgbW9kdWxlIFwicmVhY3RcIiB7XG5cdGludGVyZmFjZSBTdHlsZUhUTUxBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8VD4ge1xuXHRcdGpzeD86IGJvb2xlYW5cblx0XHRnbG9iYWw/OiBib29sZWFuXG5cdH1cbn1cblxuZnVuY3Rpb24gTmljZUxpbmsoeyBjOiBbYXR0ciwgaW5saW5lLCBbdXJsLCB0aXRsZV1dIH06IEVsdDxcIkxpbmtcIj4pIHtcblx0Y29uc3QgYXR0cnMgPSBmcm9tRW50cmllcyhhdHRyWzJdKVxuXHRpZiAoYXR0cnNbXCJjaXRlLW1ldGFcIl0pIHtcblx0XHRjb25zdCBtID0gSlNPTi5wYXJzZShhdHRyc1tcImNpdGUtbWV0YVwiXSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj17dXJsfVxuXHRcdFx0XHR0aXRsZT17dGl0bGUgfHwgdW5kZWZpbmVkfVxuXHRcdFx0XHR7Li4uYXR0clByb3BzKFthdHRyWzBdLCBbLi4uYXR0clsxXSwgXCJ0b29sdGlwXCJdLCBhdHRyWzJdXSl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxQYW5kb2MgZWxlPXtpbmxpbmV9IC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtY29udGVudFwiPlxuXHRcdFx0XHRcdDxiPnttLnNob3J0dGl0bGUgfHwgbS50aXRsZX08L2I+XG5cdFx0XHRcdFx0e20uYWJzdHJhY3QgJiYgPHA+e20uYWJzdHJhY3R9PC9wPn1cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJhcnJcIiAvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2E+XG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGEgaHJlZj17dXJsfSB0aXRsZT17dGl0bGUgfHwgdW5kZWZpbmVkfSB7Li4uYXR0clByb3BzKGF0dHIpfT5cblx0XHRcdDxQYW5kb2MgZWxlPXtpbmxpbmV9IC8+XG5cdFx0PC9hPlxuXHQpXG59XG5jbGFzcyBQb3N0VUkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMgJiBXaXRoUm91dGVyUHJvcHM+IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8UHJvcHM+IHtcblx0XHQvLyB0b2RvOiBvbmx5IGxvYWQgc2luZ2xlIHBvc3Rcblx0XHQvL2NvbnNvbGUubG9nKHBvc3RzLm1hcChwID0+IG1ha2VVcmwocC5maWxlbmFtZSkpLCBjdHguYXNQYXRoKVxuXG5cdFx0Y29uc3Qgc2x1ZyA9IGN0eC5xdWVyeS5zbHVnXG5cdFx0Y29uc3QgdXJsID0gY29uZmlnLmJsb2dSb290ICsgc2x1Z1xuXHRcdGNvbnN0IHBvc3QgPSByZXF1aXJlKFwiLi4vLi4vcG9zdHMtYnVpbHQvXCIgKyBzbHVnICsgXCIubWQuanNvblwiKVxuXG5cdFx0aWYgKCFwb3N0KSB0aHJvdyBFcnJvcihgY291bGQgbm90IGZpbmQgcG9zdCAke3VybH1gKVxuXHRcdHJldHVybiB7IHBvc3QgfVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHBvc3QgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCBtZXRhID0gcG9zdC5mcm9udG1hdHRlclxuXHRcdGxldCBmb290ZXIgPSB1bmRlZmluZWRcblx0XHRpZiAoY29uZmlnLnBvc3RTb3VyY2VVcmxCYXNlKSB7XG5cdFx0XHRmb290ZXIgPSAoXG5cdFx0XHRcdDxhIGhyZWY9e2NvbmZpZy5wb3N0U291cmNlVXJsQmFzZSArIHBvc3QuZmlsZW5hbWV9PlxuXHRcdFx0XHRcdFZpZXcgcG9zdCBzb3VyY2Ugb24gR2l0SHViXG5cdFx0XHRcdDwvYT5cblx0XHRcdClcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LmNvbnRlbnQgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzAzNjVhNTtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YTpob3Zlcixcblx0XHRcdFx0XHRhOmZvY3VzIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb2RlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmUgY29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHByZSB7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0XHRcdFx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDxQYWdlXG5cdFx0XHRcdFx0dGl0bGU9e21ldGEudGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Bvc3QucHJldmlld31cblx0XHRcdFx0XHRmb290ZXI9e2Zvb3Rlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjZW50ZXIgbXc3IHBhMyBwYTQtbnNcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtdDAgbGgtdGl0bGVcIj57bWV0YS50aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0PFBvc3REYXRlIHBvc3Q9e3Bvc3R9IC8+XG5cdFx0XHRcdFx0XHQ8UGFuZG9jXG5cdFx0XHRcdFx0XHRcdGVsZT17cG9zdC5jb250ZW50X2FzdH1cblx0XHRcdFx0XHRcdFx0YWxsb3dVbnNhbml0aXplZEhUTUxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZXJzPXt7XG5cdFx0XHRcdFx0XHRcdFx0Q29kZUJsb2NrOiAoeyBjOiBbYXR0ciwgdGV4dF0gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PENvZGUgbGFuZ3VhZ2U9e2F0dHJbMV1bMF19IHZhbHVlPXt0ZXh0fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0TWF0aDogKHsgYzogZSB9KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBbdHlwZSwgY29udGVudF0gPSBlXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZS50ID09PSBcIklubGluZU1hdGhcIilcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxJbmxpbmVNYXRoIG1hdGg9e2NvbnRlbnR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIHJldHVybiA8QmxvY2tNYXRoIG1hdGg9e2NvbnRlbnR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRMaW5rOiBOaWNlTGluayxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7Lyo8UmVhY3RNYXJrZG93blxuXHRcdFx0XHRcdFx0XHRlc2NhcGVIdG1sPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0cmVuZGVyZXJzPXt7IGNvZGU6IENvZGUgfX1cblx0XHRcdFx0XHRcdFx0Ly9hc3RQbHVnaW5zPXtbaHRtbFBhcnNlcigpXX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3Bvc3QuY29udGVudF9tZH1cblx0XHRcdFx0XHRcdDwvUmVhY3RNYXJrZG93bj4qL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9QYWdlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5mdW5jdGlvbiBQb3N0RGF0ZSh7IHBvc3Q6IHsgZnJvbnRtYXR0ZXI6IG1ldGEsIGZpbGVuYW1lIH0gfTogeyBwb3N0OiBQb3N0IH0pIHtcblx0bGV0IHVwZGF0ZWQgPSBudWxsXG5cdGlmIChtZXRhLnVwZGF0ZWQpIHtcblx0XHRjb25zdCBTTGluayA9IGNvbmZpZy5wb3N0U291cmNlSGlzdG9yeVVybEJhc2Vcblx0XHRcdD8gKHsgY2hpbGRyZW4gPSBudWxsIGFzIGFueSB9KSA9PiAoXG5cdFx0XHRcdFx0PGEgaHJlZj17Y29uZmlnLnBvc3RTb3VyY2VIaXN0b3J5VXJsQmFzZSArIGZpbGVuYW1lfT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHQgIClcblx0XHRcdDogRnJhZ21lbnRcblx0XHR1cGRhdGVkID0gKFxuXHRcdFx0PD5cblx0XHRcdFx0e1wiIOKAoiBcIn1cblx0XHRcdFx0PFNMaW5rPlxuXHRcdFx0XHRcdHtcIkxhc3QgVXBkYXRlIFwifVxuXHRcdFx0XHRcdDx0aW1lIGRhdGVUaW1lPXtuZXcgRGF0ZShtZXRhLmRhdGUpLnRvSVNPU3RyaW5nKCl9PlxuXHRcdFx0XHRcdFx0e2Zvcm1hdERhdGUobWV0YS51cGRhdGVkKX1cblx0XHRcdFx0XHQ8L3RpbWU+XG5cdFx0XHRcdDwvU0xpbms+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiZGIgdHR1IG8tNDBcIj5cblx0XHRcdDx0aW1lXG5cdFx0XHRcdGRhdGVUaW1lPXtcblx0XHRcdFx0XHRtZXRhLmRhdGUgPyBuZXcgRGF0ZShtZXRhLmRhdGUpLnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWRcblx0XHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHR7Zm9ybWF0RGF0ZShtZXRhLmRhdGUpfVxuXHRcdFx0PC90aW1lPlxuXHRcdFx0e3VwZGF0ZWR9XG5cdFx0PC9zbWFsbD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBvc3RVSSlcbiJdfQ== */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/pages/post.tsx */"), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: meta.title,
        description: post.preview,
        footer: footer
      }, __jsx("div", {
        className: "jsx-2809278127" + " " + "content center mw7 pa3 pa4-ns"
      }, __jsx("h1", {
        className: "jsx-2809278127" + " " + "mt0 lh-title"
      }, meta.title), __jsx(PostDate, {
        post: post
      }), __jsx(_components_Pandoc__WEBPACK_IMPORTED_MODULE_17__["default"], {
        ele: post.content_ast,
        allowUnsanitizedHTML: true,
        renderers: {
          CodeBlock: function CodeBlock(_ref2) {
            var _ref2$c = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref2.c, 2),
                attr = _ref2$c[0],
                text = _ref2$c[1];

            return __jsx(_components_Code__WEBPACK_IMPORTED_MODULE_13__["Code"], {
              language: attr[1][0],
              value: text
            });
          },
          Math: function Math(_ref3) {
            var e = _ref3.c;

            var _e = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(e, 2),
                type = _e[0],
                content = _e[1];

            if (type.t === "InlineMath") return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_18__["InlineMath"], {
              math: content
            });else return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_18__["BlockMath"], {
              math: content
            });
          },
          Link: NiceLink
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(ctx) {
      var slug, url, post;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // todo: only load single post
              //console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)
              slug = ctx.query.slug;
              url = _config__WEBPACK_IMPORTED_MODULE_14__["config"].blogRoot + slug;
              post = __webpack_require__("../posts-built sync recursive ^\\.\\/.*\\.md\\.json$")("./" + slug + ".md.json");

              if (post) {
                _context.next = 5;
                break;
              }

              throw Error("could not find post ".concat(url));

            case 5:
              return _context.abrupt("return", {
                post: post
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return PostUI;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

function PostDate(_ref4) {
  var _ref4$post = _ref4.post,
      meta = _ref4$post.frontmatter,
      filename = _ref4$post.filename;
  var updated = null;

  if (meta.updated) {
    var SLink = _config__WEBPACK_IMPORTED_MODULE_14__["config"].postSourceHistoryUrlBase ? function (_ref5) {
      var _ref5$children = _ref5.children,
          children = _ref5$children === void 0 ? null : _ref5$children;
      return __jsx("a", {
        href: _config__WEBPACK_IMPORTED_MODULE_14__["config"].postSourceHistoryUrlBase + filename
      }, children);
    } : react__WEBPACK_IMPORTED_MODULE_10__["Fragment"];
    updated = __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, " • ", __jsx(SLink, null, "Last Update ", __jsx("time", {
      dateTime: new Date(meta.date).toISOString()
    }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_15__["formatDate"])(meta.updated))));
  }

  return __jsx("small", {
    className: "db ttu o-40"
  }, __jsx("time", {
    dateTime: meta.date ? new Date(meta.date).toISOString() : undefined
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_15__["formatDate"])(meta.date)), updated);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(PostUI));

/***/ })

})
//# sourceMappingURL=post.js.16848b24cd948eb5bc99.hot-update.js.map
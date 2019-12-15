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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Code */ "./components/Code.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/date */ "./utils/date.ts");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../post.scss */ "./post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Pandoc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Pandoc */ "./components/Pandoc.tsx");
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-katex */ "../node_modules/react-katex/dist/react-katex.js");
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_katex__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! katex/dist/katex.min.css */ "../node_modules/katex/dist/katex.min.css");
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_TooltipLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/TooltipLink */ "./components/TooltipLink.tsx");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



 // import "prismjs/themes/prism-tomorrow.css"








var S = "script";

var PostUI =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PostUI, _React$Component);

  function PostUI() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PostUI);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PostUI).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PostUI, [{
    key: "render",
    value: function render() {
      var post = this.props.post;
      var meta = post.frontmatter;
      var footer = undefined;

      if (_config__WEBPACK_IMPORTED_MODULE_12__["config"].postSourceUrlBase) {
        footer = __jsx("a", {
          href: _config__WEBPACK_IMPORTED_MODULE_12__["config"].postSourceUrlBase + post.filename
        }, "View post source on GitHub");
      }

      return __jsx("div", {
        className: "jsx-2809278127"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2809278127"
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code{border:1px solid #ddd;}pre code{border:none;}pre{white-space:pre-wrap;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEdUIsQUFFaUIsQUFPbUIsQUFHWCxBQU1BLEFBR1YsQUFHUyxZQUhSLEVBbEJRLE9Bc0JBLENBWlAsQUFLUyxXQVRXLEdBS2hCLE1BV0ksWUFWVixVQVhvQixFQVduQiw4QkFWYSw0REFBQyIsImZpbGUiOiIvaG9tZS90ZWhkb2cvZGF0YS9kZXYvMjAxOS9ibG9nL3NyYy9wYWdlcy9wb3N0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIlxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi9zZXJ2ZXIvYnVpbGQtcG9zdHNcIlxuLy9pbXBvcnQgaHRtbFBhcnNlciBmcm9tIFwicmVhY3QtbWFya2Rvd24vcGx1Z2lucy9odG1sLXBhcnNlclwiXG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZVwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3NcIlxuaW1wb3J0IHsgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIlxuaW1wb3J0IFwiLi4vcG9zdC5zY3NzXCJcbmltcG9ydCBQYW5kb2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFuZG9jXCJcbmltcG9ydCB7IElubGluZU1hdGgsIEJsb2NrTWF0aCB9IGZyb20gXCJyZWFjdC1rYXRleFwiXG5pbXBvcnQgXCJrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3NcIlxuaW1wb3J0IHsgVG9vbHRpcExpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub29sdGlwTGlua1wiXG5cbnR5cGUgUHJvcHMgPSB7IHBvc3Q6IFBvc3QgfVxuXG5kZWNsYXJlIG1vZHVsZSBcInJlYWN0XCIge1xuXHRpbnRlcmZhY2UgU3R5bGVIVE1MQXR0cmlidXRlczxUPiBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPFQ+IHtcblx0XHRqc3g/OiBib29sZWFuXG5cdFx0Z2xvYmFsPzogYm9vbGVhblxuXHR9XG59XG5jb25zdCBTID0gXCJzY3JpcHRcIiBhcyBhbnlcblxuY2xhc3MgUG9zdFVJIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzICYgV2l0aFJvdXRlclByb3BzPiB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBOZXh0UGFnZUNvbnRleHQpOiBQcm9taXNlPFByb3BzPiB7XG5cdFx0Y29uc3Qgc2x1ZyA9IGN0eC5xdWVyeS5zbHVnXG5cdFx0Y29uc3QgdXJsID0gY29uZmlnLmJsb2dSb290ICsgc2x1Z1xuXHRcdGNvbnN0IHBvc3QgPSByZXF1aXJlKFwiLi4vLi4vcG9zdHMtYnVpbHQvXCIgKyBzbHVnICsgXCIubWQuanNvblwiKVxuXG5cdFx0aWYgKCFwb3N0KSB0aHJvdyBFcnJvcihgY291bGQgbm90IGZpbmQgcG9zdCAke3VybH1gKVxuXHRcdHJldHVybiB7IHBvc3QgfVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHBvc3QgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCBtZXRhID0gcG9zdC5mcm9udG1hdHRlclxuXHRcdGxldCBmb290ZXIgPSB1bmRlZmluZWRcblx0XHRpZiAoY29uZmlnLnBvc3RTb3VyY2VVcmxCYXNlKSB7XG5cdFx0XHRmb290ZXIgPSAoXG5cdFx0XHRcdDxhIGhyZWY9e2NvbmZpZy5wb3N0U291cmNlVXJsQmFzZSArIHBvc3QuZmlsZW5hbWV9PlxuXHRcdFx0XHRcdFZpZXcgcG9zdCBzb3VyY2Ugb24gR2l0SHViXG5cdFx0XHRcdDwvYT5cblx0XHRcdClcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LmNvbnRlbnQgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzAzNjVhNTtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YTpob3Zlcixcblx0XHRcdFx0XHRhOmZvY3VzIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb2RlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmUgY29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHByZSB7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0XHRcdFx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDxQYWdlXG5cdFx0XHRcdFx0dGl0bGU9e21ldGEudGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Bvc3QucHJldmlld31cblx0XHRcdFx0XHRmb290ZXI9e2Zvb3Rlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjZW50ZXIgbXc3IHBhMyBwYTQtbnNcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtdDAgbGgtdGl0bGVcIj57bWV0YS50aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0PFBvc3REYXRlIHBvc3Q9e3Bvc3R9IC8+XG5cdFx0XHRcdFx0XHQ8UGFuZG9jXG5cdFx0XHRcdFx0XHRcdGVsZT17cG9zdC5jb250ZW50X2FzdH1cblx0XHRcdFx0XHRcdFx0YWxsb3dVbnNhbml0aXplZEhUTUxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZXJzPXt7XG5cdFx0XHRcdFx0XHRcdFx0Q29kZUJsb2NrOiAoeyBjOiBbYXR0ciwgdGV4dF0gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PENvZGUgbGFuZ3VhZ2U9e2F0dHJbMV1bMF19IHZhbHVlPXt0ZXh0fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0TWF0aDogKHsgYzogZSB9KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBbdHlwZSwgY29udGVudF0gPSBlXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZS50ID09PSBcIklubGluZU1hdGhcIilcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxJbmxpbmVNYXRoIG1hdGg9e2NvbnRlbnR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIHJldHVybiA8QmxvY2tNYXRoIG1hdGg9e2NvbnRlbnR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRMaW5rOiBUb29sdGlwTGluayxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRhYWFcblx0XHRcdFx0XHRcdDxTXG5cdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzXCJcblx0XHRcdFx0XHRcdFx0cmVwbz1cInBoaXJlc2t5L2Jsb2dcIlxuXHRcdFx0XHRcdFx0XHRpc3N1ZS10ZXJtPVwidXJsXCJcblx0XHRcdFx0XHRcdFx0dGhlbWU9XCJnaXRodWItbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0XHRcdGFzeW5jXG5cdFx0XHRcdFx0XHQ+PC9TPlxuXHRcdFx0XHRcdFx0ey8qPFJlYWN0TWFya2Rvd25cblx0XHRcdFx0XHRcdFx0ZXNjYXBlSHRtbD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVycz17eyBjb2RlOiBDb2RlIH19XG5cdFx0XHRcdFx0XHRcdC8vYXN0UGx1Z2lucz17W2h0bWxQYXJzZXIoKV19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtwb3N0LmNvbnRlbnRfbWR9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0TWFya2Rvd24+Ki99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvUGFnZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuZnVuY3Rpb24gUG9zdERhdGUoeyBwb3N0OiB7IGZyb250bWF0dGVyOiBtZXRhLCBmaWxlbmFtZSB9IH06IHsgcG9zdDogUG9zdCB9KSB7XG5cdGxldCB1cGRhdGVkID0gbnVsbFxuXHRpZiAobWV0YS51cGRhdGVkKSB7XG5cdFx0Y29uc3QgU0xpbmsgPSBjb25maWcucG9zdFNvdXJjZUhpc3RvcnlVcmxCYXNlXG5cdFx0XHQ/ICh7IGNoaWxkcmVuID0gbnVsbCBhcyBhbnkgfSkgPT4gKFxuXHRcdFx0XHRcdDxhIGhyZWY9e2NvbmZpZy5wb3N0U291cmNlSGlzdG9yeVVybEJhc2UgKyBmaWxlbmFtZX0+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0ICApXG5cdFx0XHQ6IEZyYWdtZW50XG5cdFx0dXBkYXRlZCA9IChcblx0XHRcdDw+XG5cdFx0XHRcdHtcIiDigKIgXCJ9XG5cdFx0XHRcdDxTTGluaz5cblx0XHRcdFx0XHR7XCJMYXN0IFVwZGF0ZSBcIn1cblx0XHRcdFx0XHQ8dGltZSBkYXRlVGltZT17bmV3IERhdGUobWV0YS5kYXRlKS50b0lTT1N0cmluZygpfT5cblx0XHRcdFx0XHRcdHtmb3JtYXREYXRlKG1ldGEudXBkYXRlZCl9XG5cdFx0XHRcdFx0PC90aW1lPlxuXHRcdFx0XHQ8L1NMaW5rPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNtYWxsIGNsYXNzTmFtZT1cImRiIHR0dSBvLTQwXCI+XG5cdFx0XHQ8dGltZVxuXHRcdFx0XHRkYXRlVGltZT17XG5cdFx0XHRcdFx0bWV0YS5kYXRlID8gbmV3IERhdGUobWV0YS5kYXRlKS50b0lTT1N0cmluZygpIDogdW5kZWZpbmVkXG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0e2Zvcm1hdERhdGUobWV0YS5kYXRlKX1cblx0XHRcdDwvdGltZT5cblx0XHRcdHt1cGRhdGVkfVxuXHRcdDwvc21hbGw+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0VUkpXG4iXX0= */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/pages/post.tsx */"), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: meta.title,
        description: post.preview,
        footer: footer
      }, __jsx("div", {
        className: "jsx-2809278127" + " " + "content center mw7 pa3 pa4-ns"
      }, __jsx("h1", {
        className: "jsx-2809278127" + " " + "mt0 lh-title"
      }, meta.title), __jsx(PostDate, {
        post: post
      }), __jsx(_components_Pandoc__WEBPACK_IMPORTED_MODULE_15__["default"], {
        ele: post.content_ast,
        allowUnsanitizedHTML: true,
        renderers: {
          CodeBlock: function CodeBlock(_ref) {
            var _ref$c = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref.c, 2),
                attr = _ref$c[0],
                text = _ref$c[1];

            return __jsx(_components_Code__WEBPACK_IMPORTED_MODULE_11__["Code"], {
              language: attr[1][0],
              value: text
            });
          },
          Math: function Math(_ref2) {
            var e = _ref2.c;

            var _e = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e, 2),
                type = _e[0],
                content = _e[1];

            if (type.t === "InlineMath") return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_16__["InlineMath"], {
              math: content
            });else return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_16__["BlockMath"], {
              math: content
            });
          },
          Link: _components_TooltipLink__WEBPACK_IMPORTED_MODULE_18__["TooltipLink"]
        }
      }), "aaa", __jsx(S, {
        src: "https://utteranc.es/client.js",
        repo: "phiresky/blog",
        "issue-term": "url",
        theme: "github-light",
        crossorigin: "anonymous",
        async: true
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
              slug = ctx.query.slug;
              url = _config__WEBPACK_IMPORTED_MODULE_12__["config"].blogRoot + slug;
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
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function PostDate(_ref3) {
  var _ref3$post = _ref3.post,
      meta = _ref3$post.frontmatter,
      filename = _ref3$post.filename;
  var updated = null;

  if (meta.updated) {
    var SLink = _config__WEBPACK_IMPORTED_MODULE_12__["config"].postSourceHistoryUrlBase ? function (_ref4) {
      var _ref4$children = _ref4.children,
          children = _ref4$children === void 0 ? null : _ref4$children;
      return __jsx("a", {
        href: _config__WEBPACK_IMPORTED_MODULE_12__["config"].postSourceHistoryUrlBase + filename
      }, children);
    } : react__WEBPACK_IMPORTED_MODULE_8__["Fragment"];
    updated = __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, " • ", __jsx(SLink, null, "Last Update ", __jsx("time", {
      dateTime: new Date(meta.date).toISOString()
    }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(meta.updated))));
  }

  return __jsx("small", {
    className: "db ttu o-40"
  }, __jsx("time", {
    dateTime: meta.date ? new Date(meta.date).toISOString() : undefined
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(meta.date)), updated);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(PostUI));

/***/ })

})
//# sourceMappingURL=post.js.9e70e82ef0fce6b1aa24.hot-update.js.map
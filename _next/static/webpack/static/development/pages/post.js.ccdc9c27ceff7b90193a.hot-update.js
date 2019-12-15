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
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code{border:1px solid #ddd;}pre code{border:none;}pre{white-space:pre-wrap;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEdUIsQUFFaUIsQUFPbUIsQUFHWCxBQU1BLEFBR1YsQUFHUyxZQUhSLEVBbEJRLE9Bc0JBLENBWlAsQUFLUyxXQVRXLEdBS2hCLE1BV0ksWUFWVixVQVhvQixFQVduQiw4QkFWYSw0REFBQyIsImZpbGUiOiIvaG9tZS90ZWhkb2cvZGF0YS9kZXYvMjAxOS9ibG9nL3NyYy9wYWdlcy9wb3N0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIlxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi9zZXJ2ZXIvYnVpbGQtcG9zdHNcIlxuLy9pbXBvcnQgaHRtbFBhcnNlciBmcm9tIFwicmVhY3QtbWFya2Rvd24vcGx1Z2lucy9odG1sLXBhcnNlclwiXG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZVwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3NcIlxuaW1wb3J0IHsgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIlxuaW1wb3J0IFwiLi4vcG9zdC5zY3NzXCJcbmltcG9ydCBQYW5kb2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFuZG9jXCJcbmltcG9ydCB7IElubGluZU1hdGgsIEJsb2NrTWF0aCB9IGZyb20gXCJyZWFjdC1rYXRleFwiXG5pbXBvcnQgXCJrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3NcIlxuaW1wb3J0IHsgVG9vbHRpcExpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub29sdGlwTGlua1wiXG5cbnR5cGUgUHJvcHMgPSB7IHBvc3Q6IFBvc3QgfVxuXG5kZWNsYXJlIG1vZHVsZSBcInJlYWN0XCIge1xuXHRpbnRlcmZhY2UgU3R5bGVIVE1MQXR0cmlidXRlczxUPiBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPFQ+IHtcblx0XHRqc3g/OiBib29sZWFuXG5cdFx0Z2xvYmFsPzogYm9vbGVhblxuXHR9XG59XG5cbmNsYXNzIFBvc3RVSSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcyAmIFdpdGhSb3V0ZXJQcm9wcz4ge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogTmV4dFBhZ2VDb250ZXh0KTogUHJvbWlzZTxQcm9wcz4ge1xuXHRcdGNvbnN0IHNsdWcgPSBjdHgucXVlcnkuc2x1Z1xuXHRcdGNvbnN0IHVybCA9IGNvbmZpZy5ibG9nUm9vdCArIHNsdWdcblx0XHRjb25zdCBwb3N0ID0gcmVxdWlyZShcIi4uLy4uL3Bvc3RzLWJ1aWx0L1wiICsgc2x1ZyArIFwiLm1kLmpzb25cIilcblxuXHRcdGlmICghcG9zdCkgdGhyb3cgRXJyb3IoYGNvdWxkIG5vdCBmaW5kIHBvc3QgJHt1cmx9YClcblx0XHRyZXR1cm4geyBwb3N0IH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBwb3N0IH0gPSB0aGlzLnByb3BzXG5cdFx0Y29uc3QgbWV0YSA9IHBvc3QuZnJvbnRtYXR0ZXJcblx0XHRsZXQgZm9vdGVyID0gdW5kZWZpbmVkXG5cdFx0aWYgKGNvbmZpZy5wb3N0U291cmNlVXJsQmFzZSkge1xuXHRcdFx0Zm9vdGVyID0gKFxuXHRcdFx0XHQ8YSBocmVmPXtjb25maWcucG9zdFNvdXJjZVVybEJhc2UgKyBwb3N0LmZpbGVuYW1lfT5cblx0XHRcdFx0XHRWaWV3IHBvc3Qgc291cmNlIG9uIEdpdEh1YlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5jb250ZW50IGEge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMzY1YTU7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGE6aG92ZXIsXG5cdFx0XHRcdFx0YTpmb2N1cyB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvZGUge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHJlIGNvZGUge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmUge1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdFx0XHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8UGFnZVxuXHRcdFx0XHRcdHRpdGxlPXttZXRhLnRpdGxlfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtwb3N0LnByZXZpZXd9XG5cdFx0XHRcdFx0Zm9vdGVyPXtmb290ZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY2VudGVyIG13NyBwYTMgcGE0LW5zXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibXQwIGxoLXRpdGxlXCI+e21ldGEudGl0bGV9PC9oMT5cblx0XHRcdFx0XHRcdDxQb3N0RGF0ZSBwb3N0PXtwb3N0fSAvPlxuXHRcdFx0XHRcdFx0PFBhbmRvY1xuXHRcdFx0XHRcdFx0XHRlbGU9e3Bvc3QuY29udGVudF9hc3R9XG5cdFx0XHRcdFx0XHRcdGFsbG93VW5zYW5pdGl6ZWRIVE1MXG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVycz17e1xuXHRcdFx0XHRcdFx0XHRcdENvZGVCbG9jazogKHsgYzogW2F0dHIsIHRleHRdIH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxDb2RlIGxhbmd1YWdlPXthdHRyWzFdWzBdfSB2YWx1ZT17dGV4dH0gLz5cblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdE1hdGg6ICh7IGM6IGUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgW3R5cGUsIGNvbnRlbnRdID0gZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGUudCA9PT0gXCJJbmxpbmVNYXRoXCIpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8SW5saW5lTWF0aCBtYXRoPXtjb250ZW50fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gPEJsb2NrTWF0aCBtYXRoPXtjb250ZW50fSAvPlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0TGluazogVG9vbHRpcExpbmssXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0ey8qPFJlYWN0TWFya2Rvd25cblx0XHRcdFx0XHRcdFx0ZXNjYXBlSHRtbD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVycz17eyBjb2RlOiBDb2RlIH19XG5cdFx0XHRcdFx0XHRcdC8vYXN0UGx1Z2lucz17W2h0bWxQYXJzZXIoKV19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtwb3N0LmNvbnRlbnRfbWR9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0TWFya2Rvd24+Ki99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvUGFnZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuZnVuY3Rpb24gUG9zdERhdGUoeyBwb3N0OiB7IGZyb250bWF0dGVyOiBtZXRhLCBmaWxlbmFtZSB9IH06IHsgcG9zdDogUG9zdCB9KSB7XG5cdGxldCB1cGRhdGVkID0gbnVsbFxuXHRpZiAobWV0YS51cGRhdGVkKSB7XG5cdFx0Y29uc3QgU0xpbmsgPSBjb25maWcucG9zdFNvdXJjZUhpc3RvcnlVcmxCYXNlXG5cdFx0XHQ/ICh7IGNoaWxkcmVuID0gbnVsbCBhcyBhbnkgfSkgPT4gKFxuXHRcdFx0XHRcdDxhIGhyZWY9e2NvbmZpZy5wb3N0U291cmNlSGlzdG9yeVVybEJhc2UgKyBmaWxlbmFtZX0+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0ICApXG5cdFx0XHQ6IEZyYWdtZW50XG5cdFx0dXBkYXRlZCA9IChcblx0XHRcdDw+XG5cdFx0XHRcdHtcIiDigKIgXCJ9XG5cdFx0XHRcdDxTTGluaz5cblx0XHRcdFx0XHR7XCJMYXN0IFVwZGF0ZSBcIn1cblx0XHRcdFx0XHQ8dGltZSBkYXRlVGltZT17bmV3IERhdGUobWV0YS5kYXRlKS50b0lTT1N0cmluZygpfT5cblx0XHRcdFx0XHRcdHtmb3JtYXREYXRlKG1ldGEudXBkYXRlZCl9XG5cdFx0XHRcdFx0PC90aW1lPlxuXHRcdFx0XHQ8L1NMaW5rPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNtYWxsIGNsYXNzTmFtZT1cImRiIHR0dSBvLTQwXCI+XG5cdFx0XHQ8dGltZVxuXHRcdFx0XHRkYXRlVGltZT17XG5cdFx0XHRcdFx0bWV0YS5kYXRlID8gbmV3IERhdGUobWV0YS5kYXRlKS50b0lTT1N0cmluZygpIDogdW5kZWZpbmVkXG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0e2Zvcm1hdERhdGUobWV0YS5kYXRlKX1cblx0XHRcdDwvdGltZT5cblx0XHRcdHt1cGRhdGVkfVxuXHRcdDwvc21hbGw+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0VUkpXG4iXX0= */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/pages/post.tsx */"), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
//# sourceMappingURL=post.js.ccdc9c27ceff7b90193a.hot-update.js.map
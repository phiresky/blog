webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/TooltipLink.tsx":
/*!************************************!*\
  !*** ./components/TooltipLink.tsx ***!
  \************************************/
/*! exports provided: TooltipLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipLink", function() { return TooltipLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/content */ "./utils/content.ts");
/* harmony import */ var _Pandoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pandoc */ "./components/Pandoc.tsx");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



/**
 * if link is a citation link, then add a tooltip describing the link target
 */
function TooltipLink(_ref) {
  var _ref$c = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref.c, 3),
      _ref$c$ = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref$c[0], 3),
      id = _ref$c$[0],
      clazz = _ref$c$[1],
      kv = _ref$c$[2],
      inline = _ref$c[1],
      _ref$c$2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref$c[2], 2),
      url = _ref$c$2[0],
      title = _ref$c$2[1];

  var attrs = Object(_utils_content__WEBPACK_IMPORTED_MODULE_4__["fromEntries"])(kv);

  if (attrs["cite-meta"]) {
    var m = JSON.parse(attrs["cite-meta"]);
    return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: url,
      title: title || undefined
    }, Object(_Pandoc__WEBPACK_IMPORTED_MODULE_5__["attrProps"])([id, clazz, kv]), {
      className: "jsx-".concat(style.__hash) + " " + (clazz + " tooltip" || false)
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: style.__hash
    }, style), __jsx(_Pandoc__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ele: inline
    }), __jsx("span", {
      className: "jsx-".concat(style.__hash) + " " + "tooltip-content"
    }, __jsx("b", {
      className: "jsx-".concat(style.__hash)
    }, m.shorttitle || m.title), m["abstract"] && __jsx("p", {
      className: "jsx-".concat(style.__hash)
    }, m["abstract"]), __jsx("i", {
      className: "jsx-".concat(style.__hash) + " " + "arr"
    })));
  }

  return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: url,
    title: title || undefined
  }, Object(_Pandoc__WEBPACK_IMPORTED_MODULE_5__["attrProps"])([id, clazz, kv])), __jsx(_Pandoc__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ele: inline
  }));
}
var style = new String(".tooltip.jsx-88155938{position:relative;}.tooltip.jsx-88155938 .tooltip-content.jsx-88155938{min-width:300px;top:calc(100% + 12px);left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);padding:20px;color:#666666;background-color:#eeeeee;font-weight:normal;font-size:13px;border-radius:8px;position:absolute;z-index:99999999;box-sizing:border-box;box-shadow:0 1px 8px rgba(0,0,0,0.5);display:none;}.tooltip.jsx-88155938 .tooltip-content.jsx-88155938 i.arr.jsx-88155938{position:absolute;bottom:100%;left:50%;margin-left:-12px;width:24px;height:12px;overflow:hidden;}.tooltip.jsx-88155938 .tooltip-content.jsx-88155938 i.arr.jsx-88155938::after{content:\"\";position:absolute;width:12px;height:12px;left:50%;-webkit-transform:translate(-50%,50%) rotate(45deg);-ms-transform:translate(-50%,50%) rotate(45deg);transform:translate(-50%,50%) rotate(45deg);background-color:#eeeeee;box-shadow:0 1px 8px rgba(0,0,0,0.5);}.tooltip.jsx-88155938:hover .tooltip-content.jsx-88155938{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL2NvbXBvbmVudHMvVG9vbHRpcExpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDaUIsQUFFcUIsQUFFQSxBQWlCSSxBQVFMLEFBU0QsV0FSUSxHQVFQLEVBaENPLEVBSkwsQUFvQkgsV0FTQyxDQVJKLFFBaEJGLENBaUJXLENBUUosT0F4QmEsS0F5QmhCLEtBUkEsSUFTb0MsT0FSbkMsWUFDSSxnQkFBQywrQ0FsQk4sYUFDQyxjQUNXLHlCQUNOLFVBdUJVLFNBdEJkLGVBQ0csQ0FzQjBCLGlCQXJCMUIsa0JBQ0QsRUFvQjRCLGVBbkJ2QixzQkFDa0IscUNBQzNCLGFBQUMiLCJmaWxlIjoiL2hvbWUvdGVoZG9nL2RhdGEvZGV2LzIwMTkvYmxvZy9zcmMvY29tcG9uZW50cy9Ub29sdGlwTGluay50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRW50cmllcyB9IGZyb20gXCIuLi91dGlscy9jb250ZW50XCJcbmltcG9ydCB7IEVsdCB9IGZyb20gXCJwYW5kb2MtZmlsdGVyXCJcbmltcG9ydCBQYW5kb2MsIHsgYXR0clByb3BzIH0gZnJvbSBcIi4vUGFuZG9jXCJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCJcbi8qKlxuICogaWYgbGluayBpcyBhIGNpdGF0aW9uIGxpbmssIHRoZW4gYWRkIGEgdG9vbHRpcCBkZXNjcmliaW5nIHRoZSBsaW5rIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gVG9vbHRpcExpbmsoe1xuXHRjOiBbW2lkLCBjbGF6eiwga3ZdLCBpbmxpbmUsIFt1cmwsIHRpdGxlXV0sXG59OiBFbHQ8XCJMaW5rXCI+KSB7XG5cdGNvbnN0IGF0dHJzID0gZnJvbUVudHJpZXMoa3YpXG5cdGlmIChhdHRyc1tcImNpdGUtbWV0YVwiXSkge1xuXHRcdGNvbnN0IG0gPSBKU09OLnBhcnNlKGF0dHJzW1wiY2l0ZS1tZXRhXCJdKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPXt1cmx9XG5cdFx0XHRcdHRpdGxlPXt0aXRsZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdHsuLi5hdHRyUHJvcHMoW2lkLCBjbGF6eiwga3ZdKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGF6eiArIFwiIHRvb2x0aXBcIn1cblx0XHRcdD5cblx0XHRcdFx0PHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cblx0XHRcdFx0PFBhbmRvYyBlbGU9e2lubGluZX0gLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PGI+e20uc2hvcnR0aXRsZSB8fCBtLnRpdGxlfTwvYj5cblx0XHRcdFx0XHR7bS5hYnN0cmFjdCAmJiA8cD57bS5hYnN0cmFjdH08L3A+fVxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImFyclwiIC8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8YVxuXHRcdFx0aHJlZj17dXJsfVxuXHRcdFx0dGl0bGU9e3RpdGxlIHx8IHVuZGVmaW5lZH1cblx0XHRcdHsuLi5hdHRyUHJvcHMoW2lkLCBjbGF6eiwga3ZdKX1cblx0XHQ+XG5cdFx0XHQ8UGFuZG9jIGVsZT17aW5saW5lfSAvPlxuXHRcdDwvYT5cblx0KVxufVxuXG5jb25zdCBzdHlsZSA9IGNzc2Bcblx0LnRvb2x0aXAge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdC50b29sdGlwLWNvbnRlbnQge1xuXHRcdFx0bWluLXdpZHRoOiAzMDBweDtcblx0XHRcdC8qbWF4LXdpZHRoOjQwMHB4OyovXG5cdFx0XHR0b3A6IGNhbGMoMTAwJSArIDEycHgpO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0Y29sb3I6ICM2NjY2NjY7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHotaW5kZXg6IDk5OTk5OTk5O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0aS5hcnIge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMTAwJTtcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTEycHg7XG5cdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMnB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTJweDtcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmOmhvdmVyIC50b29sdGlwLWNvbnRlbnQge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG5gXG4iXX0= */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/components/TooltipLink.tsx */");
style.__hash = "88155938";

/***/ })

})
//# sourceMappingURL=post.js.6ad7b1ef79e74a182c3c.hot-update.js.map
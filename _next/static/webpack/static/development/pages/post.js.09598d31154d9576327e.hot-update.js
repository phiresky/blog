webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.tsx");
/* harmony import */ var _src_buildtime_get_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/buildtime/get-post */ "./src/buildtime/get-post.ts");
/* harmony import */ var _src_buildtime_get_post__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_buildtime_get_post__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/utils/content */ "./src/utils/content.ts");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_15__);

















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
      console.log("props", this.props);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2037267234"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2037267234"
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code:not(.hljs){border:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoaXJlL2RhdGEvZGV2LzIwMTkvbmV4dC1ibG9nL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDdUIsQUFHcUIsQUFRbUIsQUFJWCxBQU1BLGNBakJELFFBWVAsQUFNZixXQVZBLEdBS21CLGtCQUNOLFVBYm9CLEVBY2pDLDhCQWIyQiw0REFDM0IiLCJmaWxlIjoiL2hvbWUvcGhpcmUvZGF0YS9kZXYvMjAxOS9uZXh0LWJsb2cvcGFnZXMvcG9zdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9QYWdlXCJcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3NyYy9jb25maWdcIlxuaW1wb3J0IHsgUG9zdEpzb24gfSBmcm9tIFwiLlwiXG5pbXBvcnQgeyBOZXh0Q29udGV4dCB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBwb3N0cyBmcm9tIFwiLi4vc3JjL2J1aWxkdGltZS9nZXQtcG9zdFwiXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uL3NyYy9idWlsZHRpbWUvcGFyc2UtcG9zdHNcIlxuaW1wb3J0IHsgbWFrZVVybCB9IGZyb20gXCIuLi9zcmMvdXRpbHMvY29udGVudFwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuaW1wb3J0IHsgQmFyQ2hhcnQsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgTGVnZW5kLCBCYXIgfSBmcm9tIFwicmVjaGFydHNcIlxuaW1wb3J0IHsgbG9hZCB9IGZyb20gXCJqcy15YW1sXCJcblxudHlwZSBQcm9wcyA9IHsgcG9zdDogUG9zdCB9XG5cbmRlY2xhcmUgbW9kdWxlIFwicmVhY3RcIiB7XG5cdGludGVyZmFjZSBTdHlsZUhUTUxBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8VD4ge1xuXHRcdGpzeD86IGJvb2xlYW5cblx0XHRnbG9iYWw/OiBib29sZWFuXG5cdH1cbn1cblxuY2xhc3MgUG9zdFVJIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG5cdHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBOZXh0Q29udGV4dCk6IFByb3BzIHtcblx0XHQvLyB0b2RvOiBvbmx5IGxvYWQgc2luZ2xlIHBvc3Rcblx0XHQvL2NvbnNvbGUubG9nKHBvc3RzLm1hcChwID0+IG1ha2VVcmwocC5maWxlbmFtZSkpLCBjdHguYXNQYXRoKVxuXG5cdFx0Ly8gY29uc3Qgc2x1ZyA9IGN0eC5xdWVyeS5zbHVnXG5cdFx0Y29uc3QgcG9zdCA9IHBvc3RzLmZpbmQocCA9PiBtYWtlVXJsKHAuZmlsZW5hbWUpID09PSBjdHguYXNQYXRoKVxuXHRcdGlmICghcG9zdCkgdGhyb3cgRXJyb3IoYGNvdWxkIG5vdCBmaW5kIHBvc3QgJHtjdHguYXNQYXRofWApXG5cdFx0cmV0dXJuIHsgcG9zdCB9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcG9zdCB9ID0gdGhpcy5wcm9wc1xuXHRcdGNvbnNvbGUubG9nKFwicHJvcHNcIiwgdGhpcy5wcm9wcylcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuY29udGVudCBhIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMDM2NWE1O1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhOmhvdmVyLFxuXHRcdFx0XHRcdGE6Zm9jdXMge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudENvbG9yO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvZGUge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb2RlOm5vdCguaGxqcykge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PFBhZ2UgdGl0bGU9e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjZW50ZXIgbXc3IHBhMyBwYTQtbnNcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtdDAgbGgtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9XG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PFJlYWN0TWFya2Rvd24gcmVuZGVyZXJzPXt7IGNvZGU6IENvZGUgfX0+XG5cdFx0XHRcdFx0XHRcdHtwb3N0LmNvbnRlbnRfbWR9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0TWFya2Rvd24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvUGFnZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxudHlwZSBDb2RlUHJvcHMgPSB7IGxhbmd1YWdlPzogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1cblxuZnVuY3Rpb24gQ29kZShwcm9wczogQ29kZVByb3BzKSB7XG5cdGNvbnN0IGNvbXBvbmVudHM6IHsgW25hbWU6IHN0cmluZ106IFJlYWN0LkNvbXBvbmVudFR5cGU8Q29kZVByb3BzPiB9ID0ge1xuXHRcdGJhcmNoYXJ0OiBDb2RlQmFyQ2hhcnQsXG5cdH1cblx0Y29uc3QgQ29tcG9uZW50ID0gY29tcG9uZW50c1socHJvcHMubGFuZ3VhZ2UgfHwgXCJcIikgYXMgYW55XVxuXHRpZiAoQ29tcG9uZW50KSB7XG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuXHR9XG5cdHJldHVybiAoXG5cdFx0PHByZT5cblx0XHRcdDxjb2RlIGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0+e3Byb3BzLnZhbHVlfTwvY29kZT5cblx0XHQ8L3ByZT5cblx0KVxufVxuZnVuY3Rpb24gQ29kZUJhckNoYXJ0KHByb3BzOiBDb2RlUHJvcHMpIHtcblx0Y29uc3QgaW5mbyA9IGxvYWQocHJvcHMudmFsdWUpXG5cdGNvbnNvbGUubG9nKGluZm8pXG5cdGxldCBkYXRhID0gaW5mby5kYXRhXG5cdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuXHRcdGRhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFsdWUsXG5cdFx0fSkpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG5cdFx0XHRcdDxwPntpbmZvLnRpdGxlfTwvcD5cblx0XHRcdFx0e2luZm8uc3VidGl0bGUgJiYgPHA+e2luZm8uc3VidGl0bGV9PC9wPn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEJhckNoYXJ0IHdpZHRoPXs2MDB9IGhlaWdodD17MjAwfSBkYXRhPXtkYXRhfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxuXHRcdFx0XHQ8WEF4aXMgdHlwZT1cIm51bWJlclwiIC8+XG5cdFx0XHRcdDxZQXhpcyB0eXBlPVwiY2F0ZWdvcnlcIiBkYXRhS2V5PVwibmFtZVwiIHdpZHRoPXsyMDB9IC8+XG5cdFx0XHRcdDxUb29sdGlwIC8+XG5cdFx0XHRcdDxMZWdlbmQgLz5cblx0XHRcdFx0PEJhciBkYXRhS2V5PVwidmFsdWVcIiBuYW1lPXtpbmZvLnNlcmllc05hbWV9IGZpbGw9XCIjODg4NGQ4XCIgLz5cblx0XHRcdDwvQmFyQ2hhcnQ+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0VUkpXG4iXX0= */\n/*@ sourceURL=/home/phire/data/dev/2019/next-blog/pages/post.tsx */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: post.frontmatter.title
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2037267234" + " " + "content center mw7 pa3 pa4-ns"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2037267234" + " " + "mt0 lh-title"
      }, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
        renderers: {
          code: Code
        }
      }, post.content_md))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(ctx) {
      // todo: only load single post
      //console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)
      // const slug = ctx.query.slug
      var post = _src_buildtime_get_post__WEBPACK_IMPORTED_MODULE_11___default.a.find(function (p) {
        return Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_12__["makeUrl"])(p.filename) === ctx.asPath;
      });
      if (!post) throw Error("could not find post ".concat(ctx.asPath));
      return {
        post: post
      };
    }
  }]);

  return PostUI;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function Code(props) {
  var components = {
    barchart: CodeBarChart
  };
  var Component = components[props.language || ""];

  if (Component) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, props);
  }

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code", {
    className: "language-".concat(props.language)
  }, props.value));
}

function CodeBarChart(props) {
  var info = Object(js_yaml__WEBPACK_IMPORTED_MODULE_15__["load"])(props.value);
  console.log(info);
  var data = info.data;

  if (typeof data === "object") {
    data = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(data).map(function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      return {
        name: name,
        value: value
      };
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, info.title), info.subtitle && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, info.subtitle)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["BarChart"], {
    width: 600,
    height: 200,
    data: data,
    layout: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
    type: "number"
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["YAxis"], {
    type: "category",
    dataKey: "name",
    width: 200
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Legend"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Bar"], {
    dataKey: "value",
    name: info.seriesName,
    fill: "#8884d8"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(PostUI));

/***/ })

})
//# sourceMappingURL=post.js.09598d31154d9576327e.hot-update.js.map
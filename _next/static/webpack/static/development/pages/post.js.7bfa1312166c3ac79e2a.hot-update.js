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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
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
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown/with-html */ "../node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Code */ "./components/Code.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.ts");











 //import htmlParser from "react-markdown/plugins/html-parser"

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2809278127"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2809278127"
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code{border:1px solid #ddd;}pre code{border:none;}pre{white-space:pre-wrap;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDdUIsQUFHcUIsQUFRbUIsQUFJWCxBQU1BLEFBR1YsQUFHUyxZQUZ0QixFQXJCc0IsT0F3QkEsQ0FaUCxBQU1mLFdBVkEsR0FLbUIsTUFZbkIsWUFYYSxVQWJvQixFQWNqQyw4QkFiMkIsNERBQzNCIiwiZmlsZSI6Ii9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vLi4vc2VydmVyL2J1aWxkLXBvc3RzXCJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIlxuLy9pbXBvcnQgaHRtbFBhcnNlciBmcm9tIFwicmVhY3QtbWFya2Rvd24vcGx1Z2lucy9odG1sLXBhcnNlclwiXG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZVwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3NcIlxuaW1wb3J0IHsgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5cbnR5cGUgUHJvcHMgPSB7IHBvc3Q6IFBvc3QgfVxuXG5kZWNsYXJlIG1vZHVsZSBcInJlYWN0XCIge1xuXHRpbnRlcmZhY2UgU3R5bGVIVE1MQXR0cmlidXRlczxUPiBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPFQ+IHtcblx0XHRqc3g/OiBib29sZWFuXG5cdFx0Z2xvYmFsPzogYm9vbGVhblxuXHR9XG59XG5cbmNsYXNzIFBvc3RVSSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcyAmIFdpdGhSb3V0ZXJQcm9wcz4ge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogTmV4dFBhZ2VDb250ZXh0KTogUHJvbWlzZTxQcm9wcz4ge1xuXHRcdC8vIHRvZG86IG9ubHkgbG9hZCBzaW5nbGUgcG9zdFxuXHRcdC8vY29uc29sZS5sb2cocG9zdHMubWFwKHAgPT4gbWFrZVVybChwLmZpbGVuYW1lKSksIGN0eC5hc1BhdGgpXG5cblx0XHRjb25zdCBzbHVnID0gY3R4LnF1ZXJ5LnNsdWdcblx0XHRjb25zdCB1cmwgPSBjb25maWcuYmxvZ1Jvb3QgKyBzbHVnXG5cdFx0Y29uc3QgcG9zdCA9IHJlcXVpcmUoXCIuLi8uLi9wb3N0cy1idWlsdC9cIiArIHNsdWcgKyBcIi5tZC5qc29uXCIpXG5cblx0XHRpZiAoIXBvc3QpIHRocm93IEVycm9yKGBjb3VsZCBub3QgZmluZCBwb3N0ICR7dXJsfWApXG5cdFx0cmV0dXJuIHsgcG9zdCB9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcG9zdCB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5jb250ZW50IGEge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMzY1YTU7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGE6aG92ZXIsXG5cdFx0XHRcdFx0YTpmb2N1cyB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvZGUge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHJlIGNvZGUge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmUge1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdFx0XHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8UGFnZSB0aXRsZT17cG9zdC5mcm9udG1hdHRlci50aXRsZX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGNlbnRlciBtdzcgcGEzIHBhNC1uc1wiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm10MCBsaC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHR7cG9zdC5mcm9udG1hdHRlci50aXRsZX1cblx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHQ8UmVhY3RNYXJrZG93blxuXHRcdFx0XHRcdFx0XHRlc2NhcGVIdG1sPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0cmVuZGVyZXJzPXt7IGNvZGU6IENvZGUgfX1cblx0XHRcdFx0XHRcdFx0Ly9hc3RQbHVnaW5zPXtbaHRtbFBhcnNlcigpXX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3Bvc3QuY29udGVudF9tZH1cblx0XHRcdFx0XHRcdDwvUmVhY3RNYXJrZG93bj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9QYWdlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUG9zdFVJKVxuIl19 */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/pages/post.tsx */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: post.frontmatter.title
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2809278127" + " " + "content center mw7 pa3 pa4-ns"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2809278127" + " " + "mt0 lh-title"
      }, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_11___default.a, {
        escapeHtml: false,
        renderers: {
          code: _components_Code__WEBPACK_IMPORTED_MODULE_12__["Code"]
        } //astPlugins={[htmlParser()]}

      }, post.content_md))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var slug, url, post;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // todo: only load single post
                //console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)
                slug = ctx.query.slug;
                url = _config__WEBPACK_IMPORTED_MODULE_13__["config"].blogRoot + slug;
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
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PostUI;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(PostUI));

/***/ })

})
//# sourceMappingURL=post.js.7bfa1312166c3ac79e2a.hot-update.js.map
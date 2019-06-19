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
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/date */ "./utils/date.ts");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../post.scss */ "./post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_15__);











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
      var meta = post.frontmatter;
      var footer = undefined;

      if (_config__WEBPACK_IMPORTED_MODULE_13__["config"].postSourceUrlBase) {
        footer = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: _config__WEBPACK_IMPORTED_MODULE_13__["config"].postSourceUrlBase + post.filename
        }, "View post source on GitHub");
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2809278127"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2809278127"
      }, ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code{border:1px solid #ddd;}pre code{border:none;}pre{white-space:pre-wrap;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEdUIsQUFHcUIsQUFRbUIsQUFJWCxBQU1BLEFBR1YsQUFHUyxZQUZ0QixFQXJCc0IsT0F3QkEsQ0FaUCxBQU1mLFdBVkEsR0FLbUIsTUFZbkIsWUFYYSxVQWJvQixFQWNqQyw4QkFiMkIsNERBQzNCIiwiZmlsZSI6Ii9ob21lL3RlaGRvZy9kYXRhL2Rldi8yMDE5L2Jsb2cvc3JjL3BhZ2VzL3Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBQb3N0LCBGcm9udG1hdHRlciB9IGZyb20gXCIuLi8uLi9zZXJ2ZXIvYnVpbGQtcG9zdHNcIlxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duL3dpdGgtaHRtbFwiXG4vL2ltcG9ydCBodG1sUGFyc2VyIGZyb20gXCJyZWFjdC1tYXJrZG93bi9wbHVnaW5zL2h0bWwtcGFyc2VyXCJcbmltcG9ydCB7IENvZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2RlXCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzc1wiXG5pbXBvcnQgeyBXaXRoUm91dGVyUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVwiXG5pbXBvcnQgXCIuLi9wb3N0LnNjc3NcIlxuXG50eXBlIFByb3BzID0geyBwb3N0OiBQb3N0IH1cblxuZGVjbGFyZSBtb2R1bGUgXCJyZWFjdFwiIHtcblx0aW50ZXJmYWNlIFN0eWxlSFRNTEF0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxUPiB7XG5cdFx0anN4PzogYm9vbGVhblxuXHRcdGdsb2JhbD86IGJvb2xlYW5cblx0fVxufVxuXG5jbGFzcyBQb3N0VUkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMgJiBXaXRoUm91dGVyUHJvcHM+IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8UHJvcHM+IHtcblx0XHQvLyB0b2RvOiBvbmx5IGxvYWQgc2luZ2xlIHBvc3Rcblx0XHQvL2NvbnNvbGUubG9nKHBvc3RzLm1hcChwID0+IG1ha2VVcmwocC5maWxlbmFtZSkpLCBjdHguYXNQYXRoKVxuXG5cdFx0Y29uc3Qgc2x1ZyA9IGN0eC5xdWVyeS5zbHVnXG5cdFx0Y29uc3QgdXJsID0gY29uZmlnLmJsb2dSb290ICsgc2x1Z1xuXHRcdGNvbnN0IHBvc3QgPSByZXF1aXJlKFwiLi4vLi4vcG9zdHMtYnVpbHQvXCIgKyBzbHVnICsgXCIubWQuanNvblwiKVxuXG5cdFx0aWYgKCFwb3N0KSB0aHJvdyBFcnJvcihgY291bGQgbm90IGZpbmQgcG9zdCAke3VybH1gKVxuXHRcdHJldHVybiB7IHBvc3QgfVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHBvc3QgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCBtZXRhID0gcG9zdC5mcm9udG1hdHRlclxuXHRcdGxldCBmb290ZXIgPSB1bmRlZmluZWRcblx0XHRpZiAoY29uZmlnLnBvc3RTb3VyY2VVcmxCYXNlKSB7XG5cdFx0XHRmb290ZXIgPSAoXG5cdFx0XHRcdDxhIGhyZWY9e2NvbmZpZy5wb3N0U291cmNlVXJsQmFzZSArIHBvc3QuZmlsZW5hbWV9PlxuXHRcdFx0XHRcdFZpZXcgcG9zdCBzb3VyY2Ugb24gR2l0SHViXG5cdFx0XHRcdDwvYT5cblx0XHRcdClcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LmNvbnRlbnQgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzAzNjVhNTtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YTpob3Zlcixcblx0XHRcdFx0XHRhOmZvY3VzIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb2RlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmUgY29kZSB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHByZSB7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0XHRcdFx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDxQYWdlXG5cdFx0XHRcdFx0dGl0bGU9e21ldGEudGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Bvc3QucHJldmlld31cblx0XHRcdFx0XHRmb290ZXI9e2Zvb3Rlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjZW50ZXIgbXc3IHBhMyBwYTQtbnNcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtdDAgbGgtdGl0bGVcIj57bWV0YS50aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0PFBvc3REYXRlIHBvc3Q9e3Bvc3R9IC8+XG5cblx0XHRcdFx0XHRcdDxSZWFjdE1hcmtkb3duXG5cdFx0XHRcdFx0XHRcdGVzY2FwZUh0bWw9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlcnM9e3sgY29kZTogQ29kZSB9fVxuXHRcdFx0XHRcdFx0XHQvL2FzdFBsdWdpbnM9e1todG1sUGFyc2VyKCldfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7cG9zdC5jb250ZW50X21kfVxuXHRcdFx0XHRcdFx0PC9SZWFjdE1hcmtkb3duPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L1BhZ2U+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cbmZ1bmN0aW9uIFBvc3REYXRlKHsgcG9zdDogeyBmcm9udG1hdHRlcjogbWV0YSwgZmlsZW5hbWUgfSB9OiB7IHBvc3Q6IFBvc3QgfSkge1xuXHRsZXQgdXBkYXRlZCA9IG51bGxcblx0aWYgKG1ldGEudXBkYXRlZCkge1xuXHRcdGNvbnN0IFNMaW5rID0gY29uZmlnLnBvc3RTb3VyY2VIaXN0b3J5VXJsQmFzZVxuXHRcdFx0PyAoeyBjaGlsZHJlbiA9IG51bGwgYXMgYW55IH0pID0+IChcblx0XHRcdFx0XHQ8YSBocmVmPXtjb25maWcucG9zdFNvdXJjZUhpc3RvcnlVcmxCYXNlICsgZmlsZW5hbWV9PlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdCAgKVxuXHRcdFx0OiBGcmFnbWVudFxuXHRcdHVwZGF0ZWQgPSAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7XCIg4oCiIFwifVxuXHRcdFx0XHQ8U0xpbms+XG5cdFx0XHRcdFx0e1wiTGFzdCBVcGRhdGUgXCJ9XG5cdFx0XHRcdFx0PHRpbWUgZGF0ZVRpbWU9e25ldyBEYXRlKG1ldGEuZGF0ZSkudG9JU09TdHJpbmcoKX0+XG5cdFx0XHRcdFx0XHR7Zm9ybWF0RGF0ZShtZXRhLnVwZGF0ZWQpfVxuXHRcdFx0XHRcdDwvdGltZT5cblx0XHRcdFx0PC9TTGluaz5cblx0XHRcdDwvPlxuXHRcdClcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxzbWFsbCBjbGFzc05hbWU9XCJkYiB0dHUgby00MFwiPlxuXHRcdFx0PHRpbWUgZGF0ZVRpbWU9e25ldyBEYXRlKG1ldGEuZGF0ZSkudG9JU09TdHJpbmcoKX0+XG5cdFx0XHRcdHtmb3JtYXREYXRlKG1ldGEuZGF0ZSl9XG5cdFx0XHQ8L3RpbWU+XG5cdFx0XHR7dXBkYXRlZH1cblx0XHQ8L3NtYWxsPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUG9zdFVJKVxuIl19 */\n/*@ sourceURL=/home/tehdog/data/dev/2019/blog/src/pages/post.tsx */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: meta.title,
        description: post.preview,
        footer: footer
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2809278127" + " " + "content center mw7 pa3 pa4-ns"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2809278127" + " " + "mt0 lh-title"
      }, meta.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PostDate, {
        post: post
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_11___default.a, {
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

function PostDate(_ref) {
  var _ref$post = _ref.post,
      meta = _ref$post.frontmatter,
      filename = _ref$post.filename;
  var updated = null;

  if (meta.updated) {
    var SLink = _config__WEBPACK_IMPORTED_MODULE_13__["config"].postSourceHistoryUrlBase ? function (_ref2) {
      var _ref2$children = _ref2.children,
          children = _ref2$children === void 0 ? null : _ref2$children;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: _config__WEBPACK_IMPORTED_MODULE_13__["config"].postSourceHistoryUrlBase + filename
      }, children);
    } : react__WEBPACK_IMPORTED_MODULE_8__["Fragment"];
    updated = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, " • ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SLink, null, "Last Update ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("time", {
      dateTime: new Date(meta.date).toISOString()
    }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_14__["formatDate"])(meta.updated))));
  }

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
    className: "db ttu o-40"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("time", {
    dateTime: new Date(meta.date).toISOString()
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_14__["formatDate"])(meta.date)), updated);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(PostUI));

/***/ })

})
//# sourceMappingURL=post.js.889eedf33db695938cfb.hot-update.js.map
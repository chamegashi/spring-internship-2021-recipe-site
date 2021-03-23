webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_recipesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/recipesList */ "./components/recipesList.tsx");


var _jsxFileName = "C:\\Users\\msy\\Documents\\cords\\cookpad\\spring-internship-2021-recipe-site\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Home = function Home(props) {
  _s();

  var RecipesResponce = props.RecipesResponce;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  if (RecipesResponce === null) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: " Loading "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 40
  }, _this);

  var searchTextChange = function searchTextChange(event) {
    setSearchText(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App text-gray-700",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-center py-2 bg-gray-300 text-3xl",
        children: "\u30EC\u30B7\u30D4\u691C\u7D22\uFF01"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white flex items-center rounded-md border border-gray-200",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none",
          type: "text",
          name: "searchText",
          value: searchText,
          onChange: searchTextChange,
          placeholder: "\u30EC\u30B7\u30D4\u306E\u691C\u7D22"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '/search/keyword=' + searchText,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/search.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_recipesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      recipes: RecipesResponce.recipes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-24 relative",
      children: [function () {
        if (RecipesResponce.links.prev) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '/' + RecipesResponce.links.prev.split('?')[1],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-7 mx-3 font-semibold absolute left-0",
              children: "\u524D\u306E\u30DA\u30FC\u30B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 24
          }, _this);
        }
      }(), function () {
        if (RecipesResponce.links.next) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '/' + RecipesResponce.links.next.split('?')[1],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-7 mx-3 font-semibold absolute right-0",
              children: "\u6B21\u306E\u30DA\u30FC\u30B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 22
          }, _this);
        }
      }()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(Home, "lpZkT7pWeo+MC0liMHDzSFPwEJc=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIlJlY2lwZXNSZXNwb25jZSIsInVzZVN0YXRlIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJzZWFyY2hUZXh0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlY2lwZXMiLCJsaW5rcyIsInByZXYiLCJzcGxpdCIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLElBQWUsR0FBRyxTQUFsQkEsSUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFFekJDLGVBRnlCLEdBRUxELEtBRkssQ0FFekJDLGVBRnlCOztBQUFBLGtCQUdHQyxzREFBUSxDQUFTLEVBQVQsQ0FIWDtBQUFBLE1BRzFCQyxVQUgwQjtBQUFBLE1BR2RDLGFBSGM7O0FBS2pDLE1BQUlILGVBQWUsS0FBSyxJQUF4QixFQUE4QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUU5QixNQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQ0YsaUJBQWEsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsc0JBQ007QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLHVDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyw4REFBZjtBQUFBLGdDQUNFO0FBQU8sbUJBQVMsRUFBQywrRUFBakI7QUFBaUcsY0FBSSxFQUFDLE1BQXRHO0FBQTZHLGNBQUksRUFBQyxZQUFsSDtBQUErSCxlQUFLLEVBQUVMLFVBQXRJO0FBQWtKLGtCQUFRLEVBQUVFLGdCQUE1SjtBQUE4SyxxQkFBVyxFQUFDO0FBQTFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRSxxQkFBcUJGLFVBQWpDO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFDLDhJQUFsQjtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBa0JBLHFFQUFDLCtEQUFEO0FBQWEsYUFBTyxFQUFFRixlQUFlLENBQUNRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkEsZUFvQkE7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGlCQUVJLFlBQU07QUFDSixZQUFHUixlQUFlLENBQUNTLEtBQWhCLENBQXNCQyxJQUF6QixFQUErQjtBQUM3Qiw4QkFBTyxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsTUFBTVYsZUFBZSxDQUFDUyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJDLEtBQTNCLENBQWlDLEdBQWpDLEVBQXNDLENBQXRDLENBQWxCO0FBQUEsbUNBQ0w7QUFBSyx1QkFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUdEO0FBQ0YsT0FORixFQUZILEVBVUksWUFBTTtBQUNOLFlBQUdYLGVBQWUsQ0FBQ1MsS0FBaEIsQ0FBc0JHLElBQXpCLEVBQStCO0FBQzdCLDhCQUFPLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRSxNQUFNWixlQUFlLENBQUNTLEtBQWhCLENBQXNCRyxJQUF0QixDQUEyQkQsS0FBM0IsQ0FBaUMsR0FBakMsRUFBc0MsQ0FBdEMsQ0FBbEI7QUFBQSxtQ0FDTDtBQUFLLHVCQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBR0Q7QUFDQSxPQU5GLEVBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUROO0FBMENELENBckREOztHQUFNYixJOztLQUFBQSxJOztBQWdFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdhYjg4ZjJiMjljNjljMGQ1MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0UmVjaXBlcywgUmVjaXBlc1Jlc3BvbmNlfSBmcm9tICcuL2FwaS9nZXRSZWNpcGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IFJlY2lwZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVjaXBlc0xpc3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBSZWNpcGVzUmVzcG9uY2U6IFJlY2lwZXNSZXNwb25jZTtcclxufVxyXG5cclxuY29uc3QgSG9tZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgUmVjaXBlc1Jlc3BvbmNlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICBpZiAoUmVjaXBlc1Jlc3BvbmNlID09PSBudWxsKSByZXR1cm4gPGRpdj4gTG9hZGluZyA8L2Rpdj5cclxuXHJcbiAgY29uc3Qgc2VhcmNoVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LTN4bFwiPuODrOOCt+ODlOaknOe0ou+8gTwvaDE+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTEgcHgtMyB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hUZXh0XCIgdmFsdWU9e3NlYXJjaFRleHR9IG9uQ2hhbmdlPXtzZWFyY2hUZXh0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIuODrOOCt+ODlOOBruaknOe0olwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvc2VhcmNoL2tleXdvcmQ9JyArIHNlYXJjaFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIGhvdmVyOmJnLWJsdWUtMzAwIGZvY3VzOm91dGxpbmUtbm9uZSB3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2VhcmNoLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFJlY2lwZXNMaXN0IHJlY2lwZXM9e1JlY2lwZXNSZXNwb25jZS5yZWNpcGVzfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCByZWxhdGl2ZVwiPlxyXG5cclxuICAgICAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKFJlY2lwZXNSZXNwb25jZS5saW5rcy5wcmV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17Jy8nICsgUmVjaXBlc1Jlc3BvbmNlLmxpbmtzLnByZXYuc3BsaXQoJz8nKVsxXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNyBteC0zIGZvbnQtc2VtaWJvbGQgYWJzb2x1dGUgbGVmdC0wXCI+5YmN44Gu44Oa44O844K4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSgpfVxyXG5cclxuICAgICAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihSZWNpcGVzUmVzcG9uY2UubGlua3MubmV4dCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXsnLycgKyBSZWNpcGVzUmVzcG9uY2UubGlua3MubmV4dC5zcGxpdCgnPycpWzFdfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNyBteC0zIGZvbnQtc2VtaWJvbGQgYWJzb2x1dGUgcmlnaHQtMFwiPuasoeOBruODmuODvOOCuDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSgpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBSZWNpcGVzUmVzcG9uY2UgPSBhd2FpdCBnZXRSZWNpcGVzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIFJlY2lwZXNSZXNwb25jZTogUmVjaXBlc1Jlc3BvbmNlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
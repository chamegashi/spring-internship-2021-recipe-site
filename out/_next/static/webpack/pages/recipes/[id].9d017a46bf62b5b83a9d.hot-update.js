webpackHotUpdate_N_E("pages/recipes/[id]",{

/***/ "./pages/recipes/[id].tsx":
/*!********************************!*\
  !*** ./pages/recipes/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_getRecipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getRecipes */ "./pages/api/getRecipes.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\msy\\Documents\\cords\\cookpad\\spring-internship-2021-recipe-site\\pages\\recipes\\[id].tsx",
    _s = $RefreshSig$();







function RecipePage() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      recipe = _useState[0],
      setRecipe = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var recipe;
      return C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(router.query.id);
              _context.next = 3;
              return Object(_api_getRecipes__WEBPACK_IMPORTED_MODULE_5__["getRecipe"])(router.query.id);

            case 3:
              recipe = _context.sent;
              setRecipe(recipe);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  if (recipe === null) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: " Loading "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 33
  }, this);

  var searchTextChange = function searchTextChange(event) {
    setSearchText(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-gray-700",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-center py-2 bg-gray-300 text-3xl",
        children: "\u30EC\u30B7\u30D4\u691C\u7D22\uFF01"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/search/keyword=' + searchText,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/search.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: recipe.image_url,
      className: "width-full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "m-2 text-xl font-black",
      children: recipe.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-gray-600 text-xs",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "p-3",
        children: recipe.author.user_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "p-3",
        children: recipe.published_at
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "m-3 text-sm",
      children: recipe.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-2 py-1 pl-4 font-semibold bg-gray-300",
      children: "\u6750\u6599"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), recipe.ingredients.map(function (food, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative border-t-2 border-gray-300 h-14",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "m-3.5 font-semibold absolute left-0",
          children: food.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "m-3.5 font-semibold absolute right-0",
          children: food.quantity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 22
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-2 py-1 pl-4 font-semibold bg-gray-300",
      children: "\u624B\u9806"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), recipe.steps.map(function (step, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-t-2 border-gray-300",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "p-4 font-semibold",
          children: i + 1 + ". " + step
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 22
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(RecipePage, "M8y30XpZB/VsqRcLRrFFKWsm7rI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = RecipePage;
/* harmony default export */ __webpack_exports__["default"] = (RecipePage);

var _c;

$RefreshReg$(_c, "RecipePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy8udHN4Il0sIm5hbWVzIjpbIlJlY2lwZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInJlY2lwZSIsInNldFJlY2lwZSIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJnZXRSZWNpcGUiLCJzZWFyY2hUZXh0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltYWdlX3VybCIsInRpdGxlIiwiYXV0aG9yIiwidXNlcl9uYW1lIiwicHVibGlzaGVkX2F0IiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50cyIsIm1hcCIsImZvb2QiLCJpIiwibmFtZSIsInF1YW50aXR5Iiwic3RlcHMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQixrQkFHVUMsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FIbEI7QUFBQSxNQUdYQyxNQUhXO0FBQUEsTUFHSEMsU0FIRzs7QUFBQSxtQkFJa0JGLHNEQUFRLENBQVMsRUFBVCxDQUoxQjtBQUFBLE1BSVhHLFVBSlc7QUFBQSxNQUlDQyxhQUpEOztBQU1sQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsMlZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBTSxDQUFDVSxLQUFQLENBQWFDLEVBQXpCO0FBREQ7QUFBQSxxQkFFc0JDLGlFQUFTLENBQUNaLE1BQU0sQ0FBQ1UsS0FBUCxDQUFhQyxFQUFkLENBRi9COztBQUFBO0FBRU9SLG9CQUZQO0FBR0NDLHVCQUFTLENBQUNELE1BQUQsQ0FB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QUEsU0FBVUYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFJRCxLQUxBLENBM0JMLGVBa0NJO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKLEVBbUNLdkIsTUFBTSxDQUFDMEIsS0FBUCxDQUFhTCxHQUFiLENBQWlCLFVBQUNNLElBQUQsRUFBT0osQ0FBUCxFQUFhO0FBQzdCLDBCQUFPO0FBQWEsaUJBQVMsRUFBQyw0QkFBdkI7QUFBQSwrQkFDSDtBQUFHLG1CQUFTLEVBQUMsbUJBQWI7QUFBQSxvQkFBbUNBLENBQUMsR0FBQyxDQUFILEdBQVEsSUFBUixHQUFlSTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsU0FBVUosQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFHRCxLQUpBLENBbkNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNENIOztHQWhFUTNCLFU7VUFDVUUscUQ7OztLQURWRixVO0FBa0VNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tpZF0uOWQwMTdhNDZiZjYyYjViODNhOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UmVjaXBlLCBSZWNpcGUgfSBmcm9tICcuLi9hcGkvZ2V0UmVjaXBlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuXHJcbmZ1bmN0aW9uIFJlY2lwZVBhZ2UoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGU8UmVjaXBlIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgY29uc3QgcmVjaXBlID0gYXdhaXQgZ2V0UmVjaXBlKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgICAgc2V0UmVjaXBlKHJlY2lwZSk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICBpZiAocmVjaXBlID09PSBudWxsKSByZXR1cm4gPGRpdj4gTG9hZGluZyA8L2Rpdj5cclxuICBcclxuICAgIGNvbnN0IHNlYXJjaFRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgc2V0U2VhcmNoVGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LTN4bFwiPuODrOOCt+ODlOaknOe0ou+8gTwvaDE+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMSBweC0zIHRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFRleHRcIiB2YWx1ZT17c2VhcmNoVGV4dH0gb25DaGFuZ2U9e3NlYXJjaFRleHRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwi44Os44K344OU44Gu5qSc57SiXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvc2VhcmNoL2tleXdvcmQ9JyArIHNlYXJjaFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgaG92ZXI6YmctYmx1ZS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NlYXJjaC5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlY2lwZS5pbWFnZV91cmx9IGNsYXNzTmFtZT1cIndpZHRoLWZ1bGxcIj48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIgdGV4dC14bCBmb250LWJsYWNrXCI+e3JlY2lwZS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtM1wiPntyZWNpcGUuYXV0aG9yLnVzZXJfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLTNcIj57cmVjaXBlLnB1Ymxpc2hlZF9hdH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMyB0ZXh0LXNtXCI+e3JlY2lwZS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBweS0xIHBsLTQgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTMwMFwiPuadkOaWmTwvZGl2PlxyXG4gICAgICAgICAgICB7cmVjaXBlLmluZ3JlZGllbnRzLm1hcCgoZm9vZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLXQtMiBib3JkZXItZ3JheS0zMDAgaC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTMuNSBmb250LXNlbWlib2xkIGFic29sdXRlIGxlZnQtMFwiPntmb29kLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTMuNSBmb250LXNlbWlib2xkIGFic29sdXRlIHJpZ2h0LTBcIj57Zm9vZC5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHB5LTEgcGwtNCBmb250LXNlbWlib2xkIGJnLWdyYXktMzAwXCI+5omL6aCGPC9kaXY+XHJcbiAgICAgICAgICAgIHtyZWNpcGUuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItdC0yIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgZm9udC1zZW1pYm9sZFwiPnsoaSsxKSArIFwiLiBcIiArIHN0ZXB9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9
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
              _context.next = 2;
              return Object(_api_getRecipes__WEBPACK_IMPORTED_MODULE_5__["getRecipe"])(router.query.id);

            case 2:
              recipe = _context.sent;
              setRecipe(recipe);

            case 4:
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
    lineNumber: 20,
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
        lineNumber: 29,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
          lineNumber: 34,
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
                lineNumber: 38,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: recipe.image_url,
      className: "width-full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "m-2 text-xl font-black",
      children: recipe.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-gray-600 text-xs",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "p-3",
        children: recipe.author.user_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "p-3",
        children: recipe.published_at
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "m-3 text-sm",
      children: recipe.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-2 py-1 pl-4 font-semibold bg-gray-300",
      children: "\u6750\u6599"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), recipe.ingredients.map(function (food, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative border-t-2 border-gray-300 h-14",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "m-3.5 font-semibold absolute left-0",
          children: food.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "m-3.5 font-semibold absolute right-0",
          children: food.quantity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 22
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-2 py-1 pl-4 font-semibold bg-gray-300",
      children: "\u624B\u9806"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), recipe.steps.map(function (step, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-t-2 border-gray-300",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "p-4 font-semibold",
          children: i + 1 + ". " + step
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 22
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy8udHN4Il0sIm5hbWVzIjpbIlJlY2lwZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInJlY2lwZSIsInNldFJlY2lwZSIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0IiwidXNlRWZmZWN0IiwiZ2V0UmVjaXBlIiwicXVlcnkiLCJpZCIsInNlYXJjaFRleHRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaW1hZ2VfdXJsIiwidGl0bGUiLCJhdXRob3IiLCJ1c2VyX25hbWUiLCJwdWJsaXNoZWRfYXQiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwibWFwIiwiZm9vZCIsImkiLCJuYW1lIiwicXVhbnRpdHkiLCJzdGVwcyIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtCLGtCQUdVQyxzREFBUSxDQUFnQixJQUFoQixDQUhsQjtBQUFBLE1BR1hDLE1BSFc7QUFBQSxNQUdIQyxTQUhHOztBQUFBLG1CQUlrQkYsc0RBQVEsQ0FBUyxFQUFULENBSjFCO0FBQUEsTUFJWEcsVUFKVztBQUFBLE1BSUNDLGFBSkQ7O0FBTWxCQyx5REFBUyxDQUFDLFlBQU07QUFDZCwyVkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNzQkMsaUVBQVMsQ0FBQ1IsTUFBTSxDQUFDUyxLQUFQLENBQWFDLEVBQWQsQ0FEL0I7O0FBQUE7QUFDT1Asb0JBRFA7QUFFQ0MsdUJBQVMsQ0FBQ0QsTUFBRCxDQUFUOztBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Es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LDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKLEVBbUNLckIsTUFBTSxDQUFDd0IsS0FBUCxDQUFhTCxHQUFiLENBQWlCLFVBQUNNLElBQUQsRUFBT0osQ0FBUCxFQUFhO0FBQzdCLDBCQUFPO0FBQWEsaUJBQVMsRUFBQyw0QkFBdkI7QUFBQSwrQkFDSDtBQUFHLG1CQUFTLEVBQUMsbUJBQWI7QUFBQSxvQkFBbUNBLENBQUMsR0FBQyxDQUFILEdBQVEsSUFBUixHQUFlSTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsU0FBVUosQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFHRCxLQUpBLENBbkNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNENIOztHQS9EUXpCLFU7VUFDVUUscUQ7OztLQURWRixVO0FBaUVNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tpZF0uZDI5OTkyYzUyNTAxODM0Njc2ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UmVjaXBlLCBSZWNpcGUgfSBmcm9tICcuLi9hcGkvZ2V0UmVjaXBlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuXHJcbmZ1bmN0aW9uIFJlY2lwZVBhZ2UoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGU8UmVjaXBlIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgICBzZXRSZWNpcGUocmVjaXBlKTtcclxuICAgICAgfSkoKTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIGlmIChyZWNpcGUgPT09IG51bGwpIHJldHVybiA8ZGl2PiBMb2FkaW5nIDwvZGl2PlxyXG4gIFxyXG4gICAgY29uc3Qgc2VhcmNoVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBzZXRTZWFyY2hUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yIGJnLWdyYXktMzAwIHRleHQtM3hsXCI+44Os44K344OU5qSc57Si77yBPC9oMT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBweS0xIHB4LTMgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoVGV4dFwiIHZhbHVlPXtzZWFyY2hUZXh0fSBvbkNoYW5nZT17c2VhcmNoVGV4dENoYW5nZX0gcGxhY2Vob2xkZXI9XCLjg6zjgrfjg5Tjga7mpJzntKJcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9zZWFyY2gva2V5d29yZD0nICsgc2VhcmNoVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiBob3ZlcjpiZy1ibHVlLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2VhcmNoLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlLmltYWdlX3VybH0gY2xhc3NOYW1lPVwid2lkdGgtZnVsbFwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMiB0ZXh0LXhsIGZvbnQtYmxhY2tcIj57cmVjaXBlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC14c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0zXCI+e3JlY2lwZS5hdXRob3IudXNlcl9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtM1wiPntyZWNpcGUucHVibGlzaGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIHRleHQtc21cIj57cmVjaXBlLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHB5LTEgcGwtNCBmb250LXNlbWlib2xkIGJnLWdyYXktMzAwXCI+5p2Q5paZPC9kaXY+XHJcbiAgICAgICAgICAgIHtyZWNpcGUuaW5ncmVkaWVudHMubWFwKChmb29kLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItdC0yIGJvcmRlci1ncmF5LTMwMCBoLTE0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMy41IGZvbnQtc2VtaWJvbGQgYWJzb2x1dGUgbGVmdC0wXCI+e2Zvb2QubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMy41IGZvbnQtc2VtaWJvbGQgYWJzb2x1dGUgcmlnaHQtMFwiPntmb29kLnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgcHktMSBwbC00IGZvbnQtc2VtaWJvbGQgYmctZ3JheS0zMDBcIj7miYvpoIY8L2Rpdj5cclxuICAgICAgICAgICAge3JlY2lwZS5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCBmb250LXNlbWlib2xkXCI+eyhpKzEpICsgXCIuIFwiICsgc3RlcH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=
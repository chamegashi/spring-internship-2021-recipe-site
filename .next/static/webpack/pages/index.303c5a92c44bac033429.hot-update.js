webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/getRecipes.tsx":
/*!******************************!*\
  !*** ./pages/getRecipes.tsx ***!
  \******************************/
/*! exports provided: getRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipes", function() { return getRecipes; });
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


function getRecipes() {
  return _getRecipes.apply(this, arguments);
}

function _getRecipes() {
  _getRecipes = Object(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, recipes;
    return C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://internship-recipe-api.ckpd.co/recipes', {
              headers: {
                'X-Api-Key': 'remark-fish-magician'
              }
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            recipes = _context.sent;
            console.log(recipes);
            console.log(recipes.recipes[0]);
            return _context.abrupt("return", recipes.recipes[0]);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRecipes.apply(this, arguments);
}

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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getRecipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRecipes */ "./pages/getRecipes.tsx");



var _jsxFileName = "C:\\Users\\msy\\Documents\\cords\\cookpad\\spring-internship-2021-recipe-site\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      recipe = _useState[0],
      setRecipe = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var recipe;
      return C_Users_msy_Documents_cords_cookpad_spring_internship_2021_recipe_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_getRecipes__WEBPACK_IMPORTED_MODULE_3__["getRecipes"])();

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
  if (recipe === null) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 31
    }
  }, " Loading ");
  return __jsx("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "test!"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, recipe.title));
};

_s(Home, "ABVStMmGS+bQ33IV6osc8zsYsnM=");

_c = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0UmVjaXBlcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJnZXRSZWNpcGVzIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlY2lwZXMiLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsInVzZVN0YXRlIiwicmVjaXBlIiwic2V0UmVjaXBlIiwidXNlRWZmZWN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBZUEsVUFBdEI7QUFBQTtBQUFBOzs7dVdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYUMsS0FBSyxDQUFDLCtDQUFELEVBQWtEO0FBQ3hFQyxxQkFBTyxFQUFFO0FBQUUsNkJBQWE7QUFBZjtBQUQrRCxhQUFsRCxDQURsQjs7QUFBQTtBQUNDQyxlQUREO0FBQUE7QUFBQSxtQkFJaUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUpqQjs7QUFBQTtBQUlDQyxtQkFKRDtBQUtMQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNBLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBWjtBQU5LLDZDQU9FQSxPQUFPLENBQUNBLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FQRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUDtBQUNBOztBQUdBLElBQU1HLElBQVEsR0FBRyxTQUFYQSxJQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FGZjtBQUFBLE1BRWRDLE1BRmM7QUFBQSxNQUVOQyxTQUZNOztBQUlyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsMlZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDc0JaLDhEQUFVLEVBRGhDOztBQUFBO0FBQ09VLG9CQURQO0FBRUNDLHVCQUFTLENBQUNELE1BQUQsQ0FBVDs7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLE1BQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUVyQixTQUNNO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTSxDQUFDRyxLQUFaLENBSkYsQ0FETjtBQVFELENBckJEOztHQUFNTCxJOztLQUFBQSxJO0FBdUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDNjNWE5MmM0NGJhYzAzMzQyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgfSBmcm9tIFwibm9kZTpmc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVjaXBlID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbWFnZVVybDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHN0ZXBzOiBzdHJpbmdbXTtcclxuICAgIGluZ3JlZGllbnRzOiB7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgcXVhbnRpdHk6IHN0cmluZztcclxuICAgIH1bXTtcclxufTtcclxuICBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2lwZXMoKTogUHJvbWlzZTxSZWNpcGU+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pbnRlcm5zaGlwLXJlY2lwZS1hcGkuY2twZC5jby9yZWNpcGVzJywge1xyXG4gICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiAncmVtYXJrLWZpc2gtbWFnaWNpYW4nIH1cclxuICB9KTtcclxuICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhyZWNpcGVzKVxyXG4gIGNvbnNvbGUubG9nKHJlY2lwZXMucmVjaXBlc1swXSlcclxuICByZXR1cm4gcmVjaXBlcy5yZWNpcGVzWzBdO1xyXG59XHJcbiAiLCJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0UmVjaXBlcywgUmVjaXBlIH0gZnJvbSAnLi9nZXRSZWNpcGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgSG9tZTogRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtyZWNpcGUsIHNldFJlY2lwZV0gPSB1c2VTdGF0ZTxSZWNpcGUgfCBudWxsPihudWxsKTtcclxuICAgIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGVzKCk7XHJcbiAgICAgIHNldFJlY2lwZShyZWNpcGUpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChyZWNpcGUgPT09IG51bGwpIHJldHVybiA8ZGl2PiBMb2FkaW5nIDwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj48L2hlYWRlcj5cclxuICAgICAgICAgIDxoMT50ZXN0ITwvaDE+XHJcbiAgICBcclxuICAgICAgICAgIDxoMj57cmVjaXBlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
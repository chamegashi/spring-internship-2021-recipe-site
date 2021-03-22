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
            return _context.abrupt("return", recipes.recipes[0]);

          case 7:
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0UmVjaXBlcy50c3giXSwibmFtZXMiOlsiZ2V0UmVjaXBlcyIsImZldGNoIiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZWNpcGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFlQSxVQUF0QjtBQUFBO0FBQUE7Ozt1V0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNhQyxLQUFLLENBQUMsK0NBQUQsRUFBa0Q7QUFDeEVDLHFCQUFPLEVBQUU7QUFBRSw2QkFBYTtBQUFmO0FBRCtELGFBQWxELENBRGxCOztBQUFBO0FBQ0NDLGVBREQ7QUFBQTtBQUFBLG1CQUlpQkEsR0FBRyxDQUFDQyxJQUFKLEVBSmpCOztBQUFBO0FBSUNDLG1CQUpEO0FBQUEsNkNBS0VBLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQixDQUFoQixDQUxGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjVkMTVjYjhhNWUwMTczNGM4OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VzIH0gZnJvbSBcIm5vZGU6ZnNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlY2lwZSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGltYWdlX3VybDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICB1c2VyX25hbWU6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBzdGVwczogc3RyaW5nW107XHJcbiAgICBpbmdyZWRpZW50czoge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIHF1YW50aXR5OiBzdHJpbmc7XHJcbiAgICB9W107XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGVzKCk6IFByb21pc2U8UmVjaXBlPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlcycsIHtcclxuICAgaGVhZGVyczogeyAnWC1BcGktS2V5JzogJ3JlbWFyay1maXNoLW1hZ2ljaWFuJyB9XHJcbiAgfSk7XHJcbiAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHJlY2lwZXMucmVjaXBlc1swXTtcclxufVxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==
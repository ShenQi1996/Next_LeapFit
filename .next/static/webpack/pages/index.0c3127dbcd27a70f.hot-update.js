"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.module.scss */ \"./pages/style/index.module.scss\");\n/* harmony import */ var _style_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.user);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const handleLogout = ()=>{\n        dispatch((0,_store_store__WEBPACK_IMPORTED_MODULE_3__.clearUser)());\n    };\n    //console.log(useSelector((state) => state))\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Homepage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Leap\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Fit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shenqi/Desktop/Sam'Project/LeapFit/pages/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenqi/Desktop/Sam'Project/LeapFit/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"hello \"\n            }, void 0, false, {\n                fileName: \"/Users/shenqi/Desktop/Sam'Project/LeapFit/pages/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shenqi/Desktop/Sam'Project/LeapFit/pages/index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"xXvxOehHJpw/X5Imivu/2I1+3NA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQzBCO0FBQ1o7QUFDSTtBQUUvQyxNQUFNTSxXQUFXOztJQUNmLE1BQU1DLE9BQU9MLHdEQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1ELElBQUksQ0FBQ0EsSUFBSTtJQUNuRCxNQUFNRSxXQUFXTix3REFBV0E7SUFFNUIsTUFBTU8sZUFBZTtRQUNuQkQsU0FBU0wsdURBQVNBO0lBQ3BCO0lBR0EsNENBQTRDO0lBRTVDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXUCwwRUFBZTs7MEJBQzdCLDhEQUFDUzs7b0JBQUc7a0NBQUksOERBQUNDO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBa0JaLDhEQUFDQzswQkFBRzs7Ozs7Ozs7Ozs7O0FBR1o7R0FsQ01WOztRQUNTSixvREFBV0E7UUFDUEMsb0RBQVdBOzs7S0FGeEJHO0FBb0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY2xlYXJVc2VyIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChjbGVhclVzZXIoKSk7XG4gIH07XG5cbiAgXG4gIC8vY29uc29sZS5sb2codXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhvbWVwYWdlfT5cbiAgICAgIDxoMT5MZWFwPHNwYW4+Rml0PC9zcGFuPjwvaDE+XG4gICAgICB7Lyoge3VzZXIgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+SGVsbG8sIHt1c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIEFib3V0IFVzXG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS11c2VyXCI+XG4gICAgICAgIENyZWF0ZSBVc2VyXG4gICAgICA8L0xpbms+ICovfVxuXG4gICAgICAgIDxoMj5oZWxsbyA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImNsZWFyVXNlciIsInN0eWxlcyIsIkhvbWVQYWdlIiwidXNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJoYW5kbGVMb2dvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJIb21lcGFnZSIsImgxIiwic3BhbiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/CountdownTimer.js":
/*!******************************************!*\
  !*** ./app/components/CountdownTimer.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CountdownTimer = ()=>{\n    _s();\n    const targetTime = new Date(\"May 31, 2024 00:00:00\").getTime(); // Replace with your target start time\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(calculateTimeRemaining());\n    function calculateTimeRemaining() {\n        const now = new Date().getTime();\n        const difference = targetTime - now;\n        const days = Math.floor(difference / (1000 * 60 * 60 * 24));\n        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n        const seconds = Math.floor(difference % (1000 * 60) / 1000);\n        return {\n            days,\n            hours,\n            minutes,\n            seconds\n        };\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            setTimeRemaining(calculateTimeRemaining());\n        }, 1000);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col translate-y-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"flex justify-center px-2 py-2 font-bold\",\n                    children: \"START TIME\"\n                }, void 0, false, {\n                    fileName: \"/home/asset/projects/marketing-game/client/app/components/CountdownTimer.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                targetTime > new Date().getTime() ? \"\".concat(timeRemaining.days, \"d \").concat(timeRemaining.hours, \"h \").concat(timeRemaining.minutes, \"m \").concat(timeRemaining.seconds, \"s\") : \"GO\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/asset/projects/marketing-game/client/app/components/CountdownTimer.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CountdownTimer, \"J5rJaFRpR/mejDk/J051Ee02K5E=\");\n_c = CountdownTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVtRDtBQUVuRCxNQUFNRyxpQkFBaUI7O0lBQ3JCLE1BQU1DLGFBQWEsSUFBSUMsS0FBSyx5QkFBeUJDLE9BQU8sSUFBSSxzQ0FBc0M7SUFDdEcsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUNRO0lBRW5ELFNBQVNBO1FBQ1AsTUFBTUMsTUFBTSxJQUFJTCxPQUFPQyxPQUFPO1FBQzlCLE1BQU1LLGFBQWFQLGFBQWFNO1FBRWhDLE1BQU1FLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYyxRQUFPLEtBQUssS0FBSyxFQUFDO1FBQ3hELE1BQU1JLFFBQVFGLEtBQUtDLEtBQUssQ0FDdEIsYUFBZSxRQUFPLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEVBQUM7UUFFdkQsTUFBTUUsVUFBVUgsS0FBS0MsS0FBSyxDQUFDLGFBQWUsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7UUFDdEUsTUFBTUcsVUFBVUosS0FBS0MsS0FBSyxDQUFDLGFBQWUsUUFBTyxFQUFDLElBQU07UUFFeEQsT0FBTztZQUNMRjtZQUNBRztZQUNBQztZQUNBQztRQUNGO0lBQ0Y7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsYUFBYUMsWUFBWTtZQUM3QlgsaUJBQWlCQztRQUNuQixHQUFHO1FBRUgsT0FBTyxJQUFNVyxjQUFjRjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEwQzs7Ozs7O2dCQUd2RGxCLGFBQWEsSUFBSUMsT0FBT0MsT0FBTyxLQUM1QixHQUEwQkMsT0FBdkJBLGNBQWNLLElBQUksRUFBQyxNQUE0QkwsT0FBeEJBLGNBQWNRLEtBQUssRUFBQyxNQUE4QlIsT0FBMUJBLGNBQWNTLE9BQU8sRUFBQyxNQUEwQixPQUF0QlQsY0FBY1UsT0FBTyxFQUFDLE9BQ2xHOzs7Ozs7OztBQUtaO0dBNUNNZDtLQUFBQTtBQThDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Db3VudGRvd25UaW1lci5qcz85YWE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lciA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiTWF5IDMxLCAyMDI0IDAwOjAwOjAwXCIpLmdldFRpbWUoKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgdGFyZ2V0IHN0YXJ0IHRpbWVcbiAgY29uc3QgW3RpbWVSZW1haW5pbmcsIHNldFRpbWVSZW1haW5pbmddID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZVJlbWFpbmluZygpKTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lUmVtYWluaW5nKCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0YXJnZXRUaW1lIC0gbm93O1xuXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRheXMsXG4gICAgICBob3VycyxcbiAgICAgIG1pbnV0ZXMsXG4gICAgICBzZWNvbmRzLFxuICAgIH07XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lUmVtYWluaW5nKGNhbGN1bGF0ZVRpbWVSZW1haW5pbmcoKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0cmFuc2xhdGUteS0yMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC0yIHB5LTIgZm9udC1ib2xkXCI+U1RBUlQgVElNRTwvaDE+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmb250LWV4dHJhYm9sZCBiZy1vcmFuZ2UtMzAwIGhvdmVyOmJnLW9yYW5nZS0xMDAgcC00IHJpbmctMiByb3VuZGVkLTJ4bFwiPiAqL31cbiAgICAgICAge3RhcmdldFRpbWUgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgID8gYCR7dGltZVJlbWFpbmluZy5kYXlzfWQgJHt0aW1lUmVtYWluaW5nLmhvdXJzfWggJHt0aW1lUmVtYWluaW5nLm1pbnV0ZXN9bSAke3RpbWVSZW1haW5pbmcuc2Vjb25kc31zYFxuICAgICAgICAgIDogXCJHT1wifVxuICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ291bnRkb3duVGltZXIiLCJ0YXJnZXRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lUmVtYWluaW5nIiwic2V0VGltZVJlbWFpbmluZyIsImNhbGN1bGF0ZVRpbWVSZW1haW5pbmciLCJub3ciLCJkaWZmZXJlbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CountdownTimer.js\n"));

/***/ })

});
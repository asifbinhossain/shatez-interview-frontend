"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Sidebar() {\n    _s();\n    const [sidebarOpen, setSidebarOpen] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition.Root, {\n                show: sidebarOpen,\n                as: Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dialog, {\n                    as: \"div\",\n                    className: \"relative z-50 lg:hidden\",\n                    onClose: setSidebarOpen,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition.Child, {\n                            as: Fragment,\n                            enter: \"transition-opacity ease-linear duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"transition-opacity ease-linear duration-300\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-gray-900/80\"\n                            }, void 0, false, {\n                                fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition.Child, {\n                                as: Fragment,\n                                enter: \"transition ease-in-out duration-300 transform\",\n                                enterFrom: \"-translate-x-full\",\n                                enterTo: \"translate-x-0\",\n                                leave: \"transition ease-in-out duration-300 transform\",\n                                leaveFrom: \"translate-x-0\",\n                                leaveTo: \"-translate-x-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dialog.Panel, {\n                                    className: \"relative mr-16 flex w-full max-w-xs flex-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition.Child, {\n                                            as: Fragment,\n                                            enter: \"ease-in-out duration-300\",\n                                            enterFrom: \"opacity-0\",\n                                            enterTo: \"opacity-100\",\n                                            leave: \"ease-in-out duration-300\",\n                                            leaveFrom: \"opacity-100\",\n                                            leaveTo: \"opacity-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute left-full top-0 flex w-16 justify-center pt-5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"-m-2.5 p-2.5\",\n                                                    onClick: ()=>setSidebarOpen(false),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"sr-only\",\n                                                            children: \"Close sidebar\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(XMarkIcon, {\n                                                            className: \"h-6 w-6 text-white\",\n                                                            \"aria-hidden\": \"true\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sidebar, {\n                                            navigation: navigation,\n                                            teams: teams\n                                        }, void 0, false, {\n                                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                            lineNumber: 145,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            \";\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sidebar, {\n                    navigation: navigation,\n                    teams: teams\n                }, void 0, false, {\n                    fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/webmmr/Desktop/Shatez/shatez-interview-frontend/components/Sidebar.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"5rGDkYpGQ8fHM9RkMWnKOwsxadk=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHQyxTQUFTO0lBQy9DLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDLFdBQVdDLElBQUk7Z0JBQUNDLE1BQU1OO2dCQUFhTyxJQUFJQzswQkFDdEMsNEVBQUNDO29CQUNDRixJQUFHO29CQUNIRyxXQUFVO29CQUNWQyxTQUFTVjs7c0NBRVQsOERBQUNHLFdBQVdRLEtBQUs7NEJBQ2ZMLElBQUlDOzRCQUNKSyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFROzRCQUNSQyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFRO3NDQUVSLDRFQUFDZjtnQ0FBSU8sV0FBVTs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDUDs0QkFBSU8sV0FBVTtzQ0FDYiw0RUFBQ04sV0FBV1EsS0FBSztnQ0FDZkwsSUFBSUM7Z0NBQ0pLLE9BQU07Z0NBQ05DLFdBQVU7Z0NBQ1ZDLFNBQVE7Z0NBQ1JDLE9BQU07Z0NBQ05DLFdBQVU7Z0NBQ1ZDLFNBQVE7MENBRVIsNEVBQUNULE9BQU9VLEtBQUs7b0NBQUNULFdBQVU7O3NEQUN0Qiw4REFBQ04sV0FBV1EsS0FBSzs0Q0FDZkwsSUFBSUM7NENBQ0pLLE9BQU07NENBQ05DLFdBQVU7NENBQ1ZDLFNBQVE7NENBQ1JDLE9BQU07NENBQ05DLFdBQVU7NENBQ1ZDLFNBQVE7c0RBRVIsNEVBQUNmO2dEQUFJTyxXQUFVOzBEQUNiLDRFQUFDVTtvREFDQ0MsTUFBSztvREFDTFgsV0FBVTtvREFDVlksU0FBUyxJQUFNckIsZUFBZTs7c0VBRTlCLDhEQUFDc0I7NERBQUtiLFdBQVU7c0VBQVU7Ozs7OztzRUFDMUIsOERBQUNjOzREQUNDZCxXQUFVOzREQUNWZSxlQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQTJGcEIsOERBQUMxQjs0Q0FBUTJCLFlBQVlBOzRDQUFZQyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS2hDOzBCQUVsQiw4REFBQ3hCO2dCQUFJTyxXQUFVOzBCQUViLDRFQUFDWDtvQkFBUTJCLFlBQVlBO29CQUFZQyxPQUFPQTs7Ozs7Ozs7Ozs7WUFDcEM7Ozs7Ozs7QUFJWjtHQTVKUzVCO0tBQUFBO0FBOEpULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e3NpZGViYXJPcGVufSBhcz17RnJhZ21lbnR9PlxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotNTAgbGc6aGlkZGVuXCJcbiAgICAgICAgICBvbkNsb3NlPXtzZXRTaWRlYmFyT3Blbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktOTAwLzgwXCIgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleFwiPlxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGVudGVyRnJvbT1cIi10cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zbGF0ZS14LTBcIlxuICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zbGF0ZS14LTBcIlxuICAgICAgICAgICAgICBsZWF2ZVRvPVwiLXRyYW5zbGF0ZS14LWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RGlhbG9nLlBhbmVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1yLTE2IGZsZXggdy1mdWxsIG1heC13LXhzIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1mdWxsIHRvcC0wIGZsZXggdy0xNiBqdXN0aWZ5LWNlbnRlciBwdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbS0yLjUgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBzaWRlYmFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxYTWFya0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIGNvbXBvbmVudCwgc3dhcCB0aGlzIGVsZW1lbnQgd2l0aCBhbm90aGVyIHNpZGViYXIgaWYgeW91IGxpa2UgKi99XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IGZsZXgtY29sIGdhcC15LTUgb3ZlcmZsb3cteS1hdXRvIGJnLXdoaXRlIHB4LTYgcGItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IHNocmluay0wIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvbWFyay5zdmc/Y29sb3I9aW5kaWdvJnNoYWRlPTYwMFwiXG4gICAgICAgICAgICAgIGFsdD1cIllvdXIgQ29tcGFueVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGdhcC15LTdcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIi1teC0yIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLWdyYXktNTAgdGV4dC1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWluZGlnby02MDAgaG92ZXI6YmctZ3JheS01MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwIGZsZXggZ2FwLXgtMyByb3VuZGVkLW1kIHAtMiB0ZXh0LXNtIGxlYWRpbmctNiBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtaW5kaWdvLTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaC02IHctNiBzaHJpbmstMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgdGVhbXNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCItbXgtMiBtdC0yIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAge3RlYW1zLm1hcCgodGVhbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0ZWFtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0ZWFtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTUwIHRleHQtaW5kaWdvLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIGhvdmVyOmJnLWdyYXktNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncm91cCBmbGV4IGdhcC14LTMgcm91bmRlZC1tZCBwLTIgdGV4dC1zbSBsZWFkaW5nLTYgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWluZGlnby02MDAgYm9yZGVyLWluZGlnby02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDAgYm9yZGVyLWdyYXktMjAwIGdyb3VwLWhvdmVyOmJvcmRlci1pbmRpZ28tNjAwIGdyb3VwLWhvdmVyOnRleHQtaW5kaWdvLTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBoLTYgdy02IHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LVswLjYyNXJlbV0gZm9udC1tZWRpdW0gYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbS5pbml0aWFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57dGVhbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCAtbXgtMiBmbGV4IGdhcC14LTMgcm91bmRlZC1tZCBwLTIgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29nNlRvb3RoSWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IHNocmluay0wIHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8U2lkZWJhciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSB0ZWFtcz17dGVhbXN9IC8+XG4gICAgICAgICAgICAgIDwvRGlhbG9nLlBhbmVsPlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuICAgICAgO3svKiBTdGF0aWMgc2lkZWJhciBmb3IgZGVza3RvcCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZpeGVkIGxnOmluc2V0LXktMCBsZzp6LTUwIGxnOmZsZXggbGc6dy03MiBsZzpmbGV4LWNvbFwiPlxuICAgICAgICB7LyogU2lkZWJhciBjb21wb25lbnQsIHN3YXAgdGhpcyBlbGVtZW50IHdpdGggYW5vdGhlciBzaWRlYmFyIGlmIHlvdSBsaWtlICovfVxuICAgICAgICA8U2lkZWJhciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSB0ZWFtcz17dGVhbXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDtcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGViYXIiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwidXNlU3RhdGUiLCJkaXYiLCJUcmFuc2l0aW9uIiwiUm9vdCIsInNob3ciLCJhcyIsIkZyYWdtZW50IiwiRGlhbG9nIiwiY2xhc3NOYW1lIiwib25DbG9zZSIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiUGFuZWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iLCJYTWFya0ljb24iLCJhcmlhLWhpZGRlbiIsIm5hdmlnYXRpb24iLCJ0ZWFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});
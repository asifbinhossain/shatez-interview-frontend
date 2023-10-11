"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/middleware */ \"(middleware)/./node_modules/next-auth/middleware.js\");\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)({\n    callbacks: {\n        authorized: async ({ req, token })=>{\n            console.log(token);\n            if (req.nextUrl.pathname.startsWith(\"/\")) return token?.role === \"user\";\n            return !!token;\n        }\n    }\n}));\nconst config = {\n    matcher: [\n        \"/\",\n        \"/dashboard\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELGlFQUFlQSw4REFBUUEsQ0FBQztJQUN0QkMsV0FBVztRQUNUQyxZQUFZLE9BQU8sRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUU7WUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJRCxJQUFJSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sT0FBT0wsT0FBT00sU0FBUztZQUNqRSxPQUFPLENBQUMsQ0FBQ047UUFDWDtJQUNGO0FBQ0YsRUFBRSxFQUFDO0FBQ0ksTUFBTU8sU0FBUztJQUFFQyxTQUFTO1FBQUM7UUFBSztLQUFhO0FBQUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tIFwibmV4dC1hdXRoL21pZGRsZXdhcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoe1xuICBjYWxsYmFja3M6IHtcbiAgICBhdXRob3JpemVkOiBhc3luYyAoeyByZXEsIHRva2VuIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIHRva2VuPy5yb2xlID09PSBcInVzZXJcIjtcbiAgICAgIHJldHVybiAhIXRva2VuO1xuICAgIH0sXG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IG1hdGNoZXI6IFtcIi9cIiwgXCIvZGFzaGJvYXJkXCJdIH07XG4iXSwibmFtZXMiOlsid2l0aEF1dGgiLCJjYWxsYmFja3MiLCJhdXRob3JpemVkIiwicmVxIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJvbGUiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});
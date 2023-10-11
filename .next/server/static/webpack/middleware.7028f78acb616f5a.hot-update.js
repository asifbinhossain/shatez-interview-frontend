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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/middleware */ \"(middleware)/./node_modules/next-auth/middleware.js\");\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)({\n    callbacks: {\n        authorized: async ({ req, token })=>{\n            console.log(token);\n            // if (req.nextUrl.pathname.startsWith(\"/\")) return token?.role === \"user\";\n            return !!token;\n        }\n    }\n}));\nconst config = {\n    matcher: [\n        \"/\",\n        \"/dashboard\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELGlFQUFlQSw4REFBUUEsQ0FBQztJQUN0QkMsV0FBVztRQUNUQyxZQUFZLE9BQU8sRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUU7WUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWiwyRUFBMkU7WUFDM0UsT0FBTyxDQUFDLENBQUNBO1FBQ1g7SUFDRjtBQUNGLEVBQUUsRUFBQztBQUNJLE1BQU1HLFNBQVM7SUFBRUMsU0FBUztRQUFDO1FBQUs7S0FBYTtBQUFDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSBcIm5leHQtYXV0aC9taWRkbGV3YXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKHtcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZDogYXN5bmMgKHsgcmVxLCB0b2tlbiB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAvLyBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikpIHJldHVybiB0b2tlbj8ucm9sZSA9PT0gXCJ1c2VyXCI7XG4gICAgICByZXR1cm4gISF0b2tlbjtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgY29uZmlnID0geyBtYXRjaGVyOiBbXCIvXCIsIFwiL2Rhc2hib2FyZFwiXSB9O1xuIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsInJlcSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});
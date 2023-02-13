"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevueapp"]("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n// import * as math from 'mathjs'\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst state = {\n  count: 0,\n  alpha: 0.0500,\n  beta: 0.2673,\n  prob3_tp: 0,\n  prob5_tn: 0\n};\nconst specialmsg = {\n  msg: 'Hellothere!!!!'\n};\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  },\n  new_alpha(state) {\n    // state.alpha = state.alpha+0.1;\n    state.alpha = state.alpha + 0.100;\n    // state.alpha = math.round(state.alpha, 4);\n    state.alpha = mathjs__WEBPACK_IMPORTED_MODULE_2__.round(state.alpha, 4).toFixed(4);\n    // state.prob5_tn = 1-state.alpha;\n    state.prob5_tn = mathjs__WEBPACK_IMPORTED_MODULE_2__.round(1 - state.alpha, 4).toFixed(4);\n    // state.prob5_tn = math.round(1-state.alpha, 4).toFixed(4);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state,\n  specialmsg,\n  mutations\n  // math \n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9zdG9yZS9zdG9yZS5qcz9lZWZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4vLyBpbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5cclxuLy8gVnVlLnVzZShWdWV4KVxyXG4vLyBjb25zdCBzdGF0ZSA9IHtcclxuLy8gICBjb3VudDogMFxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuLy8gICBzdGF0ZVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vc3RvcmUuanMgXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJyBcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCcgXHJcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcclxuXHJcbi8vIGltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycycgXHJcbi8vIGltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucycgXHJcbi8vIGltcG9ydCBtdXRhdGlvbnMgZnJvbSAnLi9tdXRhdGlvbnMnIFxyXG4vLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcydcclxuXHJcblxyXG5cclxuVnVlLnVzZShWdWV4KSBcclxuIFxyXG5jb25zdCBzdGF0ZSA9IHsgXHJcbiAgY291bnQ6IDAsXHJcbiAgYWxwaGE6IDAuMDUwMCxcclxuICBiZXRhOiAwLjI2NzMsXHJcbiAgcHJvYjNfdHA6IDAsXHJcbiAgcHJvYjVfdG46IDBcclxufSBcclxuXHJcbmNvbnN0IHNwZWNpYWxtc2cgPSB7IFxyXG4gIG1zZzogJ0hlbGxvdGhlcmUhISEhJ1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IG11dGF0aW9ucyA9IHtcclxuICBpbmNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudCsrXHJcbiAgfSxcclxuICBkZWNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudC0tXHJcbiAgfSxcclxuICBuZXdfYWxwaGEgKHN0YXRlKSB7XHJcbiAgICAvLyBzdGF0ZS5hbHBoYSA9IHN0YXRlLmFscGhhKzAuMTtcclxuICAgIHN0YXRlLmFscGhhID0gc3RhdGUuYWxwaGErMC4xMDA7XHJcbiAgICAvLyBzdGF0ZS5hbHBoYSA9IG1hdGgucm91bmQoc3RhdGUuYWxwaGEsIDQpO1xyXG4gICAgc3RhdGUuYWxwaGEgPSBtYXRoLnJvdW5kKHN0YXRlLmFscGhhLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgLy8gc3RhdGUucHJvYjVfdG4gPSAxLXN0YXRlLmFscGhhO1xyXG4gICAgc3RhdGUucHJvYjVfdG4gPSBtYXRoLnJvdW5kKDEtc3RhdGUuYWxwaGEsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICAvLyBzdGF0ZS5wcm9iNV90biA9IG1hdGgucm91bmQoMS1zdGF0ZS5hbHBoYSwgNCkudG9GaXhlZCg0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHsgXHJcbiAgc3RhdGUsXHJcbiAgc3BlY2lhbG1zZyxcclxuICBtdXRhdGlvbnMsIFxyXG4gIC8vIG1hdGggXHJcbiAgLy8gZ2V0dGVycywgIFxyXG4gIC8vIGFjdGlvbnMgXHJcbn0pICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b8497b725498171a"; }
/******/ }();
/******/ 
/******/ }
);
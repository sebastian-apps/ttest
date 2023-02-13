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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst state = {\n  count: 0,\n  alpha: 0.0500,\n  beta: 0.2673,\n  prob3_tp: 0,\n  prob5_tn: 0\n};\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  },\n  new_alpha(state) {\n    state.alpha = state.alpha + 0.1;\n    // state.alpha = math.round(state.alpha+0.1, 4).toFixed(4);\n    state.prob5_tn = 1 - state.alpha;\n    // state.prob5_tn = math.round(1-state.alpha, 4).toFixed(4);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state,\n  mutations\n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3N0b3JlL3N0b3JlLmpzP2VlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG4vLyBWdWUudXNlKFZ1ZXgpXHJcbi8vIGNvbnN0IHN0YXRlID0ge1xyXG4vLyAgIGNvdW50OiAwXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4vLyAgIHN0YXRlXHJcbi8vIH0pXHJcblxyXG5cclxuLy9zdG9yZS5qcyBcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnIFxyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JyBcclxuLy8gaW1wb3J0IGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJyBcclxuLy8gaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJyBcclxuLy8gaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucycgXHJcblxyXG5cclxuVnVlLnVzZShWdWV4KSBcclxuIFxyXG5jb25zdCBzdGF0ZSA9IHsgXHJcbiAgY291bnQ6IDAsXHJcbiAgYWxwaGE6IDAuMDUwMCxcclxuICBiZXRhOiAwLjI2NzMsXHJcbiAgcHJvYjNfdHA6IDAsXHJcbiAgcHJvYjVfdG46IDBcclxufSBcclxuXHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgc3RhdGUuY291bnQrK1xyXG4gIH0sXHJcbiAgZGVjcmVtZW50IChzdGF0ZSkge1xyXG4gICAgc3RhdGUuY291bnQtLVxyXG4gIH0sXHJcbiAgbmV3X2FscGhhIChzdGF0ZSkge1xyXG4gICAgc3RhdGUuYWxwaGEgPSBzdGF0ZS5hbHBoYSswLjE7XHJcbiAgICAvLyBzdGF0ZS5hbHBoYSA9IG1hdGgucm91bmQoc3RhdGUuYWxwaGErMC4xLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjVfdG4gPSAxLXN0YXRlLmFscGhhXHJcbiAgICAvLyBzdGF0ZS5wcm9iNV90biA9IG1hdGgucm91bmQoMS1zdGF0ZS5hbHBoYSwgNCkudG9GaXhlZCg0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHsgXHJcbiAgc3RhdGUsXHJcbiAgbXV0YXRpb25zLCAgXHJcbiAgLy8gZ2V0dGVycywgIFxyXG4gIC8vIGFjdGlvbnMgXHJcbn0pICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6338f0182a318cd6"; }
/******/ }();
/******/ 
/******/ }
);
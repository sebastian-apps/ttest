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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n// import * as math from 'mathjs'\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst state = {\n  count: 0,\n  alpha: 0.0500,\n  beta: 0.2673,\n  prob3_tp: 0,\n  prob5_tn: 0\n};\nconst specialmsg = {\n  msg: 'Hellothere!!!!'\n};\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  },\n  new_alpha(state) {\n    // state.alpha = state.alpha+0.1;\n    state.alpha = mathjs__WEBPACK_IMPORTED_MODULE_2__.round(state.alpha + 0.100, 4);\n    // state.alpha = math.round(state.alpha+0.100, 4).toFixed(4);\n    // state.prob5_tn = 1-state.alpha;\n    state.prob5_tn = mathjs__WEBPACK_IMPORTED_MODULE_2__.round(1 - state.alpha, 4).toFixed(4);\n    // state.prob5_tn = math.round(1-state.alpha, 4).toFixed(4);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state,\n  specialmsg,\n  mutations\n  // math \n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvc3RvcmUvc3RvcmUuanM/ZWVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuXHJcbi8vIFZ1ZS51c2UoVnVleClcclxuLy8gY29uc3Qgc3RhdGUgPSB7XHJcbi8vICAgY291bnQ6IDBcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbi8vICAgc3RhdGVcclxuLy8gfSlcclxuXHJcblxyXG4vL3N0b3JlLmpzIFxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnIFxyXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcblxyXG4vLyBpbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnIFxyXG4vLyBpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnIFxyXG4vLyBpbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJyBcclxuLy8gaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnXHJcblxyXG5cclxuXHJcblZ1ZS51c2UoVnVleCkgXHJcbiBcclxuY29uc3Qgc3RhdGUgPSB7IFxyXG4gIGNvdW50OiAwLFxyXG4gIGFscGhhOiAwLjA1MDAsXHJcbiAgYmV0YTogMC4yNjczLFxyXG4gIHByb2IzX3RwOiAwLFxyXG4gIHByb2I1X3RuOiAwXHJcbn0gXHJcblxyXG5jb25zdCBzcGVjaWFsbXNnID0geyBcclxuICBtc2c6ICdIZWxsb3RoZXJlISEhISdcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgc3RhdGUuY291bnQrK1xyXG4gIH0sXHJcbiAgZGVjcmVtZW50IChzdGF0ZSkge1xyXG4gICAgc3RhdGUuY291bnQtLVxyXG4gIH0sXHJcbiAgbmV3X2FscGhhIChzdGF0ZSkge1xyXG4gICAgLy8gc3RhdGUuYWxwaGEgPSBzdGF0ZS5hbHBoYSswLjE7XHJcbiAgICBzdGF0ZS5hbHBoYSA9IG1hdGgucm91bmQoc3RhdGUuYWxwaGErMC4xMDAsIDQpO1xyXG4gICAgLy8gc3RhdGUuYWxwaGEgPSBtYXRoLnJvdW5kKHN0YXRlLmFscGhhKzAuMTAwLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgLy8gc3RhdGUucHJvYjVfdG4gPSAxLXN0YXRlLmFscGhhO1xyXG4gICAgc3RhdGUucHJvYjVfdG4gPSBtYXRoLnJvdW5kKDEtc3RhdGUuYWxwaGEsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICAvLyBzdGF0ZS5wcm9iNV90biA9IG1hdGgucm91bmQoMS1zdGF0ZS5hbHBoYSwgNCkudG9GaXhlZCg0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHsgXHJcbiAgc3RhdGUsXHJcbiAgc3BlY2lhbG1zZyxcclxuICBtdXRhdGlvbnMsIFxyXG4gIC8vIG1hdGggXHJcbiAgLy8gZ2V0dGVycywgIFxyXG4gIC8vIGFjdGlvbnMgXHJcbn0pICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "64da5478ae950823"; }
/******/ }();
/******/ 
/******/ }
);
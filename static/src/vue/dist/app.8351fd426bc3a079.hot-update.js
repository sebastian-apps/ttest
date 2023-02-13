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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst state = {\n  count: 0,\n  alpha: 0.0500,\n  beta: 0.2673\n};\n\n// prob2_ne.innerText = round(1 - prob1_re.value);\n// prob3_tp.innerText = round(1 - beta);\n// prob4_fn.innerText = round(beta);\n// prob5_tn.innerText = round(1 - alpha);\n// prob6_fp.innerText = round(alpha);\n// prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);\n// prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);\n// prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);\n// prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);\n\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state,\n  mutations\n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3N0b3JlL3N0b3JlLmpzP2VlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG4vLyBWdWUudXNlKFZ1ZXgpXHJcbi8vIGNvbnN0IHN0YXRlID0ge1xyXG4vLyAgIGNvdW50OiAwXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4vLyAgIHN0YXRlXHJcbi8vIH0pXHJcblxyXG5cclxuXHJcblxyXG4vL3N0b3JlLmpzIFxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnIFxyXG4vLyBpbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnIFxyXG4vLyBpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnIFxyXG4vLyBpbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJyBcclxuIFxyXG5WdWUudXNlKFZ1ZXgpIFxyXG4gXHJcbmNvbnN0IHN0YXRlID0geyBcclxuICBjb3VudDogMCxcclxuICBhbHBoYTogMC4wNTAwLFxyXG4gIGJldGE6IDAuMjY3MyxcclxufSBcclxuIFxyXG4vLyBwcm9iMl9uZS5pbm5lclRleHQgPSByb3VuZCgxIC0gcHJvYjFfcmUudmFsdWUpO1xyXG4vLyBwcm9iM190cC5pbm5lclRleHQgPSByb3VuZCgxIC0gYmV0YSk7XHJcbi8vIHByb2I0X2ZuLmlubmVyVGV4dCA9IHJvdW5kKGJldGEpO1xyXG4vLyBwcm9iNV90bi5pbm5lclRleHQgPSByb3VuZCgxIC0gYWxwaGEpO1xyXG4vLyBwcm9iNl9mcC5pbm5lclRleHQgPSByb3VuZChhbHBoYSk7XHJcbi8vIHByb2I3X3JldHAuaW5uZXJUZXh0ID0gcm91bmQocHJvYjFfcmUudmFsdWUgKiBwcm9iM190cC5pbm5lclRleHQpO1xyXG4vLyBwcm9iOF9yZWZuLmlubmVyVGV4dCA9IHJvdW5kKHByb2IxX3JlLnZhbHVlICogcHJvYjRfZm4uaW5uZXJUZXh0KTtcclxuLy8gcHJvYjlfbmV0bi5pbm5lclRleHQgPSByb3VuZChwcm9iMl9uZS5pbm5lclRleHQgKiBwcm9iNV90bi5pbm5lclRleHQpO1xyXG4vLyBwcm9iMTBfbmVmcC5pbm5lclRleHQgPSByb3VuZChwcm9iMl9uZS5pbm5lclRleHQgKiBwcm9iNl9mcC5pbm5lclRleHQpO1xyXG5cclxuXHJcbmNvbnN0IG11dGF0aW9ucyA9IHtcclxuICBpbmNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudCsrXHJcbiAgfSxcclxuICBkZWNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudC0tXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7IFxyXG4gIHN0YXRlLFxyXG4gIG11dGF0aW9ucywgIFxyXG4gIC8vIGdldHRlcnMsICBcclxuICAvLyBhY3Rpb25zIFxyXG59KSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0fe952b3089d27f7"; }
/******/ }();
/******/ 
/******/ }
);
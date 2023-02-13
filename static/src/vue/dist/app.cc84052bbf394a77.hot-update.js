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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst state = {\n  count: 0,\n  alpha: 0.0500,\n  beta: 0.2673\n};\n\n// prob2_ne.innerText = round(1 - prob1_re.value);\n// prob3_tp.innerText = round(1 - beta);\n// prob4_fn.innerText = round(beta);\n// prob5_tn.innerText = round(1 - alpha);\n// prob6_fp.innerText = round(alpha);\n// prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);\n// prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);\n// prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);\n// prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);\n\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state,\n  mutations\n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3N0b3JlL3N0b3JlLmpzP2VlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblxyXG4vLyBWdWUudXNlKFZ1ZXgpXHJcbi8vIGNvbnN0IHN0YXRlID0ge1xyXG4vLyAgIGNvdW50OiAwXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4vLyAgIHN0YXRlXHJcbi8vIH0pXHJcblxyXG5cclxuXHJcblxyXG4vL3N0b3JlLmpzIFxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnIFxyXG4vLyBpbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnIFxyXG4vLyBpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnIFxyXG4vLyBpbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJyBcclxuIFxyXG5WdWUudXNlKFZ1ZXgpIFxyXG4gXHJcbmNvbnN0IHN0YXRlID0geyBcclxuICBjb3VudDogMCxcclxuICBhbHBoYTogMC4wNTAwLFxyXG4gIGJldGE6IDAuMjY3M1xyXG59IFxyXG4gXHJcbi8vIHByb2IyX25lLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBwcm9iMV9yZS52YWx1ZSk7XHJcbi8vIHByb2IzX3RwLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBiZXRhKTtcclxuLy8gcHJvYjRfZm4uaW5uZXJUZXh0ID0gcm91bmQoYmV0YSk7XHJcbi8vIHByb2I1X3RuLmlubmVyVGV4dCA9IHJvdW5kKDEgLSBhbHBoYSk7XHJcbi8vIHByb2I2X2ZwLmlubmVyVGV4dCA9IHJvdW5kKGFscGhhKTtcclxuLy8gcHJvYjdfcmV0cC5pbm5lclRleHQgPSByb3VuZChwcm9iMV9yZS52YWx1ZSAqIHByb2IzX3RwLmlubmVyVGV4dCk7XHJcbi8vIHByb2I4X3JlZm4uaW5uZXJUZXh0ID0gcm91bmQocHJvYjFfcmUudmFsdWUgKiBwcm9iNF9mbi5pbm5lclRleHQpO1xyXG4vLyBwcm9iOV9uZXRuLmlubmVyVGV4dCA9IHJvdW5kKHByb2IyX25lLmlubmVyVGV4dCAqIHByb2I1X3RuLmlubmVyVGV4dCk7XHJcbi8vIHByb2IxMF9uZWZwLmlubmVyVGV4dCA9IHJvdW5kKHByb2IyX25lLmlubmVyVGV4dCAqIHByb2I2X2ZwLmlubmVyVGV4dCk7XHJcblxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIGluY3JlbWVudCAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmNvdW50KytcclxuICB9LFxyXG4gIGRlY3JlbWVudCAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmNvdW50LS1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHsgXHJcbiAgc3RhdGUsXHJcbiAgbXV0YXRpb25zLCAgXHJcbiAgLy8gZ2V0dGVycywgIFxyXG4gIC8vIGFjdGlvbnMgXHJcbn0pICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8351fd426bc3a079"; }
/******/ }();
/******/ 
/******/ }
);
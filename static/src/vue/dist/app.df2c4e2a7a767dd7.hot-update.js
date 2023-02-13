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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n\n\n// import * as welchs from './welchs';\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst state = {\n  count: 0,\n  t_value: -2.2502,\n  crit_t_value: 3.2155,\n  alpha: 0.05,\n  beta: 0.2673,\n  confidence: 0,\n  power: 0,\n  prob1_re: 0.01,\n  prob2_ne: 0,\n  prob3_tp: 0.0347,\n  prob4_fn: 0,\n  prob5_tn: 0,\n  prob6_fp: 0,\n  prob7_retp: 0,\n  prob8_refn: 0,\n  prob9_netn: 0,\n  prob10_nefp: 0,\n  fdr: 0,\n  ppv: 0\n};\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  },\n  updateState(state) {\n    state.alpha = (Number(0.1) + Number(state.alpha)).toFixed(4);\n    this.commit('updateConfusionMatrix');\n    this.commit('updateProbabilityTree');\n  },\n  updateConfusionMatrix(state) {\n    state.confidence = (Number(1.0) - Number(state.alpha)).toFixed(4);\n    state.power = (Number(1.0) - Number(state.beta)).toFixed(4);\n  },\n  updateProbabilityTree(state) {\n    state.prob2_ne = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.prob1_re, 4).toFixed(4);\n    state.prob3_tp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.beta, 4).toFixed(4);\n    state.prob4_fn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.beta, 4).toFixed(4);\n    state.prob5_tn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.alpha, 4).toFixed(4);\n    state.prob6_fp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.alpha, 4).toFixed(4);\n    state.prob7_retp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob1_re * state.prob3_tp, 4).toFixed(4);\n    state.prob8_refn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob1_re * state.prob4_fn, 4).toFixed(4);\n    state.prob9_netn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob2_ne * state.prob5_tn, 4).toFixed(4);\n    state.prob10_nefp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob2_ne * state.prob6_fp, 4).toFixed(4);\n    state.fdr = _welchs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFalseDiscoveryRate(state.prob10_nefp, state.prob7_retp);\n    state.ppv = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(100 - state.fdr, 2);\n    console.log(\"FDR:\", state.fdr + \"%\");\n    console.log(\"PPV:\", state.ppv + \"%\");\n\n    // if (Number.isNaN(fdr)){\n    //   fdr = \" - \";\n    // }\n    // if (Number.isNaN(ppv)){\n    //   ppv = \" - \";\n    // }\n\n    // elem(\"false_rate\").innerText = fdr + \"%\";\n    // elem(\"ppv\").innerText = ppv + \"%\";\n    // elem(\"sensitivity\").innerText = prob3_tp.innerText;\n    // elem(\"specificity\").innerText = prob5_tn.innerText;\n  },\n\n  updateProbRealEffect(state, {\n    prob\n  }) {\n    state.prob1_re = prob;\n    this.commit('updateProbabilityTree');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Store({\n  state,\n  mutations\n  // math \n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9zdG9yZS9zdG9yZS5qcz9lZWZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4vLyBpbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5cclxuLy8gVnVlLnVzZShWdWV4KVxyXG4vLyBjb25zdCBzdGF0ZSA9IHtcclxuLy8gICBjb3VudDogMFxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuLy8gICBzdGF0ZVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vc3RvcmUuanMgXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJyBcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCcgXHJcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcclxuXHJcblxyXG5pbXBvcnQgd2VsY2hzIGZyb20gJ0Avd2VsY2hzJztcclxuLy8gaW1wb3J0ICogYXMgd2VsY2hzIGZyb20gJy4vd2VsY2hzJztcclxuXHJcbi8vIGltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycycgXHJcbi8vIGltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucycgXHJcbi8vIGltcG9ydCBtdXRhdGlvbnMgZnJvbSAnLi9tdXRhdGlvbnMnIFxyXG5cclxuXHJcblxyXG5WdWUudXNlKFZ1ZXgpIFxyXG4gXHJcbmNvbnN0IHN0YXRlID0geyBcclxuICBjb3VudDogMCxcclxuXHJcbiAgdF92YWx1ZTogLTIuMjUwMixcclxuICBjcml0X3RfdmFsdWU6IDMuMjE1NSxcclxuXHJcbiAgYWxwaGE6IDAuMDUsXHJcbiAgYmV0YTogMC4yNjczLFxyXG4gIGNvbmZpZGVuY2U6IDAsXHJcbiAgcG93ZXI6IDAsXHJcblxyXG4gIHByb2IxX3JlOiAwLjAxLFxyXG4gIHByb2IyX25lOiAwLFxyXG4gIHByb2IzX3RwOiAwLjAzNDcsXHJcbiAgcHJvYjRfZm46IDAsXHJcbiAgcHJvYjVfdG46IDAsXHJcbiAgcHJvYjZfZnA6IDAsXHJcbiAgcHJvYjdfcmV0cDogMCxcclxuICBwcm9iOF9yZWZuOiAwLFxyXG4gIHByb2I5X25ldG46IDAsXHJcbiAgcHJvYjEwX25lZnA6IDAsXHJcbiAgZmRyOiAwLFxyXG4gIHBwdjogMCxcclxuXHJcbn0gXHJcblxyXG5cclxuXHJcbmNvbnN0IG11dGF0aW9ucyA9IHtcclxuICBpbmNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudCsrXHJcbiAgfSxcclxuICBkZWNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5jb3VudC0tXHJcbiAgfSxcclxuICB1cGRhdGVTdGF0ZShzdGF0ZSl7XHJcbiAgICBzdGF0ZS5hbHBoYSA9IChOdW1iZXIoMC4xKSArIE51bWJlcihzdGF0ZS5hbHBoYSkpLnRvRml4ZWQoNCk7XHJcblxyXG4gICAgdGhpcy5jb21taXQoJ3VwZGF0ZUNvbmZ1c2lvbk1hdHJpeCcpO1xyXG4gICAgdGhpcy5jb21taXQoJ3VwZGF0ZVByb2JhYmlsaXR5VHJlZScpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUNvbmZ1c2lvbk1hdHJpeCAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmNvbmZpZGVuY2UgPSAoTnVtYmVyKDEuMCkgLSBOdW1iZXIoc3RhdGUuYWxwaGEpKS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucG93ZXIgPSAoTnVtYmVyKDEuMCkgLSBOdW1iZXIoc3RhdGUuYmV0YSkpLnRvRml4ZWQoNCk7XHJcbiAgfSxcclxuICB1cGRhdGVQcm9iYWJpbGl0eVRyZWUgKHN0YXRlKSB7XHJcbiAgICBzdGF0ZS5wcm9iMl9uZSA9IG1hdGgucm91bmQoMSAtIHN0YXRlLnByb2IxX3JlLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjNfdHAgPSBtYXRoLnJvdW5kKDEgLSBzdGF0ZS5iZXRhLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjRfZm4gPSBtYXRoLnJvdW5kKHN0YXRlLmJldGEsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wcm9iNV90biA9IG1hdGgucm91bmQoMS1zdGF0ZS5hbHBoYSwgNCkudG9GaXhlZCg0KTtcclxuICAgIHN0YXRlLnByb2I2X2ZwID0gbWF0aC5yb3VuZChzdGF0ZS5hbHBoYSwgNCkudG9GaXhlZCg0KTtcclxuICAgIHN0YXRlLnByb2I3X3JldHAgPSBtYXRoLnJvdW5kKHN0YXRlLnByb2IxX3JlICogc3RhdGUucHJvYjNfdHAsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wcm9iOF9yZWZuID0gbWF0aC5yb3VuZChzdGF0ZS5wcm9iMV9yZSAqIHN0YXRlLnByb2I0X2ZuLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjlfbmV0biA9IG1hdGgucm91bmQoc3RhdGUucHJvYjJfbmUgKiBzdGF0ZS5wcm9iNV90biwgNCkudG9GaXhlZCg0KTtcclxuICAgIHN0YXRlLnByb2IxMF9uZWZwID0gbWF0aC5yb3VuZChzdGF0ZS5wcm9iMl9uZSAqIHN0YXRlLnByb2I2X2ZwLCA0KS50b0ZpeGVkKDQpO1xyXG5cclxuICAgIHN0YXRlLmZkciA9IHdlbGNocy5nZXRGYWxzZURpc2NvdmVyeVJhdGUoc3RhdGUucHJvYjEwX25lZnAsIHN0YXRlLnByb2I3X3JldHApO1xyXG4gICAgc3RhdGUucHB2ID0gbWF0aC5yb3VuZCgxMDAgLSBzdGF0ZS5mZHIsMik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZEUjpcIiwgc3RhdGUuZmRyICsgXCIlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJQUFY6XCIsIHN0YXRlLnBwdiArIFwiJVwiKTtcclxuXHJcbiAgICAvLyBpZiAoTnVtYmVyLmlzTmFOKGZkcikpe1xyXG4gICAgLy8gICBmZHIgPSBcIiAtIFwiO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKE51bWJlci5pc05hTihwcHYpKXtcclxuICAgIC8vICAgcHB2ID0gXCIgLSBcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBlbGVtKFwiZmFsc2VfcmF0ZVwiKS5pbm5lclRleHQgPSBmZHIgKyBcIiVcIjtcclxuICAgIC8vIGVsZW0oXCJwcHZcIikuaW5uZXJUZXh0ID0gcHB2ICsgXCIlXCI7XHJcbiAgICAvLyBlbGVtKFwic2Vuc2l0aXZpdHlcIikuaW5uZXJUZXh0ID0gcHJvYjNfdHAuaW5uZXJUZXh0O1xyXG4gICAgLy8gZWxlbShcInNwZWNpZmljaXR5XCIpLmlubmVyVGV4dCA9IHByb2I1X3RuLmlubmVyVGV4dDtcclxuXHJcbiAgfSxcclxuICB1cGRhdGVQcm9iUmVhbEVmZmVjdChzdGF0ZSwgeyBwcm9iIH0pIHtcclxuICAgIHN0YXRlLnByb2IxX3JlID0gcHJvYjtcclxuICAgIHRoaXMuY29tbWl0KCd1cGRhdGVQcm9iYWJpbGl0eVRyZWUnKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7IFxyXG4gIHN0YXRlLFxyXG4gIG11dGF0aW9ucywgXHJcbiAgLy8gbWF0aCBcclxuICAvLyBnZXR0ZXJzLCAgXHJcbiAgLy8gYWN0aW9ucyBcclxufSkgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6602eace9c50107d"; }
/******/ }();
/******/ 
/******/ }
);
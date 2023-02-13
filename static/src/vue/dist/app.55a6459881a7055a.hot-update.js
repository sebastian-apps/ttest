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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"../../node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n// import Vue from 'vue'\n// import Vuex from 'vuex'\n\n// Vue.use(Vuex)\n// const state = {\n//   count: 0\n// }\n// export default new Vuex.Store({\n//   state\n// })\n\n//store.js \n\n\n\n\n\n// import * as welchs from './welchs';\n\n// import getters from './getters' \n// import actions from './actions' \n// import mutations from './mutations' \n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst state = {\n  count: 0,\n  t_value: -2.2502,\n  crit_t_value: 3.2155,\n  alpha: 0.05,\n  beta: 0.2673,\n  confidence: 0,\n  power: 0,\n  prob1_re: 0.01,\n  prob2_ne: 0,\n  prob3_tp: 0.0347,\n  prob4_fn: 0,\n  prob5_tn: 0,\n  prob6_fp: 0,\n  prob7_retp: 0,\n  prob8_refn: 0,\n  prob9_netn: 0,\n  prob10_nefp: 0,\n  fdr: 0,\n  ppv: 0\n};\nconst mutations = {\n  increment(state) {\n    state.count++;\n  },\n  decrement(state) {\n    state.count--;\n  },\n  updateState(state) {\n    state.alpha = (Number(0.1) + Number(state.alpha)).toFixed(4);\n    this.commit('updateConfusionMatrix');\n    this.commit('updateProbabilityTree');\n  },\n  updateConfusionMatrix(state) {\n    state.confidence = (Number(1.0) - Number(state.alpha)).toFixed(4);\n    state.power = (Number(1.0) - Number(state.beta)).toFixed(4);\n  },\n  updateProbabilityTree(state) {\n    state.prob2_ne = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.prob1_re, 4).toFixed(4);\n    state.prob3_tp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.beta, 4).toFixed(4);\n    state.prob4_fn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.beta, 4).toFixed(4);\n    state.prob5_tn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(1 - state.alpha, 4).toFixed(4);\n    state.prob6_fp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.alpha, 4).toFixed(4);\n    state.prob7_retp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob1_re * state.prob3_tp, 4).toFixed(4);\n    state.prob8_refn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob1_re * state.prob4_fn, 4).toFixed(4);\n    state.prob9_netn = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob2_ne * state.prob5_tn, 4).toFixed(4);\n    state.prob10_nefp = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(state.prob2_ne * state.prob6_fp, 4).toFixed(4);\n    state.fdr = _welchs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFalseDiscoveryRate(state.prob10_nefp, state.prob7_retp);\n    state.ppv = mathjs__WEBPACK_IMPORTED_MODULE_3__.round(100 - state.fdr, 2);\n    console.log(\"FDR:\", state.fdr + \"%\");\n    console.log(\"PPV:\", state.ppv + \"%\");\n\n    // if (Number.isNaN(fdr)){\n    //   fdr = \" - \";\n    // }\n    // if (Number.isNaN(ppv)){\n    //   ppv = \" - \";\n    // }\n\n    // elem(\"false_rate\").innerText = fdr + \"%\";\n    // elem(\"ppv\").innerText = ppv + \"%\";\n    // elem(\"sensitivity\").innerText = prob3_tp.innerText;\n    // elem(\"specificity\").innerText = prob5_tn.innerText;\n  },\n\n  updateProbRealEffect(state, {\n    prob\n  }) {\n    state.prob1_re = prob;\n    this.commit('updateProbabilityTree');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Store({\n  state,\n  mutations\n  // math \n  // getters,  \n  // actions \n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvc3RvcmUvc3RvcmUuanM/ZWVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuXHJcbi8vIFZ1ZS51c2UoVnVleClcclxuLy8gY29uc3Qgc3RhdGUgPSB7XHJcbi8vICAgY291bnQ6IDBcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbi8vICAgc3RhdGVcclxuLy8gfSlcclxuXHJcblxyXG4vL3N0b3JlLmpzIFxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZScgXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnIFxyXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcblxyXG5cclxuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyB3ZWxjaHMgZnJvbSAnLi93ZWxjaHMnO1xyXG5cclxuLy8gaW1wb3J0IGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJyBcclxuLy8gaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJyBcclxuLy8gaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucycgXHJcblxyXG5cclxuXHJcblZ1ZS51c2UoVnVleCkgXHJcbiBcclxuY29uc3Qgc3RhdGUgPSB7IFxyXG4gIGNvdW50OiAwLFxyXG5cclxuICB0X3ZhbHVlOiAtMi4yNTAyLFxyXG4gIGNyaXRfdF92YWx1ZTogMy4yMTU1LFxyXG5cclxuICBhbHBoYTogMC4wNSxcclxuICBiZXRhOiAwLjI2NzMsXHJcbiAgY29uZmlkZW5jZTogMCxcclxuICBwb3dlcjogMCxcclxuXHJcbiAgcHJvYjFfcmU6IDAuMDEsXHJcbiAgcHJvYjJfbmU6IDAsXHJcbiAgcHJvYjNfdHA6IDAuMDM0NyxcclxuICBwcm9iNF9mbjogMCxcclxuICBwcm9iNV90bjogMCxcclxuICBwcm9iNl9mcDogMCxcclxuICBwcm9iN19yZXRwOiAwLFxyXG4gIHByb2I4X3JlZm46IDAsXHJcbiAgcHJvYjlfbmV0bjogMCxcclxuICBwcm9iMTBfbmVmcDogMCxcclxuICBmZHI6IDAsXHJcbiAgcHB2OiAwLFxyXG5cclxufSBcclxuXHJcblxyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIGluY3JlbWVudCAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmNvdW50KytcclxuICB9LFxyXG4gIGRlY3JlbWVudCAoc3RhdGUpIHtcclxuICAgIHN0YXRlLmNvdW50LS1cclxuICB9LFxyXG4gIHVwZGF0ZVN0YXRlKHN0YXRlKXtcclxuICAgIHN0YXRlLmFscGhhID0gKE51bWJlcigwLjEpICsgTnVtYmVyKHN0YXRlLmFscGhhKSkudG9GaXhlZCg0KTtcclxuXHJcbiAgICB0aGlzLmNvbW1pdCgndXBkYXRlQ29uZnVzaW9uTWF0cml4Jyk7XHJcbiAgICB0aGlzLmNvbW1pdCgndXBkYXRlUHJvYmFiaWxpdHlUcmVlJyk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlQ29uZnVzaW9uTWF0cml4IChzdGF0ZSkge1xyXG4gICAgc3RhdGUuY29uZmlkZW5jZSA9IChOdW1iZXIoMS4wKSAtIE51bWJlcihzdGF0ZS5hbHBoYSkpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wb3dlciA9IChOdW1iZXIoMS4wKSAtIE51bWJlcihzdGF0ZS5iZXRhKSkudG9GaXhlZCg0KTtcclxuICB9LFxyXG4gIHVwZGF0ZVByb2JhYmlsaXR5VHJlZSAoc3RhdGUpIHtcclxuICAgIHN0YXRlLnByb2IyX25lID0gbWF0aC5yb3VuZCgxIC0gc3RhdGUucHJvYjFfcmUsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wcm9iM190cCA9IG1hdGgucm91bmQoMSAtIHN0YXRlLmJldGEsIDQpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wcm9iNF9mbiA9IG1hdGgucm91bmQoc3RhdGUuYmV0YSwgNCkudG9GaXhlZCg0KTtcclxuICAgIHN0YXRlLnByb2I1X3RuID0gbWF0aC5yb3VuZCgxLXN0YXRlLmFscGhhLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjZfZnAgPSBtYXRoLnJvdW5kKHN0YXRlLmFscGhhLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjdfcmV0cCA9IG1hdGgucm91bmQoc3RhdGUucHJvYjFfcmUgKiBzdGF0ZS5wcm9iM190cCwgNCkudG9GaXhlZCg0KTtcclxuICAgIHN0YXRlLnByb2I4X3JlZm4gPSBtYXRoLnJvdW5kKHN0YXRlLnByb2IxX3JlICogc3RhdGUucHJvYjRfZm4sIDQpLnRvRml4ZWQoNCk7XHJcbiAgICBzdGF0ZS5wcm9iOV9uZXRuID0gbWF0aC5yb3VuZChzdGF0ZS5wcm9iMl9uZSAqIHN0YXRlLnByb2I1X3RuLCA0KS50b0ZpeGVkKDQpO1xyXG4gICAgc3RhdGUucHJvYjEwX25lZnAgPSBtYXRoLnJvdW5kKHN0YXRlLnByb2IyX25lICogc3RhdGUucHJvYjZfZnAsIDQpLnRvRml4ZWQoNCk7XHJcblxyXG4gICAgc3RhdGUuZmRyID0gd2VsY2hzLmdldEZhbHNlRGlzY292ZXJ5UmF0ZShzdGF0ZS5wcm9iMTBfbmVmcCwgc3RhdGUucHJvYjdfcmV0cCk7XHJcbiAgICBzdGF0ZS5wcHYgPSBtYXRoLnJvdW5kKDEwMCAtIHN0YXRlLmZkciwyKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRkRSOlwiLCBzdGF0ZS5mZHIgKyBcIiVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBQVjpcIiwgc3RhdGUucHB2ICsgXCIlXCIpO1xyXG5cclxuICAgIC8vIGlmIChOdW1iZXIuaXNOYU4oZmRyKSl7XHJcbiAgICAvLyAgIGZkciA9IFwiIC0gXCI7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoTnVtYmVyLmlzTmFOKHBwdikpe1xyXG4gICAgLy8gICBwcHYgPSBcIiAtIFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGVsZW0oXCJmYWxzZV9yYXRlXCIpLmlubmVyVGV4dCA9IGZkciArIFwiJVwiO1xyXG4gICAgLy8gZWxlbShcInBwdlwiKS5pbm5lclRleHQgPSBwcHYgKyBcIiVcIjtcclxuICAgIC8vIGVsZW0oXCJzZW5zaXRpdml0eVwiKS5pbm5lclRleHQgPSBwcm9iM190cC5pbm5lclRleHQ7XHJcbiAgICAvLyBlbGVtKFwic3BlY2lmaWNpdHlcIikuaW5uZXJUZXh0ID0gcHJvYjVfdG4uaW5uZXJUZXh0O1xyXG5cclxuICB9LFxyXG4gIHVwZGF0ZVByb2JSZWFsRWZmZWN0KHN0YXRlLCB7IHByb2IgfSkge1xyXG4gICAgc3RhdGUucHJvYjFfcmUgPSBwcm9iO1xyXG4gICAgdGhpcy5jb21taXQoJ3VwZGF0ZVByb2JhYmlsaXR5VHJlZScpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHsgXHJcbiAgc3RhdGUsXHJcbiAgbXV0YXRpb25zLCBcclxuICAvLyBtYXRoIFxyXG4gIC8vIGdldHRlcnMsICBcclxuICAvLyBhY3Rpb25zIFxyXG59KSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4d7771b3a7a624a4"; }
/******/ }();
/******/ 
/******/ }
);
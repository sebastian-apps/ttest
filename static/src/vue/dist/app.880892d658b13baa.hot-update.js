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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\n//   import funcs from '@/welchs';\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    }\n  },\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    console.log(\"this.store.state.crit_t_value:\", this.store.state.crit_t_value);\n    if (this.store.state.crit_t_value <= this.store.state.t_value) {\n      console.log(\"this.store.state.crit_t_value <= this.store.state.t_value\");\n    }\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvSHlwb3RoZXNpc0NvbXBvbmVudC52dWU/NDhiMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaHRcIj5cclxuICAgICAgPGJyPlxyXG4gICAgICAgICAgPGk+SDxzdWI+MDwvc3ViPjwvaT46IHBvcHVsYXRpb24gMSBtZWFuID0gcG9wdWxhdGlvbiAyIG1lYW48YnI+XHJcbiAgICAgICAgICA8aT5IPHN1Yj4xPC9zdWI+PC9pPjogcG9wdWxhdGlvbiAxIG1lYW4gJmx0OyBwb3B1bGF0aW9uIDIgbWVhbjxicj5cclxuICAgICAgICAgIDxicj5cclxuXHJcbiAgICAgICAgICA8Yj48c3BhbiBpZD1cInJlamVjdC1vci1ub3RcIj48L3NwYW4+PC9iPlxyXG4gICAgICAgICAgPHA+PGJyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+PGk+SDxzdWI+MDwvc3ViPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbSBiYWNrLW9yYW5nZVwiIGlkPVwicmVqZWN0XCI+UkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cIm5vdC1yZWplY3RcIj5OT1QgUkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5UUlVFPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cImFscGhhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYWxwaGFcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+RmFsc2UgUG9zaXRpdmU8YnI+VHlwZSBJIEVycm9yPGJyPigmIzk0NTspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiY29uZmlkZW5jZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY29uZmlkZW5jZSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICBUcnVlIE5lZ2F0aXZlPGJyPkNvbmZpZGVuY2U8YnI+KDEgLSAmIzk0NTspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+RkFMU0U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwicG93ZXJcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnBvd2VyIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRydWUgUG9zaXRpdmU8YnI+UG93ZXI8YnI+KDEgLSAmIzk0NjspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgaWQ9XCJiZXRhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYmV0YVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYmV0YSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWVcIj5GYWxzZSBOZWdhdGl2ZTxicj5UeXBlIElJIEVycm9yPGJyPigmIzk0NjspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnOyBcclxuICBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcbi8vICAgaW1wb3J0IGZ1bmNzIGZyb20gJ0Avd2VsY2hzJztcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHRlc3QuZm9vKCkpO1xyXG4vLyAgIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1FU1NBR0U6XCIsIHN0b3JlLnNwZWNpYWxtc2cpO1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RvcmUsXHJcbiAgICBuYW1lOiAnSHlwb3RoZXNpc0NvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50LFxyXG4gICAgICAgICAgICB0ZXh0OiAwLjAxLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVJbnB1dChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvYiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvYik7XHJcbiAgICAgICAgICAgIGlmIChwcm9iID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVQcm9iUmVhbEVmZmVjdCcsIHsgcHJvYiB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgbGV0IHByb2IgPSAwLjAxO1xyXG4gICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlUHJvYlJlYWxFZmZlY3QnLCB7IHByb2IgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNQVRIIFJPVU5EOlwiLCBtYXRoLnJvdW5kKDk5OS4xMTExMTExMTEsIDQpKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlOlwiLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlIDw9IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA8PSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNDJiOTgzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmh0IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWdyYW0tYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyAgLypyZ2JhKDAsIDAsIDAsIDAuOCk7Ki9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJhY2stb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7XHJcbiAgfVxyXG5cclxuICAuYmFjay13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8ba6320b76a51904"; }
/******/ }();
/******/ 
/******/ }
);
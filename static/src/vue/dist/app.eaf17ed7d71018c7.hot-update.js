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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\n//   import funcs from '@/welchs';\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'HypothesisComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count,\n      text: 0.01\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    handleInput(event) {\n      let prob = event.target.value;\n      console.log(prob);\n      if (prob >= 0) {\n        console.log(\"In range.\");\n        _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n          prob\n        });\n      } else {\n        console.log(\"Out of range.\");\n      }\n    }\n  },\n  mounted() {\n    let prob = 0.01;\n    _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('updateProbRealEffect', {\n      prob\n    });\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 4));\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlPzQ4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImh0XCI+XHJcbiAgICAgIDxicj5cclxuICAgICAgICAgIDxpPkg8c3ViPjA8L3N1Yj48L2k+OiBwb3B1bGF0aW9uIDEgbWVhbiA9IHBvcHVsYXRpb24gMiBtZWFuPGJyPlxyXG4gICAgICAgICAgPGk+SDxzdWI+MTwvc3ViPjwvaT46IHBvcHVsYXRpb24gMSBtZWFuICZsdDsgcG9wdWxhdGlvbiAyIG1lYW48YnI+XHJcbiAgICAgICAgICA8YnI+XHJcblxyXG4gICAgICAgICAgPGI+PHNwYW4gaWQ9XCJyZWplY3Qtb3Itbm90XCI+PC9zcGFuPjwvYj5cclxuICAgICAgICAgIDxwPjxicj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPjxpPkg8c3ViPjA8L3N1Yj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW0gZGl2LXJlamVjdFwiIGlkPVwicmVqZWN0XCI+UkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cIm5vdC1yZWplY3RcIj5OT1QgUkVKRUNUPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5UUlVFPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIiBpZD1cImFscGhhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYWxwaGFcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+RmFsc2UgUG9zaXRpdmU8YnI+VHlwZSBJIEVycm9yPGJyPigmIzk0NTspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiY29uZmlkZW5jZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY29uZmlkZW5jZSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICBUcnVlIE5lZ2F0aXZlPGJyPkNvbmZpZGVuY2U8YnI+KDEgLSAmIzk0NTspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+RkFMU0U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwicG93ZXJcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnBvd2VyIH19PC9zcGFuPjwvYj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgIFRydWUgUG9zaXRpdmU8YnI+UG93ZXI8YnI+KDEgLSAmIzk0NjspXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCIgaWQ9XCJiZXRhLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxiPjxzcGFuIGlkPVwiYmV0YVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYmV0YSB9fTwvc3Bhbj48L2I+PGJyPjxicj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWVcIj5GYWxzZSBOZWdhdGl2ZTxicj5UeXBlIElJIEVycm9yPGJyPigmIzk0NjspPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnOyBcclxuICBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcbi8vICAgaW1wb3J0IGZ1bmNzIGZyb20gJ0Avd2VsY2hzJztcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHRlc3QuZm9vKCkpO1xyXG4vLyAgIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1FU1NBR0U6XCIsIHN0b3JlLnNwZWNpYWxtc2cpO1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RvcmUsXHJcbiAgICBuYW1lOiAnSHlwb3RoZXNpc0NvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50LFxyXG4gICAgICAgICAgICB0ZXh0OiAwLjAxLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVJbnB1dChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvYiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvYik7XHJcbiAgICAgICAgICAgIGlmIChwcm9iID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVQcm9iUmVhbEVmZmVjdCcsIHsgcHJvYiB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgbGV0IHByb2IgPSAwLjAxO1xyXG4gICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlUHJvYlJlYWxFZmZlY3QnLCB7IHByb2IgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNQVRIIFJPVU5EOlwiLCBtYXRoLnJvdW5kKDk5OS4xMTExMTExMTEsIDQpKTtcclxuICAgICAgICAvLyBsZXQgbXlGdW5jdGlvbiA9ICgpID0+IHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7IH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIDwvc2NyaXB0PlxyXG4gIFxyXG4gIDwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG4gIDxzdHlsZSBzY29wZWQ+XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDAgMDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzQyYjk4MztcclxuICAgIH1cclxuXHJcbiAgICAucmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5odCB7XHJcbiAgICAgICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFncmFtLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5ncmlkLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5kaXYtcmVqZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HypothesisComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "acd1229b1868afe7"; }
/******/ }();
/******/ 
/******/ }
);
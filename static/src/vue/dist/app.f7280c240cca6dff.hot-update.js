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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\nconsole.log(\"MESSAGE:\", _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].specialmsg);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    console.log(\"MESSAGE:\", this.store.specialmsg);\n    // console.log(this.store.math.round(999.111111111, 2));\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7OztBQTZEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT81OTRiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcHZcIj5cclxuXHJcbiAgICAgICAgPGI+UG9zaXRpdmUgUHJlZGljdGl2ZSBWYWx1ZSAoUFBWKTwvYj5cclxuICAgICAgICAgIDxicj48YnI+XHJcblxyXG4gICAgICAgICAgPGI+UHJvYmFiaWxpdHkgdHJlZSBkaWFncmFtPC9iPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9XCJ7JSBzdGF0aWMgJ2ltYWdlcy90cmVlLnN2ZycgJX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2IxX3JlXCIgY2xhc3M9XCJwcm9iMV9yZVwiIHZhbHVlPVwiMC4wMVwiIHNpemU9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjJfbmVcIiBjbGFzcz1cInByb2IyX25lXCI+PC9kaXY+PGI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjNfdHBcIiBjbGFzcz1cInByb2IzX3RwXCI+cHJvYjNfdHA6IHt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjNfdHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNF9mblwiIGNsYXNzPVwicHJvYjRfZm5cIj5iZXRhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNV90blwiIGNsYXNzPVwicHJvYjVfdG5cIj5wcm9iNV90bjoge3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iNV90biB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I2X2ZwXCIgY2xhc3M9XCJwcm9iNl9mcFwiPmFscGhhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjdfcmV0cFwiIGNsYXNzPVwicHJvYjdfcmV0cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I4X3JlZm5cIiBjbGFzcz1cInByb2I4X3JlZm5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOV9uZXRuXCIgY2xhc3M9XCJwcm9iOV9uZXRuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjEwX25lZnBcIiBjbGFzcz1cInByb2IxMF9uZWZwXCI+PC9kaXY+PC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+PGJyPlxyXG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zcGVjaWFsbXNnLm1zZyB9fVxyXG5cclxuICAgICAgICAgICAgUFBWOiA8Yj48c3BhbiBpZD1cInBwdlwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogPGI+PHNwYW4gaWQ9XCJmYWxzZV9yYXRlXCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2aXR5OiA8Yj48c3BhbiBpZD1cInNlbnNpdGl2aXR5XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNwZWNpZmljaXR5OiA8Yj48c3BhbiBpZD1cInNwZWNpZmljaXR5XCI+PC9zcGFuPjwvYj5cclxuXHJcblxyXG4gICAgICAgICAgICA8YnI+PGJyPjxicj48YnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmRcclxuICAgICAgICAgICAgICB0aGUgdGVzdCBmb3IgdGhlIGRpc2Vhc2UgaXMgOTklIGFjY3VyYXRlLCB3ZSBtYXkgaW50dWl0IHRoYXRcclxuICAgICAgICAgICAgICBvdXIgZGlhZ25vc2lzIHdpbGwgYmUgY29ycmVjdCA5OSUgb2YgdGhlIHRpbWUuIEhvd2V2ZXIsIGlmICYjOTQ1OyA9IDAuMDUgYW5kICYjOTQ2OyA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLjxzdXA+NDwvc3VwPlxyXG4gICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgVGhlIHByb2JhYmlsaXR5IG9mIHRoZSByZWFsIGVmZmVjdCAoZS5nLiwgcHJldmFsZW5jZSBvZiBkaXNlYXNlKSBjYW4gYmUgbW9kaWZpZWQgYWJvdmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSA8aDE+e3sgbXNnIH19PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgRm9yIGEgZ3VpZGUgYW5kIHJlY2lwZXMgb24gaG93IHRvIGNvbmZpZ3VyZSAvIGN1c3RvbWl6ZSB0aGlzIHByb2plY3QsPGJyPlxyXG4gICAgICAgIGNoZWNrIG91dCB0aGVcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jbGkudnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj52dWUtY2xpIGRvY3VtZW50YXRpb248L2E+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMz5QUFYgQ29tcG9uZW50PC9oMz5cclxuICAgICAgPHAgaWQ9XCJkZW1vXCIgQGNsaWNrPVwibXlGdW5jdGlvblwiPkxPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIDwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT4xMjM8L2xpPlxyXG4gICAgICAgIDxsaT40NTY8L2xpPlxyXG4gICAgICAgIDxsaT57eyBzdG9yZWNvdW50IH19PC9saT5cclxuICAgICAgICA8bGk+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jb3VudCB9fTwvbGk+XHJcbiAgICAgIDwvdWw+IC0tPlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuICBcclxuICA8c2NyaXB0PlxyXG4gIGltcG9ydCB0ZXN0IGZyb20gJ0AvbXlsaWInO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL3N0b3JlJyBcclxuXHJcbiAgY29uc29sZS5sb2codGVzdC5mb28oKSk7XHJcbi8vICAgc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTUVTU0FHRTpcIiwgc3RvcmUuc3BlY2lhbG1zZyk7XHJcblxyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdG9yZSxcclxuICAgIG5hbWU6ICdQUFZDb21wb25lbnQnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbXNnOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0b3JlLFxyXG4gICAgICAgICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBwcm9iM190cDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gMS1zdG9yZS5zdGF0ZS5iZXRhXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBwcm9iNV90bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gMS1zdG9yZS5zdGF0ZS5hbHBoYVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1FU1NBR0U6XCIsIHRoaXMuc3RvcmUuc3BlY2lhbG1zZyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5tYXRoLnJvdW5kKDk5OS4xMTExMTExMTEsIDIpKTtcclxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICAvLyBsZXQgbXlGdW5jdGlvbiA9ICgpID0+IHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpLmlubmVySFRNTCA9IFwiSSBoYXZlIGNoYW5nZWQhXCI7IH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIDwvc2NyaXB0PlxyXG4gIFxyXG4gIDwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG4gIDxzdHlsZSBzY29wZWQ+XHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMDtcclxuICB9XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM0MmI5ODM7XHJcbiAgfVxyXG4gIDwvc3R5bGU+XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "db55263cc0eff3f4"; }
/******/ }();
/******/ 
/******/ }
);
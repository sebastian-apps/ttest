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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n\nconsole.log(math.round(999.111111111, 2));\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7OztBQTREQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZT81OTRiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcHZcIj5cclxuXHJcbiAgICAgICAgPGI+UG9zaXRpdmUgUHJlZGljdGl2ZSBWYWx1ZSAoUFBWKTwvYj5cclxuICAgICAgICAgIDxicj48YnI+XHJcblxyXG4gICAgICAgICAgPGI+UHJvYmFiaWxpdHkgdHJlZSBkaWFncmFtPC9iPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3BvbnNpdmVcIiBzcmM9XCJ7JSBzdGF0aWMgJ2ltYWdlcy90cmVlLnN2ZycgJX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2IxX3JlXCIgY2xhc3M9XCJwcm9iMV9yZVwiIHZhbHVlPVwiMC4wMVwiIHNpemU9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjJfbmVcIiBjbGFzcz1cInByb2IyX25lXCI+PC9kaXY+PGI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjNfdHBcIiBjbGFzcz1cInByb2IzX3RwXCI+cHJvYjNfdHA6IHt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjNfdHAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNF9mblwiIGNsYXNzPVwicHJvYjRfZm5cIj5iZXRhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmJldGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNV90blwiIGNsYXNzPVwicHJvYjVfdG5cIj5wcm9iNV90bjoge3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iNV90biB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I2X2ZwXCIgY2xhc3M9XCJwcm9iNl9mcFwiPmFscGhhOiB7eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjdfcmV0cFwiIGNsYXNzPVwicHJvYjdfcmV0cFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I4X3JlZm5cIiBjbGFzcz1cInByb2I4X3JlZm5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOV9uZXRuXCIgY2xhc3M9XCJwcm9iOV9uZXRuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjEwX25lZnBcIiBjbGFzcz1cInByb2IxMF9uZWZwXCI+PC9kaXY+PC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+PGJyPlxyXG5cclxuICAgICAgICAgICAgUFBWOiA8Yj48c3BhbiBpZD1cInBwdlwiPjwvc3Bhbj48L2I+PGJyPlxyXG4gICAgICAgICAgICBGYWxzZSBEaXNjb3ZlcnkgUmF0ZTogPGI+PHNwYW4gaWQ9XCJmYWxzZV9yYXRlXCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2aXR5OiA8Yj48c3BhbiBpZD1cInNlbnNpdGl2aXR5XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIFNwZWNpZmljaXR5OiA8Yj48c3BhbiBpZD1cInNwZWNpZmljaXR5XCI+PC9zcGFuPjwvYj5cclxuXHJcblxyXG4gICAgICAgICAgICA8YnI+PGJyPjxicj48YnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgMSUgb2YgdGhlIHBvcHVsYXRpb24gaXMgYWZmbGljdGVkIHdpdGggYSBkaXNlYXNlLCBhbmRcclxuICAgICAgICAgICAgICB0aGUgdGVzdCBmb3IgdGhlIGRpc2Vhc2UgaXMgOTklIGFjY3VyYXRlLCB3ZSBtYXkgaW50dWl0IHRoYXRcclxuICAgICAgICAgICAgICBvdXIgZGlhZ25vc2lzIHdpbGwgYmUgY29ycmVjdCA5OSUgb2YgdGhlIHRpbWUuIEhvd2V2ZXIsIGlmICYjOTQ1OyA9IDAuMDUgYW5kICYjOTQ2OyA9IDAuMDEsIHdlIHdpbGwgYWNjdXJhdGVseSBkaWFnbm9zZSBhIHBhdGllbnQgd2l0aCB0aGUgZGlzZWFzZSBvbmx5IDE2JSBvZiB0aGUgdGltZS4gVGhlIFBQViBpbiB0aGlzIGNhc2UgaXMgMTYlLjxzdXA+NDwvc3VwPlxyXG4gICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgVGhlIHByb2JhYmlsaXR5IG9mIHRoZSByZWFsIGVmZmVjdCAoZS5nLiwgcHJldmFsZW5jZSBvZiBkaXNlYXNlKSBjYW4gYmUgbW9kaWZpZWQgYWJvdmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSA8aDE+e3sgbXNnIH19PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgRm9yIGEgZ3VpZGUgYW5kIHJlY2lwZXMgb24gaG93IHRvIGNvbmZpZ3VyZSAvIGN1c3RvbWl6ZSB0aGlzIHByb2plY3QsPGJyPlxyXG4gICAgICAgIGNoZWNrIG91dCB0aGVcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jbGkudnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj52dWUtY2xpIGRvY3VtZW50YXRpb248L2E+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMz5QUFYgQ29tcG9uZW50PC9oMz5cclxuICAgICAgPHAgaWQ9XCJkZW1vXCIgQGNsaWNrPVwibXlGdW5jdGlvblwiPkxPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIExPUkVNIElQU1VNIDwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT4xMjM8L2xpPlxyXG4gICAgICAgIDxsaT40NTY8L2xpPlxyXG4gICAgICAgIDxsaT57eyBzdG9yZWNvdW50IH19PC9saT5cclxuICAgICAgICA8bGk+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jb3VudCB9fTwvbGk+XHJcbiAgICAgIDwvdWw+IC0tPlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuICBcclxuICA8c2NyaXB0PlxyXG4gIGltcG9ydCB0ZXN0IGZyb20gJ0AvbXlsaWInO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL3N0b3JlJyBcclxuXHJcbiAgY29uc29sZS5sb2codGVzdC5mb28oKSk7XHJcbi8vICAgc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcclxuXHJcbiAgY29uc29sZS5sb2cobWF0aC5yb3VuZCg5OTkuMTExMTExMTExLCAyKSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN0b3JlLFxyXG4gICAgbmFtZTogJ1BQVkNvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHByb2IzX3RwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmJldGFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHByb2I1X3RuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmFscGhhXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQyYjk4MztcclxuICB9XHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a39ac9bc782d6ab7"; }
/******/ }();
/******/ 
/******/ }
);
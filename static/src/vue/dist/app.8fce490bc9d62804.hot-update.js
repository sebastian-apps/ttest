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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n// console.log(\"MESSAGE:\", store.specialmsg);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    // console.log(\"MESSAGE:\", this.store.specialmsg);\n    console.log(\"MATH ROUND:\", mathjs__WEBPACK_IMPORTED_MODULE_2__.round(999.111111111, 2));\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE2REE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/NTk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHB2XCI+XHJcblxyXG4gICAgICAgIDxiPlBvc2l0aXZlIFByZWRpY3RpdmUgVmFsdWUgKFBQVik8L2I+XHJcbiAgICAgICAgICA8YnI+PGJyPlxyXG5cclxuICAgICAgICAgIDxiPlByb2JhYmlsaXR5IHRyZWUgZGlhZ3JhbTwvYj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXNwb25zaXZlXCIgc3JjPVwieyUgc3RhdGljICdpbWFnZXMvdHJlZS5zdmcnICV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9iMV9yZVwiIGNsYXNzPVwicHJvYjFfcmVcIiB2YWx1ZT1cIjAuMDFcIiBzaXplPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2IyX25lXCIgY2xhc3M9XCJwcm9iMl9uZVwiPjwvZGl2PjxiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2IzX3RwXCIgY2xhc3M9XCJwcm9iM190cFwiPnByb2IzX3RwOiB7eyB0aGlzLnN0b3JlLnN0YXRlLnByb2IzX3RwIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjRfZm5cIiBjbGFzcz1cInByb2I0X2ZuXCI+YmV0YToge3sgdGhpcy5zdG9yZS5zdGF0ZS5iZXRhIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjVfdG5cIiBjbGFzcz1cInByb2I1X3RuXCI+cHJvYjVfdG46IHt7IHRoaXMuc3RvcmUuc3RhdGUucHJvYjVfdG4gfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iNl9mcFwiIGNsYXNzPVwicHJvYjZfZnBcIj5hbHBoYToge3sgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I3X3JldHBcIiBjbGFzcz1cInByb2I3X3JldHBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iOF9yZWZuXCIgY2xhc3M9XCJwcm9iOF9yZWZuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjlfbmV0blwiIGNsYXNzPVwicHJvYjlfbmV0blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2IxMF9uZWZwXCIgY2xhc3M9XCJwcm9iMTBfbmVmcFwiPjwvZGl2PjwvYj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPjxicj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBQUFY6IDxiPjxzcGFuIGlkPVwicHB2XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIEZhbHNlIERpc2NvdmVyeSBSYXRlOiA8Yj48c3BhbiBpZD1cImZhbHNlX3JhdGVcIj48L3NwYW4+PC9iPjxicj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZpdHk6IDxiPjxzcGFuIGlkPVwic2Vuc2l0aXZpdHlcIj48L3NwYW4+PC9iPjxicj5cclxuICAgICAgICAgICAgU3BlY2lmaWNpdHk6IDxiPjxzcGFuIGlkPVwic3BlY2lmaWNpdHlcIj48L3NwYW4+PC9iPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxicj48YnI+PGJyPjxicj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgIEZvciBleGFtcGxlLCBpZiAxJSBvZiB0aGUgcG9wdWxhdGlvbiBpcyBhZmZsaWN0ZWQgd2l0aCBhIGRpc2Vhc2UsIGFuZFxyXG4gICAgICAgICAgICAgIHRoZSB0ZXN0IGZvciB0aGUgZGlzZWFzZSBpcyA5OSUgYWNjdXJhdGUsIHdlIG1heSBpbnR1aXQgdGhhdFxyXG4gICAgICAgICAgICAgIG91ciBkaWFnbm9zaXMgd2lsbCBiZSBjb3JyZWN0IDk5JSBvZiB0aGUgdGltZS4gSG93ZXZlciwgaWYgJiM5NDU7ID0gMC4wNSBhbmQgJiM5NDY7ID0gMC4wMSwgd2Ugd2lsbCBhY2N1cmF0ZWx5IGRpYWdub3NlIGEgcGF0aWVudCB3aXRoIHRoZSBkaXNlYXNlIG9ubHkgMTYlIG9mIHRoZSB0aW1lLiBUaGUgUFBWIGluIHRoaXMgY2FzZSBpcyAxNiUuPHN1cD40PC9zdXA+XHJcbiAgICAgICAgICAgICAgPGJyPjxicj5cclxuICAgICAgICAgICAgICBUaGUgcHJvYmFiaWxpdHkgb2YgdGhlIHJlYWwgZWZmZWN0IChlLmcuLCBwcmV2YWxlbmNlIG9mIGRpc2Vhc2UpIGNhbiBiZSBtb2RpZmllZCBhYm92ZS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIDxoMT57eyBtc2cgfX08L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICBGb3IgYSBndWlkZSBhbmQgcmVjaXBlcyBvbiBob3cgdG8gY29uZmlndXJlIC8gY3VzdG9taXplIHRoaXMgcHJvamVjdCw8YnI+XHJcbiAgICAgICAgY2hlY2sgb3V0IHRoZVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NsaS52dWVqcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPnZ1ZS1jbGkgZG9jdW1lbnRhdGlvbjwvYT4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgzPlBQViBDb21wb25lbnQ8L2gzPlxyXG4gICAgICA8cCBpZD1cImRlbW9cIiBAY2xpY2s9XCJteUZ1bmN0aW9uXCI+TE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gPC9wPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjEyMzwvbGk+XHJcbiAgICAgICAgPGxpPjQ1NjwvbGk+XHJcbiAgICAgICAgPGxpPnt7IHN0b3JlY291bnQgfX08L2xpPlxyXG4gICAgICAgIDxsaT57eyB0aGlzLnN0b3JlLnN0YXRlLmNvdW50IH19PC9saT5cclxuICAgICAgPC91bD4gLS0+XHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnOyBcclxuICBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XHJcblxyXG5cclxuICBjb25zb2xlLmxvZyh0ZXN0LmZvbygpKTtcclxuLy8gICBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJNRVNTQUdFOlwiLCBzdG9yZS5zcGVjaWFsbXNnKTtcclxuXHJcbiAgXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN0b3JlLFxyXG4gICAgbmFtZTogJ1BQVkNvbXBvbmVudCcsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtc2c6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHByb2IzX3RwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmJldGFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHByb2I1X3RuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAxLXN0b3JlLnN0YXRlLmFscGhhXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTUVTU0FHRTpcIiwgdGhpcy5zdG9yZS5zcGVjaWFsbXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1BVEggUk9VTkQ6XCIsIG1hdGgucm91bmQoOTk5LjExMTExMTExMSwgMikpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQyYjk4MztcclxuICB9XHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "?840f":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/amd define */
/******/ !function() {
/******/ 	__webpack_require__.amdD = function () {
/******/ 		throw new Error('define cannot be used indirect');
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/amd options */
/******/ !function() {
/******/ 	__webpack_require__.amdO = {};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9b1067419a7263f9"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/node module decorator */
/******/ !function() {
/******/ 	__webpack_require__.nmd = function(module) {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ }();
/******/ 
/******/ }
);
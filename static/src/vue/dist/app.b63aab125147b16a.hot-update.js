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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mylib */ \"./src/mylib.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n\n\nconsole.log(_mylib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].foo());\n//   store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'PPVComponent',\n  props: {\n    msg: String\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.count\n    };\n  },\n  methods: {\n    myFunction: function () {\n      _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commit('decrement');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    }\n    // prob3_tp: function () {\n    //     return 1-store.state.beta\n    // },\n    // prob5_tn: function () {\n    //     return 1-store.state.alpha\n    // },\n  },\n\n  mounted() {\n    console.log(\"MESSAGE:\", _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].specialmsg);\n    // console.log(this.store.math.round(999.111111111, 2));\n    // document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    // let myFunction = () => { document.getElementById(\"demo\").innerHTML = \"I have changed!\"; };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7OztBQTREQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9QUFZDb21wb25lbnQudnVlPzU5NGIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInBwdlwiPlxyXG5cclxuICAgICAgICA8Yj5Qb3NpdGl2ZSBQcmVkaWN0aXZlIFZhbHVlIChQUFYpPC9iPlxyXG4gICAgICAgICAgPGJyPjxicj5cclxuXHJcbiAgICAgICAgICA8Yj5Qcm9iYWJpbGl0eSB0cmVlIGRpYWdyYW08L2I+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzcG9uc2l2ZVwiIHNyYz1cInslIHN0YXRpYyAnaW1hZ2VzL3RyZWUuc3ZnJyAlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvYjFfcmVcIiBjbGFzcz1cInByb2IxX3JlXCIgdmFsdWU9XCIwLjAxXCIgc2l6ZT1cIjNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iMl9uZVwiIGNsYXNzPVwicHJvYjJfbmVcIj48L2Rpdj48Yj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iM190cFwiIGNsYXNzPVwicHJvYjNfdHBcIj5wcm9iM190cDoge3sgdGhpcy5zdG9yZS5zdGF0ZS5wcm9iM190cCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I0X2ZuXCIgY2xhc3M9XCJwcm9iNF9mblwiPmJldGE6IHt7IHRoaXMuc3RvcmUuc3RhdGUuYmV0YSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I1X3RuXCIgY2xhc3M9XCJwcm9iNV90blwiPnByb2I1X3RuOiB7eyB0aGlzLnN0b3JlLnN0YXRlLnByb2I1X3RuIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjZfZnBcIiBjbGFzcz1cInByb2I2X2ZwXCI+YWxwaGE6IHt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iN19yZXRwXCIgY2xhc3M9XCJwcm9iN19yZXRwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvYjhfcmVmblwiIGNsYXNzPVwicHJvYjhfcmVmblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2I5X25ldG5cIiBjbGFzcz1cInByb2I5X25ldG5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9iMTBfbmVmcFwiIGNsYXNzPVwicHJvYjEwX25lZnBcIj48L2Rpdj48L2I+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD48YnI+XHJcblxyXG4gICAgICAgICAgICBQUFY6IDxiPjxzcGFuIGlkPVwicHB2XCI+PC9zcGFuPjwvYj48YnI+XHJcbiAgICAgICAgICAgIEZhbHNlIERpc2NvdmVyeSBSYXRlOiA8Yj48c3BhbiBpZD1cImZhbHNlX3JhdGVcIj48L3NwYW4+PC9iPjxicj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZpdHk6IDxiPjxzcGFuIGlkPVwic2Vuc2l0aXZpdHlcIj48L3NwYW4+PC9iPjxicj5cclxuICAgICAgICAgICAgU3BlY2lmaWNpdHk6IDxiPjxzcGFuIGlkPVwic3BlY2lmaWNpdHlcIj48L3NwYW4+PC9iPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxicj48YnI+PGJyPjxicj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgIEZvciBleGFtcGxlLCBpZiAxJSBvZiB0aGUgcG9wdWxhdGlvbiBpcyBhZmZsaWN0ZWQgd2l0aCBhIGRpc2Vhc2UsIGFuZFxyXG4gICAgICAgICAgICAgIHRoZSB0ZXN0IGZvciB0aGUgZGlzZWFzZSBpcyA5OSUgYWNjdXJhdGUsIHdlIG1heSBpbnR1aXQgdGhhdFxyXG4gICAgICAgICAgICAgIG91ciBkaWFnbm9zaXMgd2lsbCBiZSBjb3JyZWN0IDk5JSBvZiB0aGUgdGltZS4gSG93ZXZlciwgaWYgJiM5NDU7ID0gMC4wNSBhbmQgJiM5NDY7ID0gMC4wMSwgd2Ugd2lsbCBhY2N1cmF0ZWx5IGRpYWdub3NlIGEgcGF0aWVudCB3aXRoIHRoZSBkaXNlYXNlIG9ubHkgMTYlIG9mIHRoZSB0aW1lLiBUaGUgUFBWIGluIHRoaXMgY2FzZSBpcyAxNiUuPHN1cD40PC9zdXA+XHJcbiAgICAgICAgICAgICAgPGJyPjxicj5cclxuICAgICAgICAgICAgICBUaGUgcHJvYmFiaWxpdHkgb2YgdGhlIHJlYWwgZWZmZWN0IChlLmcuLCBwcmV2YWxlbmNlIG9mIGRpc2Vhc2UpIGNhbiBiZSBtb2RpZmllZCBhYm92ZS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIDxoMT57eyBtc2cgfX08L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICBGb3IgYSBndWlkZSBhbmQgcmVjaXBlcyBvbiBob3cgdG8gY29uZmlndXJlIC8gY3VzdG9taXplIHRoaXMgcHJvamVjdCw8YnI+XHJcbiAgICAgICAgY2hlY2sgb3V0IHRoZVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NsaS52dWVqcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPnZ1ZS1jbGkgZG9jdW1lbnRhdGlvbjwvYT4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgzPlBQViBDb21wb25lbnQ8L2gzPlxyXG4gICAgICA8cCBpZD1cImRlbW9cIiBAY2xpY2s9XCJteUZ1bmN0aW9uXCI+TE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gTE9SRU0gSVBTVU0gPC9wPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjEyMzwvbGk+XHJcbiAgICAgICAgPGxpPjQ1NjwvbGk+XHJcbiAgICAgICAgPGxpPnt7IHN0b3JlY291bnQgfX08L2xpPlxyXG4gICAgICAgIDxsaT57eyB0aGlzLnN0b3JlLnN0YXRlLmNvdW50IH19PC9saT5cclxuICAgICAgPC91bD4gLS0+XHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG4gIFxyXG4gIDxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRlc3QgZnJvbSAnQC9teWxpYic7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvc3RvcmUnIFxyXG5cclxuICBjb25zb2xlLmxvZyh0ZXN0LmZvbygpKTtcclxuLy8gICBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RvcmUsXHJcbiAgICBuYW1lOiAnUFBWQ29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1zZzogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdkZWNyZW1lbnQnKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZWNvdW50Kys7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcHJvYjNfdHA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDEtc3RvcmUuc3RhdGUuYmV0YVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gcHJvYjVfdG46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDEtc3RvcmUuc3RhdGUuYWxwaGFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNRVNTQUdFOlwiLCBzdG9yZS5zcGVjaWFsbXNnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLm1hdGgucm91bmQoOTk5LjExMTExMTExMSwgMikpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xyXG4gICAgICAgIC8vIGxldCBteUZ1bmN0aW9uID0gKCkgPT4geyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjsgfTtcclxuICAgIH1cclxuICB9XHJcbiAgPC9zY3JpcHQ+XHJcbiAgXHJcbiAgPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbiAgPHN0eWxlIHNjb3BlZD5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQyYjk4MztcclxuICB9XHJcbiAgPC9zdHlsZT5cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PPVComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "fb0b92150a933743"; }
/******/ }();
/******/ 
/******/ }
);
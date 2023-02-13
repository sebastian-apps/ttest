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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      chart1: chart1\n    };\n  },\n  mounted() {\n    const ctx = document.getElementById('roc-chart');\n    const chart1 = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, this.ROCChartData);\n  },\n  methods: {\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.chart1.update();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZT85MGUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm9jXCI+XG5cbiAgICA8Yj5SZWNlaXZlciBPcGVyYXRpbmcgQ2hhcmFjdGVyaXN0aWMgKFJPQyk8L2I+XG4gICAgPGJyPjxicj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPiAgXG4gICAgICA8Y2FudmFzIGlkPVwicm9jLWNoYXJ0XCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPjwvY2FudmFzPlxuICAgIDwvZGl2PlxuXG4gICAgPGJyPiBcbiAgICBBVUM6IDxiPjxzcGFuIGlkPVwiYXVjX3ZhbHVlXCI+PC9zcGFuPjwvYj5cblxuICAgIDxwIEBjbGljaz1cIm15RnVuY3Rpb25cIj48Yj5jaGFuZ2UgZGF0YTwvYj48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjRcbmltcG9ydCBST0NDaGFydERhdGEgZnJvbSAnLi4vcm9jLWRhdGEuanMnXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdST0NDaGFydCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFJPQ0NoYXJ0RGF0YTogUk9DQ2hhcnREYXRhLFxuICAgICAgY2hhcnQxOiBjaGFydDFcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvYy1jaGFydCcpO1xuICAgIGNvbnN0IGNoYXJ0MSA9IG5ldyBDaGFydChjdHgsIHRoaXMuUk9DQ2hhcnREYXRhKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibXlmdW5jdGlvbiBjYWxsZWQuXCIpO1xuICAgICAgUk9DQ2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMV0uZGF0YSA9IFt7eDowLjcsIHk6MC45fV07XG4gICAgICB0aGlzLmNoYXJ0MS51cGRhdGUoKTtcblxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "be891689b24534b0"; }
/******/ }();
/******/ 
/******/ }
);
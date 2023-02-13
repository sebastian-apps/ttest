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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    };\n  },\n  mounted() {\n    const ctx = document.getElementById('roc-chart');\n    const rocChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, this.ROCChartData);\n  },\n  methods: {\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.rocChart.update();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/OTBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvY1wiPlxuXG4gICAgPGI+UmVjZWl2ZXIgT3BlcmF0aW5nIENoYXJhY3RlcmlzdGljIChST0MpPC9iPlxuICAgIDxicj48YnI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVcIj4gIFxuICAgICAgPGNhbnZhcyBpZD1cInJvYy1jaGFydFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj48L2NhbnZhcz5cbiAgICA8L2Rpdj5cblxuICAgIDxicj4gXG4gICAgQVVDOiA8Yj48c3BhbiBpZD1cImF1Y192YWx1ZVwiPjwvc3Bhbj48L2I+XG5cbiAgICA8cCBAY2xpY2s9XCJteUZ1bmN0aW9uXCI+PGI+Y2hhbmdlIGRhdGE8L2I+PC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcycgIC8vIG5wbSBpbnN0YWxsIGNoYXJ0LmpzQDIuOS40XG5pbXBvcnQgUk9DQ2hhcnREYXRhIGZyb20gJy4uL3JvYy1kYXRhLmpzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUk9DQ2hhcnQnLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBST0NDaGFydERhdGE6IFJPQ0NoYXJ0RGF0YVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9jLWNoYXJ0Jyk7XG4gICAgY29uc3Qgcm9jQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB0aGlzLlJPQ0NoYXJ0RGF0YSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm15ZnVuY3Rpb24gY2FsbGVkLlwiKTtcbiAgICAgIFJPQ0NoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSBbe3g6MC43LCB5OjAuOX1dO1xuICAgICAgdGhpcy5yb2NDaGFydC51cGRhdGUoKTtcblxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c03a5b62b8f82e44"; }
/******/ }();
/******/ 
/******/ }
);
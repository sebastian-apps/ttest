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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      store,\n      alpha: this.store.state.alpha,\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      chart: null\n    };\n  },\n  mounted() {\n    const ctx = document.getElementById('roc-chart');\n    this.chart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, this.ROCChartData);\n  },\n  methods: {\n    // renderChart: \n\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      this.ROCChartData.data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.chart.update();\n    },\n    updateROCCurve: function () {\n      this.ROCChartData.data.datasets[1].data = [{\n        x: this.store.state.alpha,\n        y: 1 - this.store.state.beta\n      }];\n      this.chart.update();\n    }\n  },\n  watch: {\n    // Note: only simple paths. Expressions are not supported.\n    alpha() {\n      console.log(\"activity in ROC watch!\");\n      this.updateROCCurve();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlPzkwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb2NcIj5cblxuICAgIDxiPlJlY2VpdmVyIE9wZXJhdGluZyBDaGFyYWN0ZXJpc3RpYyAoUk9DKTwvYj5cbiAgICA8YnI+PGJyPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zaXZlXCI+ICBcbiAgICAgIDxjYW52YXMgaWQ9XCJyb2MtY2hhcnRcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+PC9jYW52YXM+XG4gICAgPC9kaXY+XG5cbiAgICA8YnI+IFxuICAgIEFVQzogPGI+PHNwYW4gaWQ9XCJhdWNfdmFsdWVcIj48L3NwYW4+PC9iPlxuXG4gICAgPHAgQGNsaWNrPVwibXlGdW5jdGlvblwiPjxiPmNoYW5nZSBkYXRhPC9iPjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNFxuaW1wb3J0IFJPQ0NoYXJ0RGF0YSBmcm9tICcuLi9yb2MtZGF0YS5qcydcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdST0NDaGFydCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgYWxwaGE6IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEsXG4gICAgICBST0NDaGFydERhdGE6IFJPQ0NoYXJ0RGF0YSxcbiAgICAgIGNoYXJ0OiBudWxsLFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9jLWNoYXJ0Jyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHRoaXMuUk9DQ2hhcnREYXRhKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIHJlbmRlckNoYXJ0OiBcblxuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibXlmdW5jdGlvbiBjYWxsZWQuXCIpO1xuICAgICAgdGhpcy5ST0NDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gW3t4OjAuNywgeTowLjl9XTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG5cbiAgICB9LFxuICAgIHVwZGF0ZVJPQ0N1cnZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLlJPQ0NoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSBbe3g6IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEsIHk6IDEtdGhpcy5zdG9yZS5zdGF0ZS5iZXRhfV07XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAvLyBOb3RlOiBvbmx5IHNpbXBsZSBwYXRocy4gRXhwcmVzc2lvbnMgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgYWxwaGEoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdGl2aXR5IGluIFJPQyB3YXRjaCFcIik7XG4gICAgICB0aGlzLnVwZGF0ZVJPQ0N1cnZlKCk7XG4gICAgfVxuICB9XG5cblxufVxuPC9zY3JpcHQ+XG5cblxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6f8d991faf380af9"; }
/******/ }();
/******/ 
/******/ }
);
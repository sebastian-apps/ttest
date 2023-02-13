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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      alpha: _store_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.alpha,\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      chart: null\n    };\n  },\n  mounted() {\n    const ctx = document.getElementById('roc-chart');\n    this.chart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx, this.ROCChartData);\n  },\n  methods: {\n    // renderChart: \n\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      this.ROCChartData.data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.chart.update();\n    },\n    updateROCCurve: function () {\n      this.ROCChartData.data.datasets[1].data = [{\n        x: this.store.state.alpha,\n        y: 1 - this.store.state.beta\n      }];\n      this.chart.update();\n    }\n  },\n  watch: {\n    // Note: only simple paths. Expressions are not supported.\n    'this.store.state.alpha'(newValue) {\n      console.log(\"activity in ROC watch!\", newValue);\n      this.updateROCCurve();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlPzkwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb2NcIj5cblxuICAgIDxiPlJlY2VpdmVyIE9wZXJhdGluZyBDaGFyYWN0ZXJpc3RpYyAoUk9DKTwvYj5cbiAgICA8YnI+PGJyPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zaXZlXCI+ICBcbiAgICAgIDxjYW52YXMgaWQ9XCJyb2MtY2hhcnRcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+PC9jYW52YXM+XG4gICAgPC9kaXY+XG5cbiAgICA8YnI+IFxuICAgIEFVQzogPGI+PHNwYW4gaWQ9XCJhdWNfdmFsdWVcIj48L3NwYW4+PC9iPlxuXG4gICAgPHAgQGNsaWNrPVwibXlGdW5jdGlvblwiPjxiPmNoYW5nZSBkYXRhPC9iPjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9zdG9yZSc7IFxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjRcbmltcG9ydCBST0NDaGFydERhdGEgZnJvbSAnLi4vcm9jLWRhdGEuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUk9DQ2hhcnQnLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIGFscGhhOiBzdG9yZS5zdGF0ZS5hbHBoYSxcbiAgICAgIFJPQ0NoYXJ0RGF0YTogUk9DQ2hhcnREYXRhLFxuICAgICAgY2hhcnQ6IG51bGwsXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2MtY2hhcnQnKTtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgdGhpcy5ST0NDaGFydERhdGEpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gcmVuZGVyQ2hhcnQ6IFxuXG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJteWZ1bmN0aW9uIGNhbGxlZC5cIik7XG4gICAgICB0aGlzLlJPQ0NoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSBbe3g6MC43LCB5OjAuOX1dO1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcblxuICAgIH0sXG4gICAgdXBkYXRlUk9DQ3VydmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuUk9DQ2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMV0uZGF0YSA9IFt7eDogdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSwgeTogMS10aGlzLnN0b3JlLnN0YXRlLmJldGF9XTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIC8vIE5vdGU6IG9ubHkgc2ltcGxlIHBhdGhzLiBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAndGhpcy5zdG9yZS5zdGF0ZS5hbHBoYScgKG5ld1ZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdGl2aXR5IGluIFJPQyB3YXRjaCFcIiwgbmV3VmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVST0NDdXJ2ZSgpO1xuICAgIH1cbiAgfVxuXG5cbn1cbjwvc2NyaXB0PlxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "19d81c3e78d9bfa5"; }
/******/ }();
/******/ 
/******/ }
);
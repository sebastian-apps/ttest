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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      chart: null\n    };\n  },\n  mounted() {\n    const ctx = document.getElementById('roc-chart');\n    this.chart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, this.ROCChartData);\n  },\n  methods: {\n    // renderChart: \n\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      this.ROCChartData.data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.chart.update();\n    },\n    updateROCCurve: function () {\n      this.ROCChartData.data.datasets[1].data = [{\n        x: this.store.state.alpha,\n        y: 1 - this.store.state.beta\n      }];\n      this.chart.update();\n    }\n  }\n  // computed: {\n  //     count () {\n  //       return this.store.state.crit_t_value\n  //       // Or return basket.getters.fruitsCount\n  //       // (depends on your design decisions).\n  //     }\n  //   },\n  //   watch: {\n  //     count (newCount) {\n  //       // Our fancy notification (2).\n  //       console.log(`We have ${newCount} fruits now, yay!`)\n  //       this.showRejectOrNotReject();\n  //     }\n  //   },\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZT85MGUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm9jXCI+XG5cbiAgICA8Yj5SZWNlaXZlciBPcGVyYXRpbmcgQ2hhcmFjdGVyaXN0aWMgKFJPQyk8L2I+XG4gICAgPGJyPjxicj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPiAgXG4gICAgICA8Y2FudmFzIGlkPVwicm9jLWNoYXJ0XCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPjwvY2FudmFzPlxuICAgIDwvZGl2PlxuXG4gICAgPGJyPiBcbiAgICBBVUM6IDxiPjxzcGFuIGlkPVwiYXVjX3ZhbHVlXCI+PC9zcGFuPjwvYj5cblxuICAgIDxwIEBjbGljaz1cIm15RnVuY3Rpb25cIj48Yj5jaGFuZ2UgZGF0YTwvYj48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjRcbmltcG9ydCBST0NDaGFydERhdGEgZnJvbSAnLi4vcm9jLWRhdGEuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUk9DQ2hhcnQnLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBST0NDaGFydERhdGE6IFJPQ0NoYXJ0RGF0YSxcbiAgICAgIGNoYXJ0OiBudWxsLFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9jLWNoYXJ0Jyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHRoaXMuUk9DQ2hhcnREYXRhKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIHJlbmRlckNoYXJ0OiBcblxuICAgIG15RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibXlmdW5jdGlvbiBjYWxsZWQuXCIpO1xuICAgICAgdGhpcy5ST0NDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gW3t4OjAuNywgeTowLjl9XTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG5cbiAgICB9LFxuICAgIHVwZGF0ZVJPQ0N1cnZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLlJPQ0NoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSBbe3g6IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEsIHk6IDEtdGhpcy5zdG9yZS5zdGF0ZS5iZXRhfV07XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfSxcbiAgLy8gY29tcHV0ZWQ6IHtcbiAgLy8gICAgIGNvdW50ICgpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlXG4gIC8vICAgICAgIC8vIE9yIHJldHVybiBiYXNrZXQuZ2V0dGVycy5mcnVpdHNDb3VudFxuICAvLyAgICAgICAvLyAoZGVwZW5kcyBvbiB5b3VyIGRlc2lnbiBkZWNpc2lvbnMpLlxuICAvLyAgICAgfVxuICAvLyAgIH0sXG4gIC8vICAgd2F0Y2g6IHtcbiAgLy8gICAgIGNvdW50IChuZXdDb3VudCkge1xuICAvLyAgICAgICAvLyBPdXIgZmFuY3kgbm90aWZpY2F0aW9uICgyKS5cbiAgLy8gICAgICAgY29uc29sZS5sb2coYFdlIGhhdmUgJHtuZXdDb3VudH0gZnJ1aXRzIG5vdywgeWF5IWApXG4gIC8vICAgICAgIHRoaXMuc2hvd1JlamVjdE9yTm90UmVqZWN0KCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "eb55a77313ad152e"; }
/******/ }();
/******/ 
/******/ }
);
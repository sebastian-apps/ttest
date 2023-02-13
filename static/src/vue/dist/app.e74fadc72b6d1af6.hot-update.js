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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roc_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roc-data.js */ \"./src/roc-data.js\");\n // npm install chart.js@2.9.4\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ROCChart',\n  data() {\n    return {\n      ROCChartData: _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      chart1: new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('roc-chart'), this.ROCChartData)\n    };\n  },\n  mounted() {\n    // const ctx = document.getElementById('roc-chart');\n    // const chart1 = new Chart(ctx, this.ROCChartData);\n  },\n  methods: {\n    myFunction: function () {\n      console.log(\"myfunction called.\");\n      _roc_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].data.datasets[1].data = [{\n        x: 0.7,\n        y: 0.9\n      }];\n      this.chart1.update();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZT85MGUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm9jXCI+XG5cbiAgICA8Yj5SZWNlaXZlciBPcGVyYXRpbmcgQ2hhcmFjdGVyaXN0aWMgKFJPQyk8L2I+XG4gICAgPGJyPjxicj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZVwiPiAgXG4gICAgICA8Y2FudmFzIGlkPVwicm9jLWNoYXJ0XCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPjwvY2FudmFzPlxuICAgIDwvZGl2PlxuXG4gICAgPGJyPiBcbiAgICBBVUM6IDxiPjxzcGFuIGlkPVwiYXVjX3ZhbHVlXCI+PC9zcGFuPjwvYj5cblxuICAgIDxwIEBjbGljaz1cIm15RnVuY3Rpb25cIj48Yj5jaGFuZ2UgZGF0YTwvYj48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjRcbmltcG9ydCBST0NDaGFydERhdGEgZnJvbSAnLi4vcm9jLWRhdGEuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUk9DQ2hhcnQnLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBST0NDaGFydERhdGE6IFJPQ0NoYXJ0RGF0YSxcbiAgICAgIGNoYXJ0MTogbmV3IENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2MtY2hhcnQnKSwgdGhpcy5ST0NDaGFydERhdGEpLFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvLyBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9jLWNoYXJ0Jyk7XG4gICAgLy8gY29uc3QgY2hhcnQxID0gbmV3IENoYXJ0KGN0eCwgdGhpcy5ST0NDaGFydERhdGEpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJteWZ1bmN0aW9uIGNhbGxlZC5cIik7XG4gICAgICBST0NDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gW3t4OjAuNywgeTowLjl9XTtcbiAgICAgIHRoaXMuY2hhcnQxLnVwZGF0ZSgpO1xuXG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ROCComponent.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./src/roc-data.js":
/*!*************************!*\
  !*** ./src/roc-data.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROCChartData\": function() { return /* binding */ ROCChartData; }\n/* harmony export */ });\n// import Chart from \"chart.js\";\n\n// export const ROCChartData = {\n//   type: \"line\",\n//   data: {\n//     labels: [\"Mercury\", \"Venus\", \"Earth\", \"Mars\", \"Jupiter\", \"Saturn\", \"Uranus\", \"Neptune\"],\n//     datasets: [\n//       {\n//         label: \"Number of Moons\",\n//         data: [0, 0, 1, 2, 79, 82, 27, 14],\n//         backgroundColor: \"rgba(54,73,93,.5)\",\n//         borderColor: \"#36495d\",\n//         borderWidth: 3\n//       },\n//       {\n//         label: \"Planetary Mass (relative to the Sun x 10^-6)\",\n//         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],\n//         backgroundColor: \"rgba(71, 183,132,.5)\",\n//         borderColor: \"#47b784\",\n//         borderWidth: 3\n//       }\n//     ]\n//   },\n//   options: {\n//     responsive: true,\n//     lineTension: 1,\n//     scales: {\n//       yAxes: [\n//         {\n//           ticks: {\n//             beginAtZero: true,\n//             padding: 25\n//           }\n//         }\n//       ]\n//     }\n//   }\n// };\n\nconst ROCChartData = {\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [{\n        x: 0.05,\n        y: 0.75\n      }],\n      //[], \n      label: \"TPR\",\n      borderColor: \"#000000\",\n      backgroundColor: \"#000000\",\n      fill: true,\n      pointRadius: 4\n    }, {\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      // random curve for reference\n      label: \"Random\",\n      borderColor: \"#dedede\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [{\n        x: 0.9995,\n        y: 1\n      }, {\n        x: 0.999,\n        y: 1\n      }, {\n        x: 0.9979,\n        y: 0.9999\n      }, {\n        x: 0.9955,\n        y: 0.9999\n      }, {\n        x: 0.9902,\n        y: 0.9998\n      }, {\n        x: 0.9786,\n        y: 0.9995\n      }, {\n        x: 0.9534,\n        y: 0.9991\n      }, {\n        x: 0.9021,\n        y: 0.9981\n      }, {\n        x: 0.8087,\n        y: 0.996\n      }, {\n        x: 0.6644,\n        y: 0.9914\n      }, {\n        x: 0.48419999999999996,\n        y: 0.9813\n      }, {\n        x: 0.3077,\n        y: 0.9591\n      }, {\n        x: 0.17179999999999995,\n        y: 0.9134\n      }, {\n        x: 0.08660000000000001,\n        y: 0.8282\n      }, {\n        x: 0.04090000000000005,\n        y: 0.6923\n      }, {\n        x: 0.01870000000000005,\n        y: 0.5158\n      }, {\n        x: 0.008600000000000052,\n        y: 0.3356\n      }, {\n        x: 0.0040000000000000036,\n        y: 0.19130000000000003\n      }, {\n        x: 0.0019000000000000128,\n        y: 0.09789999999999999\n      }, {\n        x: 0.0009000000000000119,\n        y: 0.046599999999999975\n      }, {\n        x: 0.0004999999999999449,\n        y: 0.021399999999999975\n      }, {\n        x: 0.00019999999999997797,\n        y: 0.009800000000000031\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0044999999999999485\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0020999999999999908\n      }, {\n        x: 0,\n        y: 0.0010000000000000009\n      }, {\n        x: 0,\n        y: 0.0004999999999999449\n      }],\n      label: \"ROC curve\",\n      borderColor: \"#7600bc\",\n      backgroundColor: \"#ca5cdd\",\n      fill: true,\n      showLine: true\n      // ,pointRadius: 4\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item) {\n          // filter: function(item, chart)\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          // stepValue: 0.2,\n          steps: 10,\n          max: 1\n        },\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 'False positive rate (\\u03B1)'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          max: 1\n        },\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'True positive rate (1 - \\u03B2)'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ',\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 0.0255,\n        // p_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROCChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9jLWRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3JvYy1kYXRhLmpzP2JiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBST0NDaGFydERhdGEgPSB7XHJcbi8vICAgdHlwZTogXCJsaW5lXCIsXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgbGFiZWxzOiBbXCJNZXJjdXJ5XCIsIFwiVmVudXNcIiwgXCJFYXJ0aFwiLCBcIk1hcnNcIiwgXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiVXJhbnVzXCIsIFwiTmVwdHVuZVwiXSxcclxuLy8gICAgIGRhdGFzZXRzOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsYWJlbDogXCJOdW1iZXIgb2YgTW9vbnNcIixcclxuLy8gICAgICAgICBkYXRhOiBbMCwgMCwgMSwgMiwgNzksIDgyLCAyNywgMTRdLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDU0LDczLDkzLC41KVwiLFxyXG4vLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMzNjQ5NWRcIixcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgbGFiZWw6IFwiUGxhbmV0YXJ5IE1hc3MgKHJlbGF0aXZlIHRvIHRoZSBTdW4geCAxMF4tNilcIixcclxuLy8gICAgICAgICBkYXRhOiBbMC4xNjYsIDIuMDgxLCAzLjAwMywgMC4zMjMsIDk1NC43OTIsIDI4NS44ODYsIDQzLjY2MiwgNTEuNTE0XSxcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3MSwgMTgzLDEzMiwuNSlcIixcclxuLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjNDdiNzg0XCIsXHJcbi8vICAgICAgICAgYm9yZGVyV2lkdGg6IDNcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXVxyXG4vLyAgIH0sXHJcbi8vICAgb3B0aW9uczoge1xyXG4vLyAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuLy8gICAgIGxpbmVUZW5zaW9uOiAxLFxyXG4vLyAgICAgc2NhbGVzOiB7XHJcbi8vICAgICAgIHlBeGVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgdGlja3M6IHtcclxuLy8gICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDI1XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBdXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJPQ0NoYXJ0RGF0YSA9IHtcclxuXHJcbiAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAge3g6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgIHt4OiAxLCB5OiAxfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGFiZWw6IFwicmVmc1wiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLHtcclxuICAgICAgICAgICAgZGF0YTogIFt7eDogMC4wNSwgeTogMC43NX1dLCAgICAgLy9bXSwgXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlRQUlwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA0XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IFt7eDowLHk6MH0sIHt4OjEseToxfV0sIC8vIHJhbmRvbSBjdXJ2ZSBmb3IgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlJhbmRvbVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZGVkZWRlXCIsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLHtcclxuICAgICAgICAgICAgZGF0YTogW3t4OjAuOTk5NSwgeToxfSwge3g6MC45OTksIHk6MX0sIHt4OjAuOTk3OSwgeTowLjk5OTl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45OTU1LCB5OiAwLjk5OTl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45OTAyLCB5OiAwLjk5OTh9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45Nzg2LCB5OiAwLjk5OTV9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45NTM0LCB5OiAwLjk5OTF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45MDIxLCB5OiAwLjk5ODF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC44MDg3LCB5OiAwLjk5Nn0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjY2NDQsIHk6IDAuOTkxNH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjQ4NDE5OTk5OTk5OTk5OTk2LCB5OiAwLjk4MTN9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4zMDc3LCB5OiAwLjk1OTF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4xNzE3OTk5OTk5OTk5OTk5NSwgeTogMC45MTM0fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDg2NjAwMDAwMDAwMDAwMDEsIHk6IDAuODI4Mn0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjA0MDkwMDAwMDAwMDAwMDA1LCB5OiAwLjY5MjN9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMTg3MDAwMDAwMDAwMDAwNSwgeTogMC41MTU4fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDA4NjAwMDAwMDAwMDAwMDUyLCB5OiAwLjMzNTZ9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDQwMDAwMDAwMDAwMDAwMDM2LCB5OiAwLjE5MTMwMDAwMDAwMDAwMDAzfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAxOTAwMDAwMDAwMDAwMDEyOCwgeTogMC4wOTc4OTk5OTk5OTk5OTk5OX0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwMDkwMDAwMDAwMDAwMDAxMTksIHk6IDAuMDQ2NTk5OTk5OTk5OTk5OTc1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwNDk5OTk5OTk5OTk5OTQ0OSwgeTogMC4wMjEzOTk5OTk5OTk5OTk5NzV9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDAxOTk5OTk5OTk5OTk5Nzc5NywgeTogMC4wMDk4MDAwMDAwMDAwMDAwMzF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDAwOTk5OTk5OTk5OTk5ODg5OSwgeTogMC4wMDQ0OTk5OTk5OTk5OTk5NDg1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwMDk5OTk5OTk5OTk5OTg4OTksIHk6IDAuMDAyMDk5OTk5OTk5OTk5OTkwOH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLCB5OiAwLjAwMTAwMDAwMDAwMDAwMDAwMDl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MCwgeTowLjAwMDQ5OTk5OTk5OTk5OTk0NDl9XSxcclxuXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlJPQyBjdXJ2ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNzYwMGJjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2E1Y2RkXCIsXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlXHJcbiAgICAgICAgICAgIC8vICxwb2ludFJhZGl1czogNFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgdGV4dDogJ3QtdGVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDp7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbihpdGVtLCApIHsgIC8vIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgY2hhcnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0udGV4dC5pbmNsdWRlcygncmVmcycpOyAvLyBSZW1vdmUgdGhlIHJlZnMgbGVnZW5kIGl0ZW1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgcG9pbnQ6e1xyXG4gICAgICAgICAgICAgIHJhZGl1czogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjIsXHJcbiAgICAgICAgICAgICAgICAvLyBzdGVwVmFsdWU6IDAuMixcclxuICAgICAgICAgICAgICAgIHN0ZXBzOiAxMCxcclxuICAgICAgICAgICAgICAgIG1heDogMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0ZhbHNlIHBvc2l0aXZlIHJhdGUgKFxcdTAzQjEpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgICAgICAgICAgICBtYXg6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVHJ1ZSBwb3NpdGl2ZSByYXRlICgxIC0gXFx1MDNCMiknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgICAgICAgICAgdmFsdWU6IC0yLjI1MDIsIC8vIHRfdmFsdWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbMTAsNV0sXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb250ZW50OiAncCA9ICcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogMC4wMjU1LCAvLyBwX3ZhbHVlLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZjcwMzQnLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuICAgICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBST0NDaGFydERhdGE7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/roc-data.js\n");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d9b60d40aae4aaeb"; }
/******/ }();
/******/ 
/******/ }
);
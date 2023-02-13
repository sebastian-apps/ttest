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

/***/ "./src/roc-data.js":
/*!*************************!*\
  !*** ./src/roc-data.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROCChartData\": function() { return /* binding */ ROCChartData; }\n/* harmony export */ });\n// import Chart from \"chart.js\";\n\n// export const ROCChartData = {\n//   type: \"line\",\n//   data: {\n//     labels: [\"Mercury\", \"Venus\", \"Earth\", \"Mars\", \"Jupiter\", \"Saturn\", \"Uranus\", \"Neptune\"],\n//     datasets: [\n//       {\n//         label: \"Number of Moons\",\n//         data: [0, 0, 1, 2, 79, 82, 27, 14],\n//         backgroundColor: \"rgba(54,73,93,.5)\",\n//         borderColor: \"#36495d\",\n//         borderWidth: 3\n//       },\n//       {\n//         label: \"Planetary Mass (relative to the Sun x 10^-6)\",\n//         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],\n//         backgroundColor: \"rgba(71, 183,132,.5)\",\n//         borderColor: \"#47b784\",\n//         borderWidth: 3\n//       }\n//     ]\n//   },\n//   options: {\n//     responsive: true,\n//     lineTension: 1,\n//     scales: {\n//       yAxes: [\n//         {\n//           ticks: {\n//             beginAtZero: true,\n//             padding: 25\n//           }\n//         }\n//       ]\n//     }\n//   }\n// };\n\nconst ROCChartData = {\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      label: \"TPR\",\n      borderColor: \"#000000\",\n      backgroundColor: \"#000000\",\n      fill: true,\n      pointRadius: 4\n    }, {\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      // random curve for reference\n      label: \"Random\",\n      borderColor: \"#dedede\",\n      fill: false\n    }, {\n      data: [{\n        x: 0.9995,\n        y: 1\n      }, {\n        x: 0.999,\n        y: 1\n      }, {\n        x: 0.9979,\n        y: 0.9999\n      }, {\n        x: 0.9955,\n        y: 0.9999\n      }, {\n        x: 0.9902,\n        y: 0.9998\n      }, {\n        x: 0.9786,\n        y: 0.9995\n      }, {\n        x: 0.9534,\n        y: 0.9991\n      }, {\n        x: 0.9021,\n        y: 0.9981\n      }, {\n        x: 0.8087,\n        y: 0.996\n      }, {\n        x: 0.6644,\n        y: 0.9914\n      }, {\n        x: 0.48419999999999996,\n        y: 0.9813\n      }, {\n        x: 0.3077,\n        y: 0.9591\n      }, {\n        x: 0.17179999999999995,\n        y: 0.9134\n      }, {\n        x: 0.08660000000000001,\n        y: 0.8282\n      }, {\n        x: 0.04090000000000005,\n        y: 0.6923\n      }, {\n        x: 0.01870000000000005,\n        y: 0.5158\n      }, {\n        x: 0.008600000000000052,\n        y: 0.3356\n      }, {\n        x: 0.0040000000000000036,\n        y: 0.19130000000000003\n      }, {\n        x: 0.0019000000000000128,\n        y: 0.09789999999999999\n      }, {\n        x: 0.0009000000000000119,\n        y: 0.046599999999999975\n      }, {\n        x: 0.0004999999999999449,\n        y: 0.021399999999999975\n      }, {\n        x: 0.00019999999999997797,\n        y: 0.009800000000000031\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0044999999999999485\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0020999999999999908\n      }, {\n        x: 0,\n        y: 0.0010000000000000009\n      }, {\n        x: 0,\n        y: 0.0004999999999999449\n      }],\n      label: \"ROC curve\",\n      borderColor: \"#7600bc\",\n      backgroundColor: \"#ca5cdd\",\n      fill: true\n      // ,pointRadius: 4\n    }]\n  },\n\n  options: {\n    animation: false,\n    // title: {\n    //   display: false,\n    //   text: 't-test'\n    // },\n    // legend:{\n    //   position: 'bottom',\n    //   labels: {\n    //     filter: function(item, ) {  // filter: function(item, chart)\n    //         return !item.text.includes('refs'); // Remove the refs legend item\n    //       },\n    //       usePointStyle: true,\n    //     },\n    // },\n    // elements: {\n    //   point:{\n    //       radius: 0\n    //   }\n    // },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          // stepValue: 0.2,\n          steps: 10,\n          max: 1\n        },\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 'False positive rate (\\u03B1)'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          max: 1\n        },\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'True positive rate (1 - \\u03B2)'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ',\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 0.0255,\n        // p_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROCChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9jLWRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3JvYy1kYXRhLmpzP2JiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBST0NDaGFydERhdGEgPSB7XHJcbi8vICAgdHlwZTogXCJsaW5lXCIsXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgbGFiZWxzOiBbXCJNZXJjdXJ5XCIsIFwiVmVudXNcIiwgXCJFYXJ0aFwiLCBcIk1hcnNcIiwgXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiVXJhbnVzXCIsIFwiTmVwdHVuZVwiXSxcclxuLy8gICAgIGRhdGFzZXRzOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsYWJlbDogXCJOdW1iZXIgb2YgTW9vbnNcIixcclxuLy8gICAgICAgICBkYXRhOiBbMCwgMCwgMSwgMiwgNzksIDgyLCAyNywgMTRdLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDU0LDczLDkzLC41KVwiLFxyXG4vLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMzNjQ5NWRcIixcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgbGFiZWw6IFwiUGxhbmV0YXJ5IE1hc3MgKHJlbGF0aXZlIHRvIHRoZSBTdW4geCAxMF4tNilcIixcclxuLy8gICAgICAgICBkYXRhOiBbMC4xNjYsIDIuMDgxLCAzLjAwMywgMC4zMjMsIDk1NC43OTIsIDI4NS44ODYsIDQzLjY2MiwgNTEuNTE0XSxcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3MSwgMTgzLDEzMiwuNSlcIixcclxuLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjNDdiNzg0XCIsXHJcbi8vICAgICAgICAgYm9yZGVyV2lkdGg6IDNcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXVxyXG4vLyAgIH0sXHJcbi8vICAgb3B0aW9uczoge1xyXG4vLyAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuLy8gICAgIGxpbmVUZW5zaW9uOiAxLFxyXG4vLyAgICAgc2NhbGVzOiB7XHJcbi8vICAgICAgIHlBeGVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgdGlja3M6IHtcclxuLy8gICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDI1XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBdXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJPQ0NoYXJ0RGF0YSA9IHtcclxuXHJcbiAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAge3g6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgIHt4OiAxLCB5OiAxfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGFiZWw6IFwicmVmc1wiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLHtcclxuICAgICAgICAgICAgZGF0YTogW10sIFxyXG4gICAgICAgICAgICBsYWJlbDogXCJUUFJcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogNFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkYXRhOiBbe3g6MCx5OjB9LCB7eDoxLHk6MX1dLCAvLyByYW5kb20gY3VydmUgZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICBsYWJlbDogXCJSYW5kb21cIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2RlZGVkZVwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLHtcclxuICAgICAgICAgICAgZGF0YTogW3t4OjAuOTk5NSwgeToxfSwge3g6MC45OTksIHk6MX0sIHt4OjAuOTk3OSwgeTowLjk5OTl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45OTU1LCB5OiAwLjk5OTl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45OTAyLCB5OiAwLjk5OTh9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45Nzg2LCB5OiAwLjk5OTV9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45NTM0LCB5OiAwLjk5OTF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC45MDIxLCB5OiAwLjk5ODF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC44MDg3LCB5OiAwLjk5Nn0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjY2NDQsIHk6IDAuOTkxNH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjQ4NDE5OTk5OTk5OTk5OTk2LCB5OiAwLjk4MTN9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4zMDc3LCB5OiAwLjk1OTF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4xNzE3OTk5OTk5OTk5OTk5NSwgeTogMC45MTM0fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDg2NjAwMDAwMDAwMDAwMDEsIHk6IDAuODI4Mn0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjA0MDkwMDAwMDAwMDAwMDA1LCB5OiAwLjY5MjN9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMTg3MDAwMDAwMDAwMDAwNSwgeTogMC41MTU4fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDA4NjAwMDAwMDAwMDAwMDUyLCB5OiAwLjMzNTZ9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDQwMDAwMDAwMDAwMDAwMDM2LCB5OiAwLjE5MTMwMDAwMDAwMDAwMDAzfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAxOTAwMDAwMDAwMDAwMDEyOCwgeTogMC4wOTc4OTk5OTk5OTk5OTk5OX0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwMDkwMDAwMDAwMDAwMDAxMTksIHk6IDAuMDQ2NTk5OTk5OTk5OTk5OTc1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwNDk5OTk5OTk5OTk5OTQ0OSwgeTogMC4wMjEzOTk5OTk5OTk5OTk5NzV9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDAxOTk5OTk5OTk5OTk5Nzc5NywgeTogMC4wMDk4MDAwMDAwMDAwMDAwMzF9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDAwOTk5OTk5OTk5OTk5ODg5OSwgeTogMC4wMDQ0OTk5OTk5OTk5OTk5NDg1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwMDk5OTk5OTk5OTk5OTg4OTksIHk6IDAuMDAyMDk5OTk5OTk5OTk5OTkwOH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLCB5OiAwLjAwMTAwMDAwMDAwMDAwMDAwMDl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MCwgeTowLjAwMDQ5OTk5OTk5OTk5OTk0NDl9XSxcclxuXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlJPQyBjdXJ2ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNzYwMGJjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2E1Y2RkXCIsXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWVcclxuICAgICAgICAgICAgLy8gLHBvaW50UmFkaXVzOiA0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICAvLyB0aXRsZToge1xyXG4gICAgICAgIC8vICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgLy8gICB0ZXh0OiAndC10ZXN0J1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gbGVnZW5kOntcclxuICAgICAgICAvLyAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAvLyAgIGxhYmVsczoge1xyXG4gICAgICAgIC8vICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW0sICkgeyAgLy8gZmlsdGVyOiBmdW5jdGlvbihpdGVtLCBjaGFydClcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAhaXRlbS50ZXh0LmluY2x1ZGVzKCdyZWZzJyk7IC8vIFJlbW92ZSB0aGUgcmVmcyBsZWdlbmQgaXRlbVxyXG4gICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgLy8gICBwb2ludDp7XHJcbiAgICAgICAgLy8gICAgICAgcmFkaXVzOiAwXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgICAgICAgICAgICAgIC8vIHN0ZXBWYWx1ZTogMC4yLFxyXG4gICAgICAgICAgICAgICAgc3RlcHM6IDEwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRmFsc2UgcG9zaXRpdmUgcmF0ZSAoXFx1MDNCMSknXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4yLFxyXG4gICAgICAgICAgICAgIG1heDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdUcnVlIHBvc2l0aXZlIHJhdGUgKDEgLSBcXHUwM0IyKSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICAgICAgICBhbm5vdGF0aW9uczogW3tcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogLTIuMjUwMiwgLy8gdF92YWx1ZSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzhjOGM4JyxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFsxMCw1XSxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdwID0gJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLjAyNTUsIC8vIHBfdmFsdWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmNzAzNCcsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogJyM0ZDRlNGYnLFxyXG4gICAgICAgICAgICAgIHlBZGp1c3Q6IDIwLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJPQ0NoYXJ0RGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/roc-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bc91ec175b27c7b7"; }
/******/ }();
/******/ 
/******/ }
);
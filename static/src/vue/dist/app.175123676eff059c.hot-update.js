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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROCChartData\": function() { return /* binding */ ROCChartData; }\n/* harmony export */ });\n// import Chart from \"chart.js\";\n\nconst ROCChartData = {\n  //   type: \"line\",\n  //   data: {\n  //     labels: [\"Mercury\", \"Venus\", \"Earth\", \"Mars\", \"Jupiter\", \"Saturn\", \"Uranus\", \"Neptune\"],\n  //     datasets: [\n  //       {\n  //         label: \"Number of Moons\",\n  //         data: [0, 0, 1, 2, 79, 82, 27, 14],\n  //         backgroundColor: \"rgba(54,73,93,.5)\",\n  //         borderColor: \"#36495d\",\n  //         borderWidth: 3\n  //       },\n  //       {\n  //         label: \"Planetary Mass (relative to the Sun x 10^-6)\",\n  //         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],\n  //         backgroundColor: \"rgba(71, 183,132,.5)\",\n  //         borderColor: \"#47b784\",\n  //         borderWidth: 3\n  //       }\n  //     ]\n  //   },\n  //   options: {\n  //     responsive: true,\n  //     lineTension: 1,\n  //     scales: {\n  //       yAxes: [\n  //         {\n  //           ticks: {\n  //             beginAtZero: true,\n  //             padding: 25\n  //           }\n  //         }\n  //       ]\n  //     }\n  //   }\n  // };\n\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      label: \"TPR\",\n      borderColor: \"#000000\",\n      backgroundColor: \"#000000\",\n      fill: true,\n      pointRadius: 4\n    }, {\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      // random curve for reference\n      label: \"Random\",\n      borderColor: \"#dedede\",\n      fill: false\n    }, {\n      data: [{\n        x: 0.9995,\n        y: 1\n      }, {\n        x: 0.999,\n        y: 1\n      }, {\n        x: 0.9979,\n        y: 0.9999\n      }, {\n        x: 0.9955,\n        y: 0.9999\n      }, {\n        x: 0.9902,\n        y: 0.9998\n      }, {\n        x: 0.9786,\n        y: 0.9995\n      }, {\n        x: 0.9534,\n        y: 0.9991\n      }, {\n        x: 0.9021,\n        y: 0.9981\n      }, {\n        x: 0.8087,\n        y: 0.996\n      }, {\n        x: 0.6644,\n        y: 0.9914\n      }, {\n        x: 0.48419999999999996,\n        y: 0.9813\n      }, {\n        x: 0.3077,\n        y: 0.9591\n      }, {\n        x: 0.17179999999999995,\n        y: 0.9134\n      }, {\n        x: 0.08660000000000001,\n        y: 0.8282\n      }, {\n        x: 0.04090000000000005,\n        y: 0.6923\n      }, {\n        x: 0.01870000000000005,\n        y: 0.5158\n      }, {\n        x: 0.008600000000000052,\n        y: 0.3356\n      }, {\n        x: 0.0040000000000000036,\n        y: 0.19130000000000003\n      }, {\n        x: 0.0019000000000000128,\n        y: 0.09789999999999999\n      }, {\n        x: 0.0009000000000000119,\n        y: 0.046599999999999975\n      }, {\n        x: 0.0004999999999999449,\n        y: 0.021399999999999975\n      }, {\n        x: 0.00019999999999997797,\n        y: 0.009800000000000031\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0044999999999999485\n      }, {\n        x: 0.00009999999999998899,\n        y: 0.0020999999999999908\n      }, {\n        x: 0,\n        y: 0.0010000000000000009\n      }, {\n        x: 0,\n        y: 0.0004999999999999449\n      }],\n      label: \"ROC curve\",\n      borderColor: \"#7600bc\",\n      backgroundColor: \"#ca5cdd\",\n      fill: true\n      // ,pointRadius: 4\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item) {\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          // stepValue: 0.2,\n          steps: 10,\n          max: 1\n        },\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 'False positive rate (\\u03B1)'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          max: 1\n        },\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'True positive rate (1 - \\u03B2)'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ',\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 0.0255,\n        // p_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROCChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9jLWRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvcm9jLWRhdGEuanM/YmJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJPQ0NoYXJ0RGF0YSA9IHtcclxuLy8gICB0eXBlOiBcImxpbmVcIixcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBsYWJlbHM6IFtcIk1lcmN1cnlcIiwgXCJWZW51c1wiLCBcIkVhcnRoXCIsIFwiTWFyc1wiLCBcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJVcmFudXNcIiwgXCJOZXB0dW5lXCJdLFxyXG4vLyAgICAgZGF0YXNldHM6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGxhYmVsOiBcIk51bWJlciBvZiBNb29uc1wiLFxyXG4vLyAgICAgICAgIGRhdGE6IFswLCAwLCAxLCAyLCA3OSwgODIsIDI3LCAxNF0sXHJcbi8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTQsNzMsOTMsLjUpXCIsXHJcbi8vICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzM2NDk1ZFwiLFxyXG4vLyAgICAgICAgIGJvcmRlcldpZHRoOiAzXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsYWJlbDogXCJQbGFuZXRhcnkgTWFzcyAocmVsYXRpdmUgdG8gdGhlIFN1biB4IDEwXi02KVwiLFxyXG4vLyAgICAgICAgIGRhdGE6IFswLjE2NiwgMi4wODEsIDMuMDAzLCAwLjMyMywgOTU0Ljc5MiwgMjg1Ljg4NiwgNDMuNjYyLCA1MS41MTRdLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDcxLCAxODMsMTMyLC41KVwiLFxyXG4vLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM0N2I3ODRcIixcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBdXHJcbi8vICAgfSxcclxuLy8gICBvcHRpb25zOiB7XHJcbi8vICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4vLyAgICAgbGluZVRlbnNpb246IDEsXHJcbi8vICAgICBzY2FsZXM6IHtcclxuLy8gICAgICAgeUF4ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICB0aWNrczoge1xyXG4vLyAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMjVcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIF1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuICAgICAgdHlwZTogJ3NjYXR0ZXInLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgICAge3g6IDEsIHk6IDF9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJyZWZzXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgZGF0YTogW10sIFxyXG4gICAgICAgICAgICBsYWJlbDogXCJUUFJcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogNFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkYXRhOiBbe3g6MCx5OjB9LCB7eDoxLHk6MX1dLCAvLyByYW5kb20gY3VydmUgZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICBsYWJlbDogXCJSYW5kb21cIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2RlZGVkZVwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGRhdGE6IFxyXG4gICAgICAgICAgICAgICAgICBbe3g6MC45OTk1LCB5OiAxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTk5LCB5OiAxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTk3OSwgeTogMC45OTk5fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTk1NSwgeTogMC45OTk5fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTkwMiwgeTogMC45OTk4fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTc4NiwgeTogMC45OTk1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTUzNCwgeTogMC45OTkxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuOTAyMSwgeTogMC45OTgxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuODA4NywgeTogMC45OTZ9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC42NjQ0LCB5OiAwLjk5MTR9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC40ODQxOTk5OTk5OTk5OTk5NiwgeTogMC45ODEzfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMzA3NywgeTogMC45NTkxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMTcxNzk5OTk5OTk5OTk5OTUsIHk6IDAuOTEzNH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjA4NjYwMDAwMDAwMDAwMDAxLCB5OiAwLjgyODJ9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wNDA5MDAwMDAwMDAwMDAwNSwgeTogMC42OTIzfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDE4NzAwMDAwMDAwMDAwMDUsIHk6IDAuNTE1OH0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwODYwMDAwMDAwMDAwMDA1MiwgeTogMC4zMzU2fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDA0MDAwMDAwMDAwMDAwMDAzNiwgeTogMC4xOTEzMDAwMDAwMDAwMDAwM30sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwMTkwMDAwMDAwMDAwMDAxMjgsIHk6IDAuMDk3ODk5OTk5OTk5OTk5OTl9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MC4wMDA5MDAwMDAwMDAwMDAwMTE5LCB5OiAwLjA0NjU5OTk5OTk5OTk5OTk3NX0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwMDQ5OTk5OTk5OTk5OTk0NDksIHk6IDAuMDIxMzk5OTk5OTk5OTk5OTc1fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwMTk5OTk5OTk5OTk5OTc3OTcsIHk6IDAuMDA5ODAwMDAwMDAwMDAwMDMxfSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAuMDAwMDk5OTk5OTk5OTk5OTg4OTksIHk6IDAuMDA0NDk5OTk5OTk5OTk5OTQ4NX0sIFxyXG4gICAgICAgICAgICAgICAgICB7eDowLjAwMDA5OTk5OTk5OTk5OTk4ODk5LCB5OiAwLjAwMjA5OTk5OTk5OTk5OTk5MDh9LCBcclxuICAgICAgICAgICAgICAgICAge3g6MCwgeTogMC4wMDEwMDAwMDAwMDAwMDAwMDA5fSwgXHJcbiAgICAgICAgICAgICAgICAgIHt4OjAsIHk6IDAuMDAwNDk5OTk5OTk5OTk5OTQ0OX1dLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw6IFwiUk9DIGN1cnZlXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM3NjAwYmNcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjYTVjZGRcIixcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZVxyXG4gICAgICAgICAgICAvLyAscG9pbnRSYWRpdXM6IDRcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRleHQ6ICd0LXRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0udGV4dC5pbmNsdWRlcygncmVmcycpOyAvLyBSZW1vdmUgdGhlIHJlZnMgbGVnZW5kIGl0ZW1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgcG9pbnQ6e1xyXG4gICAgICAgICAgICAgIHJhZGl1czogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjIsXHJcbiAgICAgICAgICAgICAgICAvLyBzdGVwVmFsdWU6IDAuMixcclxuICAgICAgICAgICAgICAgIHN0ZXBzOiAxMCxcclxuICAgICAgICAgICAgICAgIG1heDogMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0ZhbHNlIHBvc2l0aXZlIHJhdGUgKFxcdTAzQjEpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgICAgICAgICAgICBtYXg6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVHJ1ZSBwb3NpdGl2ZSByYXRlICgxIC0gXFx1MDNCMiknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgICAgICAgICAgdmFsdWU6IC0yLjI1MDIsIC8vIHRfdmFsdWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbMTAsNV0sXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb250ZW50OiAncCA9ICcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogMC4wMjU1LCAvLyBwX3ZhbHVlLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZjcwMzQnLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuICAgICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJPQ0NoYXJ0RGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/roc-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5ae5d3bbc56978bf"; }
/******/ }();
/******/ 
/******/ }
);
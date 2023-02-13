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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROCChartData\": function() { return /* binding */ ROCChartData; }\n/* harmony export */ });\nconst ROCChartData = {\n  //   type: \"line\",\n  //   data: {\n  //     labels: [\"Mercury\", \"Venus\", \"Earth\", \"Mars\", \"Jupiter\", \"Saturn\", \"Uranus\", \"Neptune\"],\n  //     datasets: [\n  //       {\n  //         label: \"Number of Moons\",\n  //         data: [0, 0, 1, 2, 79, 82, 27, 14],\n  //         backgroundColor: \"rgba(54,73,93,.5)\",\n  //         borderColor: \"#36495d\",\n  //         borderWidth: 3\n  //       },\n  //       {\n  //         label: \"Planetary Mass (relative to the Sun x 10^-6)\",\n  //         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],\n  //         backgroundColor: \"rgba(71, 183,132,.5)\",\n  //         borderColor: \"#47b784\",\n  //         borderWidth: 3\n  //       }\n  //     ]\n  //   },\n  //   options: {\n  //     responsive: true,\n  //     lineTension: 1,\n  //     scales: {\n  //       yAxes: [\n  //         {\n  //           ticks: {\n  //             beginAtZero: true,\n  //             padding: 25\n  //           }\n  //         }\n  //       ]\n  //     }\n  //   }\n  // };\n\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      label: \"TPR\",\n      borderColor: \"#000000\",\n      backgroundColor: \"#000000\",\n      fill: true,\n      pointRadius: 4\n    }, {\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      // random curve for reference\n      label: \"Random\",\n      borderColor: \"#dedede\",\n      fill: false\n    }, {\n      data: roc_curve,\n      label: \"ROC curve\",\n      borderColor: \"#7600bc\",\n      backgroundColor: \"#ca5cdd\",\n      fill: true\n      // ,pointRadius: 4\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item, chart) {\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          // stepValue: 0.2,\n          steps: 10,\n          max: 1\n        },\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 'False positive rate (\\u03B1)'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          max: 1\n        },\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'True positive rate (1 - \\u03B2)'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ',\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 0.0255,\n        // p_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROCChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9jLWRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3JvYy1kYXRhLmpzP2JiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJPQ0NoYXJ0RGF0YSA9IHtcclxuLy8gICB0eXBlOiBcImxpbmVcIixcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBsYWJlbHM6IFtcIk1lcmN1cnlcIiwgXCJWZW51c1wiLCBcIkVhcnRoXCIsIFwiTWFyc1wiLCBcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJVcmFudXNcIiwgXCJOZXB0dW5lXCJdLFxyXG4vLyAgICAgZGF0YXNldHM6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGxhYmVsOiBcIk51bWJlciBvZiBNb29uc1wiLFxyXG4vLyAgICAgICAgIGRhdGE6IFswLCAwLCAxLCAyLCA3OSwgODIsIDI3LCAxNF0sXHJcbi8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTQsNzMsOTMsLjUpXCIsXHJcbi8vICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzM2NDk1ZFwiLFxyXG4vLyAgICAgICAgIGJvcmRlcldpZHRoOiAzXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsYWJlbDogXCJQbGFuZXRhcnkgTWFzcyAocmVsYXRpdmUgdG8gdGhlIFN1biB4IDEwXi02KVwiLFxyXG4vLyAgICAgICAgIGRhdGE6IFswLjE2NiwgMi4wODEsIDMuMDAzLCAwLjMyMywgOTU0Ljc5MiwgMjg1Ljg4NiwgNDMuNjYyLCA1MS41MTRdLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDcxLCAxODMsMTMyLC41KVwiLFxyXG4vLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM0N2I3ODRcIixcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBdXHJcbi8vICAgfSxcclxuLy8gICBvcHRpb25zOiB7XHJcbi8vICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4vLyAgICAgbGluZVRlbnNpb246IDEsXHJcbi8vICAgICBzY2FsZXM6IHtcclxuLy8gICAgICAgeUF4ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICB0aWNrczoge1xyXG4vLyAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMjVcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIF1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuICAgICAgdHlwZTogJ3NjYXR0ZXInLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgICAge3g6IDEsIHk6IDF9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJyZWZzXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgZGF0YTogW10sIFxyXG4gICAgICAgICAgICBsYWJlbDogXCJUUFJcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogNFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkYXRhOiBbe3g6MCx5OjB9LCB7eDoxLHk6MX1dLCAvLyByYW5kb20gY3VydmUgZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICBsYWJlbDogXCJSYW5kb21cIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2RlZGVkZVwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGRhdGE6IHJvY19jdXJ2ZSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiUk9DIGN1cnZlXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM3NjAwYmNcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjYTVjZGRcIixcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZVxyXG4gICAgICAgICAgICAvLyAscG9pbnRSYWRpdXM6IDRcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRleHQ6ICd0LXRlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgY2hhcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS50ZXh0LmluY2x1ZGVzKCdyZWZzJyk7IC8vIFJlbW92ZSB0aGUgcmVmcyBsZWdlbmQgaXRlbVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICBwb2ludDp7XHJcbiAgICAgICAgICAgICAgcmFkaXVzOiAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgICAgICAgICAgICAgIC8vIHN0ZXBWYWx1ZTogMC4yLFxyXG4gICAgICAgICAgICAgICAgc3RlcHM6IDEwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRmFsc2UgcG9zaXRpdmUgcmF0ZSAoXFx1MDNCMSknXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4yLFxyXG4gICAgICAgICAgICAgIG1heDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdUcnVlIHBvc2l0aXZlIHJhdGUgKDEgLSBcXHUwM0IyKSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICAgICAgICBhbm5vdGF0aW9uczogW3tcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdF92YWx1ZSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzhjOGM4JyxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFsxMCw1XSxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdwID0gJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLjAyNTUsIC8vIHBfdmFsdWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmNzAzNCcsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogJyM0ZDRlNGYnLFxyXG4gICAgICAgICAgICAgIHlBZGp1c3Q6IDIwLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUk9DQ2hhcnREYXRhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/roc-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f64ca30fcef4c5ca"; }
/******/ }();
/******/ 
/******/ }
);
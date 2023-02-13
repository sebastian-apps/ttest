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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROCChartData\": function() { return /* binding */ ROCChartData; }\n/* harmony export */ });\nconst ROCChartData = {\n  //   type: \"line\",\n  //   data: {\n  //     labels: [\"Mercury\", \"Venus\", \"Earth\", \"Mars\", \"Jupiter\", \"Saturn\", \"Uranus\", \"Neptune\"],\n  //     datasets: [\n  //       {\n  //         label: \"Number of Moons\",\n  //         data: [0, 0, 1, 2, 79, 82, 27, 14],\n  //         backgroundColor: \"rgba(54,73,93,.5)\",\n  //         borderColor: \"#36495d\",\n  //         borderWidth: 3\n  //       },\n  //       {\n  //         label: \"Planetary Mass (relative to the Sun x 10^-6)\",\n  //         data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],\n  //         backgroundColor: \"rgba(71, 183,132,.5)\",\n  //         borderColor: \"#47b784\",\n  //         borderWidth: 3\n  //       }\n  //     ]\n  //   },\n  //   options: {\n  //     responsive: true,\n  //     lineTension: 1,\n  //     scales: {\n  //       yAxes: [\n  //         {\n  //           ticks: {\n  //             beginAtZero: true,\n  //             padding: 25\n  //           }\n  //         }\n  //       ]\n  //     }\n  //   }\n  // };\n\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      label: \"TPR\",\n      borderColor: \"#000000\",\n      backgroundColor: \"#000000\",\n      fill: true,\n      pointRadius: 4\n    }, {\n      data: [{\n        x: 0,\n        y: 0\n      }, {\n        x: 1,\n        y: 1\n      }],\n      // random curve for reference\n      label: \"Random\",\n      borderColor: \"#dedede\",\n      fill: false\n    }, {\n      data: roc_curve,\n      label: \"ROC curve\",\n      borderColor: \"#7600bc\",\n      backgroundColor: \"#ca5cdd\",\n      fill: true\n      // ,pointRadius: 4\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item, chart) {\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          // stepValue: 0.2,\n          steps: 10,\n          max: 1\n        },\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 'False positive rate (\\u03B1)'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          stepSize: 0.2,\n          max: 1\n        },\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'True positive rate (1 - \\u03B2)'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ',\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: p_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROCChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm9jLWRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9yb2MtZGF0YS5qcz9iYmQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBST0NDaGFydERhdGEgPSB7XHJcbi8vICAgdHlwZTogXCJsaW5lXCIsXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgbGFiZWxzOiBbXCJNZXJjdXJ5XCIsIFwiVmVudXNcIiwgXCJFYXJ0aFwiLCBcIk1hcnNcIiwgXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiVXJhbnVzXCIsIFwiTmVwdHVuZVwiXSxcclxuLy8gICAgIGRhdGFzZXRzOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsYWJlbDogXCJOdW1iZXIgb2YgTW9vbnNcIixcclxuLy8gICAgICAgICBkYXRhOiBbMCwgMCwgMSwgMiwgNzksIDgyLCAyNywgMTRdLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDU0LDczLDkzLC41KVwiLFxyXG4vLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMzNjQ5NWRcIixcclxuLy8gICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgbGFiZWw6IFwiUGxhbmV0YXJ5IE1hc3MgKHJlbGF0aXZlIHRvIHRoZSBTdW4geCAxMF4tNilcIixcclxuLy8gICAgICAgICBkYXRhOiBbMC4xNjYsIDIuMDgxLCAzLjAwMywgMC4zMjMsIDk1NC43OTIsIDI4NS44ODYsIDQzLjY2MiwgNTEuNTE0XSxcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3MSwgMTgzLDEzMiwuNSlcIixcclxuLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjNDdiNzg0XCIsXHJcbi8vICAgICAgICAgYm9yZGVyV2lkdGg6IDNcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXVxyXG4vLyAgIH0sXHJcbi8vICAgb3B0aW9uczoge1xyXG4vLyAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuLy8gICAgIGxpbmVUZW5zaW9uOiAxLFxyXG4vLyAgICAgc2NhbGVzOiB7XHJcbi8vICAgICAgIHlBeGVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgdGlja3M6IHtcclxuLy8gICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDI1XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBdXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAge3g6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgIHt4OiAxLCB5OiAxfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGFiZWw6IFwicmVmc1wiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGRhdGE6IFtdLCBcclxuICAgICAgICAgICAgbGFiZWw6IFwiVFBSXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDRcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZGF0YTogW3t4OjAseTowfSwge3g6MSx5OjF9XSwgLy8gcmFuZG9tIGN1cnZlIGZvciByZWZlcmVuY2VcclxuICAgICAgICAgICAgbGFiZWw6IFwiUmFuZG9tXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNkZWRlZGVcIixcclxuICAgICAgICAgICAgZmlsbDogZmFsc2VcclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICBkYXRhOiByb2NfY3VydmUsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlJPQyBjdXJ2ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNzYwMGJjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2E1Y2RkXCIsXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWVcclxuICAgICAgICAgICAgLy8gLHBvaW50UmFkaXVzOiA0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICB0ZXh0OiAndC10ZXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVnZW5kOntcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW0sIGNoYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0udGV4dC5pbmNsdWRlcygncmVmcycpOyAvLyBSZW1vdmUgdGhlIHJlZnMgbGVnZW5kIGl0ZW1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgcG9pbnQ6e1xyXG4gICAgICAgICAgICAgIHJhZGl1czogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjIsXHJcbiAgICAgICAgICAgICAgICAvLyBzdGVwVmFsdWU6IDAuMixcclxuICAgICAgICAgICAgICAgIHN0ZXBzOiAxMCxcclxuICAgICAgICAgICAgICAgIG1heDogMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0ZhbHNlIHBvc2l0aXZlIHJhdGUgKFxcdTAzQjEpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgICAgICAgICAgICBtYXg6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVHJ1ZSBwb3NpdGl2ZSByYXRlICgxIC0gXFx1MDNCMiknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRfdmFsdWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbMTAsNV0sXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb250ZW50OiAncCA9ICcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogcF92YWx1ZSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZmY3MDM0JyxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzRkNGU0ZicsXHJcbiAgICAgICAgICAgICAgeUFkanVzdDogMjAsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBkcmF3VGltZTogXCJhZnRlckRhdGFzZXRzRHJhd1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBST0NDaGFydERhdGE7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/roc-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e21a7fe126f1efba"; }
/******/ }();
/******/ 
/******/ }
);
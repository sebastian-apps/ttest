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

/***/ "./src/ttest-chart-data.js":
/*!*********************************!*\
  !*** ./src/ttest-chart-data.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ttestChartData\": function() { return /* binding */ ttestChartData; }\n/* harmony export */ });\nconst ttestChartData = {\n  // elem(\"line_chart\")\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [{\n        x: -4.753,\n        y: 0\n      },\n      // {x: axes.x_min, y: 0},\n      {\n        x: 7.232,\n        y: 0\n      } // {x: axes.x_max, y: 0},\n      ],\n\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      // group1.dist,\n      label: \"Group 1\",\n      borderColor: \"#ff0000\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // group2.dist,\n      label: \"Group 2\",\n      borderColor: \"#0000ff\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // Alpha Curve\n      label: \"\\u03B1\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#ff000055\",\n      fill: true,\n      showLine: true //new\n    }, {\n      data: [],\n      // Beta Curve\n      label: \"\\u03B2\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#0000ff55\",\n      fill: true,\n      showLine: true //new\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item) {\n          // filter: function(item, chart)\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: -4.753,\n          // axes.x_min,\n          stepSize: 0.4794,\n          // axes.step_size,\n          max: 7.232 // axes.x_max,\n        },\n\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 't'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          max: 0.5 // axes.y_max,\n        },\n\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Normalized Frequency'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ' + 0.0255,\n          // content: 'p = ' + p_value,\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 3.2557,\n        // crit_t_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '\\u03B1',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n\n//   type: 'scatter',\n//   data: {\n//     datasets: [{\n//         data: [\n//           {x: 0, y: 0},\n//           {x: 1, y: 1},\n//         ],\n//         label: \"refs\",\n//         borderColor: \"transparent\",\n//         fill: false\n//       }\n//       ,{\n//         data:  [{x: 0.05, y: 0.75}],     //[], \n//         label: \"TPR\",\n//         borderColor: \"#000000\",\n//         backgroundColor: \"#000000\",\n//         fill: true,\n//         pointRadius: 4\n//       }, {\n//         data: [{x:0,y:0}, {x:1,y:1}], // random curve for reference\n//         label: \"Random\",\n//         borderColor: \"#dedede\",\n//         fill: false,\n//         showLine: true\n//       }\n//       ,{\n//         data: [{x:0.9995, y:1}, {x:0.999, y:1}, {x:0.9979, y:0.9999}, \n//               {x:0.9955, y: 0.9999}, \n//               {x:0.9902, y: 0.9998}, \n//               {x:0.9786, y: 0.9995}, \n//               {x:0.9534, y: 0.9991}, \n//               {x:0.9021, y: 0.9981}, \n//               {x:0.8087, y: 0.996}, \n//               {x:0.6644, y: 0.9914}, \n//               {x:0.48419999999999996, y: 0.9813}, \n//               {x:0.3077, y: 0.9591}, \n//               {x:0.17179999999999995, y: 0.9134}, \n//               {x:0.08660000000000001, y: 0.8282}, \n//               {x:0.04090000000000005, y: 0.6923}, \n//               {x:0.01870000000000005, y: 0.5158}, \n//               {x:0.008600000000000052, y: 0.3356}, \n//               {x:0.0040000000000000036, y: 0.19130000000000003}, \n//               {x:0.0019000000000000128, y: 0.09789999999999999}, \n//               {x:0.0009000000000000119, y: 0.046599999999999975}, \n//               {x:0.0004999999999999449, y: 0.021399999999999975}, \n//               {x:0.00019999999999997797, y: 0.009800000000000031}, \n//               {x:0.00009999999999998899, y: 0.0044999999999999485}, \n//               {x:0.00009999999999998899, y: 0.0020999999999999908}, \n//               {x:0, y: 0.0010000000000000009}, \n//               {x:0, y:0.0004999999999999449}],\n\n//         label: \"ROC curve\",\n//         borderColor: \"#7600bc\",\n//         backgroundColor: \"#ca5cdd\",\n//         fill: true,\n//         showLine: true\n//         // ,pointRadius: 4\n//       }\n//     ]\n//   },\n//   options: {\n//     animation: false,\n//     title: {\n//       display: false,\n//       text: 't-test'\n//     },\n//     legend:{\n//       position: 'bottom',\n//       labels: {\n//         filter: function(item, ) {  // filter: function(item, chart)\n//             return !item.text.includes('refs'); // Remove the refs legend item\n//           },\n//           usePointStyle: true,\n//         },\n//     },\n//     elements: {\n//       point:{\n//           radius: 0\n//       }\n//     },\n//     scales: {\n//       xAxes: [{\n//           ticks : {\n//             min: 0,\n//             stepSize: 0.2,\n//             // stepValue: 0.2,\n//             steps: 10,\n//             max: 1,\n//           },\n//         display: true,\n//         gridLines: {\n//           display:false,\n//         },\n//         scaleLabel: {\n//           display: true,\n//           labelString: 'False positive rate (\\u03B1)'\n//         }\n//       }],\n//       yAxes: [{\n//         ticks : {\n//           min: 0,\n//           stepSize: 0.2,\n//           max: 1,\n//         },\n//         display: true,\n//         scaleLabel: {\n//           display: true,\n//           labelString: 'True positive rate (1 - \\u03B2)'\n//         },\n//         gridLines: {\n//             display:false\n//         }\n//       }]\n//     },\n//     annotation: {\n//       annotations: [{\n//         type: 'line',\n//         mode: 'vertical',\n//         scaleID: 'x-axis-1',\n//         value: -2.2502, // t_value,\n//         borderColor: '#c8c8c8',\n//         borderWidth: 2,\n//         borderDash: [10,5],\n//         label: {\n//           enabled: true,\n//           content: 'p = ',\n//           backgroundColor: 'transparent',\n//           fontColor: '#c8c8c8',\n//           position: \"top\",\n//         }\n//       },{\n//         type: 'line',\n//         mode: 'vertical',\n//         scaleID: 'x-axis-1',\n//         value: 0.0255, // p_value,\n//         borderColor: '#ff7034',\n//         borderWidth: 2,\n//         label: {\n//           enabled: true,\n//           content: '',\n//           backgroundColor: 'transparent',\n//           fontColor: '#4d4e4f',\n//           yAdjust: 20,\n//           position: \"top\",\n//         }\n//       }\n//       ],\n//       drawTime: \"afterDatasetsDraw\" \n//     }\n//   }\n// };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ttestChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHRlc3QtY2hhcnQtZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvdHRlc3QtY2hhcnQtZGF0YS5qcz8wNWNkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNvbnN0IHR0ZXN0Q2hhcnREYXRhID0ge1xyXG5cclxuICAgIC8vIGVsZW0oXCJsaW5lX2NoYXJ0XCIpXHJcbiAgICAgICAgdHlwZTogJ3NjYXR0ZXInLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgIHt4OiAtNC43NTMsIHk6IDB9LCAgICAvLyB7eDogYXhlcy54X21pbiwgeTogMH0sXHJcbiAgICAgICAgICAgICAgICB7eDogNy4yMzIsIHk6IDB9LCAgICAvLyB7eDogYXhlcy54X21heCwgeTogMH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBsYWJlbDogXCJyZWZzXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgICAvLyBncm91cDEuZGlzdCxcclxuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cCAxXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmMDAwMFwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgIC8vIGdyb3VwMi5kaXN0LFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwIDJcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc2hvd0xpbmU6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtdLCAvLyBBbHBoYSBDdXJ2ZVxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlxcdTAzQjFcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmYwMDAwNTVcIixcclxuICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlICAvL25ld1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF0YTogW10sIC8vIEJldGEgQ3VydmVcclxuICAgICAgICAgICAgICBsYWJlbDogXCJcXHUwM0IyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDBmZjU1XCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaG93TGluZTogdHJ1ZSAgLy9uZXdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICB0ZXh0OiAndC10ZXN0J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlZ2VuZDp7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbihpdGVtLCApIHsgIC8vIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgY2hhcnQpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS50ZXh0LmluY2x1ZGVzKCdyZWZzJyk7IC8vIFJlbW92ZSB0aGUgcmVmcyBsZWdlbmQgaXRlbVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHBvaW50OntcclxuICAgICAgICAgICAgICAgIHJhZGl1czogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3MgOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IC00Ljc1MywgICAvLyBheGVzLnhfbWluLFxyXG4gICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuNDc5NCwgIC8vIGF4ZXMuc3RlcF9zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogNy4yMzIsICAvLyBheGVzLnhfbWF4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ3QnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgdGlja3MgOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDAuNSwgIC8vIGF4ZXMueV9tYXgsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ05vcm1hbGl6ZWQgRnJlcXVlbmN5J1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogW3tcclxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAgLTIuMjUwMiwgICAvLyB0X3ZhbHVlLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzEwLDVdLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ3AgPSAnICsgMC4wMjU1LCAgLy8gY29udGVudDogJ3AgPSAnICsgcF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAzLjI1NTcsICAvLyBjcml0X3RfdmFsdWUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZmY3MDM0JyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXHUwM0IxJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyM0ZDRlNGYnLFxyXG4gICAgICAgICAgICAgICAgeUFkanVzdDogMjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIiBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbiAgICAvLyAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgIC8vICAgZGF0YToge1xyXG4gICAgLy8gICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgLy8gICAgICAgICBkYXRhOiBbXHJcbiAgICAvLyAgICAgICAgICAge3g6IDAsIHk6IDB9LFxyXG4gICAgLy8gICAgICAgICAgIHt4OiAxLCB5OiAxfSxcclxuICAgIC8vICAgICAgICAgXSxcclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwicmVmc1wiLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgLy8gICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgLHtcclxuICAgIC8vICAgICAgICAgZGF0YTogIFt7eDogMC4wNSwgeTogMC43NX1dLCAgICAgLy9bXSwgXHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiBcIlRQUlwiLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAvLyAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIHBvaW50UmFkaXVzOiA0XHJcbiAgICAvLyAgICAgICB9LCB7XHJcbiAgICAvLyAgICAgICAgIGRhdGE6IFt7eDowLHk6MH0sIHt4OjEseToxfV0sIC8vIHJhbmRvbSBjdXJ2ZSBmb3IgcmVmZXJlbmNlXHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiBcIlJhbmRvbVwiLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjZGVkZWRlXCIsXHJcbiAgICAvLyAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICBzaG93TGluZTogdHJ1ZVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgLHtcclxuICAgIC8vICAgICAgICAgZGF0YTogW3t4OjAuOTk5NSwgeToxfSwge3g6MC45OTksIHk6MX0sIHt4OjAuOTk3OSwgeTowLjk5OTl9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC45OTU1LCB5OiAwLjk5OTl9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC45OTAyLCB5OiAwLjk5OTh9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC45Nzg2LCB5OiAwLjk5OTV9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC45NTM0LCB5OiAwLjk5OTF9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC45MDIxLCB5OiAwLjk5ODF9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC44MDg3LCB5OiAwLjk5Nn0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjY2NDQsIHk6IDAuOTkxNH0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjQ4NDE5OTk5OTk5OTk5OTk2LCB5OiAwLjk4MTN9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4zMDc3LCB5OiAwLjk1OTF9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4xNzE3OTk5OTk5OTk5OTk5NSwgeTogMC45MTM0fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDg2NjAwMDAwMDAwMDAwMDEsIHk6IDAuODI4Mn0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjA0MDkwMDAwMDAwMDAwMDA1LCB5OiAwLjY5MjN9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMTg3MDAwMDAwMDAwMDAwNSwgeTogMC41MTU4fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDA4NjAwMDAwMDAwMDAwMDUyLCB5OiAwLjMzNTZ9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDQwMDAwMDAwMDAwMDAwMDM2LCB5OiAwLjE5MTMwMDAwMDAwMDAwMDAzfSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDAxOTAwMDAwMDAwMDAwMDEyOCwgeTogMC4wOTc4OTk5OTk5OTk5OTk5OX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjAwMDkwMDAwMDAwMDAwMDAxMTksIHk6IDAuMDQ2NTk5OTk5OTk5OTk5OTc1fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDAwNDk5OTk5OTk5OTk5OTQ0OSwgeTogMC4wMjEzOTk5OTk5OTk5OTk5NzV9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDAxOTk5OTk5OTk5OTk5Nzc5NywgeTogMC4wMDk4MDAwMDAwMDAwMDAwMzF9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDAwOTk5OTk5OTk5OTk5ODg5OSwgeTogMC4wMDQ0OTk5OTk5OTk5OTk5NDg1fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDAwMDk5OTk5OTk5OTk5OTg4OTksIHk6IDAuMDAyMDk5OTk5OTk5OTk5OTkwOH0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLCB5OiAwLjAwMTAwMDAwMDAwMDAwMDAwMDl9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MCwgeTowLjAwMDQ5OTk5OTk5OTk5OTk0NDl9XSxcclxuXHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiBcIlJPQyBjdXJ2ZVwiLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogXCIjNzYwMGJjXCIsXHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2E1Y2RkXCIsXHJcbiAgICAvLyAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIHNob3dMaW5lOiB0cnVlXHJcbiAgICAvLyAgICAgICAgIC8vICxwb2ludFJhZGl1czogNFxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgb3B0aW9uczoge1xyXG4gICAgLy8gICAgIGFuaW1hdGlvbjogZmFsc2UsXHJcbiAgICAvLyAgICAgdGl0bGU6IHtcclxuICAgIC8vICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgdGV4dDogJ3QtdGVzdCdcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGxlZ2VuZDp7XHJcbiAgICAvLyAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAvLyAgICAgICBsYWJlbHM6IHtcclxuICAgIC8vICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbihpdGVtLCApIHsgIC8vIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgY2hhcnQpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gIWl0ZW0udGV4dC5pbmNsdWRlcygncmVmcycpOyAvLyBSZW1vdmUgdGhlIHJlZnMgbGVnZW5kIGl0ZW1cclxuICAgIC8vICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBlbGVtZW50czoge1xyXG4gICAgLy8gICAgICAgcG9pbnQ6e1xyXG4gICAgLy8gICAgICAgICAgIHJhZGl1czogMFxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgc2NhbGVzOiB7XHJcbiAgICAvLyAgICAgICB4QXhlczogW3tcclxuICAgIC8vICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgIC8vICAgICAgICAgICAgIG1pbjogMCxcclxuICAgIC8vICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjIsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBzdGVwVmFsdWU6IDAuMixcclxuICAgIC8vICAgICAgICAgICAgIHN0ZXBzOiAxMCxcclxuICAgIC8vICAgICAgICAgICAgIG1heDogMSxcclxuICAgIC8vICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgLy8gICAgICAgICBncmlkTGluZXM6IHtcclxuICAgIC8vICAgICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAvLyAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICBsYWJlbFN0cmluZzogJ0ZhbHNlIHBvc2l0aXZlIHJhdGUgKFxcdTAzQjEpJ1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XSxcclxuICAgIC8vICAgICAgIHlBeGVzOiBbe1xyXG4gICAgLy8gICAgICAgICB0aWNrcyA6IHtcclxuICAgIC8vICAgICAgICAgICBtaW46IDAsXHJcbiAgICAvLyAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgIC8vICAgICAgICAgICBtYXg6IDEsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgIC8vICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVHJ1ZSBwb3NpdGl2ZSByYXRlICgxIC0gXFx1MDNCMiknXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgLy8gICAgICAgYW5ub3RhdGlvbnM6IFt7XHJcbiAgICAvLyAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgIC8vICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcclxuICAgIC8vICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgIC8vICAgICAgICAgdmFsdWU6IC0yLjI1MDIsIC8vIHRfdmFsdWUsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJEYXNoOiBbMTAsNV0sXHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAvLyAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICBjb250ZW50OiAncCA9ICcsXHJcbiAgICAvLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgLy8gICAgICAgICAgIGZvbnRDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgLy8gICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9LHtcclxuICAgIC8vICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgLy8gICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgLy8gICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgLy8gICAgICAgICB2YWx1ZTogMC4wMjU1LCAvLyBwX3ZhbHVlLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJDb2xvcjogJyNmZjcwMzQnLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgIC8vICAgICAgICAgbGFiZWw6IHtcclxuICAgIC8vICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgLy8gICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIC8vICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuICAgIC8vICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuICAgIC8vICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgXSxcclxuICAgIC8vICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9O1xyXG4gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0dGVzdENoYXJ0RGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ttest-chart-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "32c19dbf094ebc4c"; }
/******/ }();
/******/ 
/******/ }
);
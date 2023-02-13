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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ttestChartData\": function() { return /* binding */ ttestChartData; }\n/* harmony export */ });\nconst ttestChartData = {\n  // elem(\"line_chart\")\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [],\n      // {x: axes.x_min, y: 0}, {x: axes.x_max, y: 0},\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      // group1.dist,\n      label: \"Group 1\",\n      borderColor: \"#ff0000\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // group2.dist,\n      label: \"Group 2\",\n      borderColor: \"#0000ff\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // Alpha Curve\n      label: \"\\u03B1\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#ff000055\",\n      fill: true,\n      showLine: true //new\n    }, {\n      data: [],\n      // Beta Curve\n      label: \"\\u03B2\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#0000ff55\",\n      fill: true,\n      showLine: true //new\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item) {\n          // filter: function(item, chart)\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: -4.753,\n          // axes.x_min,\n          stepSize: 0.4794,\n          // axes.step_size,\n          max: 7.232 // axes.x_max,\n        },\n\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 't'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          max: 0.5 // axes.y_max,\n        },\n\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Normalized Frequency'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ' + 0.0255,\n          // content: 'p = ' + p_value,\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 3.2557,\n        // crit_t_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '\\u03B1',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n\n//   type: 'scatter',\n//   data: {\n//     datasets: [{\n//         data: [\n//           {x: 0, y: 0},\n//           {x: 1, y: 1},\n//         ],\n//         label: \"refs\",\n//         borderColor: \"transparent\",\n//         fill: false\n//       }\n//       ,{\n//         data:  [{x: 0.05, y: 0.75}],     //[], \n//         label: \"TPR\",\n//         borderColor: \"#000000\",\n//         backgroundColor: \"#000000\",\n//         fill: true,\n//         pointRadius: 4\n//       }, {\n//         data: [{x:0,y:0}, {x:1,y:1}], // random curve for reference\n//         label: \"Random\",\n//         borderColor: \"#dedede\",\n//         fill: false,\n//         showLine: true\n//       }\n//       ,{\n//         data: [{x:0.9995, y:1}, {x:0.999, y:1}, {x:0.9979, y:0.9999}, \n//               {x:0.9955, y: 0.9999}, \n//               {x:0.9902, y: 0.9998}, \n//               {x:0.9786, y: 0.9995}, \n//               {x:0.9534, y: 0.9991}, \n//               {x:0.9021, y: 0.9981}, \n//               {x:0.8087, y: 0.996}, \n//               {x:0.6644, y: 0.9914}, \n//               {x:0.48419999999999996, y: 0.9813}, \n//               {x:0.3077, y: 0.9591}, \n//               {x:0.17179999999999995, y: 0.9134}, \n//               {x:0.08660000000000001, y: 0.8282}, \n//               {x:0.04090000000000005, y: 0.6923}, \n//               {x:0.01870000000000005, y: 0.5158}, \n//               {x:0.008600000000000052, y: 0.3356}, \n//               {x:0.0040000000000000036, y: 0.19130000000000003}, \n//               {x:0.0019000000000000128, y: 0.09789999999999999}, \n//               {x:0.0009000000000000119, y: 0.046599999999999975}, \n//               {x:0.0004999999999999449, y: 0.021399999999999975}, \n//               {x:0.00019999999999997797, y: 0.009800000000000031}, \n//               {x:0.00009999999999998899, y: 0.0044999999999999485}, \n//               {x:0.00009999999999998899, y: 0.0020999999999999908}, \n//               {x:0, y: 0.0010000000000000009}, \n//               {x:0, y:0.0004999999999999449}],\n\n//         label: \"ROC curve\",\n//         borderColor: \"#7600bc\",\n//         backgroundColor: \"#ca5cdd\",\n//         fill: true,\n//         showLine: true\n//         // ,pointRadius: 4\n//       }\n//     ]\n//   },\n//   options: {\n//     animation: false,\n//     title: {\n//       display: false,\n//       text: 't-test'\n//     },\n//     legend:{\n//       position: 'bottom',\n//       labels: {\n//         filter: function(item, ) {  // filter: function(item, chart)\n//             return !item.text.includes('refs'); // Remove the refs legend item\n//           },\n//           usePointStyle: true,\n//         },\n//     },\n//     elements: {\n//       point:{\n//           radius: 0\n//       }\n//     },\n//     scales: {\n//       xAxes: [{\n//           ticks : {\n//             min: 0,\n//             stepSize: 0.2,\n//             // stepValue: 0.2,\n//             steps: 10,\n//             max: 1,\n//           },\n//         display: true,\n//         gridLines: {\n//           display:false,\n//         },\n//         scaleLabel: {\n//           display: true,\n//           labelString: 'False positive rate (\\u03B1)'\n//         }\n//       }],\n//       yAxes: [{\n//         ticks : {\n//           min: 0,\n//           stepSize: 0.2,\n//           max: 1,\n//         },\n//         display: true,\n//         scaleLabel: {\n//           display: true,\n//           labelString: 'True positive rate (1 - \\u03B2)'\n//         },\n//         gridLines: {\n//             display:false\n//         }\n//       }]\n//     },\n//     annotation: {\n//       annotations: [{\n//         type: 'line',\n//         mode: 'vertical',\n//         scaleID: 'x-axis-1',\n//         value: -2.2502, // t_value,\n//         borderColor: '#c8c8c8',\n//         borderWidth: 2,\n//         borderDash: [10,5],\n//         label: {\n//           enabled: true,\n//           content: 'p = ',\n//           backgroundColor: 'transparent',\n//           fontColor: '#c8c8c8',\n//           position: \"top\",\n//         }\n//       },{\n//         type: 'line',\n//         mode: 'vertical',\n//         scaleID: 'x-axis-1',\n//         value: 0.0255, // p_value,\n//         borderColor: '#ff7034',\n//         borderWidth: 2,\n//         label: {\n//           enabled: true,\n//           content: '',\n//           backgroundColor: 'transparent',\n//           fontColor: '#4d4e4f',\n//           yAdjust: 20,\n//           position: \"top\",\n//         }\n//       }\n//       ],\n//       drawTime: \"afterDatasetsDraw\" \n//     }\n//   }\n// };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ttestChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHRlc3QtY2hhcnQtZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3R0ZXN0LWNoYXJ0LWRhdGEuanM/MDVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCB0dGVzdENoYXJ0RGF0YSA9IHtcclxuXHJcbiAgICAvLyBlbGVtKFwibGluZV9jaGFydFwiKVxyXG4gICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgIC8vIHt4OiBheGVzLnhfbWluLCB5OiAwfSwge3g6IGF4ZXMueF9tYXgsIHk6IDB9LFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcInJlZnNcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtdLCAgIC8vIGdyb3VwMS5kaXN0LFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwIDFcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmYwMDAwXCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc2hvd0xpbmU6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtdLCAgLy8gZ3JvdXAyLmRpc3QsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXAgMlwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93TGluZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF0YTogW10sIC8vIEFscGhhIEN1cnZlXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiXFx1MDNCMVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjAwMDA1NVwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUgIC8vbmV3XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgLy8gQmV0YSBDdXJ2ZVxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlxcdTAzQjJcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMGZmNTVcIixcclxuICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlICAvL25ld1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRleHQ6ICd0LXRlc3QnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVnZW5kOntcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW0sICkgeyAgLy8gZmlsdGVyOiBmdW5jdGlvbihpdGVtLCBjaGFydClcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICFpdGVtLnRleHQuaW5jbHVkZXMoJ3JlZnMnKTsgLy8gUmVtb3ZlIHRoZSByZWZzIGxlZ2VuZCBpdGVtXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgcG9pbnQ6e1xyXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogLTQuNzUzLCAgIC8vIGF4ZXMueF9taW4sXHJcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC40Nzk0LCAgLy8gYXhlcy5zdGVwX3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA3LjIzMiwgIC8vIGF4ZXMueF9tYXgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAndCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICB0aWNrcyA6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMC41LCAgLy8gYXhlcy55X21heCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTm9ybWFsaXplZCBGcmVxdWVuY3knXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBbe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbiAgICAgICAgICAgICAgdmFsdWU6ICAtMi4yNTAyLCAgIC8vIHRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzhjOGM4JyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbMTAsNV0sXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAncCA9ICcgKyAwLjAyNTUsICAvLyBjb250ZW50OiAncCA9ICcgKyBwX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IDMuMjU1NywgIC8vIGNyaXRfdF92YWx1ZSxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZjcwMzQnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1xcdTAzQjEnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzRkNGU0ZicsXHJcbiAgICAgICAgICAgICAgICB5QWRqdXN0OiAyMCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkcmF3VGltZTogXCJhZnRlckRhdGFzZXRzRHJhd1wiIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuICAgIC8vICAgdHlwZTogJ3NjYXR0ZXInLFxyXG4gICAgLy8gICBkYXRhOiB7XHJcbiAgICAvLyAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAvLyAgICAgICAgIGRhdGE6IFtcclxuICAgIC8vICAgICAgICAgICB7eDogMCwgeTogMH0sXHJcbiAgICAvLyAgICAgICAgICAge3g6IDEsIHk6IDF9LFxyXG4gICAgLy8gICAgICAgICBdLFxyXG4gICAgLy8gICAgICAgICBsYWJlbDogXCJyZWZzXCIsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAvLyAgICAgICAgIGZpbGw6IGZhbHNlXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICAse1xyXG4gICAgLy8gICAgICAgICBkYXRhOiAgW3t4OiAwLjA1LCB5OiAwLjc1fV0sICAgICAvL1tdLCBcclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwiVFBSXCIsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgIC8vICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgcG9pbnRSYWRpdXM6IDRcclxuICAgIC8vICAgICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgZGF0YTogW3t4OjAseTowfSwge3g6MSx5OjF9XSwgLy8gcmFuZG9tIGN1cnZlIGZvciByZWZlcmVuY2VcclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwiUmFuZG9tXCIsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNkZWRlZGVcIixcclxuICAgIC8vICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgIHNob3dMaW5lOiB0cnVlXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICAse1xyXG4gICAgLy8gICAgICAgICBkYXRhOiBbe3g6MC45OTk1LCB5OjF9LCB7eDowLjk5OSwgeToxfSwge3g6MC45OTc5LCB5OjAuOTk5OX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjk5NTUsIHk6IDAuOTk5OX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjk5MDIsIHk6IDAuOTk5OH0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjk3ODYsIHk6IDAuOTk5NX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjk1MzQsIHk6IDAuOTk5MX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjkwMjEsIHk6IDAuOTk4MX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjgwODcsIHk6IDAuOTk2fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuNjY0NCwgeTogMC45OTE0fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuNDg0MTk5OTk5OTk5OTk5OTYsIHk6IDAuOTgxM30sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjMwNzcsIHk6IDAuOTU5MX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjE3MTc5OTk5OTk5OTk5OTk1LCB5OiAwLjkxMzR9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wODY2MDAwMDAwMDAwMDAwMSwgeTogMC44MjgyfSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDQwOTAwMDAwMDAwMDAwMDUsIHk6IDAuNjkyM30sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjAxODcwMDAwMDAwMDAwMDA1LCB5OiAwLjUxNTh9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDg2MDAwMDAwMDAwMDAwNTIsIHk6IDAuMzM1Nn0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjAwNDAwMDAwMDAwMDAwMDAwMzYsIHk6IDAuMTkxMzAwMDAwMDAwMDAwMDN9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDE5MDAwMDAwMDAwMDAwMTI4LCB5OiAwLjA5Nzg5OTk5OTk5OTk5OTk5fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAuMDAwOTAwMDAwMDAwMDAwMDExOSwgeTogMC4wNDY1OTk5OTk5OTk5OTk5NzV9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDA0OTk5OTk5OTk5OTk5NDQ5LCB5OiAwLjAyMTM5OTk5OTk5OTk5OTk3NX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjAwMDE5OTk5OTk5OTk5OTk3Nzk3LCB5OiAwLjAwOTgwMDAwMDAwMDAwMDAzMX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLjAwMDA5OTk5OTk5OTk5OTk4ODk5LCB5OiAwLjAwNDQ5OTk5OTk5OTk5OTk0ODV9LCBcclxuICAgIC8vICAgICAgICAgICAgICAge3g6MC4wMDAwOTk5OTk5OTk5OTk5ODg5OSwgeTogMC4wMDIwOTk5OTk5OTk5OTk5OTA4fSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgIHt4OjAsIHk6IDAuMDAxMDAwMDAwMDAwMDAwMDAwOX0sIFxyXG4gICAgLy8gICAgICAgICAgICAgICB7eDowLCB5OjAuMDAwNDk5OTk5OTk5OTk5OTQ0OX1dLFxyXG5cclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwiUk9DIGN1cnZlXCIsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM3NjAwYmNcIixcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjYTVjZGRcIixcclxuICAgIC8vICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgc2hvd0xpbmU6IHRydWVcclxuICAgIC8vICAgICAgICAgLy8gLHBvaW50UmFkaXVzOiA0XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgXVxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBvcHRpb25zOiB7XHJcbiAgICAvLyAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgIC8vICAgICB0aXRsZToge1xyXG4gICAgLy8gICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAvLyAgICAgICB0ZXh0OiAndC10ZXN0J1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgbGVnZW5kOntcclxuICAgIC8vICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgIC8vICAgICAgIGxhYmVsczoge1xyXG4gICAgLy8gICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW0sICkgeyAgLy8gZmlsdGVyOiBmdW5jdGlvbihpdGVtLCBjaGFydClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiAhaXRlbS50ZXh0LmluY2x1ZGVzKCdyZWZzJyk7IC8vIFJlbW92ZSB0aGUgcmVmcyBsZWdlbmQgaXRlbVxyXG4gICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVsZW1lbnRzOiB7XHJcbiAgICAvLyAgICAgICBwb2ludDp7XHJcbiAgICAvLyAgICAgICAgICAgcmFkaXVzOiAwXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBzY2FsZXM6IHtcclxuICAgIC8vICAgICAgIHhBeGVzOiBbe1xyXG4gICAgLy8gICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgLy8gICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgLy8gICAgICAgICAgICAgc3RlcFNpemU6IDAuMixcclxuICAgIC8vICAgICAgICAgICAgIC8vIHN0ZXBWYWx1ZTogMC4yLFxyXG4gICAgLy8gICAgICAgICAgICAgc3RlcHM6IDEwLFxyXG4gICAgLy8gICAgICAgICAgICAgbWF4OiAxLFxyXG4gICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgLy8gICAgICAgICAgIGRpc3BsYXk6ZmFsc2UsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgIC8vICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRmFsc2UgcG9zaXRpdmUgcmF0ZSAoXFx1MDNCMSknXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH1dLFxyXG4gICAgLy8gICAgICAgeUF4ZXM6IFt7XHJcbiAgICAvLyAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgLy8gICAgICAgICAgIG1pbjogMCxcclxuICAgIC8vICAgICAgICAgICBzdGVwU2l6ZTogMC4yLFxyXG4gICAgLy8gICAgICAgICAgIG1heDogMSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgLy8gICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdUcnVlIHBvc2l0aXZlIHJhdGUgKDEgLSBcXHUwM0IyKSdcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH1dXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICAvLyAgICAgICBhbm5vdGF0aW9uczogW3tcclxuICAgIC8vICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgLy8gICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgLy8gICAgICAgICBzY2FsZUlEOiAneC1heGlzLTEnLFxyXG4gICAgLy8gICAgICAgICB2YWx1ZTogLTIuMjUwMiwgLy8gdF92YWx1ZSxcclxuICAgIC8vICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYzhjOGM4JyxcclxuICAgIC8vICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckRhc2g6IFsxMCw1XSxcclxuICAgIC8vICAgICAgICAgbGFiZWw6IHtcclxuICAgIC8vICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgIGNvbnRlbnQ6ICdwID0gJyxcclxuICAgIC8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAvLyAgICAgICAgICAgZm9udENvbG9yOiAnI2M4YzhjOCcsXHJcbiAgICAvLyAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH0se1xyXG4gICAgLy8gICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAvLyAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAvLyAgICAgICAgIHNjYWxlSUQ6ICd4LWF4aXMtMScsXHJcbiAgICAvLyAgICAgICAgIHZhbHVlOiAwLjAyNTUsIC8vIHBfdmFsdWUsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmNzAzNCcsXHJcbiAgICAvLyAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgLy8gICAgICAgICBsYWJlbDoge1xyXG4gICAgLy8gICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAvLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgLy8gICAgICAgICAgIGZvbnRDb2xvcjogJyM0ZDRlNGYnLFxyXG4gICAgLy8gICAgICAgICAgIHlBZGp1c3Q6IDIwLFxyXG4gICAgLy8gICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICBdLFxyXG4gICAgLy8gICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIiBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcbiAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR0ZXN0Q2hhcnREYXRhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ttest-chart-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bcab84d9ad29f5a9"; }
/******/ }();
/******/ 
/******/ }
);
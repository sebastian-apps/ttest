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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ttestChartData\": function() { return /* binding */ ttestChartData; }\n/* harmony export */ });\nconst ttestChartData = {\n  // elem(\"line_chart\")\n  type: 'scatter',\n  data: {\n    datasets: [{\n      data: [],\n      // [{x: axes.x_min, y: 0}, {x: axes.x_max, y: 0}],\n      label: \"refs\",\n      borderColor: \"transparent\",\n      fill: false\n    }, {\n      data: [],\n      // group1.dist,\n      label: \"Group 1\",\n      borderColor: \"#ff0000\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // group2.dist,\n      label: \"Group 2\",\n      borderColor: \"#0000ff\",\n      fill: false,\n      showLine: true\n    }, {\n      data: [],\n      // Alpha Curve\n      label: \"\\u03B1\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#ff000055\",\n      fill: true,\n      showLine: true //new\n    }, {\n      data: [],\n      // Beta Curve\n      label: \"\\u03B2\",\n      borderColor: \"transparent\",\n      backgroundColor: \"#0000ff55\",\n      fill: true,\n      showLine: true //new\n    }]\n  },\n\n  options: {\n    animation: false,\n    title: {\n      display: false,\n      text: 't-test'\n    },\n    legend: {\n      position: 'bottom',\n      labels: {\n        filter: function (item) {\n          // filter: function(item, chart)\n          return !item.text.includes('refs'); // Remove the refs legend item\n        },\n\n        usePointStyle: true\n      }\n    },\n    elements: {\n      point: {\n        radius: 0\n      }\n    },\n    scales: {\n      xAxes: [{\n        ticks: {\n          min: 0,\n          // axes.x_min,\n          max: 0,\n          // axes.x_max,\n          stepSize: 0.4794 // axes.step_size,\n        },\n\n        display: true,\n        gridLines: {\n          display: false\n        },\n        scaleLabel: {\n          display: true,\n          labelString: 't'\n        }\n      }],\n      yAxes: [{\n        ticks: {\n          min: 0,\n          max: 0 // axes.y_max,\n        },\n\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Normalized Frequency'\n        },\n        gridLines: {\n          display: false\n        }\n      }]\n    },\n    annotation: {\n      annotations: [{\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: -2.2502,\n        // t_value,\n        borderColor: '#c8c8c8',\n        borderWidth: 2,\n        borderDash: [10, 5],\n        label: {\n          enabled: true,\n          content: 'p = ' + 0.0255,\n          // content: 'p = ' + p_value,\n          backgroundColor: 'transparent',\n          fontColor: '#c8c8c8',\n          position: \"top\"\n        }\n      }, {\n        type: 'line',\n        mode: 'vertical',\n        scaleID: 'x-axis-1',\n        value: 3.2557,\n        // crit_t_value,\n        borderColor: '#ff7034',\n        borderWidth: 2,\n        label: {\n          enabled: true,\n          content: '\\u03B1',\n          backgroundColor: 'transparent',\n          fontColor: '#4d4e4f',\n          yAdjust: 20,\n          position: \"top\"\n        }\n      }],\n      drawTime: \"afterDatasetsDraw\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ttestChartData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHRlc3QtY2hhcnQtZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL3R0ZXN0LWNoYXJ0LWRhdGEuanM/MDVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCB0dGVzdENoYXJ0RGF0YSA9IHtcclxuXHJcbiAgICAvLyBlbGVtKFwibGluZV9jaGFydFwiKVxyXG4gICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgIC8vIFt7eDogYXhlcy54X21pbiwgeTogMH0sIHt4OiBheGVzLnhfbWF4LCB5OiAwfV0sXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwicmVmc1wiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogZmFsc2VcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgZGF0YTogW10sICAgLy8gZ3JvdXAxLmRpc3QsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXAgMVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZjAwMDBcIixcclxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93TGluZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF0YTogW10sICAvLyBncm91cDIuZGlzdCxcclxuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cCAyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXRhOiBbXSwgLy8gQWxwaGEgQ3VydmVcclxuICAgICAgICAgICAgICBsYWJlbDogXCJcXHUwM0IxXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMDAwMDU1XCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaG93TGluZTogdHJ1ZSAgLy9uZXdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtdLCAvLyBCZXRhIEN1cnZlXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiXFx1MDNCMlwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwZmY1NVwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUgIC8vbmV3XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgdGV4dDogJ3QtdGVzdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsZWdlbmQ6e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24oaXRlbSwgKSB7ICAvLyBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW0sIGNoYXJ0KVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0udGV4dC5pbmNsdWRlcygncmVmcycpOyAvLyBSZW1vdmUgdGhlIHJlZnMgbGVnZW5kIGl0ZW1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICBwb2ludDp7XHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzIDoge1xyXG4gICAgICAgICAgICAgICAgICBtaW46IDAsICAgLy8gYXhlcy54X21pbixcclxuICAgICAgICAgICAgICAgICAgbWF4OiAwLCAgLy8gYXhlcy54X21heCxcclxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuNDc5NCwgIC8vIGF4ZXMuc3RlcF9zaXplLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ3QnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgdGlja3MgOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDAsICAvLyBheGVzLnlfbWF4LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdOb3JtYWxpemVkIEZyZXF1ZW5jeSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFubm90YXRpb246IHtcclxuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgICAgICAgICAgICB2YWx1ZTogIC0yLjI1MDIsICAgLy8gdF92YWx1ZSxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNjOGM4YzgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsxMCw1XSxcclxuICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdwID0gJyArIDAuMDI1NSwgIC8vIGNvbnRlbnQ6ICdwID0gJyArIHBfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjYzhjOGM4JyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0xJyxcclxuICAgICAgICAgICAgICB2YWx1ZTogMy4yNTU3LCAgLy8gY3JpdF90X3ZhbHVlLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmNzAzNCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1MDNCMScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjNGQ0ZTRmJyxcclxuICAgICAgICAgICAgICAgIHlBZGp1c3Q6IDIwLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRyYXdUaW1lOiBcImFmdGVyRGF0YXNldHNEcmF3XCIgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR0ZXN0Q2hhcnREYXRhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ttest-chart-data.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "992911ba557a3c77"; }
/******/ }();
/******/ 
/******/ }
);
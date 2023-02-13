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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mathjs */ \"./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n\n // npm install chart.js@2.9.4\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].state.count,\n      ttestChart: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function () {\n      // function(group1, crit_t_value)\n\n      let group1 = this.store.state.group1;\n      let crit_t_value = this.store.state.crit_t_value;\n\n      // Fill the area under the curve representing alpha.\n      let alpha_curve = [];\n      // this datapoint connects with the critical t vertical line\n      alpha_curve.push({\n        x: crit_t_value,\n        y: this.t_Distrib(crit_t_value, group1.df)\n      });\n      for (var i = 0; i < group1.dist.length; i++) {\n        if (group1.dist[i]['x'] > crit_t_value) {\n          alpha_curve.push({\n            x: group1.dist[i]['x'],\n            y: group1.dist[i]['y']\n          });\n        }\n      }\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function () {\n      // function(group2, crit_t_value)\n\n      let group2 = this.store.state.group2;\n      let crit_t_value = this.store.state.crit_t_value;\n      let ncp = this.store.state.ncp;\n\n      // Fill the area under the curve representing beta.\n      let beta_curve = [];\n      for (var i = 0; i < group2.dist.length; i++) {\n        if (group2.dist[i]['x'] < crit_t_value) {\n          beta_curve.push({\n            x: group2.dist[i]['x'],\n            y: group2.dist[i]['y']\n          });\n        }\n      }\n      console.log(\"beta_curve:\", beta_curve);\n\n      // this datapoint connects with the critical t vertical line\n      beta_curve.push({\n        x: crit_t_value,\n        y: this.t_Distrib(crit_t_value - ncp, group2.df)\n      }); // ncp acts as offset\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    t_Distrib: function (t, dof) {\n      // For a given x, return the t distribution y value.\n      let y = mathjs__WEBPACK_IMPORTED_MODULE_7__.gamma((dof + 1) / 2) / (mathjs__WEBPACK_IMPORTED_MODULE_7__.sqrt(dof * mathjs__WEBPACK_IMPORTED_MODULE_7__.pi) * mathjs__WEBPACK_IMPORTED_MODULE_7__.gamma(dof / 2)) * (1 + t ** 2 / dof) ** (-(dof + 1) / 2);\n      return mathjs__WEBPACK_IMPORTED_MODULE_7__.round(y, 6);\n    }\n  },\n  mounted() {\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve();\n    this.drawBetaCurve();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFvTEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0cy4gVGhlIGRhdGEgYXJlIGFzc3VtZWQgdG8gYmUgbm9ybWFsbHkgZGlzdHJpYnV0ZWQuXG4gICAgICA8YSBocmVmPScjbW9yZS1pbmZvJz5GaW5kIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuICAgIDwvZGl2PlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJDb250YWluZXJXaW5kb3dcIj5cblxuICAgIDxwPjxicj48cD48YnI+PHA+PGJyPjxwPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cbiAgICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICAgIDxkaXYgaWQ9XCJzbGlkZXJcIiBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIiBvbnRvdWNobW92ZT1cIm1vdmVUaHVtYk1vYmlsZShldmVudClcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cInR0ZXN0LWNoYXJ0XCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiODAwXCI+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD48YnI+PHA+PGJyPlxuICAgICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuXG4gICAgICAgIDxiPjxzcGFuIGlkPVwibWVzc2FnZVwiPjwvc3Bhbj48L2I+XG4gICAgICAgIDxicj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW50ZXItZGF0YVwiPlxuICAgICAgICAgIDxmb3JtIGlkPVwiZGF0YS1mb3JtXCIgYWN0aW9uPVwieyUgdXJsICdjb3JlOnR0ZXN0JyAlfVwiIG1ldGhvZD0ncG9zdCcgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgPCEtLSB7JSBjc3JmX3Rva2VuICV9IC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDF8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQyfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8Yj5TVEFUSVNUSUNTPC9iPjxicj48YnI+XG4gICAgICAgICAgICAgICAgPGI+Y3JpdGljYWwgdDo8L2I+IDxzcGFuIGlkPVwiY3JpdF90X3ZhbHVlXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5zaWcgbGV2ZWwgKCYjOTQ1Oyk6PC9iPiA8c3BhbiBpZD1cInNpZy1sZXZlbFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPGI+dC12YWx1ZTo8L2I+IDxzcGFuIGlkPVwidF92YWx1ZVwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5wLXZhbHVlOjwvYj4ge3sgdGVzdF9yZXN1bHRzLnBfdmFsdWUgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZGY6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZGYgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZWZmZWN0IHNpemU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZWZmZWN0X3NpemUgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDxiPm5jcDo8L2I+IDxzcGFuIGlkPVwibmNwXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QW5hbHl6ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIG9uY2xpY2s9XCJjbGVhckZvcm0oKVwiPkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4OyBwYWRkaW5nOjEwcHg7IG1pbi13aWR0aDozMDBweDtcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAxPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDI8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGI+TWVhbjwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPlNEPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+TjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj48IS0tIGNsb3NlIGVudGVyLWRhdGEgZGl2IC0tPlxuICAgICAgICA8cD48L3A+PGJyPlxuICAgICAgPC9kaXY+IDwhLS0gY29sdW1uIGVuZCAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuXG4gICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTFcIiBjaGVja2VkPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0xXCI+SHlwb3RoZXNpcyBUZXN0aW5nPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMlwiPlBQVjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0zXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTNcIj5ST0M8L2xhYmVsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8SHlwb3RoZXNpc0NvbXBvbmVudCAvPiBcbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgaHlwb3RoZXNpcyB0ZXN0aW5nIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFBQVkNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBQUFYgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8Uk9DQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFJPQyAtLT5cblxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgIDwvZGl2PiAgPCEtLSBlbmQgdGFiYmVkIC0tPlxuICAgICAgICBcbiAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG4gICAgPC9kaXY+IDwhLS0gZW5kIGNvbHVtbiAtLT5cbiAgPC9kaXY+IDwhLS0gZW5kIHJvdyAtLT5cblxuXG4gICAgPGRpdiBpZD1cIlNtYWxsU2NyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDBweDtcIj4gIDwhLS0gYnVmZmVyIHNwYWNlIGZvciBzbWFsbCBzY3JlZW5zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxicj48YnI+PGJyPlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG5cbiAgICA8YSBuYW1lPVwibW9yZS1pbmZvXCI+PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgIDxoND5Nb3JlIGluZm9ybWF0aW9uPC9oND5cblxuICAgICAgVGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0LCBvciB1bmVxdWFsIHZhcmlhbmNlcyA8aT50PC9pPi10ZXN0LCBjYW4gdGVzdCBoeXBvdGhlc2VzIHN1Y2ggYXMgd2hldGhlciB0aGUgbWVhbnMgb2YgdHdvIGluZGVwZW5kZW50IG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHBvcHVsYXRpb25zIGFyZSBlcXVhbC4gV2hpbGUgdGhlIGNvbW1vbmx5LXVzZWQgU3R1ZGVudCA8aT50PC9pPi10ZXN0IHJlcXVpcmVzIHRoYXQgdGhlIHR3byBzYW1wbGVzIHNoYXJlIGVxdWFsIHZhcmlhbmNlcyBhbmQgZXF1YWwgc2FtcGxlIHNpemVzLCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgZG9lcyBub3QgaGF2ZSB0aGlzIHJlcXVpcmVtZW50LiBSZXNlYXJjaGVycyBhcmd1ZSB0aGF0IHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBpcyBtb3JlIHZlcnNhdGlsZSBhbmQgc2hvdWxkIGluc3RlYWQgYmUgdXNlZCBieSBkZWZhdWx0LjxzdXA+MSwyPC9zdXA+XG4gICAgICA8YnI+PGJyPlxuICAgICAgU3RhdGlzdGljYWwgcmlnb3IgY2FuIGJlIGFjaGlldmVkIHdpdGggPGk+dDwvaT4tdGVzdHMsIHlldCB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIGlzIHNldCBhcmJpdHJhcmlseS4gV2hpbGUgbG93ZXJpbmcgc2lnbmlmaWNhbmNlIGxldmVscyBtaXRpZ2F0ZXMgZmFsc2UgcG9zaXRpdmVzICgmIzk0NTspLCB0aGUgcHJvYmFiaWxpdHkgb2YgZmFsc2UgbmVnYXRpdmVzICgmIzk0NjspIGluY3JlYXNlcywgYW5kIHRlc3RzIG1heSBmYWlsIHRvIGRldGVjdCBleGlzdGluZyBlZmZlY3RzLjxzdXA+Mzwvc3VwPlxuICAgIDwvZGl2PlxuICAgIDxicj5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiV2hpdGVXaW5kb3dcIj5cblxuICAgICAgPGg0PlJlZmVyZW5jZXM8L2g0PlxuXG4gICAgICAxLiBEYWhpcnUsIFQuIFAtdmFsdWUsIGEgdHJ1ZSB0ZXN0IG9mIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZT8gQSBjYXV0aW9uYXJ5IG5vdGUuIDxpPkFubmFscyBvZiBJYmFkYW4gUG9zdGdyYWR1YXRlIE1lZGljaW5lLjwvaT4gMjAwOCwgPGk+NjwvaT4oMSk6IDIx4oCTMjYuXG4gICAgICA8YnI+XG4gICAgICAyLiBEZWxhY3JlLCBNLjsgTGFrZW5zLCBELjsgTGV5cywgQy4gV2h5IFBzeWNob2xvZ2lzdHMgU2hvdWxkIGJ5IERlZmF1bHQgVXNlIFdlbGNo4oCZcyB0LXRlc3QgSW5zdGVhZCBvZiBTdHVkZW504oCZcyB0LXRlc3QuIDxpPkludGVybmF0aW9uYWwgUmV2aWV3IG9mIFNvY2lhbCBQc3ljaG9sb2d5LjwvaT4gMjAxNywgPGk+MzA8L2k+KDEpLCA5MuKAkzEwMS5cbiAgICAgIDxicj5cbiAgICAgIDMuIEJlbmphbWluLCBELkouOyBCZXJnZXIsIEouTy47IEpvaGFubmVzc29uLCBNLiBldCBhbC4gUmVkZWZpbmUgc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlLiA8aT5OYXR1cmUgSHVtYW4gQmVoYXZpb3VyLjwvaT4gMjAxOCwgPGk+MjwvaT4sIDbigJMxMC5cbiAgICAgIDxicj5cbiAgICAgIDQuIENvbHF1aG91biwgRC4gQW4gaW52ZXN0aWdhdGlvbiBvZiB0aGUgZmFsc2UgZGlzY292ZXJ5IHJhdGUgYW5kIHRoZSBtaXNpbnRlcnByZXRhdGlvbiBvZiBwLXZhbHVlcy4gPGk+Um95YWwgU29jaWV0eSBPcGVuIFNjaWVuY2UuPC9pPiAyMDE0LCA8aT4xPC9pPigzKTogMTQwMjE2LlxuXG4gIDwvZGl2PiAgPCEtLSBjb250YWluZXIgLS0+ICAgXG5cbiBcbiAgICA8IS0tIDxIeXBvdGhlc2lzQ29tcG9uZW50IHYtc2hvdz1cInZhbHVlMVwiIG1zZz1cIlwiLz4gLS0+XG4gICAgPCEtLSA8cCBpZD1cImRlbW9cIiBAY2xpY2s9XCJteUZ1bmN0aW9uXCI+PGI+Q0hBTkdFIEFMUEhBPC9iPjwvcD4gLS0+XG4gICAgPCEtLSA8UFBWQ29tcG9uZW50IHYtc2hvdz1cInZhbHVlMVwiIG1zZz1cIlRoaXMgaXMgdGhlIFBQViB3aW5kb3chXCIvPiAtLT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjRcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcbmltcG9ydCB0dGVzdENoYXJ0RGF0YSBmcm9tICcuL3R0ZXN0LWNoYXJ0LWRhdGEuanMnXG5cbmltcG9ydCBIeXBvdGhlc2lzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBQUFZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWUnXG5pbXBvcnQgUk9DQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnIFxuXG4vLyBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RvcmUsXG4gIG5hbWU6ICdBcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgSHlwb3RoZXNpc0NvbXBvbmVudCxcbiAgICBQUFZDb21wb25lbnQsXG4gICAgUk9DQ29tcG9uZW50LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHR0ZXN0Q2hhcnREYXRhOiB0dGVzdENoYXJ0RGF0YSxcbiAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50LFxuICAgICAgdHRlc3RDaGFydDogbnVsbCxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID4gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gLTMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTUFMTEVSXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAzLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQklHR0VSXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVTdGF0ZScpO1xuICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xuICAgIH0sXG4gICAgZHJhd0FscGhhQ3VydmU6IGZ1bmN0aW9uKCl7ICAvLyBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSlcblxuICAgICAgbGV0IGdyb3VwMSA9IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxO1xuICAgICAgbGV0IGNyaXRfdF92YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuXG4gICAgICAvLyBGaWxsIHRoZSBhcmVhIHVuZGVyIHRoZSBjdXJ2ZSByZXByZXNlbnRpbmcgYWxwaGEuXG4gICAgICBsZXQgYWxwaGFfY3VydmUgPSBbXTtcbiAgICAgIC8vIHRoaXMgZGF0YXBvaW50IGNvbm5lY3RzIHdpdGggdGhlIGNyaXRpY2FsIHQgdmVydGljYWwgbGluZVxuICAgICAgYWxwaGFfY3VydmUucHVzaCh7eDogY3JpdF90X3ZhbHVlLCB5OiB0aGlzLnRfRGlzdHJpYihjcml0X3RfdmFsdWUsIGdyb3VwMS5kZil9KTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBncm91cDEuZGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ3JvdXAxLmRpc3RbaV1bJ3gnXSA+IGNyaXRfdF92YWx1ZSl7XG4gICAgICAgICAgYWxwaGFfY3VydmUucHVzaCh7eDogZ3JvdXAxLmRpc3RbaV1bJ3gnXSwgeTogZ3JvdXAxLmRpc3RbaV1bJ3knXX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbM10uZGF0YSA9IGFscGhhX2N1cnZlOyAgLy8gd2FzIFszXVsnZGF0YSddXG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcbiAgICBkcmF3QmV0YUN1cnZlOiBmdW5jdGlvbigpeyAgLy8gZnVuY3Rpb24oZ3JvdXAyLCBjcml0X3RfdmFsdWUpXG5cbiAgICAgIGxldCBncm91cDIgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMjtcbiAgICAgIGxldCBjcml0X3RfdmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICAgIGxldCBuY3AgPSB0aGlzLnN0b3JlLnN0YXRlLm5jcDtcblxuICAgICAgLy8gRmlsbCB0aGUgYXJlYSB1bmRlciB0aGUgY3VydmUgcmVwcmVzZW50aW5nIGJldGEuXG4gICAgICBsZXQgYmV0YV9jdXJ2ZSA9IFtdO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGdyb3VwMi5kaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChncm91cDIuZGlzdFtpXVsneCddIDwgY3JpdF90X3ZhbHVlKXtcbiAgICAgICAgICBiZXRhX2N1cnZlLnB1c2goe3g6IGdyb3VwMi5kaXN0W2ldWyd4J10sIHk6IGdyb3VwMi5kaXN0W2ldWyd5J119KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJiZXRhX2N1cnZlOlwiLCBiZXRhX2N1cnZlKTtcblxuICAgICAgLy8gdGhpcyBkYXRhcG9pbnQgY29ubmVjdHMgd2l0aCB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXG4gICAgICBiZXRhX2N1cnZlLnB1c2goe3g6IGNyaXRfdF92YWx1ZSwgeTogdGhpcy50X0Rpc3RyaWIoY3JpdF90X3ZhbHVlLW5jcCwgZ3JvdXAyLmRmKX0pOyAvLyBuY3AgYWN0cyBhcyBvZmZzZXRcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1s0XS5kYXRhID0gYmV0YV9jdXJ2ZTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgdF9EaXN0cmliOiBmdW5jdGlvbih0LCBkb2Ype1xuICAgICAgLy8gRm9yIGEgZ2l2ZW4geCwgcmV0dXJuIHRoZSB0IGRpc3RyaWJ1dGlvbiB5IHZhbHVlLlxuICAgICAgbGV0IHkgPSAobWF0aC5nYW1tYSgoZG9mKzEpLzIpLyhtYXRoLnNxcnQoZG9mKm1hdGgucGkpKm1hdGguZ2FtbWEoZG9mLzIpKSkgKiAoMSsoKHQqKjIpL2RvZikpKiooLShkb2YrMSkvMik7XG4gICAgICByZXR1cm4gbWF0aC5yb3VuZCh5LCA2KTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMudHRlc3RDaGFydCA9IG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHRlc3QtY2hhcnQnKSwgdGhpcy50dGVzdENoYXJ0RGF0YSk7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcblxuICAgIHRoaXMuZHJhd0FscGhhQ3VydmUoKTtcbiAgICB0aGlzLmRyYXdCZXRhQ3VydmUoKTtcbiAgfSxcbn1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLyogI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSAqL1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuaDQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuI0NvbnRhaW5lcldpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA3MHB4O1xufVxuXG4jV2hpdGVXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI0JsYWNrV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNPcmFuZ2VXaW5kb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL3dlbGNocy5wbmdcIik7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG5cbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xuICAvKiBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuI3RpdGxlbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuI3RpdGxlbmFtZS1zdWJ7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cblxuLm1vcmUtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7ICAvKiBwcmV2aW91c2x5IGZmNzA0MyAqL1xufVxuXG5cbi5ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuLmFzdGVyaXNrRmllbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2xpZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICAvKiB3aWR0aDogNTI1cHg7ICovXG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uZXJyb3JfYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cblxuLyogQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiOyAqL1xuXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcbn1cblxuLnRhYmJlZCB7XG4vKiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bzsgICovXG59XG5cbi50YWJiZWQgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJiZWQgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4udGFiYmVkID4gbGFiZWw6aG92ZXIsXG4udGFiYmVkID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLnRhYnMge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4udGFicyA+IGRpdiB7XG4gIC8qIHdpZHRoOiA3MDBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG5cbiN0YWItbmF2LTE6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDEpLFxuI3RhYi1uYXYtMjpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMil7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4jdGFiLW5hdi0zOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgzKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMHB4O1xufVxuLmdyaWQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGlhZ3JhbS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbi5lbnRlci1kYXRhe1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4vKiBoaWRlIGZvciBsYXJnZXIgc2NyZWVucyAqL1xuI1NtYWxsU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIHNob3cgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICNTbWFsbFNjcmVlbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLyogcmVtb3ZlIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjQ29udGFpbmVyV2luZG93e1xuICAgIHBhZGRpbmc6IDUwcHggNXB4IDUwcHggNXB4O1xuICB9XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4b35f61fe9441999"; }
/******/ }();
/******/ 
/******/ }
);
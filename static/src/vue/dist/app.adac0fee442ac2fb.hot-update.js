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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(Number(this.slideValue));\n      let new_crit_t = this.convertScreenXToChartX(Number(this.slideValue), 0, 100, this.store.state.axes.x_min, this.store.state.axes.x_max, 0); // 13 is half width of slider thumb \n      console.log(\"CONVERT:\", new_crit_t);\n      this.ttestChartData.options.annotation.annotations[1].value = new_crit_t;\n      this.ttestChart.update();\n    },\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  computed: {\n    computedLeft: function () {\n      return \"51px\";\n    }\n  },\n  // convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth){\n  //   return (x + (thumbOffsetWidth/2))/(x2 - x1)*(chart_x2-chart_x1) + chart_x1;\n  // },\n\n  // initThumb: function (chart_x_min, chart_x_max, thumbOffsetWidth, crit_t_init){\n  //   // Initial position of the slider thumb.\n  //   console.log(\"crit_t_init:\", crit_t_init);\n  //   var points = this.ttestChart.chart.getDatasetMeta(0).data;\n  //   var x1 = points[0]._model.x;\n  //   var x2 = points[1]._model.x;\n\n  //   // convert chart x value to the x screen position for the slider thumb\n  //   // var offset = thumb.offsetWidth/2; //.59;  // previously: offset=3\n  //   var offset = thumbOffsetWidth/2; //.59;  // previously: offset=3\n  //   var new_thumb = this.convertChartXToScreenX(crit_t_init, chart_x_min, chart_x_max, x1, x2, offset);\n  //   // elem(\"thumb\").style.left = new_thumb + \"px\";\n\n  //   // BELOW IS NEW\n  //   // adjust the slider\n  //   // elem(\"slider\").style.left = x1 + \"px\";\n  //   // elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n  //   // updateState(crit_t_init, df, ncp);\n  //   return new_thumb;\n  // },\n\n  // moveBar: function(){\n\n  //   // get absolute x,y coordinates of the chart on the screen\n  //   let points = this.ttestChart.chart.getDatasetMeta(0).data;\n  //   let x1 = points[0]._model.x;\n  //   let y1 = points[0]._model.y;\n  //   let x2 = points[1]._model.x;\n  //   let y2 = points[1]._model.y;\n\n  //   // adjust the slider\n  //   elem(\"slider\").style.left = x1 + \"px\";\n  //   elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n  //   // draw the critical t vertical line\n  //   crit_t_value = round(convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n  //   updateState(crit_t_value, df, ncp);\n\n  // },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0cy4gVGhlIGRhdGEgYXJlIGFzc3VtZWQgdG8gYmUgbm9ybWFsbHkgZGlzdHJpYnV0ZWQuXG4gICAgICA8YSBocmVmPScjbW9yZS1pbmZvJz5GaW5kIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuICAgIDwvZGl2PlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJDb250YWluZXJXaW5kb3dcIj5cblxuICAgIDxwPjxicj48cD48YnI+PHA+PGJyPjxwPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cbiAgICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICAgIDwhLS0gPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIj48L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIiAvPlxuICAgICAgICA8L2Rpdj4gIC0tPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZWNvbnRhaW5lclwiIGlkPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBjbGFzcz1cInNsaWRlclwiIGlkPVwibXlSYW5nZVwiIHYtbW9kZWw9XCJzbGlkZVZhbHVlXCIgdi1vbjppbnB1dD1cInNsaWRlZnVuY1wiIHYtYmluZDpzdHlsZT1cInsgbGVmdDogY29tcHV0ZWRMZWZ0IH1cIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwidHRlc3QtY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPjxicj48cD48YnI+XG4gICAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG5cbiAgICAgICAgPGI+PHNwYW4gaWQ9XCJtZXNzYWdlXCI+PC9zcGFuPjwvYj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRlci1kYXRhXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJkYXRhLWZvcm1cIiBhY3Rpb249XCJ7JSB1cmwgJ2NvcmU6dHRlc3QnICV9XCIgbWV0aG9kPSdwb3N0JyBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8IS0tIHslIGNzcmZfdG9rZW4gJX0gLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0MXxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDJ8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxiPlNUQVRJU1RJQ1M8L2I+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5jcml0aWNhbCB0OjwvYj4gPHNwYW4gaWQ9XCJjcml0X3RfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+c2lnIGxldmVsICgmIzk0NTspOjwvYj4gPHNwYW4gaWQ9XCJzaWctbGV2ZWxcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8Yj50LXZhbHVlOjwvYj4gPHNwYW4gaWQ9XCJ0X3ZhbHVlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5wLXZhbHVlOjwvYj4ge3sgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlIH19PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZGY6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZGYgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZWZmZWN0IHNpemU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZWZmZWN0X3NpemUgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDxiPm5jcDo8L2I+IDxzcGFuIGlkPVwibmNwXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5uY3AgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BbmFseXplPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz1cImNsZWFyRm9ybSgpXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IHBhZGRpbmc6MTBweDsgbWluLXdpZHRoOjMwMHB4O1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDE8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDI8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDxiPk1lYW48L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5TRDwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPk48L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+PCEtLSBjbG9zZSBlbnRlci1kYXRhIGRpdiAtLT5cbiAgICAgICAgPHA+PC9wPjxicj5cbiAgICAgIDwvZGl2PiA8IS0tIGNvbHVtbiBlbmQgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cblxuICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0xXCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMVwiPkh5cG90aGVzaXMgVGVzdGluZzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0yXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTJcIj5QUFY8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0zXCI+Uk9DPC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPEh5cG90aGVzaXNDb21wb25lbnQgLz4gXG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIGh5cG90aGVzaXMgdGVzdGluZyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxQUFZDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUFBWIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFJPQ0NvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBST0MgLS0+XG5cbiAgICAgICAgPC9kaXY+IDwhLS0gZW5kIHRhYnMgLS0+XG4gICAgICA8L2Rpdj4gIDwhLS0gZW5kIHRhYmJlZCAtLT5cbiAgICAgICAgXG4gICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuICAgIDwvZGl2PiA8IS0tIGVuZCBjb2x1bW4gLS0+XG4gIDwvZGl2PiA8IS0tIGVuZCByb3cgLS0+XG5cblxuICAgIDxkaXYgaWQ9XCJTbWFsbFNjcmVlblwiIHN0eWxlPVwiaGVpZ2h0OiAxMjAwcHg7XCI+ICA8IS0tIGJ1ZmZlciBzcGFjZSBmb3Igc21hbGwgc2NyZWVucyAtLT5cbiAgICA8L2Rpdj5cbiAgICA8YnI+PGJyPjxicj5cbiAgPC9kaXY+XG5cblxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuXG4gICAgPGEgbmFtZT1cIm1vcmUtaW5mb1wiPjwvYT5cbiAgICA8ZGl2IGNsYXNzPVwibW9yZS1pbmZvXCI+XG4gICAgICA8aDQ+TW9yZSBpbmZvcm1hdGlvbjwvaDQ+XG5cbiAgICAgIFRoZSBXZWxjaCdzIDxpPnQ8L2k+LXRlc3QsIG9yIHVuZXF1YWwgdmFyaWFuY2VzIDxpPnQ8L2k+LXRlc3QsIGNhbiB0ZXN0IGh5cG90aGVzZXMgc3VjaCBhcyB3aGV0aGVyIHRoZSBtZWFucyBvZiB0d28gaW5kZXBlbmRlbnQgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcG9wdWxhdGlvbnMgYXJlIGVxdWFsLiBXaGlsZSB0aGUgY29tbW9ubHktdXNlZCBTdHVkZW50IDxpPnQ8L2k+LXRlc3QgcmVxdWlyZXMgdGhhdCB0aGUgdHdvIHNhbXBsZXMgc2hhcmUgZXF1YWwgdmFyaWFuY2VzIGFuZCBlcXVhbCBzYW1wbGUgc2l6ZXMsIHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBkb2VzIG5vdCBoYXZlIHRoaXMgcmVxdWlyZW1lbnQuIFJlc2VhcmNoZXJzIGFyZ3VlIHRoYXQgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGlzIG1vcmUgdmVyc2F0aWxlIGFuZCBzaG91bGQgaW5zdGVhZCBiZSB1c2VkIGJ5IGRlZmF1bHQuPHN1cD4xLDI8L3N1cD5cbiAgICAgIDxicj48YnI+XG4gICAgICBTdGF0aXN0aWNhbCByaWdvciBjYW4gYmUgYWNoaWV2ZWQgd2l0aCA8aT50PC9pPi10ZXN0cywgeWV0IHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgaXMgc2V0IGFyYml0cmFyaWx5LiBXaGlsZSBsb3dlcmluZyBzaWduaWZpY2FuY2UgbGV2ZWxzIG1pdGlnYXRlcyBmYWxzZSBwb3NpdGl2ZXMgKCYjOTQ1OyksIHRoZSBwcm9iYWJpbGl0eSBvZiBmYWxzZSBuZWdhdGl2ZXMgKCYjOTQ2OykgaW5jcmVhc2VzLCBhbmQgdGVzdHMgbWF5IGZhaWwgdG8gZGV0ZWN0IGV4aXN0aW5nIGVmZmVjdHMuPHN1cD4zPC9zdXA+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuXG5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJXaGl0ZVdpbmRvd1wiPlxuXG4gICAgICA8aDQ+UmVmZXJlbmNlczwvaDQ+XG5cbiAgICAgIDEuIERhaGlydSwgVC4gUC12YWx1ZSwgYSB0cnVlIHRlc3Qgb2Ygc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlPyBBIGNhdXRpb25hcnkgbm90ZS4gPGk+QW5uYWxzIG9mIEliYWRhbiBQb3N0Z3JhZHVhdGUgTWVkaWNpbmUuPC9pPiAyMDA4LCA8aT42PC9pPigxKTogMjHigJMyNi5cbiAgICAgIDxicj5cbiAgICAgIDIuIERlbGFjcmUsIE0uOyBMYWtlbnMsIEQuOyBMZXlzLCBDLiBXaHkgUHN5Y2hvbG9naXN0cyBTaG91bGQgYnkgRGVmYXVsdCBVc2UgV2VsY2jigJlzIHQtdGVzdCBJbnN0ZWFkIG9mIFN0dWRlbnTigJlzIHQtdGVzdC4gPGk+SW50ZXJuYXRpb25hbCBSZXZpZXcgb2YgU29jaWFsIFBzeWNob2xvZ3kuPC9pPiAyMDE3LCA8aT4zMDwvaT4oMSksIDky4oCTMTAxLlxuICAgICAgPGJyPlxuICAgICAgMy4gQmVuamFtaW4sIEQuSi47IEJlcmdlciwgSi5PLjsgSm9oYW5uZXNzb24sIE0uIGV0IGFsLiBSZWRlZmluZSBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2UuIDxpPk5hdHVyZSBIdW1hbiBCZWhhdmlvdXIuPC9pPiAyMDE4LCA8aT4yPC9pPiwgNuKAkzEwLlxuICAgICAgPGJyPlxuICAgICAgNC4gQ29scXVob3VuLCBELiBBbiBpbnZlc3RpZ2F0aW9uIG9mIHRoZSBmYWxzZSBkaXNjb3ZlcnkgcmF0ZSBhbmQgdGhlIG1pc2ludGVycHJldGF0aW9uIG9mIHAtdmFsdWVzLiA8aT5Sb3lhbCBTb2NpZXR5IE9wZW4gU2NpZW5jZS48L2k+IDIwMTQsIDxpPjE8L2k+KDMpOiAxNDAyMTYuXG5cbiAgPC9kaXY+ICA8IS0tIGNvbnRhaW5lciAtLT4gICBcblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuLy8gaW1wb3J0IHNsaWRlciBmcm9tICdqcXVlcnktdWktc2xpZGVyJztcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjQsIHRoZW4gdHJpZWQgMi45LjMuIHNvLGUgc2F5IDIuOS40IGRvZXNuJ3Qgd29yay5cbmltcG9ydCBjaGFydGpzUGx1Z2luQW5ub3RhdGlvbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiOyAvLyBucG0gaW5zdGFsbCBjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uQDAuNS43IC0tc2F2ZSAgICA8PDwgdXNlZCB0aGlzLiBuZWNlc3Nhcnk/XG4vLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5pbXBvcnQgdHRlc3RDaGFydERhdGEgZnJvbSAnLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XG5cblxuaW1wb3J0IEh5cG90aGVzaXNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlJ1xuaW1wb3J0IFBQVkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBST0NDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZScgXG5cbi8vIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdG9yZSxcbiAgbmFtZTogJ0FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIeXBvdGhlc2lzQ29tcG9uZW50LFxuICAgIFBQVkNvbXBvbmVudCxcbiAgICBST0NDb21wb25lbnQsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXG4gICAgICB0dGVzdENoYXJ0OiBudWxsLFxuICAgICAgdGh1bWI6IG51bGwsXG4gICAgICBzbGlkZXJWYWx1ZTogbnVsbCxcbiAgICAgIHNsaWRlckVsZW06IG51bGwsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICAgIGRyYXdBbHBoYUN1cnZlOiBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSl7ICBcbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IHdlbGNocy5nZXRBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuICAgICAgbGV0IGJldGFfY3VydmUgPSB3ZWxjaHMuZHJhd0JldGFDdXJ2ZSAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbNF0uZGF0YSA9IGJldGFfY3VydmU7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIGNvbnZlcnRDaGFydFhUb1NjcmVlblg6IGZ1bmN0aW9uICh4LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KXtcbiAgICAvL3JldHVybiBtYXRoLnJvdW5kKCgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldCwwKTtcbiAgICByZXR1cm4gKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0O1xuICAgIH0sXG5cbiAgICBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAgICAgcmV0dXJuICh4ICsgKHRodW1iT2Zmc2V0V2lkdGgvMikpLyh4MiAtIHgxKSooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gICAgfSxcblxuICAgIHNsaWRlZnVuYygpe1xuICAgICAgY29uc29sZS5sb2coXCJTTElERUZVTkNcIiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgpO1xuICAgICAgY29uc29sZS5sb2coTnVtYmVyKHRoaXMuc2xpZGVWYWx1ZSkpO1xuICAgICAgbGV0IG5ld19jcml0X3QgPSB0aGlzLmNvbnZlcnRTY3JlZW5YVG9DaGFydFgoTnVtYmVyKHRoaXMuc2xpZGVWYWx1ZSksIDAsIDEwMCwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgsIDApOyAvLyAxMyBpcyBoYWxmIHdpZHRoIG9mIHNsaWRlciB0aHVtYiBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ09OVkVSVDpcIiwgbmV3X2NyaXRfdCk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IG5ld19jcml0X3Q7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIGluaXRUaHVtYigpe1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAgICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgICAgdmFyIHgyID0gcG9pbnRzWzFdLl9tb2RlbC54O1xuICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLmxlZnQgPSB4MSArIFwicHhcIjtcbiAgICAgIHRoaXMuc2xpZGVyRWxlbS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgfSxcblxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFwiNTFweFwiO1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gY29udmVydFNjcmVlblhUb0NoYXJ0WDogZnVuY3Rpb24gKHgsIHgxLCB4MiwgY2hhcnRfeDEsIGNoYXJ0X3gyLCB0aHVtYk9mZnNldFdpZHRoKXtcbiAgLy8gICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgLy8gfSxcblxuXG4gIC8vIGluaXRUaHVtYjogZnVuY3Rpb24gKGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgdGh1bWJPZmZzZXRXaWR0aCwgY3JpdF90X2luaXQpe1xuICAvLyAgIC8vIEluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHNsaWRlciB0aHVtYi5cbiAgLy8gICBjb25zb2xlLmxvZyhcImNyaXRfdF9pbml0OlwiLCBjcml0X3RfaW5pdCk7XG4gIC8vICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAvLyAgIHZhciB4MSA9IHBvaW50c1swXS5fbW9kZWwueDtcbiAgLy8gICB2YXIgeDIgPSBwb2ludHNbMV0uX21vZGVsLng7XG5cbiAgLy8gICAvLyBjb252ZXJ0IGNoYXJ0IHggdmFsdWUgdG8gdGhlIHggc2NyZWVuIHBvc2l0aW9uIGZvciB0aGUgc2xpZGVyIHRodW1iXG4gIC8vICAgLy8gdmFyIG9mZnNldCA9IHRodW1iLm9mZnNldFdpZHRoLzI7IC8vLjU5OyAgLy8gcHJldmlvdXNseTogb2Zmc2V0PTNcbiAgLy8gICB2YXIgb2Zmc2V0ID0gdGh1bWJPZmZzZXRXaWR0aC8yOyAvLy41OTsgIC8vIHByZXZpb3VzbHk6IG9mZnNldD0zXG4gIC8vICAgdmFyIG5ld190aHVtYiA9IHRoaXMuY29udmVydENoYXJ0WFRvU2NyZWVuWChjcml0X3RfaW5pdCwgY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB4MSwgeDIsIG9mZnNldCk7XG4gIC8vICAgLy8gZWxlbShcInRodW1iXCIpLnN0eWxlLmxlZnQgPSBuZXdfdGh1bWIgKyBcInB4XCI7XG5cbiAgLy8gICAvLyBCRUxPVyBJUyBORVdcbiAgLy8gICAvLyBhZGp1c3QgdGhlIHNsaWRlclxuICAvLyAgIC8vIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUubGVmdCA9IHgxICsgXCJweFwiO1xuICAvLyAgIC8vIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUud2lkdGggPSB4MiAtIHgxICsgXCJweFwiO1xuICAgIFxuICAvLyAgIC8vIHVwZGF0ZVN0YXRlKGNyaXRfdF9pbml0LCBkZiwgbmNwKTtcbiAgLy8gICByZXR1cm4gbmV3X3RodW1iO1xuICAvLyB9LFxuXG5cbiAgLy8gbW92ZUJhcjogZnVuY3Rpb24oKXtcblxuICAvLyAgIC8vIGdldCBhYnNvbHV0ZSB4LHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNoYXJ0IG9uIHRoZSBzY3JlZW5cbiAgLy8gICBsZXQgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gIC8vICAgbGV0IHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAvLyAgIGxldCB5MSA9IHBvaW50c1swXS5fbW9kZWwueTtcbiAgLy8gICBsZXQgeDIgPSBwb2ludHNbMV0uX21vZGVsLng7XG4gIC8vICAgbGV0IHkyID0gcG9pbnRzWzFdLl9tb2RlbC55O1xuXG4gIC8vICAgLy8gYWRqdXN0IHRoZSBzbGlkZXJcbiAgLy8gICBlbGVtKFwic2xpZGVyXCIpLnN0eWxlLmxlZnQgPSB4MSArIFwicHhcIjtcbiAgLy8gICBlbGVtKFwic2xpZGVyXCIpLnN0eWxlLndpZHRoID0geDIgLSB4MSArIFwicHhcIjtcblxuICAvLyAgIC8vIGRyYXcgdGhlIGNyaXRpY2FsIHQgdmVydGljYWwgbGluZVxuICAvLyAgIGNyaXRfdF92YWx1ZSA9IHJvdW5kKGNvbnZlcnRTY3JlZW5YVG9DaGFydFgoc2xpZGVyUG9zaXRpb25MZWZ0LCB4MSwgeDIsIGF4ZXMueF9taW4sIGF4ZXMueF9tYXgsIHRodW1iLm9mZnNldFdpZHRoKSk7XG4gIC8vICAgdXBkYXRlU3RhdGUoY3JpdF90X3ZhbHVlLCBkZiwgbmNwKTtcblxuICAvLyB9LFxuICBtb3VudGVkKCkge1xuICAgIENoYXJ0LnBsdWdpbnMucmVnaXN0ZXIoY2hhcnRqc1BsdWdpbkFubm90YXRpb24pXG4gICAgdGhpcy50dGVzdENoYXJ0ID0gbmV3IENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dGVzdC1jaGFydCcpLCB0aGlzLnR0ZXN0Q2hhcnREYXRhKTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IFt7eDogLTQuNzUzLCB5OiAwfSwge3g6IDcuMjMyLCB5OiAwfV07XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5taW4gPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWluO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWF4ID0gdGhpcy5zdG9yZS5zdGF0ZS5heGVzLm1heDsgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5tYXggPSAwLjU7XG5cblxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLmxhYmVsLmNvbnRlbnQgPSAncCA9ICcgKyB0aGlzLnN0b3JlLnN0YXRlLnBfdmFsdWU7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMF0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWU7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0uY29udGVudCA9ICdcXHUwM0IxJyArIHRoaXMuc3RvcmUuc3RhdGUuYWxwaGE7IFxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWU7XG4gICAgXG5cbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMV0uZGF0YSA9IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLmRpc3Q7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzJdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcblxuICAgIHRoaXMuZHJhd0FscGhhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlKTtcbiAgICB0aGlzLmRyYXdCZXRhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlLHRoaXMuc3RvcmUuc3RhdGUubmNwKTtcblxuXG4gICAgdGhpcy5zbGlkZXJFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215UmFuZ2UnKTtcbiAgICB0aGlzLmluaXRUaHVtYigpO1xuXG4gIH0sXG5cbn1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4uc2xpZGVjb250YWluZXIge1xufVxuXG4vKiBUaGUgc2xpZGVyIGl0c2VsZiAqL1xuLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbC13aWR0aCAqL1xuICBoZWlnaHQ6IDI1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZDogI2QzZDNkMzsgLyogR3JleSBiYWNrZ3JvdW5kICovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXG4gIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyogLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuXG5cbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuLnNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbn1cblxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDI2cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLyogdG9wOiAtNXB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyNnB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLyogI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSAqL1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuaDQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuI0NvbnRhaW5lcldpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA3MHB4O1xufVxuXG4jV2hpdGVXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI0JsYWNrV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNPcmFuZ2VXaW5kb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL3dlbGNocy5wbmdcIik7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG5cbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xuICAvKiBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuI3RpdGxlbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuI3RpdGxlbmFtZS1zdWJ7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cblxuLm1vcmUtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7ICAvKiBwcmV2aW91c2x5IGZmNzA0MyAqL1xufVxuXG5cbi5ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuLmFzdGVyaXNrRmllbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiAuc2xpZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59ICovXG4vKiB3aWR0aDogNTI1cHg7ICovXG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "65cd1fb5e64cb0f5"; }
/******/ }();
/******/ 
/******/ }
);
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    }\n  },\n  convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n    //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n    return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n  },\n  // convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth){\n  //   return (x + (thumbOffsetWidth/2))/(x2 - x1)*(chart_x2-chart_x1) + chart_x1;\n  // },\n\n  initThumb: function (chart_x_min, chart_x_max, thumbOffsetWidth, crit_t_init) {\n    // Initial position of the slider thumb.\n    console.log(\"crit_t_init:\", crit_t_init);\n    var points = this.ttestChart.chart.getDatasetMeta(0).data;\n    var x1 = points[0]._model.x;\n    var x2 = points[1]._model.x;\n\n    // convert chart x value to the x screen position for the slider thumb\n    // var offset = thumb.offsetWidth/2; //.59;  // previously: offset=3\n    var offset = thumbOffsetWidth / 2; //.59;  // previously: offset=3\n    var new_thumb = this.convertChartXToScreenX(crit_t_init, chart_x_min, chart_x_max, x1, x2, offset);\n    // elem(\"thumb\").style.left = new_thumb + \"px\";\n\n    // BELOW IS NEW\n    // adjust the slider\n    // elem(\"slider\").style.left = x1 + \"px\";\n    // elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n    // updateState(crit_t_init, df, ncp);\n    return new_thumb;\n  },\n  // moveBar: function(){\n\n  //   // get absolute x,y coordinates of the chart on the screen\n  //   let points = this.ttestChart.chart.getDatasetMeta(0).data;\n  //   let x1 = points[0]._model.x;\n  //   let y1 = points[0]._model.y;\n  //   let x2 = points[1]._model.x;\n  //   let y2 = points[1]._model.y;\n\n  //   // adjust the slider\n  //   elem(\"slider\").style.left = x1 + \"px\";\n  //   elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n  //   // draw the critical t vertical line\n  //   crit_t_value = round(convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n  //   updateState(crit_t_value, df, ncp);\n\n  // },\n  mounted() {\n    // let volume = document.querySelector(\"#thumb\");\n    // volume.addEventListener(\"change\", function(e) {\n    // console.log(\"e:\", e.currentTarget.value / 100);\n    // });\n\n    // this.thumb = slider.querySelector('.thumb');\n    // // var sliderPositionLeft = initThumb(axes.x_min, axes.x_max, thumb.offsetWidth, crit_t_init);\n    // var sliderPositionLeft = this.initThumb(-4.753, 7.232, this.thumb.offsetWidth, this.store.state.crit_t_value);\n    // console.log(sliderPositionLeft);\n\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    var slider = document.getElementById(\"myRange\");\n    // var output = document.getElementById(\"demo\");\n    // output.innerHTML = slider.value; // Display the default slider value\n\n    // Update the current slider value (each time you drag the slider handle)\n    slider.oninput = function () {\n      console.log(this.value);\n      // this.store.state.crit_t_value = this.value;\n      // this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      // crit_t_value = round(this.convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n      console.log(\"CONVERT:\", this.convertScreenXToChartX(50, 0, 100, this.store.state.axes.x_min, this.store.state.axes.x_max, 0));\n      // this.ttestChartData.options.annotation.annotations[1].value = this.value;\n      // this.ttestChart.update();\n    };\n  },\n\n  convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n    return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0cy4gVGhlIGRhdGEgYXJlIGFzc3VtZWQgdG8gYmUgbm9ybWFsbHkgZGlzdHJpYnV0ZWQuXG4gICAgICA8YSBocmVmPScjbW9yZS1pbmZvJz5GaW5kIG1vcmUgaW5mb3JtYXRpb24uPC9hPlxuICAgIDwvZGl2PlxuICAgIDxwPjwvcD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJDb250YWluZXJXaW5kb3dcIj5cblxuICAgIDxwPjxicj48cD48YnI+PHA+PGJyPjxwPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cbiAgICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICAgIDwhLS0gPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIG9udG91Y2htb3ZlPVwibW92ZVRodW1iTW9iaWxlKGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIj48L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIiAvPlxuICAgICAgICA8L2Rpdj4gIC0tPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCIgaWQ9XCJteVJhbmdlXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cInR0ZXN0LWNoYXJ0XCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiODAwXCI+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD48YnI+PHA+PGJyPlxuICAgICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuXG4gICAgICAgIDxiPjxzcGFuIGlkPVwibWVzc2FnZVwiPjwvc3Bhbj48L2I+XG4gICAgICAgIDxicj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW50ZXItZGF0YVwiPlxuICAgICAgICAgIDxmb3JtIGlkPVwiZGF0YS1mb3JtXCIgYWN0aW9uPVwieyUgdXJsICdjb3JlOnR0ZXN0JyAlfVwiIG1ldGhvZD0ncG9zdCcgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgPCEtLSB7JSBjc3JmX3Rva2VuICV9IC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDF8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQyfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8Yj5TVEFUSVNUSUNTPC9iPjxicj48YnI+XG4gICAgICAgICAgICAgICAgPGI+Y3JpdGljYWwgdDo8L2I+IDxzcGFuIGlkPVwiY3JpdF90X3ZhbHVlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnNpZyBsZXZlbCAoJiM5NDU7KTo8L2I+IDxzcGFuIGlkPVwic2lnLWxldmVsXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPGI+dC12YWx1ZTo8L2I+IDxzcGFuIGlkPVwidF92YWx1ZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+cC12YWx1ZTo8L2I+IHt7IHRoaXMuc3RvcmUuc3RhdGUucF92YWx1ZSB9fTxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmRmOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmRmIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmVmZmVjdCBzaXplOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmVmZmVjdF9zaXplIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8Yj5uY3A6PC9iPiA8c3BhbiBpZD1cIm5jcFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUubmNwIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QW5hbHl6ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIG9uY2xpY2s9XCJjbGVhckZvcm0oKVwiPkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4OyBwYWRkaW5nOjEwcHg7IG1pbi13aWR0aDozMDBweDtcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAxPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5uIH19PGJyPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGExLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAyPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5uIH19PGJyPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGEyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8Yj5NZWFuPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+U0Q8L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5OPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwhLS0gY2xvc2UgZW50ZXItZGF0YSBkaXYgLS0+XG4gICAgICAgIDxwPjwvcD48YnI+XG4gICAgICA8L2Rpdj4gPCEtLSBjb2x1bW4gZW5kIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG5cbiAgICAgIDwhLS0geyUgaWYgdGVzdF9yZXN1bHRzICV9IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmJlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMVwiIGNoZWNrZWQ+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTFcIj5IeXBvdGhlc2lzIFRlc3Rpbmc8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0yXCI+UFBWPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtM1wiPlJPQzwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxIeXBvdGhlc2lzQ29tcG9uZW50IC8+IFxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBoeXBvdGhlc2lzIHRlc3RpbmcgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8UFBWQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFBQViAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxST0NDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUk9DIC0tPlxuXG4gICAgICAgIDwvZGl2PiA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgPC9kaXY+ICA8IS0tIGVuZCB0YWJiZWQgLS0+XG4gICAgICAgIFxuICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cbiAgICA8L2Rpdj4gPCEtLSBlbmQgY29sdW1uIC0tPlxuICA8L2Rpdj4gPCEtLSBlbmQgcm93IC0tPlxuXG5cbiAgICA8ZGl2IGlkPVwiU21hbGxTY3JlZW5cIiBzdHlsZT1cImhlaWdodDogMTIwMHB4O1wiPiAgPCEtLSBidWZmZXIgc3BhY2UgZm9yIHNtYWxsIHNjcmVlbnMgLS0+XG4gICAgPC9kaXY+XG4gICAgPGJyPjxicj48YnI+XG4gIDwvZGl2PlxuXG5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cblxuICAgIDxhIG5hbWU9XCJtb3JlLWluZm9cIj48L2E+XG4gICAgPGRpdiBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgPGg0Pk1vcmUgaW5mb3JtYXRpb248L2g0PlxuXG4gICAgICBUaGUgV2VsY2gncyA8aT50PC9pPi10ZXN0LCBvciB1bmVxdWFsIHZhcmlhbmNlcyA8aT50PC9pPi10ZXN0LCBjYW4gdGVzdCBoeXBvdGhlc2VzIHN1Y2ggYXMgd2hldGhlciB0aGUgbWVhbnMgb2YgdHdvIGluZGVwZW5kZW50IG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHBvcHVsYXRpb25zIGFyZSBlcXVhbC4gV2hpbGUgdGhlIGNvbW1vbmx5LXVzZWQgU3R1ZGVudCA8aT50PC9pPi10ZXN0IHJlcXVpcmVzIHRoYXQgdGhlIHR3byBzYW1wbGVzIHNoYXJlIGVxdWFsIHZhcmlhbmNlcyBhbmQgZXF1YWwgc2FtcGxlIHNpemVzLCB0aGUgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3QgZG9lcyBub3QgaGF2ZSB0aGlzIHJlcXVpcmVtZW50LiBSZXNlYXJjaGVycyBhcmd1ZSB0aGF0IHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBpcyBtb3JlIHZlcnNhdGlsZSBhbmQgc2hvdWxkIGluc3RlYWQgYmUgdXNlZCBieSBkZWZhdWx0LjxzdXA+MSwyPC9zdXA+XG4gICAgICA8YnI+PGJyPlxuICAgICAgU3RhdGlzdGljYWwgcmlnb3IgY2FuIGJlIGFjaGlldmVkIHdpdGggPGk+dDwvaT4tdGVzdHMsIHlldCB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIGlzIHNldCBhcmJpdHJhcmlseS4gV2hpbGUgbG93ZXJpbmcgc2lnbmlmaWNhbmNlIGxldmVscyBtaXRpZ2F0ZXMgZmFsc2UgcG9zaXRpdmVzICgmIzk0NTspLCB0aGUgcHJvYmFiaWxpdHkgb2YgZmFsc2UgbmVnYXRpdmVzICgmIzk0NjspIGluY3JlYXNlcywgYW5kIHRlc3RzIG1heSBmYWlsIHRvIGRldGVjdCBleGlzdGluZyBlZmZlY3RzLjxzdXA+Mzwvc3VwPlxuICAgIDwvZGl2PlxuICAgIDxicj5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiV2hpdGVXaW5kb3dcIj5cblxuICAgICAgPGg0PlJlZmVyZW5jZXM8L2g0PlxuXG4gICAgICAxLiBEYWhpcnUsIFQuIFAtdmFsdWUsIGEgdHJ1ZSB0ZXN0IG9mIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZT8gQSBjYXV0aW9uYXJ5IG5vdGUuIDxpPkFubmFscyBvZiBJYmFkYW4gUG9zdGdyYWR1YXRlIE1lZGljaW5lLjwvaT4gMjAwOCwgPGk+NjwvaT4oMSk6IDIx4oCTMjYuXG4gICAgICA8YnI+XG4gICAgICAyLiBEZWxhY3JlLCBNLjsgTGFrZW5zLCBELjsgTGV5cywgQy4gV2h5IFBzeWNob2xvZ2lzdHMgU2hvdWxkIGJ5IERlZmF1bHQgVXNlIFdlbGNo4oCZcyB0LXRlc3QgSW5zdGVhZCBvZiBTdHVkZW504oCZcyB0LXRlc3QuIDxpPkludGVybmF0aW9uYWwgUmV2aWV3IG9mIFNvY2lhbCBQc3ljaG9sb2d5LjwvaT4gMjAxNywgPGk+MzA8L2k+KDEpLCA5MuKAkzEwMS5cbiAgICAgIDxicj5cbiAgICAgIDMuIEJlbmphbWluLCBELkouOyBCZXJnZXIsIEouTy47IEpvaGFubmVzc29uLCBNLiBldCBhbC4gUmVkZWZpbmUgc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlLiA8aT5OYXR1cmUgSHVtYW4gQmVoYXZpb3VyLjwvaT4gMjAxOCwgPGk+MjwvaT4sIDbigJMxMC5cbiAgICAgIDxicj5cbiAgICAgIDQuIENvbHF1aG91biwgRC4gQW4gaW52ZXN0aWdhdGlvbiBvZiB0aGUgZmFsc2UgZGlzY292ZXJ5IHJhdGUgYW5kIHRoZSBtaXNpbnRlcnByZXRhdGlvbiBvZiBwLXZhbHVlcy4gPGk+Um95YWwgU29jaWV0eSBPcGVuIFNjaWVuY2UuPC9pPiAyMDE0LCA8aT4xPC9pPigzKTogMTQwMjE2LlxuXG4gIDwvZGl2PiAgPCEtLSBjb250YWluZXIgLS0+ICAgXG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnanF1ZXJ5LXVpLXNsaWRlcic7XG4vLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcycgIC8vIG5wbSBpbnN0YWxsIGNoYXJ0LmpzQDIuOS40LCB0aGVuIHRyaWVkIDIuOS4zLiBzbyxlIHNheSAyLjkuNCBkb2Vzbid0IHdvcmsuXG5pbXBvcnQgY2hhcnRqc1BsdWdpbkFubm90YXRpb24gZnJvbSBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjsgLy8gbnBtIGluc3RhbGwgY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvbkAwLjUuNyAtLXNhdmUgICAgPDw8IHVzZWQgdGhpcy4gbmVjZXNzYXJ5P1xuLy8gaW1wb3J0ICogYXMgbWF0aCBmcm9tICdtYXRoanMnO1xuaW1wb3J0IHR0ZXN0Q2hhcnREYXRhIGZyb20gJy4vdHRlc3QtY2hhcnQtZGF0YS5qcydcbmltcG9ydCB3ZWxjaHMgZnJvbSAnQC93ZWxjaHMnO1xuXG5cbmltcG9ydCBIeXBvdGhlc2lzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9IeXBvdGhlc2lzQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBQUFZDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1BQVkNvbXBvbmVudC52dWUnXG5pbXBvcnQgUk9DQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ST0NDb21wb25lbnQudnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnIFxuXG4vLyBzdG9yZS5jb21taXQoJ2luY3JlbWVudCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RvcmUsXG4gIG5hbWU6ICdBcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgSHlwb3RoZXNpc0NvbXBvbmVudCxcbiAgICBQUFZDb21wb25lbnQsXG4gICAgUk9DQ29tcG9uZW50LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHR0ZXN0Q2hhcnREYXRhOiB0dGVzdENoYXJ0RGF0YSxcbiAgICAgIHN0b3JlY291bnQ6IHN0b3JlLnN0YXRlLmNvdW50LFxuICAgICAgdHRlc3RDaGFydDogbnVsbCxcbiAgICAgIHRodW1iOiBudWxsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICAgIGRyYXdBbHBoYUN1cnZlOiBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSl7ICBcbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IHdlbGNocy5nZXRBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuICAgICAgbGV0IGJldGFfY3VydmUgPSB3ZWxjaHMuZHJhd0JldGFDdXJ2ZSAoZ3JvdXAyLCBjcml0X3RfdmFsdWUsIG5jcCk7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbNF0uZGF0YSA9IGJldGFfY3VydmU7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG4gICAgfSxcbiAgfSxcbiAgY29udmVydENoYXJ0WFRvU2NyZWVuWDogZnVuY3Rpb24gKHgsIGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgeDEsIHgyLCBvZmZzZXQpe1xuICAgIC8vcmV0dXJuIG1hdGgucm91bmQoKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0LDApO1xuICAgIHJldHVybiAoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQ7XG4gIH0sXG5cblxuICAvLyBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAvLyAgIHJldHVybiAoeCArICh0aHVtYk9mZnNldFdpZHRoLzIpKS8oeDIgLSB4MSkqKGNoYXJ0X3gyLWNoYXJ0X3gxKSArIGNoYXJ0X3gxO1xuICAvLyB9LFxuXG5cbiAgaW5pdFRodW1iOiBmdW5jdGlvbiAoY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB0aHVtYk9mZnNldFdpZHRoLCBjcml0X3RfaW5pdCl7XG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIHRodW1iLlxuICAgIGNvbnNvbGUubG9nKFwiY3JpdF90X2luaXQ6XCIsIGNyaXRfdF9pbml0KTtcbiAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgIHZhciB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcblxuICAgIC8vIGNvbnZlcnQgY2hhcnQgeCB2YWx1ZSB0byB0aGUgeCBzY3JlZW4gcG9zaXRpb24gZm9yIHRoZSBzbGlkZXIgdGh1bWJcbiAgICAvLyB2YXIgb2Zmc2V0ID0gdGh1bWIub2Zmc2V0V2lkdGgvMjsgLy8uNTk7ICAvLyBwcmV2aW91c2x5OiBvZmZzZXQ9M1xuICAgIHZhciBvZmZzZXQgPSB0aHVtYk9mZnNldFdpZHRoLzI7IC8vLjU5OyAgLy8gcHJldmlvdXNseTogb2Zmc2V0PTNcbiAgICB2YXIgbmV3X3RodW1iID0gdGhpcy5jb252ZXJ0Q2hhcnRYVG9TY3JlZW5YKGNyaXRfdF9pbml0LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KTtcbiAgICAvLyBlbGVtKFwidGh1bWJcIikuc3R5bGUubGVmdCA9IG5ld190aHVtYiArIFwicHhcIjtcblxuICAgIC8vIEJFTE9XIElTIE5FV1xuICAgIC8vIGFkanVzdCB0aGUgc2xpZGVyXG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS5sZWZ0ID0geDEgKyBcInB4XCI7XG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgXG4gICAgLy8gdXBkYXRlU3RhdGUoY3JpdF90X2luaXQsIGRmLCBuY3ApO1xuICAgIHJldHVybiBuZXdfdGh1bWI7XG4gIH0sXG5cblxuICAvLyBtb3ZlQmFyOiBmdW5jdGlvbigpe1xuXG4gIC8vICAgLy8gZ2V0IGFic29sdXRlIHgseSBjb29yZGluYXRlcyBvZiB0aGUgY2hhcnQgb24gdGhlIHNjcmVlblxuICAvLyAgIGxldCBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgLy8gICBsZXQgeDEgPSBwb2ludHNbMF0uX21vZGVsLng7XG4gIC8vICAgbGV0IHkxID0gcG9pbnRzWzBdLl9tb2RlbC55O1xuICAvLyAgIGxldCB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcbiAgLy8gICBsZXQgeTIgPSBwb2ludHNbMV0uX21vZGVsLnk7XG5cbiAgLy8gICAvLyBhZGp1c3QgdGhlIHNsaWRlclxuICAvLyAgIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUubGVmdCA9IHgxICsgXCJweFwiO1xuICAvLyAgIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUud2lkdGggPSB4MiAtIHgxICsgXCJweFwiO1xuXG4gIC8vICAgLy8gZHJhdyB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXG4gIC8vICAgY3JpdF90X3ZhbHVlID0gcm91bmQoY29udmVydFNjcmVlblhUb0NoYXJ0WChzbGlkZXJQb3NpdGlvbkxlZnQsIHgxLCB4MiwgYXhlcy54X21pbiwgYXhlcy54X21heCwgdGh1bWIub2Zmc2V0V2lkdGgpKTtcbiAgLy8gICB1cGRhdGVTdGF0ZShjcml0X3RfdmFsdWUsIGRmLCBuY3ApO1xuXG4gIC8vIH0sXG4gIG1vdW50ZWQoKSB7XG5cbiAgICBcbiAgICAvLyBsZXQgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aHVtYlwiKTtcbiAgICAvLyB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJlOlwiLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgLyAxMDApO1xuICAgIC8vIH0pO1xuICAgIFxuICAgIC8vIHRoaXMudGh1bWIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRodW1iJyk7XG4gICAgLy8gLy8gdmFyIHNsaWRlclBvc2l0aW9uTGVmdCA9IGluaXRUaHVtYihheGVzLnhfbWluLCBheGVzLnhfbWF4LCB0aHVtYi5vZmZzZXRXaWR0aCwgY3JpdF90X2luaXQpO1xuICAgIC8vIHZhciBzbGlkZXJQb3NpdGlvbkxlZnQgPSB0aGlzLmluaXRUaHVtYigtNC43NTMsIDcuMjMyLCB0aGlzLnRodW1iLm9mZnNldFdpZHRoLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coc2xpZGVyUG9zaXRpb25MZWZ0KTtcblxuXG4gICAgQ2hhcnQucGx1Z2lucy5yZWdpc3RlcihjaGFydGpzUGx1Z2luQW5ub3RhdGlvbilcbiAgICB0aGlzLnR0ZXN0Q2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0ZXN0LWNoYXJ0JyksIHRoaXMudHRlc3RDaGFydERhdGEpO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gW3t4OiAtNC43NTMsIHk6IDB9LCB7eDogNy4yMzIsIHk6IDB9XTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1pbiA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5taW47XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5tYXggPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWF4OyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLm1heCA9IDAuNTtcblxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMF0ubGFiZWwuY29udGVudCA9ICdwID0gJyArIHRoaXMuc3RvcmUuc3RhdGUucF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS5jb250ZW50ID0gJ1xcdTAzQjEnICsgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYTsgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICBcblxuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMl0uZGF0YSA9IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLmRpc3Q7XG4gICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmF3QWxwaGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMSwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgIHRoaXMuZHJhd0JldGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUsdGhpcy5zdG9yZS5zdGF0ZS5uY3ApO1xuXG5cbiAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVJhbmdlXCIpO1xuICAgIC8vIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgLy8gb3V0cHV0LmlubmVySFRNTCA9IHNsaWRlci52YWx1ZTsgLy8gRGlzcGxheSB0aGUgZGVmYXVsdCBzbGlkZXIgdmFsdWVcblxuICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWUgKGVhY2ggdGltZSB5b3UgZHJhZyB0aGUgc2xpZGVyIGhhbmRsZSlcbiAgICBzbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XG4gICAgICAvLyB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAvLyB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgICAgLy8gY3JpdF90X3ZhbHVlID0gcm91bmQodGhpcy5jb252ZXJ0U2NyZWVuWFRvQ2hhcnRYKHNsaWRlclBvc2l0aW9uTGVmdCwgeDEsIHgyLCBheGVzLnhfbWluLCBheGVzLnhfbWF4LCB0aHVtYi5vZmZzZXRXaWR0aCkpO1xuICAgICAgY29uc29sZS5sb2coXCJDT05WRVJUOlwiLCB0aGlzLmNvbnZlcnRTY3JlZW5YVG9DaGFydFgoNTAsIDAsIDEwMCwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgsIDApKTtcbiAgICAgIC8vIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIC8vIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9XG4gIH0sXG4gIGNvbnZlcnRTY3JlZW5YVG9DaGFydFg6IGZ1bmN0aW9uICh4LCB4MSwgeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJPZmZzZXRXaWR0aCl7XG4gICAgcmV0dXJuICh4ICsgKHRodW1iT2Zmc2V0V2lkdGgvMikpLyh4MiAtIHgxKSooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gIH0sXG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLnNsaWRlY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFdpZHRoIG9mIHRoZSBvdXRzaWRlIGNvbnRhaW5lciAqL1xufVxuXG4vKiBUaGUgc2xpZGVyIGl0c2VsZiAqL1xuLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbC13aWR0aCAqL1xuICBoZWlnaHQ6IDI1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZDogI2QzZDNkMzsgLyogR3JleSBiYWNrZ3JvdW5kICovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXG4gIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi8qIC5zbGlkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gKi9cblxuXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG59XG5cbi8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXG5cbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi8qICNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn0gKi9cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbiNDb250YWluZXJXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggNzBweDtcbn1cblxuI1doaXRlV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNCbGFja1dpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jT3JhbmdlV2luZG93e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy93ZWxjaHMucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAqL1xuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmM2UwMDsgKi9cbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggMTIwcHggNTBweDtcbiAgLyogZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbiN0aXRsZW5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cbiN0aXRsZW5hbWUtc3Vie1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG5cbi5tb3JlLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwOyAgLyogcHJldmlvdXNseSBmZjcwNDMgKi9cbn1cblxuXG4uYm94IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbi5hc3Rlcmlza0ZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuLyogd2lkdGg6IDUyNXB4OyAqL1xuXG5cbi50aHVtYiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogLTVweDtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5lcnJvcl9ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuXG4vKiBAaW1wb3J0IFwiY29tcGFzcy9jc3MzXCI7ICovXG5cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEVDNkRFO1xufVxuXG4udGFiYmVkIHtcbi8qICB3aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvOyAgKi9cbn1cblxuLnRhYmJlZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmJlZCA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG59XG5cbi50YWJiZWQgPiBsYWJlbDpob3Zlcixcbi50YWJiZWQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xufVxuXG4udGFicyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBwZXJzcGVjdGl2ZTogNjAwcHg7XG59XG5cbi50YWJzID4gZGl2IHtcbiAgLyogd2lkdGg6IDcwMHB4OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweCA0MHB4O1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cblxuI3RhYi1uYXYtMTpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMSksXG4jdGFiLW5hdi0yOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgyKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbiN0YWItbmF2LTM6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDMpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZ3JpZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyAgLypyZ2JhKDAsIDAsIDAsIDAuOCk7Ki9cbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5kaWFncmFtLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbn1cblxuLmVudGVyLWRhdGF7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjOGM4Yzg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi8qIGhpZGUgZm9yIGxhcmdlciBzY3JlZW5zICovXG4jU21hbGxTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogc2hvdyBmb3Igc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgI1NtYWxsU2NyZWVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4vKiByZW1vdmUgcGFkZGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNDb250YWluZXJXaW5kb3d7XG4gICAgcGFkZGluZzogNTBweCA1cHggNTBweCA1cHg7XG4gIH1cbn1cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1d73ad398c6bd2b8"; }
/******/ }();
/******/ 
/******/ }
);
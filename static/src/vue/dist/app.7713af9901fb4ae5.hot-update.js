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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    }\n  },\n  convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n    //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n    return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n  },\n  convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n    return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n  },\n  // convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth){\n  //   return (x + (thumbOffsetWidth/2))/(x2 - x1)*(chart_x2-chart_x1) + chart_x1;\n  // },\n\n  initThumb: function (chart_x_min, chart_x_max, thumbOffsetWidth, crit_t_init) {\n    // Initial position of the slider thumb.\n    console.log(\"crit_t_init:\", crit_t_init);\n    var points = this.ttestChart.chart.getDatasetMeta(0).data;\n    var x1 = points[0]._model.x;\n    var x2 = points[1]._model.x;\n\n    // convert chart x value to the x screen position for the slider thumb\n    // var offset = thumb.offsetWidth/2; //.59;  // previously: offset=3\n    var offset = thumbOffsetWidth / 2; //.59;  // previously: offset=3\n    var new_thumb = this.convertChartXToScreenX(crit_t_init, chart_x_min, chart_x_max, x1, x2, offset);\n    // elem(\"thumb\").style.left = new_thumb + \"px\";\n\n    // BELOW IS NEW\n    // adjust the slider\n    // elem(\"slider\").style.left = x1 + \"px\";\n    // elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n    // updateState(crit_t_init, df, ncp);\n    return new_thumb;\n  },\n  // moveBar: function(){\n\n  //   // get absolute x,y coordinates of the chart on the screen\n  //   let points = this.ttestChart.chart.getDatasetMeta(0).data;\n  //   let x1 = points[0]._model.x;\n  //   let y1 = points[0]._model.y;\n  //   let x2 = points[1]._model.x;\n  //   let y2 = points[1]._model.y;\n\n  //   // adjust the slider\n  //   elem(\"slider\").style.left = x1 + \"px\";\n  //   elem(\"slider\").style.width = x2 - x1 + \"px\";\n\n  //   // draw the critical t vertical line\n  //   crit_t_value = round(convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n  //   updateState(crit_t_value, df, ncp);\n\n  // },\n  mounted() {\n    // let volume = document.querySelector(\"#thumb\");\n    // volume.addEventListener(\"change\", function(e) {\n    // console.log(\"e:\", e.currentTarget.value / 100);\n    // });\n\n    // this.thumb = slider.querySelector('.thumb');\n    // // var sliderPositionLeft = initThumb(axes.x_min, axes.x_max, thumb.offsetWidth, crit_t_init);\n    // var sliderPositionLeft = this.initThumb(-4.753, 7.232, this.thumb.offsetWidth, this.store.state.crit_t_value);\n    // console.log(sliderPositionLeft);\n\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    var slider = document.getElementById(\"myRange\");\n    // var output = document.getElementById(\"demo\");\n    // output.innerHTML = slider.value; // Display the default slider value\n\n    // Update the current slider value (each time you drag the slider handle)\n    slider.oninput = function () {\n      console.log(this.value);\n      // this.store.state.crit_t_value = this.value;\n      this.ttestChartData.options.annotation.annotations[1].value = this.value;\n      // this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      // crit_t_value = round(this.convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n      // crit_t_value = round(this.convertScreenXToChartX(sliderPositionLeft, x1, x2, axes.x_min, axes.x_max, thumb.offsetWidth));\n      this.ttestChart.update();\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC9zcmMvQXBwLnZ1ZT8xMWM0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJoZXJvLWltYWdlXCIgaWQ9XCJPcmFuZ2VXaW5kb3dcIj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lXCI+V2VsY2gncyA8aT50PC9pPi10ZXN0PC9kaXY+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZS1zdWJcIj5jYWxjdWxhdG9yPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmp1c3RpZnlcIj5cbiAgICAgIElzIHRoZXJlIGEgc3RhdGlzdGljYWxseSBzaWduaWZpY2FudCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGFzZXRzPzxwPjwvcD5cbiAgICAgIE1vdmUgdGhlIHNsaWRlciBhbmQgb2JzZXJ2ZSB0aGUgaW1wYWN0IG9mIHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgb24gdGhlIHByb2JhYmlsaXR5IG9mIG1ha2luZyB0aGUgd3JvbmcgZGVjaXNpb24uIElucHV0IGFuZCBleHBsb3JlIHlvdXIgZGF0YXNldHMuXG4gICAgICBUaGlzIGNhbGN1bGF0b3IgaXMgZm9yIG9uZS10YWlsZWQgV2VsY2jigJlzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCIgb250b3VjaG1vdmU9XCJtb3ZlVGh1bWJNb2JpbGUoZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiPjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIC8+XG4gICAgICAgIDwvZGl2PiAgLS0+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjUwXCIgY2xhc3M9XCJzbGlkZXJcIiBpZD1cIm15UmFuZ2VcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwidHRlc3QtY2hhcnRcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPjxicj48cD48YnI+XG4gICAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG5cbiAgICAgICAgPGI+PHNwYW4gaWQ9XCJtZXNzYWdlXCI+PC9zcGFuPjwvYj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRlci1kYXRhXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJkYXRhLWZvcm1cIiBhY3Rpb249XCJ7JSB1cmwgJ2NvcmU6dHRlc3QnICV9XCIgbWV0aG9kPSdwb3N0JyBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICA8IS0tIHslIGNzcmZfdG9rZW4gJX0gLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0MXxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDJ8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxiPlNUQVRJU1RJQ1M8L2I+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5jcml0aWNhbCB0OjwvYj4gPHNwYW4gaWQ9XCJjcml0X3RfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+c2lnIGxldmVsICgmIzk0NTspOjwvYj4gPHNwYW4gaWQ9XCJzaWctbGV2ZWxcIj57eyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8Yj50LXZhbHVlOjwvYj4gPHNwYW4gaWQ9XCJ0X3ZhbHVlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5wLXZhbHVlOjwvYj4ge3sgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlIH19PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZGY6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZGYgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gPGI+ZWZmZWN0IHNpemU6PC9iPiB7eyB0ZXN0X3Jlc3VsdHMuZWZmZWN0X3NpemUgfX08YnI+IC0tPlxuICAgICAgICAgICAgICAgIDxiPm5jcDo8L2I+IDxzcGFuIGlkPVwibmNwXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5uY3AgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BbmFseXplPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz1cImNsZWFyRm9ybSgpXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IHBhZGRpbmc6MTBweDsgbWluLXdpZHRoOjMwMHB4O1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDE8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxiPkdyb3VwIDI8L2I+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLnNkIH19PGJyPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm4gfX08YnI+XG4gICAgICAgICAgICAgIDwhLS0ge3sgZGF0YTIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIuc2QgfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLm4gfX08YnI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJTbWFsbFNjcmVlblwiPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgIDxiPk1lYW48L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5TRDwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPk48L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+PCEtLSBjbG9zZSBlbnRlci1kYXRhIGRpdiAtLT5cbiAgICAgICAgPHA+PC9wPjxicj5cbiAgICAgIDwvZGl2PiA8IS0tIGNvbHVtbiBlbmQgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cblxuICAgICAgPCEtLSB7JSBpZiB0ZXN0X3Jlc3VsdHMgJX0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFiYmVkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0xXCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMVwiPkh5cG90aGVzaXMgVGVzdGluZzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0yXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTJcIj5QUFY8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0zXCI+Uk9DPC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPEh5cG90aGVzaXNDb21wb25lbnQgLz4gXG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIGh5cG90aGVzaXMgdGVzdGluZyAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxQUFZDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUFBWIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFJPQ0NvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBST0MgLS0+XG5cbiAgICAgICAgPC9kaXY+IDwhLS0gZW5kIHRhYnMgLS0+XG4gICAgICA8L2Rpdj4gIDwhLS0gZW5kIHRhYmJlZCAtLT5cbiAgICAgICAgXG4gICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuICAgIDwvZGl2PiA8IS0tIGVuZCBjb2x1bW4gLS0+XG4gIDwvZGl2PiA8IS0tIGVuZCByb3cgLS0+XG5cblxuICAgIDxkaXYgaWQ9XCJTbWFsbFNjcmVlblwiIHN0eWxlPVwiaGVpZ2h0OiAxMjAwcHg7XCI+ICA8IS0tIGJ1ZmZlciBzcGFjZSBmb3Igc21hbGwgc2NyZWVucyAtLT5cbiAgICA8L2Rpdj5cbiAgICA8YnI+PGJyPjxicj5cbiAgPC9kaXY+XG5cblxuXG4gIDxkaXYgaWQ9XCJCbGFja1dpbmRvd1wiPlxuXG4gICAgPGEgbmFtZT1cIm1vcmUtaW5mb1wiPjwvYT5cbiAgICA8ZGl2IGNsYXNzPVwibW9yZS1pbmZvXCI+XG4gICAgICA8aDQ+TW9yZSBpbmZvcm1hdGlvbjwvaDQ+XG5cbiAgICAgIFRoZSBXZWxjaCdzIDxpPnQ8L2k+LXRlc3QsIG9yIHVuZXF1YWwgdmFyaWFuY2VzIDxpPnQ8L2k+LXRlc3QsIGNhbiB0ZXN0IGh5cG90aGVzZXMgc3VjaCBhcyB3aGV0aGVyIHRoZSBtZWFucyBvZiB0d28gaW5kZXBlbmRlbnQgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcG9wdWxhdGlvbnMgYXJlIGVxdWFsLiBXaGlsZSB0aGUgY29tbW9ubHktdXNlZCBTdHVkZW50IDxpPnQ8L2k+LXRlc3QgcmVxdWlyZXMgdGhhdCB0aGUgdHdvIHNhbXBsZXMgc2hhcmUgZXF1YWwgdmFyaWFuY2VzIGFuZCBlcXVhbCBzYW1wbGUgc2l6ZXMsIHRoZSBXZWxjaOKAmXMgPGk+dDwvaT4tdGVzdCBkb2VzIG5vdCBoYXZlIHRoaXMgcmVxdWlyZW1lbnQuIFJlc2VhcmNoZXJzIGFyZ3VlIHRoYXQgdGhlIFdlbGNo4oCZcyA8aT50PC9pPi10ZXN0IGlzIG1vcmUgdmVyc2F0aWxlIGFuZCBzaG91bGQgaW5zdGVhZCBiZSB1c2VkIGJ5IGRlZmF1bHQuPHN1cD4xLDI8L3N1cD5cbiAgICAgIDxicj48YnI+XG4gICAgICBTdGF0aXN0aWNhbCByaWdvciBjYW4gYmUgYWNoaWV2ZWQgd2l0aCA8aT50PC9pPi10ZXN0cywgeWV0IHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgaXMgc2V0IGFyYml0cmFyaWx5LiBXaGlsZSBsb3dlcmluZyBzaWduaWZpY2FuY2UgbGV2ZWxzIG1pdGlnYXRlcyBmYWxzZSBwb3NpdGl2ZXMgKCYjOTQ1OyksIHRoZSBwcm9iYWJpbGl0eSBvZiBmYWxzZSBuZWdhdGl2ZXMgKCYjOTQ2OykgaW5jcmVhc2VzLCBhbmQgdGVzdHMgbWF5IGZhaWwgdG8gZGV0ZWN0IGV4aXN0aW5nIGVmZmVjdHMuPHN1cD4zPC9zdXA+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuXG5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJXaGl0ZVdpbmRvd1wiPlxuXG4gICAgICA8aDQ+UmVmZXJlbmNlczwvaDQ+XG5cbiAgICAgIDEuIERhaGlydSwgVC4gUC12YWx1ZSwgYSB0cnVlIHRlc3Qgb2Ygc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlPyBBIGNhdXRpb25hcnkgbm90ZS4gPGk+QW5uYWxzIG9mIEliYWRhbiBQb3N0Z3JhZHVhdGUgTWVkaWNpbmUuPC9pPiAyMDA4LCA8aT42PC9pPigxKTogMjHigJMyNi5cbiAgICAgIDxicj5cbiAgICAgIDIuIERlbGFjcmUsIE0uOyBMYWtlbnMsIEQuOyBMZXlzLCBDLiBXaHkgUHN5Y2hvbG9naXN0cyBTaG91bGQgYnkgRGVmYXVsdCBVc2UgV2VsY2jigJlzIHQtdGVzdCBJbnN0ZWFkIG9mIFN0dWRlbnTigJlzIHQtdGVzdC4gPGk+SW50ZXJuYXRpb25hbCBSZXZpZXcgb2YgU29jaWFsIFBzeWNob2xvZ3kuPC9pPiAyMDE3LCA8aT4zMDwvaT4oMSksIDky4oCTMTAxLlxuICAgICAgPGJyPlxuICAgICAgMy4gQmVuamFtaW4sIEQuSi47IEJlcmdlciwgSi5PLjsgSm9oYW5uZXNzb24sIE0uIGV0IGFsLiBSZWRlZmluZSBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2UuIDxpPk5hdHVyZSBIdW1hbiBCZWhhdmlvdXIuPC9pPiAyMDE4LCA8aT4yPC9pPiwgNuKAkzEwLlxuICAgICAgPGJyPlxuICAgICAgNC4gQ29scXVob3VuLCBELiBBbiBpbnZlc3RpZ2F0aW9uIG9mIHRoZSBmYWxzZSBkaXNjb3ZlcnkgcmF0ZSBhbmQgdGhlIG1pc2ludGVycHJldGF0aW9uIG9mIHAtdmFsdWVzLiA8aT5Sb3lhbCBTb2NpZXR5IE9wZW4gU2NpZW5jZS48L2k+IDIwMTQsIDxpPjE8L2k+KDMpOiAxNDAyMTYuXG5cbiAgPC9kaXY+ICA8IS0tIGNvbnRhaW5lciAtLT4gICBcblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuLy8gaW1wb3J0IHNsaWRlciBmcm9tICdqcXVlcnktdWktc2xpZGVyJztcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjQsIHRoZW4gdHJpZWQgMi45LjMuIHNvLGUgc2F5IDIuOS40IGRvZXNuJ3Qgd29yay5cbmltcG9ydCBjaGFydGpzUGx1Z2luQW5ub3RhdGlvbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiOyAvLyBucG0gaW5zdGFsbCBjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uQDAuNS43IC0tc2F2ZSAgICA8PDwgdXNlZCB0aGlzLiBuZWNlc3Nhcnk/XG4vLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5pbXBvcnQgdHRlc3RDaGFydERhdGEgZnJvbSAnLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XG5cblxuaW1wb3J0IEh5cG90aGVzaXNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlJ1xuaW1wb3J0IFBQVkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBST0NDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZScgXG5cbi8vIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdG9yZSxcbiAgbmFtZTogJ0FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIeXBvdGhlc2lzQ29tcG9uZW50LFxuICAgIFBQVkNvbXBvbmVudCxcbiAgICBST0NDb21wb25lbnQsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXG4gICAgICB0dGVzdENoYXJ0OiBudWxsLFxuICAgICAgdGh1bWI6IG51bGxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID4gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gLTMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTUFMTEVSXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAzLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQklHR0VSXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVTdGF0ZScpO1xuICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xuICAgIH0sXG4gICAgZHJhd0FscGhhQ3VydmU6IGZ1bmN0aW9uKGdyb3VwMSwgY3JpdF90X3ZhbHVlKXsgIFxuICAgICAgbGV0IGFscGhhX2N1cnZlID0gd2VsY2hzLmdldEFscGhhQ3VydmUoZ3JvdXAxLCBjcml0X3RfdmFsdWUpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzNdLmRhdGEgPSBhbHBoYV9jdXJ2ZTsgIC8vIHdhcyBbM11bJ2RhdGEnXVxuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgZHJhd0JldGFDdXJ2ZTogZnVuY3Rpb24gKGdyb3VwMiwgY3JpdF90X3ZhbHVlLCBuY3ApeyAgXG4gICAgICBsZXQgYmV0YV9jdXJ2ZSA9IHdlbGNocy5kcmF3QmV0YUN1cnZlIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1s0XS5kYXRhID0gYmV0YV9jdXJ2ZTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICB9LFxuICBjb252ZXJ0Q2hhcnRYVG9TY3JlZW5YOiBmdW5jdGlvbiAoeCwgY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB4MSwgeDIsIG9mZnNldCl7XG4gICAgLy9yZXR1cm4gbWF0aC5yb3VuZCgoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQsMCk7XG4gICAgcmV0dXJuICgoKHggLSBjaGFydF94X21pbikvKGNoYXJ0X3hfbWF4IC0gY2hhcnRfeF9taW4pKSooeDIteDEpKSAtIG9mZnNldDtcbiAgfSxcbiAgY29udmVydFNjcmVlblhUb0NoYXJ0WDogZnVuY3Rpb24gKHgsIHgxLCB4MiwgY2hhcnRfeDEsIGNoYXJ0X3gyLCB0aHVtYk9mZnNldFdpZHRoKXtcbiAgICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgfSxcblxuICAvLyBjb252ZXJ0U2NyZWVuWFRvQ2hhcnRYOiBmdW5jdGlvbiAoeCwgeDEsIHgyLCBjaGFydF94MSwgY2hhcnRfeDIsIHRodW1iT2Zmc2V0V2lkdGgpe1xuICAvLyAgIHJldHVybiAoeCArICh0aHVtYk9mZnNldFdpZHRoLzIpKS8oeDIgLSB4MSkqKGNoYXJ0X3gyLWNoYXJ0X3gxKSArIGNoYXJ0X3gxO1xuICAvLyB9LFxuXG5cbiAgaW5pdFRodW1iOiBmdW5jdGlvbiAoY2hhcnRfeF9taW4sIGNoYXJ0X3hfbWF4LCB0aHVtYk9mZnNldFdpZHRoLCBjcml0X3RfaW5pdCl7XG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIHRodW1iLlxuICAgIGNvbnNvbGUubG9nKFwiY3JpdF90X2luaXQ6XCIsIGNyaXRfdF9pbml0KTtcbiAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgIHZhciB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcblxuICAgIC8vIGNvbnZlcnQgY2hhcnQgeCB2YWx1ZSB0byB0aGUgeCBzY3JlZW4gcG9zaXRpb24gZm9yIHRoZSBzbGlkZXIgdGh1bWJcbiAgICAvLyB2YXIgb2Zmc2V0ID0gdGh1bWIub2Zmc2V0V2lkdGgvMjsgLy8uNTk7ICAvLyBwcmV2aW91c2x5OiBvZmZzZXQ9M1xuICAgIHZhciBvZmZzZXQgPSB0aHVtYk9mZnNldFdpZHRoLzI7IC8vLjU5OyAgLy8gcHJldmlvdXNseTogb2Zmc2V0PTNcbiAgICB2YXIgbmV3X3RodW1iID0gdGhpcy5jb252ZXJ0Q2hhcnRYVG9TY3JlZW5YKGNyaXRfdF9pbml0LCBjaGFydF94X21pbiwgY2hhcnRfeF9tYXgsIHgxLCB4Miwgb2Zmc2V0KTtcbiAgICAvLyBlbGVtKFwidGh1bWJcIikuc3R5bGUubGVmdCA9IG5ld190aHVtYiArIFwicHhcIjtcblxuICAgIC8vIEJFTE9XIElTIE5FV1xuICAgIC8vIGFkanVzdCB0aGUgc2xpZGVyXG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS5sZWZ0ID0geDEgKyBcInB4XCI7XG4gICAgLy8gZWxlbShcInNsaWRlclwiKS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgXG4gICAgLy8gdXBkYXRlU3RhdGUoY3JpdF90X2luaXQsIGRmLCBuY3ApO1xuICAgIHJldHVybiBuZXdfdGh1bWI7XG4gIH0sXG5cblxuICAvLyBtb3ZlQmFyOiBmdW5jdGlvbigpe1xuXG4gIC8vICAgLy8gZ2V0IGFic29sdXRlIHgseSBjb29yZGluYXRlcyBvZiB0aGUgY2hhcnQgb24gdGhlIHNjcmVlblxuICAvLyAgIGxldCBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgLy8gICBsZXQgeDEgPSBwb2ludHNbMF0uX21vZGVsLng7XG4gIC8vICAgbGV0IHkxID0gcG9pbnRzWzBdLl9tb2RlbC55O1xuICAvLyAgIGxldCB4MiA9IHBvaW50c1sxXS5fbW9kZWwueDtcbiAgLy8gICBsZXQgeTIgPSBwb2ludHNbMV0uX21vZGVsLnk7XG5cbiAgLy8gICAvLyBhZGp1c3QgdGhlIHNsaWRlclxuICAvLyAgIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUubGVmdCA9IHgxICsgXCJweFwiO1xuICAvLyAgIGVsZW0oXCJzbGlkZXJcIikuc3R5bGUud2lkdGggPSB4MiAtIHgxICsgXCJweFwiO1xuXG4gIC8vICAgLy8gZHJhdyB0aGUgY3JpdGljYWwgdCB2ZXJ0aWNhbCBsaW5lXG4gIC8vICAgY3JpdF90X3ZhbHVlID0gcm91bmQoY29udmVydFNjcmVlblhUb0NoYXJ0WChzbGlkZXJQb3NpdGlvbkxlZnQsIHgxLCB4MiwgYXhlcy54X21pbiwgYXhlcy54X21heCwgdGh1bWIub2Zmc2V0V2lkdGgpKTtcbiAgLy8gICB1cGRhdGVTdGF0ZShjcml0X3RfdmFsdWUsIGRmLCBuY3ApO1xuXG4gIC8vIH0sXG4gIG1vdW50ZWQoKSB7XG5cbiAgICBcbiAgICAvLyBsZXQgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aHVtYlwiKTtcbiAgICAvLyB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJlOlwiLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgLyAxMDApO1xuICAgIC8vIH0pO1xuICAgIFxuICAgIC8vIHRoaXMudGh1bWIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnRodW1iJyk7XG4gICAgLy8gLy8gdmFyIHNsaWRlclBvc2l0aW9uTGVmdCA9IGluaXRUaHVtYihheGVzLnhfbWluLCBheGVzLnhfbWF4LCB0aHVtYi5vZmZzZXRXaWR0aCwgY3JpdF90X2luaXQpO1xuICAgIC8vIHZhciBzbGlkZXJQb3NpdGlvbkxlZnQgPSB0aGlzLmluaXRUaHVtYigtNC43NTMsIDcuMjMyLCB0aGlzLnRodW1iLm9mZnNldFdpZHRoLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coc2xpZGVyUG9zaXRpb25MZWZ0KTtcblxuXG4gICAgQ2hhcnQucGx1Z2lucy5yZWdpc3RlcihjaGFydGpzUGx1Z2luQW5ub3RhdGlvbilcbiAgICB0aGlzLnR0ZXN0Q2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0ZXN0LWNoYXJ0JyksIHRoaXMudHRlc3RDaGFydERhdGEpO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gW3t4OiAtNC43NTMsIHk6IDB9LCB7eDogNy4yMzIsIHk6IDB9XTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1pbiA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5taW47XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5tYXggPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWF4OyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLm1heCA9IDAuNTtcblxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMF0ubGFiZWwuY29udGVudCA9ICdwID0gJyArIHRoaXMuc3RvcmUuc3RhdGUucF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS5jb250ZW50ID0gJ1xcdTAzQjEnICsgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYTsgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICBcblxuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMl0uZGF0YSA9IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLmRpc3Q7XG4gICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmF3QWxwaGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMSwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgIHRoaXMuZHJhd0JldGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUsdGhpcy5zdG9yZS5zdGF0ZS5uY3ApO1xuXG5cbiAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVJhbmdlXCIpO1xuICAgIC8vIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgLy8gb3V0cHV0LmlubmVySFRNTCA9IHNsaWRlci52YWx1ZTsgLy8gRGlzcGxheSB0aGUgZGVmYXVsdCBzbGlkZXIgdmFsdWVcblxuICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWUgKGVhY2ggdGltZSB5b3UgZHJhZyB0aGUgc2xpZGVyIGhhbmRsZSlcbiAgICBzbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XG4gICAgICAvLyB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAvLyB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgICAgLy8gY3JpdF90X3ZhbHVlID0gcm91bmQodGhpcy5jb252ZXJ0U2NyZWVuWFRvQ2hhcnRYKHNsaWRlclBvc2l0aW9uTGVmdCwgeDEsIHgyLCBheGVzLnhfbWluLCBheGVzLnhfbWF4LCB0aHVtYi5vZmZzZXRXaWR0aCkpO1xuICAgICAgLy8gY3JpdF90X3ZhbHVlID0gcm91bmQodGhpcy5jb252ZXJ0U2NyZWVuWFRvQ2hhcnRYKHNsaWRlclBvc2l0aW9uTGVmdCwgeDEsIHgyLCBheGVzLnhfbWluLCBheGVzLnhfbWF4LCB0aHVtYi5vZmZzZXRXaWR0aCkpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfSxcbn1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4uc2xpZGVjb250YWluZXIge1xuICB3aWR0aDogMTAwJTsgLyogV2lkdGggb2YgdGhlIG91dHNpZGUgY29udGFpbmVyICovXG59XG5cbi8qIFRoZSBzbGlkZXIgaXRzZWxmICovXG4uc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsLXdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgKi9cbiAgb3BhY2l0eTogMC43OyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLyogLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuXG5cbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuLnNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbn1cblxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLyogI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSAqL1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuaDQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuI0NvbnRhaW5lcldpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA3MHB4O1xufVxuXG4jV2hpdGVXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI0JsYWNrV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNPcmFuZ2VXaW5kb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL3dlbGNocy5wbmdcIik7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG5cbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xuICAvKiBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuI3RpdGxlbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuI3RpdGxlbmFtZS1zdWJ7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cblxuLm1vcmUtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7ICAvKiBwcmV2aW91c2x5IGZmNzA0MyAqL1xufVxuXG5cbi5ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuLmFzdGVyaXNrRmllbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiAuc2xpZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59ICovXG4vKiB3aWR0aDogNTI1cHg7ICovXG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "215afb31f38941a3"; }
/******/ }();
/******/ 
/******/ }
);
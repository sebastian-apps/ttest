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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth) {\n      let rs_prop = rs_x / (rs_x2 - rs_x1);\n      console.log(\"rs_prop\", rs_prop);\n      let px_offset = -(rs_prop - 0.5) * Number(thumbWidth);\n      console.log(\"px_offset\", px_offset);\n      // let px_prop = (rs_prop*(px_x2 - px_x1) + px_offset)/(px_x2 - px_x1);\n      let px_prop = rs_prop + px_offset / (px_x2 - px_x1);\n      console.log(\"px_prop\", px_prop);\n      return px_prop * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(Number(this.slideValue));\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = Number(points[0]._model.x);\n      var x2 = Number(points[1]._model.x);\n      let slideval = Number(this.slideValue);\n      let thumbWidth = 15;\n      let new_crit_t = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.store.state.axes.x_min, this.store.state.axes.x_max, thumbWidth);\n      console.log(\"CONVERT:\", new_crit_t);\n      this.ttestChartData.options.annotation.annotations[1].value = new_crit_t;\n      this.ttestChart.update();\n    },\n    updateState: function () {\n      //updateState: function(crit_t_value, df, ncp)\n      // calculations\n      // crit_t_value_beta = crit_t_value - ncp;  // ncp: non-centrality parameter\n      // alpha = getAlpha(crit_t_value, df);\n      // beta = getBeta(crit_t_value_beta, df);\n\n      // // update display\n      // elem('crit_t_value').innerText = crit_t_value;\n      // elem('sig-level').innerText = round(alpha);\n\n      // lineChart.options.annotation.annotations[1]['value'] = crit_t_value;\n      // lineChart.update();\n\n      // drawAlphaCurve(group1, crit_t_value);\n      // drawBetaCurve(group2, crit_t_value);\n      this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n      this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n\n      // updateConfusionMatrix(alpha, beta);\n      // showRejectOrNotReject(crit_t_value, t_value);\n      // updateProbabilityTree();\n    },\n\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  computed: {\n    computedLeft: function () {\n      return \"51px\";\n    }\n  },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvc3JjL0FwcC52dWU/MTFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiIGlkPVwiT3JhbmdlV2luZG93XCI+XG4gICAgPGRpdiBpZD1cInRpdGxlbmFtZVwiPldlbGNoJ3MgPGk+dDwvaT4tdGVzdDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWUtc3ViXCI+Y2FsY3VsYXRvcjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpqdXN0aWZ5XCI+XG4gICAgICBJcyB0aGVyZSBhIHN0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRhc2V0cz88cD48L3A+XG4gICAgICBNb3ZlIHRoZSBzbGlkZXIgYW5kIG9ic2VydmUgdGhlIGltcGFjdCBvZiB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIG9uIHRoZSBwcm9iYWJpbGl0eSBvZiBtYWtpbmcgdGhlIHdyb25nIGRlY2lzaW9uLiBJbnB1dCBhbmQgZXhwbG9yZSB5b3VyIGRhdGFzZXRzLlxuICAgICAgVGhpcyBjYWxjdWxhdG9yIGlzIGZvciBvbmUtdGFpbGVkIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdHMuIFRoZSBkYXRhIGFyZSBhc3N1bWVkIHRvIGJlIG5vcm1hbGx5IGRpc3RyaWJ1dGVkLlxuICAgICAgPGEgaHJlZj0nI21vcmUtaW5mbyc+RmluZCBtb3JlIGluZm9ybWF0aW9uLjwvYT5cbiAgICA8L2Rpdj5cbiAgICA8cD48L3A+XG4gIDwvZGl2PlxuXG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiQ29udGFpbmVyV2luZG93XCI+XG5cbiAgICA8cD48YnI+PHA+PGJyPjxwPjxicj48cD5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXG4gICAgICAgIDwhLS0geyUgaWYgdGVzdF9yZXN1bHRzICV9IC0tPlxuICAgICAgICA8IS0tIDxkaXYgaWQ9XCJzbGlkZXJcIiBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0aHVtYlwiIGNsYXNzPVwidGh1bWJcIiBvbnRvdWNobW92ZT1cIm1vdmVUaHVtYk1vYmlsZShldmVudClcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCI+PC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCIgLz5cbiAgICAgICAgPC9kaXY+ICAtLT5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVjb250YWluZXJcIiBpZD1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjUwXCIgY2xhc3M9XCJzbGlkZXJcIiBpZD1cIm15UmFuZ2VcIiB2LW1vZGVsPVwic2xpZGVWYWx1ZVwiIHYtb246aW5wdXQ9XCJzbGlkZWZ1bmNcIiB2LWJpbmQ6c3R5bGU9XCJ7IGxlZnQ6IGNvbXB1dGVkTGVmdCB9XCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cInR0ZXN0LWNoYXJ0XCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiODAwXCI+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD48YnI+PHA+PGJyPlxuICAgICAgICA8IS0tIHslIGVuZGlmICV9IC0tPlxuXG4gICAgICAgIDxiPjxzcGFuIGlkPVwibWVzc2FnZVwiPjwvc3Bhbj48L2I+XG4gICAgICAgIDxicj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW50ZXItZGF0YVwiPlxuICAgICAgICAgIDxmb3JtIGlkPVwiZGF0YS1mb3JtXCIgYWN0aW9uPVwieyUgdXJsICdjb3JlOnR0ZXN0JyAlfVwiIG1ldGhvZD0ncG9zdCcgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgPCEtLSB7JSBjc3JmX3Rva2VuICV9IC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHt7IGZvcm0uZGF0YXNldDF8YXNfY3Jpc3B5X2ZpZWxkIH19IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQyfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8Yj5TVEFUSVNUSUNTPC9iPjxicj48YnI+XG4gICAgICAgICAgICAgICAgPGI+Y3JpdGljYWwgdDo8L2I+IDxzcGFuIGlkPVwiY3JpdF90X3ZhbHVlXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnNpZyBsZXZlbCAoJiM5NDU7KTo8L2I+IDxzcGFuIGlkPVwic2lnLWxldmVsXCI+e3sgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPGI+dC12YWx1ZTo8L2I+IDxzcGFuIGlkPVwidF92YWx1ZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGI+cC12YWx1ZTo8L2I+IHt7IHRoaXMuc3RvcmUuc3RhdGUucF92YWx1ZSB9fTxicj5cbiAgICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmRmOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmRmIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIDxiPmVmZmVjdCBzaXplOjwvYj4ge3sgdGVzdF9yZXN1bHRzLmVmZmVjdF9zaXplIH19PGJyPiAtLT5cbiAgICAgICAgICAgICAgICA8Yj5uY3A6PC9iPiA8c3BhbiBpZD1cIm5jcFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUubmNwIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8YnI+PGJyPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QW5hbHl6ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIG9uY2xpY2s9XCJjbGVhckZvcm0oKVwiPkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4OyBwYWRkaW5nOjEwcHg7IG1pbi13aWR0aDozMDBweDtcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAxPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5uIH19PGJyPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGExLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGExLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48Yj5Hcm91cCAyPC9iPjxicj48L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIubWVhbiB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMi5uIH19PGJyPlxuICAgICAgICAgICAgICA8IS0tIHt7IGRhdGEyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgIHt7IGRhdGEyLnNkIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5uIH19PGJyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiU21hbGxTY3JlZW5cIj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICA8Yj5NZWFuPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+U0Q8L2I+PGJyPlxuICAgICAgICAgICAgICA8Yj5OPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwhLS0gY2xvc2UgZW50ZXItZGF0YSBkaXYgLS0+XG4gICAgICAgIDxwPjwvcD48YnI+XG4gICAgICA8L2Rpdj4gPCEtLSBjb2x1bW4gZW5kIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG5cbiAgICAgIDwhLS0geyUgaWYgdGVzdF9yZXN1bHRzICV9IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmJlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMVwiIGNoZWNrZWQ+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTFcIj5IeXBvdGhlc2lzIFRlc3Rpbmc8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRhYnNcIiBpZD1cInRhYi1uYXYtMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0yXCI+UFBWPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtM1wiPlJPQzwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxIeXBvdGhlc2lzQ29tcG9uZW50IC8+IFxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBoeXBvdGhlc2lzIHRlc3RpbmcgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8UFBWQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFBQViAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgICAgIDxST0NDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgUk9DIC0tPlxuXG4gICAgICAgIDwvZGl2PiA8IS0tIGVuZCB0YWJzIC0tPlxuICAgICAgPC9kaXY+ICA8IS0tIGVuZCB0YWJiZWQgLS0+XG4gICAgICAgIFxuICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cbiAgICA8L2Rpdj4gPCEtLSBlbmQgY29sdW1uIC0tPlxuICA8L2Rpdj4gPCEtLSBlbmQgcm93IC0tPlxuXG5cbiAgICA8ZGl2IGlkPVwiU21hbGxTY3JlZW5cIiBzdHlsZT1cImhlaWdodDogMTIwMHB4O1wiPiAgPCEtLSBidWZmZXIgc3BhY2UgZm9yIHNtYWxsIHNjcmVlbnMgLS0+XG4gICAgPC9kaXY+XG4gICAgPGJyPjxicj48YnI+XG4gIDwvZGl2PlxuXG5cblxuICA8ZGl2IGlkPVwiQmxhY2tXaW5kb3dcIj5cblxuICAgIDxhIG5hbWU9XCJtb3JlLWluZm9cIj48L2E+XG4gICAgPGRpdiBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgPGg0Pk1vcmUgaW5mb3JtYXRpb248L2g0PlxuXG4gICAgICBUaGUgV2VsY2gncyA8aT50PC9pPi10ZXN0LCBvciB1bmVxdWFsIHZhcmlhbmNlcyA8aT50PC9pPi10ZXN0LCBjYW4gdGVzdCBoeXBvdGhlc2VzIHN1Y2ggYXMgd2hldGhlciB0aGUgbWVhbnMgb2YgdHdvIGluZGVwZW5kZW50IG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHBvcHVsYXRpb25zIGFyZSBlcXVhbC4gV2hpbGUgdGhlIGNvbW1vbmx5LXVzZWQgU3R1ZGVudCA8aT50PC9pPi10ZXN0IHJlcXVpcmVzIHRoYXQgdGhlIHR3byBzYW1wbGVzIHNoYXJlIGVxdWFsIHZhcmlhbmNlcyBhbmQgZXF1YWwgc2FtcGxlIHNpemVzLCB0aGUgV2VsY2gncyA8aT50PC9pPi10ZXN0IGRvZXMgbm90IGhhdmUgdGhpcyByZXF1aXJlbWVudC4gUmVzZWFyY2hlcnMgYXJndWUgdGhhdCB0aGUgV2VsY2gncyA8aT50PC9pPi10ZXN0IGlzIG1vcmUgdmVyc2F0aWxlIGFuZCBzaG91bGQgaW5zdGVhZCBiZSB1c2VkIGJ5IGRlZmF1bHQuPHN1cD4xLDI8L3N1cD5cbiAgICAgIDxicj48YnI+XG4gICAgICBTdGF0aXN0aWNhbCByaWdvciBjYW4gYmUgYWNoaWV2ZWQgd2l0aCA8aT50PC9pPi10ZXN0cywgeWV0IHRoZSBzaWduaWZpY2FuY2UgbGV2ZWwgaXMgc2V0IGFyYml0cmFyaWx5LiBXaGlsZSBsb3dlcmluZyBzaWduaWZpY2FuY2UgbGV2ZWxzIG1pdGlnYXRlcyBmYWxzZSBwb3NpdGl2ZXMgKCYjOTQ1OyksIHRoZSBwcm9iYWJpbGl0eSBvZiBmYWxzZSBuZWdhdGl2ZXMgKCYjOTQ2OykgaW5jcmVhc2VzLCBhbmQgdGVzdHMgbWF5IGZhaWwgdG8gZGV0ZWN0IGV4aXN0aW5nIGVmZmVjdHMuPHN1cD4zPC9zdXA+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuXG5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJXaGl0ZVdpbmRvd1wiPlxuXG4gICAgICA8aDQ+UmVmZXJlbmNlczwvaDQ+XG5cbiAgICAgIDEuIERhaGlydSwgVC4gUC12YWx1ZSwgYSB0cnVlIHRlc3Qgb2Ygc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlPyBBIGNhdXRpb25hcnkgbm90ZS4gPGk+QW5uYWxzIG9mIEliYWRhbiBQb3N0Z3JhZHVhdGUgTWVkaWNpbmUuPC9pPiAyMDA4LCA8aT42PC9pPigxKTogMjHigJMyNi5cbiAgICAgIDxicj5cbiAgICAgIDIuIERlbGFjcmUsIE0uOyBMYWtlbnMsIEQuOyBMZXlzLCBDLiBXaHkgUHN5Y2hvbG9naXN0cyBTaG91bGQgYnkgRGVmYXVsdCBVc2UgV2VsY2gncyB0LXRlc3QgSW5zdGVhZCBvZiBTdHVkZW50J3MgdC10ZXN0LiA8aT5JbnRlcm5hdGlvbmFsIFJldmlldyBvZiBTb2NpYWwgUHN5Y2hvbG9neS48L2k+IDIwMTcsIDxpPjMwPC9pPigxKSwgOTLigJMxMDEuXG4gICAgICA8YnI+XG4gICAgICAzLiBCZW5qYW1pbiwgRC5KLjsgQmVyZ2VyLCBKLk8uOyBKb2hhbm5lc3NvbiwgTS4gZXQgYWwuIFJlZGVmaW5lIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZS4gPGk+TmF0dXJlIEh1bWFuIEJlaGF2aW91ci48L2k+IDIwMTgsIDxpPjI8L2k+LCA24oCTMTAuXG4gICAgICA8YnI+XG4gICAgICA0LiBDb2xxdWhvdW4sIEQuIEFuIGludmVzdGlnYXRpb24gb2YgdGhlIGZhbHNlIGRpc2NvdmVyeSByYXRlIGFuZCB0aGUgbWlzaW50ZXJwcmV0YXRpb24gb2YgcC12YWx1ZXMuIDxpPlJveWFsIFNvY2lldHkgT3BlbiBTY2llbmNlLjwvaT4gMjAxNCwgPGk+MTwvaT4oMyk6IDE0MDIxNi5cblxuICA8L2Rpdj4gIDwhLS0gY29udGFpbmVyIC0tPiAgIFxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJ2pxdWVyeS11aS1zbGlkZXInO1xuLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnICAvLyBucG0gaW5zdGFsbCBjaGFydC5qc0AyLjkuNCwgdGhlbiB0cmllZCAyLjkuMy4gc28sZSBzYXkgMi45LjQgZG9lc24ndCB3b3JrLlxuaW1wb3J0IGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uIGZyb20gXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7IC8vIG5wbSBpbnN0YWxsIGNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25AMC41LjcgLS1zYXZlICAgIDw8PCB1c2VkIHRoaXMuIG5lY2Vzc2FyeT9cbi8vIGltcG9ydCAqIGFzIG1hdGggZnJvbSAnbWF0aGpzJztcbmltcG9ydCB0dGVzdENoYXJ0RGF0YSBmcm9tICcuL3R0ZXN0LWNoYXJ0LWRhdGEuanMnXG5pbXBvcnQgd2VsY2hzIGZyb20gJ0Avd2VsY2hzJztcblxuXG5pbXBvcnQgSHlwb3RoZXNpc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvSHlwb3RoZXNpc0NvbXBvbmVudC52dWUnXG5pbXBvcnQgUFBWQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9QUFZDb21wb25lbnQudnVlJ1xuaW1wb3J0IFJPQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUk9DQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJyBcblxuLy8gc3RvcmUuY29tbWl0KCdpbmNyZW1lbnQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlLFxuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIEh5cG90aGVzaXNDb21wb25lbnQsXG4gICAgUFBWQ29tcG9uZW50LFxuICAgIFJPQ0NvbXBvbmVudCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICB0dGVzdENoYXJ0RGF0YTogdHRlc3RDaGFydERhdGEsXG4gICAgICBzdG9yZWNvdW50OiBzdG9yZS5zdGF0ZS5jb3VudCxcbiAgICAgIHR0ZXN0Q2hhcnQ6IG51bGwsXG4gICAgICB0aHVtYjogbnVsbCxcbiAgICAgIHNsaWRlclZhbHVlOiBudWxsLFxuICAgICAgc2xpZGVyRWxlbTogbnVsbCxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID4gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gLTMuMjE1NTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTUFMTEVSXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUgPSAzLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQklHR0VSXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZGVjcmVtZW50Jyk7XG4gICAgICAgICAgc3RvcmUuY29tbWl0KCd1cGRhdGVTdGF0ZScpO1xuICAgICAgICAgIHRoaXMuc3RvcmVjb3VudCsrO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBcIkkgaGF2ZSBjaGFuZ2VkIVwiO1xuICAgIH0sXG4gICAgZHJhd0FscGhhQ3VydmU6IGZ1bmN0aW9uKGdyb3VwMSwgY3JpdF90X3ZhbHVlKXsgIFxuICAgICAgbGV0IGFscGhhX2N1cnZlID0gd2VsY2hzLmdldEFscGhhQ3VydmUoZ3JvdXAxLCBjcml0X3RfdmFsdWUpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzNdLmRhdGEgPSBhbHBoYV9jdXJ2ZTsgIC8vIHdhcyBbM11bJ2RhdGEnXVxuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgZHJhd0JldGFDdXJ2ZTogZnVuY3Rpb24gKGdyb3VwMiwgY3JpdF90X3ZhbHVlLCBuY3ApeyAgXG4gICAgICBsZXQgYmV0YV9jdXJ2ZSA9IHdlbGNocy5kcmF3QmV0YUN1cnZlIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1s0XS5kYXRhID0gYmV0YV9jdXJ2ZTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgY29udmVydENoYXJ0WFRvU2NyZWVuWDogZnVuY3Rpb24gKHgsIGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgeDEsIHgyLCBvZmZzZXQpe1xuICAgIC8vcmV0dXJuIG1hdGgucm91bmQoKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0LDApO1xuICAgIHJldHVybiAoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQ7XG4gICAgfSxcblxuICAgIGNvbnZlcnRTY3JlZW5YVG9DaGFydFg6IGZ1bmN0aW9uICh4LCB4MSwgeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJPZmZzZXRXaWR0aCl7XG4gICAgICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgICB9LFxuXG4gICAgY29udmVydFJhbmdlU2xpZGVyWFRvQ2hhcnRYOiBmdW5jdGlvbiAocnNfeCwgcnNfeDEsIHJzX3gyLCBweF94MSwgcHhfeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJXaWR0aCl7XG4gICAgICBsZXQgcnNfcHJvcCA9IHJzX3gvKHJzX3gyLXJzX3gxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicnNfcHJvcFwiLCByc19wcm9wKTtcbiAgICAgIGxldCBweF9vZmZzZXQgPSAtKHJzX3Byb3AtMC41KSpOdW1iZXIodGh1bWJXaWR0aCk7IFxuICAgICAgY29uc29sZS5sb2coXCJweF9vZmZzZXRcIiwgcHhfb2Zmc2V0KTtcbiAgICAgIC8vIGxldCBweF9wcm9wID0gKHJzX3Byb3AqKHB4X3gyIC0gcHhfeDEpICsgcHhfb2Zmc2V0KS8ocHhfeDIgLSBweF94MSk7XG4gICAgICBsZXQgcHhfcHJvcCA9IHJzX3Byb3AgKyBweF9vZmZzZXQvKHB4X3gyLXB4X3gxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHhfcHJvcFwiLCBweF9wcm9wKTtcbiAgICAgIHJldHVybiAgcHhfcHJvcCooY2hhcnRfeDItY2hhcnRfeDEpICsgY2hhcnRfeDE7XG4gICAgfSxcblxuXG4gICAgc2xpZGVmdW5jKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIlNMSURFRlVOQ1wiLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9taW4sIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21heCk7XG4gICAgICBjb25zb2xlLmxvZyhOdW1iZXIodGhpcy5zbGlkZVZhbHVlKSk7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgICB2YXIgeDEgPSBOdW1iZXIocG9pbnRzWzBdLl9tb2RlbC54KTtcbiAgICAgIHZhciB4MiA9IE51bWJlcihwb2ludHNbMV0uX21vZGVsLngpO1xuICAgICAgbGV0IHNsaWRldmFsID0gTnVtYmVyKHRoaXMuc2xpZGVWYWx1ZSk7XG4gICAgICBsZXQgdGh1bWJXaWR0aCA9IDE1O1xuICAgICAgbGV0IG5ld19jcml0X3QgPSB0aGlzLmNvbnZlcnRSYW5nZVNsaWRlclhUb0NoYXJ0WChzbGlkZXZhbCwgMCwgMTAwLCB4MSwgeDIsIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21pbiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWF4LCB0aHVtYldpZHRoKTsgXG4gICAgICBjb25zb2xlLmxvZyhcIkNPTlZFUlQ6XCIsIG5ld19jcml0X3QpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSBuZXdfY3JpdF90O1xuICAgICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlU3RhdGU6IGZ1bmN0aW9uKCl7ICAvL3VwZGF0ZVN0YXRlOiBmdW5jdGlvbihjcml0X3RfdmFsdWUsIGRmLCBuY3ApXG4gICAgICAvLyBjYWxjdWxhdGlvbnNcbiAgICAgIC8vIGNyaXRfdF92YWx1ZV9iZXRhID0gY3JpdF90X3ZhbHVlIC0gbmNwOyAgLy8gbmNwOiBub24tY2VudHJhbGl0eSBwYXJhbWV0ZXJcbiAgICAgIC8vIGFscGhhID0gZ2V0QWxwaGEoY3JpdF90X3ZhbHVlLCBkZik7XG4gICAgICAvLyBiZXRhID0gZ2V0QmV0YShjcml0X3RfdmFsdWVfYmV0YSwgZGYpO1xuXG4gICAgICAvLyAvLyB1cGRhdGUgZGlzcGxheVxuICAgICAgLy8gZWxlbSgnY3JpdF90X3ZhbHVlJykuaW5uZXJUZXh0ID0gY3JpdF90X3ZhbHVlO1xuICAgICAgLy8gZWxlbSgnc2lnLWxldmVsJykuaW5uZXJUZXh0ID0gcm91bmQoYWxwaGEpO1xuXG4gICAgICAvLyBsaW5lQ2hhcnQub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdWyd2YWx1ZSddID0gY3JpdF90X3ZhbHVlO1xuICAgICAgLy8gbGluZUNoYXJ0LnVwZGF0ZSgpO1xuXG4gICAgICAvLyBkcmF3QWxwaGFDdXJ2ZShncm91cDEsIGNyaXRfdF92YWx1ZSk7XG4gICAgICAvLyBkcmF3QmV0YUN1cnZlKGdyb3VwMiwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMuZHJhd0FscGhhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMuZHJhd0JldGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUsdGhpcy5zdG9yZS5zdGF0ZS5uY3ApO1xuXG4gICAgICAvLyB1cGRhdGVDb25mdXNpb25NYXRyaXgoYWxwaGEsIGJldGEpO1xuICAgICAgLy8gc2hvd1JlamVjdE9yTm90UmVqZWN0KGNyaXRfdF92YWx1ZSwgdF92YWx1ZSk7XG4gICAgICAvLyB1cGRhdGVQcm9iYWJpbGl0eVRyZWUoKTtcbiAgICB9LFxuXG4gICAgaW5pdFRodW1iKCl7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy50dGVzdENoYXJ0LmNoYXJ0LmdldERhdGFzZXRNZXRhKDApLmRhdGE7XG4gICAgICB2YXIgeDEgPSBwb2ludHNbMF0uX21vZGVsLng7XG4gICAgICB2YXIgeDIgPSBwb2ludHNbMV0uX21vZGVsLng7XG4gICAgICB0aGlzLnNsaWRlckVsZW0uc3R5bGUubGVmdCA9IHgxICsgXCJweFwiO1xuICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLndpZHRoID0geDIgLSB4MSArIFwicHhcIjtcbiAgICB9LFxuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCI1MXB4XCI7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBDaGFydC5wbHVnaW5zLnJlZ2lzdGVyKGNoYXJ0anNQbHVnaW5Bbm5vdGF0aW9uKVxuICAgIHRoaXMudHRlc3RDaGFydCA9IG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHRlc3QtY2hhcnQnKSwgdGhpcy50dGVzdENoYXJ0RGF0YSk7XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBbe3g6IC00Ljc1MywgeTogMH0sIHt4OiA3LjIzMiwgeTogMH1dO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MubWluID0gdGhpcy5zdG9yZS5zdGF0ZS5heGVzLm1pbjtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1heCA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5tYXg7IFxuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MubWF4ID0gMC41O1xuXG5cbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS5sYWJlbC5jb250ZW50ID0gJ3AgPSAnICsgdGhpcy5zdG9yZS5zdGF0ZS5wX3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzBdLnZhbHVlID0gdGhpcy5zdG9yZS5zdGF0ZS50X3ZhbHVlO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEub3B0aW9ucy5hbm5vdGF0aW9uLmFubm90YXRpb25zWzFdLmNvbnRlbnQgPSAnXFx1MDNCMScgKyB0aGlzLnN0b3JlLnN0YXRlLmFscGhhOyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlO1xuICAgIFxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5kYXRhLmRhdGFzZXRzWzFdLmRhdGEgPSB0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMS5kaXN0O1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1syXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnQudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgdGhpcy5kcmF3QmV0YUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSx0aGlzLnN0b3JlLnN0YXRlLm5jcCk7XG5cblxuICAgIHRoaXMuc2xpZGVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVJhbmdlJyk7XG4gICAgdGhpcy5pbml0VGh1bWIoKTtcblxuICB9LFxuXG59XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLnNsaWRlY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cbi5zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAvKiBPdmVycmlkZSBkZWZhdWx0IENTUyBzdHlsZXMgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cbiAgaGVpZ2h0OiAxNXB4OyAvKiBTcGVjaWZpZWQgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7IC8qIEdyZXkgYmFja2dyb3VuZCAqL1xuICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICAvKm9wYWNpdHk6IDAuNzsqLyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRvcDogKzVweDtcblxufVxuLyogLnNsaWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjRTBFMEUwLCAjRUVFRUVFKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuXG5cbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xuLnNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbn1cblxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKjI1cHggICBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC8qIHRvcDogLTVweDsgKi9cbiAgLyogYm90dG9tOiAtMnB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxlZnQ6IDBweDtcblxufVxuXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xuXG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG5cbi50aHVtYiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogLTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xufVxuXG4vKiAjYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59ICovXG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYTpsaW5rLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4jQ29udGFpbmVyV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDcwcHg7XG59XG5cbiNXaGl0ZVdpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDgwcHggNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jQmxhY2tXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI09yYW5nZVdpbmRvd3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvd2VsY2hzLnBuZ1wiKTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgKi9cbiAgLyogaGVpZ2h0OiA1MDBweDsgKi9cblxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cblxuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjNlMDA7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMjBweCA1MHB4IDEyMHB4IDUwcHg7XG4gIC8qIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7ICovXG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4jdGl0bGVuYW1le1xuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgLyogcGFkZGluZzogMHB4IDBweCAwcHggMTAwcHg7ICovXG4gIC8qIG1hcmdpbi1ib3R0b206LTEyMHB4ICovXG59XG4jdGl0bGVuYW1lLXN1YntcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDcwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDsgIC8qIHByZXZpb3VzbHkgZmY3MDQzICovXG59XG5cblxuLmJveCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4uYXN0ZXJpc2tGaWVsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIC5zbGlkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gKi9cbi8qIHdpZHRoOiA1MjVweDsgKi9cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uZXJyb3JfYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cblxuLyogQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiOyAqL1xuXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQzZERTtcbn1cblxuLnRhYmJlZCB7XG4vKiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bzsgICovXG59XG5cbi50YWJiZWQgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJiZWQgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4udGFiYmVkID4gbGFiZWw6aG92ZXIsXG4udGFiYmVkID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLnRhYnMge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4udGFicyA+IGRpdiB7XG4gIC8qIHdpZHRoOiA3MDBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzZTAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG5cbiN0YWItbmF2LTE6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDEpLFxuI3RhYi1uYXYtMjpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMil7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4jdGFiLW5hdi0zOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgzKXtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMHB4O1xufVxuLmdyaWQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgIC8qcmdiYSgwLCAwLCAwLCAwLjgpOyovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uZGlhZ3JhbS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbi5lbnRlci1kYXRhe1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4vKiBoaWRlIGZvciBsYXJnZXIgc2NyZWVucyAqL1xuI1NtYWxsU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIHNob3cgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICNTbWFsbFNjcmVlbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLyogcmVtb3ZlIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjQ29udGFpbmVyV2luZG93e1xuICAgIHBhZGRpbmc6IDUwcHggNXB4IDUwcHggNXB4O1xuICB9XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f7d09ec35ade1dd7"; }
/******/ }();
/******/ 
/******/ }
);
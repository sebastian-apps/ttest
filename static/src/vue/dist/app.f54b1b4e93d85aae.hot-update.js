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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttest-chart-data.js */ \"./src/ttest-chart-data.js\");\n/* harmony import */ var _welchs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/welchs */ \"./src/welchs.js\");\n/* harmony import */ var _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HypothesisComponent.vue */ \"./src/components/HypothesisComponent.vue\");\n/* harmony import */ var _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PPVComponent.vue */ \"./src/components/PPVComponent.vue\");\n/* harmony import */ var _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ROCComponent.vue */ \"./src/components/ROCComponent.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n// import slider from 'jquery-ui-slider';\n// import $ from \"jquery\";\n\n // npm install chart.js@2.9.4, then tried 2.9.3. so,e say 2.9.4 doesn't work.\n // npm install chartjs-plugin-annotation@0.5.7 --save    <<< used this. necessary?\n// import * as math from 'mathjs';\n\n\n\n\n\n\n\n// store.commit('increment');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  name: 'App',\n  components: {\n    HypothesisComponent: _components_HypothesisComponent_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    PPVComponent: _components_PPVComponent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    ROCComponent: _components_ROCComponent_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      store: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      ttestChartData: _ttest_chart_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      storecount: _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.count,\n      ttestChart: null,\n      thumb: null,\n      sliderValue: null,\n      sliderElem: null\n    };\n  },\n  methods: {\n    myFunction: function () {\n      if (this.store.state.crit_t_value > this.store.state.t_value) {\n        this.store.state.crit_t_value = -3.2155;\n        console.log(\"SMALLER\");\n      } else {\n        this.store.state.crit_t_value = 3.2155;\n        console.log(\"BIGGER\");\n      }\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('decrement');\n      _store_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].commit('updateState');\n      this.storecount++;\n      document.getElementById(\"demo\").innerHTML = \"I have changed!\";\n    },\n    drawAlphaCurve: function (group1, crit_t_value) {\n      let alpha_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAlphaCurve(group1, crit_t_value);\n      this.ttestChartData.data.datasets[3].data = alpha_curve; // was [3]['data']\n      this.ttestChart.update();\n    },\n    drawBetaCurve: function (group2, crit_t_value, ncp) {\n      let beta_curve = _welchs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getBetaCurve(group2, crit_t_value, ncp);\n      this.ttestChartData.data.datasets[4].data = beta_curve;\n      this.ttestChart.update();\n    },\n    convertChartXToScreenX: function (x, chart_x_min, chart_x_max, x1, x2, offset) {\n      //return math.round((((x - chart_x_min)/(chart_x_max - chart_x_min))*(x2-x1)) - offset,0);\n      return (x - chart_x_min) / (chart_x_max - chart_x_min) * (x2 - x1) - offset;\n    },\n    convertScreenXToChartX: function (x, x1, x2, chart_x1, chart_x2, thumbOffsetWidth) {\n      return (x + thumbOffsetWidth / 2) / (x2 - x1) * (chart_x2 - chart_x1) + chart_x1;\n    },\n    convertRangeSliderXToChartX: function (rs_x, rs_x1, rs_x2, px_x1, px_x2, chart_x1, chart_x2, thumbWidth) {\n      let rs_prop = rs_x / (rs_x2 - rs_x1);\n      console.log(\"rs_prop\", rs_prop);\n      let px_offset = -(rs_prop - 0.5) * Number(thumbWidth);\n      console.log(\"px_offset\", px_offset);\n      let px_prop = rs_prop + px_offset / (px_x2 - px_x1);\n      console.log(\"px_prop\", px_prop);\n      return px_prop * (chart_x2 - chart_x1) + chart_x1;\n    },\n    slidefunc() {\n      console.log(\"SLIDEFUNC\", this.store.state.axes.x_min, this.store.state.axes.x_max);\n      console.log(Number(this.slideValue));\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = Number(points[0]._model.x);\n      var x2 = Number(points[1]._model.x);\n      let slideval = Number(this.slideValue);\n      let thumbWidth = 15;\n      this.store.state.crit_t_value = this.convertRangeSliderXToChartX(slideval, 0, 100, x1, x2, this.store.state.axes.x_min, this.store.state.axes.x_max, thumbWidth);\n      console.log(\"CONVERT:\", this.store.state.crit_t_value);\n      this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n      this.ttestChart.update();\n    },\n    updateState: function () {\n      //updateState: function(crit_t_value, df, ncp)\n      // calculations\n      // crit_t_value_beta = crit_t_value - ncp;  // ncp: non-centrality parameter\n      // alpha = getAlpha(crit_t_value, df);\n      // beta = getBeta(crit_t_value_beta, df);\n\n      // // update display\n      // elem('crit_t_value').innerText = crit_t_value;\n      // elem('sig-level').innerText = round(alpha);\n\n      // lineChart.options.annotation.annotations[1]['value'] = crit_t_value;\n      // lineChart.update();\n\n      // drawAlphaCurve(group1, crit_t_value);\n      // drawBetaCurve(group2, crit_t_value);\n      this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n      this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n\n      // updateConfusionMatrix(alpha, beta);\n      // showRejectOrNotReject(crit_t_value, t_value);\n      // updateProbabilityTree();\n    },\n\n    initThumb() {\n      var points = this.ttestChart.chart.getDatasetMeta(0).data;\n      var x1 = points[0]._model.x;\n      var x2 = points[1]._model.x;\n      this.sliderElem.style.left = x1 + \"px\";\n      this.sliderElem.style.width = x2 - x1 + \"px\";\n    }\n  },\n  computed: {\n    computedLeft: function () {\n      return \"51px\";\n    }\n  },\n  mounted() {\n    chart_js__WEBPACK_IMPORTED_MODULE_0___default().plugins.register((chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default()));\n    this.ttestChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('ttest-chart'), this.ttestChartData);\n    this.ttestChartData.data.datasets[0].data = [{\n      x: -4.753,\n      y: 0\n    }, {\n      x: 7.232,\n      y: 0\n    }];\n    this.ttestChartData.options.scales.xAxes[0].ticks.min = this.store.state.axes.min;\n    this.ttestChartData.options.scales.xAxes[0].ticks.max = this.store.state.axes.max;\n    this.ttestChartData.options.scales.yAxes[0].ticks.max = 0.5;\n    this.ttestChartData.options.annotation.annotations[0].label.content = 'p = ' + this.store.state.p_value;\n    this.ttestChartData.options.annotation.annotations[0].value = this.store.state.t_value;\n    this.ttestChartData.options.annotation.annotations[1].content = '\\u03B1' + this.store.state.alpha;\n    this.ttestChartData.options.annotation.annotations[1].value = this.store.state.crit_t_value;\n    this.ttestChartData.data.datasets[1].data = this.store.state.group1.dist;\n    this.ttestChartData.data.datasets[2].data = this.store.state.group2.dist;\n    this.ttestChart.update();\n    this.drawAlphaCurve(this.store.state.group1, this.store.state.crit_t_value);\n    this.drawBetaCurve(this.store.state.group2, this.store.state.crit_t_value, this.store.state.ncp);\n    this.sliderElem = document.getElementById('myRange');\n    this.initThumb();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQTRMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwL3NyYy9BcHAudnVlPzExYzQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gXG5cbiAgPGRpdiBjbGFzcz1cImhlcm8taW1hZ2VcIiBpZD1cIk9yYW5nZVdpbmRvd1wiPlxuICAgIDxkaXYgaWQ9XCJ0aXRsZW5hbWVcIj5XZWxjaCdzIDxpPnQ8L2k+LXRlc3Q8L2Rpdj5cbiAgICA8ZGl2IGlkPVwidGl0bGVuYW1lLXN1YlwiPmNhbGN1bGF0b3I8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG4gICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246anVzdGlmeVwiPlxuICAgICAgSXMgdGhlcmUgYSBzdGF0aXN0aWNhbGx5IHNpZ25pZmljYW50IGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGF0YXNldHM/PHA+PC9wPlxuICAgICAgTW92ZSB0aGUgc2xpZGVyIGFuZCBvYnNlcnZlIHRoZSBpbXBhY3Qgb2YgdGhlIHNpZ25pZmljYW5jZSBsZXZlbCBvbiB0aGUgcHJvYmFiaWxpdHkgb2YgbWFraW5nIHRoZSB3cm9uZyBkZWNpc2lvbi4gSW5wdXQgYW5kIGV4cGxvcmUgeW91ciBkYXRhc2V0cy5cbiAgICAgIFRoaXMgY2FsY3VsYXRvciBpcyBmb3Igb25lLXRhaWxlZCBXZWxjaCdzIDxpPnQ8L2k+LXRlc3RzLiBUaGUgZGF0YSBhcmUgYXNzdW1lZCB0byBiZSBub3JtYWxseSBkaXN0cmlidXRlZC5cbiAgICAgIDxhIGhyZWY9JyNtb3JlLWluZm8nPkZpbmQgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG4gICAgPC9kaXY+XG4gICAgPHA+PC9wPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIkNvbnRhaW5lcldpbmRvd1wiPlxuXG4gICAgPHA+PGJyPjxwPjxicj48cD48YnI+PHA+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblxuICAgICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3M9XCJzbGlkZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwidGh1bWJcIiBjbGFzcz1cInRodW1iXCIgb250b3VjaG1vdmU9XCJtb3ZlVGh1bWJNb2JpbGUoZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiPjwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cInRodW1iXCIgY2xhc3M9XCJ0aHVtYlwiIC8+XG4gICAgICAgIDwvZGl2PiAgLS0+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlY29udGFpbmVyXCIgaWQ9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCIgaWQ9XCJteVJhbmdlXCIgdi1tb2RlbD1cInNsaWRlVmFsdWVcIiB2LW9uOmlucHV0PVwic2xpZGVmdW5jXCIgdi1iaW5kOnN0eWxlPVwieyBsZWZ0OiBjb21wdXRlZExlZnQgfVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJ0dGVzdC1jaGFydFwiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjgwMFwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PGJyPjxwPjxicj5cbiAgICAgICAgPCEtLSB7JSBlbmRpZiAlfSAtLT5cblxuICAgICAgICA8Yj48c3BhbiBpZD1cIm1lc3NhZ2VcIj48L3NwYW4+PC9iPlxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVudGVyLWRhdGFcIj5cbiAgICAgICAgICA8Zm9ybSBpZD1cImRhdGEtZm9ybVwiIGFjdGlvbj1cInslIHVybCAnY29yZTp0dGVzdCcgJX1cIiBtZXRob2Q9J3Bvc3QnIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgIDwhLS0geyUgY3NyZl90b2tlbiAlfSAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB7eyBmb3JtLmRhdGFzZXQxfGFzX2NyaXNweV9maWVsZCB9fSAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZm9ybS5kYXRhc2V0Mnxhc19jcmlzcHlfZmllbGQgfX0gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPGI+U1RBVElTVElDUzwvYj48YnI+PGJyPlxuICAgICAgICAgICAgICAgIDxiPmNyaXRpY2FsIHQ6PC9iPiA8c3BhbiBpZD1cImNyaXRfdF92YWx1ZVwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlIH19PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8Yj5zaWcgbGV2ZWwgKCYjOTQ1Oyk6PC9iPiA8c3BhbiBpZD1cInNpZy1sZXZlbFwiPnt7IHRoaXMuc3RvcmUuc3RhdGUuYWxwaGEgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgICAgIDxiPnQtdmFsdWU6PC9iPiA8c3BhbiBpZD1cInRfdmFsdWVcIj57eyB0aGlzLnN0b3JlLnN0YXRlLnRfdmFsdWUgfX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxiPnAtdmFsdWU6PC9iPiB7eyB0aGlzLnN0b3JlLnN0YXRlLnBfdmFsdWUgfX08YnI+XG4gICAgICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5kZjo8L2I+IHt7IHRlc3RfcmVzdWx0cy5kZiB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8Yj5lZmZlY3Qgc2l6ZTo8L2I+IHt7IHRlc3RfcmVzdWx0cy5lZmZlY3Rfc2l6ZSB9fTxicj4gLS0+XG4gICAgICAgICAgICAgICAgPGI+bmNwOjwvYj4gPHNwYW4gaWQ9XCJuY3BcIj57eyB0aGlzLnN0b3JlLnN0YXRlLm5jcCB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgPGJyPjxicj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo1cHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPVwiY2xlYXJGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsgcGFkZGluZzoxMHB4OyBtaW4td2lkdGg6MzAwcHg7XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMTwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMS5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMS5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTEubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGI+R3JvdXAgMjwvYj48YnI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLm1lYW4gfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIuc2QgfX08YnI+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIubiB9fTxicj5cbiAgICAgICAgICAgICAgPCEtLSB7eyBkYXRhMi5tZWFuIH19PGJyPlxuICAgICAgICAgICAgICB7eyBkYXRhMi5zZCB9fTxicj5cbiAgICAgICAgICAgICAge3sgZGF0YTIubiB9fTxicj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cIlNtYWxsU2NyZWVuXCI+PGJyPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGI+TWVhbjwvYj48YnI+XG4gICAgICAgICAgICAgIDxiPlNEPC9iPjxicj5cbiAgICAgICAgICAgICAgPGI+TjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj48IS0tIGNsb3NlIGVudGVyLWRhdGEgZGl2IC0tPlxuICAgICAgICA8cD48L3A+PGJyPlxuICAgICAgPC9kaXY+IDwhLS0gY29sdW1uIGVuZCAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuXG4gICAgICA8IS0tIHslIGlmIHRlc3RfcmVzdWx0cyAlfSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiZWRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTFcIiBjaGVja2VkPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFiLW5hdi0xXCI+SHlwb3RoZXNpcyBUZXN0aW5nPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJzXCIgaWQ9XCJ0YWItbmF2LTJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhYi1uYXYtMlwiPlBQVjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFic1wiIGlkPVwidGFiLW5hdi0zXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YWItbmF2LTNcIj5ST0M8L2xhYmVsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8SHlwb3RoZXNpc0NvbXBvbmVudCAvPiBcbiAgICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgaHlwb3RoZXNpcyB0ZXN0aW5nIC0tPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxuICAgICAgICAgICAgPFBQVkNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PiA8IS0tIGVuZCBQUFYgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XG4gICAgICAgICAgICA8Uk9DQ29tcG9uZW50IC8+XG4gICAgICAgICAgPC9kaXY+IDwhLS0gZW5kIFJPQyAtLT5cblxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQgdGFicyAtLT5cbiAgICAgIDwvZGl2PiAgPCEtLSBlbmQgdGFiYmVkIC0tPlxuICAgICAgICBcbiAgICAgIDwhLS0geyUgZW5kaWYgJX0gLS0+XG4gICAgPC9kaXY+IDwhLS0gZW5kIGNvbHVtbiAtLT5cbiAgPC9kaXY+IDwhLS0gZW5kIHJvdyAtLT5cblxuXG4gICAgPGRpdiBpZD1cIlNtYWxsU2NyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDBweDtcIj4gIDwhLS0gYnVmZmVyIHNwYWNlIGZvciBzbWFsbCBzY3JlZW5zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxicj48YnI+PGJyPlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiBpZD1cIkJsYWNrV2luZG93XCI+XG5cbiAgICA8YSBuYW1lPVwibW9yZS1pbmZvXCI+PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgIDxoND5Nb3JlIGluZm9ybWF0aW9uPC9oND5cblxuICAgICAgVGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCwgb3IgdW5lcXVhbCB2YXJpYW5jZXMgPGk+dDwvaT4tdGVzdCwgY2FuIHRlc3QgaHlwb3RoZXNlcyBzdWNoIGFzIHdoZXRoZXIgdGhlIG1lYW5zIG9mIHR3byBpbmRlcGVuZGVudCBub3JtYWxseS1kaXN0cmlidXRlZCBwb3B1bGF0aW9ucyBhcmUgZXF1YWwuIFdoaWxlIHRoZSBjb21tb25seS11c2VkIFN0dWRlbnQgPGk+dDwvaT4tdGVzdCByZXF1aXJlcyB0aGF0IHRoZSB0d28gc2FtcGxlcyBzaGFyZSBlcXVhbCB2YXJpYW5jZXMgYW5kIGVxdWFsIHNhbXBsZSBzaXplcywgdGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCBkb2VzIG5vdCBoYXZlIHRoaXMgcmVxdWlyZW1lbnQuIFJlc2VhcmNoZXJzIGFyZ3VlIHRoYXQgdGhlIFdlbGNoJ3MgPGk+dDwvaT4tdGVzdCBpcyBtb3JlIHZlcnNhdGlsZSBhbmQgc2hvdWxkIGluc3RlYWQgYmUgdXNlZCBieSBkZWZhdWx0LjxzdXA+MSwyPC9zdXA+XG4gICAgICA8YnI+PGJyPlxuICAgICAgU3RhdGlzdGljYWwgcmlnb3IgY2FuIGJlIGFjaGlldmVkIHdpdGggPGk+dDwvaT4tdGVzdHMsIHlldCB0aGUgc2lnbmlmaWNhbmNlIGxldmVsIGlzIHNldCBhcmJpdHJhcmlseS4gV2hpbGUgbG93ZXJpbmcgc2lnbmlmaWNhbmNlIGxldmVscyBtaXRpZ2F0ZXMgZmFsc2UgcG9zaXRpdmVzICgmIzk0NTspLCB0aGUgcHJvYmFiaWxpdHkgb2YgZmFsc2UgbmVnYXRpdmVzICgmIzk0NjspIGluY3JlYXNlcywgYW5kIHRlc3RzIG1heSBmYWlsIHRvIGRldGVjdCBleGlzdGluZyBlZmZlY3RzLjxzdXA+Mzwvc3VwPlxuICAgIDwvZGl2PlxuICAgIDxicj5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiV2hpdGVXaW5kb3dcIj5cblxuICAgICAgPGg0PlJlZmVyZW5jZXM8L2g0PlxuXG4gICAgICAxLiBEYWhpcnUsIFQuIFAtdmFsdWUsIGEgdHJ1ZSB0ZXN0IG9mIHN0YXRpc3RpY2FsIHNpZ25pZmljYW5jZT8gQSBjYXV0aW9uYXJ5IG5vdGUuIDxpPkFubmFscyBvZiBJYmFkYW4gUG9zdGdyYWR1YXRlIE1lZGljaW5lLjwvaT4gMjAwOCwgPGk+NjwvaT4oMSk6IDIx4oCTMjYuXG4gICAgICA8YnI+XG4gICAgICAyLiBEZWxhY3JlLCBNLjsgTGFrZW5zLCBELjsgTGV5cywgQy4gV2h5IFBzeWNob2xvZ2lzdHMgU2hvdWxkIGJ5IERlZmF1bHQgVXNlIFdlbGNoJ3MgdC10ZXN0IEluc3RlYWQgb2YgU3R1ZGVudCdzIHQtdGVzdC4gPGk+SW50ZXJuYXRpb25hbCBSZXZpZXcgb2YgU29jaWFsIFBzeWNob2xvZ3kuPC9pPiAyMDE3LCA8aT4zMDwvaT4oMSksIDky4oCTMTAxLlxuICAgICAgPGJyPlxuICAgICAgMy4gQmVuamFtaW4sIEQuSi47IEJlcmdlciwgSi5PLjsgSm9oYW5uZXNzb24sIE0uIGV0IGFsLiBSZWRlZmluZSBzdGF0aXN0aWNhbCBzaWduaWZpY2FuY2UuIDxpPk5hdHVyZSBIdW1hbiBCZWhhdmlvdXIuPC9pPiAyMDE4LCA8aT4yPC9pPiwgNuKAkzEwLlxuICAgICAgPGJyPlxuICAgICAgNC4gQ29scXVob3VuLCBELiBBbiBpbnZlc3RpZ2F0aW9uIG9mIHRoZSBmYWxzZSBkaXNjb3ZlcnkgcmF0ZSBhbmQgdGhlIG1pc2ludGVycHJldGF0aW9uIG9mIHAtdmFsdWVzLiA8aT5Sb3lhbCBTb2NpZXR5IE9wZW4gU2NpZW5jZS48L2k+IDIwMTQsIDxpPjE8L2k+KDMpOiAxNDAyMTYuXG5cbiAgPC9kaXY+ICA8IS0tIGNvbnRhaW5lciAtLT4gICBcblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuLy8gaW1wb3J0IHNsaWRlciBmcm9tICdqcXVlcnktdWktc2xpZGVyJztcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJyAgLy8gbnBtIGluc3RhbGwgY2hhcnQuanNAMi45LjQsIHRoZW4gdHJpZWQgMi45LjMuIHNvLGUgc2F5IDIuOS40IGRvZXNuJ3Qgd29yay5cbmltcG9ydCBjaGFydGpzUGx1Z2luQW5ub3RhdGlvbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiOyAvLyBucG0gaW5zdGFsbCBjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uQDAuNS43IC0tc2F2ZSAgICA8PDwgdXNlZCB0aGlzLiBuZWNlc3Nhcnk/XG4vLyBpbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5pbXBvcnQgdHRlc3RDaGFydERhdGEgZnJvbSAnLi90dGVzdC1jaGFydC1kYXRhLmpzJ1xuaW1wb3J0IHdlbGNocyBmcm9tICdAL3dlbGNocyc7XG5cblxuaW1wb3J0IEh5cG90aGVzaXNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h5cG90aGVzaXNDb21wb25lbnQudnVlJ1xuaW1wb3J0IFBQVkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUFBWQ29tcG9uZW50LnZ1ZSdcbmltcG9ydCBST0NDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JPQ0NvbXBvbmVudC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZScgXG5cbi8vIHN0b3JlLmNvbW1pdCgnaW5jcmVtZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdG9yZSxcbiAgbmFtZTogJ0FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIeXBvdGhlc2lzQ29tcG9uZW50LFxuICAgIFBQVkNvbXBvbmVudCxcbiAgICBST0NDb21wb25lbnQsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgdHRlc3RDaGFydERhdGE6IHR0ZXN0Q2hhcnREYXRhLFxuICAgICAgc3RvcmVjb3VudDogc3RvcmUuc3RhdGUuY291bnQsXG4gICAgICB0dGVzdENoYXJ0OiBudWxsLFxuICAgICAgdGh1bWI6IG51bGwsXG4gICAgICBzbGlkZXJWYWx1ZTogbnVsbCxcbiAgICAgIHNsaWRlckVsZW06IG51bGwsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA+IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IC0zLjIxNTU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01BTExFUlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlID0gMy4yMTU1O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJJR0dFUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5jb21taXQoJ2RlY3JlbWVudCcpO1xuICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlU3RhdGUnKTtcbiAgICAgICAgICB0aGlzLnN0b3JlY291bnQrKztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gXCJJIGhhdmUgY2hhbmdlZCFcIjtcbiAgICB9LFxuICAgIGRyYXdBbHBoYUN1cnZlOiBmdW5jdGlvbihncm91cDEsIGNyaXRfdF92YWx1ZSl7ICBcbiAgICAgIGxldCBhbHBoYV9jdXJ2ZSA9IHdlbGNocy5nZXRBbHBoYUN1cnZlKGdyb3VwMSwgY3JpdF90X3ZhbHVlKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1szXS5kYXRhID0gYWxwaGFfY3VydmU7ICAvLyB3YXMgWzNdWydkYXRhJ11cbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRyYXdCZXRhQ3VydmU6IGZ1bmN0aW9uIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKXsgIFxuICAgICAgbGV0IGJldGFfY3VydmUgPSB3ZWxjaHMuZ2V0QmV0YUN1cnZlIChncm91cDIsIGNyaXRfdF92YWx1ZSwgbmNwKTtcbiAgICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1s0XS5kYXRhID0gYmV0YV9jdXJ2ZTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgY29udmVydENoYXJ0WFRvU2NyZWVuWDogZnVuY3Rpb24gKHgsIGNoYXJ0X3hfbWluLCBjaGFydF94X21heCwgeDEsIHgyLCBvZmZzZXQpe1xuICAgIC8vcmV0dXJuIG1hdGgucm91bmQoKCgoeCAtIGNoYXJ0X3hfbWluKS8oY2hhcnRfeF9tYXggLSBjaGFydF94X21pbikpKih4Mi14MSkpIC0gb2Zmc2V0LDApO1xuICAgIHJldHVybiAoKCh4IC0gY2hhcnRfeF9taW4pLyhjaGFydF94X21heCAtIGNoYXJ0X3hfbWluKSkqKHgyLXgxKSkgLSBvZmZzZXQ7XG4gICAgfSxcblxuICAgIGNvbnZlcnRTY3JlZW5YVG9DaGFydFg6IGZ1bmN0aW9uICh4LCB4MSwgeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJPZmZzZXRXaWR0aCl7XG4gICAgICByZXR1cm4gKHggKyAodGh1bWJPZmZzZXRXaWR0aC8yKSkvKHgyIC0geDEpKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgICB9LFxuXG4gICAgY29udmVydFJhbmdlU2xpZGVyWFRvQ2hhcnRYOiBmdW5jdGlvbiAocnNfeCwgcnNfeDEsIHJzX3gyLCBweF94MSwgcHhfeDIsIGNoYXJ0X3gxLCBjaGFydF94MiwgdGh1bWJXaWR0aCl7XG4gICAgICBsZXQgcnNfcHJvcCA9IHJzX3gvKHJzX3gyLXJzX3gxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicnNfcHJvcFwiLCByc19wcm9wKTtcbiAgICAgIGxldCBweF9vZmZzZXQgPSAtKHJzX3Byb3AtMC41KSpOdW1iZXIodGh1bWJXaWR0aCk7IFxuICAgICAgY29uc29sZS5sb2coXCJweF9vZmZzZXRcIiwgcHhfb2Zmc2V0KTtcbiAgICAgIGxldCBweF9wcm9wID0gcnNfcHJvcCArIHB4X29mZnNldC8ocHhfeDItcHhfeDEpO1xuICAgICAgY29uc29sZS5sb2coXCJweF9wcm9wXCIsIHB4X3Byb3ApO1xuICAgICAgcmV0dXJuICBweF9wcm9wKihjaGFydF94Mi1jaGFydF94MSkgKyBjaGFydF94MTtcbiAgICB9LFxuXG5cbiAgICBzbGlkZWZ1bmMoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0xJREVGVU5DXCIsIHRoaXMuc3RvcmUuc3RhdGUuYXhlcy54X21pbiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWF4KTtcbiAgICAgIGNvbnNvbGUubG9nKE51bWJlcih0aGlzLnNsaWRlVmFsdWUpKTtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLnR0ZXN0Q2hhcnQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoMCkuZGF0YTtcbiAgICAgIHZhciB4MSA9IE51bWJlcihwb2ludHNbMF0uX21vZGVsLngpO1xuICAgICAgdmFyIHgyID0gTnVtYmVyKHBvaW50c1sxXS5fbW9kZWwueCk7XG4gICAgICBsZXQgc2xpZGV2YWwgPSBOdW1iZXIodGhpcy5zbGlkZVZhbHVlKTtcbiAgICAgIGxldCB0aHVtYldpZHRoID0gMTU7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSA9IHRoaXMuY29udmVydFJhbmdlU2xpZGVyWFRvQ2hhcnRYKHNsaWRldmFsLCAwLCAxMDAsIHgxLCB4MiwgdGhpcy5zdG9yZS5zdGF0ZS5heGVzLnhfbWluLCB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMueF9tYXgsIHRodW1iV2lkdGgpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ09OVkVSVDpcIiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICAgIHRoaXMudHRlc3RDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVN0YXRlOiBmdW5jdGlvbigpeyAgLy91cGRhdGVTdGF0ZTogZnVuY3Rpb24oY3JpdF90X3ZhbHVlLCBkZiwgbmNwKVxuICAgICAgLy8gY2FsY3VsYXRpb25zXG4gICAgICAvLyBjcml0X3RfdmFsdWVfYmV0YSA9IGNyaXRfdF92YWx1ZSAtIG5jcDsgIC8vIG5jcDogbm9uLWNlbnRyYWxpdHkgcGFyYW1ldGVyXG4gICAgICAvLyBhbHBoYSA9IGdldEFscGhhKGNyaXRfdF92YWx1ZSwgZGYpO1xuICAgICAgLy8gYmV0YSA9IGdldEJldGEoY3JpdF90X3ZhbHVlX2JldGEsIGRmKTtcblxuICAgICAgLy8gLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAgIC8vIGVsZW0oJ2NyaXRfdF92YWx1ZScpLmlubmVyVGV4dCA9IGNyaXRfdF92YWx1ZTtcbiAgICAgIC8vIGVsZW0oJ3NpZy1sZXZlbCcpLmlubmVyVGV4dCA9IHJvdW5kKGFscGhhKTtcblxuICAgICAgLy8gbGluZUNoYXJ0Lm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXVsndmFsdWUnXSA9IGNyaXRfdF92YWx1ZTtcbiAgICAgIC8vIGxpbmVDaGFydC51cGRhdGUoKTtcblxuICAgICAgLy8gZHJhd0FscGhhQ3VydmUoZ3JvdXAxLCBjcml0X3RfdmFsdWUpO1xuICAgICAgLy8gZHJhd0JldGFDdXJ2ZShncm91cDIsIGNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLmRyYXdBbHBoYUN1cnZlKHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAxLCB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZSk7XG4gICAgICB0aGlzLmRyYXdCZXRhQ3VydmUodGhpcy5zdG9yZS5zdGF0ZS5ncm91cDIsIHRoaXMuc3RvcmUuc3RhdGUuY3JpdF90X3ZhbHVlLHRoaXMuc3RvcmUuc3RhdGUubmNwKTtcblxuICAgICAgLy8gdXBkYXRlQ29uZnVzaW9uTWF0cml4KGFscGhhLCBiZXRhKTtcbiAgICAgIC8vIHNob3dSZWplY3RPck5vdFJlamVjdChjcml0X3RfdmFsdWUsIHRfdmFsdWUpO1xuICAgICAgLy8gdXBkYXRlUHJvYmFiaWxpdHlUcmVlKCk7XG4gICAgfSxcblxuICAgIGluaXRUaHVtYigpe1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHRlc3RDaGFydC5jaGFydC5nZXREYXRhc2V0TWV0YSgwKS5kYXRhO1xuICAgICAgdmFyIHgxID0gcG9pbnRzWzBdLl9tb2RlbC54O1xuICAgICAgdmFyIHgyID0gcG9pbnRzWzFdLl9tb2RlbC54O1xuICAgICAgdGhpcy5zbGlkZXJFbGVtLnN0eWxlLmxlZnQgPSB4MSArIFwicHhcIjtcbiAgICAgIHRoaXMuc2xpZGVyRWxlbS5zdHlsZS53aWR0aCA9IHgyIC0geDEgKyBcInB4XCI7XG4gICAgfSxcblxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFwiNTFweFwiO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgQ2hhcnQucGx1Z2lucy5yZWdpc3RlcihjaGFydGpzUGx1Z2luQW5ub3RhdGlvbilcbiAgICB0aGlzLnR0ZXN0Q2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0ZXN0LWNoYXJ0JyksIHRoaXMudHRlc3RDaGFydERhdGEpO1xuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gW3t4OiAtNC43NTMsIHk6IDB9LCB7eDogNy4yMzIsIHk6IDB9XTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLm1pbiA9IHRoaXMuc3RvcmUuc3RhdGUuYXhlcy5taW47XG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5tYXggPSB0aGlzLnN0b3JlLnN0YXRlLmF4ZXMubWF4OyBcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLm1heCA9IDAuNTtcblxuXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMF0ubGFiZWwuY29udGVudCA9ICdwID0gJyArIHRoaXMuc3RvcmUuc3RhdGUucF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1swXS52YWx1ZSA9IHRoaXMuc3RvcmUuc3RhdGUudF92YWx1ZTtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLm9wdGlvbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1sxXS5jb250ZW50ID0gJ1xcdTAzQjEnICsgdGhpcy5zdG9yZS5zdGF0ZS5hbHBoYTsgXG4gICAgdGhpcy50dGVzdENoYXJ0RGF0YS5vcHRpb25zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbMV0udmFsdWUgPSB0aGlzLnN0b3JlLnN0YXRlLmNyaXRfdF92YWx1ZTtcbiAgICBcblxuICAgIHRoaXMudHRlc3RDaGFydERhdGEuZGF0YS5kYXRhc2V0c1sxXS5kYXRhID0gdGhpcy5zdG9yZS5zdGF0ZS5ncm91cDEuZGlzdDtcbiAgICB0aGlzLnR0ZXN0Q2hhcnREYXRhLmRhdGEuZGF0YXNldHNbMl0uZGF0YSA9IHRoaXMuc3RvcmUuc3RhdGUuZ3JvdXAyLmRpc3Q7XG4gICAgdGhpcy50dGVzdENoYXJ0LnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmF3QWxwaGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMSwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUpO1xuICAgIHRoaXMuZHJhd0JldGFDdXJ2ZSh0aGlzLnN0b3JlLnN0YXRlLmdyb3VwMiwgdGhpcy5zdG9yZS5zdGF0ZS5jcml0X3RfdmFsdWUsdGhpcy5zdG9yZS5zdGF0ZS5uY3ApO1xuXG5cbiAgICB0aGlzLnNsaWRlckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlSYW5nZScpO1xuICAgIHRoaXMuaW5pdFRodW1iKCk7XG5cbiAgfSxcblxufVxuXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbi5zbGlkZWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi8qIFRoZSBzbGlkZXIgaXRzZWxmICovXG4uc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsLXdpZHRoICovXG4gIGhlaWdodDogMTVweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgKi9cbiAgLypvcGFjaXR5OiAwLjc7Ki8gLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0b3A6ICs1cHg7XG5cbn1cbi8qIC5zbGlkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgI0UwRTBFMCwgI0VFRUVFRSk7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gKi9cblxuXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG59XG5cbi8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyoyNXB4ICAgU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAvKiB0b3A6IC01cHg7ICovXG4gIC8qIGJvdHRvbTogLTJweDsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsZWZ0OiAwcHg7XG5cbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXG4gIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cblxuXG4udGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IC01cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmM2UwMDtcbn1cblxuLyogI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSAqL1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuaDQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuI0NvbnRhaW5lcldpbmRvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA3MHB4O1xufVxuXG4jV2hpdGVXaW5kb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI0JsYWNrV2luZG93e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogODBweCA1MHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNPcmFuZ2VXaW5kb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL3dlbGNocy5wbmdcIik7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7ICovXG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG5cbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTAwOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTIwcHggNTBweCAxMjBweCA1MHB4O1xuICAvKiBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuI3RpdGxlbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwMHB4OyAqL1xuICAvKiBtYXJnaW4tYm90dG9tOi0xMjBweCAqL1xufVxuI3RpdGxlbmFtZS1zdWJ7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICAvKiBwYWRkaW5nOiAwcHggMHB4IDBweCAxMDBweDsgKi9cbiAgLyogbWFyZ2luLWJvdHRvbTotMTIwcHggKi9cbn1cblxuLm1vcmUtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjNlMDA7ICAvKiBwcmV2aW91c2x5IGZmNzA0MyAqL1xufVxuXG5cbi5ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuLmFzdGVyaXNrRmllbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiAuc2xpZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNFMEUwRTAsICNFRUVFRUUpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59ICovXG4vKiB3aWR0aDogNTI1cHg7ICovXG5cblxuLnRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmVycm9yX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbi8qIEBpbXBvcnQgXCJjb21wYXNzL2NzczNcIjsgKi9cblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUM2REU7XG59XG5cbi50YWJiZWQge1xuLyogIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87ICAqL1xufVxuXG4udGFiYmVkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiYmVkID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbn1cblxuLnRhYmJlZCA+IGxhYmVsOmhvdmVyLFxuLnRhYmJlZCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNmZjNlMDA7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cblxuLnRhYnMgPiBkaXYge1xuICAvKiB3aWR0aDogNzAwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmM2UwMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbn1cblxuXG4jdGFiLW5hdi0xOmNoZWNrZWQgfiAudGFicyA+IGRpdjpudGgtb2YtdHlwZSgxKSxcbiN0YWItbmF2LTI6Y2hlY2tlZCB+IC50YWJzID4gZGl2Om50aC1vZi10eXBlKDIpe1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuI3RhYi1uYXYtMzpjaGVja2VkIH4gLnRhYnMgPiBkaXY6bnRoLW9mLXR5cGUoMyl7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7ICAvKnJnYmEoMCwgMCwgMCwgMC44KTsqL1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmRpYWdyYW0tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZW50ZXItZGF0YXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogaGlkZSBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiNTbWFsbFNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBzaG93IGZvciBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjU21hbGxTY3JlZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI0NvbnRhaW5lcldpbmRvd3tcbiAgICBwYWRkaW5nOiA1MHB4IDVweCA1MHB4IDVweDtcbiAgfVxufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "da5c7b050b772b5f"; }
/******/ }();
/******/ 
/******/ }
);